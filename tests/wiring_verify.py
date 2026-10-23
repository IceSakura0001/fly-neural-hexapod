"""Map membership and window highlights must match actual LIF spike deltas."""
import copy
import json

import numpy as np

from backend.neural import NeuralController


def verify():
    neural=NeuralController();mapping=neural.wiring_map()
    assert mapping['whole_brain_simulated'] is False
    assert len(mapping['pools'])==36 and len(mapping['dn'])==4
    assert mapping['mapped_motor_neurons']==220 and mapping['sensory_neurons']==705
    for kind,groups in [('pools',neural.groups),('dn',neural.dn)]:
        for key,indices in groups.items():
            assert mapping[kind][key]['count']==len(indices)
            assert [c['body_id'] for c in mapping[kind][key]['cells']]==[neural.neurons[int(i)]['bodyId'] for i in indices]
    previous=neural.counts.copy();windows=[]
    for window in range(8):
        for _ in range(10):
            neural.control('forward',np.zeros(18),np.zeros(18),np.zeros(6),np.zeros(18),intent=[1.,0.])
        delta=neural.counts-previous;value=neural.state()['wiring_window']
        assert value['duration_ms']==100. and value['end_ms']==(window+1)*100.
        assert value['dn_spikes']=={key:int(delta[index].sum()) for key,index in neural.dn.items()}
        assert value['pool_spikes']=={key:int(delta[index].sum()) for key,index in neural.groups.items()}
        mapped=np.unique(np.concatenate(list(neural.groups.values())))
        assert value['mapped_mn_spikes']==int(delta[mapped].sum())
        snapshot=copy.deepcopy(value);counts=neural.counts.copy()
        neural.state();neural.wiring_map()
        assert neural.wiring_window==snapshot and np.array_equal(counts,neural.counts)
        previous=neural.counts.copy();windows.append(value)
    assert any(w['mapped_mn_spikes']>0 for w in windows)
    neural.reset();assert neural.wiring_window['end_ms']==0. and not neural.wiring_window['pool_spikes']
    neural.enabled=False;neural.feedback_enabled=False
    for _ in range(30):neural.control('forward',np.zeros(18),np.zeros(18),np.zeros(6),np.zeros(18),intent=[1.,0.])
    cut=neural.state()['wiring_window']
    assert cut['mapped_mn_spikes']==0 and sum(cut['pool_spikes'].values())==0
    assert cut['dn_spikes']['forward']>0
    return dict(passed=True,motor_pools=36,dn_groups=4,mapped_unique_motor_cells=220,
        exact_count_delta_windows=len(windows),map_ids_match_connectome=True,
        reading_does_not_advance_neurons=True,reset_clears_highlights=True,
        cut_synapses_has_zero_motor_highlights=True,externally_stimulated_dn_can_still_fire=True,
        normal_window_motor_spikes=[w['mapped_mn_spikes'] for w in windows])


if __name__=='__main__':print(json.dumps(verify(),ensure_ascii=False,indent=2))
