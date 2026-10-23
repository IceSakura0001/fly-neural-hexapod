"""MaleCNS spiking sensorimotor experiment, with no phase/gait generator.

The neuron/edge identities come from Janelia. LIF assumptions follow the public
FlyBrain/Shiu model family. The muscle-to-robot projection and afferent encoder
are explicit engineering assumptions, not reconstructed biology.
"""
import json
import math
import os
import time
from pathlib import Path

import numpy as np
from numba import njit
from scipy import sparse

LEGS = ['lf','lm','lr','rf','rm','rr']
DATA_DIR = Path(os.environ.get('NEURAL_DATA_DIR',Path(__file__).resolve().parents[1]/'models/malecns_v1'))


@njit(cache=True)
def advance_lif(steps, ptr, post, weights, voltage, conductance, adaptation, refractory,
                rates, spike_buffer, buffer_position, stimulus_hz, rng_state, counts, enabled):
    """0.5 ms exponential Euler, event scatter, 2 ms delay, explicit RNG state."""
    am = math.exp(-.5/20); ag=math.exp(-.5/5); aa=math.exp(-.5/200); ar=math.exp(-.5/100)
    n=len(voltage)
    for step in range(steps):
        for i in range(n): conductance[i] *= ag
        if enabled:
            for pre in range(n):
                if spike_buffer[buffer_position,pre]:
                    for k in range(ptr[pre],ptr[pre+1]): conductance[post[k]] += weights[k]
        for i in range(n):
            target=-52.+conductance[i]-adaptation[i]
            v=target+(voltage[i]-target)*am
            if refractory[i]>0: v=-52.
            refractory[i]=max(0.,refractory[i]-.5)
            fired = v>=-45.
            if stimulus_hz[i]>0:
                rng_state ^= (rng_state << 13) & 0xffffffff
                rng_state ^= rng_state >> 17
                rng_state ^= (rng_state << 5) & 0xffffffff
                if (rng_state & 0xffffffff)/4294967296. < stimulus_hz[i]*.0005: fired=True
            if fired:
                v=-52.;refractory[i]=2.2;counts[i]+=1
            voltage[i]=v
            adaptation[i]=adaptation[i]*aa+(1.5 if fired else 0.)
            spike_buffer[buffer_position,i]=1 if fired else 0
            rates[i]=rates[i]*ar+((1.-ar)*2000. if fired else 0.)
        buffer_position=(buffer_position+1)%spike_buffer.shape[0]
    return buffer_position,rng_state


