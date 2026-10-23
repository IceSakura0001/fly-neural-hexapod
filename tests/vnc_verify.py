"""Acceptance of a hybrid neural + engineered contact-reflex experiment."""
import hashlib
import json
from pathlib import Path

import numpy as np

from backend.simulation import Simulation


def verify(reuse_evidence=False):
    trials=[]
    for command in ['forward','backward','left','right']:
        if reuse_evidence:
            r=json.loads((Path('evidence')/f'vnc-probe-{command}.json').read_text(encoding='utf-8-sig'))
        else:
            from .vnc_probe import probe
            r=probe(command,15 if command=='forward' else 12)
        assert r['warnings']==0 and not r['vnc']['safety_latched']
        assert .23<r['clearance_min']<r['clearance_max']<.27
        assert min(r['vnc']['steps'])>=4 and r['torque_max']<450
        if command=='forward':assert r['dx']>.6 and abs(r['yaw_deg'])<8
        if command=='backward':assert r['dx']<-.5 and abs(r['yaw_deg'])<8
        if command=='left':assert r['yaw_deg']>60
        if command=='right':assert r['yaw_deg']<-60
        trials.append({k:r[k] for k in ['command','seconds','dx','dy','yaw_deg','clearance_min','clearance_max','torque_max','warnings']})
    sim=Simulation();sim.set_mode('vnc');sim.step(5000)
    f=sim.feedback
    np.testing.assert_allclose((f['muscle_positive_n']-f['muscle_negative_n'])*f['moment_arms_m'],f['torque_nm'],atol=1e-9)
    assert f['touch'].all() and abs(f['normal_force_n'].sum()-sim.model.body_mass.sum()*9.81)<20
    assert max(f['slip_m_s'])<.01
    q=sim.data.qpos[sim.qadr];v=sim.data.qvel[sim.dadr];neutral=sim.neutral
    low={k:v.copy() for k,v in f.items()};high={k:v.copy() for k,v in f.items()}
    low['effort'][:]=0;low['slip_m_s'][:]=0;high['effort'][:]=1;high['slip_m_s'][:]=.1
    sim.neural.encode_feedback(q,v,f['load'],neutral,low);low_hz=sim.neural.feedback_summary['load']
    sim.neural.encode_feedback(q,v,f['load'],neutral,high);high_hz=sim.neural.feedback_summary['load']
    assert high_hz>low_hz+30
    ablations=[]
    for cut in ['synapses','motor_readout','contact_decoder','neural_afferents']:
        sim.set_mode('vnc')
        sim.neural.enabled=True;sim.neural.output_enabled=True;sim.neural.feedback_enabled=True
        if cut=='synapses':sim.neural.enabled=False
        if cut=='motor_readout':sim.neural.output_enabled=False
        if cut=='contact_decoder':sim.vnc.contact_feedback_enabled=False
        if cut=='neural_afferents':sim.neural.feedback_enabled=False
        sim.step(5000);start=sim.data.qpos[:3].copy();sim.command='forward';sim.step(3000)
        state=sim.state();dx=float(state['position'][0]-start[0])
        assert state['warnings']==0
        if cut!='neural_afferents':assert abs(dx)<.005 and sum(state['vnc']['steps'])==0
        # Cutting only neural afference is reported, not assumed to stop the
        # engineered contact controller, which receives contact separately.
        ablations.append(dict(cut=cut,seconds=6,dx_m=dx,steps=state['vnc']['steps'],
            motor_gate=state['vnc']['motor_gate'],spikes=state['neural']['total_spikes'],warnings=state['warnings']))
    sim.neural.enabled=True;sim.neural.output_enabled=True;sim.neural.feedback_enabled=True
    sim.set_mode('vnc');sim.step(5000)
    sim.set_intent(.6,.25);sim.step(2500)
    mixed=sim.state();assert mixed['intent']['requested']==[.6,.25]
    assert not mixed['vnc']['safety_latched'] and mixed['warnings']==0
    sim.set_command('stop');sim.step(3000)
    stopped=sim.state();assert stopped['command']=='stop' and abs(stopped['chassis_clearance_m']-.25)<.001
    assert all(stopped['body_feedback']['touch'])
    assert abs(sim.data.qvel[:3]).max()<.01
    digest=hashlib.sha256(sim.neural.weights.tobytes()).hexdigest()
    assert digest=='2f547b0a84d24869e6a2a142a8437ffbb668cd47c1966595af3d72fefcbe61f2'
    return dict(passed=True,scope='Hybrid neural-gated engineering reflex locomotion; NOT biological VNC gait reconstruction',
        trials=trials,ablations=ablations,equivalent_force_torque_identity_verified=True,
        physical_contact_weight_balance_verified=True,effort_slip_afferent_hz=dict(low=low_hz,high=high_hz),
        mixed_intent_verified=True,stopped_clearance_mm=stopped['chassis_clearance_m']*1000,
        stop_settles_six_feet=True,graph_weight_sha256=digest,periodic_cpg_used=False)


if __name__=='__main__':
    import argparse
    parser=argparse.ArgumentParser();parser.add_argument('--reuse-evidence',action='store_true');args=parser.parse_args()
    print(json.dumps(verify(args.reuse_evidence),indent=2,ensure_ascii=False))
