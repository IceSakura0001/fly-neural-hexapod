import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import './style.css';
import './neural.css';
import CausalAudit from './CausalAudit.jsx';
import NeuralWiring from './NeuralWiring.jsx';

const labels={forward:'前进',backward:'后退',left:'左转',right:'右转',stop:'待机'};
const stateBus={current:null};

function Viewport({scene,onReady,view}){
  const mount=useRef(null);
  useEffect(()=>{
    if(!scene)return;
    const host=mount.current;
    let renderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}
    catch(e){onReady('WebGL 创建失败：'+e.message);return;}
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.setClearColor(0x101a22,1);renderer.shadowMap.enabled=true;
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-label','用户 NBS 六足模型实时三维视图');
    const world=new THREE.Scene(); world.up.set(0,0,1);
    world.fog=new THREE.Fog(0x101a22,10,35);
    const camera=new THREE.PerspectiveCamera(42,1,.01,100);
    camera.up.set(...(view==='top'?[1,0,0]:[0,0,1]));camera.position.set(2.3,-2.7,2.3);
    const controls=new OrbitControls(camera,renderer.domElement);
    controls.target.set(0,0,.2);controls.enableDamping=true;controls.maxPolarAngle=view==='top'?Math.PI:Math.PI*.49;controls.enableRotate=view!=='top';
    world.add(new THREE.HemisphereLight(0xc6eaff,0x53606a,2.8));
    const light=new THREE.DirectionalLight(0xffefdb,4);light.position.set(3,-4,7);light.castShadow=true;
    light.shadow.mapSize.set(2048,2048);light.shadow.camera.left=-3;light.shadow.camera.right=3;light.shadow.camera.top=3;light.shadow.camera.bottom=-3;
    world.add(light);
    const plane=new THREE.Mesh(new THREE.PlaneGeometry(80,80),new THREE.MeshStandardMaterial({color:0x14212a,roughness:1}));
    plane.position.z=-.005;plane.receiveShadow=true;world.add(plane);
    const grid=new THREE.GridHelper(40,80,0x42606c,0x233743);grid.rotation.x=Math.PI/2;world.add(grid);
    const axes=new THREE.AxesHelper(.25);axes.position.set(-.85,-.85,.01);world.add(axes);
    const geometries={};
    for(const [id,data] of Object.entries(scene.meshes)){
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(data.vertices,3));g.setIndex(data.faces);g.computeVertexNormals();geometries[id]=g;
    }
    const bodies={};
    for(const g of scene.geoms){
      if(!bodies[g.body]){bodies[g.body]=new THREE.Group();world.add(bodies[g.body]);}
      const color=g.name.includes('motor')?0x233640:g.name.includes('foot')?0x263b3a:g.name.startsWith('l')?0x72baae:0xc5d5db;
      const mesh=new THREE.Mesh(geometries[g.mesh],new THREE.MeshStandardMaterial({color,metalness:.45,roughness:.43}));
      mesh.position.fromArray(g.position);const [w,x,y,z]=g.quaternion;mesh.quaternion.set(x,y,z,w);mesh.castShadow=true;mesh.receiveShadow=true;bodies[g.body].add(mesh);
    }
    const trailPoints=[];
    const trailGeom=new THREE.BufferGeometry();
    const trailPositions=new Float32Array(1500*3);
    trailGeom.setAttribute('position',new THREE.BufferAttribute(trailPositions,3));trailGeom.setDrawRange(0,0);
    const trail=new THREE.Line(trailGeom,new THREE.LineBasicMaterial({color:0x72dac2,transparent:true,opacity:.7}));world.add(trail);
    const footprintPositions=new Float32Array(18),footprintGeom=new THREE.BufferGeometry();
    footprintGeom.setAttribute('position',new THREE.BufferAttribute(footprintPositions,3));
    const footprint=new THREE.LineLoop(footprintGeom,new THREE.LineBasicMaterial({color:0x9be6bc,transparent:true,opacity:.7}));footprint.frustumCulled=false;world.add(footprint);
    const footMarkers=new THREE.Points(footprintGeom,new THREE.PointsMaterial({color:0xb2f5cf,size:.026}));footMarkers.frustumCulled=false;world.add(footMarkers);
    let frame,previousTime=-1,fitted=false,lastBase=null;
    const resize=new ResizeObserver(()=>{const {width,height}=host.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/Math.max(height,1);camera.updateProjectionMatrix();});resize.observe(host);
    let frames=0;
    const animate=()=>{
      frame=requestAnimationFrame(animate);
      const s=stateBus.current;
      if(s){
        for(const b of s.bodies||[]){const group=bodies[b.name];if(group){group.position.fromArray(b.position);const[w,x,y,z]=b.quaternion;group.quaternion.set(x,y,z,w);}}
        if(!fitted){
          const bounds=new THREE.Box3();
          for(const group of Object.values(bodies))bounds.expandByObject(group);
          const sphere=bounds.getBoundingSphere(new THREE.Sphere());
          const vfov=camera.fov*Math.PI/180,hfov=2*Math.atan(Math.tan(vfov/2)*camera.aspect);
          const distance=sphere.radius/Math.sin(Math.min(vfov,hfov)/2)*1.25;
          const direction=view==='top'?new THREE.Vector3(0,0,1):new THREE.Vector3(1.1,-1.4,1.05).normalize();
          controls.target.copy(sphere.center);camera.position.copy(sphere.center).addScaledVector(direction,distance);fitted=true;
        }
        const base=new THREE.Vector3(s.position[0],s.position[1],0);
        if(lastBase){const delta=base.clone().sub(lastBase);camera.position.add(delta);controls.target.add(delta);}
        lastBase=base;
        if(s.feet){[0,1,2,5,4,3].forEach((foot,index)=>{footprintPositions[index*3]=s.feet[foot][0];footprintPositions[index*3+1]=s.feet[foot][1];footprintPositions[index*3+2]=s.feet[foot][2]+.026;});footprintGeom.attributes.position.needsUpdate=true;}
        if(s.time<previousTime){trailPoints.length=0;}
        if(s.time!==previousTime){
          previousTime=s.time;
          const point=new THREE.Vector3(s.position[0],s.position[1],.006);
          if(!trailPoints.length||point.distanceTo(trailPoints.at(-1))>.01){trailPoints.push(point);if(trailPoints.length>1500)trailPoints.shift();for(let i=0;i<trailPoints.length;i++)trailPoints[i].toArray(trailPositions,i*3);trailGeom.attributes.position.needsUpdate=true;trailGeom.setDrawRange(0,trailPoints.length);trailGeom.computeBoundingSphere();}
        }
      }
      controls.update();renderer.render(world,camera);
      if(++frames===3){host.dataset.rendered='true';onReady('3D 已就绪');}
    };animate();
    return()=>{cancelAnimationFrame(frame);resize.disconnect();controls.dispose();world.traverse(o=>{if(o.material)o.material.dispose();});Object.values(geometries).forEach(g=>g.dispose());trailGeom.dispose();footprintGeom.dispose();plane.geometry.dispose();renderer.dispose();host.replaceChildren();};
  },[scene,view]);
  return <div className="viewport" ref={mount}/>;
}

