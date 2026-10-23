import asyncio
import json
import logging
import os
import sys
import time
from collections import deque
from contextlib import asynccontextmanager
from datetime import datetime, timedelta, timezone
from pathlib import Path

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

from .simulation import Simulation

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(message)s')
logging.Formatter.converter = staticmethod(lambda timestamp: time.gmtime(timestamp + 8 * 3600))
log = logging.getLogger('hexapod')
events = deque(maxlen=100)
sim = None
owner = None
last_command = 0.
wall_ratio = 1.
fault = None
audit_job=dict(status='idle',completed=0,total=6,result=None,error=None)
audit_task=None
settings_path=Path(os.environ['STANCE_SETTINGS_PATH']) if os.environ.get('STANCE_SETTINGS_PATH') else None


def event(message):
    item = dict(time=datetime.now(timezone(timedelta(hours=8))).strftime('%H:%M:%S'), message=message)
    events.append(item); log.info(message)


async def physics():
    global last_command, wall_ratio, fault
    while True:
        started = time.monotonic()
        if sim.command != 'stop' and started - last_command > .8:
            sim.command = 'stop'; event('控制心跳超时，自动停止')
        try:
            if not fault: sim.step(5)
        except Exception as exc:
            fault = str(exc); sim.command = 'stop'; event('物理故障：' + fault)
        elapsed = time.monotonic() - started
        wall_ratio = .01 / max(.01, elapsed)
        await asyncio.sleep(max(0, .01-elapsed))


@asynccontextmanager
async def lifespan(app):
    global sim
    sim = Simulation()
    if settings_path and settings_path.exists():
        try:
            sim.set_stance_angles(json.loads(settings_path.read_text(encoding='utf-8'))['angles_deg'])
            event('已恢复保存的默认关节角度')
        except (ValueError,KeyError,OSError,TypeError) as exc:
            event('保存的站姿不可用，使用六边形预设：'+str(exc))
    event('用户 NBS V5 URDF 导入成功，18 路关节伺服就绪')
    event(f'MaleCNS 下行/VNC 子网络已加载：{sim.neural.metadata["neurons"]} 神经元，{sim.neural.metadata["fast_edges"]} 有效连接')
    event('默认 VNC 接触反馈实验：意图代理 → 下行/VNC → 工程接触反射层；非完整脑')
    task = asyncio.create_task(physics())
    yield
    task.cancel()
    try: await task
    except asyncio.CancelledError: pass
    if audit_task is not None and not audit_task.done():
        audit_task.cancel()
        try:await audit_task
        except asyncio.CancelledError:pass


app = FastAPI(title='Hexapod Neuro Lab', lifespan=lifespan)


@app.get('/api/health')
async def health():
    ok = sim is not None and fault is None
    return JSONResponse(dict(ok=ok, model='user_nbs_v5', sample=False, neural_connected=True,mode=sim.mode,
                physics_time=sim.data.time, warnings=sum(w.number for w in sim.data.warning), fault=fault), status_code=200 if ok else 503)


@app.get('/api/scene')
async def scene():
    return sim.scene()


@app.get('/api/state')
async def state():
    return dict(**sim.state(), events=list(events), realtime_ratio=wall_ratio, fault=fault)


@app.get('/api/neural/provenance')
async def provenance():
    return sim.neural.metadata


@app.get('/api/neural/neurons')
async def neurons():
    return dict(neurons=sim.neural.neurons, note='Official MaleCNS IDs and annotations; this deployment uses an induced subgraph')


@app.get('/api/neural/wiring')
async def neural_wiring():
    return sim.neural.wiring_map()


@app.get('/api/causal/trace')
async def causal_trace():
    return dict(session=sim.causal.session,intervention=sim.causal.mode,sample_interval_sim_s=.1,
        cells=sim.causal.raster_cells,samples=list(sim.causal.samples),source='actual simulation counts and signals')


@app.get('/api/causal/audit')
async def causal_audit():
    return audit_job


@app.get('/api/causal/report.json')
async def causal_report():
    if audit_job['result'] is None:return JSONResponse(dict(error='尚未完成实验'),status_code=404)
    return JSONResponse(audit_job['result'],headers={'Content-Disposition':'attachment; filename="causal-audit.json"'})


async def run_causal_audit(angles):
    process=None
    try:
        process=await asyncio.create_subprocess_exec(sys.executable,'-m','backend.audit_worker',
            stdin=asyncio.subprocess.PIPE,stdout=asyncio.subprocess.PIPE,stderr=asyncio.subprocess.PIPE,limit=4*1024*1024)
        process.stdin.write(json.dumps(dict(angles_deg=angles)).encode());await process.stdin.drain();process.stdin.close()
        async with asyncio.timeout(180):
            while line:=await process.stdout.readline():
                record=json.loads(line)
                if record['status']=='complete':
                    audit_job.update(status='complete',completed=6,result=record['result'])
                else:audit_job.update({key:value for key,value in record.items() if key in ['status','condition','completed','total']})
            code=await process.wait()
            if code or audit_job['status']!='complete':
                detail=(await process.stderr.read()).decode(errors='replace')[-2000:]
                raise RuntimeError('独立实验未完成：'+detail)
    except asyncio.CancelledError:
        if process and process.returncode is None:process.kill();await process.wait()
        raise
    except Exception as exc:
        if process and process.returncode is None:process.kill();await process.wait()
        audit_job.update(status='failed',error=str(exc),result=None)


