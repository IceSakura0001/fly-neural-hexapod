"""Actual MuJoCo dynamics; base motion is caused only by joint/contact forces."""
import math
import json
import os
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path

import mujoco
import numpy as np

LEGS = ['lf', 'lm', 'lr', 'rf', 'rm', 'rr']
MODEL_DIR = Path(os.environ.get('MODEL_DIR', Path(__file__).resolve().parents[1] / 'models/nbs_hexapod_v5'))


def load_model():
    # Compile the supplied URDF, rather than using a separate animated lookalike.
    source = ET.parse(MODEL_DIR / 'nbs_hexapod.urdf').getroot()
    extension = ET.SubElement(source, 'mujoco')
    ET.SubElement(extension, 'compiler', discardvisual='false', fusestatic='false', strippath='false')
    assets = {m.get('filename'): (MODEL_DIR / m.get('filename')).read_bytes() for m in source.findall('.//mesh')}
    imported = mujoco.MjModel.from_xml_string(ET.tostring(source, encoding='unicode'), assets)
    with tempfile.TemporaryDirectory() as folder:
        path = Path(folder) / 'compiled.xml'
        mujoco.mj_saveLastXML(str(path), imported)
        root = ET.parse(path).getroot()
    world = root.find('worldbody')
    base = world.find("body[@name='base_link']")
    base.set('pos', '0 0 0.32')
    ET.SubElement(base, 'freejoint', name='floating_base')
    ET.SubElement(root, 'option', timestep='0.002', integrator='implicitfast', iterations='60', gravity='0 0 -9.81')
    # Keep the original collision meshes. Mask robot/robot collision for this MVP.
    for geom in root.findall('.//geom'):
        if geom.get('contype', '1') == '0' and geom.get('conaffinity', '1') == '0':
            continue
        geom.set('contype', '2'); geom.set('conaffinity', '1')
        geom.set('friction', '1.2 0.01 0.001')
        geom.set('condim', '3')
        if geom.get('name','').endswith('_foot_collision_foot_0'):
            # Heavy CAD mass compressed the default soft contact by ~10 mm.
            # Give foot-ground contact an explicit, better resolved support law.
            geom.set('priority','1')
            geom.set('solref','0.006 1')
            geom.set('solimp','0.95 0.99 0.001')
    ET.SubElement(world, 'geom', name='ground', type='plane', size='20 20 .1', contype='1', conaffinity='2', friction='1.2 .01 .001', rgba='.16 .20 .24 1')
    actuator = ET.SubElement(root, 'actuator')
    for joint in root.findall('.//joint'):
        joint.set('damping', '3')
        joint.set('armature', '.03')
    for leg in LEGS:
        foot = root.find(f".//body[@name='{leg}_foot']")
        ET.SubElement(foot, 'site', name=leg + '_tip', pos='0 0 0', size='.015')
        for joint in ['hip', 'thigh', 'calf']:
            ET.SubElement(actuator, 'position', name=f'{leg}_{joint}_servo', joint=f'{leg}_{joint}_joint', kp='3500', kv='90', forcelimited='true', forcerange='-450 450')
    model = mujoco.MjModel.from_xml_string(ET.tostring(root, encoding='unicode'), assets)
    return model


