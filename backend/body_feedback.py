"""Physical foot-ground observations and explicitly assumed muscle leverage."""
import mujoco
import numpy as np


class BodyFeedback:
    def __init__(self,model,legs,qadr,dadr,sites,config):
        self.model=model;self.legs=legs;self.qadr=qadr;self.dadr=dadr;self.sites=sites
        self.ground=model.geom('ground').id
        self.foot_geom={model.geom(leg+'_foot_collision_foot_0').id:i for i,leg in enumerate(legs)}
        self.moment_arms=np.tile(config['effective_moment_arms_m'],(6,1))
        self.config=config;self.reset()

    def reset(self):
        self.touch=np.zeros(6,dtype=bool);self.touchdowns=np.zeros(6,dtype=int);self.liftoffs=np.zeros(6,dtype=int)
        self.filtered_torque=np.zeros((6,3));self.previous_touch=np.zeros(6,dtype=bool)

    def observe(self,data,dt=.01):
        normal=np.zeros(6);tangent=np.zeros(6);slip_numerator=np.zeros(6)
        wrench=np.zeros(6);jac=np.zeros((3,self.model.nv));jacrot=np.zeros_like(jac)
        for cid in range(data.ncon):
            contact=data.contact[cid];g1,g2=int(contact.geom1),int(contact.geom2)
            foot=g2 if g1==self.ground else g1 if g2==self.ground else None
            if foot not in self.foot_geom:continue
            i=self.foot_geom[foot]
            mujoco.mj_contactForce(self.model,data,cid,wrench)
            force=max(0.,float(wrench[0]));normal[i]+=force;tangent[i]+=float(np.linalg.norm(wrench[1:3]))
            # Velocity at the actual contact point, including sphere rotation.
            mujoco.mj_jac(self.model,data,jac,jacrot,contact.pos,int(self.model.geom_bodyid[foot]))
            velocity=jac@data.qvel
            frame=contact.frame.reshape(3,3)
            slip_numerator[i]+=force*float(np.linalg.norm((frame@velocity)[1:3]))
        touch=np.where(self.touch,normal>self.config['touch_off_n'],normal>self.config['touch_on_n'])
        self.touchdowns+=(touch&~self.touch);self.liftoffs+=(~touch&self.touch);self.touch=touch
        torque=data.qfrc_actuator[self.dadr].reshape(6,3)
        self.filtered_torque+=(torque-self.filtered_torque)*(1.-np.exp(-dt/.08))
        positive=np.maximum(self.filtered_torque,0)/self.moment_arms
        negative=np.maximum(-self.filtered_torque,0)/self.moment_arms
        load=normal/max(float(self.model.body_mass.sum())*9.81/6,1.)
        return dict(touch=touch.copy(),normal_force_n=normal,tangential_force_n=tangent,
            slip_m_s=slip_numerator/np.maximum(normal,1e-9),load=load,
            torque_nm=self.filtered_torque.copy(),effort=np.max(abs(self.filtered_torque),axis=1)/450.,
            muscle_positive_n=positive,muscle_negative_n=negative,
            moment_arms_m=self.moment_arms.copy(),touchdowns=self.touchdowns.copy(),liftoffs=self.liftoffs.copy())

    @staticmethod
    def serializable(observation):
        return {key:value.tolist() for key,value in observation.items()}
