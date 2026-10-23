"""Compile a documented, induced MaleCNS descending/VNC sensorimotor subgraph.

Reads the official Feather tables in record batches, without loading the 1 GB
weight table into a DataFrame. No synthetic neurons, edges, or gait are added.
"""
import argparse
import hashlib
import json
import time
from pathlib import Path

import numpy as np
import pandas as pd
import pyarrow as pa
import pyarrow.ipc as ipc
from scipy import sparse

FILES = {
    'body-annotations-male-cns-v1.0-minconf-0.5.feather': '2177e246113e4cfbf1e7772ec37c6da1955ff22e8063d0b1f833101f99a9a3b2',
    'body-neurotransmitters-male-cns-v1.0.feather': '95c9289220663abeb3409f3ad9e5a7f8a53f8093f5139d15502cd08da8879621',
    'connectome-weights-male-cns-v1.0-minconf-0.5.feather': 'e35da783d1c686b2b58b3b87cd6a403ae43bfcfba8bff28e08ef752c1a56afc1',
}
SIGNS = {'acetylcholine': 1, 'gaba': -1, 'glutamate': -1, 'histamine': -1}
MOTOR_TYPES = {
    'hip_positive': ['Sternal anterior rotator MN', 'Tergopleural/Pleural promotor MN'],
    'hip_negative': ['Sternal posterior rotator MN', 'Pleural remotor/abductor MN'],
    'thigh_positive': ['Tr flexor MN', 'Acc. tr flexor MN'],
    'thigh_negative': ['Tr extensor MN'],
    'calf_positive': ['Ti extensor MN'],
    'calf_negative': ['Ti flexor MN', 'Acc. ti flexor MN'],
}


