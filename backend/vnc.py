"""Contact-event motor decoder: engineering scaffold, NOT biological VNC rhythm.

This module never receives a button command or desired direction. Motion comes
from measured DN firing readout, gated by measured downstream motor activity.
No periodic phase clock or time-indexed gait playback is used. Local geometric
events and measured ground contact drive lift / advance / lower transitions.
"""
import numpy as np


class VNCDecoder:
    groups=([0,2,4],[1,3,5])

    def __init__(self,stance,config):
        self.stance=stance;self.config=config;self.reset()

    def reset(self):
        self.target=self.stance.foot_targets().copy()
        self.next_group=0;self.swing_group=None;self.swing_stage='support'
        self.swing_time=0.;self.status='静态保持';self.steps=np.zeros(6,dtype=int)
        self.velocity=np.zeros(2);self.motor_gate=0.;self.safety_latched=False
        self.enabled=True;self.contact_feedback_enabled=True

    def control(self,readout,body_feet,feedback,trim,dt=.01,stop=False):
        neutral=self.stance.foot_targets(trim)
        # A missing pathway is an explicit interlock, not a hidden fallback gait.
        gate=readout['motor_gate'] if self.enabled else 0.
        touch=feedback['touch'].copy() if self.contact_feedback_enabled else np.zeros(6,dtype=bool)
        if not self.contact_feedback_enabled or self.safety_latched:gate=0.
        if stop:gate=0.
        self.motor_gate=gate
        desired=np.array([readout['forward']*self.config['max_body_speed_m_s'],readout['turn']*self.config['max_turn_rate_rad_s']])*gate
        effort=float(np.max(feedback['effort']))
        slip=float(np.max(feedback['slip_m_s'][touch])) if np.any(touch) else 0.
        desired*=min(1.,max(.2,(1.-effort)/.35))*max(.35,1.-slip/0.2)
        self.velocity+=(desired-self.velocity)*(1.-np.exp(-dt/.15))
        moving=gate>.025 and np.linalg.norm(desired)>.001 and not self.safety_latched
        requested=self.target.copy()
        if not moving:
            requested=neutral.copy();self.swing_group=None;self.swing_stage='support'
            self.status='反馈超时保护' if self.safety_latched else '通路/接触反馈关闭' if not self.contact_feedback_enabled or not self.enabled else '静态保持'
        else:
            vx,w=self.velocity
            local_velocity=np.column_stack([vx-w*neutral[:,1],w*neutral[:,0]])
            direction=local_velocity/np.maximum(np.linalg.norm(local_velocity,axis=1,keepdims=True),1e-8)
            support=[i for i in range(6) if self.swing_group is None or i not in self.groups[self.swing_group]]
            requested[support,:2]-=local_velocity[support]*dt
            requested[support,2]=neutral[support,2]
            span=self.config['step_half_span_m']
            posterior=np.sum((body_feet[:,:2]-neutral[:,:2])*direction,axis=1)
            if self.swing_group is None:
                group=self.groups[self.next_group];others=self.groups[1-self.next_group]
                # The first step must also be caused by actual posterior travel.
                if min(posterior[group]) < -span and np.all(touch[others]):
                    self.swing_group=self.next_group;self.swing_stage='lift';self.swing_time=0.
            if self.swing_group is not None:
                group=self.groups[self.swing_group];others=self.groups[1-self.swing_group]
                self.swing_time+=dt
                if self.swing_stage=='lift':
                    requested[group,2]=neutral[group,2]+self.config['lift_height_m']
                    if np.all(body_feet[group,2]>neutral[group,2]+self.config['lift_height_m']-.016):self.swing_stage='advance'
                if self.swing_stage=='advance':
                    requested[group,:2]=neutral[group,:2]+span*direction[group]
                    requested[group,2]=neutral[group,2]+self.config['lift_height_m']
                    if np.max(np.linalg.norm(body_feet[group,:2]-requested[group,:2],axis=1))<.014:self.swing_stage='lower'
                if self.swing_stage=='lower':
                    requested[group,:2]=neutral[group,:2]+span*direction[group]
                    requested[group,2]=neutral[group,2]-.006
                    if np.all(touch[group]):
                        self.steps[group]+=1;self.next_group=1-self.swing_group;self.swing_group=None;self.swing_stage='support'
                if self.swing_time>self.config['swing_timeout_s']:
                    self.safety_latched=True;self.status='落足未确认，已保持';requested=neutral.copy()
            if not self.safety_latched:self.status={'support':'承重后蹬','lift':'卸载抬足','advance':'前摆','lower':'触地确认'}[self.swing_stage]
        delta=requested-self.target
        max_delta=self.config['foot_target_speed_m_s']*dt
        lengths=np.linalg.norm(delta,axis=1,keepdims=True)
        self.target+=delta*np.minimum(1.,max_delta/np.maximum(lengths,1e-9))
        self.target[:,:2]=neutral[:,:2]+np.clip(self.target[:,:2]-neutral[:,:2],-.085,.085)
        return np.concatenate([self.stance.ik(leg,target) for leg,target in zip(['lf','lm','lr','rf','rm','rr'],self.target)])

    def state(self):
        return dict(status=self.status,stage=self.swing_stage,steps=self.steps.tolist(),
            leg_stages=[self.swing_stage if self.swing_group is not None and i in self.groups[self.swing_group] else 'support' for i in range(6)],
            motor_gate=self.motor_gate,decoded_velocity_m_s=float(self.velocity[0]),decoded_turn_rad_s=float(self.velocity[1]),
            safety_latched=self.safety_latched,engineering_reflex_layer=True,periodic_cpg_used=False,
            contact_feedback_enabled=self.contact_feedback_enabled,output_enabled=self.enabled,
            provenance='Real MaleCNS MN gating + DN readout; engineered contact-event coordination and IK; NOT reconstructed biological locomotion')
