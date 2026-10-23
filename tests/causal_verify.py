"""Verify live interventions and report provenance, not a brain-control claim."""
import argparse
import asyncio
import json
import time
import urllib.request

import websockets


async def verify(base):
    def read(path='/api/state'):
        return json.load(urllib.request.urlopen(base+path,timeout=8))
    replies=asyncio.Queue();url=base.replace('http','ws',1)+'/ws'
    async with websockets.connect(url) as ws:
        async def drain():
            async for raw in ws:
                msg=json.loads(raw)
                if msg['type']!='state':await replies.put(msg)
        task=asyncio.create_task(drain())
        await ws.send(json.dumps(dict(command='set_mode',mode='vnc')))
        await ws.send(json.dumps(dict(command='set_intervention',intervention='bypass')))
        await asyncio.sleep(.3)
        state=read();assert state['causal']['intervention']=='bypass'
        assert state['neural']['synapses_enabled'] is False
        await ws.send(json.dumps(dict(command='move_intent',forward=1,turn=0)))
        for _ in range(22):
            await ws.send(json.dumps(dict(command='heartbeat')));await asyncio.sleep(.15)
        bypass=read();trace=read('/api/causal/trace')
        assert bypass['position'][0]>.06 and sum(bypass['vnc']['steps'])>=3
        assert bypass['causal']['measured_gate']==0 and bypass['causal']['applied_gate']==1
        assert trace['session']==bypass['causal']['session'] and len(trace['samples'])>=20
        assert len(trace['cells'])==28 and all(len(p['spike_counts'])==28 for p in trace['samples'])
        mn_rows=[i for i,c in enumerate(trace['cells']) if c['group']=='MN']
        assert all(sum(p['spike_counts'][i] for i in mn_rows)==0 for p in trace['samples'])
        assert any(sum(p['spike_counts'])>0 for p in trace['samples'])
        assert all(b['t']>a['t'] for a,b in zip(trace['samples'],trace['samples'][1:]))
        await ws.send(json.dumps(dict(command='set_intervention',intervention='not-a-mode')))
        assert (await asyncio.wait_for(replies.get(),5))['type']=='error'
        assert read()['causal']['intervention']=='bypass'
        await ws.send(json.dumps(dict(command='set_intervention',intervention='cut_motor')))
        await ws.send(json.dumps(dict(command='move_intent',forward=1,turn=0)))
        for _ in range(12):
            await ws.send(json.dumps(dict(command='heartbeat')));await asyncio.sleep(.15)
        cut=read();assert abs(cut['position'][0])<.005 and sum(cut['vnc']['steps'])==0
        assert cut['neural']['total_spikes']>1000 and cut['causal']['applied_gate']==0
        await ws.send(json.dumps(dict(command='set_mode',mode='cpg')));await asyncio.sleep(.15)
        assert read()['causal']['intervention']=='normal'
        await ws.send(json.dumps(dict(command='set_mode',mode='vnc')));await asyncio.sleep(.15)
        normal=read();assert normal['neural']['synapses_enabled'] and normal['neural']['motor_output_enabled']
    await task
    deadline=time.monotonic()+160
    while time.monotonic()<deadline:
        job=read('/api/causal/audit')
        if job['status'] in ['complete','failed']:break
        await asyncio.sleep(1)
    assert job['status']=='complete',job
    report=job['result'];assert report['passed'] and len(report['trials'])==6
    assert report==read('/api/causal/report.json')
    assert report['graph_weight_sha256']=='2f547b0a84d24869e6a2a142a8437ffbb668cd47c1966595af3d72fefcbe61f2'
    bypass_trial=next(r for r in report['trials'] if r['id']=='bypass')
    assert bypass_trial['actual_mn_spikes']==0 and bypass_trial['dx_m']>.25
    return dict(passed=True,live_bypass_dx_m=bypass['position'][0],live_cut_motor_dx_m=cut['position'][0],
        sampled_real_cells=28,raster_counts_verified=True,invalid_intervention_preserves_state=True,
        mode_switch_clears_intervention=True,isolated_report_completed=True,report_download_matches=True,
        report_conclusion=report['conclusion'],trials=[{k:r[k] for k in ['id','dx_m','actual_mn_spikes','mean_measured_gate','mean_applied_gate']} for r in report['trials']])


if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('base',nargs='?',default='http://127.0.0.1:8000');args=parser.parse_args()
    print(json.dumps(asyncio.run(verify(args.base)),ensure_ascii=False,indent=2))