def compile_graph(data_dir, output):
    started = time.monotonic()
    output.mkdir(parents=True, exist_ok=True)
    for name, expected in FILES.items():
        digest = hashlib.file_digest((data_dir/name).open('rb'), 'sha256').hexdigest()
        if digest != expected: raise ValueError('Source checksum mismatch: '+name)
        print('verified '+name, flush=True)
    ann = pd.read_feather(data_dir / list(FILES)[0])
    sc = ann.superclass.fillna('')
    selected = (ann.status == 'Traced') & (sc.str.startswith('vnc_') | sc.isin([
        'descending_neuron', 'ascending_neuron', 'sensory_ascending', 'efferent_ascending',
        'sensory_descending', 'efferent_descending']))
    neurons = ann[selected].copy().reset_index(drop=True)
    nt = pd.read_feather(data_dir / list(FILES)[1])
    best = nt.consensus_nt.where(nt.consensus_nt != 'unclear')
    best = best.fillna(nt.celltype_predicted_nt.where(nt.celltype_predicted_nt != 'unclear'))
    best = best.fillna(nt.predicted_nt.where(nt.predicted_nt != 'unclear'))
    neurons = neurons.merge(pd.DataFrame({'bodyId':nt.body, 'nt':best.fillna('unknown')}), on='bodyId', how='left')
    neurons['sign'] = neurons.nt.map(SIGNS).fillna(0).astype(np.float32)
    index = pd.Index(neurons.bodyId)
    pre_chunks, post_chunks, count_chunks = [], [], []
    with pa.memory_map(str(data_dir / list(FILES)[2]), 'r') as file:
        reader = ipc.open_file(file)
        for batch_id in range(reader.num_record_batches):
            batch = reader.get_batch(batch_id)
            pre = index.get_indexer(batch.column('body_pre').to_numpy())
            post = index.get_indexer(batch.column('body_post').to_numpy())
            counts = batch.column('weight').to_numpy()
            valid = (pre >= 0) & (post >= 0) & (counts >= 1)
            if valid.any():
                pre_chunks.append(pre[valid].astype(np.int32)); post_chunks.append(post[valid].astype(np.int32)); count_chunks.append(counts[valid].astype(np.float32))
            if batch_id % 100 == 0: print(f'batch {batch_id}/{reader.num_record_batches}', flush=True)
    pre,post,counts = np.concatenate(pre_chunks),np.concatenate(post_chunks),np.concatenate(count_chunks)
    n = len(neurons)
    raw = sparse.csr_matrix((counts,(post,pre)),shape=(n,n)); raw.sum_duplicates()
    signed = raw @ sparse.diags(neurons.sign.to_numpy())
    signed = signed.tocsr(); signed.eliminate_zeros()
    sparse.save_npz(output/'synapses.npz', signed)
    # Incoming target soma laterality estimates the side of afferents lacking one.
    sides = neurons.somaSide.fillna('').to_numpy()
    left = np.asarray(raw[sides=='L'].sum(axis=0)).ravel()
    right = np.asarray(raw[sides=='R'].sum(axis=0)).ravel()
    lateral = (left-right)/np.maximum(left+right,1)
    instance = neurons.instance.fillna('').astype(str)
    inferred_side = np.where(instance.str.endswith('_L'), 'L', np.where(instance.str.endswith('_R'),'R',np.where(lateral>.2,'L',np.where(lateral<-.2,'R','both'))))
    neurons['feedback_side'] = inferred_side
    classes = neurons['class'].fillna('').to_numpy()
    subclass = neurons.subclass.fillna('').to_numpy()
    nerves = neurons.entryNerve.fillna('').to_numpy()
    motor_groups = {}
    for leg in ['lf','lm','lr','rf','rm','rr']:
        family = {'f':'fl','m':'ml','r':'hl'}[leg[1]]
        mask = (neurons.superclass=='vnc_motor') & (neurons.subclass==family) & (neurons.somaSide==leg[0].upper())
        for channel, types in MOTOR_TYPES.items():
            ids = np.flatnonzero(mask & neurons.type.isin(types)).tolist()
            if not ids: raise ValueError('Unmapped motor channel: '+leg+'_'+channel)
            motor_groups[leg+'_'+channel] = ids
    nerves_to_leg = {'ProLN':'f','ProCN':'f','ProAN':'f','DProN':'f','VProN':'f','MesoLN':'m','MetaLN':'r'}
    sensory = []
    for i in range(n):
        if classes[i] != 'mechanosensory_proprioceptive' or nerves[i] not in nerves_to_leg: continue
        channel = {'chordotonal organ':'velocity','leg':'velocity','hair plate':'angle','campaniform sensilla':'load'}.get(subclass[i])
        if channel: sensory.append(dict(index=i, side=inferred_side[i], leg=nerves_to_leg[nerves[i]], channel=channel))
    stimulus = {
        'forward': np.flatnonzero(neurons.type.isin(['DNp09','DNa01','DNa03','DNb01','DNa04'])).tolist(),
        'backward': np.flatnonzero(neurons.type=='MDN').tolist(),
        'left': np.flatnonzero((neurons.type=='DNa02') & (neurons.somaSide=='L')).tolist(),
        'right': np.flatnonzero((neurons.type=='DNa02') & (neurons.somaSide=='R')).tolist(),
    }
    if not all(stimulus.values()): raise ValueError('Missing descending stimulus population')
    metadata = dict(dataset='MaleCNS v1.0', source='https://male-cns.janelia.org/download/', license='CC BY 4.0',
        scope='Traced descending + VNC sensorimotor induced subgraph; NOT a whole-brain model',
        neurons=n, edges=int(raw.nnz), fast_edges=int(signed.nnz), synapse_count=int(raw.sum()),
        superclass_counts=neurons.superclass.value_counts().to_dict(),
        source_sha256=FILES, motor_groups=motor_groups, motor_group_types=MOTOR_TYPES,
        stimulus=stimulus, sensory=sensory, motor_neurons=int(((neurons.superclass=='vnc_motor') & neurons.subclass.isin(['fl','ml','hl'])).sum()),
        mapped_motor_neurons=len(set(i for group in motor_groups.values() for i in group)),
        model_assumptions=['LIF point-neuron dynamics, fixed signed synapse counts', 'GABA/glutamate/histamine inhibitory inside CNS; unknown and monoamine fast signs zero',
            'Per-edge cap 60; same-type gain 0.1; DN-to-VNC gain 3; incoming normalization reference 5000',
            'Afferent side inferred from target soma laterality when annotations omit it',
            'Muscle-group to 3-DOF robot mapping is engineered and uncalibrated; no CPG in neural mode'])
    columns = ['bodyId','type','instance','somaSide','superclass','subclass','class','entryNerve','nt','sign','feedback_side']
    neurons[columns].to_json(output/'neurons.json', orient='records', force_ascii=False)
    (output/'metadata.json').write_text(json.dumps(metadata,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(dict(neurons=n,edges=raw.nnz,fast_edges=signed.nnz,motor_groups={k:len(v) for k,v in motor_groups.items()},sensory=len(sensory),seconds=time.monotonic()-started)),flush=True)


if __name__=='__main__':
    parser=argparse.ArgumentParser(); parser.add_argument('data',type=Path); parser.add_argument('output',type=Path)
    args=parser.parse_args();compile_graph(args.data,args.output)
