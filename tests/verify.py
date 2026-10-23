"""Repeatable acceptance: real dynamics, HTTP, WebSocket, watchdog and ownership."""
import argparse
import asyncio
import hashlib
import json
import math
import time
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


def physics_test():
    from backend.simulation import Simulation, MODEL_DIR
    import numpy as np
    sim = Simulation()
    sim.set_mode('cpg')  # Explicit artificial-gait regression, never neural acceptance.
    source = MODEL_DIR / 'nbs_hexapod.urdf'
    root = ET.parse(source).getroot()
    mesh_paths = sorted({m.get('filename') for m in root.findall('.//mesh')})
    assert all((MODEL_DIR / m).is_file() for m in mesh_paths)
    results = []
    for command in ['forward', 'backward', 'left', 'right']:
        sim.reset(); sim.step(1000)
        before = sim.state()
        sim.command = command; sim.step(3000)
        after = sim.state()
        dx = after['position'][0] - before['position'][0]
        assert np.isfinite(sim.data.qpos).all()
        assert after['warnings'] == 0
        assert .20 < after['position'][2] < .40
        if command == 'forward': assert dx > .30
        if command == 'backward': assert dx < -.30
        if command == 'left': assert after['yaw'] > .8
        if command == 'right': assert after['yaw'] < -.8
        results.append(dict(command=command, duration_sim_s=6, displacement_x_m=dx, yaw_deg=math.degrees(after['yaw']), height_m=after['position'][2], warnings=after['warnings']))
    sim.reset(); sim.step(15000)
    assert sim.state()['warnings'] == 0 and abs(sim.stance.clearance(sim.data)-.25)<.001
    return dict(passed=True, engine='MuJoCo', sample=False, joints=sim.model.nu,
                urdf_sha256=hashlib.sha256(source.read_bytes()).hexdigest(),
                links=len(root.findall('link')), unique_meshes=len(mesh_paths), missing_meshes=[],
                mass_kg=sum(sim.model.body_mass), commands=results, standing_test_sim_s=30)


def http_json(base, path):
    with urllib.request.urlopen(base + path, timeout=5) as r: return json.load(r)


async def live_test(base):
    import websockets
    health = http_json(base, '/api/health')
    assert health['ok'] and not health['sample']
    scene = http_json(base, '/api/scene')
    assert len(scene['geoms']) == 43 and scene['meshes']
    with urllib.request.urlopen(base, timeout=5) as response:
        html = response.read().decode()
        assert 'app.js' in html and response.status == 200
    url = base.replace('http', 'ws', 1) + '/ws'
    checks = []
    async with websockets.connect(url) as ws:
        await ws.send(json.dumps(dict(command='set_mode',mode='cpg')))
        await asyncio.sleep(.15)
        async def get_state(command=None, timeout=3):
            end = time.monotonic() + timeout
            while time.monotonic() < end:
                msg = json.loads(await asyncio.wait_for(ws.recv(), 3))
                if msg.get('type') == 'state' and (command is None or msg['command'] == command): return msg
            raise AssertionError('state timeout: ' + str(command))
        for command in ['forward', 'backward', 'left', 'right']:
            await ws.send(json.dumps(dict(command='reset')))
            await asyncio.sleep(.3)
            before = http_json(base, '/api/state')
            await ws.send(json.dumps(dict(command=command)))
            await get_state(command)
            start = time.monotonic()
            while time.monotonic() - start < 2.:
                await ws.send(json.dumps(dict(command='heartbeat')))
                await asyncio.sleep(.15)
            after = http_json(base, '/api/state')
            dx = after['position'][0] - before['position'][0]
            dyaw = after['yaw'] - before['yaw']
            if command == 'forward': assert dx > .08
            if command == 'backward': assert dx < -.08
            if command == 'left': assert dyaw > .15
            if command == 'right': assert dyaw < -.15
            assert after['warnings'] == 0
            assert any(e['message'] == '控制命令：' + command for e in after['events'])
            await ws.send(json.dumps(dict(command='stop')))
            await get_state('stop')
            checks.append(dict(command=command, displacement_x_m=dx, yaw_delta_deg=math.degrees(dyaw), log_verified=True))
        await ws.send(json.dumps(dict(command='forward')))
        await get_state('forward')
        async with websockets.connect(url) as other:
            await other.send(json.dumps(dict(command='left')))
            for _ in range(10):
                reply = json.loads(await other.recv())
                if reply['type'] == 'error': break
            assert reply['type'] == 'error'
        await get_state('stop', timeout=2)  # watchdog: no heartbeats
        await ws.send(json.dumps(dict(command='forward')))
        await get_state('forward')
    await asyncio.sleep(.15)
    state = http_json(base, '/api/state')
    assert state['command'] == 'stop'
    try:
        async with websockets.connect(url, origin='https://unrelated.invalid'): pass
        raise AssertionError('Cross-origin control accepted')
    except websockets.exceptions.InvalidStatus as exc:
        assert exc.response.status_code == 403
    async with websockets.connect(url) as ws:
        await ws.send(json.dumps(dict(command='set_mode',mode='neural')))
    return dict(passed=True, health=health, visual_geoms=len(scene['geoms']), mesh_assets=len(scene['meshes']),
                commands=checks, watchdog_stop=True, disconnect_stop=True, exclusive_control=True, cross_origin_rejected=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--live', default=None)
    args = parser.parse_args()
    print(json.dumps(asyncio.run(live_test(args.live)) if args.live else physics_test(), ensure_ascii=False, indent=2))