class Simulation:
    def __init__(self):
        self.model = load_model()
        self.data = mujoco.MjData(self.model)
        self.command = 'stop'
        self.speed = .10
        self.turn_rate = .25
        self.period = 1.5
        self.duty = .65
        self.phase = 0.
        self.control_accumulator = 0.
        self.hips = {leg: self.model.body(leg + '_hip').pos.copy() for leg in LEGS}
        self.joints = [f'{leg}_{joint}_joint' for leg in LEGS for joint in ['hip', 'thigh', 'calf']]
        self.qadr = np.array([self.model.joint(j).qposadr[0] for j in self.joints])
        self.feet = [self.model.site(leg + '_tip').id for leg in LEGS]
        self.dadr = np.array([self.model.joint(j).dofadr[0] for j in self.joints])
        self.foot_body = {self.model.body(leg+'_foot').id:i for i,leg in enumerate(LEGS)}
        from .stance import Stance
        self.stance=Stance(self.model)
        self.model.qpos0[2]=self.stance.base_height
        self.height_trim=0.
        self.mode = os.environ.get('CONTROLLER_MODE','vnc')
        from .neural import NeuralController
        self.neural = NeuralController()
        self.vnc_config=json.loads(Path(__file__).with_name('vnc.json').read_text(encoding='utf-8'))
        from .body_feedback import BodyFeedback
        from .vnc import VNCDecoder
        self.body_feedback=BodyFeedback(self.model,LEGS,self.qadr,self.dadr,self.feet,self.vnc_config)
        self.vnc=VNCDecoder(self.stance,self.vnc_config)
        from .causal import CausalMonitor
        self.causal=CausalMonitor()
        self.intent_gain=1.;self.vector_intent=None
        self.neutral = self.stance.angles()
        self.last_targets = self.neutral.copy()
        self.reset()

    def cpg_targets(self):
        v = self.speed * (1 if self.command == 'forward' else -1 if self.command == 'backward' else 0)
        w = self.turn_rate * (1 if self.command == 'left' else -1 if self.command == 'right' else 0)
        moving = self.command != 'stop'
        angles = []
        for i, leg in enumerate(LEGS):
            side = 1 if leg[0] == 'l' else -1
            neutral = self.stance.foot_targets(self.height_trim)[i]
            p = (self.phase + (0 if i in [0, 2, 4] else .5)) % 1
            if p < self.duty:
                offset = .5 - p / self.duty
                lift = 0
            else:
                t = (p - self.duty) / (1 - self.duty)
                offset = -.5 + (1 - math.cos(math.pi * t)) / 2
                lift = .085 * math.sin(math.pi * t)
            stride = np.array([v - w * neutral[1], w * neutral[0], 0]) * self.period * self.duty
            target = neutral + (stride * offset + np.array([0, 0, lift]) if moving else 0)
            angles.extend(self.stance.ik(leg,target))
        return np.array(angles)

    def foot_loads(self):
        load = np.zeros(6)
        force = np.zeros(6)
        for contact_id in range(self.data.ncon):
            contact=self.data.contact[contact_id]
            for geom in [contact.geom1,contact.geom2]:
                body=int(self.model.geom_bodyid[geom])
                if body in self.foot_body:
                    mujoco.mj_contactForce(self.model,self.data,contact_id,force)
                    load[self.foot_body[body]]+=abs(force[0])
        return load/max(sum(self.model.body_mass)*9.81/6,1)

    def targets(self):
        # Quasi-static height regulation adjusts only the stance reference.
        # Neural joint offsets or the explicit CPG comparison are added after it.
        clearance=self.stance.clearance(self.data)
        error=self.stance.target_clearance-clearance
        self.height_trim=float(np.clip(self.height_trim+self.stance.config['height_integral_gain_per_s']*error*.01,
            -self.stance.config['height_trim_limit_m'],self.stance.config['height_trim_limit_m']))
        self.neutral=self.stance.angles(self.height_trim)
        self.feedback=self.body_feedback.observe(self.data)
        if self.mode=='cpg': return self.cpg_targets()
        if self.mode=='vnc':
            intent=self.requested_intent()
            self.neural.control(self.command,self.data.qpos[self.qadr],self.data.qvel[self.dadr],
                self.feedback['load'],self.neutral,intent=intent,body_feedback=self.feedback)
            readout=self.neural.vnc_readout()
            readout=self.causal.intervene(readout,intent)
            base=self.data.xpos[self.model.body('base_link').id]
            rotation=self.data.xmat[self.model.body('base_link').id].reshape(3,3)
            feet=(self.data.site_xpos[self.feet]-base)@rotation
            targets=self.vnc.control(readout,feet,self.feedback,self.height_trim,stop=self.command=='stop')
            self.causal.observe(self)
            return targets
        if self.mode!='neural': raise ValueError('Unknown controller mode')
        return self.neural.control(self.command,self.data.qpos[self.qadr],self.data.qvel[self.dadr],self.foot_loads(),self.neutral)

    def set_mode(self,mode):
        if mode not in ['vnc','neural','cpg']: raise ValueError('Unknown controller mode')
        self.mode=mode;self.causal.mode='normal';self.reset()

    def set_intervention(self,mode):
        from .causal import MODES
        if mode not in MODES:raise ValueError('未知因果对照')
        if self.mode!='vnc':raise ValueError('请先切换到 VNC 接触闭环')
        self.causal.mode=mode;self.reset()

    def requested_intent(self):
        if self.command=='stop':return np.zeros(2)
        if self.vector_intent is not None:return self.vector_intent.copy()
        return np.array(dict(forward=[1.,0.],backward=[-1.,0.],left=[0.,1.],right=[0.,-1.])[self.command])*self.intent_gain

    def set_command(self,command):
        self.command=command;self.vector_intent=None

    def set_intent(self,forward,turn):
        vector=np.asarray([forward,turn],dtype=float)
        if not np.isfinite(vector).all() or np.max(abs(vector))>1.:raise ValueError('移动意图需为 -1 到 1 的有限方向量')
        self.vector_intent=vector
        self.command=('forward' if forward>0 else 'backward') if abs(forward)>=abs(turn) and forward else ('left' if turn>0 else 'right') if turn else 'stop'

    def set_stance_angles(self,values):
        self.stance.configure_angles(values)
        self.model.qpos0[2]=self.stance.initial_base_height
        self.reset()

    def reset(self):
        mujoco.mj_resetData(self.model, self.data)
        self.command = 'stop'; self.phase = 0.; self.control_accumulator = 0.
        self.height_trim=0.;self.neutral=self.stance.angles()
        self.neural.reset()
        self.vector_intent=None
        self.body_feedback.reset();self.vnc.reset()
        self.causal.reset()
        self.neural.enabled=self.causal.mode not in ['cut_synapses','bypass']
        self.neural.output_enabled=self.causal.mode!='cut_motor'
        self.neural.feedback_enabled=self.causal.mode!='no_afferents'
        self.vnc.enabled=self.causal.mode!='no_reflex'
        target = self.neutral.copy()
        self.last_targets=target.copy()
        self.data.qpos[self.qadr] = target
        self.data.ctrl[:] = target
        mujoco.mj_forward(self.model, self.data)
        self.feedback=self.body_feedback.observe(self.data)

    def step(self, count=5):
        for _ in range(count):
            if self.control_accumulator <= 0:
                self.last_targets = self.targets()
                self.data.ctrl[:] = self.last_targets
                self.control_accumulator = .01
            if self.mode=='cpg' and self.command != 'stop':
                self.phase = (self.phase + self.model.opt.timestep / self.period) % 1
            self.control_accumulator -= self.model.opt.timestep
            mujoco.mj_step(self.model, self.data)
        if not np.isfinite(self.data.qpos).all():
            raise RuntimeError('Nonfinite physics state')

    def state(self):
        q = self.data.qpos[3:7]
        yaw = math.atan2(2*(q[0]*q[3]+q[1]*q[2]), 1-2*(q[2]**2+q[3]**2))
        neural_state=self.neural.state()
        if self.mode=='vnc':
            neural_state.update(joint_offset_rad=(self.last_targets-self.neutral).tolist(),
                decoder='Actual MN activity gate + DN firing readout → engineered contact-event motor decoder',
                input_intent=self.neural.intent.tolist(),descending_rates_hz=self.neural.dn_readout,
                motor_gate=self.neural.motor_gate)
        return dict(type='state', time=round(self.data.time, 3), command=self.command, phase=round(self.phase, 4), mode=self.mode,
                    chassis_clearance_m=self.stance.clearance(self.data),chassis_clearance_target_m=self.stance.target_clearance,
                    height_trim_m=self.height_trim,knee_internal_angles_deg=self.stance.knee_internal_angles(self.data),
                    stance_settings=self.stance.settings(),
                    stance_persistence_enabled=bool(os.environ.get('STANCE_SETTINGS_PATH')),
                    joint_torques_nm=self.data.qfrc_actuator[self.dadr].tolist(),
                    joint_torque_limit_nm=450.,
                    torque_source='MuJoCo qfrc_actuator: signed applied actuator generalized force, not target torque or sensor data',
                    neural=neural_state, joint_targets=self.last_targets.tolist(),
                    intent=dict(requested=self.requested_intent().tolist(),source='UI movement intention proxy; central brain not simulated'),
                    body_feedback=self.body_feedback.serializable(self.feedback),vnc=self.vnc.state(),
                    causal=self.causal.state(),
                    position=self.data.qpos[:3].tolist(), yaw=yaw, velocity=self.data.qvel[:3].tolist(),
                    joints=self.data.qpos[self.qadr].tolist(), contacts=int(self.data.ncon),
                    warnings=int(sum(w.number for w in self.data.warning)),
                    bodies=[dict(name=self.model.body(i).name, position=self.data.xpos[i].tolist(), quaternion=self.data.xquat[i].tolist()) for i in range(1, self.model.nbody)],
                    feet=self.data.site_xpos[self.feet].tolist())

    def scene(self):
        # Render URDF visual meshes using MuJoCo's compiled transforms and vertices.
        meshes = {}
        geoms = []
        for i in range(self.model.ngeom):
            if self.model.geom_group[i] != 1:
                continue
            mid = int(self.model.geom_dataid[i])
            if mid < 0: continue
            key = str(mid)
            if key not in meshes:
                va, vn = self.model.mesh_vertadr[mid], self.model.mesh_vertnum[mid]
                fa, fn = self.model.mesh_faceadr[mid], self.model.mesh_facenum[mid]
                meshes[key] = dict(vertices=self.model.mesh_vert[va:va+vn].ravel().tolist(), faces=self.model.mesh_face[fa:fa+fn].ravel().tolist())
            geoms.append(dict(name=self.model.geom(i).name, body=self.model.body(int(self.model.geom_bodyid[i])).name,
                              mesh=key, position=self.model.geom_pos[i].tolist(), quaternion=self.model.geom_quat[i].tolist()))
        return dict(model='NBS 六足机器人 V5 · 用户 URDF', sample=False, engine='MuJoCo '+mujoco.__version__,
                    stance=self.stance.description(),
                    controller='MaleCNS 神经活动使能 + 工程接触反射；直接偏移/CPG 为对照', neural='中央脑意图代理；生物步态未重建',
                    mass=float(sum(self.model.body_mass)), source='models/nbs_hexapod_v5/nbs_hexapod.urdf',
                    assumptions=['原 URDF 质量/惯量保留（统一铝合金密度）', '仅地面接触；暂关闭机器人自身碰撞', '仿真假设：450 N·m 伺服上限、摩擦系数 1.2'], meshes=meshes, geoms=geoms)
