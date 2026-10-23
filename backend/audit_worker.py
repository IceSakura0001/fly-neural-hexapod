"""Fresh matched physics trials. stdout is newline-delimited progress/results."""
import hashlib
import json
import sys
import time

import numpy as np

from .causal import MODES
from .simulation import Simulation


def run(settings,progress=lambda value:None):
    started=time.perf_counter();sim=Simulation();sim.set_mode('vnc')
    if settings.get('angles_deg') is not None:sim.set_stance_angles(settings['angles_deg'])
    duration=8.;results=[]
    for mode,label in MODES.items():
        progress(dict(status='running',condition=label,completed=len(results),total=len(MODES)))
        sim.set_intervention(mode);sim.step(3000)
        start=sim.data.qpos[:3].copy();counts=sim.neural.counts.copy();sim.set_intent(1.,0.)
        for _ in range(int(duration*50)):
            sim.step(10)
        # Keep only stimulation-period samples, rebased to trial start.
        trace=[dict(point,t=round(point['t']-6.,3),x=round(point['x']-float(start[0]),6))
               for point in sim.causal.samples if point['t']>=6.]
        mapped=np.unique(np.concatenate(list(sim.neural.groups.values())))
        actual_mn_spikes=int((sim.neural.counts-counts)[mapped].sum())
        state=sim.state()
        results.append(dict(id=mode,label=label,duration_sim_s=duration,dx_m=float(sim.data.qpos[0]-start[0]),
            steps=sim.vnc.steps.tolist(),actual_mn_spikes=actual_mn_spikes,
            mean_measured_gate=float(np.mean([p['measured_gate'] for p in trace])),
            mean_applied_gate=float(np.mean([p['applied_gate'] for p in trace])),
            warnings=state['warnings'],safety_latched=sim.vnc.safety_latched,
            neural_synapses_enabled=sim.neural.enabled,engineering_reflex_enabled=sim.vnc.enabled,
            trace=trace))
    normal,cut,readout,bypass,no_reflex,afferents=results
    checks=dict(normal_progresses=normal['dx_m']>.25,
        cut_synapses_holds=abs(cut['dx_m'])<.005,
        cut_readout_holds=abs(readout['dx_m'])<.005,
        bypass_moves_without_vnc_synapses=bypass['dx_m']>.25 and bypass['actual_mn_spikes']==0,
        no_engineered_reflex_holds=abs(no_reflex['dx_m'])<.005,
        finite_physics=all(np.isfinite(row['dx_m']) and row['warnings']==0 and not row['safety_latched'] for row in results))
    return dict(schema=1,source='fresh matched MuJoCo trials, not animation or replay',
        passed=all(checks.values()),checks=checks,seed=1729,intent=[1.,0.],warmup_sim_s=6,
        body_settings=sim.stance.settings(),graph_weight_sha256=hashlib.sha256(sim.neural.weights.tobytes()).hexdigest(),
        weight_scope='Current transformed LIF weights, not raw synapse counts; no inter-condition training',
        weight_processing='sign, cap60, same-type0.1, DNtoVNC3, fan-in normalization, gain0.275',
        source_sha256=sim.neural.metadata['source_sha256'],vnc_config=sim.vnc_config,
        wall_seconds=round(time.perf_counter()-started,2),trials=results,
        conclusion='不能证明果蝇大脑生成步态；当前为神经标量使能与下行读出配合人工步序。人工旁路反例检验神经网络对步行是否必需。')


if __name__=='__main__':
    settings=json.loads(sys.stdin.read() or '{}')
    result=run(settings,lambda value:print(json.dumps(value,ensure_ascii=False),flush=True))
    print(json.dumps(dict(status='complete',result=result),ensure_ascii=False),flush=True)
