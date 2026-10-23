"""Load this model from Unicode Windows paths using in-memory assets.

python load_mujoco.py --headless --seconds 3
python load_mujoco.py                     # interactive passive drop viewer
python load_mujoco.py nbs_hexapod.urdf --headless
"""
import argparse,time,xml.etree.ElementTree as ET
from pathlib import Path
import mujoco
import numpy as np

def load_model(path):
    path=Path(path).resolve()
    xml=path.read_text(encoding='utf-8')
    root=ET.fromstring(xml)
    assets={}
    for mesh in root.findall('.//mesh'):
        filename=mesh.get('file') or mesh.get('filename')
        if not filename:continue
        if filename.startswith('package://'):
            filename=filename.split('/',3)[-1]
        payload=(path.parent/filename).read_bytes()
        assets[filename.replace('\\','/')]=payload
    return mujoco.MjModel.from_xml_string(xml,assets=assets)

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('model',nargs='?',default='mujoco_drop_test.xml')
    parser.add_argument('--headless',action='store_true')
    parser.add_argument('--seconds',type=float,default=3)
    args=parser.parse_args()
    path=Path(args.model)
    if not path.is_absolute():path=Path(__file__).resolve().parent/path
    model=load_model(path);data=mujoco.MjData(model)
    if args.headless:
        for _ in range(max(0,int(args.seconds/model.opt.timestep))):mujoco.mj_step(model,data)
        assert np.isfinite(data.qpos).all() and np.isfinite(data.qvel).all()
        assert not any(w.number for w in data.warning)
        print(f'PASS: {model.njnt} joints; t={data.time:.3f}s; finite state; no engine warnings.')
    else:
        from mujoco import viewer as mj_viewer
        with mj_viewer.launch_passive(model,data) as viewer:
            while viewer.is_running():
                start=time.monotonic();mujoco.mj_step(model,data);viewer.sync()
                time.sleep(max(0,model.opt.timestep-(time.monotonic()-start)))

if __name__=='__main__':main()