class NeuralController:
    def __init__(self, data_dir=DATA_DIR):
        self.metadata=json.loads((data_dir/'metadata.json').read_text(encoding='utf-8'))
        self.neurons=json.loads((data_dir/'neurons.json').read_text(encoding='utf-8'))
        raw=sparse.load_npz(data_dir/'synapses.npz').tocsr()
        if raw.shape != (self.metadata['neurons'],)*2: raise ValueError('Malformed connectome')
        self.raw=raw
        types=np.array([n.get('type') or '' for n in self.neurons])
        sc=np.array([n.get('superclass') or '' for n in self.neurons])
        matrix=raw.tocoo(copy=True)
        weights=np.sign(matrix.data)*np.minimum(np.abs(matrix.data),60)
        weights[(types[matrix.row]==types[matrix.col]) & (types[matrix.row]!='')]*=.1
        weights[(sc[matrix.col]=='descending_neuron') & np.char.startswith(sc[matrix.row].astype(str),'vnc_')]*=3.
        fanin=np.asarray(abs(raw).sum(axis=1)).ravel()
        scale=np.minimum(1.,5000./np.maximum(fanin,1.))
        weights*=np.maximum(scale[matrix.row],.02)*.275
        shaped=sparse.csr_matrix((weights,(matrix.row,matrix.col)),shape=raw.shape).tocsc()
        self.ptr=shaped.indptr.astype(np.int32);self.post=shaped.indices.astype(np.int32);self.weights=shaped.data.astype(np.float32)
        self.groups={k:np.array(v,dtype=np.int32) for k,v in self.metadata['motor_groups'].items()}
        self.mapped_motor_neurons=len(np.unique(np.concatenate(list(self.groups.values()))))
        self.dn={k:np.array(v,dtype=np.int32) for k,v in self.metadata['stimulus'].items()}
        self.enabled=True;self.feedback_enabled=True;self.output_enabled=True
        self.reset()
        # Compile the kernel before accepting browser connections.
        self._advance(1); self.reset()

    def reset(self,seed=1729):
        n=self.metadata['neurons']
        self.voltage=np.full(n,-52.,np.float32);self.conductance=np.zeros(n,np.float32)
        self.adaptation=np.zeros(n,np.float32);self.refractory=np.zeros(n,np.float32)
        self.rates=np.zeros(n,np.float32);self.counts=np.zeros(n,np.int64)
        self.spike_buffer=np.zeros((4,n),np.uint8);self.buffer_position=0;self.rng_state=seed
        self.stimulus_hz=np.zeros(n,np.float32);self.time_ms=0.;self.steps=0
        self.filtered_offset=np.zeros(18);self.command='stop';self.last_step_spikes=0
        self.feedback_summary={};self.wall_ms=0.
        self.intent=np.zeros(2);self.dn_readout={};self.motor_gate=0.
        self.filtered_dn=np.zeros(4)
        self.wiring_elapsed=0.
        self.wiring_previous_counts=np.zeros(n,np.int64)
        self.wiring_window=dict(end_ms=0.,duration_ms=0.,dn_spikes={},pool_spikes={},mapped_mn_spikes=0)

    def wiring_map(self):
        """Group membership and software routes, never invented direct synapses."""
        cells=lambda indices:[dict(body_id=self.neurons[int(i)]['bodyId'],
            type=self.neurons[int(i)].get('type')) for i in indices]
        return dict(schema=1,dataset=self.metadata['dataset'],whole_brain_simulated=False,
            description='Functional group map; VNC box aggregates recurrent and polysynaptic paths, not direct DN-to-MN edges',
            neurons=self.metadata['neurons'],edges=self.metadata['fast_edges'],
            sensory_neurons=len(self.metadata['sensory']),
            mapped_motor_neurons=self.mapped_motor_neurons,
            dn={key:dict(count=len(indices),cells=cells(indices)) for key,indices in self.dn.items()},
            pools={key:dict(count=len(indices),cells=cells(indices)) for key,indices in self.groups.items()},
            motor_route='36 pools -> mean of 220 unique MN -> one engineered gate, not 18 independent neural commands',
            projection='pool sign denotes engineering joint projection; not biological agonist/antagonist proof',
            brightness='Actual simulation spike count differences in the latest 100 ms; actuator brightness is absolute applied torque')

    def observe_wiring(self,dt):
        self.wiring_elapsed+=dt
        if self.wiring_elapsed<.1-1e-9:return
        delta=self.counts-self.wiring_previous_counts
        mapped=np.unique(np.concatenate(list(self.groups.values())))
        self.wiring_window=dict(end_ms=round(self.time_ms,3),duration_ms=round(self.wiring_elapsed*1000,3),
            dn_spikes={name:int(delta[index].sum()) for name,index in self.dn.items()},
            pool_spikes={name:int(delta[index].sum()) for name,index in self.groups.items()},
            mapped_mn_spikes=int(delta[mapped].sum()))
        self.wiring_previous_counts=self.counts.copy();self.wiring_elapsed=0.

    def _advance(self,steps):
        before=int(self.counts.sum());start=time.perf_counter()
        self.buffer_position,self.rng_state=advance_lif(steps,self.ptr,self.post,self.weights,self.voltage,self.conductance,self.adaptation,self.refractory,self.rates,self.spike_buffer,self.buffer_position,self.stimulus_hz,self.rng_state,self.counts,self.enabled)
        self.time_ms+=steps*.5;self.steps+=steps
        self.last_step_spikes=int(self.counts.sum())-before
        self.wall_ms=(time.perf_counter()-start)*1000

    def encode_feedback(self,angles,velocity,loads,neutral,body_feedback=None):
        angle=np.asarray(angles).reshape(6,3);vel=np.asarray(velocity).reshape(6,3)
        q0=np.asarray(neutral).reshape(6,3);loads=np.asarray(loads)
        per_leg={}
        for i,leg in enumerate(LEGS):
            per_leg[leg]=dict(angle=5.+min(1.,np.linalg.norm(angle[i]-q0[i])/.5)*75.,
                velocity=5.+min(1.,np.linalg.norm(vel[i])/3.)*95.,load=min(100.,max(0.,loads[i])*50.))
            if body_feedback is not None:
                # This routing is an engineering afferent encoding, not identified
                # biological force/torque tuning of these individual cells.
                per_leg[leg]['load']=min(180.,5.+35.*float(body_feedback['touch'][i])+
                    65.*np.tanh(max(0.,loads[i]))+45.*body_feedback['effort'][i]+
                    min(40.,body_feedback['slip_m_s'][i]*400.))
        summaries={'angle':[],'velocity':[],'load':[]}
        for cell in self.metadata['sensory']:
            names=[cell['side'].lower()+cell['leg']] if cell['side'] in ['L','R'] else ['l'+cell['leg'],'r'+cell['leg']]
            hz=float(np.mean([per_leg[leg][cell['channel']] for leg in names])) if self.feedback_enabled else 0.
            self.stimulus_hz[cell['index']]=hz
            summaries[cell['channel']].append(hz)
        self.feedback_summary={key:round(float(np.mean(value)),3) if value else 0. for key,value in summaries.items()}

    def control(self,command,angles,velocity,loads,neutral,dt=.01,intent=None,body_feedback=None):
        self.command=command
        self.stimulus_hz[:]=0
        if intent is None:
            if command in self.dn:self.stimulus_hz[self.dn[command]]=150.
        else:
            self.intent=np.clip(np.asarray(intent,dtype=float),-1.,1.)
            x,turn=self.intent
            strengths=dict(forward=max(x,0.),backward=max(-x,0.),left=max(turn,0.),right=max(-turn,0.))
            for direction,strength in strengths.items():self.stimulus_hz[self.dn[direction]]=150.*strength
        self.encode_feedback(angles,velocity,loads,neutral,body_feedback)
        self._advance(round(dt*2000))
        self.observe_wiring(dt)
        offsets=[]
        for leg in LEGS:
            side=1 if leg[0]=='l' else -1
            for joint,gain in [('hip',.20),('thigh',.14),('calf',.22)]:
                positive=self.rates[self.groups[leg+'_'+joint+'_positive']].mean()
                negative=self.rates[self.groups[leg+'_'+joint+'_negative']].mean()
                projection=gain*np.clip((positive-negative)/100.,-1.,1.)
                if joint=='hip': projection*=-side
                offsets.append(projection)
        offsets=np.array(offsets) if self.output_enabled else np.zeros(18)
        # Safety stop is a static hold, independent of ongoing sensory activity.
        if command=='stop': offsets[:]=0
        self.filtered_offset+=(offsets-self.filtered_offset)*(1.-math.exp(-dt/.05))
        return np.asarray(neutral)+self.filtered_offset

    def vnc_readout(self):
        """Decode actual neuron firing; no command label enters the motor layer."""
        self.dn_readout={key:float(self.rates[indices].mean()) for key,indices in self.dn.items()}
        rates=np.array([self.dn_readout[key] for key in ['forward','backward','left','right']])
        self.filtered_dn+=(rates-self.filtered_dn)*(1.-np.exp(-.01/.15))
        evidence=np.maximum(self.filtered_dn-15.,0.)
        # Reject weak recruitment of other DN groups by the recurrent network.
        # This is a calibrated engineering readout, not a biological decoder.
        evidence[evidence<.55*max(float(evidence.max()),1.)]=0.
        indices=np.unique(np.concatenate(list(self.groups.values())))
        motor_mean=float(np.mean(self.rates[indices]))
        self.motor_gate=float(np.clip((motor_mean-.15)/1.2,0.,1.)) if self.output_enabled else 0.
        return dict(forward=float(np.tanh((evidence[0]-evidence[1])/65.)),
            turn=float(np.tanh((evidence[2]-evidence[3])/65.)),
            motor_gate=self.motor_gate,motor_mean_hz=motor_mean,dn_rates_hz=self.dn_readout.copy())

    def state(self):
        group_rates={name:round(float(self.rates[index].mean()),3) for name,index in self.groups.items()}
        legs=[]
        for leg in LEGS:
            indices=np.unique(np.concatenate([v for k,v in self.groups.items() if k.startswith(leg+'_')]))
            legs.append(dict(leg=leg,rate_hz=round(float(self.rates[indices].mean()),3)))
        stimulus_indices=np.unique(np.concatenate([indices[self.stimulus_hz[indices]>0] for indices in self.dn.values()]))
        input_hz=float(self.stimulus_hz[stimulus_indices].max()) if len(stimulus_indices) else 0.
        active_ids=np.flatnonzero(self.counts>0)
        return dict(dataset='MaleCNS v1.0',scope=self.metadata['scope'], neurons=self.metadata['neurons'],
            edges=self.metadata['fast_edges'],motor_neurons=self.metadata['motor_neurons'],mapped_motor_neurons=self.mapped_motor_neurons,sensory_neurons=len(self.metadata['sensory']),
            time_ms=round(self.time_ms,3),steps=self.steps,total_spikes=int(self.counts.sum()),
            active_neurons=int(len(active_ids)),spikes_last_update=self.last_step_spikes,wall_ms=round(self.wall_ms,3),
            command=self.command,stimulus_hz=input_hz,
            stimulated_body_ids=[self.neurons[i]['bodyId'] for i in stimulus_indices],
            stimulus_rate_hz=round(float(self.rates[stimulus_indices].mean()),3) if len(stimulus_indices) else 0.,
            feedback_hz=self.feedback_summary,motor_rates_hz=group_rates,leg_rates=legs,
            wiring_window=self.wiring_window,
            joint_offset_rad=self.filtered_offset.tolist(),feedback_enabled=self.feedback_enabled,
            synapses_enabled=self.enabled,motor_output_enabled=self.output_enabled,
            locomotion_validated=False,decoder='annotated muscle pools → bounded joint offsets; engineered projection',
            cpg_used=False,model='LIF dt=0.5 ms, delay=2 ms, synaptic/adaptation dynamics; CPU')
