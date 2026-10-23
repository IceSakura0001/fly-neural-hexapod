"""Compare body progress, foot unloading and joint/torque activity in both modes."""
import json
import math

import numpy as np


def diagnose():
    from backend.simulation import Simulation
    sim=Simulation();results=[]
    for mode in ['neural','cpg']:
        sim.set_mode(mode);sim.step(5000)
        start=sim.data.qpos[:3].copy();sim.command='forward'
        angles=[];torques=[];heights=[];loads=[];targets=[]
        for _ in range(300):
            sim.step(10)  # six seconds, sampled at 50 Hz
            state=sim.state()
            angles.append(state['joints']);torques.append(state['joint_torques_nm'])
            targets.append(state['neural']['joint_offset_rad'])
            heights.append(np.array(state['feet'])[:,2]);loads.append(sim.foot_loads())
        q,t,h,l=np.array(angles),np.array(torques),np.array(heights),np.array(loads)
        # A genuine swing must unload the foot AND raise its sphere center.
        swings=(l<.1)&(h>.04)
        results.append(dict(mode=mode,seconds=6,dx_m=float(sim.data.qpos[0]-start[0]),
            dy_m=float(sim.data.qpos[1]-start[1]),yaw_deg=math.degrees(sim.state()['yaw']),
            joint_peak_to_peak_deg=np.rad2deg(np.ptp(q,axis=0)).reshape(6,3).tolist(),
            torque_rms_nm=np.sqrt(np.mean(t*t,axis=0)).reshape(6,3).tolist(),
            saturation_fraction=float(np.mean(abs(t)>=449.9)),
            foot_height_range_mm=np.stack([h.min(axis=0),h.max(axis=0)],axis=1).tolist(),
            unloaded_swing_samples_per_leg=swings.sum(axis=0).tolist(),
            neural_max_offset_deg=float(np.rad2deg(np.max(abs(np.array(targets))))),
            cpg_used=mode=='cpg',warnings=sim.state()['warnings']))
        results[-1]['foot_height_range_mm']=(np.array(results[-1]['foot_height_range_mm'])*1000).tolist()
    return dict(scope='Measured diagnosis only; not proof of biological mechanism',results=results)


if __name__=='__main__':print(json.dumps(diagnose(),indent=2,ensure_ascii=False))
