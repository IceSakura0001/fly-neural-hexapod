import React,{useEffect,useState} from 'react';
import './wiring.css';

const legs=['lf','lm','lr','rf','rm','rr'];
const legNames=['左前','左中','左后','右前','右中','右后'];
const joints=['hip','thigh','calf'];
const jointNames=['髋','大腿','小腿'];
const directions=['forward','backward','left','right'];
const directionNames=['前进','后退','左转','右转'];
const clamp=value=>Math.max(0,Math.min(1,value||0));
const brightness=(spikes,count)=>spikes>0?.35+.65*clamp(spikes/Math.max(1,count*1.5)):0;
const curve=(x1,y1,x2,y2)=>`M${x1},${y1} C${(x1+x2)/2},${y1} ${(x1+x2)/2},${y2} ${x2},${y2}`;

function Wire({d,level=0,kind='neural',enabled=true,focused=true,route,label}){
  const power=enabled?clamp(level):0;
  return <path d={d} className={`wiring-wire ${kind} ${power>0?'firing':''} ${!enabled?'cut':''}`}
    data-route={route} data-enabled={String(enabled)} data-level={power.toFixed(3)}
    style={{opacity:(focused?1:.16)*(enabled?.13+power*.82:.4),strokeWidth:power>0?1.2+power*1.8:1}}>
    {label&&<title>{label}</title>}
  </path>;
}

