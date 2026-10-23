"""Causal acceptance, distinct from claiming successful neural locomotion."""
import asyncio
import hashlib
import json
import math
import time
import urllib.request

import numpy as np


def verify():
    from backend.simulation import Simulation
    sim=Simulation()
    sim.set_mode('neural')
    nn=sim.neural
    assert sim.mode=='neural'
    assert nn.metadata['neurons']==24071 and nn.metadata['motor_neurons']==381
    assert len(nn.metadata['motor_groups'])==36 and len(nn.metadata['sensory'])==705
    graph_digest=hashlib.sha256(nn.weights.tobytes()).hexdigest()
    # Causal test: identical DN stimulus and RNG, no sensory input. Disconnecting
    # all synapses must remove downstream motor activity, despite DN firing.
    neutral=sim.neutral.copy(); zero=np.zeros(18); loads=np.zeros(6)
    def trial(edges,feedback,stimulus='forward'):
        nn.enabled=edges;nn.feedback_enabled=feedback;nn.output_enabled=True;nn.reset(1729)
        traces=[]
        for tick in range(150):
            target=nn.control(stimulus,neutral,zero,loads,neutral)
            if tick%5==0: traces.append(target.copy())
        state=nn.state()
        return np.array(traces),state
    active,active_state=trial(True,False)
    disconnected,disconnected_state=trial(False,False)
    assert max(active_state['motor_rates_hz'].values())>1
    assert np.max(abs(active-neutral))>.001
    assert disconnected_state['stimulus_rate_hz']>20
    assert max(disconnected_state['motor_rates_hz'].values())==0
    assert np.max(abs(disconnected-neutral))==0
    repeat,repeat_state=trial(True,False)
    assert np.array_equal(active,repeat)
    assert active_state['total_spikes']==repeat_state['total_spikes']
    # Motor decoder disconnected: neural spikes continue, no target displacement.
    nn.reset();nn.enabled=True;nn.output_enabled=False
    for _ in range(150): inhibited=nn.control('forward',neutral,zero,loads,neutral)
    assert np.array_equal(inhibited,neutral) and nn.state()['total_spikes']>0
    # The afferent transducer really reads body angle/velocity/load.
    nn.feedback_enabled=True
    nn.encode_feedback(neutral,zero,loads,neutral);rest_feedback=dict(nn.feedback_summary)
    nn.encode_feedback(neutral+.2,np.full(18,1.),np.ones(6),neutral);moving_feedback=dict(nn.feedback_summary)
    assert all(moving_feedback[k]>rest_feedback[k] for k in rest_feedback)
    assert hashlib.sha256(nn.weights.tobytes()).hexdigest()==graph_digest
    nn.enabled=True;nn.feedback_enabled=True;nn.output_enabled=True
    results=[]
    for command in ['forward','backward','left','right']:
        sim.reset();sim.step(500)
        before=sim.state();sim.command=command
        start=time.perf_counter();sim.step(1500);elapsed=time.perf_counter()-start
        state=sim.state();neural=state['neural']
        assert neural['cpg_used'] is False and sim.phase==0
        assert np.isfinite(sim.data.qpos).all() and state['warnings']==0
        assert neural['time_ms']>3500 and neural['total_spikes']>0
        assert neural['stimulated_body_ids'] and neural['feedback_hz']['load']>0
        assert np.max(abs(sim.last_targets-neutral))>.001
        results.append(dict(stimulus=command,sim_seconds=3,wall_seconds=elapsed,
            dx_m=state['position'][0]-before['position'][0],yaw_deg=math.degrees(state['yaw']),
            max_target_offset_deg=math.degrees(float(np.max(abs(sim.last_targets-neutral)))),
            motor_peak_hz=max(neural['motor_rates_hz'].values()),spikes=neural['total_spikes'],
            feedback_hz=neural['feedback_hz'],warnings=state['warnings']))
    return dict(passed=True,scope='Neural causal integration, NOT stable locomotion validation',
        dataset='MaleCNS v1.0',neurons=24071,fast_edges=nn.metadata['fast_edges'],motor_neurons=381,
        feedback_neurons=705,cpg_used_in_neural_mode=False,
        ablation=dict(synapses_disconnected_motor_peak_hz=max(disconnected_state['motor_rates_hz'].values()),
            connected_motor_peak_hz=max(active_state['motor_rates_hz'].values()),
            connected_target_max_deg=math.degrees(float(np.max(abs(active-neutral)))),
            disconnected_target_max_deg=0.,motor_output_cut_target_max_deg=0.,deterministic_replay=True),
        feedback=dict(rest=rest_feedback,body_changed=moving_feedback),graph_weight_sha256=graph_digest,
        trials=results,locomotion_validated=False)


async def verify_live(base):
    import websockets
    def read(path):
        with urllib.request.urlopen(base+path,timeout=5) as response:return json.load(response)
    health=read('/api/health');assert health['neural_connected']
    url=base.replace('http','ws',1)+'/ws'
    async with websockets.connect(url) as ws:
        await ws.send(json.dumps(dict(command='set_mode',mode='neural')))
        await asyncio.sleep(.3)
        before=read('/api/state')
        await ws.send(json.dumps(dict(command='forward')))
        for _ in range(14):
            await ws.send(json.dumps(dict(command='heartbeat')))
            await asyncio.sleep(.15)
        after=read('/api/state')
        assert after['mode']=='neural' and after['command']=='forward'
        assert after['neural']['time_ms']>before['neural']['time_ms']
        assert after['neural']['total_spikes']>before['neural']['total_spikes']
        assert after['neural']['cpg_used'] is False and after['phase']==0
        assert max(abs(v) for v in after['neural']['joint_offset_rad'])>.001
        await ws.send(json.dumps(dict(command='stop')))
    await asyncio.sleep(.3)
    stopped=read('/api/state');assert stopped['command']=='stop'
    return dict(passed=True,mode=after['mode'],neurons=after['neural']['neurons'],
        total_spikes=after['neural']['total_spikes'],feedback_hz=after['neural']['feedback_hz'],
        max_joint_target_offset_deg=math.degrees(max(abs(v) for v in after['neural']['joint_offset_rad'])),
        phase=after['phase'],stopped=True,locomotion_validated=False)


if __name__=='__main__':
    import argparse
    parser=argparse.ArgumentParser();parser.add_argument('--live');args=parser.parse_args()
    print(json.dumps(asyncio.run(verify_live(args.live)) if args.live else verify(),indent=2,ensure_ascii=False))
