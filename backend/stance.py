"""Static stance geometry and measured chassis-clearance regulation.

This defines the initial posture and gravity support reference. It contains no
walking phase, and sends no force to the floating base.
"""
import json
import math
from pathlib import Path

import mujoco
import numpy as np

LEGS=['lf','lm','lr','rf','rm','rr']


class Stance:
    def __init__(self, model):
        self.config=json.loads(Path(__file__).with_name('stance.json').read_text(encoding='utf-8'))
        self.model=model
        radius=self.config['footprint_radius_m']
        self.target_clearance=self.config['chassis_clearance_m']
        if not (.25 <= radius <= .75 and .1 <= self.target_clearance <= .4):
            raise ValueError('Stance dimensions outside validated model range')
        angles=np.deg2rad([30,90,150,-30,-90,-150])
        self.foot_xy=np.column_stack([radius*np.cos(angles),radius*np.sin(angles)])
        self.hips={leg:model.body(leg+'_hip').pos.copy() for leg in LEGS}
        self.thigh_offset={leg:model.body(leg+'_thigh').pos.copy() for leg in LEGS}
        self.upper={leg:float(np.linalg.norm(model.body(leg+'_calf').pos)) for leg in LEGS}
        self.lower={leg:float(np.linalg.norm(model.body(leg+'_foot').pos)) for leg in LEGS}
        self.foot_radius=float(model.geom('lf_foot_collision_foot_0').size[0])
        self.chassis_geom=model.geom('base_link_visual_body_plate_0').id
        mesh=int(model.geom_dataid[self.chassis_geom])
        start,count=model.mesh_vertadr[mesh],model.mesh_vertnum[mesh]
        self.chassis_vertices=model.mesh_vert[start:start+count].copy()
        reference=mujoco.MjData(model);mujoco.mj_forward(model,reference)
        self.underside_local_z=self.clearance(reference)-reference.qpos[2]
        self.base_height=self.target_clearance-self.underside_local_z
        self.factory_feet=self.foot_targets()
        self.factory_angles_deg=np.rad2deg(self.angles()).reshape(6,3)
        self.reference_feet=self.factory_feet.copy()
        self.reference_angles_deg=self.factory_angles_deg.copy()
        self.custom=False
        self.revision=0
        self.initial_base_height=self.base_height

    def clearance(self,data):
        rotation=data.geom_xmat[self.chassis_geom].reshape(3,3)
        return float(np.min(self.chassis_vertices@rotation[2])+data.geom_xpos[self.chassis_geom,2])

    def foot_targets(self,trim=0.):
        if hasattr(self,'reference_feet'):
            targets=self.reference_feet.copy();targets[:,2]-=trim
            return targets
        z=self.foot_radius-self.base_height-trim
        return np.column_stack([self.foot_xy,np.full(6,z)])

    def configure_angles(self,values):
        """Validate the full candidate before changing any live reference."""
        angles=np.asarray(values,dtype=float)
        if angles.shape!=(6,3) or not np.isfinite(angles).all():
            raise ValueError('请填写六条腿的三个有限角度值')
        if np.any(abs(angles-self.factory_angles_deg)>15.000001):
            raise ValueError('各关节相对六边形预设的调节范围为 ±15°')
        test=mujoco.MjData(self.model)
        test.qpos[2]=self.base_height
        for i,leg in enumerate(LEGS):
            for j,joint in enumerate(['hip','thigh','calf']):
                test.qpos[self.model.joint(f'{leg}_{joint}_joint').qposadr[0]]=np.deg2rad(angles[i,j])
        mujoco.mj_forward(self.model,test)
        feet=np.array([test.xpos[self.model.body(leg+'_foot').id] for leg in LEGS])
        if np.ptp(feet[:,2])>.03 or np.max(abs(feet[:,2]-self.foot_radius))>.04:
            raise ValueError('足端高度差超过 30 mm 或偏离地面超过 40 mm，请协调调整大腿与小腿角度')
        relative=feet-np.array([0.,0.,self.base_height])
        # Verify the entire height-trim envelope, including comparison-gait lift.
        for leg,target in zip(LEGS,relative):
            for trim in [-self.config['height_trim_limit_m'],self.config['height_trim_limit_m']]:
                for offset in [np.zeros(3),np.array([.08,0,.085]),np.array([-.08,0,.085])]:
                    self.ik(leg,target+offset-np.array([0,0,trim]))
        self.reference_feet=relative
        self.reference_angles_deg=angles.copy()
        self.custom=not np.allclose(angles,self.factory_angles_deg,atol=1e-6)
        self.initial_base_height=self.base_height+self.foot_radius-float(feet[:,2].min())
        self.revision+=1

    def settings(self):
        return dict(revision=self.revision,custom=self.custom,legs=LEGS,
            joint_names=['hip','thigh','calf'],reference_angles_deg=self.reference_angles_deg.tolist(),
            factory_angles_deg=self.factory_angles_deg.tolist(),adjustment_limit_deg=15,
            clearance_target_m=self.target_clearance)

    def ik(self,leg,target):
        side=1 if leg[0]=='l' else -1
        relative=np.asarray(target)-self.hips[leg]
        radius=float(np.linalg.norm(relative[:2]))
        z=relative[2]-self.thigh_offset[leg][2]
        upper,lower=self.upper[leg],self.lower[leg]
        cosine=(radius*radius+z*z-upper*upper-lower*lower)/(2*upper*lower)
        if cosine < -1.00000001 or cosine > 1.00000001:
            raise ValueError(f'{leg}: unreachable foot target {target}')
        knee=-math.acos(np.clip(cosine,-1.,1.))
        thigh=math.atan2(z,radius)-math.atan2(lower*math.sin(knee),upper+lower*math.cos(knee))
        yaw=math.atan2(-side*relative[0],side*relative[1])
        return np.array([yaw,thigh,knee])

    def angles(self,trim=0.):
        return np.concatenate([self.ik(leg,target) for leg,target in zip(LEGS,self.foot_targets(trim))])

    def knee_internal_angles(self,data):
        angles=[]
        for leg in LEGS:
            thigh=data.xpos[self.model.body(leg+'_thigh').id]
            knee=data.xpos[self.model.body(leg+'_calf').id]
            foot=data.xpos[self.model.body(leg+'_foot').id]
            a,b=thigh-knee,foot-knee
            cosine=np.dot(a,b)/(np.linalg.norm(a)*np.linalg.norm(b))
            angles.append(math.degrees(math.acos(np.clip(cosine,-1.,1.))))
        return angles

    def description(self):
        return dict(footprint='custom' if self.custom else 'regular_hexagon',footprint_radius_m=self.config['footprint_radius_m'],
            chassis_clearance_target_m=self.target_clearance,base_origin_target_m=self.base_height,
            chassis_underside_in_base_m=self.underside_local_z,foot_radius_m=self.foot_radius,
            foot_xy_body_m=self.foot_xy.tolist(),initial_joint_angles_deg=np.rad2deg(self.angles()).reshape(6,3).tolist(),
            knee_angle_definition='Internal angle between thigh and calf at knee; 180 degrees is straight',
            height_reference='Minimum Z of actual chassis plate visual mesh above the ground plane')