export default function NeuralWiring({state:s,connected}){
  const [map,setMap]=useState(null),[error,setError]=useState(''),[leg,setLeg]=useState('all'),[pool,setPool]=useState(null),[held,setHeld]=useState(null);
  useEffect(()=>{let active=true;fetch('/api/neural/wiring').then(async r=>{if(!r.ok)throw Error('映射数据暂不可用');return r.json();}).then(value=>{if(active)setMap(value);}).catch(e=>{if(active)setError(e.message);});return()=>{active=false;};},[]);
  const frame=held||s,n=frame?.neural,c=frame?.causal,v=frame?.vnc,w=n?.wiring_window||{};
  const live=connected&&!!frame&&frame.mode==='vnc',synapses=live&&n?.synapses_enabled;
  const bypass=live&&c?.intervention==='bypass',output=live&&n?.motor_output_enabled&&!bypass;
  const artificial=live&&v?.output_enabled,gate=live?clamp(c?.applied_gate):0;
  const dnCounts=w.dn_spikes||{},poolCounts=w.pool_spikes||{},rates=n?.motor_rates_hz||{};
  const intent=frame?.intent?.requested||[0,0],moving=Math.max(...intent.map(Math.abs));
  const directionStrengths=[Math.max(intent[0],0),Math.max(-intent[0],0),Math.max(intent[1],0),Math.max(-intent[1],0)];
  const directionPower=live?clamp(Math.abs(c?.decoded_forward||0)+Math.abs(c?.decoded_turn||0)):0;
  const feedback=frame?.body_feedback,sensory=live&&n?.feedback_enabled;
  const selectLeg=value=>{setLeg(value);setPool(null);};
  const highlight=value=>leg==='all'||leg===value;
  const selected=pool&&map?.pools?.[pool];
  const selectedGroups=map?Object.entries(map.pools).filter(([key])=>pool?key===pool:leg==='all'?false:key.startsWith(`${leg}_`)):[];
  const frozen=!!held;
  return <section className={`panel wiring-panel ${frozen?'is-frozen':''}`} aria-label="神经到机身动态接线映射" data-window-ms={w.end_ms||0} data-window-mn-spikes={w.mapped_mn_spikes||0}>
    <div className="wiring-header"><div><div className="wiring-eyebrow">SIGNAL FLOW / 实时功能映射</div><h2>从神经活动，到机身动作</h2><p>逐层看信号如何汇聚、经过工程控制，再到六条腿。</p></div><div className="wiring-time"><span className={!connected?'offline':frozen?'frozen':'online'}>{!connected?'连接已断开':frozen?'画面已冻结':frame?.mode!=='vnc'?'对照模式 · 此路径未启用':'实时信号'}</span><b>{((w.end_ms||0)/1000).toFixed(1)} <small>s</small></b><small>最近 {w.duration_ms||100} ms 脉冲窗口</small></div></div>
    <div className="wiring-toolbar"><div className="wiring-leg-filter" role="group" aria-label="追踪腿部通路"><span>追踪通路</span><button aria-pressed={leg==='all'} onClick={()=>selectLeg('all')}>全部</button>{legs.map((key,i)=><button key={key} aria-label={`追踪${legNames[i]}腿`} aria-pressed={leg===key} onClick={()=>selectLeg(key)}>{legNames[i]}</button>)}</div><button className="wiring-freeze" disabled={!s} onClick={()=>setHeld(frozen?null:s)}>{frozen?'跟随实时':'冻结画面'}</button></div>
    {!map?<p className="wiring-loading" role="status">{error||'正在读取连接组分组与身体映射…'}</p>:<>
    <div className="wiring-pan-hint">左右滑动查看完整接线 · 点击运动池或腿部追踪 · 冻结只暂停图示，仿真继续</div><div className="wiring-scroll"><svg className="wiring-graph" viewBox="0 0 1470 670" role="group" aria-label="移动意图、下行DN、VNC、36运动池、单标量使能、人工步序与六腿18关节的动态映射">
      <defs><filter id="wiring-glow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3"/></filter></defs>
      <g className="wiring-columns"><text x="80" y="30">01 / 移动意图</text><text x="240" y="30">02 / 下行 DN</text><text x="382" y="30">03 / VNC 子网</text><text x="590" y="30">04 / 36 个运动池</text><text x="767" y="30">05 / 工程读出</text><text x="927" y="30">06 / 人工步序</text><text x="1260" y="30">07 / 六足机身</text></g>
      <rect className="wiring-neural-region" x="178" y="104" width="532" height="456" rx="13"/>
      <text className="wiring-region-title" x="194" y="125">MaleCNS 连接组子图 · 简化 LIF 仿真</text>
      <g className="wiring-dn-lines">{directions.map((key,i)=>{const y=185+i*100,level=live?brightness(dnCounts[key]||0,map.dn[key].count):0;return <React.Fragment key={key}><Wire d={curve(129,330,197,y)} level={live?directionStrengths[i]:0} kind="engineered" route={`intent-${key}`} label="用户方向经过人工刺激编码，非中央脑输出"/><Wire d={curve(279,y,337,330)} level={level} enabled={synapses} route={`dn-${key}-vnc`} label="进入VNC子网的汇总路径；不是某一条直接突触"/></React.Fragment>;})}</g>
      <g className="wiring-pool-lines">{legs.flatMap((key,i)=>joints.flatMap((joint,j)=>['positive','negative'].map((sign,k)=>{const name=`${key}_${joint}_${sign}`,x=526+j*58+k*22,y=192+i*62,level=live?brightness(poolCounts[name]||0,map.pools[name].count):0;return <React.Fragment key={name}><Wire d={curve(427,330,x-8,y)} level={level} enabled={synapses} focused={highlight(key)} label="VNC递归/多突触网络到运动池的分组示意"/><Wire d={curve(x+8,y,723,330)} level={level} enabled={output} focused={highlight(key)} route={`pool-${name}-gate`} label="此池参与220个唯一MN均值，只汇入同一个使能值"/></React.Fragment>;})))}</g>
      <Wire d={curve(811,330,876,330)} level={gate} enabled={artificial} kind="engineered" route="gate-to-engineering"/>
      <Wire d="M279,169 L300,169 L300,72 L927,72 L927,276" level={directionPower} enabled={live&&!bypass} kind="direction" route="dn-direction-readout"/>
      <text className="wiring-top-label" x="570" y="64">DN 方向活动 → 人工阈值/低通 → 方向读出</text>
      {bypass&&<><Wire d="M80,283 L80,91 L853,91 L853,250 L927,250 L927,276" level={moving} kind="engineered" route="artificial-bypass"/><text className="wiring-bypass-label" x="575" y="104">人工旁路：用户直接给方向，移动时使能 = 1</text></>}
      <g className="wiring-proxy"><rect x="29" y="282" width="100" height="96" rx="15"/><path d="M57 311 C48 293 78 292 78 308 C91 287 111 308 97 318 C109 331 82 342 78 324 C63 342 47 324 57 311"/><text x="79" y="354">用户移动意图</text><text className="wiring-small" x="79" y="399">中央脑未模拟</text><text className="wiring-small" x="79" y="416">人工代理输入</text><text className="wiring-number" x="79" y="447">{intent[0].toFixed(2)} / {intent[1].toFixed(2)}</text></g>
      {directions.map((key,i)=>{const y=185+i*100,spikes=dnCounts[key]||0,level=live?brightness(spikes,map.dn[key].count):0,hz=c?.dn_rates_hz?.[key]||0;return <g key={key} className="wiring-dn-node" data-dn={key} data-spikes={spikes} data-active={String(level>0)}><rect x="197" y={y-27} width="82" height="54" rx="8" style={{stroke:level>0?'#83d6eb':'#345865',fill:`rgba(87,187,216,${.05+level*.25})`}}/><circle cx="206" cy={y-17} r="3" fill="#96edff" opacity={level}/><text x="238" y={y-4}>{directionNames[i]}</text><text className="wiring-number" x="238" y={y+14}>{hz.toFixed(1)} Hz</text><title>{`${map.dn[key].count}个DN · 该窗口${spikes}脉冲 · bodyId ${map.dn[key].cells.map(c=>c.body_id).join(', ')}`}</title></g>;})}
      <g className="wiring-vnc-node"><rect x="337" y="249" width="90" height="162" rx="12" style={{stroke:synapses?'#407c70':'#626b72'}}/><path d="M351 272 H413 M351 278 H399 M351 284 H407"/><text x="382" y="312">VNC 网络</text><text className="wiring-small" x="382" y="333">{map.neurons.toLocaleString()} 细胞</text><text className="wiring-small" x="382" y="351">递归 / 多突触</text><text x="382" y="377" fill={synapses?'#a0d5c2':'#da9b8f'}>{synapses?'突触已连接':'突触未连接'}</text></g>
      {joints.map((key,j)=><text key={key} className="wiring-small" x={537+j*58} y="161">{jointNames[j]} ±</text>)}
      {legs.map((key,i)=><g key={key} opacity={highlight(key)?1:.28}><text className="wiring-leg-name" x="485" y={196+i*62}>{legNames[i]}</text>{joints.flatMap((joint,j)=>['positive','negative'].map((sign,k)=>{const name=`${key}_${joint}_${sign}`,spikes=poolCounts[name]||0,level=live?brightness(spikes,map.pools[name].count):0,x=526+j*58+k*22,y=192+i*62;return <g className={`wiring-pool-node ${pool===name?'selected':''}`} key={name} role="button" tabIndex="0" aria-label={`${legNames[i]}${jointNames[j]}${sign==='positive'?'正':'负'}投影运动池`} data-pool={name} data-spikes={spikes} data-active={String(level>0)} onClick={()=>{setLeg(key);setPool(name);}} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setLeg(key);setPool(name);}}}><circle className="wiring-halo" cx={x} cy={y} r="13" filter="url(#wiring-glow)" opacity={level*.6}/><circle cx={x} cy={y} r="8" style={{fill:level>0?`rgba(141,233,182,${.18+level*.75})`:'#152c30',stroke:level>0?'#b0f2ca':'#466f63'}}/><text x={x} y={y+3}>{k===0?'+':'−'}</text><title>{`${legNames[i]}${jointNames[j]} ${sign} · ${map.pools[name].count}细胞 · ${spikes}脉冲/${w.duration_ms||100}ms · ${(rates[name]||0).toFixed(2)}Hz`}</title></g>;}))}</g>)}
      <g className="wiring-gate-node" data-gate={gate.toFixed(3)}><rect x="723" y="281" width="88" height="98" rx="10"/><text x="767" y="302">220 MN 均值</text><text className="wiring-small" x="767" y="319">人工压缩 / 限幅</text><text className="wiring-gate-value" x="767" y="347">{(gate*100).toFixed(0)}%</text><text className="wiring-small" x="767" y="366">实际采用使能</text><text className="wiring-small" x="767" y="402">{w.mapped_mn_spikes||0} 脉冲 / 窗口</text><text className="wiring-small" x="767" y="420">{!output?'神经读出未使用':'36池 → 仅1个标量'}</text></g>
      <g className="wiring-engineering-node"><rect x="876" y="276" width="102" height="108" rx="10" style={{stroke:gate>0?'#e0b779':'#64583d'}}/><text x="927" y="298">人工接触步序</text><text className="wiring-small" x="927" y="320">抬足 / 前摆 / 落足</text><text className="wiring-small" x="927" y="340">逆解 + 关节伺服</text><text x="927" y="365">{v?.status||'等待状态'}</text><text className="wiring-small" x="927" y="408">神经使能 ≠ 逐关节控制</text><text className="wiring-small" x="927" y="426">v {(v?.decoded_velocity_m_s||0).toFixed(3)} m/s</text></g>
      <g className="wiring-robot"><rect x="1228" y="195" width="64" height="230" rx="25"/><path d="M1260 210 V175 M1253 183 L1260 175 L1267 183"/><text x="1260" y="163">前方</text><text x="1260" y="292">NBS V5</text><text className="wiring-small" x="1260" y="313">18 关节</text><text className="wiring-small" x="1260" y="334">实际施加</text><text className="wiring-small" x="1260" y="351">扭矩 N·m</text>
      {legs.map((key,i)=>{const side=i<3?-1:1,row=i%3,sy=215+row*95,tilt=(row-1)*.7,points=[0,1,2].map(j=>[1260+side*(62+j*36),sy+tilt*(24+j*25)]),foot=[1260+side*170,sy+tilt*99],focused=highlight(key);return <g key={key} opacity={focused?1:.23} className="wiring-body-leg" role="button" tabIndex="0" aria-label={`查看${legNames[i]}机身映射`} onClick={()=>selectLeg(key)} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();selectLeg(key);}}}><Wire d={curve(978,330,points[0][0],points[0][1])} enabled={artificial} level={gate} kind="engineered" focused={focused} route={`engineering-${key}`}/><path className="wiring-robot-limb" d={`M${1260+side*28},${sy} ${points.map(p=>`L${p}`).join(' ')} L${foot}`}/>{points.map(([x,y],j)=>{const torque=frame?.joint_torques_nm?.[i*3+j]||0,power=connected?clamp(Math.abs(torque)/90):0;return <g key={j} data-joint={`${key}_${joints[j]}`} data-torque={torque.toFixed(3)}><circle cx={x} cy={y} r={8} style={{fill:`rgba(238,188,116,${.08+power*.8})`,stroke:Math.abs(torque)>405?'#f28b79':'#ba9b6a'}}/><text className="wiring-joint-label" x={x} y={y+23}>{jointNames[j]}</text><title>{`${legNames[i]}${jointNames[j]}实际施加扭矩 ${torque.toFixed(2)} N·m，工程伺服输出，非神经放电`}</title></g>;})}<circle cx={foot[0]} cy={foot[1]} r="5" style={{fill:feedback?.touch?.[i]?'#a4dec6':'#1d292e',stroke:'#688e85'}}/><text className="wiring-body-label" x={foot[0]} y={foot[1]+(row===0?-15:30)}>{legNames[i]}</text></g>;})}
      </g>
      <Wire d="M1260,428 V608 H382 V411" enabled={sensory} level={sensory?clamp((n?.feedback_hz?.load||0)/140):0} kind="feedback" route="body-feedback" label="足端反馈经工程感觉编码输入感觉细胞；不是直接指定神经步序"/>
      <text className="wiring-feedback-label" x="815" y="601">触地 / 载荷 / 滑移 / 扭矩 → 人工感觉编码 → {map.sensory_neurons} 个感觉细胞</text>
      <text className="wiring-bottom-note" x="730" y="652">功能分组与软件接线示意；VNC 连线汇总多突触路径，不表示 DN 与各运动池直接相连。</text>
    </svg></div>
    <div className="wiring-legend"><span><i className="dn"/>下行活动</span><span><i className="mn"/>运动池脉冲</span><span><i className="engineering"/>工程控制 / 关节扭矩</span><span><i className="feedback"/>身体反馈</span><span><i className="disconnected"/>断开 / 未使用</span></div>
    <div className="wiring-explainer"><p><b>{bypass?'人工旁路正在运行':!live?'此图的 VNC 控制路径未启用':!synapses?'VNC 突触已切断':!output?'运动神经读出已切断':!artificial?'人工步序已关闭':'按住 W / A / S / D，观察信号变化'}</b><span>{bypass?'橙色旁路直接传入用户意图；MN 可以不放电而机身仍运动。':'神经亮度来自最近100 ms实际仿真计数；流动虚线仅表示窗口有活动，不表示单脉冲传导时刻。关节亮度按 |扭矩|/90 N·m 显示，站立承重也会亮。'}</span></p><p className="wiring-limit">中央脑尚未模拟，步序仍由人工规则生成。此图解释信号路径，不能单独证明果蝇大脑控制。</p></div>
    <div className="wiring-inspector"><div><b>{pool?`${legNames[legs.indexOf(leg)]} · ${jointNames[joints.indexOf(pool.split('_')[1])]} · ${pool.endsWith('positive')?'正':'负'}投影池`:leg==='all'?'点击绿色运动池或选择一条腿，查看映射细胞':`${legNames[legs.indexOf(leg)]}腿 · 6个运动池 → 公共使能 → 工程伺服`}</b>{selected&&<span>{selected.count} 个细胞 · 当前窗口 {poolCounts[pool]||0} 脉冲 · {(rates[pool]||0).toFixed(2)} Hz</span>}</div>{selectedGroups.length>0&&<details key={pool||leg}><summary>查看连接组 bodyId 与分组</summary>{selectedGroups.map(([key,value])=><p key={key}><b>{key}</b> ({value.count})：{value.cells.map(cell=>cell.body_id).join(' · ')}</p>)}<small>± 表示既有机器人关节投影符号，不等于已验证的生物拮抗肌作用。</small></details>}<a href="/api/neural/wiring" target="_blank" rel="noreferrer">查看原始分组映射 JSON ↗</a></div>
    </>}
  </section>;
}
