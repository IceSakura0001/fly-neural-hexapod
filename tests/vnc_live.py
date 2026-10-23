"""End-to-end intent protocol, neural time, contacts and stop protections."""
import argparse
import asyncio
import json
import math
import time
import urllib.request

import websockets


async def verify(base):
    main_ws=None;main_replies=asyncio.Queue()
    def read():
        return json.load(urllib.request.urlopen(base+'/api/state',timeout=5))
    async def reply(ws,kind):
        if ws is main_ws:
            message=await asyncio.wait_for(main_replies.get(),5)
            assert message['type']==kind
            return message
        for _ in range(200):
            message=json.loads(await asyncio.wait_for(ws.recv(),5))
            if message['type']==kind:return message
        raise AssertionError('Expected '+kind)
    url=base.replace('http','ws',1)+'/ws';results=[]
    async with websockets.connect(url) as ws:
        main_ws=ws
        async def drain():
            async for raw in ws:
                message=json.loads(raw)
                if message['type']!='state':await main_replies.put(message)
        drainer=asyncio.create_task(drain())
        await ws.send(json.dumps(dict(command='set_mode',mode='vnc')))
        await asyncio.sleep(.5)
        for name,x,w,seconds in [('forward',1,0,8),('backward',-1,0,6),('left',0,1,6),('right',0,-1,6)]:
            await ws.send(json.dumps(dict(command='reset')));await asyncio.sleep(.5)
            start=read();await ws.send(json.dumps(dict(command='move_intent',forward=x,turn=w)))
            until=time.monotonic()+seconds;max_steps=0;max_spikes=0
            while time.monotonic()<until:
                await ws.send(json.dumps(dict(command='heartbeat')));await asyncio.sleep(.15)
                state=read();max_steps=max(max_steps,sum(state['vnc']['steps']));max_spikes=max(max_spikes,state['neural']['total_spikes'])
                assert state['mode']=='vnc' and state['warnings']==0 and not state['fault']
                assert state['intent']['requested']==[x,w] and state['phase']==0
            dx=state['position'][0]-start['position'][0];dyaw=state['yaw']-start['yaw']
            if x==1:assert dx>.15
            if x==-1:assert dx<-.1
            if w==1:assert dyaw>.3
            if w==-1:assert dyaw<-.3
            assert max_steps>=6 and max_spikes>start['neural']['total_spikes']
            results.append(dict(intent=name,wall_seconds=seconds,dx_m=dx,yaw_deg=math.degrees(dyaw),confirmed_steps=max_steps))
            await ws.send(json.dumps(dict(command='stop')))
        await ws.send(json.dumps(dict(command='move_intent',forward=2,turn=0)))
        assert (await reply(ws,'error'))['message']
        assert read()['command']=='stop'
        await ws.send(json.dumps(dict(command='move_intent',forward=1,turn=0)))
        await asyncio.sleep(.2)
        async with websockets.connect(url) as other:
            await other.send(json.dumps(dict(command='move_intent',forward=0,turn=1)))
            assert (await reply(other,'error'))['message']
        await asyncio.sleep(1.)  # no heartbeats; check wall-time watchdog
        assert read()['command']=='stop'
        await ws.send(json.dumps(dict(command='move_intent',forward=1,turn=0)))
        await asyncio.sleep(.2)
    await asyncio.sleep(.2);assert read()['command']=='stop'
    await drainer
    try:
        async with websockets.connect(url,origin='https://unrelated.invalid'):pass
        raise AssertionError('Cross-origin intent accepted')
    except websockets.exceptions.InvalidStatus as exc:assert exc.response.status_code==403
    async with websockets.connect(url) as ws:
        await ws.send(json.dumps(dict(command='reset')))
    return dict(passed=True,trials=results,invalid_intent_rejected=True,exclusive_control=True,
        watchdog_stop=True,disconnect_stop=True,cross_origin_rejected=True,
        intent_is_not_joint_target=True,scope='Engineering-reflex-assisted neural control; not a biological VNC gait claim')


if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('base',nargs='?',default='http://127.0.0.1:8000');args=parser.parse_args()
    print(json.dumps(asyncio.run(verify(args.base)),indent=2,ensure_ascii=False))