function App(){
  const [scene,setScene]=useState(null),[s,setState]=useState(null),[connected,setConnected]=useState(false),[error,setError]=useState(''),[renderStatus,setRenderStatus]=useState('3D 载入中');
  const [view,setView]=useState('perspective');
  const [intentGain,setIntentGain]=useState(1);const intentGainRef=useRef(1);intentGainRef.current=intentGain;
  const [stancePending,setStancePending]=useState(false),[stanceNotice,setStanceNotice]=useState('');
  const socket=useRef(null),active=useRef('stop');
  const send=(command)=>{if(socket.current?.readyState===WebSocket.OPEN){const axes={forward:[1,0],backward:[-1,0],left:[0,1],right:[0,-1]}[command];const payload=stateBus.current?.mode==='vnc'&&axes?{command:'move_intent',forward:axes[0]*intentGainRef.current,turn:axes[1]*intentGainRef.current}:{command};socket.current.send(JSON.stringify(payload));if(command!=='heartbeat')active.current=['reset','stop'].includes(command)?'stop':command;}};
  const setMode=mode=>{if(socket.current?.readyState===WebSocket.OPEN){socket.current.send(JSON.stringify({command:'set_mode',mode}));active.current='stop';}};
  const sendAudit=payload=>{if(socket.current?.readyState===WebSocket.OPEN){setError('');if(payload.command==='set_intervention')active.current='stop';socket.current.send(JSON.stringify(payload));}};
  const saveStance=(angles,restore=false)=>{if(socket.current?.readyState===WebSocket.OPEN){active.current='stop';setError('');setStanceNotice('');setStancePending(true);socket.current.send(JSON.stringify({command:restore?'restore_stance':'set_stance',angles_deg:angles}));}};
  useEffect(()=>{
    let disposed=false,timer;
    fetch('/api/scene').then(r=>{if(!r.ok)throw Error('模型加载失败');return r.json();}).then(setScene).catch(e=>setError(e.message));
    const connect=()=>{
      if(disposed)return;
      const ws=new WebSocket(`${location.protocol==='https:'?'wss':'ws'}://${location.host}/ws`);socket.current=ws;
      ws.onopen=()=>{setConnected(true);setError('');active.current='stop';};
      ws.onmessage=e=>{const data=JSON.parse(e.data);if(data.type==='state'){stateBus.current=data;setState(data);}else if(data.type==='error'){setError(data.message);setStanceNotice(data.message);setStancePending(false);active.current='stop';}else if(data.type==='stance_saved'){setError('');setStancePending(false);setStanceNotice(data.persistent?'已保存，容器重启后保留；场景已复位':'已应用并复位，本次会话有效');}};
      ws.onclose=()=>{setConnected(false);setStancePending(false);active.current='stop';if(!disposed)timer=setTimeout(connect,1500);};
      ws.onerror=()=>setError('连接中断，正在重连');
    };connect();
    const hb=setInterval(()=>{if(active.current!=='stop')send('heartbeat');},200);
    const stop=()=>send('stop');
    const hidden=()=>{if(document.hidden)stop();};
    const mapping={w:'forward',s:'backward',a:'left',d:'right',ArrowUp:'forward',ArrowDown:'backward',ArrowLeft:'left',ArrowRight:'right'};
    const keydown=e=>{if(e.repeat||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(mapping[e.key]){e.preventDefault();send(mapping[e.key]);}if(e.code==='Space'){e.preventDefault();stop();}};
    const keyup=e=>{if(mapping[e.key]){e.preventDefault();stop();}};
    window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',stop);document.addEventListener('visibilitychange',hidden);window.addEventListener('pointerup',stop);
    return()=>{disposed=true;clearTimeout(timer);clearInterval(hb);socket.current?.close();window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',stop);document.removeEventListener('visibilitychange',hidden);window.removeEventListener('pointerup',stop);};
  },[]);
  const button=(cmd,symbol,key)=><button className={`direction ${s?.command===cmd?'active':''}`} disabled={!connected||!!s?.fault} aria-label={labels[cmd]} onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);send(cmd);}} onPointerUp={()=>send('stop')} onPointerCancel={()=>send('stop')}><span>{symbol}</span><b>{labels[cmd]}</b><small>{key}</small></button>;
  return <div className="shell">
    <header><a className="brand" href="/"><span className="brand-icon">✳</span><div>HEXAPOD <em>/ NEURO LAB</em><small>六足机器人 · 神经控制实验室</small></div></a><div className="header-right"><span className="local">LOCAL / DOCKER</span><span className={`status ${connected?'online':''}`}>{connected?'实时连接':'正在连接'}</span></div></header>
    <main><div className="heading"><div><div className="eyebrow">EXPERIMENT 003 / VNC CONTACT FEEDBACK</div><h1>从意图，到触地。</h1><p>连接组仿真活动 · 接触反馈 · 工程运动接口</p></div><span className="mode-tag">{{vnc:'VNC 接触闭环',neural:'神经直接偏移对照',cpg:'CPG 人工步态对照'}[s?.mode]||'正在连接'}</span></div>
    <div className="mode-bar"><span>控制来源</span><button aria-label="VNC 接触闭环" className={s?.mode==='vnc'?'selected':''} onClick={()=>setMode('vnc')} disabled={!connected}>VNC 接触闭环</button><button aria-label="MaleCNS 神经实验" className={s?.mode==='neural'?'selected':''} onClick={()=>setMode('neural')} disabled={!connected}>神经直接偏移对照</button><button aria-label="CPG 人工步态对照" className={s?.mode==='cpg'?'selected':''} onClick={()=>setMode('cpg')} disabled={!connected}>CPG 人工步态对照</button><small>{s?.mode==='vnc'?'中央脑意图代理 + MaleCNS 下行/VNC + 工程接触反射层':s?.mode==='cpg'?'人工三足步态，仅用于链路对照':'旧版直接偏移；未形成可靠步行'}</small></div>
    <NeuralWiring state={s} connected={connected}/>
    <CausalAudit state={s} connected={connected} sendAudit={sendAudit}/>
    <div className="pose-summary"><span>{s?.stance_settings?.custom?'自定义默认角度':'初始足端正六边形 · 半径 600 mm'}</span><span>机身下表面净空 <b>{s?.chassis_clearance_m===undefined?'—':(s.chassis_clearance_m*1000).toFixed(1)} mm</b> / 目标 250 mm</span><span>膝内角 {s?.knee_internal_angles_deg?`${Math.min(...s.knee_internal_angles_deg).toFixed(1)}° ～ ${Math.max(...s.knee_internal_angles_deg).toFixed(1)}°`:'—'}</span></div>
    <div className="workspace"><section className="stage"><div className="stage-top"><div><span className="dot"/> 实时物理场景</div><div className="view-buttons"><button className={view==='perspective'?'selected':''} onClick={()=>setView('perspective')}>透视</button><button className={view==='top'?'selected':''} onClick={()=>setView('top')}>俯视足端</button></div></div><Viewport scene={scene} view={view} onReady={setRenderStatus}/><div className="scene-label"><b>NBS V5</b><span>用户 URDF · 18 自由度</span></div><div className="scene-help">{view==='top'?'俯视 · 前方 ↑ · 滚轮缩放':'拖动旋转 · 滚轮缩放'}<span>{renderStatus}</span></div><div className="stage-bottom"><span><i className="mint"/>左侧腿</span><span><i className="silver"/>右侧腿</span><span className="push">亮线：实际足端轮廓</span></div></section>
    <aside><section className="panel control"><div className="panel-title"><h2>{s?.mode==='vnc'?'移动想法输入':s?.mode==='cpg'?'对照步态指令':'下行通路刺激'}</h2><span className="pill">{labels[s?.command]||'待机'}</span></div><p>{s?.mode==='vnc'?'按住方向输入移动意图，作为中央脑代理刺激下行神经群。关节由神经活动与工程接触反射层驱动。':s?.mode==='cpg'?'按住 W / A / S / D 运行人工步态，松开停止。':'旧版放电到角度偏移对照，尚不能可靠行走。'}</p>{s?.mode==='vnc'&&<label className="intent-gain">意图强度 <b>{Math.round(intentGain*100)}%</b><input aria-label="意图强度" type="range" min="0.2" max="1" step="0.05" value={intentGain} onChange={e=>{const value=Number(e.target.value);intentGainRef.current=value;setIntentGain(value);if(active.current!=='stop')send(active.current);}}/></label>}<div className="pad"><div/>{button('forward','↑','W')}<div/>{button('left','↶','A')}<button className="stop" aria-label="停止" onPointerDown={()=>send('stop')}>■<small>停止</small></button>{button('right','↷','D')}<div/>{button('backward','↓','S')}<div/></div><button className="reset" onClick={()=>send('reset')} disabled={!connected}>↻ 复位场景<span>神经状态同步复位</span></button><div className="control-note">空格停止 · 失去焦点停止 · 断线自动停止</div></section>
    <section className="panel pipeline"><div className="panel-title"><h2>控制链路</h2><span>{s?.mode==='cpg'?'对照':'闭环实验'}</span></div><div className="chain"><b>{s?.mode==='cpg'?'人工 CPG':'下行 → VNC'}</b><i>→</i><b>{s?.mode==='vnc'?'接触反射层':s?.mode==='cpg'?'关节轨迹':'运动放电'}</b><i>→</i><b>18 路伺服</b></div><div className="neural"><span>感觉反馈</span><b>触地 / 载荷 / 滑移 / 扭矩</b><small>{s?.mode==='cpg'?'CPG 对照未读取神经输出':'MuJoCo → 感觉输入 → 连接组'}</small></div></section></aside></div>
    <VNCPanel state={s}/>
    <JointPanel state={s} connected={connected} pending={stancePending} notice={stanceNotice} onSave={saveStance} />
    <NeuralPanel neural={s?.neural} mode={s?.mode}/>
    <div className="metrics"><Metric label="仿真时间" value={s?.time?.toFixed(1)||'0.0'} unit="s"/><Metric label="机身位置 X / Y" value={s?`${s.position[0].toFixed(3)} / ${s.position[1].toFixed(3)}`:'—'} unit="m"/><Metric label="机身下表面净空" value={s?.chassis_clearance_m?.toFixed(3)||'—'} unit="m"/><Metric label="航向角" value={s?(s.yaw*180/Math.PI).toFixed(1):'—'} unit="°"/><Metric label="接触点 / 引擎警告" value={s?`${s.contacts} / ${s.warnings}`:'—'} unit=""/></div>
    <div className="lower"><section className="panel log-panel"><div className="panel-title"><h2>运行日志</h2><span className="live-label">LIVE</span></div><div className="logs" role="log">{(s?.events||[]).slice(-7).reverse().map((e,i)=><div key={`${e.time}${i}`}><time>{e.time}</time><span>{e.message}</span></div>)}</div></section><section className="panel model-panel"><div className="panel-title"><h2>模型与仿真假设</h2><span className="pill">用户模型</span></div><p>{scene?.engine||'MuJoCo'} · 500 Hz 物理 / 0.5 ms 神经步长 / 100 Hz 目标更新</p><p>质量 {scene?.mass?.toFixed(2)||'107.63'} kg · 保留 URDF 质量与惯量</p><small>神经细胞和连接来自 MaleCNS；LIF 动力学、感觉编码、肌肉到机器人投影是建模假设。未使用完整脑；接触步序由工程反射层生成，非生物节律重建。伺服参数未实机标定；暂关闭自身碰撞。</small></section></div>
    {(error||s?.fault)&&<div className="error" role="alert">{error||s.fault}</div>}
    <footer><span>HEXAPOD / NEURO LAB</span><span>本机运行 · 不连接实机 · AGX Orin 未使用</span></footer></main></div>;
}
function VNCPanel({state:s}){
  const feedback=s?.body_feedback,vnc=s?.vnc;
  if(!feedback||!vnc)return null;
  const legs=['左前','左中','左后','右前','右中','右后'];
  const stages={support:'支撑',lift:'抬足',advance:'前摆',lower:'落足'};
  return <section className="panel vnc-panel"><div className="panel-title"><h2>黑球触地反馈与等效肌群负载</h2><span className="pill">{s.mode==='vnc'?vnc.status:'传感观测 · 对照模式'}</span></div><div className="vnc-readout"><span>移动想法 <b>前后 {s.intent.requested[0].toFixed(2)} / 转向 {s.intent.requested[1].toFixed(2)}</b></span><span>运动神经使能 <b>{s.mode==='vnc'?(vnc.motor_gate*100).toFixed(0)+'%':'未使用'}</b></span><span>解码运动 <b>{s.mode==='vnc'?`${vnc.decoded_velocity_m_s.toFixed(3)} m/s · ${vnc.decoded_turn_rad_s.toFixed(3)} rad/s`:'—'}</b></span></div><div className="feedback-table-wrap"><table className="feedback-table"><thead><tr><th>腿 / 足端</th><th>法向载荷 N</th><th>滑移 mm/s</th><th>髋等效力 N</th><th>大腿等效力 N</th><th>小腿等效力 N</th><th>已确认落足</th></tr></thead><tbody>{legs.map((leg,i)=><tr key={leg}><th>{leg} <span className={feedback.touch[i]?'contact-on':'contact-off'}>{feedback.touch[i]?'触地':'离地'}</span><small>{s.mode==='vnc'?stages[vnc.leg_stages[i]]:'—'}</small></th><td>{feedback.normal_force_n[i].toFixed(1)}</td><td className={feedback.slip_m_s[i]>.03?'slipping':''}>{(feedback.slip_m_s[i]*1000).toFixed(1)}</td>{[0,1,2].map(j=><td key={j}>{(feedback.muscle_positive_n[i][j]+feedback.muscle_negative_n[i][j]).toFixed(0)}</td>)}<td>{s.mode==='vnc'?vnc.steps[i]:'—'}</td></tr>)}</tbody></table></div><p className="joint-footnote">只统计黑色足端球与地面的真实碰撞；载荷和接触点滑移送入工程感觉编码。等效力 = 滤波扭矩大小 ÷ 假设力臂（髋/大腿/小腿 {feedback.moment_arms_m[0].map(v=>(v*1000).toFixed(0)).join('/')} mm），不含未知共同收缩，不是真实果蝇肌肉力。中央脑由方向意图代理，步序由明确的工程反射规则生成。</p></section>;
}
function JointPanel({state:s,connected,pending,notice,onSave}){
  const settings=s?.stance_settings;
  const [draft,setDraft]=useState(null),[dirty,setDirty]=useState(false);
  useEffect(()=>{if(settings){setDraft(settings.reference_angles_deg.map(row=>row.map(v=>v.toFixed(3))));setDirty(false);}},[settings?.revision]);
  const legs=['左前','左中','左后','右前','右中','右后'],joints=['髋','大腿','小腿'];
  const edit=(i,j,value)=>{setDraft(old=>old.map((row,r)=>row.map((v,c)=>r===i&&c===j?value:v)));setDirty(true);};
  const valid=draft&&draft.every((row,i)=>row.every((v,j)=>v.trim()!==''&&Number.isFinite(Number(v))&&Math.abs(Number(v)-settings.factory_angles_deg[i][j])<=15.000001));
  return <div className="joint-workspace">
    <section className="panel torque-panel"><div className="panel-title"><h2>当前关节扭矩</h2><span className="pill">实时 · N·m</span></div><p className="joint-caption">仿真实际驱动扭矩；大字为大小，下方为带方向读数。</p><table className="joint-table"><thead><tr><th>腿</th>{joints.map(j=><th key={j}>{j}关节</th>)}</tr></thead><tbody>{legs.map((leg,i)=><tr key={leg}><th>{leg}</th>{joints.map((joint,j)=>{const value=s?.joint_torques_nm?.[i*3+j];return <td key={joint} className={Math.abs(value)>=405?'near-limit':''}><b aria-label={`${leg}${joint}扭矩大小`}>{value===undefined?'—':Math.abs(value).toFixed(2)}</b><small>{value===undefined?'':`${value>=0?'+':''}${value.toFixed(2)}`}</small></td>;})}</tr>)}</tbody></table><p className="joint-footnote">单关节限幅 ±450 N·m，接近限幅时标橙。为 MuJoCo 驱动力矩，不是实机传感器值，也不包含地面约束反力。</p></section>
    <section className="panel stance-panel"><div className="panel-title"><h2>默认关节角度</h2><span className="pill">{settings?.custom?'自定义':'六边形预设'} · °</span></div><p className="joint-caption">逐腿设置初始角度；复位和模式切换均沿用保存值。</p><form onSubmit={e=>{e.preventDefault();if(valid)onSave(draft.map(row=>row.map(Number)));}}><table className="joint-table angle-table"><thead><tr><th>腿</th>{joints.map(j=><th key={j}>{j}关节</th>)}</tr></thead><tbody>{legs.map((leg,i)=><tr key={leg}><th>{leg}</th>{joints.map((joint,j)=><td key={joint}><input type="number" step="any" aria-label={`${leg}${joint}默认角度`} value={draft?.[i]?.[j]??''} min={settings?settings.factory_angles_deg[i][j]-15:undefined} max={settings?settings.factory_angles_deg[i][j]+15:undefined} onChange={e=>edit(i,j,e.target.value)} disabled={!connected||pending||!draft}/></td>)}</tr>)}</tbody></table><div className="stance-actions"><button className="apply-stance" type="submit" disabled={!connected||pending||!valid||!dirty}>{pending?'正在保存…':'保存并复位'}</button><button type="button" onClick={()=>onSave(null,true)} disabled={!connected||pending}>恢复六边形预设</button></div></form><p className="joint-footnote">相对预设可调 ±15°。角度按模型零位计，区别于膝内角；自定义后不保证正六边形。250 mm 高度补偿继续作用，承重角度会有变化。足端高度不协调的设置会被拒绝。</p>{notice&&<p className="stance-notice" role="status">{notice}</p>}</section>
  </div>;
}
function NeuralPanel({neural:n,mode}){
  const history=useRef([]);
  if(n&&history.current.at(-1)?.time!==n.time_ms){if(n.time_ms<(history.current.at(-1)?.time||0))history.current=[];history.current.push({time:n.time_ms,values:n.leg_rates.map(x=>x.rate_hz)});if(history.current.length>100)history.current.shift();}
  if(!n)return <div className="panel neural-panel">正在加载 MaleCNS 连接组…</div>;
  const names={lf:'左前',lm:'左中',lr:'左后',rf:'右前',rm:'右中',rr:'右后'};
  return <section className={`panel neural-panel ${mode==='cpg'?'comparison':''}`}><div className="panel-title"><h2>连接组放电与关节投影</h2><span className="pill">{mode==='vnc'?'连接组仿真活动 + 工程接触反射':mode==='cpg'?'对照模式：神经输出未使用':'神经直接偏移对照'}</span></div><div className="neural-stats"><span><b>{n.neurons.toLocaleString()}</b> 神经元</span><span><b>{n.edges.toLocaleString()}</b> 有效连接</span><span><b>{n.motor_neurons}</b> 腿部运动神经元（{n.mapped_motor_neurons} 个用于投影）</span><span><b>{n.total_spikes.toLocaleString()}</b> 累计脉冲</span></div><div className="motor-grid">{n.leg_rates.map((leg,index)=><div className="motor-card" key={leg.leg}><div><b>{names[leg.leg]}</b><span>{leg.rate_hz.toFixed(1)} Hz</span></div><svg viewBox="0 0 100 28" role="img" aria-label={`${names[leg.leg]}运动神经元放电轨迹`}><polyline fill="none" stroke={index<3?'#83d9bf':'#a6c9de'} strokeWidth="1.3" points={history.current.map((sample,i)=>`${i*100/99},${27-Math.min(100,sample.values[index])*25/100}`).join(' ')}/></svg><small>目标偏移 {n.joint_offset_rad.slice(index*3,index*3+3).map(v=>(v*180/Math.PI).toFixed(1)+'°').join(' / ')}</small></div>)}</div><div className="neural-details"><span>当前刺激：{n.command==='stop'?'关闭':`${n.command} · ${n.stimulus_hz} Hz`}<small> bodyId: {n.stimulated_body_ids.join(', ')||'—'}</small></span><span>感觉输入均值：角度 {n.feedback_hz.angle||0} / 速度 {n.feedback_hz.velocity||0} / 载荷 {n.feedback_hz.load||0} Hz</span></div><p className="experiment-note">VNC 闭环以真实运动池活动使能、下行放电读取方向；抬足与落足由工程接触反射层协调。其他两模式保留为对照。</p></section>;
}
function Metric({label,value,unit}){return <div className="metric"><small>{label}</small><div>{value}<span>{unit}</span></div></div>;}
createRoot(document.getElementById('root')).render(<App/>);