@app.websocket('/ws')
async def websocket(ws: WebSocket):
    global owner, last_command, fault, audit_task
    # Same-origin browser control only; local nonbrowser integration clients may omit Origin.
    origin = ws.headers.get('origin')
    if origin and origin not in {f'http://{ws.headers.get("host")}', f'https://{ws.headers.get("host")}'}:
        await ws.close(code=1008); return
    await ws.accept()
    async def send_states():
        while True:
            await ws.send_json(dict(**sim.state(), events=list(events), realtime_ratio=wall_ratio, fault=fault))
            await asyncio.sleep(1/25)
    sender = asyncio.create_task(send_states())
    try:
        while True:
            msg = await ws.receive_json()
            command = msg.get('command')
            if command=='run_causal_audit':
                if audit_task is None or audit_task.done():
                    audit_job.update(status='running',condition='准备独立仿真',completed=0,result=None,error=None)
                    audit_task=asyncio.create_task(run_causal_audit(sim.stance.reference_angles_deg.tolist()))
                    event('启动六组独立因果对照；不改动当前场景')
                continue
            if command=='set_intervention':
                if owner is not None and owner is not ws:
                    await ws.send_json(dict(type='error',message='先停止当前控制方再切换因果对照'));continue
                try:sim.set_intervention(msg.get('intervention'))
                except (ValueError,TypeError) as exc:
                    await ws.send_json(dict(type='error',message=str(exc)));continue
                owner=None;fault=None
                event('现场对照：'+sim.causal.state()['label']+'；已停止并复位')
                continue
            if command=='move_intent':
                if sim.mode!='vnc':
                    await ws.send_json(dict(type='error',message='方向意图输入仅用于 VNC 闭环模式'));continue
                if owner is not None and owner is not ws:
                    await ws.send_json(dict(type='error',message='已有另一个页面正在控制'));continue
                try:sim.set_intent(msg.get('forward'),msg.get('turn'))
                except (ValueError,TypeError) as exc:
                    await ws.send_json(dict(type='error',message=str(exc)));continue
                owner=ws if sim.command!='stop' else None;last_command=time.monotonic()
                event(f'移动意图：前后 {sim.requested_intent()[0]:+.2f} / 转向 {sim.requested_intent()[1]:+.2f}')
                continue
            if command in {'set_stance','restore_stance'}:
                if owner is not None and owner is not ws:
                    await ws.send_json(dict(type='error',message='先停止当前控制方再调整站姿'));continue
                previous=sim.stance.reference_angles_deg.copy()
                values=sim.stance.factory_angles_deg if command=='restore_stance' else msg.get('angles_deg')
                try:
                    sim.set_stance_angles(values)
                    if settings_path:
                        temporary=settings_path.with_suffix('.tmp')
                        temporary.write_text(json.dumps(dict(angles_deg=sim.stance.reference_angles_deg.tolist()),allow_nan=False),encoding='utf-8')
                        temporary.replace(settings_path)
                except (ValueError,TypeError,OSError) as exc:
                    if not (sim.stance.reference_angles_deg==previous).all():sim.set_stance_angles(previous)
                    await ws.send_json(dict(type='error',message='站姿未保存：'+str(exc)));continue
                owner=None;fault=None
                event('已恢复六边形默认角度并复位' if command=='restore_stance' else '默认关节角度已保存并复位')
                await ws.send_json(dict(type='stance_saved',settings=sim.stance.settings(),persistent=bool(settings_path)))
                continue
            if command=='set_mode':
                mode=msg.get('mode')
                if mode not in ['vnc','neural','cpg']:
                    await ws.send_json(dict(type='error',message='未知控制模式'));continue
                if owner is not None and owner is not ws:
                    await ws.send_json(dict(type='error',message='先停止当前控制方再切换模式'));continue
                owner=None;sim.set_mode(mode);fault=None
                event('控制模式：'+dict(vnc='VNC 接触反馈实验（含工程反射层）',neural='MaleCNS 直接关节偏移对照',cpg='CPG 人工步态对照')[mode])
                continue
            if command not in {'forward','backward','left','right','stop','reset','heartbeat'}:
                await ws.send_json(dict(type='error', message='未知命令')); continue
            now = time.monotonic()
            if command == 'heartbeat':
                if owner is ws: last_command = now
                continue
            if command in {'stop', 'reset'}:
                if command == 'reset': sim.reset(); fault = None
                sim.command = 'stop'; owner = None
                event('场景已复位' if command == 'reset' else '已停止')
                continue
            if owner is not None and owner is not ws:
                await ws.send_json(dict(type='error', message='已有另一个页面正在控制')); continue
            owner = ws; last_command = now
            if command != sim.command:
                sim.set_command(command)
                event('控制命令：' + command)
    except (WebSocketDisconnect, RuntimeError):
        pass
    finally:
        sender.cancel()
        if owner is ws:
            owner = None; sim.command = 'stop'; event('控制连接断开，自动停止')


static = Path(os.environ.get('STATIC_DIR', Path(__file__).resolve().parents[1] / 'frontend/dist'))
if static.is_dir(): app.mount('/', StaticFiles(directory=static, html=True), name='console')
