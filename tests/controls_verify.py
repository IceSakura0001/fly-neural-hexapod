"""Physics-backed torque and editable-reference checks, not a locomotion claim."""
import json

import numpy as np


def verify():
    from backend.simulation import Simulation,LEGS
    sim=Simulation()
    sim.set_mode('neural')
    original=sim.stance.factory_angles_deg.copy()
    sim.step(3000)
    before=sim.state()
    aids=[sim.model.actuator(f'{leg}_{joint}_servo').id for leg in LEGS for joint in ['hip','thigh','calf']]
    torque=np.array(before['joint_torques_nm'])
    np.testing.assert_allclose(torque,sim.data.actuator_force[aids],atol=1e-9)
    assert torque.shape==(18,) and np.isfinite(torque).all()
    assert max(abs(torque))<=450.000001 and max(abs(torque))>5
    assert before['mode']=='neural' and before['neural']['cpg_used'] is False

    custom=original.copy();custom[0,0]+=.5;custom[3,0]-=.5
    custom[:,1]+=.25
    sim.set_stance_angles(custom)
    np.testing.assert_allclose(np.rad2deg(sim.neutral).reshape(6,3),custom,atol=1e-8)
    assert sim.stance.custom and sim.command=='stop'
    sim.reset();np.testing.assert_allclose(np.rad2deg(sim.data.qpos[sim.qadr]).reshape(6,3),custom,atol=1e-8)
    sim.set_mode('cpg');np.testing.assert_allclose(np.rad2deg(sim.neutral).reshape(6,3),custom,atol=1e-8)
    sim.step(6000)
    assert abs(sim.state()['chassis_clearance_m']-.25)<.001
    custom_clearance=sim.state()['chassis_clearance_m']*1000
    sim.command='forward';sim.step(1000)
    assert sim.state()['warnings']==0 and np.isfinite(sim.data.qpos).all()
    invalids=[[[0]],(custom+100).tolist(),np.full((6,3),np.nan).tolist()]
    uneven=original.copy();uneven[0,1]+=14;invalids.append(uneven.tolist())
    rejected=0
    for invalid in invalids:
        try:sim.set_stance_angles(invalid)
        except ValueError:rejected+=1
        else:raise AssertionError('Invalid stance accepted')
        np.testing.assert_array_equal(sim.stance.reference_angles_deg,custom)
    sim.set_stance_angles(original);sim.set_mode('neural')
    assert sim.stance.custom is False
    assert abs(sim.state()['chassis_clearance_m']-.25)<1e-8
    return dict(passed=True,torque_source='qfrc_actuator at joint DOFs',
        actuator_force_mapping_verified=True,standing_torque_nm=torque.reshape(6,3).tolist(),
        joint_order=['hip','thigh','calf'],leg_order=LEGS,torque_limit_nm=450,
        custom_angles_applied_deg=custom.tolist(),custom_static_clearance_mm=custom_clearance,
        reset_and_mode_switch_retain_settings=True,invalid_candidates_rejected=rejected,
        invalid_candidates_leave_settings_unchanged=True,restored_hexagon=True)


if __name__=='__main__':print(json.dumps(verify(),indent=2,ensure_ascii=False))
