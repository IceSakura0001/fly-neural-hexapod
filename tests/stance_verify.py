"""Geometric and loaded-physics acceptance for the requested 250 mm stance."""
import json
import math

import numpy as np


def footprint_metrics(feet):
    feet=np.asarray(feet)
    xy=feet[:,:2]
    center=xy.mean(axis=0)
    polygon=xy[[0,1,2,5,4,3]]
    sides=np.linalg.norm(np.roll(polygon,-1,axis=0)-polygon,axis=1)
    return dict(center_xy_m=center.tolist(),radius_m=np.linalg.norm(xy-center,axis=1).tolist(),
                edge_lengths_m=sides.tolist(),max_edge_spread_m=float(np.ptp(sides)),
                foot_center_height_spread_m=float(np.ptp(feet[:,2])))


def verify():
    from backend.simulation import Simulation
    sim=Simulation()
    initial=sim.state();geometry=footprint_metrics(initial['feet'])
    assert abs(initial['chassis_clearance_m']-.25)<1e-8
    assert np.max(abs(np.array(geometry['radius_m'])-.6))<1e-8
    assert np.max(abs(np.array(geometry['edge_lengths_m'])-.6))<1e-8
    assert np.max(abs(np.array(initial['feet'])[:,2]-.02))<1e-8
    assert all(80<angle<110 for angle in initial['knee_internal_angles_deg'])
    standing=[]
    for mode in ['vnc','neural','cpg']:
        sim.set_mode(mode);sim.step(5000)  # ten seconds, including gravity settling
        measurements=[]
        for _ in range(20):
            sim.step(500)
            measurements.append(sim.state()['chassis_clearance_m'])
        state=sim.state()
        assert max(abs(np.array(measurements)-.25))<.0005
        assert state['warnings']==0 and np.isfinite(sim.data.qpos).all()
        assert np.all(sim.foot_loads()>.1)
        actual=footprint_metrics(state['feet'])
        assert actual['max_edge_spread_m']<.005
        assert actual['foot_center_height_spread_m']<.001
        standing.append(dict(mode=mode,seconds=30,clearance_min_mm=min(measurements)*1000,
            clearance_max_mm=max(measurements)*1000,base_origin_height_mm=state['position'][2]*1000,
            foot_loads_bodyweight_fraction=sim.foot_loads().tolist(),footprint=actual,warnings=state['warnings']))
    # Changing controller and resetting must retain the geometric stance.
    sim.set_mode('neural')
    reset=sim.state()
    assert abs(reset['chassis_clearance_m']-.25)<1e-8
    assert np.allclose(reset['feet'],initial['feet'],atol=1e-9)
    return dict(passed=True,clearance_definition='Minimum Z of chassis plate mesh',
        footprint='regular hexagon, 600 mm circumradius',initial_clearance_mm=initial['chassis_clearance_m']*1000,
        initial_base_origin_height_mm=initial['position'][2]*1000,initial_foot_centers_m=initial['feet'],
        initial_joint_angles_deg=np.rad2deg(initial['joints']).reshape(6,3).tolist(),
        initial_knee_internal_angles_deg=initial['knee_internal_angles_deg'],initial_footprint=geometry,
        standing=standing,reset_retains_stance=True)


if __name__=='__main__':print(json.dumps(verify(),ensure_ascii=False,indent=2))
