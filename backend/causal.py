"""Audit observables and explicit counterfactual interventions; no claims of brain ownership."""
from collections import deque
import uuid
import numpy as np

MODES={
    'normal':'正常：神经使能 + 工程反射',
    'cut_synapses':'切断全部突触',
    'cut_motor':'切断运动神经读出',
    'bypass':'人工旁路：突触断开，固定使能',
    'no_reflex':'关闭工程步序层',
    'no_afferents':'仅关闭神经感觉输入',
}


class CausalMonitor:
    def __init__(self):
        self.mode='normal';self.reset()

    def reset(self):
        self.session=uuid.uuid4().hex[:12];self.samples=deque(maxlen=600);self.ticks=0
        self.raster_indices=None;self.raster_cells=[];self.previous_counts=None
        self.current=dict(measured_gate=0.,applied_gate=0.,motor_mean_hz=0.,dn_rates_hz={},
            decoded_forward=0.,decoded_turn=0.,direction_source='实际下行放电的工程读出')

    def intervene(self,readout,intent):
        applied=dict(readout)
        if self.mode=='bypass':
            # Deliberately route the intent directly to the same engineered body
            # controller. The UI must display this as artificial, never neural.
            applied.update(forward=float(intent[0]),turn=float(intent[1]),motor_gate=1.)
        self.current=dict(measured_gate=float(readout['motor_gate']),applied_gate=float(applied['motor_gate']),
            motor_mean_hz=readout['motor_mean_hz'],dn_rates_hz=readout['dn_rates_hz'],
            decoded_forward=float(applied['forward']),decoded_turn=float(applied['turn']),
            direction_source='用户意图直接旁路' if self.mode=='bypass' else '实际下行放电的工程读出')
        return applied

    def observe(self,sim):
        self.current['applied_gate']=float(sim.vnc.motor_gate)
        if self.raster_indices is None:
            dn=np.unique(np.concatenate(list(sim.neural.dn.values()))).tolist()
            mn=[]
            for leg in ['lf','lm','lr','rf','rm','rr']:
                for suffix in ['hip_positive','calf_negative']:
                    mn.append(int(sim.neural.groups[leg+'_'+suffix][0]))
            self.raster_indices=np.array(dn+mn,dtype=int)
            self.raster_cells=[dict(body_id=sim.neural.neurons[i]['bodyId'],type=sim.neural.neurons[i].get('type'),
                group='DN' if j<len(dn) else 'MN') for j,i in enumerate(self.raster_indices)]
            self.previous_counts=np.zeros(len(self.raster_indices),dtype=np.int64)
        self.ticks+=1
        if self.ticks%10:return
        c=self.current;rates=c['dn_rates_hz']
        counts=sim.neural.counts[self.raster_indices];spikes=(counts-self.previous_counts).tolist()
        self.previous_counts=counts.copy()
        self.samples.append(dict(t=round(float(sim.data.time),3),intent=sim.requested_intent().tolist(),
            dn_hz=[round(rates.get(key,0.),3) for key in ['forward','backward','left','right']],
            mn_hz=round(c['motor_mean_hz'],4),measured_gate=round(c['measured_gate'],4),
            applied_gate=round(sim.vnc.motor_gate,4),forward=round(c['decoded_forward'],4),
            turn=round(c['decoded_turn'],4),x=round(float(sim.data.qpos[0]),6),
            body_vx=round(float(sim.data.qvel[0]),6),steps=int(sim.vnc.steps.sum()),stage=sim.vnc.swing_stage,
            spike_counts=spikes))

    def state(self):
        return dict(intervention=self.mode,label=MODES[self.mode],session=self.session,**self.current,
            whole_brain_simulated=False,gait_generator='人工接触事件规则 + 逆解 + 伺服',
            motor_information_used='220 个运动神经元的平均活动压缩成 1 个使能值',
            warning='停止对照只能证明使能联锁生效，不能证明神经网络生成步态')
