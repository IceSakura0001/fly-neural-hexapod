import json
import math
import numpy as np
from backend.simulation import Simulation


def probe(command='forward',seconds=15):
    sim=Simulation();sim.set_mode('vnc');sim.step(5000)
    start=sim.data.qpos[:3].copy();sim.command=command
    transitions=[];last=None;positions=[];clearances=[];max_torque=0.
    for i in range(round(seconds*50)):
        sim.step(10)
        state=sim.state();tag=state['vnc']['stage']+str(state['vnc']['steps'])
        if tag!=last:
            transitions.append(dict(t=state['time'],stage=state['vnc']['stage'],steps=state['vnc']['steps'],gate=state['vnc']['motor_gate'],touch=state['body_feedback']['touch']))
            last=tag
        positions.append(state['position']);clearances.append(state['chassis_clearance_m'])
        max_torque=max(max_torque,max(abs(np.array(state['joint_torques_nm']))))
    return dict(command=command,seconds=seconds,dx=float(sim.data.qpos[0]-start[0]),dy=float(sim.data.qpos[1]-start[1]),
        yaw_deg=math.degrees(state['yaw']),vnc=state['vnc'],dn=sim.neural.vnc_readout(),
        clearance_min=min(clearances),clearance_max=max(clearances),torque_max=max_torque,
        warnings=state['warnings'],transitions=transitions)


if __name__=='__main__':
    import sys
    print(json.dumps(probe(sys.argv[1] if len(sys.argv)>1 else 'forward',float(sys.argv[2]) if len(sys.argv)>2 else 15),indent=2,ensure_ascii=False))
