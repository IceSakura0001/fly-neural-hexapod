(()=>{var kM=Object.create;var e0=Object.defineProperty;var GM=Object.getOwnPropertyDescriptor;var XM=Object.getOwnPropertyNames;var WM=Object.getPrototypeOf,qM=Object.prototype.hasOwnProperty;var ms=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var YM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of XM(t))!qM.call(e,s)&&s!==n&&e0(e,s,{get:()=>t[s],enumerable:!(i=GM(t,s))||i.enumerable});return e};var vc=(e,t,n)=>(n=e!=null?kM(WM(e)):{},YM(t||!e||!e.__esModule?e0(n,"default",{value:e,enumerable:!0}):n,e));var d0=ms(kt=>{"use strict";var Wf=Symbol.for("react.transitional.element"),ZM=Symbol.for("react.portal"),KM=Symbol.for("react.fragment"),jM=Symbol.for("react.strict_mode"),JM=Symbol.for("react.profiler"),QM=Symbol.for("react.consumer"),$M=Symbol.for("react.context"),tS=Symbol.for("react.forward_ref"),eS=Symbol.for("react.suspense"),nS=Symbol.for("react.memo"),o0=Symbol.for("react.lazy"),n0=Symbol.iterator;function iS(e){return e===null||typeof e!="object"?null:(e=n0&&e[n0]||e["@@iterator"],typeof e=="function"?e:null)}var l0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c0=Object.assign,u0={};function qa(e,t,n){this.props=e,this.context=t,this.refs=u0,this.updater=n||l0}qa.prototype.isReactComponent={};qa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function h0(){}h0.prototype=qa.prototype;function qf(e,t,n){this.props=e,this.context=t,this.refs=u0,this.updater=n||l0}var Yf=qf.prototype=new h0;Yf.constructor=qf;c0(Yf,qa.prototype);Yf.isPureReactComponent=!0;var i0=Array.isArray,Me={H:null,A:null,T:null,S:null,V:null},f0=Object.prototype.hasOwnProperty;function Zf(e,t,n,i,s,a){return n=a.ref,{$$typeof:Wf,type:e,key:t,ref:n!==void 0?n:null,props:a}}function sS(e,t){return Zf(e.type,t,void 0,void 0,void 0,e.props)}function Kf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wf}function aS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var s0=/\/+/g;function Xf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?aS(""+e.key):t.toString(36)}function a0(){}function rS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(a0,a0):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Wa(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Wf:case ZM:r=!0;break;case o0:return r=e._init,Wa(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Xf(e,0):i,i0(s)?(n="",r!=null&&(n=r.replace(s0,"$&/")+"/"),Wa(s,t,n,"",function(c){return c})):s!=null&&(Kf(s)&&(s=sS(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(s0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(i0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Xf(i,l),r+=Wa(i,t,n,a,s);else if(l=iS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Xf(i,l++),r+=Wa(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Wa(rS(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function bc(e,t,n){if(e==null)return e;var i=[],s=0;return Wa(e,i,"","",function(a){return t.call(n,a,s++)}),i}function oS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var r0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lS(){}kt.Children={map:bc,forEach:function(e,t,n){bc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bc(e,function(){t++}),t},toArray:function(e){return bc(e,function(t){return t})||[]},only:function(e){if(!Kf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};kt.Component=qa;kt.Fragment=KM;kt.Profiler=JM;kt.PureComponent=qf;kt.StrictMode=jM;kt.Suspense=eS;kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};kt.cache=function(e){return function(){return e.apply(null,arguments)}};kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=c0({},e.props),s=e.key,a=void 0;if(t!=null)for(r in t.ref!==void 0&&(a=void 0),t.key!==void 0&&(s=""+t.key),t)!f0.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}return Zf(e.type,s,void 0,void 0,a,i)};kt.createContext=function(e){return e={$$typeof:$M,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:QM,_context:e},e};kt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)f0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Zf(e,a,void 0,void 0,null,s)};kt.createRef=function(){return{current:null}};kt.forwardRef=function(e){return{$$typeof:tS,render:e}};kt.isValidElement=Kf;kt.lazy=function(e){return{$$typeof:o0,_payload:{_status:-1,_result:e},_init:oS}};kt.memo=function(e,t){return{$$typeof:nS,type:e,compare:t===void 0?null:t}};kt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),s=Me.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(lS,r0)}catch(a){r0(a)}finally{Me.T=t}};kt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};kt.use=function(e){return Me.H.use(e)};kt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};kt.useCallback=function(e,t){return Me.H.useCallback(e,t)};kt.useContext=function(e){return Me.H.useContext(e)};kt.useDebugValue=function(){};kt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};kt.useEffect=function(e,t,n){var i=Me.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};kt.useId=function(){return Me.H.useId()};kt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};kt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};kt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};kt.useMemo=function(e,t){return Me.H.useMemo(e,t)};kt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};kt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};kt.useRef=function(e){return Me.H.useRef(e)};kt.useState=function(e){return Me.H.useState(e)};kt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};kt.useTransition=function(){return Me.H.useTransition()};kt.version="19.1.0"});var Ya=ms((C3,p0)=>{"use strict";p0.exports=d0()});var E0=ms(Se=>{"use strict";function $f(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Mc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function xi(e){return e.length===0?null:e[0]}function Ec(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Mc(o,n))l<s&&0>Mc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Mc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Mc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Se.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(m0=performance,Se.unstable_now=function(){return m0.now()}):(jf=Date,g0=jf.now(),Se.unstable_now=function(){return jf.now()-g0});var m0,jf,g0,Fi=[],gs=[],cS=1,Wn=null,sn=3,td=!1,So=!1,Eo=!1,ed=!1,y0=typeof setTimeout=="function"?setTimeout:null,v0=typeof clearTimeout=="function"?clearTimeout:null,_0=typeof setImmediate<"u"?setImmediate:null;function Sc(e){for(var t=xi(gs);t!==null;){if(t.callback===null)Ec(gs);else if(t.startTime<=e)Ec(gs),t.sortIndex=t.expirationTime,$f(Fi,t);else break;t=xi(gs)}}function nd(e){if(Eo=!1,Sc(e),!So)if(xi(Fi)!==null)So=!0,Ka||(Ka=!0,Za());else{var t=xi(gs);t!==null&&id(nd,t.startTime-e)}}var Ka=!1,To=-1,b0=5,M0=-1;function S0(){return ed?!0:!(Se.unstable_now()-M0<b0)}function Jf(){if(ed=!1,Ka){var e=Se.unstable_now();M0=e;var t=!0;try{t:{So=!1,Eo&&(Eo=!1,v0(To),To=-1),td=!0;var n=sn;try{e:{for(Sc(e),Wn=xi(Fi);Wn!==null&&!(Wn.expirationTime>e&&S0());){var i=Wn.callback;if(typeof i=="function"){Wn.callback=null,sn=Wn.priorityLevel;var s=i(Wn.expirationTime<=e);if(e=Se.unstable_now(),typeof s=="function"){Wn.callback=s,Sc(e),t=!0;break e}Wn===xi(Fi)&&Ec(Fi),Sc(e)}else Ec(Fi);Wn=xi(Fi)}if(Wn!==null)t=!0;else{var a=xi(gs);a!==null&&id(nd,a.startTime-e),t=!1}}break t}finally{Wn=null,sn=n,td=!1}t=void 0}}finally{t?Za():Ka=!1}}}var Za;typeof _0=="function"?Za=function(){_0(Jf)}:typeof MessageChannel<"u"?(Qf=new MessageChannel,x0=Qf.port2,Qf.port1.onmessage=Jf,Za=function(){x0.postMessage(null)}):Za=function(){y0(Jf,0)};var Qf,x0;function id(e,t){To=y0(function(){e(Se.unstable_now())},t)}Se.unstable_IdlePriority=5;Se.unstable_ImmediatePriority=1;Se.unstable_LowPriority=4;Se.unstable_NormalPriority=3;Se.unstable_Profiling=null;Se.unstable_UserBlockingPriority=2;Se.unstable_cancelCallback=function(e){e.callback=null};Se.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b0=0<e?Math.floor(1e3/e):5};Se.unstable_getCurrentPriorityLevel=function(){return sn};Se.unstable_next=function(e){switch(sn){case 1:case 2:case 3:var t=3;break;default:t=sn}var n=sn;sn=t;try{return e()}finally{sn=n}};Se.unstable_requestPaint=function(){ed=!0};Se.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=sn;sn=e;try{return t()}finally{sn=n}};Se.unstable_scheduleCallback=function(e,t,n){var i=Se.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:cS++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,$f(gs,e),xi(Fi)===null&&e===xi(gs)&&(Eo?(v0(To),To=-1):Eo=!0,id(nd,n-i))):(e.sortIndex=s,$f(Fi,e),So||td||(So=!0,Ka||(Ka=!0,Za()))),e};Se.unstable_shouldYield=S0;Se.unstable_wrapCallback=function(e){var t=sn;return function(){var n=sn;sn=t;try{return e.apply(this,arguments)}finally{sn=n}}}});var A0=ms((D3,T0)=>{"use strict";T0.exports=E0()});var C0=ms(mn=>{"use strict";var uS=Ya();function w0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _s(){}var pn={d:{f:_s,r:function(){throw Error(w0(522))},D:_s,C:_s,L:_s,m:_s,X:_s,S:_s,M:_s},p:0,findDOMNode:null},hS=Symbol.for("react.portal");function fS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ao=uS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn;mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(w0(299));return fS(e,t,null,n)};mn.flushSync=function(e){var t=Ao.T,n=pn.p;try{if(Ao.T=null,pn.p=2,e)return e()}finally{Ao.T=t,pn.p=n,pn.d.f()}};mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,pn.d.C(e,t))};mn.prefetchDNS=function(e){typeof e=="string"&&pn.d.D(e)};mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Tc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?pn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&pn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Tc(t.as,t.crossOrigin);pn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&pn.d.M(e)};mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Tc(n,t.crossOrigin);pn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Tc(t.as,t.crossOrigin);pn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else pn.d.m(e)};mn.requestFormReset=function(e){pn.d.r(e)};mn.unstable_batchedUpdates=function(e,t){return e(t)};mn.useFormState=function(e,t,n){return Ao.H.useFormState(e,t,n)};mn.useFormStatus=function(){return Ao.H.useHostTransitionStatus()};mn.version="19.1.0"});var N0=ms((U3,D0)=>{"use strict";function R0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0)}catch(e){console.error(e)}}R0(),D0.exports=C0()});var Lv=ms(Yu=>{"use strict";var Ve=A0(),$_=Ya(),dS=N0();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function tx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ex(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U0(e){if(dl(e)!==e)throw Error(tt(188))}function pS(e){var t=e.alternate;if(!t){if(t=dl(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return U0(s),e;if(a===i)return U0(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function nx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=nx(e),t!==null)return t;e=e.sibling}return null}var ye=Object.assign,mS=Symbol.for("react.element"),Ac=Symbol.for("react.transitional.element"),Po=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),gS=Symbol.for("react.provider"),sx=Symbol.for("react.consumer"),Xi=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Np=Symbol.for("react.memo"),vs=Symbol.for("react.lazy");Symbol.for("react.scope");var Bd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var _S=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var L0=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=L0&&e[L0]||e["@@iterator"],typeof e=="function"?e:null)}var xS=Symbol.for("react.client.reference");function Fd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case Pd:return"Profiler";case ix:return"StrictMode";case Id:return"Suspense";case zd:return"SuspenseList";case Bd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Po:return"Portal";case Xi:return(e.displayName||"Context")+".Provider";case sx:return(e._context.displayName||"Context")+".Consumer";case Dp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Np:return t=e.displayName||null,t!==null?t:Fd(e.type)||"Memo";case vs:t=e._payload,e=e._init;try{return Fd(e(t))}catch{}}return null}var Io=Array.isArray,Rt=$_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=dS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ha={pending:!1,data:null,method:null,action:null},Hd=[],ir=-1;function Ti(e){return{current:e}}function Ze(e){0>ir||(e.current=Hd[ir],Hd[ir]=null,ir--)}function Te(e,t){ir++,Hd[ir]=e.current,e.current=t}var Mi=Ti(null),$o=Ti(null),Ds=Ti(null),nu=Ti(null);function iu(e,t){switch(Te(Ds,t),Te($o,e),Te(Mi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?F_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=F_(t),e=bv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ze(Mi),Te(Mi,e)}function Mr(){Ze(Mi),Ze($o),Ze(Ds)}function Vd(e){e.memoizedState!==null&&Te(nu,e);var t=Mi.current,n=bv(t,e.type);t!==n&&(Te($o,e),Te(Mi,n))}function su(e){$o.current===e&&(Ze(Mi),Ze($o)),nu.current===e&&(Ze(nu),cl._currentValue=ha)}var kd=Object.prototype.hasOwnProperty,Up=Ve.unstable_scheduleCallback,sd=Ve.unstable_cancelCallback,yS=Ve.unstable_shouldYield,vS=Ve.unstable_requestPaint,Si=Ve.unstable_now,bS=Ve.unstable_getCurrentPriorityLevel,ax=Ve.unstable_ImmediatePriority,rx=Ve.unstable_UserBlockingPriority,au=Ve.unstable_NormalPriority,MS=Ve.unstable_LowPriority,ox=Ve.unstable_IdlePriority,SS=Ve.log,ES=Ve.unstable_setDisableYieldValue,pl=null,Ln=null;function As(e){if(typeof SS=="function"&&ES(e),Ln&&typeof Ln.setStrictMode=="function")try{Ln.setStrictMode(pl,e)}catch{}}var On=Math.clz32?Math.clz32:wS,TS=Math.log,AS=Math.LN2;function wS(e){return e>>>=0,e===0?32:31-(TS(e)/AS|0)|0}var wc=256,Cc=4194304;function la(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Uu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=la(i):(r&=o,r!==0?s=la(r):n||(n=o&~e,n!==0&&(s=la(n))))):(o=i&~a,o!==0?s=la(o):r!==0?s=la(r):n||(n=i&~e,n!==0&&(s=la(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function ml(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function CS(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lx(){var e=wc;return wc<<=1,(wc&4194048)===0&&(wc=256),e}function cx(){var e=Cc;return Cc<<=1,(Cc&62914560)===0&&(Cc=4194304),e}function ad(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function RS(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-On(n),p=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var d=f[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&ux(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function ux(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-On(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function hx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-On(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Lp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Op(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fx(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:Nv(e.type))}function DS(e,t){var n=se.p;try{return se.p=e,t()}finally{se.p=n}}var Vs=Math.random().toString(36).slice(2),an="__reactFiber$"+Vs,Tn="__reactProps$"+Vs,Lr="__reactContainer$"+Vs,Gd="__reactEvents$"+Vs,NS="__reactListeners$"+Vs,US="__reactHandles$"+Vs,O0="__reactResources$"+Vs,_l="__reactMarker$"+Vs;function Pp(e){delete e[an],delete e[Tn],delete e[Gd],delete e[NS],delete e[US]}function sr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lr]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=k_(e);e!==null;){if(n=e[an])return n;e=k_(e)}return t}e=n,n=e.parentNode}return null}function Or(e){if(e=e[an]||e[Lr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function zo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function pr(e){var t=e[O0];return t||(t=e[O0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[_l]=!0}var dx=new Set,px={};function Ma(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(px[e]=t,e=0;e<t.length;e++)dx.add(t[e])}var LS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),P0={},I0={};function OS(e){return kd.call(I0,e)?!0:kd.call(P0,e)?!1:LS.test(e)?I0[e]=!0:(P0[e]=!0,!1)}function Gc(e,t,n){if(OS(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Rc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Hi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var rd,z0;function $a(e){if(rd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rd=t&&t[1]||"",z0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rd+e+z0}var od=!1;function ld(e,t){if(!e||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var f=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){f=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){f=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&f&&typeof d.stack=="string")return[d.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{od=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$a(n):""}function PS(e){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return ld(e.type,!1);case 11:return ld(e.type.render,!1);case 1:return ld(e.type,!0);case 31:return $a("Activity");default:return""}}function B0(e){try{var t="";do t+=PS(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function IS(e){var t=mx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){i=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ru(e){e._valueTracker||(e._valueTracker=IS(e))}function gx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=mx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ou(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zS=/[\n"\\]/g;function jn(e){return e.replace(zS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yn(t)):e.value!==""+Yn(t)&&(e.value=""+Yn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Wd(e,r,Yn(t)):n!=null?Wd(e,r,Yn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Yn(o):e.removeAttribute("name")}function _x(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;n=n!=null?""+Yn(n):"",t=t!=null?""+Yn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function Wd(e,t,n){t==="number"&&ou(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function mr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function xx(e,t,n){if(t!=null&&(t=""+Yn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yn(n):""}function yx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(Io(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Yn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var BS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function F0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||BS.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vx(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&F0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&F0(e,a,t[a])}function Ip(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var FS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),HS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xc(e){return HS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qd=null;function zp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ar=null,gr=null;function H0(e){var t=Or(e);if(t&&(e=t.stateNode)){var n=e[Tn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Xd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+jn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Tn]||null;if(!s)throw Error(tt(90));Xd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&gx(i)}break t;case"textarea":xx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}}}var cd=!1;function bx(e,t,n){if(cd)return e(t,n);cd=!0;try{var i=e(t);return i}finally{if(cd=!1,(ar!==null||gr!==null)&&(ku(),ar&&(t=ar,e=gr,gr=ar=null,H0(t),e)))for(t=0;t<e.length;t++)H0(e[t])}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=!1;if(Ji)try{ja={},Object.defineProperty(ja,"passive",{get:function(){Yd=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{Yd=!1}var ja,ws=null,Bp=null,Wc=null;function Mx(){if(Wc)return Wc;var e,t=Bp,n=t.length,i,s="value"in ws?ws.value:ws.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Wc=s.slice(e,1<i?1-i:void 0)}function qc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dc(){return!0}function V0(){return!1}function An(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Dc:V0,this.isPropagationStopped=V0,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dc)},persist:function(){},isPersistent:Dc}),t}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=An(Sa),xl=ye({},Sa,{view:0,detail:0}),VS=An(xl),ud,hd,Co,Ou=ye({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Co&&(Co&&e.type==="mousemove"?(ud=e.screenX-Co.screenX,hd=e.screenY-Co.screenY):hd=ud=0,Co=e),ud)},movementY:function(e){return"movementY"in e?e.movementY:hd}}),k0=An(Ou),kS=ye({},Ou,{dataTransfer:0}),GS=An(kS),XS=ye({},xl,{relatedTarget:0}),fd=An(XS),WS=ye({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=An(WS),YS=ye({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ZS=An(YS),KS=ye({},Sa,{data:0}),G0=An(KS),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $S(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=QS[e])?!!t[e]:!1}function Fp(){return $S}var t1=ye({},xl,{key:function(e){if(e.key){var t=jS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?JS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(e){return e.type==="keypress"?qc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),e1=An(t1),n1=ye({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X0=An(n1),i1=ye({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),s1=An(i1),a1=ye({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),r1=An(a1),o1=ye({},Ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l1=An(o1),c1=ye({},Sa,{newState:0,oldState:0}),u1=An(c1),h1=[9,13,27,32],Hp=Ji&&"CompositionEvent"in window,Fo=null;Ji&&"documentMode"in document&&(Fo=document.documentMode);var f1=Ji&&"TextEvent"in window&&!Fo,Sx=Ji&&(!Hp||Fo&&8<Fo&&11>=Fo),W0=" ",q0=!1;function Ex(e,t){switch(e){case"keyup":return h1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function d1(e,t){switch(e){case"compositionend":return Tx(t);case"keypress":return t.which!==32?null:(q0=!0,W0);case"textInput":return e=t.data,e===W0&&q0?null:e;default:return null}}function p1(e,t){if(rr)return e==="compositionend"||!Hp&&Ex(e,t)?(e=Mx(),Wc=Bp=ws=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sx&&t.locale!=="ko"?null:t.data;default:return null}}var m1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Y0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m1[e.type]:t==="textarea"}function Ax(e,t,n,i){ar?gr?gr.push(i):gr=[i]:ar=i,t=Tu(t,"onChange"),0<t.length&&(n=new Lu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ho=null,el=null;function g1(e){xv(e,0)}function Pu(e){var t=zo(e);if(gx(t))return e}function Z0(e,t){if(e==="change")return t}var wx=!1;Ji&&(Ji?(Uc="oninput"in document,Uc||(dd=document.createElement("div"),dd.setAttribute("oninput","return;"),Uc=typeof dd.oninput=="function"),Nc=Uc):Nc=!1,wx=Nc&&(!document.documentMode||9<document.documentMode));var Nc,Uc,dd;function K0(){Ho&&(Ho.detachEvent("onpropertychange",Cx),el=Ho=null)}function Cx(e){if(e.propertyName==="value"&&Pu(el)){var t=[];Ax(t,el,e,zp(e)),bx(g1,t)}}function _1(e,t,n){e==="focusin"?(K0(),Ho=t,el=n,Ho.attachEvent("onpropertychange",Cx)):e==="focusout"&&K0()}function x1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pu(el)}function y1(e,t){if(e==="click")return Pu(t)}function v1(e,t){if(e==="input"||e==="change")return Pu(t)}function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:b1;function nl(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!kd.call(t,s)||!zn(e[s],t[s]))return!1}return!0}function j0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function J0(e,t){var n=j0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=j0(n)}}function Rx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ou(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ou(e.document)}return t}function Vp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var M1=Ji&&"documentMode"in document&&11>=document.documentMode,or=null,Zd=null,Vo=null,Kd=!1;function Q0(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kd||or==null||or!==ou(i)||(i=or,"selectionStart"in i&&Vp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&nl(Vo,i)||(Vo=i,i=Tu(Zd,"onSelect"),0<i.length&&(t=new Lu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=or)))}function oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},pd={},Nx={};Ji&&(Nx=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Ea(e){if(pd[e])return pd[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nx)return pd[e]=t[n];return e}var Ux=Ea("animationend"),Lx=Ea("animationiteration"),Ox=Ea("animationstart"),S1=Ea("transitionrun"),E1=Ea("transitionstart"),T1=Ea("transitioncancel"),Px=Ea("transitionend"),Ix=new Map,jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jd.push("scrollEnd");function ui(e,t){Ix.set(e,t),Ma(t,[e])}var $0=new WeakMap;function Jn(e,t){if(typeof e=="object"&&e!==null){var n=$0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:B0(t)},$0.set(e,t),t)}return{value:e,source:t,stack:B0(t)}}var qn=[],cr=0,kp=0;function Iu(){for(var e=cr,t=kp=cr=0;t<e;){var n=qn[t];qn[t++]=null;var i=qn[t];qn[t++]=null;var s=qn[t];qn[t++]=null;var a=qn[t];if(qn[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&zx(n,s,a)}}function zu(e,t,n,i){qn[cr++]=e,qn[cr++]=t,qn[cr++]=n,qn[cr++]=i,kp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Gp(e,t,n,i){return zu(e,t,n,i),lu(e)}function Pr(e,t){return zu(e,null,null,t),lu(e)}function zx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-On(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function lu(e){if(50<Jo)throw Jo=0,_p=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ur={};function A1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(e,t,n,i){return new A1(e,t,n,i)}function Xp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,t){var n=e.alternate;return n===null?(n=Un(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bx(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Xp(e)&&(r=1);else if(typeof e=="string")r=AE(e,n,Mi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Bd:return e=Un(31,n,t,s),e.elementType=Bd,e.lanes=a,e;case nr:return fa(n.children,s,a,t);case ix:r=8,s|=24;break;case Pd:return e=Un(12,n,t,s|2),e.elementType=Pd,e.lanes=a,e;case Id:return e=Un(13,n,t,s),e.elementType=Id,e.lanes=a,e;case zd:return e=Un(19,n,t,s),e.elementType=zd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gS:case Xi:r=10;break t;case sx:r=9;break t;case Dp:r=11;break t;case Np:r=14;break t;case vs:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=Un(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function fa(e,t,n,i){return e=Un(7,e,i,t),e.lanes=n,e}function md(e,t,n){return e=Un(6,e,null,t),e.lanes=n,e}function gd(e,t,n){return t=Un(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hr=[],fr=0,cu=null,uu=0,Zn=[],Kn=0,da=null,Wi=1,qi="";function ca(e,t){hr[fr++]=uu,hr[fr++]=cu,cu=e,uu=t}function Fx(e,t,n){Zn[Kn++]=Wi,Zn[Kn++]=qi,Zn[Kn++]=da,da=e;var i=Wi;e=qi;var s=32-On(i)-1;i&=~(1<<s),n+=1;var a=32-On(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Wi=1<<32-On(t)+s|n<<s|i,qi=a+e}else Wi=1<<a|n<<s|i,qi=e}function Wp(e){e.return!==null&&(ca(e,1),Fx(e,1,0))}function qp(e){for(;e===cu;)cu=hr[--fr],hr[fr]=null,uu=hr[--fr],hr[fr]=null;for(;e===da;)da=Zn[--Kn],Zn[Kn]=null,qi=Zn[--Kn],Zn[Kn]=null,Wi=Zn[--Kn],Zn[Kn]=null}var gn=null,Ne=null,ie=!1,pa=null,vi=!1,Jd=Error(tt(519));function xa(e){var t=Error(tt(418,""));throw il(Jn(t,e)),Jd}function t_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[an]=e,t[Tn]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<rl.length;n++)Yt(rl[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),_x(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),ru(t);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),yx(t,i.value,i.defaultValue,i.children),ru(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||vv(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=Wu),t=!0):t=!1,t||xa(e)}function e_(e){for(gn=e.return;gn;)switch(gn.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:gn=gn.return}}function Ro(e){if(e!==gn)return!1;if(!ie)return e_(e),ie=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Sp(e.type,e.memoizedProps)),n=!n),n&&Ne&&xa(e),e_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ne=ci(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,ks(e.type)?(e=Ap,Ap=null,Ne=e):Ne=t):Ne=gn?ci(e.stateNode.nextSibling):null;return!0}function yl(){Ne=gn=null,ie=!1}function n_(){var e=pa;return e!==null&&(En===null?En=e:En.push.apply(En,e),pa=null),e}function il(e){pa===null?pa=[e]:pa.push(e)}var Qd=Ti(null),Ta=null,Yi=null;function Ms(e,t,n){Te(Qd,t._currentValue),t._currentValue=n}function ji(e){e._currentValue=Qd.current,Ze(Qd)}function $d(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function tp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$d(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),$d(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function vl(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;zn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===nu.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}s=s.return}e!==null&&tp(t,e,n,i),t.flags|=262144}function hu(e){for(e=e.firstContext;e!==null;){if(!zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){Ta=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rn(e){return Hx(Ta,e)}function Lc(e,t){return Ta===null&&ya(e),Hx(e,t)}function Hx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(tt(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var w1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},C1=Ve.unstable_scheduleCallback,R1=Ve.unstable_NormalPriority,Fe={$$typeof:Xi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yp(){return{controller:new w1,data:new Map,refCount:0}}function bl(e){e.refCount--,e.refCount===0&&C1(R1,function(){e.controller.abort()})}var ko=null,ep=0,Tr=0,_r=null;function D1(e,t){if(ko===null){var n=ko=[];ep=0,Tr=gm(),_r={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ep++,t.then(i_,i_),t}function i_(){if(--ep===0&&ko!==null){_r!==null&&(_r.status="fulfilled");var e=ko;ko=null,Tr=0,_r=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function N1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var s_=Rt.S;Rt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&D1(e,t),s_!==null&&s_(e,t)};var ma=Ti(null);function Zp(){var e=ma.current;return e!==null?e:_e.pooledCache}function Zc(e,t){t===null?Te(ma,ma.current):Te(ma,t.pool)}function Vx(){var e=Zp();return e===null?null:{parent:Fe._currentValue,pool:e}}var Ml=Error(tt(460)),kx=Error(tt(474)),Bu=Error(tt(542)),np={then:function(){}};function a_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Oc(){}function Gx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Oc,Oc),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,o_(e),e;default:if(typeof t.status=="string")t.then(Oc,Oc);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,o_(e),e}throw Go=t,Ml}}var Go=null;function r_(){if(Go===null)throw Error(tt(459));var e=Go;return Go=null,e}function o_(e){if(e===Ml||e===Bu)throw Error(tt(483))}var bs=!1;function Kp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ns(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Us(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ce&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=lu(e),zx(e,null,n),t}return zu(e,i,t,n),lu(e)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hx(e,n)}}function _d(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var sp=!1;function Wo(){if(sp){var e=_r;if(e!==null)throw e}}function qo(e,t,n,i){sp=!1;var s=e.updateQueue;bs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var f=o.lane&-536870913,d=f!==o.lane;if(d?(Jt&f)===f:(i&f)===f){f!==0&&f===Tr&&(sp=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,v=o;f=t;var m=n;switch(v.tag){case 1:if(g=v.payload,typeof g=="function"){p=g.call(m,p,f);break t}p=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(m,p,f):g,f==null)break t;p=ye({},p,f);break t;case 2:bs=!0}}f=o.callback,f!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[f]:d.push(f))}else d={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Hs|=r,e.lanes=r,e.memoizedState=p}}function Xx(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function Wx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xx(n[e],t)}var Ar=Ti(null),fu=Ti(0);function l_(e,t){e=ts,Te(fu,e),Te(Ar,t),ts=e|t.baseLanes}function ap(){Te(fu,ts),Te(Ar,Ar.current)}function jp(){ts=fu.current,Ze(Ar),Ze(fu)}var Bs=0,Wt=null,de=null,Ie=null,du=!1,xr=!1,va=!1,pu=0,sl=0,yr=null,U1=0;function Le(){throw Error(tt(321))}function Jp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function Qp(e,t,n,i,s,a){return Bs=a,Wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rt.H=e===null||e.memoizedState===null?My:Sy,va=!1,a=n(i,s),va=!1,xr&&(a=Yx(t,n,i,s)),qx(e),a}function qx(e){Rt.H=mu;var t=de!==null&&de.next!==null;if(Bs=0,Ie=de=Wt=null,du=!1,sl=0,yr=null,t)throw Error(tt(300));e===null||Ye||(e=e.dependencies,e!==null&&hu(e)&&(Ye=!0))}function Yx(e,t,n,i){Wt=e;var s=0;do{if(xr&&(yr=null),sl=0,xr=!1,25<=s)throw Error(tt(301));if(s+=1,Ie=de=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Rt.H=F1,a=t(n,i)}while(xr);return a}function L1(){var e=Rt.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Wt.flags|=1024),t}function $p(){var e=pu!==0;return pu=0,e}function tm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function em(e){if(du){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}du=!1}Bs=0,Ie=de=Wt=null,xr=!1,sl=pu=0,yr=null}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Wt.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function ze(){if(de===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Ie===null?Wt.memoizedState:Ie.next;if(t!==null)Ie=t,de=e;else{if(e===null)throw Wt.alternate===null?Error(tt(467)):Error(tt(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Ie===null?Wt.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function nm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=sl;return sl+=1,yr===null&&(yr=[]),e=Gx(yr,e,t),t=Wt,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,Rt.H=t===null||t.memoizedState===null?My:Sy),e}function Fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===Xi)return rn(e)}throw Error(tt(438,String(e)))}function im(e){var t=null,n=Wt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Wt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=nm(),Wt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=_S;return t.index++,n}function Qi(e,t){return typeof t=="function"?t(e):t}function Kc(e){var t=ze();return sm(t,de,e)}function sm(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Jt&p)===p:(Bs&p)===p){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Tr&&(h=!0);else if((Bs&f)===f){c=c.next,f===Tr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Wt.lanes|=f,Hs|=f;p=c.action,va&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else f={lane:p,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Wt.lanes|=p,Hs|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!zn(a,e.memoizedState)&&(Ye=!0,h&&(n=_r,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xd(e){var t=ze(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);zn(a,t.memoizedState)||(Ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Zx(e,t,n){var i=Wt,s=ze(),a=ie;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!zn((de||s).memoizedState,n);r&&(s.memoizedState=n,Ye=!0),s=s.queue;var o=Jx.bind(null,i,s,e);if(El(2048,8,o,[e]),s.getSnapshot!==t||r||Ie!==null&&Ie.memoizedState.tag&1){if(i.flags|=2048,wr(9,Hu(),jx.bind(null,i,s,n,t),null),_e===null)throw Error(tt(349));a||(Bs&124)!==0||Kx(i,t,n)}return n}function Kx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Wt.updateQueue,t===null?(t=nm(),Wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jx(e,t,n,i){t.value=n,t.getSnapshot=i,Qx(t)&&$x(e)}function Jx(e,t,n){return n(function(){Qx(t)&&$x(e)})}function Qx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function $x(e){var t=Pr(e,2);t!==null&&In(t,e,2)}function rp(e){var t=Mn();if(typeof e=="function"){var n=e;if(e=n(),va){As(!0);try{n()}finally{As(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t}function ty(e,t,n,i){return e.baseState=n,sm(e,de,typeof i=="function"?i:Qi)}function O1(e,t,n,i,s){if(Vu(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Rt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,ey(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ey(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Rt.T,r={};Rt.T=r;try{var o=n(s,i),l=Rt.S;l!==null&&l(r,o),c_(e,t,o)}catch(c){op(e,t,c)}finally{Rt.T=a}}else try{a=n(s,i),c_(e,t,a)}catch(c){op(e,t,c)}}function c_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){u_(e,t,i)},function(i){return op(e,t,i)}):u_(e,t,n)}function u_(e,t,n){t.status="fulfilled",t.value=n,ny(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ey(e,n)))}function op(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ny(t),t=t.next;while(t!==i)}e.action=null}function ny(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function iy(e,t){return t}function h_(e,t){if(ie){var n=_e.formState;if(n!==null){t:{var i=Wt;if(ie){if(Ne){e:{for(var s=Ne,a=vi;s.nodeType!==8;){if(!a){s=null;break e}if(s=ci(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ne=ci(s.nextSibling),i=s.data==="F!";break t}}xa(i)}i=!1}i&&(t=n[0])}}return n=Mn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iy,lastRenderedState:t},n.queue=i,n=yy.bind(null,Wt,i),i.dispatch=n,i=rp(!1),a=lm.bind(null,Wt,!1,i.queue),i=Mn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=O1.bind(null,Wt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function f_(e){var t=ze();return sy(t,de,e)}function sy(e,t,n){if(t=sm(e,t,iy)[0],e=Kc(Qi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Sl(t)}catch(r){throw r===Ml?Bu:r}else i=t;t=ze();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Wt.flags|=2048,wr(9,Hu(),P1.bind(null,s,n),null)),[i,a,e]}function P1(e,t){e.action=t}function d_(e){var t=ze(),n=de;if(n!==null)return sy(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function wr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Wt.updateQueue,t===null&&(t=nm(),Wt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Hu(){return{destroy:void 0,resource:void 0}}function ay(){return ze().memoizedState}function jc(e,t,n,i){var s=Mn();i=i===void 0?null:i,Wt.flags|=e,s.memoizedState=wr(1|t,Hu(),n,i)}function El(e,t,n,i){var s=ze();i=i===void 0?null:i;var a=s.memoizedState.inst;de!==null&&i!==null&&Jp(i,de.memoizedState.deps)?s.memoizedState=wr(t,a,n,i):(Wt.flags|=e,s.memoizedState=wr(1|t,a,n,i))}function p_(e,t){jc(8390656,8,e,t)}function ry(e,t){El(2048,8,e,t)}function oy(e,t){return El(4,2,e,t)}function ly(e,t){return El(4,4,e,t)}function cy(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uy(e,t,n){n=n!=null?n.concat([e]):null,El(4,4,cy.bind(null,t,e),n)}function am(){}function hy(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Jp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function fy(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Jp(t,i[1]))return i[0];if(i=e(),va){As(!0);try{e()}finally{As(!1)}}return n.memoizedState=[i,t],i}function rm(e,t,n){return n===void 0||(Bs&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=nv(),Wt.lanes|=e,Hs|=e,n)}function dy(e,t,n,i){return zn(n,t)?n:Ar.current!==null?(e=rm(e,n,i),zn(e,t)||(Ye=!0),e):(Bs&42)===0?(Ye=!0,e.memoizedState=n):(e=nv(),Wt.lanes|=e,Hs|=e,t)}function py(e,t,n,i,s){var a=se.p;se.p=a!==0&&8>a?a:8;var r=Rt.T,o={};Rt.T=o,lm(e,!1,t,n);try{var l=s(),c=Rt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=N1(l,i);Yo(e,t,h,Pn(e))}else Yo(e,t,i,Pn(e))}catch(p){Yo(e,t,{then:function(){},status:"rejected",reason:p},Pn())}finally{se.p=a,Rt.T=r}}function I1(){}function lp(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=my(e).queue;py(e,s,t,ha,n===null?I1:function(){return gy(e),n(i)})}function my(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ha,baseState:ha,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:ha},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gy(e){var t=my(e).next.queue;Yo(e,t,{},Pn())}function om(){return rn(cl)}function _y(){return ze().memoizedState}function xy(){return ze().memoizedState}function z1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Pn();e=Ns(n);var i=Us(t,e,n);i!==null&&(In(i,t,n),Xo(i,t,n)),t={cache:Yp()},e.payload=t;return}t=t.return}}function B1(e,t,n){var i=Pn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vu(e)?vy(t,n):(n=Gp(e,t,n,i),n!==null&&(In(n,e,i),by(n,t,i)))}function yy(e,t,n){var i=Pn();Yo(e,t,n,i)}function Yo(e,t,n,i){var s={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))vy(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,zn(o,r))return zu(e,t,s,0),_e===null&&Iu(),!1}catch{}finally{}if(n=Gp(e,t,s,i),n!==null)return In(n,e,i),by(n,t,i),!0}return!1}function lm(e,t,n,i){if(i={lane:2,revertLane:gm(),action:i,hasEagerState:!1,eagerState:null,next:null},Vu(e)){if(t)throw Error(tt(479))}else t=Gp(e,n,i,2),t!==null&&In(t,e,2)}function Vu(e){var t=e.alternate;return e===Wt||t!==null&&t===Wt}function vy(e,t){xr=du=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function by(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hx(e,n)}}var mu={readContext:rn,use:Fu,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le},My={readContext:rn,use:Fu,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:p_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,jc(4194308,4,cy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jc(4194308,4,e,t)},useInsertionEffect:function(e,t){jc(4,2,e,t)},useMemo:function(e,t){var n=Mn();t=t===void 0?null:t;var i=e();if(va){As(!0);try{e()}finally{As(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Mn();if(n!==void 0){var s=n(t);if(va){As(!0);try{n(t)}finally{As(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=B1.bind(null,Wt,e),[i.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:function(e){e=rp(e);var t=e.queue,n=yy.bind(null,Wt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:am,useDeferredValue:function(e,t){var n=Mn();return rm(n,e,t)},useTransition:function(){var e=rp(!1);return e=py.bind(null,Wt,e.queue,!0,!1),Mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Wt,s=Mn();if(ie){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),_e===null)throw Error(tt(349));(Jt&124)!==0||Kx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,p_(Jx.bind(null,i,a,e),[e]),i.flags|=2048,wr(9,Hu(),jx.bind(null,i,a,n,t),null),n},useId:function(){var e=Mn(),t=_e.identifierPrefix;if(ie){var n=qi,i=Wi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,t="\xAB"+t+"R"+n,n=pu++,0<n&&(t+="H"+n.toString(32)),t+="\xBB"}else n=U1++,t="\xAB"+t+"r"+n.toString(32)+"\xBB";return e.memoizedState=t},useHostTransitionStatus:om,useFormState:h_,useActionState:h_,useOptimistic:function(e){var t=Mn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lm.bind(null,Wt,!0,n),n.dispatch=t,[e,t]},useMemoCache:im,useCacheRefresh:function(){return Mn().memoizedState=z1.bind(null,Wt)}},Sy={readContext:rn,use:Fu,useCallback:hy,useContext:rn,useEffect:ry,useImperativeHandle:uy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:fy,useReducer:Kc,useRef:ay,useState:function(){return Kc(Qi)},useDebugValue:am,useDeferredValue:function(e,t){var n=ze();return dy(n,de.memoizedState,e,t)},useTransition:function(){var e=Kc(Qi)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Zx,useId:_y,useHostTransitionStatus:om,useFormState:f_,useActionState:f_,useOptimistic:function(e,t){var n=ze();return ty(n,de,e,t)},useMemoCache:im,useCacheRefresh:xy},F1={readContext:rn,use:Fu,useCallback:hy,useContext:rn,useEffect:ry,useImperativeHandle:uy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:fy,useReducer:xd,useRef:ay,useState:function(){return xd(Qi)},useDebugValue:am,useDeferredValue:function(e,t){var n=ze();return de===null?rm(n,e,t):dy(n,de.memoizedState,e,t)},useTransition:function(){var e=xd(Qi)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:Zx,useId:_y,useHostTransitionStatus:om,useFormState:d_,useActionState:d_,useOptimistic:function(e,t){var n=ze();return de!==null?ty(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:im,useCacheRefresh:xy},vr=null,al=0;function Pc(e){var t=al;return al+=1,vr===null&&(vr=[]),Gx(vr,e,t)}function Do(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ic(e,t){throw t.$$typeof===mS?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function m_(e){var t=e._init;return t(e._payload)}function Ey(e){function t(u,_){if(e){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!e)return null;for(;_!==null;)t(u,_),_=_.sibling;return null}function i(u){for(var _=new Map;u!==null;)u.key!==null?_.set(u.key,u):_.set(u.index,u),u=u.sibling;return _}function s(u,_){return u=Ki(u,_),u.index=0,u.sibling=null,u}function a(u,_,x){return u.index=x,e?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=67108866,_):x):(u.flags|=67108866,_)):(u.flags|=1048576,_)}function r(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,_,x,y){return _===null||_.tag!==6?(_=md(x,u.mode,y),_.return=u,_):(_=s(_,x),_.return=u,_)}function l(u,_,x,y){var A=x.type;return A===nr?h(u,_,x.props.children,y,x.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vs&&m_(A)===_.type)?(_=s(_,x.props),Do(_,x),_.return=u,_):(_=Yc(x.type,x.key,x.props,null,u.mode,y),Do(_,x),_.return=u,_)}function c(u,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=gd(x,u.mode,y),_.return=u,_):(_=s(_,x.children||[]),_.return=u,_)}function h(u,_,x,y,A){return _===null||_.tag!==7?(_=fa(x,u.mode,y,A),_.return=u,_):(_=s(_,x),_.return=u,_)}function p(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=md(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ac:return x=Yc(_.type,_.key,_.props,null,u.mode,x),Do(x,_),x.return=u,x;case Po:return _=gd(_,u.mode,x),_.return=u,_;case vs:var y=_._init;return _=y(_._payload),p(u,_,x)}if(Io(_)||wo(_))return _=fa(_,u.mode,x,null),_.return=u,_;if(typeof _.then=="function")return p(u,Pc(_),x);if(_.$$typeof===Xi)return p(u,Lc(u,_),x);Ic(u,_)}return null}function f(u,_,x,y){var A=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return A!==null?null:o(u,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ac:return x.key===A?l(u,_,x,y):null;case Po:return x.key===A?c(u,_,x,y):null;case vs:return A=x._init,x=A(x._payload),f(u,_,x,y)}if(Io(x)||wo(x))return A!==null?null:h(u,_,x,y,null);if(typeof x.then=="function")return f(u,_,Pc(x),y);if(x.$$typeof===Xi)return f(u,_,Lc(u,x),y);Ic(u,x)}return null}function d(u,_,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(x)||null,o(_,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ac:return u=u.get(y.key===null?x:y.key)||null,l(_,u,y,A);case Po:return u=u.get(y.key===null?x:y.key)||null,c(_,u,y,A);case vs:var R=y._init;return y=R(y._payload),d(u,_,x,y,A)}if(Io(y)||wo(y))return u=u.get(x)||null,h(_,u,y,A,null);if(typeof y.then=="function")return d(u,_,x,Pc(y),A);if(y.$$typeof===Xi)return d(u,_,x,Lc(_,y),A);Ic(_,y)}return null}function g(u,_,x,y){for(var A=null,R=null,w=_,D=_=0,E=null;w!==null&&D<x.length;D++){w.index>D?(E=w,w=null):E=w.sibling;var b=f(u,w,x[D],y);if(b===null){w===null&&(w=E);break}e&&w&&b.alternate===null&&t(u,w),_=a(b,_,D),R===null?A=b:R.sibling=b,R=b,w=E}if(D===x.length)return n(u,w),ie&&ca(u,D),A;if(w===null){for(;D<x.length;D++)w=p(u,x[D],y),w!==null&&(_=a(w,_,D),R===null?A=w:R.sibling=w,R=w);return ie&&ca(u,D),A}for(w=i(w);D<x.length;D++)E=d(w,u,D,x[D],y),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?D:E.key),_=a(E,_,D),R===null?A=E:R.sibling=E,R=E);return e&&w.forEach(function(N){return t(u,N)}),ie&&ca(u,D),A}function v(u,_,x,y){if(x==null)throw Error(tt(151));for(var A=null,R=null,w=_,D=_=0,E=null,b=x.next();w!==null&&!b.done;D++,b=x.next()){w.index>D?(E=w,w=null):E=w.sibling;var N=f(u,w,b.value,y);if(N===null){w===null&&(w=E);break}e&&w&&N.alternate===null&&t(u,w),_=a(N,_,D),R===null?A=N:R.sibling=N,R=N,w=E}if(b.done)return n(u,w),ie&&ca(u,D),A;if(w===null){for(;!b.done;D++,b=x.next())b=p(u,b.value,y),b!==null&&(_=a(b,_,D),R===null?A=b:R.sibling=b,R=b);return ie&&ca(u,D),A}for(w=i(w);!b.done;D++,b=x.next())b=d(w,u,D,b.value,y),b!==null&&(e&&b.alternate!==null&&w.delete(b.key===null?D:b.key),_=a(b,_,D),R===null?A=b:R.sibling=b,R=b);return e&&w.forEach(function(Y){return t(u,Y)}),ie&&ca(u,D),A}function m(u,_,x,y){if(typeof x=="object"&&x!==null&&x.type===nr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ac:t:{for(var A=x.key;_!==null;){if(_.key===A){if(A=x.type,A===nr){if(_.tag===7){n(u,_.sibling),y=s(_,x.props.children),y.return=u,u=y;break t}}else if(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vs&&m_(A)===_.type){n(u,_.sibling),y=s(_,x.props),Do(y,x),y.return=u,u=y;break t}n(u,_);break}else t(u,_);_=_.sibling}x.type===nr?(y=fa(x.props.children,u.mode,y,x.key),y.return=u,u=y):(y=Yc(x.type,x.key,x.props,null,u.mode,y),Do(y,x),y.return=u,u=y)}return r(u);case Po:t:{for(A=x.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),y=s(_,x.children||[]),y.return=u,u=y;break t}else{n(u,_);break}else t(u,_);_=_.sibling}y=gd(x,u.mode,y),y.return=u,u=y}return r(u);case vs:return A=x._init,x=A(x._payload),m(u,_,x,y)}if(Io(x))return g(u,_,x,y);if(wo(x)){if(A=wo(x),typeof A!="function")throw Error(tt(150));return x=A.call(x),v(u,_,x,y)}if(typeof x.then=="function")return m(u,_,Pc(x),y);if(x.$$typeof===Xi)return m(u,_,Lc(u,x),y);Ic(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),y=s(_,x),y.return=u,u=y):(n(u,_),y=md(x,u.mode,y),y.return=u,u=y),r(u)):n(u,_)}return function(u,_,x,y){try{al=0;var A=m(u,_,x,y);return vr=null,A}catch(w){if(w===Ml||w===Bu)throw w;var R=Un(29,w,null,u.mode);return R.lanes=y,R.return=u,R}finally{}}}var Cr=Ey(!0),Ty=Ey(!1),$n=Ti(null),Ei=null;function Ss(e){var t=e.alternate;Te(He,He.current&1),Te($n,e),Ei===null&&(t===null||Ar.current!==null||t.memoizedState!==null)&&(Ei=e)}function Ay(e){if(e.tag===22){if(Te(He,He.current),Te($n,e),Ei===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ei=e)}}else Es(e)}function Es(){Te(He,He.current),Te($n,$n.current)}function Zi(e){Ze($n),Ei===e&&(Ei=null),Ze(He)}var He=Ti(0);function gu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Tp(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Pn(),s=Ns(i);s.payload=t,n!=null&&(s.callback=n),t=Us(e,s,i),t!==null&&(In(t,e,i),Xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Pn(),s=Ns(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Us(e,s,i),t!==null&&(In(t,e,i),Xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pn(),i=Ns(n);i.tag=2,t!=null&&(i.callback=t),t=Us(e,i,n),t!==null&&(In(t,e,n),Xo(t,e,n))}};function g_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!nl(n,i)||!nl(s,a):!0}function __(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&cp.enqueueReplaceState(t,t.state,null)}function ba(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ye({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}var _u=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wy(e){_u(e)}function Cy(e){console.error(e)}function Ry(e){_u(e)}function xu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function x_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function up(e,t,n){return n=Ns(n),n.tag=3,n.payload={element:null},n.callback=function(){xu(e,t)},n}function Dy(e){return e=Ns(e),e.tag=3,e}function Ny(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){x_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){x_(t,n,i),typeof s!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function H1(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&vl(t,n,s,!0),n=$n.current,n!==null){switch(n.tag){case 13:return Ei===null?xp():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===np?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Dd(e,i,s)),!1;case 22:return n.flags|=65536,i===np?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Dd(e,i,s)),!1}throw Error(tt(435,n.tag))}return Dd(e,i,s),xp(),!1}if(ie)return t=$n.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Jd&&(e=Error(tt(422),{cause:i}),il(Jn(e,n)))):(i!==Jd&&(t=Error(tt(423),{cause:i}),il(Jn(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Jn(i,n),s=up(e.stateNode,i,s),_d(e,s),Ue!==4&&(Ue=2)),!1;var a=Error(tt(520),{cause:i});if(a=Jn(a,n),jo===null?jo=[a]:jo.push(a),Ue!==4&&(Ue=2),t===null)return!0;i=Jn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=up(n.stateNode,i,e),_d(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ls===null||!Ls.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Dy(s),Ny(s,e,n,i),_d(n,s),!1}n=n.return}while(n!==null);return!1}var Uy=Error(tt(461)),Ye=!1;function $e(e,t,n,i){t.child=e===null?Ty(t,null,n,i):Cr(t,e.child,n,i)}function y_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ya(t),i=Qp(e,t,n,r,a,s),o=$p(),e!==null&&!Ye?(tm(e,t,s),$i(e,t,s)):(ie&&o&&Wp(t),t.flags|=1,$e(e,t,i,s),t.child)}function v_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Xp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ly(e,t,a,i,s)):(e=Yc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!cm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:nl,n(r,i)&&e.ref===t.ref)return $i(e,t,s)}return t.flags|=1,e=Ki(a,i),e.ref=t.ref,e.return=t,t.child=e}function Ly(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(nl(a,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=a,cm(e,s))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,$i(e,t,s)}return hp(e,t,n,i,s)}function Oy(e,t,n){var i=t.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=a!==null?a.baseLanes|n:n,e!==null){for(s=t.child=e.child,a=0;s!==null;)a=a|s.lanes|s.childLanes,s=s.sibling;t.childLanes=a&~i}else t.childLanes=0,t.child=null;return b_(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zc(t,a!==null?a.cachePool:null),a!==null?l_(t,a):ap(),Ay(t);else return t.lanes=t.childLanes=536870912,b_(e,t,a!==null?a.baseLanes|n:n,n)}else a!==null?(Zc(t,a.cachePool),l_(t,a),Es(t),t.memoizedState=null):(e!==null&&Zc(t,null),ap(),Es(t));return $e(e,t,s,n),t.child}function b_(e,t,n,i){var s=Zp();return s=s===null?null:{parent:Fe._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Zc(t,null),ap(),Ay(t),e!==null&&vl(e,t,i,!0),null}function Jc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hp(e,t,n,i,s){return ya(t),n=Qp(e,t,n,i,void 0,s),i=$p(),e!==null&&!Ye?(tm(e,t,s),$i(e,t,s)):(ie&&i&&Wp(t),t.flags|=1,$e(e,t,n,s),t.child)}function M_(e,t,n,i,s,a){return ya(t),t.updateQueue=null,n=Yx(t,i,n,s),qx(e),i=$p(),e!==null&&!Ye?(tm(e,t,a),$i(e,t,a)):(ie&&i&&Wp(t),t.flags|=1,$e(e,t,n,a),t.child)}function S_(e,t,n,i,s){if(ya(t),t.stateNode===null){var a=ur,r=n.contextType;typeof r=="object"&&r!==null&&(a=rn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=cp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Kp(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?rn(r):ur,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(yd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&cp.enqueueReplaceState(a,a.state,null),qo(t,i,a,s),Wo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ba(n,o);a.props=l;var c=a.context,h=n.contextType;r=ur,typeof h=="object"&&h!==null&&(r=rn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&__(t,a,i,r),bs=!1;var f=t.memoizedState;a.state=f,qo(t,i,a,s),Wo(),c=t.memoizedState,o||f!==c||bs?(typeof p=="function"&&(yd(t,n,p,i),c=t.memoizedState),(l=bs||g_(t,n,l,i,f,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,ip(e,t),r=t.memoizedProps,h=ba(n,r),a.props=h,p=t.pendingProps,f=a.context,c=n.contextType,l=ur,typeof c=="object"&&c!==null&&(l=rn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||f!==l)&&__(t,a,i,l),bs=!1,f=t.memoizedState,a.state=f,qo(t,i,a,s),Wo();var d=t.memoizedState;r!==p||f!==d||bs||e!==null&&e.dependencies!==null&&hu(e.dependencies)?(typeof o=="function"&&(yd(t,n,o,i),d=t.memoizedState),(h=bs||g_(t,n,h,i,f,d,l)||e!==null&&e.dependencies!==null&&hu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Jc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Cr(t,e.child,null,s),t.child=Cr(t,null,n,s)):$e(e,t,n,s),t.memoizedState=a.state,e=t.child):e=$i(e,t,s),e}function E_(e,t,n,i){return yl(),t.flags|=256,$e(e,t,n,i),t.child}var vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(e){return{baseLanes:e,cachePool:Vx()}}function Md(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qn),e}function Py(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(s?Ss(t):Es(t),ie){var o=Ne,l;if(l=o){t:{for(l=o,o=vi;l.nodeType!==8;){if(!o){o=null;break t}if(l=ci(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:da!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},l=Un(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,gn=t,Ne=null,l=!0):l=!1}l||xa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Tp(o)?t.lanes=32:t.lanes=536870912,null;Zi(t)}return o=i.children,i=i.fallback,s?(Es(t),s=t.mode,o=yu({mode:"hidden",children:o},s),i=fa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,s=t.child,s.memoizedState=bd(n),s.childLanes=Md(e,r,n),t.memoizedState=vd,i):(Ss(t),fp(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ss(t),t.flags&=-257,t=Sd(e,t,n)):t.memoizedState!==null?(Es(t),t.child=e.child,t.flags|=128,t=null):(Es(t),s=i.fallback,o=t.mode,i=yu({mode:"visible",children:i.children},o),s=fa(s,o,n,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Cr(t,e.child,null,n),i=t.child,i.memoizedState=bd(n),i.childLanes=Md(e,r,n),t.memoizedState=vd,t=s);else if(Ss(t),Tp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,il({value:i,source:null,stack:null}),t=Sd(e,t,n)}else if(Ye||vl(e,t,n,!1),r=(n&e.childLanes)!==0,Ye||r){if(r=_e,r!==null&&(i=n&-n,i=(i&42)!==0?1:Lp(i),i=(i&(r.suspendedLanes|n))!==0?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,Pr(e,i),In(r,e,i),Uy;o.data==="$?"||xp(),t=Sd(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ne=ci(o.nextSibling),gn=t,ie=!0,pa=null,vi=!1,e!==null&&(Zn[Kn++]=Wi,Zn[Kn++]=qi,Zn[Kn++]=da,Wi=e.id,qi=e.overflow,da=t),t=fp(t,i.children),t.flags|=4096);return t}return s?(Es(t),s=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Ki(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?s=Ki(c,s):(s=fa(s,o,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=e.child.memoizedState,o===null?o=bd(n):(l=o.cachePool,l!==null?(c=Fe._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Vx(),o={baseLanes:o.baseLanes|n,cachePool:l}),s.memoizedState=o,s.childLanes=Md(e,r,n),t.memoizedState=vd,i):(Ss(t),n=e.child,e=n.sibling,n=Ki(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function fp(e,t){return t=yu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yu(e,t){return e=Un(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Sd(e,t,n){return Cr(t,e.child,null,n),e=fp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),$d(e.return,t,n)}function Ed(e,t,n,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s)}function Iy(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;if($e(e,t,i.children,n),i=He.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&T_(e,n,t);else if(e.tag===19)T_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(Te(He,i),s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&gu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ed(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&gu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ed(t,!0,n,null,a);break;case"together":Ed(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(vl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=Ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hu(e)))}function V1(e,t,n){switch(t.tag){case 3:iu(t,t.stateNode.containerInfo),Ms(t,Fe,e.memoizedState.cache),yl();break;case 27:case 5:Vd(t);break;case 4:iu(t,t.stateNode.containerInfo);break;case 10:Ms(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ss(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Py(e,t,n):(Ss(t),e=$i(e,t,n),e!==null?e.sibling:null);Ss(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(vl(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Iy(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Te(He,He.current),i)break;return null;case 22:case 23:return t.lanes=0,Oy(e,t,n);case 24:Ms(t,Fe,e.memoizedState.cache)}return $i(e,t,n)}function zy(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!cm(e,n)&&(t.flags&128)===0)return Ye=!1,V1(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,ie&&(t.flags&1048576)!==0&&Fx(t,uu,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,s=i._init;if(i=s(i._payload),t.type=i,typeof i=="function")Xp(i)?(e=ba(i,e),t.tag=1,t=S_(null,t,i,e,n)):(t.tag=0,t=hp(null,t,i,e,n));else{if(i!=null){if(s=i.$$typeof,s===Dp){t.tag=11,t=y_(null,t,i,e,n);break t}else if(s===Np){t.tag=14,t=v_(null,t,i,e,n);break t}}throw t=Fd(i)||i,Error(tt(306,t,""))}}return t;case 0:return hp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ba(i,t.pendingProps),S_(e,t,i,s,n);case 3:t:{if(iu(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,ip(e,t),qo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ms(t,Fe,i),i!==a.cache&&tp(t,[Fe],n,!0),Wo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=E_(e,t,i,n);break t}else if(i!==s){s=Jn(Error(tt(424)),t),il(s),t=E_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=ci(e.firstChild),gn=t,ie=!0,pa=null,vi=!0,n=Ty(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(yl(),i===s){t=$i(e,t,n);break t}$e(e,t,i,n)}t=t.child}return t;case 26:return Jc(e,t),e===null?(n=X_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ie||(n=t.type,e=t.pendingProps,i=Au(Ds.current).createElement(n),i[an]=t,i[Tn]=e,en(i,n,e),qe(i),t.stateNode=i):t.memoizedState=X_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vd(t),e===null&&ie&&(i=t.stateNode=Sv(t.type,t.pendingProps,Ds.current),gn=t,vi=!0,s=Ne,ks(t.type)?(Ap=s,Ne=ci(i.firstChild)):Ne=s),$e(e,t,t.pendingProps.children,n),Jc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ie&&((s=i=Ne)&&(i=dE(i,t.type,t.pendingProps,vi),i!==null?(t.stateNode=i,gn=t,Ne=ci(i.firstChild),vi=!1,s=!0):s=!1),s||xa(t)),Vd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Sp(s,a)?i=null:r!==null&&Sp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Qp(e,t,L1,null,null,n),cl._currentValue=s),Jc(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&ie&&((e=n=Ne)&&(n=pE(n,t.pendingProps,vi),n!==null?(t.stateNode=n,gn=t,Ne=null,e=!0):e=!1),e||xa(t)),null;case 13:return Py(e,t,n);case 4:return iu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Cr(t,null,i,n):$e(e,t,i,n),t.child;case 11:return y_(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ms(t,t.type,i.value),$e(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ya(t),s=rn(s),i=i(s),t.flags|=1,$e(e,t,i,n),t.child;case 14:return v_(e,t,t.type,t.pendingProps,n);case 15:return Ly(e,t,t.type,t.pendingProps,n);case 19:return Iy(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=yu(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ki(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Oy(e,t,n);case 24:return ya(t),i=rn(Fe),e===null?(s=Zp(),s===null&&(s=_e,a=Yp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Kp(t),Ms(t,Fe,s)):((e.lanes&n)!==0&&(ip(e,t),qo(t,null,null,n),Wo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ms(t,Fe,i)):(i=a.cache,Ms(t,Fe,i),i!==s.cache&&tp(t,[Fe],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function Vi(e){e.flags|=4}function A_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Av(t)){if(t=$n.current,t!==null&&((Jt&4194048)===Jt?Ei!==null:(Jt&62914560)!==Jt&&(Jt&536870912)===0||t!==Ei))throw Go=np,kx;e.flags|=8192}}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cx():536870912,e.lanes|=t,Rr|=t)}function No(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function k1(e,t,n){var i=t.pendingProps;switch(qp(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ji(Fe),Mr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?Vi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,n_())),we(t),null;case 26:return n=t.memoizedState,e===null?(Vi(t),n!==null?(we(t),A_(t,n)):(we(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Vi(t),we(t),A_(t,n)):(we(t),t.flags&=-16777217):(e.memoizedProps!==i&&Vi(t),we(t),t.flags&=-16777217),null;case 27:su(t),n=Ds.current;var s=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Vi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return we(t),null}e=Mi.current,Ro(t)?t_(t,e):(e=Sv(s,i,n),t.stateNode=e,Vi(t))}return we(t),null;case 5:if(su(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Vi(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return we(t),null}if(e=Mi.current,Ro(t))t_(t,e);else{switch(s=Au(Ds.current),e){case 1:e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?s.createElement(n,{is:i.is}):s.createElement(n)}}e[an]=t,e[Tn]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=e;t:switch(en(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Vi(t)}}return we(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Vi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=Ds.current,Ro(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=gn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[an]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||vv(e.nodeValue,n)),e||xa(t)}else e=Au(e).createTextNode(i),e[an]=t,t.stateNode=e}return we(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ro(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[an]=t}else yl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),s=!1}else s=n_(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Zi(t),t):(Zi(t),null)}if(Zi(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var a=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),we(t),null;case 4:return Mr(),e===null&&_m(t.stateNode.containerInfo),we(t),null;case 10:return ji(t.type),we(t),null;case 19:if(Ze(He),s=t.memoizedState,s===null)return we(t),null;if(i=(t.flags&128)!==0,a=s.rendering,a===null)if(i)No(s,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=gu(e),a!==null){for(t.flags|=128,No(s,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bx(n,e),n=n.sibling;return Te(He,He.current&1|2),t.child}e=e.sibling}s.tail!==null&&Si()>bu&&(t.flags|=128,i=!0,No(s,!1),t.lanes=4194304)}else{if(!i)if(e=gu(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ie)return we(t),null}else 2*Si()-s.renderingStartTime>bu&&n!==536870912&&(t.flags|=128,i=!0,No(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(e=s.last,e!==null?e.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Si(),t.sibling=null,e=He.current,Te(He,i?e&1|2:e&1),t):(we(t),null);case 22:case 23:return Zi(t),jp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ze(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ji(Fe),we(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function G1(e,t){switch(qp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(Fe),Mr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return su(t),null;case 13:if(Zi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ze(He),null;case 4:return Mr(),null;case 10:return ji(t.type),null;case 22:case 23:return Zi(t),jp(),e!==null&&Ze(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ji(Fe),null;case 25:return null;default:return null}}function By(e,t){switch(qp(t),t.tag){case 3:ji(Fe),Mr();break;case 26:case 27:case 5:su(t);break;case 4:Mr();break;case 13:Zi(t);break;case 19:Ze(He);break;case 10:ji(t.type);break;case 22:case 23:Zi(t),jp(),e!==null&&Ze(ma);break;case 24:ji(Fe)}}function Tl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){me(t,t.return,o)}}function Fs(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){me(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){me(t,t.return,h)}}function Fy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wx(t,n)}catch(i){me(e,e.return,i)}}}function Hy(e,t,n){n.props=ba(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){me(e,t,i)}}function Zo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){me(e,t,s)}}function bi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){me(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){me(e,t,s)}else n.current=null}function Vy(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){me(e,e.return,s)}}function Td(e,t,n){try{var i=e.stateNode;lE(i,e.type,n,t),i[Tn]=t}catch(s){me(e,e.return,s)}}function ky(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ks(e.type)||e.tag===4}function Ad(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ky(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ks(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wu));else if(i!==4&&(i===27&&ks(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(dp(e,t,n),e=e.sibling;e!==null;)dp(e,t,n),e=e.sibling}function vu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ks(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}function Gy(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);en(t,i,n),t[an]=e,t[Tn]=n}catch(a){me(e,e.return,a)}}var Gi=!1,Oe=!1,wd=!1,w_=typeof WeakSet=="function"?WeakSet:Set,We=null;function X1(e,t){if(e=e.containerInfo,bp=Du,e=Dx(e),Vp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,p=e,f=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)f=p,p=d;for(;;){if(p===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++h===i&&(l=r),(d=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mp={focusedElem:e,selectionRange:n},Du=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,a=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var g=ba(n.type,s,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(g,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(v){me(n,n.return,v)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ep(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ep(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Xy(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:xs(e,n),i&4&&Tl(5,n);break;case 1:if(xs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){me(n,n.return,r)}else{var s=ba(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(n,n.return,r)}}i&64&&Fy(n),i&512&&Zo(n,n.return);break;case 3:if(xs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wx(e,t)}catch(r){me(n,n.return,r)}}break;case 27:t===null&&i&4&&Gy(n);case 26:case 5:xs(e,n),t===null&&i&4&&Vy(n),i&512&&Zo(n,n.return);break;case 12:xs(e,n);break;case 13:xs(e,n),i&4&&Yy(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$1.bind(null,n),mE(e,n))));break;case 22:if(i=n.memoizedState!==null||Gi,!i){t=t!==null&&t.memoizedState!==null||Oe,s=Gi;var a=Oe;Gi=i,(Oe=t)&&!a?ys(e,n,(n.subtreeFlags&8772)!==0):xs(e,n),Gi=s,Oe=a}break;case 30:break;default:xs(e,n)}}function Wy(e){var t=e.alternate;t!==null&&(e.alternate=null,Wy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,Sn=!1;function ki(e,t,n){for(n=n.child;n!==null;)qy(e,t,n),n=n.sibling}function qy(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:Oe||bi(n,t),ki(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Oe||bi(n,t);var i=Ee,s=Sn;ks(n.type)&&(Ee=n.stateNode,Sn=!1),ki(e,t,n),Qo(n.stateNode),Ee=i,Sn=s;break;case 5:Oe||bi(n,t);case 6:if(i=Ee,s=Sn,Ee=null,ki(e,t,n),Ee=i,Sn=s,Ee!==null)if(Sn)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(n.stateNode)}catch(a){me(n,t,a)}else try{Ee.removeChild(n.stateNode)}catch(a){me(n,t,a)}break;case 18:Ee!==null&&(Sn?(e=Ee,V_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),fl(e)):V_(Ee,n.stateNode));break;case 4:i=Ee,s=Sn,Ee=n.stateNode.containerInfo,Sn=!0,ki(e,t,n),Ee=i,Sn=s;break;case 0:case 11:case 14:case 15:Oe||Fs(2,n,t),Oe||Fs(4,n,t),ki(e,t,n);break;case 1:Oe||(bi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Hy(n,t,i)),ki(e,t,n);break;case 21:ki(e,t,n);break;case 22:Oe=(i=Oe)||n.memoizedState!==null,ki(e,t,n),Oe=i;break;default:ki(e,t,n)}}function Yy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fl(e)}catch(n){me(t,t.return,n)}}function W1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new w_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new w_),t;default:throw Error(tt(435,e.tag))}}function Cd(e,t){var n=W1(e);t.forEach(function(i){var s=tE.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}function Rn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ks(o.type)){Ee=o.stateNode,Sn=!1;break t}break;case 5:Ee=o.stateNode,Sn=!1;break t;case 3:case 4:Ee=o.stateNode.containerInfo,Sn=!0;break t}o=o.return}if(Ee===null)throw Error(tt(160));qy(a,r,s),Ee=null,Sn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Zy(t,e),t=t.sibling}var li=null;function Zy(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rn(t,e),Dn(e),i&4&&(Fs(3,e,e.return),Tl(3,e),Fs(5,e,e.return));break;case 1:Rn(t,e),Dn(e),i&512&&(Oe||n===null||bi(n,n.return)),i&64&&Gi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=li;if(Rn(t,e),Dn(e),i&512&&(Oe||n===null||bi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[_l]||a[an]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),en(a,i,n),a[an]=e,qe(a),i=a;break t;case"link":var r=q_("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),en(a,i,n),s.head.appendChild(a);break;case"meta":if(r=q_("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),en(a,i,n),s.head.appendChild(a);break;default:throw Error(tt(468,i))}a[an]=e,qe(a),i=a}e.stateNode=i}else Y_(s,e.type,e.stateNode);else e.stateNode=W_(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?Y_(s,e.type,e.stateNode):W_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Td(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rn(t,e),Dn(e),i&512&&(Oe||n===null||bi(n,n.return)),n!==null&&i&4&&Td(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rn(t,e),Dn(e),i&512&&(Oe||n===null||bi(n,n.return)),e.flags&32){s=e.stateNode;try{Er(s,"")}catch(d){me(e,e.return,d)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Td(e,s,n!==null?n.memoizedProps:s)),i&1024&&(wd=!0);break;case 6:if(Rn(t,e),Dn(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(d){me(e,e.return,d)}}break;case 3:if(tu=null,s=li,li=wu(t.containerInfo),Rn(t,e),li=s,Dn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fl(t.containerInfo)}catch(d){me(e,e.return,d)}wd&&(wd=!1,Ky(e));break;case 4:i=li,li=wu(e.stateNode.containerInfo),Rn(t,e),Dn(e),li=i;break;case 12:Rn(t,e),Dn(e);break;case 13:Rn(t,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pm=Si()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cd(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Gi,h=Oe;if(Gi=c||s,Oe=h||l,Rn(t,e),Oe=h,Gi=c,Dn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Gi||Oe||ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,f=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(d){me(l,l.return,d)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(d){me(l,l.return,d)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Cd(e,n))));break;case 19:Rn(t,e),Dn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cd(e,i)));break;case 30:break;case 21:break;default:Rn(t,e),Dn(e)}}function Dn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(ky(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var s=n.stateNode,a=Ad(e);vu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Er(r,""),n.flags&=-33);var o=Ad(e);vu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Ad(e);dp(e,c,l);break;default:throw Error(tt(161))}}catch(h){me(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ky(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ky(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xy(e,t.alternate,t),t=t.sibling}function ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fs(4,t,t.return),ua(t);break;case 1:bi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Hy(t,t.return,n),ua(t);break;case 27:Qo(t.stateNode);case 26:case 5:bi(t,t.return),ua(t);break;case 22:t.memoizedState===null&&ua(t);break;case 30:ua(t);break;default:ua(t)}e=e.sibling}}function ys(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ys(s,a,n),Tl(4,a);break;case 1:if(ys(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){me(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Xx(l[s],o)}catch(c){me(i,i.return,c)}}n&&r&64&&Fy(a),Zo(a,a.return);break;case 27:Gy(a);case 26:case 5:ys(s,a,n),n&&i===null&&r&4&&Vy(a),Zo(a,a.return);break;case 12:ys(s,a,n);break;case 13:ys(s,a,n),n&&r&4&&Yy(s,a);break;case 22:a.memoizedState===null&&ys(s,a,n),Zo(a,a.return);break;case 30:break;default:ys(s,a,n)}t=t.sibling}}function um(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bl(n))}function hm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e))}function yi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jy(e,t,n,i),t=t.sibling}function jy(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:yi(e,t,n,i),s&2048&&Tl(9,t);break;case 1:yi(e,t,n,i);break;case 3:yi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e)));break;case 12:if(s&2048){yi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){me(t,t.return,l)}}else yi(e,t,n,i);break;case 13:yi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?yi(e,t,n,i):Ko(e,t):a._visibility&2?yi(e,t,n,i):(a._visibility|=2,tr(e,t,n,i,(t.subtreeFlags&10256)!==0)),s&2048&&um(r,t);break;case 24:yi(e,t,n,i),s&2048&&hm(t.alternate,t);break;default:yi(e,t,n,i)}}function tr(e,t,n,i,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:tr(a,r,o,l,s),Tl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?tr(a,r,o,l,s):Ko(a,r):(h._visibility|=2,tr(a,r,o,l,s)),s&&c&2048&&um(r.alternate,r);break;case 24:tr(a,r,o,l,s),s&&c&2048&&hm(r.alternate,r);break;default:tr(a,r,o,l,s)}t=t.sibling}}function Ko(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ko(n,i),s&2048&&um(i.alternate,i);break;case 24:Ko(n,i),s&2048&&hm(i.alternate,i);break;default:Ko(n,i)}t=t.sibling}}var Bo=8192;function Ja(e){if(e.subtreeFlags&Bo)for(e=e.child;e!==null;)Jy(e),e=e.sibling}function Jy(e){switch(e.tag){case 26:Ja(e),e.flags&Bo&&e.memoizedState!==null&&CE(li,e.memoizedState,e.memoizedProps);break;case 5:Ja(e);break;case 3:case 4:var t=li;li=wu(e.stateNode.containerInfo),Ja(e),li=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Bo,Bo=16777216,Ja(e),Bo=t):Ja(e));break;default:Ja(e)}}function Qy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,tv(i,e)}Qy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$y(e),e=e.sibling}function $y(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Fs(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qc(e)):Uo(e);break;default:Uo(e)}}function Qc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,tv(i,e)}Qy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fs(8,t,t.return),Qc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qc(t));break;default:Qc(t)}e=e.sibling}}function tv(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Fs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:bl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,We=i;else t:for(n=e;We!==null;){i=We;var s=i.sibling,a=i.return;if(Wy(i),i===n){We=null;break t}if(s!==null){s.return=a,We=s;break t}We=a}}}var q1={getCacheForType:function(e){var t=rn(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Y1=typeof WeakMap=="function"?WeakMap:Map,ce=0,_e=null,Zt=null,Jt=0,le=0,Nn=null,Cs=!1,Ir=!1,fm=!1,ts=0,Ue=0,Hs=0,ga=0,dm=0,Qn=0,Rr=0,jo=null,En=null,pp=!1,pm=0,bu=1/0,Mu=null,Ls=null,tn=0,Os=null,Dr=null,br=0,mp=0,gp=null,ev=null,Jo=0,_p=null;function Pn(){if((ce&2)!==0&&Jt!==0)return Jt&-Jt;if(Rt.T!==null){var e=Tr;return e!==0?e:gm()}return fx()}function nv(){Qn===0&&(Qn=(Jt&536870912)===0||ie?lx():536870912);var e=$n.current;return e!==null&&(e.flags|=32),Qn}function In(e,t,n){(e===_e&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Nr(e,0),Rs(e,Jt,Qn,!1)),gl(e,n),((ce&2)===0||e!==_e)&&(e===_e&&((ce&2)===0&&(ga|=n),Ue===4&&Rs(e,Jt,Qn,!1)),Ai(e))}function iv(e,t,n){if((ce&6)!==0)throw Error(tt(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ml(e,t),s=i?j1(e,t):Rd(e,t,!0),a=i;do{if(s===0){Ir&&!i&&Rs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!Z1(n)){s=Rd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=jo;var l=o.current.memoizedState.isDehydrated;if(l&&(Nr(o,r).flags|=256),r=Rd(o,r,!1),r!==2){if(fm&&!l){o.errorRecoveryDisabledLanes|=a,ga|=a,s=4;break t}a=En,En=s,a!==null&&(En===null?En=a:En.push.apply(En,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Nr(e,0),Rs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:Rs(i,t,Qn,!Cs);break t;case 2:En=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=pm+300-Si(),10<s)){if(Rs(i,t,Qn,!Cs),Uu(i,0,!0)!==0)break t;i.timeoutHandle=Mv(C_.bind(null,i,n,En,Mu,pp,t,Qn,ga,Rr,Cs,a,2,-0,0),s);break t}C_(i,n,En,Mu,pp,t,Qn,ga,Rr,Cs,a,0,-0,0)}}break}while(!0);Ai(e)}function C_(e,t,n,i,s,a,r,o,l,c,h,p,f,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,(p&8192||(p&16785408)===16785408)&&(ll={stylesheets:null,count:0,unsuspend:wE},Jy(t),p=RE(),p!==null)){e.cancelPendingCommit=p(D_.bind(null,e,t,a,n,i,s,r,o,l,h,1,f,d)),Rs(e,a,r,!c);return}D_(e,t,a,n,i,s,r,o,l)}function Z1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!zn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rs(e,t,n,i){t&=~dm,t&=~ga,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-On(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&ux(e,n,t)}function ku(){return(ce&6)===0?(Al(0,!1),!1):!0}function mm(){if(Zt!==null){if(le===0)var e=Zt.return;else e=Zt,Yi=Ta=null,em(e),vr=null,al=0,e=Zt;for(;e!==null;)By(e.alternate,e),e=e.return;Zt=null}}function Nr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,uE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),mm(),_e=e,Zt=n=Ki(e.current,null),Jt=t,le=0,Nn=null,Cs=!1,Ir=ml(e,t),fm=!1,Rr=Qn=dm=ga=Hs=Ue=0,En=jo=null,pp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-On(i),a=1<<s;t|=e[s],i&=~a}return ts=t,Iu(),n}function sv(e,t){Wt=null,Rt.H=mu,t===Ml||t===Bu?(t=r_(),le=3):t===kx?(t=r_(),le=4):le=t===Uy?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nn=t,Zt===null&&(Ue=1,xu(e,Jn(t,e.current)))}function av(){var e=Rt.H;return Rt.H=mu,e===null?mu:e}function rv(){var e=Rt.A;return Rt.A=q1,e}function xp(){Ue=4,Cs||(Jt&4194048)!==Jt&&$n.current!==null||(Ir=!0),(Hs&134217727)===0&&(ga&134217727)===0||_e===null||Rs(_e,Jt,Qn,!1)}function Rd(e,t,n){var i=ce;ce|=2;var s=av(),a=rv();(_e!==e||Jt!==t)&&(Mu=null,Nr(e,t)),t=!1;var r=Ue;t:do try{if(le!==0&&Zt!==null){var o=Zt,l=Nn;switch(le){case 8:mm(),r=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(t=!0);var c=le;if(le=0,Nn=null,dr(e,o,l,c),n&&Ir){r=0;break t}break;default:c=le,le=0,Nn=null,dr(e,o,l,c)}}K1(),r=Ue;break}catch(h){sv(e,h)}while(!0);return t&&e.shellSuspendCounter++,Yi=Ta=null,ce=i,Rt.H=s,Rt.A=a,Zt===null&&(_e=null,Jt=0,Iu()),r}function K1(){for(;Zt!==null;)ov(Zt)}function j1(e,t){var n=ce;ce|=2;var i=av(),s=rv();_e!==e||Jt!==t?(Mu=null,bu=Si()+500,Nr(e,t)):Ir=ml(e,t);t:do try{if(le!==0&&Zt!==null){t=Zt;var a=Nn;e:switch(le){case 1:le=0,Nn=null,dr(e,t,a,1);break;case 2:case 9:if(a_(a)){le=0,Nn=null,R_(t);break}t=function(){le!==2&&le!==9||_e!==e||(le=7),Ai(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:a_(a)?(le=0,Nn=null,R_(t)):(le=0,Nn=null,dr(e,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(!r||Av(r)){le=0,Nn=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,Gu(c)):Zt=null}break e}}le=0,Nn=null,dr(e,t,a,5);break;case 6:le=0,Nn=null,dr(e,t,a,6);break;case 8:mm(),Ue=6;break t;default:throw Error(tt(462))}}J1();break}catch(h){sv(e,h)}while(!0);return Yi=Ta=null,Rt.H=i,Rt.A=s,ce=n,Zt!==null?0:(_e=null,Jt=0,Iu(),Ue)}function J1(){for(;Zt!==null&&!yS();)ov(Zt)}function ov(e){var t=zy(e.alternate,e,ts);e.memoizedProps=e.pendingProps,t===null?Gu(e):Zt=t}function R_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=M_(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=M_(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:em(t);default:By(n,t),t=Zt=Bx(t,ts),t=zy(n,t,ts)}e.memoizedProps=e.pendingProps,t===null?Gu(e):Zt=t}function dr(e,t,n,i){Yi=Ta=null,em(t),vr=null,al=0;var s=t.return;try{if(H1(e,s,t,n,Jt)){Ue=1,xu(e,Jn(n,e.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;Ue=1,xu(e,Jn(n,e.current)),Zt=null;return}t.flags&32768?(ie||i===1?e=!0:Ir||(Jt&536870912)!==0?e=!1:(Cs=e=!0,(i===2||i===9||i===3||i===6)&&(i=$n.current,i!==null&&i.tag===13&&(i.flags|=16384))),lv(t,e)):Gu(t)}function Gu(e){var t=e;do{if((t.flags&32768)!==0){lv(t,Cs);return}e=t.return;var n=k1(t.alternate,t,ts);if(n!==null){Zt=n;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);Ue===0&&(Ue=5)}function lv(e,t){do{var n=G1(e.alternate,e);if(n!==null){n.flags&=32767,Zt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zt=e;return}Zt=e=n}while(e!==null);Ue=6,Zt=null}function D_(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Xu();while(tn!==0);if((ce&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(a=t.lanes|t.childLanes,a|=kp,RS(e,n,a,r,o,l),e===_e&&(Zt=_e=null,Jt=0),Dr=t,Os=e,br=n,mp=a,gp=s,ev=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,eE(au,function(){return dv(!0),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null,s=se.p,se.p=2,r=ce,ce|=4;try{X1(e,t,n)}finally{ce=r,se.p=s,Rt.T=i}}tn=1,cv(),uv(),hv()}}function cv(){if(tn===1){tn=0;var e=Os,t=Dr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Rt.T,Rt.T=null;var i=se.p;se.p=2;var s=ce;ce|=4;try{Zy(t,e);var a=Mp,r=Dx(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Rx(o.ownerDocument.documentElement,o)){if(l!==null&&Vp(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,f=p&&p.defaultView||window;if(f.getSelection){var d=f.getSelection(),g=o.textContent.length,v=Math.min(l.start,g),m=l.end===void 0?v:Math.min(l.end,g);!d.extend&&v>m&&(r=m,m=v,v=r);var u=J0(o,v),_=J0(o,m);if(u&&_&&(d.rangeCount!==1||d.anchorNode!==u.node||d.anchorOffset!==u.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var x=p.createRange();x.setStart(u.node,u.offset),d.removeAllRanges(),v>m?(d.addRange(x),d.extend(_.node,_.offset)):(x.setEnd(_.node,_.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Du=!!bp,Mp=bp=null}finally{ce=s,se.p=i,Rt.T=n}}e.current=t,tn=2}}function uv(){if(tn===2){tn=0;var e=Os,t=Dr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Rt.T,Rt.T=null;var i=se.p;se.p=2;var s=ce;ce|=4;try{Xy(e,t.alternate,t)}finally{ce=s,se.p=i,Rt.T=n}}tn=3}}function hv(){if(tn===4||tn===3){tn=0,vS();var e=Os,t=Dr,n=br,i=ev;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tn=5:(tn=0,Dr=Os=null,fv(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ls=null),Op(n),t=t.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Rt.T,s=se.p,se.p=2,Rt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Rt.T=t,se.p=s}}(br&3)!==0&&Xu(),Ai(e),s=e.pendingLanes,(n&4194090)!==0&&(s&42)!==0?e===_p?Jo++:(Jo=0,_p=e):Jo=0,Al(0,!1)}}function fv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bl(t)))}function Xu(e){return cv(),uv(),hv(),dv(e)}function dv(){if(tn!==5)return!1;var e=Os,t=mp;mp=0;var n=Op(br),i=Rt.T,s=se.p;try{se.p=32>n?32:n,Rt.T=null,n=gp,gp=null;var a=Os,r=br;if(tn=0,Dr=Os=null,br=0,(ce&6)!==0)throw Error(tt(331));var o=ce;if(ce|=4,$y(a.current),jy(a,a.current,r,n),ce=o,Al(0,!1),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(pl,a)}catch{}return!0}finally{se.p=s,Rt.T=i,fv(e,t)}}function N_(e,t,n){t=Jn(n,t),t=up(e.stateNode,t,2),e=Us(e,t,2),e!==null&&(gl(e,2),Ai(e))}function me(e,t,n){if(e.tag===3)N_(e,e,n);else for(;t!==null;){if(t.tag===3){N_(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ls===null||!Ls.has(i))){e=Jn(n,e),n=Dy(2),i=Us(t,n,2),i!==null&&(Ny(n,i,t,e),gl(i,2),Ai(i));break}}t=t.return}}function Dd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Y1;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(fm=!0,s.add(n),e=Q1.bind(null,e,t,n),t.then(e,e))}function Q1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(Jt&n)===n&&(Ue===4||Ue===3&&(Jt&62914560)===Jt&&300>Si()-pm?(ce&2)===0&&Nr(e,0):dm|=n,Rr===Jt&&(Rr=0)),Ai(e)}function pv(e,t){t===0&&(t=cx()),e=Pr(e,t),e!==null&&(gl(e,t),Ai(e))}function $1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pv(e,n)}function tE(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),pv(e,n)}function eE(e,t){return Up(e,t)}var Su=null,er=null,yp=!1,Eu=!1,Nd=!1,_a=0;function Ai(e){e!==er&&e.next===null&&(er===null?Su=er=e:er=er.next=e),Eu=!0,yp||(yp=!0,iE())}function Al(e,t){if(!Nd&&Eu){Nd=!0;do for(var n=!1,i=Su;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-On(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,U_(i,a))}else a=Jt,a=Uu(i,i===_e?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||ml(i,a)||(n=!0,U_(i,a));i=i.next}while(n);Nd=!1}}function nE(){mv()}function mv(){Eu=yp=!1;var e=0;_a!==0&&(cE()&&(e=_a),_a=0);for(var t=Si(),n=null,i=Su;i!==null;){var s=i.next,a=gv(i,t);a===0?(i.next=null,n===null?Su=s:n.next=s,s===null&&(er=n)):(n=i,(e!==0||(a&3)!==0)&&(Eu=!0)),i=s}Al(e,!1)}function gv(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-On(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=CS(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=_e,n=Jt,n=Uu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&sd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ml(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&sd(i),Op(n)){case 2:case 8:n=rx;break;case 32:n=au;break;case 268435456:n=ox;break;default:n=au}return i=_v.bind(null,e),n=Up(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&sd(i),e.callbackPriority=2,e.callbackNode=null,2}function _v(e,t){if(tn!==0&&tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xu(!0)&&e.callbackNode!==n)return null;var i=Jt;return i=Uu(e,e===_e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(iv(e,i,t),gv(e,Si()),e.callbackNode!=null&&e.callbackNode===n?_v.bind(null,e):null)}function U_(e,t){if(Xu())return null;iv(e,t,!0)}function iE(){hE(function(){(ce&6)!==0?Up(ax,nE):mv()})}function gm(){return _a===0&&(_a=lx()),_a}function L_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xc(""+e)}function O_(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function sE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=L_((s[Tn]||null).action),r=i.submitter;r&&(t=(t=r[Tn]||null)?L_(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Lu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(_a!==0){var l=r?O_(s,r):new FormData(s);lp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?O_(s,r):new FormData(s),lp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Bc=0;Bc<jd.length;Bc++)Fc=jd[Bc],P_=Fc.toLowerCase(),I_=Fc[0].toUpperCase()+Fc.slice(1),ui(P_,"on"+I_);var Fc,P_,I_,Bc;ui(Ux,"onAnimationEnd");ui(Lx,"onAnimationIteration");ui(Ox,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(S1,"onTransitionRun");ui(E1,"onTransitionStart");ui(T1,"onTransitionCancel");ui(Px,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function xv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){_u(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){_u(h)}s.currentTarget=null,a=l}}}}function Yt(e,t){var n=t[Gd];n===void 0&&(n=t[Gd]=new Set);var i=e+"__bubble";n.has(i)||(yv(t,e,2,!1),n.add(i))}function Ud(e,t,n){var i=0;t&&(i|=4),yv(n,e,i,t)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function _m(e){if(!e[Hc]){e[Hc]=!0,dx.forEach(function(n){n!=="selectionchange"&&(aE.has(n)||Ud(n,!1,e),Ud(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hc]||(t[Hc]=!0,Ud("selectionchange",!1,t))}}function yv(e,t,n,i){switch(Nv(t)){case 2:var s=UE;break;case 8:s=LE;break;default:s=bm}n=s.bind(null,t,n,e),s=void 0,!Yd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ld(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=sr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}bx(function(){var c=a,h=zp(n),p=[];t:{var f=Ix.get(e);if(f!==void 0){var d=Lu,g=e;switch(e){case"keypress":if(qc(n)===0)break t;case"keydown":case"keyup":d=e1;break;case"focusin":g="focus",d=fd;break;case"focusout":g="blur",d=fd;break;case"beforeblur":case"afterblur":d=fd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=k0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=GS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=s1;break;case Ux:case Lx:case Ox:d=qS;break;case Px:d=r1;break;case"scroll":case"scrollend":d=VS;break;case"wheel":d=l1;break;case"copy":case"cut":case"paste":d=ZS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=X0;break;case"toggle":case"beforetoggle":d=u1}var v=(t&4)!==0,m=!v&&(e==="scroll"||e==="scrollend"),u=v?f!==null?f+"Capture":null:f;v=[];for(var _=c,x;_!==null;){var y=_;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||u===null||(y=tl(_,u),y!=null&&v.push(ol(_,y,x))),m)break;_=_.return}0<v.length&&(f=new d(f,g,null,n,h),p.push({event:f,listeners:v}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",f&&n!==qd&&(g=n.relatedTarget||n.fromElement)&&(sr(g)||g[Lr]))break t;if((d||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=c,g=g?sr(g):null,g!==null&&(m=dl(g),v=g.tag,g!==m||v!==5&&v!==27&&v!==6)&&(g=null)):(d=null,g=c),d!==g)){if(v=k0,y="onMouseLeave",u="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(v=X0,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=d==null?f:zo(d),x=g==null?f:zo(g),f=new v(y,_+"leave",d,n,h),f.target=m,f.relatedTarget=x,y=null,sr(h)===c&&(v=new v(u,_+"enter",g,n,h),v.target=x,v.relatedTarget=m,y=v),m=y,d&&g)e:{for(v=d,u=g,_=0,x=v;x;x=Qa(x))_++;for(x=0,y=u;y;y=Qa(y))x++;for(;0<_-x;)v=Qa(v),_--;for(;0<x-_;)u=Qa(u),x--;for(;_--;){if(v===u||u!==null&&v===u.alternate)break e;v=Qa(v),u=Qa(u)}v=null}else v=null;d!==null&&z_(p,f,d,v,!1),g!==null&&m!==null&&z_(p,m,g,v,!0)}}t:{if(f=c?zo(c):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var A=Z0;else if(Y0(f))if(wx)A=v1;else{A=x1;var R=_1}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Ip(c.elementType)&&(A=Z0):A=y1;if(A&&(A=A(e,c))){Ax(p,A,n,h);break t}R&&R(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Wd(f,"number",f.value)}switch(R=c?zo(c):window,e){case"focusin":(Y0(R)||R.contentEditable==="true")&&(or=R,Zd=c,Vo=null);break;case"focusout":Vo=Zd=or=null;break;case"mousedown":Kd=!0;break;case"contextmenu":case"mouseup":case"dragend":Kd=!1,Q0(p,n,h);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":Q0(p,n,h)}var w;if(Hp)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else rr?Ex(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Sx&&n.locale!=="ko"&&(rr||D!=="onCompositionStart"?D==="onCompositionEnd"&&rr&&(w=Mx()):(ws=h,Bp="value"in ws?ws.value:ws.textContent,rr=!0)),R=Tu(c,D),0<R.length&&(D=new G0(D,e,null,n,h),p.push({event:D,listeners:R}),w?D.data=w:(w=Tx(n),w!==null&&(D.data=w)))),(w=f1?d1(e,n):p1(e,n))&&(D=Tu(c,"onBeforeInput"),0<D.length&&(R=new G0("onBeforeInput","beforeinput",null,n,h),p.push({event:R,listeners:D}),R.data=w)),sE(p,e,c,n,h)}xv(p,t)})}function ol(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=tl(e,n),s!=null&&i.unshift(ol(e,s,a)),s=tl(e,t),s!=null&&i.push(ol(e,s,a))),e.tag===3)return i;e=e.return}return[]}function Qa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function z_(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=tl(n,a),c!=null&&r.unshift(ol(n,c,l))):s||(c=tl(n,a),c!=null&&r.push(ol(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var rE=/\r\n?/g,oE=/\u0000|\uFFFD/g;function B_(e){return(typeof e=="string"?e:""+e).replace(rE,`
`).replace(oE,"")}function vv(e,t){return t=B_(t),B_(e)===t}function Wu(){}function fe(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Er(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Er(e,""+i);break;case"className":Rc(e,"class",i);break;case"tabIndex":Rc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Rc(e,n,i);break;case"style":vx(e,i,a);break;case"data":if(t!=="object"){Rc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",s.name,s,null),fe(e,t,"formEncType",s.formEncType,s,null),fe(e,t,"formMethod",s.formMethod,s,null),fe(e,t,"formTarget",s.formTarget,s,null)):(fe(e,t,"encType",s.encType,s,null),fe(e,t,"method",s.method,s,null),fe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Xc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Wu);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Xc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),Gc(e,"popover",i);break;case"xlinkActuate":Hi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Hi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Hi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Hi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Hi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Hi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=FS.get(n)||n,Gc(e,n,i))}}function vp(e,t,n,i,s,a){switch(n){case"style":vx(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Er(e,i):(typeof i=="number"||typeof i=="bigint")&&Er(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Wu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!px.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Tn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Gc(e,n,i)}}}function en(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:fe(e,t,a,r,n,null)}}s&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(tt(137,t));break;default:fe(e,t,i,h,n,null)}}_x(e,a,o,l,c,r,s,!1),ru(e);return;case"select":Yt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?mr(e,!!i,t,!1):n!=null&&mr(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:fe(e,t,r,o,n,null)}yx(e,i,s,a),ru(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:fe(e,t,l,i,n,null)}return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<rl.length;i++)Yt(rl[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:fe(e,t,c,i,n,null)}return;default:if(Ip(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&vp(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}function lE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||fe(e,t,d,null,i,p)}}for(var f in i){var d=i[f];if(p=n[f],i.hasOwnProperty(f)&&(d!=null||p!=null))switch(f){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:d!==p&&fe(e,t,f,d,i,p)}}Xd(e,r,o,l,c,h,a,s);return;case"select":d=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||fe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&fe(e,t,s,a,i,l)}t=o,n=r,i=d,f!=null?mr(e,!!n,f,!1):!!i!=!!n&&(t!=null?mr(e,!!n,t,!0):mr(e,!!n,n?[]:"",!1));return;case"textarea":d=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&fe(e,t,r,s,i,a)}xx(e,f,d);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:fe(e,t,g,null,i,f)}for(l in i)if(f=i[l],d=n[l],i.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:fe(e,t,l,f,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v)&&fe(e,t,v,null,i,f);for(c in i)if(f=i[c],d=n[c],i.hasOwnProperty(c)&&f!==d&&(f!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:fe(e,t,c,f,i,d)}return;default:if(Ip(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&vp(e,t,m,void 0,i,f);for(h in i)f=i[h],d=n[h],!i.hasOwnProperty(h)||f===d||f===void 0&&d===void 0||vp(e,t,h,f,i,d);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&fe(e,t,u,null,i,f);for(p in i)f=i[p],d=n[p],!i.hasOwnProperty(p)||f===d||f==null&&d==null||fe(e,t,p,f,i,d)}var bp=null,Mp=null;function Au(e){return e.nodeType===9?e:e.ownerDocument}function F_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Sp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Od=null;function cE(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var Mv=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,H_=typeof Promise=="function"?Promise:void 0,hE=typeof queueMicrotask=="function"?queueMicrotask:typeof H_<"u"?function(e){return H_.resolve(null).then(e).catch(fE)}:Mv;function fE(e){setTimeout(function(){throw e})}function ks(e){return e==="head"}function V_(e,t){var n=t,i=0,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(0<i&&8>i){n=i;var r=e.ownerDocument;if(n&1&&Qo(r.documentElement),n&2&&Qo(r.body),n&4)for(n=r.head,Qo(n),r=n.firstChild;r;){var o=r.nextSibling,l=r.nodeName;r[_l]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=o}}if(s===0){e.removeChild(a),fl(t);return}s--}else n==="$"||n==="$?"||n==="$!"?s++:i=n.charCodeAt(0)-48;else i=0;n=a}while(n);fl(t)}function Ep(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ep(n),Pp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function dE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function pE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Tp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function mE(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ap=null;function k_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Sv(e,t,n){switch(t=Au(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function Qo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pp(e)}var ti=new Map,G_=new Set;function wu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var es=se.d;se.d={f:gE,r:_E,D:xE,C:yE,L:vE,m:bE,X:SE,S:ME,M:EE};function gE(){var e=es.f(),t=ku();return e||t}function _E(e){var t=Or(e);t!==null&&t.tag===5&&t.type==="form"?gy(t):es.r(e)}var zr=typeof document>"u"?null:document;function Ev(e,t,n){var i=zr;if(i&&typeof t=="string"&&t){var s=jn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),G_.has(s)||(G_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),en(t,"link",e),qe(t),i.head.appendChild(t)))}}function xE(e){es.D(e),Ev("dns-prefetch",e,null)}function yE(e,t){es.C(e,t),Ev("preconnect",e,t)}function vE(e,t,n){es.L(e,t,n);var i=zr;if(i&&e&&t){var s='link[rel="preload"][as="'+jn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+jn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+jn(n.imageSizes)+'"]')):s+='[href="'+jn(e)+'"]';var a=s;switch(t){case"style":a=Ur(e);break;case"script":a=Br(e)}ti.has(a)||(e=ye({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ti.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(wl(a))||t==="script"&&i.querySelector(Cl(a))||(t=i.createElement("link"),en(t,"link",e),qe(t),i.head.appendChild(t)))}}function bE(e,t){es.m(e,t);var n=zr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+jn(i)+'"][href="'+jn(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Br(e)}if(!ti.has(a)&&(e=ye({rel:"modulepreload",href:e},t),ti.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cl(a)))return}i=n.createElement("link"),en(i,"link",e),qe(i),n.head.appendChild(i)}}}function ME(e,t,n){es.S(e,t,n);var i=zr;if(i&&e){var s=pr(i).hoistableStyles,a=Ur(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(wl(a)))o.loading=5;else{e=ye({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ti.get(a))&&xm(e,n);var l=r=i.createElement("link");qe(l),en(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,$c(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function SE(e,t){es.X(e,t);var n=zr;if(n&&e){var i=pr(n).hoistableScripts,s=Br(e),a=i.get(s);a||(a=n.querySelector(Cl(s)),a||(e=ye({src:e,async:!0},t),(t=ti.get(s))&&ym(e,t),a=n.createElement("script"),qe(a),en(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function EE(e,t){es.M(e,t);var n=zr;if(n&&e){var i=pr(n).hoistableScripts,s=Br(e),a=i.get(s);a||(a=n.querySelector(Cl(s)),a||(e=ye({src:e,async:!0,type:"module"},t),(t=ti.get(s))&&ym(e,t),a=n.createElement("script"),qe(a),en(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function X_(e,t,n,i){var s=(s=Ds.current)?wu(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ur(n.href),n=pr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ur(n.href);var a=pr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(wl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),ti.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ti.set(e,n),a||TE(s,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Br(n),n=pr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Ur(e){return'href="'+jn(e)+'"'}function wl(e){return'link[rel="stylesheet"]['+e+"]"}function Tv(e){return ye({},e,{"data-precedence":e.precedence,precedence:null})}function TE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),en(t,"link",n),qe(t),e.head.appendChild(t))}function Br(e){return'[src="'+jn(e)+'"]'}function Cl(e){return"script[async]"+e}function W_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+jn(n.href)+'"]');if(i)return t.instance=i,qe(i),i;var s=ye({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),qe(i),en(i,"style",s),$c(i,n.precedence,e),t.instance=i;case"stylesheet":s=Ur(n.href);var a=e.querySelector(wl(s));if(a)return t.state.loading|=4,t.instance=a,qe(a),a;i=Tv(n),(s=ti.get(s))&&xm(i,s),a=(e.ownerDocument||e).createElement("link"),qe(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),en(a,"link",i),t.state.loading|=4,$c(a,n.precedence,e),t.instance=a;case"script":return a=Br(n.src),(s=e.querySelector(Cl(a)))?(t.instance=s,qe(s),s):(i=n,(s=ti.get(a))&&(i=ye({},n),ym(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),qe(s),en(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,$c(i,n.precedence,e));return t.instance}function $c(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ym(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var tu=null;function q_(e,t,n){if(tu===null){var i=new Map,s=tu=new Map;s.set(n,i)}else s=tu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[_l]||a[an]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Y_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function AE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Av(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ll=null;function wE(){}function CE(e,t,n){if(ll===null)throw Error(tt(475));var i=ll;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=Ur(n.href),a=e.querySelector(wl(s));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Cu.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=a,qe(a);return}a=e.ownerDocument||e,n=Tv(n),(s=ti.get(s))&&xm(n,s),a=a.createElement("link"),qe(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),en(a,"link",n),t.instance=a}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Cu.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function RE(){if(ll===null)throw Error(tt(475));var e=ll;return e.stylesheets&&e.count===0&&wp(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&wp(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cu(){if(this.count--,this.count===0){if(this.stylesheets)wp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ru=null;function wp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ru=new Map,t.forEach(DE,e),Ru=null,Cu.call(e))}function DE(e,t){if(!(t.state.loading&4)){var n=Ru.get(e);if(n)var i=n.get(null);else{n=new Map,Ru.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Cu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var cl={$$typeof:Xi,Provider:null,Consumer:null,_currentValue:ha,_currentValue2:ha,_threadCount:0};function NE(e,t,n,i,s,a,r,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ad(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.hiddenUpdates=ad(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function wv(e,t,n,i,s,a,r,o,l,c,h,p){return e=new NE(e,t,n,r,o,l,c,p),t=1,a===!0&&(t|=24),a=Un(3,null,null,t),e.current=a,a.stateNode=e,t=Yp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Kp(a),e}function Cv(e){return e?(e=ur,e):ur}function Rv(e,t,n,i,s,a){s=Cv(s),i.context===null?i.context=s:i.pendingContext=s,i=Ns(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Us(e,i,t),n!==null&&(In(n,e,t),Xo(n,e,t))}function Z_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vm(e,t){Z_(e,t),(e=e.alternate)&&Z_(e,t)}function Dv(e){if(e.tag===13){var t=Pr(e,67108864);t!==null&&In(t,e,67108864),vm(e,67108864)}}var Du=!0;function UE(e,t,n,i){var s=Rt.T;Rt.T=null;var a=se.p;try{se.p=2,bm(e,t,n,i)}finally{se.p=a,Rt.T=s}}function LE(e,t,n,i){var s=Rt.T;Rt.T=null;var a=se.p;try{se.p=8,bm(e,t,n,i)}finally{se.p=a,Rt.T=s}}function bm(e,t,n,i){if(Du){var s=Cp(i);if(s===null)Ld(e,t,i,Nu,n),K_(e,i);else if(PE(s,e,t,n,i))i.stopPropagation();else if(K_(e,i),t&4&&-1<OE.indexOf(e)){for(;s!==null;){var a=Or(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=la(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-On(r);o.entanglements[1]|=l,r&=~l}Ai(a),(ce&6)===0&&(bu=Si()+500,Al(0,!1))}}break;case 13:o=Pr(a,2),o!==null&&In(o,a,2),ku(),vm(a,2)}if(a=Cp(i),a===null&&Ld(e,t,i,Nu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Ld(e,t,i,null,n)}}function Cp(e){return e=zp(e),Mm(e)}var Nu=null;function Mm(e){if(Nu=null,e=sr(e),e!==null){var t=dl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ex(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nu=e,null}function Nv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bS()){case ax:return 2;case rx:return 8;case au:case MS:return 32;case ox:return 268435456;default:return 32}default:return 32}}var Rp=!1,Ps=null,Is=null,zs=null,ul=new Map,hl=new Map,Ts=[],OE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(e,t){switch(e){case"focusin":case"focusout":Ps=null;break;case"dragenter":case"dragleave":Is=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(t.pointerId)}}function Lo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Or(t),t!==null&&Dv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function PE(e,t,n,i,s){switch(t){case"focusin":return Ps=Lo(Ps,e,t,n,i,s),!0;case"dragenter":return Is=Lo(Is,e,t,n,i,s),!0;case"mouseover":return zs=Lo(zs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return ul.set(a,Lo(ul.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,hl.set(a,Lo(hl.get(a)||null,e,t,n,i,s)),!0}return!1}function Uv(e){var t=sr(e.target);if(t!==null){var n=dl(t);if(n!==null){if(t=n.tag,t===13){if(t=ex(n),t!==null){e.blockedOn=t,DS(e.priority,function(){if(n.tag===13){var i=Pn();i=Lp(i);var s=Pr(n,i);s!==null&&In(s,n,i),vm(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);qd=i,n.target.dispatchEvent(i),qd=null}else return t=Or(n),t!==null&&Dv(t),e.blockedOn=n,!1;t.shift()}return!0}function j_(e,t,n){eu(e)&&n.delete(t)}function IE(){Rp=!1,Ps!==null&&eu(Ps)&&(Ps=null),Is!==null&&eu(Is)&&(Is=null),zs!==null&&eu(zs)&&(zs=null),ul.forEach(j_),hl.forEach(j_)}function Vc(e,t){e.blockedOn===t&&(e.blockedOn=null,Rp||(Rp=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,IE)))}var kc=null;function J_(e){kc!==e&&(kc=e,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,function(){kc===e&&(kc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Mm(i||n)===null)continue;break}var a=Or(n);a!==null&&(e.splice(t,3),t-=3,lp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function fl(e){function t(l){return Vc(l,e)}Ps!==null&&Vc(Ps,e),Is!==null&&Vc(Is,e),zs!==null&&Vc(zs,e),ul.forEach(t),hl.forEach(t);for(var n=0;n<Ts.length;n++){var i=Ts[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ts.length&&(n=Ts[0],n.blockedOn===null);)Uv(n),n.blockedOn===null&&Ts.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Tn]||null;if(typeof a=="function")r||J_(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Tn]||null)o=r.formAction;else if(Mm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),J_(n)}}}function Sm(e){this._internalRoot=e}qu.prototype.render=Sm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=Pn();Rv(n,i,e,t,null,null)};qu.prototype.unmount=Sm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rv(e.current,2,null,e,null,null),ku(),t[Lr]=null}};function qu(e){this._internalRoot=e}qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=fx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ts.length&&t!==0&&t<Ts[n].priority;n++);Ts.splice(n,0,e),n===0&&Uv(e)}};var Q_=$_.version;if(Q_!=="19.1.0")throw Error(tt(527,Q_,"19.1.0"));se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=pS(t),e=e!==null?nx(e):null,e=e===null?null:e.stateNode,e};var zE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Rt,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Oo.isDisabled&&Oo.supportsFiber))try{pl=Oo.inject(zE),Ln=Oo}catch{}var Oo;Yu.createRoot=function(e,t){if(!tx(e))throw Error(tt(299));var n=!1,i="",s=wy,a=Cy,r=Ry,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=wv(e,1,!1,null,null,n,i,s,a,r,o,null),e[Lr]=t.current,_m(e),new Sm(t)};Yu.hydrateRoot=function(e,t,n){if(!tx(e))throw Error(tt(299));var i=!1,s="",a=wy,r=Cy,o=Ry,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=wv(e,1,!0,t,n??null,i,s,a,r,o,l,c),t.context=Cv(null),n=t.current,i=Pn(),i=Lp(i),s=Ns(i),s.callback=null,Us(n,s,i),n=i,t.current.lanes=n,gl(t,n),Ai(t),e[Lr]=t.current,_m(e),new qu(t)};Yu.version="19.1.0"});var Iv=ms((O3,Pv)=>{"use strict";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(e){console.error(e)}}Ov(),Pv.exports=Lv()});var C=vc(Ya(),1),PM=vc(Iv(),1);var Vh="176",ea={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},na={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cb=0,eg=1,ub=2;var ng=1,hb=2,Li=3,cs=0,vn=1,Oi=2,hs=0,Na=1,ig=2,sg=3,ag=4,fb=5,Js=100,db=101,pb=102,mb=103,gb=104,_b=200,xb=201,yb=202,vb=203,_h=204,xh=205,bb=206,Mb=207,Sb=208,Eb=209,Tb=210,Ab=211,wb=212,Cb=213,Rb=214,kh=0,Gh=1,Xh=2,Ua=3,Wh=4,qh=5,Yh=6,Zh=7,rg=0,Db=1,Nb=2,fs=0,Ub=1,Lb=2,Ob=3,Pb=4,Ib=5,zb=6,Bb=7;var og=300,za=301,Ba=302,Kh=303,jh=304,oc=306,yh=1e3,js=1001,vh=1002,ii=1003,Fb=1004;var lc=1005;var pi=1006,Jh=1007;var ia=1008;var _i=1009,lg=1010,cg=1011,lo=1012,Qh=1013,sa=1014,Pi=1015,co=1016,$h=1017,tf=1018,uo=1020,ug=35902,hg=1021,fg=1022,ai=1023,$r=1026,ho=1027,dg=1028,ef=1029,pg=1030,nf=1031;var sf=1033,cc=33776,uc=33777,hc=33778,fc=33779,af=35840,rf=35841,of=35842,lf=35843,cf=36196,uf=37492,hf=37496,ff=37808,df=37809,pf=37810,mf=37811,gf=37812,_f=37813,xf=37814,yf=37815,vf=37816,bf=37817,Mf=37818,Sf=37819,Ef=37820,Tf=37821,dc=36492,Af=36494,wf=36495,mg=36283,Cf=36284,Rf=36285,Df=36286;var Il=2300,bh=2301,gh=2302,qm=2400,Ym=2401,Zm=2402;var Hb=3200,Vb=3201;var gg=0,kb=1,ds="",xn="srgb",La="srgb-linear",zl="linear",ue="srgb";var Da=7680;var Km=519,Gb=512,Xb=513,Wb=514,_g=515,qb=516,Yb=517,Zb=518,Kb=519,jm=35044;var xg="300 es",wi=2e3,Bl=2001;var Ci=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zv=1234567,Ol=Math.PI/180,to=180/Math.PI;function fo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[e&255]+on[e>>8&255]+on[e>>16&255]+on[e>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function qt(e,t,n){return Math.max(t,Math.min(n,e))}function yg(e,t){return(e%t+t)%t}function BE(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function FE(e,t,n){return e!==t?(n-e)/(t-e):0}function Pl(e,t,n){return(1-n)*e+n*t}function HE(e,t,n,i){return Pl(e,t,1-Math.exp(-n*i))}function VE(e,t=1){return t-Math.abs(yg(e,t*2)-t)}function kE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function GE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function XE(e,t){return e+Math.floor(Math.random()*(t-e+1))}function WE(e,t){return e+Math.random()*(t-e)}function qE(e){return e*(.5-Math.random())}function YE(e){e!==void 0&&(zv=e);let t=zv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ZE(e){return e*Ol}function KE(e){return e*to}function jE(e){return(e&e-1)===0&&e!==0}function JE(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function QE(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function $E(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),p=a((t-i)/2),f=r((t-i)/2),d=a((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*p,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*p,o*c);break;case"ZXZ":e.set(l*p,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*d,o*c);break;case"YXY":e.set(l*d,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function _n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var vg={DEG2RAD:Ol,RAD2DEG:to,generateUUID:fo,clamp:qt,euclideanModulo:yg,mapLinear:BE,inverseLerp:FE,lerp:Pl,damp:HE,pingpong:VE,smoothstep:kE,smootherstep:GE,randInt:XE,randFloat:WE,randFloatSpread:qE,seededRandom:YE,degToRad:ZE,radToDeg:KE,isPowerOfTwo:jE,ceilPowerOfTwo:JE,floorPowerOfTwo:QE,setQuaternionFromProperEuler:$E,normalize:_n,denormalize:Jr},zt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],u=s[6],_=s[1],x=s[4],y=s[7],A=s[2],R=s[5],w=s[8];return a[0]=r*v+o*_+l*A,a[3]=r*m+o*x+l*R,a[6]=r*u+o*y+l*w,a[1]=c*v+h*_+p*A,a[4]=c*m+h*x+p*R,a[7]=c*u+h*y+p*w,a[2]=f*v+d*_+g*A,a[5]=f*m+d*x+g*R,a[8]=f*u+d*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,f=o*l-h*a,d=c*a-r*l,g=n*p+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=p*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*r)*v,t[3]=f*v,t[4]=(h*n-s*l)*v,t[5]=(s*a-o*n)*v,t[6]=d*v,t[7]=(i*l-c*n)*v,t[8]=(r*n-i*a)*v,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Em.makeScale(t,n)),this}rotate(t){return this.premultiply(Em.makeRotation(-t)),this}translate(t,n){return this.premultiply(Em.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Em=new Bt;function bg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Fl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function jb(){let e=Fl("canvas");return e.style.display="block",e}var Bv={};function pc(e){e in Bv||(Bv[e]=!0,console.warn(e))}function Jb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function Qb(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $b(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Fv=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hv=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tT(){let e={enabled:!0,workingColorSpace:La,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ue&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ue&&(s.r=Qr(s.r),s.g=Qr(s.g),s.b=Qr(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?zl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[La]:{primaries:t,whitePoint:i,transfer:zl,toXYZ:Fv,fromXYZ:Hv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:Fv,fromXYZ:Hv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),e}var ee=tT();function ls(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Fr,Mh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fr===void 0&&(Fr=Fl("canvas")),Fr.width=t.width,Fr.height=t.height;let s=Fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Fr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Fl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ls(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ls(n[i]/255)*255):n[i]=ls(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},eT=0,eo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Tm(s[r].image)):a.push(Tm(s[r]))}else a=Tm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Tm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Mh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nT=0,Hn=class e extends Ci{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=js,s=js,a=pi,r=ia,o=ai,l=_i,c=e.DEFAULT_ANISOTROPY,h=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=fo(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==og)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yh:t.x=t.x-Math.floor(t.x);break;case js:t.x=t.x<0?0:1;break;case vh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yh:t.y=t.y-Math.floor(t.y);break;case js:t.y=t.y<0?0:1;break;case vh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=og;Hn.DEFAULT_ANISOTROPY=1;var Ce=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,y=(d+1)/2,A=(u+1)/2,R=(h+f)/4,w=(p+v)/4,D=(g+m)/4;return x>y&&x>A?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=R/i,a=w/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=R/s,a=D/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=D/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this.w=qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this.w=qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sh=class extends Ci{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new Ce(0,0,t,n),this.scissorTest=!1,this.viewport=new Ce(0,0,t,n);let s={width:t,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);let a=new Hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new eo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Sh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Hl=class extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eh=class extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],f=a[r+0],d=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p;return}if(o===1){t[n+0]=f,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(p!==v||l!==f||c!==d||h!==g){let m=1-o,u=l*f+c*d+h*g+p*v,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let A=Math.sqrt(x),R=Math.atan2(A,u*_);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let y=o*_;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,p=p*m+v*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=A,c*=A,h*=A,p*=A}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],f=a[r+1],d=a[r+2],g=a[r+3];return t[n]=o*g+h*p+l*d-c*f,t[n+1]=l*g+h*f+c*p-o*d,t[n+2]=c*g+h*d+o*f-l*p,t[n+3]=h*g-o*p-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),f=l(i/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*p+c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p-f*d*g;break;case"YXZ":this._x=f*h*p+c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p+f*d*g;break;case"ZXY":this._x=f*h*p-c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p-f*d*g;break;case"ZYX":this._x=f*h*p-c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p+f*d*g;break;case"YZX":this._x=f*h*p+c*d*g,this._y=c*d*p+f*h*g,this._z=c*h*g-f*d*p,this._w=c*h*p-f*d*g;break;case"XZY":this._x=f*h*p-c*d*g,this._y=c*d*p-f*h*g,this._z=c*h*g+f*d*p,this._w=c*h*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-n;return this._w=d*r+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=r*p+this._w*f,this._x=i*p+this._x*f,this._y=s*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Vv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Vv.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=qt(this.x,t.x,n.x),this.y=qt(this.y,t.y,n.y),this.z=qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=qt(this.x,t,n),this.y=qt(this.y,t,n),this.z=qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Am.copy(this).projectOnVector(t),this.sub(Am)}reflect(t){return this.sub(Am.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Am=new I,Vv=new si,Di=class{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,hi):hi.fromBufferAttribute(a,r),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zu.copy(i.boundingBox)),Zu.applyMatrix4(t.matrixWorld),this.union(Zu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rl),Ku.subVectors(this.max,Rl),Hr.subVectors(t.a,Rl),Vr.subVectors(t.b,Rl),kr.subVectors(t.c,Rl),Gs.subVectors(Vr,Hr),Xs.subVectors(kr,Vr),Aa.subVectors(Hr,kr);let n=[0,-Gs.z,Gs.y,0,-Xs.z,Xs.y,0,-Aa.z,Aa.y,Gs.z,0,-Gs.x,Xs.z,0,-Xs.x,Aa.z,0,-Aa.x,-Gs.y,Gs.x,0,-Xs.y,Xs.x,0,-Aa.y,Aa.x,0];return!wm(n,Hr,Vr,kr,Ku)||(n=[1,0,0,0,1,0,0,0,1],!wm(n,Hr,Vr,kr,Ku))?!1:(ju.crossVectors(Gs,Xs),n=[ju.x,ju.y,ju.z],wm(n,Hr,Vr,kr,Ku))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ns=[new I,new I,new I,new I,new I,new I,new I,new I],hi=new I,Zu=new Di,Hr=new I,Vr=new I,kr=new I,Gs=new I,Xs=new I,Aa=new I,Rl=new I,Ku=new I,ju=new I,wa=new I;function wm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){wa.fromArray(e,a);let o=s.x*Math.abs(wa.x)+s.y*Math.abs(wa.y)+s.z*Math.abs(wa.z),l=t.dot(wa),c=n.dot(wa),h=i.dot(wa);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var iT=new Di,Dl=new I,Cm=new I,Ni=class{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):iT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dl.subVectors(t,this.center);let n=Dl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Dl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dl.copy(t.center).add(Cm)),this.expandByPoint(Dl.copy(t.center).sub(Cm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},is=new I,Rm=new I,Ju=new I,Ws=new I,Dm=new I,Qu=new I,Nm=new I,Qs=class{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=is.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,n),is.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Rm.copy(t).add(n).multiplyScalar(.5),Ju.copy(n).sub(t).normalize(),Ws.copy(this.origin).sub(Rm);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Ju),o=Ws.dot(this.direction),l=-Ws.dot(Ju),c=Ws.lengthSq(),h=Math.abs(1-r*r),p,f,d,g;if(h>0)if(p=r*l-o,f=r*o-l,g=a*h,p>=0)if(f>=-g)if(f<=g){let v=1/h;p*=v,f*=v,d=p*(p+r*f+2*o)+f*(r*p+f+2*l)+c}else f=a,p=Math.max(0,-(r*f+o)),d=-p*p+f*(f+2*l)+c;else f=-a,p=Math.max(0,-(r*f+o)),d=-p*p+f*(f+2*l)+c;else f<=-g?(p=Math.max(0,-(-r*a+o)),f=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+f*(f+2*l)+c):f<=g?(p=0,f=Math.min(Math.max(-a,-l),a),d=f*(f+2*l)+c):(p=Math.max(0,-(r*a+o)),f=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+f*(f+2*l)+c);else f=r>0?-a:a,p=Math.max(0,-(r*f+o)),d=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Rm).addScaledVector(Ju,f),d}intersectSphere(t,n){is.subVectors(t.center,this.origin);let i=is.dot(this.direction),s=is.dot(is)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,n,i,s,a){Dm.subVectors(n,t),Qu.subVectors(i,t),Nm.crossVectors(Dm,Qu);let r=this.direction.dot(Nm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ws.subVectors(this.origin,t);let l=o*this.direction.dot(Qu.crossVectors(Ws,Qu));if(l<0)return null;let c=o*this.direction.dot(Dm.cross(Ws));if(c<0||l+c>r)return null;let h=-o*Ws.dot(Nm);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class e{constructor(t,n,i,s,a,r,o,l,c,h,p,f,d,g,v,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,f,d,g,v,m)}set(t,n,i,s,a,r,o,l,c,h,p,f,d,g,v,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Gr.setFromMatrixColumn(t,0).length(),a=1/Gr.setFromMatrixColumn(t,1).length(),r=1/Gr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let f=r*h,d=r*p,g=o*h,v=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+g*c,n[5]=f-v*c,n[9]=-o*l,n[2]=v-f*c,n[6]=g+d*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*h,d=l*p,g=c*h,v=c*p;n[0]=f+v*o,n[4]=g*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-g,n[6]=v+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*h,d=l*p,g=c*h,v=c*p;n[0]=f-v*o,n[4]=-r*p,n[8]=g+d*o,n[1]=d+g*o,n[5]=r*h,n[9]=v-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*h,d=r*p,g=o*h,v=o*p;n[0]=l*h,n[4]=g*c-d,n[8]=f*c+v,n[1]=l*p,n[5]=v*c+f,n[9]=d*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,d=r*c,g=o*l,v=o*c;n[0]=l*h,n[4]=v-f*p,n[8]=g*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+g,n[10]=f-v*p}else if(t.order==="XZY"){let f=r*l,d=r*c,g=o*l,v=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+v,n[5]=r*h,n[9]=d*p-g,n[2]=g*p-d,n[6]=o*h,n[10]=v*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sT,t,aT)}lookAt(t,n,i){let s=this.elements;return Bn.subVectors(t,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),qs.crossVectors(i,Bn),qs.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),qs.crossVectors(i,Bn)),qs.normalize(),$u.crossVectors(Bn,qs),s[0]=qs.x,s[4]=$u.x,s[8]=Bn.x,s[1]=qs.y,s[5]=$u.y,s[9]=Bn.y,s[2]=qs.z,s[6]=$u.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],u=i[14],_=i[3],x=i[7],y=i[11],A=i[15],R=s[0],w=s[4],D=s[8],E=s[12],b=s[1],N=s[5],Y=s[9],k=s[13],z=s[2],J=s[6],F=s[10],Q=s[14],X=s[3],nt=s[7],lt=s[11],Z=s[15];return a[0]=r*R+o*b+l*z+c*X,a[4]=r*w+o*N+l*J+c*nt,a[8]=r*D+o*Y+l*F+c*lt,a[12]=r*E+o*k+l*Q+c*Z,a[1]=h*R+p*b+f*z+d*X,a[5]=h*w+p*N+f*J+d*nt,a[9]=h*D+p*Y+f*F+d*lt,a[13]=h*E+p*k+f*Q+d*Z,a[2]=g*R+v*b+m*z+u*X,a[6]=g*w+v*N+m*J+u*nt,a[10]=g*D+v*Y+m*F+u*lt,a[14]=g*E+v*k+m*Q+u*Z,a[3]=_*R+x*b+y*z+A*X,a[7]=_*w+x*N+y*J+A*nt,a[11]=_*D+x*Y+y*F+A*lt,a[15]=_*E+x*k+y*Q+A*Z,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+a*l*p-s*c*p-a*o*f+i*c*f+s*o*d-i*l*d)+v*(+n*l*d-n*c*f+a*r*f-s*r*d+s*c*h-a*l*h)+m*(+n*c*p-n*o*d-a*r*p+i*r*d+a*o*h-i*c*h)+u*(-s*o*h-n*l*p+n*o*f+s*r*p-i*r*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],u=t[15],_=p*m*c-v*f*c+v*l*d-o*m*d-p*l*u+o*f*u,x=g*f*c-h*m*c-g*l*d+r*m*d+h*l*u-r*f*u,y=h*v*c-g*p*c+g*o*d-r*v*d-h*o*u+r*p*u,A=g*p*l-h*v*l-g*o*f+r*v*f+h*o*m-r*p*m,R=n*_+i*x+s*y+a*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=_*w,t[1]=(v*f*a-p*m*a-v*s*d+i*m*d+p*s*u-i*f*u)*w,t[2]=(o*m*a-v*l*a+v*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(p*l*a-o*f*a-p*s*c+i*f*c+o*s*d-i*l*d)*w,t[4]=x*w,t[5]=(h*m*a-g*f*a+g*s*d-n*m*d-h*s*u+n*f*u)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*f*a-h*l*a+h*s*c-n*f*c-r*s*d+n*l*d)*w,t[8]=y*w,t[9]=(g*p*a-h*v*a-g*i*d+n*v*d+h*i*u-n*p*u)*w,t[10]=(r*v*a-g*o*a+g*i*c-n*v*c-r*i*u+n*o*u)*w,t[11]=(h*o*a-r*p*a-h*i*c+n*p*c+r*i*d-n*o*d)*w,t[12]=A*w,t[13]=(h*v*s-g*p*s+g*i*f-n*v*f-h*i*m+n*p*m)*w,t[14]=(g*o*s-r*v*s-g*i*l+n*v*l+r*i*m-n*o*m)*w,t[15]=(r*p*s-h*o*s+h*i*l-n*p*l-r*i*f+n*o*f)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,f=a*c,d=a*h,g=a*p,v=r*h,m=r*p,u=o*p,_=l*c,x=l*h,y=l*p,A=i.x,R=i.y,w=i.z;return s[0]=(1-(v+u))*A,s[1]=(d+y)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(d-y)*R,s[5]=(1-(f+u))*R,s[6]=(m+_)*R,s[7]=0,s[8]=(g+x)*w,s[9]=(m-_)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Gr.set(s[0],s[1],s[2]).length(),r=Gr.set(s[4],s[5],s[6]).length(),o=Gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],fi.copy(this);let c=1/a,h=1/r,p=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=p,fi.elements[9]*=p,fi.elements[10]*=p,n.setFromRotationMatrix(fi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=wi){let l=this.elements,c=2*a/(n-t),h=2*a/(i-s),p=(n+t)/(n-t),f=(i+s)/(i-s),d,g;if(o===wi)d=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Bl)d=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=wi){let l=this.elements,c=1/(n-t),h=1/(i-s),p=1/(r-a),f=(n+t)*c,d=(i+s)*h,g,v;if(o===wi)g=(r+a)*p,v=-2*p;else if(o===Bl)g=a*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Gr=new I,fi=new Ae,sT=new I(0,0,0),aT=new I(1,1,1),qs=new I,$u=new I,Bn=new I,kv=new Ae,Gv=new si,mi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return kv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kv,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Gv.setFromEuler(this),this.setFromQuaternion(Gv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Vl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rT=0,Xv=new I,Xr=new si,ss=new Ae,th=new I,Nl=new I,oT=new I,lT=new si,Wv=new I(1,0,0),qv=new I(0,1,0),Yv=new I(0,0,1),Zv={type:"added"},cT={type:"removed"},Wr={type:"childadded",child:null},Um={type:"childremoved",child:null},Je=class e extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new mi,i=new si,s=new I(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Bt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(Wv,t)}rotateY(t){return this.rotateOnAxis(qv,t)}rotateZ(t){return this.rotateOnAxis(Yv,t)}translateOnAxis(t,n){return Xv.copy(t).applyQuaternion(this.quaternion),this.position.add(Xv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Wv,t)}translateY(t){return this.translateOnAxis(qv,t)}translateZ(t){return this.translateOnAxis(Yv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?th.copy(t):th.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(Nl,th,this.up):ss.lookAt(th,Nl,this.up),this.quaternion.setFromRotationMatrix(ss),s&&(ss.extractRotation(s.matrixWorld),Xr.setFromRotationMatrix(ss),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zv),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cT),Um.child=t,this.dispatchEvent(Um),Um.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(ss),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zv),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,t,oT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,lT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Je.DEFAULT_UP=new I(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new I,as=new I,Lm=new I,rs=new I,qr=new I,Yr=new I,Kv=new I,Om=new I,Pm=new I,Im=new I,zm=new Ce,Bm=new Ce,Fm=new Ce,Ks=class e{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),di.subVectors(t,n),s.cross(di);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){di.subVectors(s,n),as.subVectors(i,n),Lm.subVectors(t,n);let r=di.dot(di),o=di.dot(as),l=di.dot(Lm),c=as.dot(as),h=as.dot(Lm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let f=1/p,d=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-d-g,g,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,rs.x),l.addScaledVector(r,rs.y),l.addScaledVector(o,rs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return zm.setScalar(0),Bm.setScalar(0),Fm.setScalar(0),zm.fromBufferAttribute(t,n),Bm.fromBufferAttribute(t,i),Fm.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(zm,a.x),r.addScaledVector(Bm,a.y),r.addScaledVector(Fm,a.z),r}static isFrontFacing(t,n,i,s){return di.subVectors(i,n),as.subVectors(t,n),di.cross(as).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),as.subVectors(this.a,this.b),di.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;qr.subVectors(s,i),Yr.subVectors(a,i),Om.subVectors(t,i);let l=qr.dot(Om),c=Yr.dot(Om);if(l<=0&&c<=0)return n.copy(i);Pm.subVectors(t,s);let h=qr.dot(Pm),p=Yr.dot(Pm);if(h>=0&&p<=h)return n.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(qr,r);Im.subVectors(t,a);let d=qr.dot(Im),g=Yr.dot(Im);if(g>=0&&d<=g)return n.copy(a);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Yr,o);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return Kv.subVectors(a,s),o=(p-h)/(p-h+(d-g)),n.copy(s).addScaledVector(Kv,o);let u=1/(m+v+f);return r=v*u,o=f*u,n.copy(i).addScaledVector(qr,r).addScaledVector(Yr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},eh={h:0,s:0,l:0};function Hm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Ht=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=ee.workingColorSpace){return this.r=t,this.g=n,this.b=i,ee.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=ee.workingColorSpace){if(t=yg(t,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Hm(r,a,t+1/3),this.g=Hm(r,a,t),this.b=Hm(r,a,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,n=xn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xn){let i=tM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ee.fromWorkingColorSpace(ln.copy(this),t),Math.round(qt(ln.r*255,0,255))*65536+Math.round(qt(ln.g*255,0,255))*256+Math.round(qt(ln.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ee.workingColorSpace){ee.fromWorkingColorSpace(ln.copy(this),n);let i=ln.r,s=ln.g,a=ln.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ee.workingColorSpace){return ee.fromWorkingColorSpace(ln.copy(this),n),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=xn){ee.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,i=ln.g,s=ln.b;return t!==xn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+n,Ys.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ys),t.getHSL(eh);let i=Pl(Ys.h,eh.h,n),s=Pl(Ys.s,eh.s,n),a=Pl(Ys.l,eh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ht;Ht.NAMES=tM;var uT=0,Ui=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=Na,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=xh,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_h&&(i.blendSrc=this.blendSrc),this.blendDst!==xh&&(i.blendDst=this.blendDst),this.blendEquation!==Js&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Da&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Da&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Da&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},kl=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new I,nh=new zt,hT=0,un=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=jm,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nh.fromBufferAttribute(this,n),nh.applyMatrix3(t),this.setXY(n,nh.x,nh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Jr(n,this.array)),n}setX(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Jr(n,this.array)),n}setY(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Jr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Jr(n,this.array)),n}setW(t,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array),a=_n(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jm&&(t.usage=this.usage),t}};var Gl=class extends un{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Xl=class extends un{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var je=class extends un{constructor(t,n,i){super(new Float32Array(t),n,i)}},fT=0,ei=new Ae,Vm=new Je,Zr=new I,Fn=new Di,Ul=new Di,Ke=new I,hn=class e extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bg(t)?Xl:Gl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,n,i){return ei.makeTranslation(t,n,i),this.applyMatrix4(ei),this}scale(t,n,i){return ei.makeScale(t,n,i),this.applyMatrix4(ei),this}lookAt(t){return Vm.lookAt(t),Vm.updateMatrix(),this.applyMatrix4(Vm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Fn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Ul.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Fn.min,Ul.min),Fn.expandByPoint(Ke),Ke.addVectors(Fn.max,Ul.max),Fn.expandByPoint(Ke)):(Fn.expandByPoint(Ul.min),Fn.expandByPoint(Ul.max))}Fn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Ke.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Ke));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(t,c),Ke.add(Zr)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new I,l[D]=new I;let c=new I,h=new I,p=new I,f=new zt,d=new zt,g=new zt,v=new I,m=new I;function u(D,E,b){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,b),f.fromBufferAttribute(a,D),d.fromBufferAttribute(a,E),g.fromBufferAttribute(a,b),h.sub(c),p.sub(c),d.sub(f),g.sub(f);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(N),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),o[D].add(v),o[E].add(v),o[b].add(v),l[D].add(m),l[E].add(m),l[b].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,E=_.length;D<E;++D){let b=_[D],N=b.start,Y=b.count;for(let k=N,z=N+Y;k<z;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let x=new I,y=new I,A=new I,R=new I;function w(D){A.fromBufferAttribute(s,D),R.copy(A);let E=o[D];x.copy(E),x.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(R,E);let N=y.dot(l[D])<0?-1:1;r.setXYZW(D,x.x,x.y,x.z,N)}for(let D=0,E=_.length;D<E;++D){let b=_[D],N=b.start,Y=b.count;for(let k=N,z=N+Y;k<z;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,h=new I,p=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,m),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ke.fromBufferAttribute(t,n),Ke.normalize(),t.setXYZ(n,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[d++]}return new un(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let f=c[h],d=t(f,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jv=new Ae,Ca=new Qs,ih=new Ni,Jv=new I,sh=new I,ah=new I,rh=new I,km=new I,oh=new I,Qv=new I,lh=new I,yn=class extends Je{constructor(t=new hn,n=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){oh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(km.fromBufferAttribute(p,t),r?oh.addScaledVector(km,h):oh.addScaledVector(km.sub(n),h))}n.add(oh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ih.copy(i.boundingSphere),ih.applyMatrix4(a),Ca.copy(t.ray).recast(t.near),!(ih.containsPoint(Ca.origin)===!1&&(Ca.intersectSphere(ih,Jv)===null||Ca.origin.distanceToSquared(Jv)>(t.far-t.near)**2))&&(jv.copy(a).invert(),Ca.copy(t.ray).applyMatrix4(jv),!(i.boundingBox!==null&&Ca.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ca)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,f=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){let m=f[g],u=r[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,A=x;y<A;y+=3){let R=o.getX(y),w=o.getX(y+1),D=o.getX(y+2);s=ch(this,u,t,i,c,h,p,R,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,u=v;m<u;m+=3){let _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=ch(this,r,t,i,c,h,p,_,x,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){let m=f[g],u=r[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,A=x;y<A;y+=3){let R=y,w=y+1,D=y+2;s=ch(this,u,t,i,c,h,p,R,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,u=v;m<u;m+=3){let _=m,x=m+1,y=m+2;s=ch(this,r,t,i,c,h,p,_,x,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function dT(e,t,n,i,s,a,r,o){let l;if(t.side===vn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===cs,o),l===null)return null;lh.copy(o),lh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(lh);return c<n.near||c>n.far?null:{distance:c,point:lh.clone(),object:e}}function ch(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,sh),e.getVertexPosition(l,ah),e.getVertexPosition(c,rh);let h=dT(e,t,n,i,sh,ah,rh,Qv);if(h){let p=new I;Ks.getBarycoord(Qv,sh,ah,rh,p),s&&(h.uv=Ks.getInterpolatedAttribute(s,o,l,c,p,new zt)),a&&(h.uv1=Ks.getInterpolatedAttribute(a,o,l,c,p,new zt)),r&&(h.normal=Ks.getInterpolatedAttribute(r,o,l,c,p,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};Ks.getNormal(sh,ah,rh,f.normal),h.face=f,h.barycoord=p}return h}var no=class e extends hn{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],f=0,d=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function g(v,m,u,_,x,y,A,R,w,D,E){let b=y/w,N=A/D,Y=y/2,k=A/2,z=R/2,J=w+1,F=D+1,Q=0,X=0,nt=new I;for(let lt=0;lt<F;lt++){let Z=lt*N-k;for(let ct=0;ct<J;ct++){let Lt=ct*b-Y;nt[v]=Lt*_,nt[m]=Z*x,nt[u]=z,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[m]=0,nt[u]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),p.push(ct/w),p.push(1-lt/D),Q+=1}}for(let lt=0;lt<D;lt++)for(let Z=0;Z<w;Z++){let ct=f+Z+J*lt,Lt=f+Z+J*(lt+1),W=f+(Z+1)+J*(lt+1),st=f+(Z+1)+J*lt;l.push(ct,Lt,st),l.push(Lt,W,st),X+=6}o.addGroup(d,X,E),d+=X,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function fn(e){let t={};for(let n=0;n<e.length;n++){let i=Fa(e[n]);for(let s in i)t[s]=i[s]}return t}function pT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Mg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var eM={clone:Fa,merge:fn},mT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mT,this.fragmentShader=gT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fa(t.uniforms),this.uniformsGroups=pT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Wl=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=wi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zs=new I,$v=new zt,tb=new zt,cn=class extends Wl{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,n){return this.getViewBounds(t,$v,tb),n.subVectors(tb,$v)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Kr=-90,jr=1,Th=class extends Je{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Kr,jr,t,n);s.layers=this.layers,this.add(s);let a=new cn(Kr,jr,t,n);a.layers=this.layers,this.add(a);let r=new cn(Kr,jr,t,n);r.layers=this.layers,this.add(r);let o=new cn(Kr,jr,t,n);o.layers=this.layers,this.add(o);let l=new cn(Kr,jr,t,n);l.layers=this.layers,this.add(l);let c=new cn(Kr,jr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(p,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ql=class extends Hn{constructor(t=[],n=za,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ah=class extends Ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ql(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new no(5,5,5),a=new gi({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:hs});a.uniforms.tEquirect.value=n;let r=new yn(s,a),o=n.minFilter;return n.minFilter===ia&&(n.minFilter=pi),new Th(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},os=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},_T={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let v of t.hand.values()){let m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_T)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new os;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Yl=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zl=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Gm=new I,xT=new I,yT=new Bt,ni=class{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Gm.subVectors(i,n).cross(xT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Gm),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||yT.getNormalMatrix(t),s=this.coplanarPoint(Gm).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ra=new Ni,uh=new I,so=class{constructor(t=new ni,n=new ni,i=new ni,s=new ni,a=new ni,r=new ni){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=wi){let i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],p=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],u=s[12],_=s[13],x=s[14],y=s[15];if(i[0].setComponents(l-a,f-c,m-d,y-u).normalize(),i[1].setComponents(l+a,f+c,m+d,y+u).normalize(),i[2].setComponents(l+r,f+h,m+g,y+_).normalize(),i[3].setComponents(l-r,f-h,m-g,y-_).normalize(),i[4].setComponents(l-o,f-p,m-v,y-x).normalize(),n===wi)i[5].setComponents(l+o,f+p,m+v,y+x).normalize();else if(n===Bl)i[5].setComponents(o,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ra.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ra)}intersectsSprite(t){return Ra.center.set(0,0,0),Ra.radius=.7071067811865476,Ra.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ra)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(uh.x=s.normal.x>0?t.max.x:t.min.x,uh.y=s.normal.y>0?t.max.y:t.min.y,uh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wh=new I,Ch=new I,eb=new Ae,Ll=new Qs,hh=new Ni,Xm=new I,nb=new I,Oa=class extends Je{constructor(t=new hn,n=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)wh.fromBufferAttribute(n,s-1),Ch.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=wh.distanceTo(Ch);t.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hh.copy(i.boundingSphere),hh.applyMatrix4(s),hh.radius+=a,t.ray.intersectsSphere(hh)===!1)return;eb.copy(s).invert(),Ll.copy(t.ray).applyMatrix4(eb);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=d,m=g-1;v<m;v+=c){let u=h.getX(v),_=h.getX(v+1),x=fh(this,t,Ll,l,u,_,v);x&&n.push(x)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(d),u=fh(this,t,Ll,l,v,m,g-1);u&&n.push(u)}}else{let d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let v=d,m=g-1;v<m;v+=c){let u=fh(this,t,Ll,l,v,v+1,v);u&&n.push(u)}if(this.isLineLoop){let v=fh(this,t,Ll,l,g-1,d,g-1);v&&n.push(v)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function fh(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(wh.fromBufferAttribute(o,s),Ch.fromBufferAttribute(o,a),n.distanceSqToSegment(wh,Ch,Xm,nb)>i)return;Xm.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Xm);if(!(c<t.near||c>t.far))return{distance:c,point:nb.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var ib=new I,sb=new I,Kl=class extends Oa{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,a=n.count;s<a;s+=2)ib.fromBufferAttribute(n,s),sb.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ib.distanceTo(sb);t.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jl=class extends Oa{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}},ao=class extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ab=new Ae,Jm=new Qs,dh=new Ni,ph=new I,Jl=class extends Je{constructor(t=new hn,n=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dh.copy(i.boundingSphere),dh.applyMatrix4(s),dh.radius+=a,t.ray.intersectsSphere(dh)===!1)return;ab.copy(s).invert(),Jm.copy(t.ray).applyMatrix4(ab);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=f,v=d;g<v;g++){let m=c.getX(g);ph.fromBufferAttribute(p,m),rb(ph,m,l,s,t,n,this)}}else{let f=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let g=f,v=d;g<v;g++)ph.fromBufferAttribute(p,g),rb(ph,g,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function rb(e,t,n,i,s,a,r){let o=Jm.distanceSqToPoint(e);if(o<n){let l=new I;Jm.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Ql=class extends Hn{constructor(t,n,i=sa,s,a,r,o=ii,l=ii,c,h=$r){if(h!==$r&&h!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}};var Pa=class e extends hn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,f=n/l,d=[],g=[],v=[],m=[];for(let u=0;u<h;u++){let _=u*f-r;for(let x=0;x<c;x++){let y=x*p-a;g.push(y,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){let x=_+c*u,y=_+c*(u+1),A=_+1+c*(u+1),R=_+1+c*u;d.push(x,y,R),d.push(y,A,R)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var ro=class extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gg,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Rh=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dh=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function vT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ia=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nh=class extends Ia{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qm,endingEnd:qm}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ym:a=t,o=2*n-i;break;case Zm:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ym:r=t,l=2*i-n;break;case Zm:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,u=-f*m+2*f*v-f*g,_=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*v+.5*g,y=d*m-d*v;for(let A=0;A!==o;++A)a[A]=u*r[h+A]+_*r[c+A]+x*r[l+A]+y*r[p+A];return a}},Uh=class extends Ia{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let f=0;f!==o;++f)a[f]=r[c+f]*p+r[l+f]*h;return a}},Lh=class extends Ia{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Vn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mh(n,this.TimeBufferType),this.values=mh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:mh(t.times,Array),values:mh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Il:n=this.InterpolantFactoryMethodDiscrete;break;case bh:n=this.InterpolantFactoryMethodLinear;break;case gh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Il;case this.InterpolantFactoryMethodLinear:return bh;case this.InterpolantFactoryMethodSmooth:return gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&vT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,f=p-i,d=p+i;for(let g=0;g!==i;++g){let v=n[p+g];if(v!==n[f+g]||v!==n[d+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,f=r*i;for(let d=0;d!==i;++d)n[f+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=bh;var $s=class extends Vn{constructor(t,n,i){super(t,n,i)}};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Il;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Oh=class extends Vn{constructor(t,n,i,s){super(t,n,i,s)}};Oh.prototype.ValueTypeName="color";var Ph=class extends Vn{constructor(t,n,i,s){super(t,n,i,s)}};Ph.prototype.ValueTypeName="number";var Ih=class extends Ia{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)si.slerpFlat(a,0,r,c-o,r,c,l);return a}},$l=class extends Vn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Ih(this.times,this.values,this.getValueSize(),t)}};$l.prototype.ValueTypeName="quaternion";$l.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Vn{constructor(t,n,i){super(t,n,i)}};ta.prototype.ValueTypeName="string";ta.prototype.ValueBufferType=Array;ta.prototype.DefaultInterpolation=Il;ta.prototype.InterpolantFactoryMethodLinear=void 0;ta.prototype.InterpolantFactoryMethodSmooth=void 0;var zh=class extends Vn{constructor(t,n,i,s){super(t,n,i,s)}};zh.prototype.ValueTypeName="vector";var Bh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let d=c[p],g=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},nM=new Bh,Fh=class{constructor(t){this.manager=t!==void 0?t:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var tc=class extends Je{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},ec=class extends tc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Wm=new Ae,ob=new I,lb=new I,Qm=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;ob.setFromMatrixPosition(t.matrixWorld),n.position.copy(ob),lb.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(lb),n.updateMatrixWorld(),Wm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wm),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nc=class extends Wl{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},$m=class extends Qm{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ic=class extends tc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new $m}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Hh=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sg="\\[\\]\\.:\\/",bT=new RegExp("["+Sg+"]","g"),Eg="[^"+Sg+"]",MT="[^"+Sg.replace("\\.","")+"]",ST=/((?:WC+[\/:])*)/.source.replace("WC",Eg),ET=/(WCOD+)?/.source.replace("WCOD",MT),TT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eg),AT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eg),wT=new RegExp("^"+ST+ET+TT+AT+"$"),CT=["material","materials","bones","map"],tg=class{constructor(t,n,i){let s=i||ve.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},ve=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bT,"")}static parseTrackName(t){let n=wT.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);CT.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=tg;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P3=new Float32Array(1);var oo=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var sc=class extends Kl{constructor(t=10,n=10,i=4473924,s=8947848){i=new Ht(i),s=new Ht(s);let a=n/2,r=t/n,o=t/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=n;f++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let v=f===a?i:s;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}let h=new hn;h.setAttribute("position",new je(l,3)),h.setAttribute("color",new je(c,3));let p=new us({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ac=class extends Kl{constructor(t=1){let n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new hn;s.setAttribute("position",new je(n,3)),s.setAttribute("color",new je(i,3));let a=new us({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(t,n,i){let s=new Ht,a=this.geometry.attributes.color.array;return s.set(t),s.toArray(a,0),s.toArray(a,3),s.set(n),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var rc=class extends Ci{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Tg(e,t,n,i){let s=RT(i);switch(n){case hg:return e*t;case dg:return e*t/s.components*s.byteLength;case ef:return e*t/s.components*s.byteLength;case pg:return e*t*2/s.components*s.byteLength;case nf:return e*t*2/s.components*s.byteLength;case fg:return e*t*3/s.components*s.byteLength;case ai:return e*t*4/s.components*s.byteLength;case sf:return e*t*4/s.components*s.byteLength;case cc:case uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hc:case fc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rf:case lf:return Math.max(e,16)*Math.max(t,8)/4;case af:case of:return Math.max(e,8)*Math.max(t,8)/2;case cf:case uf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ff:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case df:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case mf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _f:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case yf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case vf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case bf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Mf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Sf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ef:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Tf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case dc:case Af:case wf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case mg:case Cf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Rf:case Df:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RT(e){switch(e){case _i:case lg:return{byteLength:1,components:1};case lo:case cg:case co:return{byteLength:2,components:1};case $h:case tf:return{byteLength:2,components:4};case sa:case Qh:case Pi:return{byteLength:4,components:1};case ug:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);function AM(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function DT(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){let g=p[f],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,p[f]=v)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){let v=p[d];e.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oA="gl_FragColor = linearToOutputTexel( gl_FragColor );",lA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_A=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$A=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_w=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ew=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:NT,alphahash_pars_fragment:UT,alphamap_fragment:LT,alphamap_pars_fragment:OT,alphatest_fragment:PT,alphatest_pars_fragment:IT,aomap_fragment:zT,aomap_pars_fragment:BT,batching_pars_vertex:FT,batching_vertex:HT,begin_vertex:VT,beginnormal_vertex:kT,bsdfs:GT,iridescence_fragment:XT,bumpmap_pars_fragment:WT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:YT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:KT,color_fragment:jT,color_pars_fragment:JT,color_pars_vertex:QT,color_vertex:$T,common:tA,cube_uv_reflection_fragment:eA,defaultnormal_vertex:nA,displacementmap_pars_vertex:iA,displacementmap_vertex:sA,emissivemap_fragment:aA,emissivemap_pars_fragment:rA,colorspace_fragment:oA,colorspace_pars_fragment:lA,envmap_fragment:cA,envmap_common_pars_fragment:uA,envmap_pars_fragment:hA,envmap_pars_vertex:fA,envmap_physical_pars_fragment:SA,envmap_vertex:dA,fog_vertex:pA,fog_pars_vertex:mA,fog_fragment:gA,fog_pars_fragment:_A,gradientmap_pars_fragment:xA,lightmap_pars_fragment:yA,lights_lambert_fragment:vA,lights_lambert_pars_fragment:bA,lights_pars_begin:MA,lights_toon_fragment:EA,lights_toon_pars_fragment:TA,lights_phong_fragment:AA,lights_phong_pars_fragment:wA,lights_physical_fragment:CA,lights_physical_pars_fragment:RA,lights_fragment_begin:DA,lights_fragment_maps:NA,lights_fragment_end:UA,logdepthbuf_fragment:LA,logdepthbuf_pars_fragment:OA,logdepthbuf_pars_vertex:PA,logdepthbuf_vertex:IA,map_fragment:zA,map_pars_fragment:BA,map_particle_fragment:FA,map_particle_pars_fragment:HA,metalnessmap_fragment:VA,metalnessmap_pars_fragment:kA,morphinstance_vertex:GA,morphcolor_vertex:XA,morphnormal_vertex:WA,morphtarget_pars_vertex:qA,morphtarget_vertex:YA,normal_fragment_begin:ZA,normal_fragment_maps:KA,normal_pars_fragment:jA,normal_pars_vertex:JA,normal_vertex:QA,normalmap_pars_fragment:$A,clearcoat_normal_fragment_begin:tw,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:nw,iridescence_pars_fragment:iw,opaque_fragment:sw,packing:aw,premultiplied_alpha_fragment:rw,project_vertex:ow,dithering_fragment:lw,dithering_pars_fragment:cw,roughnessmap_fragment:uw,roughnessmap_pars_fragment:hw,shadowmap_pars_fragment:fw,shadowmap_pars_vertex:dw,shadowmap_vertex:pw,shadowmask_pars_fragment:mw,skinbase_vertex:gw,skinning_pars_vertex:_w,skinning_vertex:xw,skinnormal_vertex:yw,specularmap_fragment:vw,specularmap_pars_fragment:bw,tonemapping_fragment:Mw,tonemapping_pars_fragment:Sw,transmission_fragment:Ew,transmission_pars_fragment:Tw,uv_pars_fragment:Aw,uv_pars_vertex:ww,uv_vertex:Cw,worldpos_vertex:Rw,background_vert:Dw,background_frag:Nw,backgroundCube_vert:Uw,backgroundCube_frag:Lw,cube_vert:Ow,cube_frag:Pw,depth_vert:Iw,depth_frag:zw,distanceRGBA_vert:Bw,distanceRGBA_frag:Fw,equirect_vert:Hw,equirect_frag:Vw,linedashed_vert:kw,linedashed_frag:Gw,meshbasic_vert:Xw,meshbasic_frag:Ww,meshlambert_vert:qw,meshlambert_frag:Yw,meshmatcap_vert:Zw,meshmatcap_frag:Kw,meshnormal_vert:jw,meshnormal_frag:Jw,meshphong_vert:Qw,meshphong_frag:$w,meshphysical_vert:t2,meshphysical_frag:e2,meshtoon_vert:n2,meshtoon_frag:i2,points_vert:s2,points_frag:a2,shadow_vert:r2,shadow_frag:o2,sprite_vert:l2,sprite_frag:c2},ut={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ii={basic:{uniforms:fn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:fn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:fn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:fn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:fn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:fn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:fn([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:fn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:fn([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:fn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:fn([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:fn([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:fn([ut.lights,ut.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ii.physical={uniforms:fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Nf={r:0,b:0,g:0},Ha=new mi,u2=new Ae;function h2(e,t,n,i,s,a,r){let o=new Ht(0),l=a===!0?0:1,c,h,p=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:t).get(y)),y}function v(x){let y=!1,A=g(x);A===null?u(o,l):A&&A.isColor&&(u(A,1),y=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(x,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===oc)?(h===void 0&&(h=new yn(new no(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Fa(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ha.copy(y.backgroundRotation),Ha.x*=-1,Ha.y*=-1,Ha.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ha.y*=-1,Ha.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u2.makeRotationFromEuler(Ha)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==ue,(p!==A||f!==A.version||d!==e.toneMapping)&&(h.material.needsUpdate=!0,p=A,f=A.version,d=e.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new yn(new Pa(2,2),new gi({name:"BackgroundMaterial",uniforms:Fa(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(A.colorSpace)!==ue,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||f!==A.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,p=A,f=A.version,d=e.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(Nf,Mg(e)),i.buffers.color.setClear(Nf.r,Nf.g,Nf.b,y,r)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:v,addToRenderList:m,dispose:_}}function f2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(b,N,Y,k,z){let J=!1,F=p(k,Y,N);a!==F&&(a=F,c(a.object)),J=d(b,k,Y,z),J&&g(b,k,Y,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,y(b,N,Y,k),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function h(b){return e.deleteVertexArray(b)}function p(b,N,Y){let k=Y.wireframe===!0,z=i[b.id];z===void 0&&(z={},i[b.id]=z);let J=z[N.id];J===void 0&&(J={},z[N.id]=J);let F=J[k];return F===void 0&&(F=f(l()),J[k]=F),F}function f(b){let N=[],Y=[],k=[];for(let z=0;z<n;z++)N[z]=0,Y[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,N,Y,k){let z=a.attributes,J=N.attributes,F=0,Q=Y.getAttributes();for(let X in Q)if(Q[X].location>=0){let lt=z[X],Z=J[X];if(Z===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),lt===void 0||lt.attribute!==Z||Z&&lt.data!==Z.data)return!0;F++}return a.attributesNum!==F||a.index!==k}function g(b,N,Y,k){let z={},J=N.attributes,F=0,Q=Y.getAttributes();for(let X in Q)if(Q[X].location>=0){let lt=J[X];lt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor));let Z={};Z.attribute=lt,lt&&lt.data&&(Z.data=lt.data),z[X]=Z,F++}a.attributes=z,a.attributesNum=F,a.index=k}function v(){let b=a.newAttributes;for(let N=0,Y=b.length;N<Y;N++)b[N]=0}function m(b){u(b,0)}function u(b,N){let Y=a.newAttributes,k=a.enabledAttributes,z=a.attributeDivisors;Y[b]=1,k[b]===0&&(e.enableVertexAttribArray(b),k[b]=1),z[b]!==N&&(e.vertexAttribDivisor(b,N),z[b]=N)}function _(){let b=a.newAttributes,N=a.enabledAttributes;for(let Y=0,k=N.length;Y<k;Y++)N[Y]!==b[Y]&&(e.disableVertexAttribArray(Y),N[Y]=0)}function x(b,N,Y,k,z,J,F){F===!0?e.vertexAttribIPointer(b,N,Y,z,J):e.vertexAttribPointer(b,N,Y,k,z,J)}function y(b,N,Y,k){v();let z=k.attributes,J=Y.getAttributes(),F=N.defaultAttributeValues;for(let Q in J){let X=J[Q];if(X.location>=0){let nt=z[Q];if(nt===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){let lt=nt.normalized,Z=nt.itemSize,ct=t.get(nt);if(ct===void 0)continue;let Lt=ct.buffer,W=ct.type,st=ct.bytesPerElement,mt=W===e.INT||W===e.UNSIGNED_INT||nt.gpuType===Qh;if(nt.isInterleavedBufferAttribute){let at=nt.data,Mt=at.stride,It=nt.offset;if(at.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)u(X.location+xt,at.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let xt=0;xt<X.locationSize;xt++)x(X.location+xt,Z/X.locationSize,W,lt,Mt*st,(It+Z/X.locationSize*xt)*st,mt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)u(X.location+at,nt.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<X.locationSize;at++)m(X.location+at);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let at=0;at<X.locationSize;at++)x(X.location+at,Z/X.locationSize,W,lt,Z*st,Z/X.locationSize*at*st,mt)}}else if(F!==void 0){let lt=F[Q];if(lt!==void 0)switch(lt.length){case 2:e.vertexAttrib2fv(X.location,lt);break;case 3:e.vertexAttrib3fv(X.location,lt);break;case 4:e.vertexAttrib4fv(X.location,lt);break;default:e.vertexAttrib1fv(X.location,lt)}}}}_()}function A(){D();for(let b in i){let N=i[b];for(let Y in N){let k=N[Y];for(let z in k)h(k[z].object),delete k[z];delete N[Y]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;let N=i[b.id];for(let Y in N){let k=N[Y];for(let z in k)h(k[z].object),delete k[z];delete N[Y]}delete i[b.id]}function w(b){for(let N in i){let Y=i[N];if(Y[b.id]===void 0)continue;let k=Y[b.id];for(let z in k)h(k[z].object),delete k[z];delete Y[b.id]}}function D(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function d2(e,t,n){let i;function s(c){i=c}function a(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function r(c,h,p){p!==0&&(e.drawArraysInstanced(i,c,h,p),n.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let d=0;for(let g=0;g<p;g++)d+=h[g];n.update(d,i,1)}function l(c,h,p,f){if(p===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*f[v];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function p2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==ai&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let D=w===co&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==_i&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pi&&!D)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function m2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ni,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||i!==0||s;return s=f,i=p.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,d){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,u=e.get(p);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let _=a?0:i,x=_*4,y=u.clippingState||null;l.value=y,y=h(g,f,x,d);for(let A=0;A!==x;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,f,d,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let u=d+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=d;x!==v;++x,y+=4)r.copy(p[x]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function g2(e){let t=new WeakMap;function n(r,o){return o===Kh?r.mapping=za:o===jh&&(r.mapping=Ba),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Kh||o===jh)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Ah(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var mo=4,iM=[.125,.215,.35,.446,.526,.582],Ga=20,Ag=new nc,sM=new Ht,wg=null,Cg=0,Rg=0,Dg=!1,ka=(1+Math.sqrt(5))/2,po=1/ka,aM=[new I(-ka,po,0),new I(ka,po,0),new I(-po,0,ka),new I(po,0,ka),new I(0,ka,-po),new I(0,ka,po),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],_2=new I,Of=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=_2}=a;wg=this._renderer.getRenderTarget(),Cg=this._renderer.getActiveCubeFace(),Rg=this._renderer.getActiveMipmapLevel(),Dg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wg,Cg,Rg),this._renderer.xr.enabled=Dg,t.scissorTest=!1,Uf(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===za||t.mapping===Ba?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wg=this._renderer.getRenderTarget(),Cg=this._renderer.getActiveCubeFace(),Rg=this._renderer.getActiveMipmapLevel(),Dg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:co,format:ai,colorSpace:La,depthBuffer:!1},s=rM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rM(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x2(a)),this._blurMaterial=y2(a,t,n)}return s}_compileMaterial(t){let n=new yn(this._lodPlanes[0],t);this._renderer.compile(n,Ag)}_sceneToCubeUV(t,n,i,s,a){let l=new cn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,d=p.toneMapping;p.getClearColor(sM),p.toneMapping=fs,p.autoClear=!1;let g=new kl({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),v=new yn(new no,g),m=!1,u=t.background;u?u.isColor&&(g.color.copy(u),t.background=null,m=!0):(g.color.copy(sM),m=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[_],a.y,a.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[_]));let y=this._cubeSize;Uf(s,x*y,_>2?y:0,y,y),p.setRenderTarget(s),m&&p.render(v,l),p.render(t,l)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=d,p.autoClear=f,t.background=u}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===za||t.mapping===Ba;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new yn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Uf(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Ag)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=aM[(s-a-1)%aM.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new yn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Ga-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):Ga;m>Ga&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ga}`);let u=[],_=0;for(let w=0;w<Ga;++w){let D=w/v,E=Math.exp(-D*D/2);u.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let y=this._sizeLods[s],A=3*y*(s>x-mo?s-x+mo:0),R=4*(this._cubeSize-y);Uf(n,A,R,3*y,2*y),l.setRenderTarget(n),l.render(p,Ag)}};function x2(e){let t=[],n=[],i=[],s=e,a=e-mo+1+iM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-mo?l=iM[r-e+mo-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,g=6,v=3,m=2,u=1,_=new Float32Array(v*g*d),x=new Float32Array(m*g*d),y=new Float32Array(u*g*d);for(let R=0;R<d;R++){let w=R%3*2/3-1,D=R>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(E,v*g*R),x.set(f,m*g*R);let b=[R,R,R,R,R,R];y.set(b,u*g*R)}let A=new hn;A.setAttribute("position",new un(_,v)),A.setAttribute("uv",new un(x,m)),A.setAttribute("faceIndex",new un(y,u)),t.push(A),s>mo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function rM(e,t,n){let i=new Ri(e,t,n);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uf(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function y2(e,t,n){let i=new Float32Array(Ga),s=new I(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function oM(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function lM(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Hg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Kh||l===jh,h=l===za||l===Ba;if(c||h){let p=t.get(o),f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Of(e)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(n===null&&(n=new Of(e)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function b2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&pc("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function M2(e,t,n,i){let s={},a=new WeakMap;function r(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];let d=a.get(f);d&&(t.remove(d),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(p){let f=p.attributes;for(let d in f)t.update(f[d],e.ARRAY_BUFFER)}function c(p){let f=[],d=p.index,g=p.attributes.position,v=0;if(d!==null){let _=d.array;v=d.version;for(let x=0,y=_.length;x<y;x+=3){let A=_[x+0],R=_[x+1],w=_[x+2];f.push(A,R,R,w,w,A)}}else if(g!==void 0){let _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){let A=x+0,R=x+1,w=x+2;f.push(A,R,R,w,w,A)}}else return;let m=new(bg(f)?Xl:Gl)(f,1);m.version=v;let u=a.get(p);u&&t.remove(u),a.set(p,m)}function h(p){let f=a.get(p);if(f){let d=p.index;d!==null&&f.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function S2(e,t,n){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,d){e.drawElements(i,d,a,f*r),n.update(d,i,1)}function c(f,d,g){g!==0&&(e.drawElementsInstanced(i,d,a,f*r,g),n.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,f,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];n.update(m,i,1)}function p(f,d,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,d[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,a,f,0,v,0,g);let u=0;for(let _=0;_<g;_++)u+=d[_]*v[_];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function E2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function T2(e,t,n){let i=new WeakMap,s=new Ce;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==p){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*A*4*p),w=new Hl(R,y,A,p);w.type=Pi,w.needsUpdate=!0;let D=x*4;for(let b=0;b<p;b++){let N=m[b],Y=u[b],k=_[b],z=y*A*4*b;for(let J=0;J<N.count;J++){let F=J*D;d===!0&&(s.fromBufferAttribute(N,J),R[z+F+0]=s.x,R[z+F+1]=s.y,R[z+F+2]=s.z,R[z+F+3]=0),g===!0&&(s.fromBufferAttribute(Y,J),R[z+F+4]=s.x,R[z+F+5]=s.y,R[z+F+6]=s.z,R[z+F+7]=0),v===!0&&(s.fromBufferAttribute(k,J),R[z+F+8]=s.x,R[z+F+9]=s.y,R[z+F+10]=s.z,R[z+F+11]=k.itemSize===4?s.w:1)}}f={count:p,texture:w,size:new zt(y,A)},i.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function A2(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var wM=new Hn,cM=new Ql(1,1),CM=new Hl,RM=new Eh,DM=new ql,uM=[],hM=[],fM=new Float32Array(16),dM=new Float32Array(9),pM=new Float32Array(4);function _o(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=uM[s];if(a===void 0&&(a=new Float32Array(s),uM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ge(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function If(e,t){let n=hM[t];n===void 0&&(n=new Int32Array(t),hM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function w2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function C2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2fv(this.addr,t),Ge(n,t)}}function R2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ke(n,t))return;e.uniform3fv(this.addr,t),Ge(n,t)}}function D2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4fv(this.addr,t),Ge(n,t)}}function N2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(ke(n,i))return;pM.set(i),e.uniformMatrix2fv(this.addr,!1,pM),Ge(n,i)}}function U2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(ke(n,i))return;dM.set(i),e.uniformMatrix3fv(this.addr,!1,dM),Ge(n,i)}}function L2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(ke(n,i))return;fM.set(i),e.uniformMatrix4fv(this.addr,!1,fM),Ge(n,i)}}function O2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function P2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2iv(this.addr,t),Ge(n,t)}}function I2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3iv(this.addr,t),Ge(n,t)}}function z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4iv(this.addr,t),Ge(n,t)}}function B2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function F2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ke(n,t))return;e.uniform2uiv(this.addr,t),Ge(n,t)}}function H2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ke(n,t))return;e.uniform3uiv(this.addr,t),Ge(n,t)}}function V2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ke(n,t))return;e.uniform4uiv(this.addr,t),Ge(n,t)}}function k2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(cM.compareFunction=_g,a=cM):a=wM,n.setTexture2D(t||a,s)}function G2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||RM,s)}function X2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||DM,s)}function W2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||CM,s)}function q2(e){switch(e){case 5126:return w2;case 35664:return C2;case 35665:return R2;case 35666:return D2;case 35674:return N2;case 35675:return U2;case 35676:return L2;case 5124:case 35670:return O2;case 35667:case 35671:return P2;case 35668:case 35672:return I2;case 35669:case 35673:return z2;case 5125:return B2;case 36294:return F2;case 36295:return H2;case 36296:return V2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return W2}}function Y2(e,t){e.uniform1fv(this.addr,t)}function Z2(e,t){let n=_o(t,this.size,2);e.uniform2fv(this.addr,n)}function K2(e,t){let n=_o(t,this.size,3);e.uniform3fv(this.addr,n)}function j2(e,t){let n=_o(t,this.size,4);e.uniform4fv(this.addr,n)}function J2(e,t){let n=_o(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Q2(e,t){let n=_o(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function $2(e,t){let n=_o(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function tC(e,t){e.uniform1iv(this.addr,t)}function eC(e,t){e.uniform2iv(this.addr,t)}function nC(e,t){e.uniform3iv(this.addr,t)}function iC(e,t){e.uniform4iv(this.addr,t)}function sC(e,t){e.uniform1uiv(this.addr,t)}function aC(e,t){e.uniform2uiv(this.addr,t)}function rC(e,t){e.uniform3uiv(this.addr,t)}function oC(e,t){e.uniform4uiv(this.addr,t)}function lC(e,t,n){let i=this.cache,s=t.length,a=If(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Ge(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||wM,a[r])}function cC(e,t,n){let i=this.cache,s=t.length,a=If(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Ge(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||RM,a[r])}function uC(e,t,n){let i=this.cache,s=t.length,a=If(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Ge(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||DM,a[r])}function hC(e,t,n){let i=this.cache,s=t.length,a=If(n,s);ke(i,a)||(e.uniform1iv(this.addr,a),Ge(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||CM,a[r])}function fC(e){switch(e){case 5126:return Y2;case 35664:return Z2;case 35665:return K2;case 35666:return j2;case 35674:return J2;case 35675:return Q2;case 35676:return $2;case 5124:case 35670:return tC;case 35667:case 35671:return eC;case 35668:case 35672:return nC;case 35669:case 35673:return iC;case 5125:return sC;case 36294:return aC;case 36295:return rC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return lC;case 35679:case 36299:case 36307:return cC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return hC}}var Ug=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=q2(n.type)}},Lg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fC(n.type)}},Og=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Ng=/(\w+)(\])?(\[|\.)?/g;function mM(e,t){e.seq.push(t),e.map[t.id]=t}function dC(e,t,n){let i=e.name,s=i.length;for(Ng.lastIndex=0;;){let a=Ng.exec(i),r=Ng.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){mM(n,c===void 0?new Ug(o,e,t):new Lg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Og(o),mM(n,p)),n=p}}}var go=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);dC(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function gM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var pC=37297,mC=0;function gC(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var _M=new Bt;function _C(e){ee._getMatrix(_M,ee.workingColorSpace,e);let t=`mat3( ${_M.elements.map(n=>n.toFixed(4))} )`;switch(ee.getTransfer(e)){case zl:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function xM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+gC(e.getShaderSource(t),r)}else return s}function xC(e,t){let n=_C(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yC(e,t){let n;switch(t){case Ub:n="Linear";break;case Lb:n="Reinhard";break;case Ob:n="Cineon";break;case Pb:n="ACESFilmic";break;case zb:n="AgX";break;case Bb:n="Neutral";break;case Ib:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Lf=new I;function vC(){ee.getLuminanceCoefficients(Lf);let e=Lf.x.toFixed(4),t=Lf.y.toFixed(4),n=Lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bC(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mc).join(`
`)}function MC(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function SC(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function mc(e){return e!==""}function yM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var EC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pg(e){return e.replace(EC,AC)}var TC=new Map;function AC(e,t){let n=Gt[t];if(n===void 0){let i=TC.get(t);if(i!==void 0)n=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pg(n)}var wC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bM(e){return e.replace(wC,CC)}function CC(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function MM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function RC(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ng?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===hb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function DC(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case za:case Ba:t="ENVMAP_TYPE_CUBE";break;case oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NC(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ba:t="ENVMAP_MODE_REFRACTION";break}return t}function UC(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case rg:t="ENVMAP_BLENDING_MULTIPLY";break;case Db:t="ENVMAP_BLENDING_MIX";break;case Nb:t="ENVMAP_BLENDING_ADD";break}return t}function LC(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OC(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=RC(n),c=DC(n),h=NC(n),p=UC(n),f=LC(n),d=bC(n),g=MC(a),v=s.createProgram(),m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(mc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(mc).join(`
`),u.length>0&&(u+=`
`)):(m=[MM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mc).join(`
`),u=[MM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fs?"#define TONE_MAPPING":"",n.toneMapping!==fs?Gt.tonemapping_pars_fragment:"",n.toneMapping!==fs?yC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,xC("linearToOutputTexel",n.outputColorSpace),vC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(mc).join(`
`)),r=Pg(r),r=yM(r,n),r=vM(r,n),o=Pg(o),o=yM(o,n),o=vM(o,n),r=bM(r),o=bM(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=_+m+r,y=_+u+o,A=gM(s,s.VERTEX_SHADER,x),R=gM(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,R),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(N){if(e.debug.checkShaderErrors){let Y=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(R).trim(),J=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,A,R);else{let Q=xM(s,A,"vertex"),X=xM(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+Q+`
`+X)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(k===""||z==="")&&(F=!1);F&&(N.diagnostics={runnable:J,programLog:Y,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:u}})}s.deleteShader(A),s.deleteShader(R),D=new go(s,v),E=SC(s,v)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,pC)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mC++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}var PC=0,Ig=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new zg(t),n.set(t,i)),i}},zg=class{constructor(t){this.id=PC++,this.code=t,this.usedTimes=0}};function IC(e,t,n,i,s,a,r){let o=new Vl,l=new Ig,c=new Set,h=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,N,Y,k){let z=Y.fog,J=k.geometry,F=E.isMeshStandardMaterial?Y.environment:null,Q=(E.isMeshStandardMaterial?n:t).get(E.envMap||F),X=Q&&Q.mapping===oc?Q.image.height:null,nt=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=lt!==void 0?lt.length:0,ct=0;J.morphAttributes.position!==void 0&&(ct=1),J.morphAttributes.normal!==void 0&&(ct=2),J.morphAttributes.color!==void 0&&(ct=3);let Lt,W,st,mt;if(nt){let oe=Ii[nt];Lt=oe.vertexShader,W=oe.fragmentShader}else Lt=E.vertexShader,W=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),mt=l.getFragmentShaderID(E);let at=e.getRenderTarget(),Mt=e.state.buffers.depth.getReversed(),It=k.isInstancedMesh===!0,xt=k.isBatchedMesh===!0,he=!!E.map,Qt=!!E.matcap,Xt=!!Q,U=!!E.aoMap,kn=!!E.lightMap,$t=!!E.bumpMap,Kt=!!E.normalMap,Tt=!!E.displacementMap,xe=!!E.emissiveMap,Et=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,H=E.clearcoat>0,$=E.dispersion>0,it=E.iridescence>0,K=E.sheen>0,St=E.transmission>0,ft=M&&!!E.anisotropyMap,Ct=H&&!!E.clearcoatMap,Dt=H&&!!E.clearcoatNormalMap,rt=H&&!!E.clearcoatRoughnessMap,yt=it&&!!E.iridescenceMap,Nt=it&&!!E.iridescenceThicknessMap,Ot=K&&!!E.sheenColorMap,vt=K&&!!E.sheenRoughnessMap,jt=!!E.specularMap,Vt=!!E.specularColorMap,ge=!!E.specularIntensityMap,L=St&&!!E.transmissionMap,dt=St&&!!E.thicknessMap,q=!!E.gradientMap,et=!!E.alphaMap,gt=E.alphaTest>0,pt=!!E.alphaHash,Ft=!!E.extensions,Re=fs;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Re=e.toneMapping);let nn={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:Lt,fragmentShader:W,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:xt,batchingColor:xt&&k._colorsTexture!==null,instancing:It,instancingColor:It&&k.instanceColor!==null,instancingMorph:It&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?e.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:La,alphaToCoverage:!!E.alphaToCoverage,map:he,matcap:Qt,envMap:Xt,envMapMode:Xt&&Q.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:kn,bumpMap:$t,normalMap:Kt,displacementMap:f&&Tt,emissiveMap:xe,normalMapObjectSpace:Kt&&E.normalMapType===kb,normalMapTangentSpace:Kt&&E.normalMapType===gg,metalnessMap:Et,roughnessMap:T,anisotropy:M,anisotropyMap:ft,clearcoat:H,clearcoatMap:Ct,clearcoatNormalMap:Dt,clearcoatRoughnessMap:rt,dispersion:$,iridescence:it,iridescenceMap:yt,iridescenceThicknessMap:Nt,sheen:K,sheenColorMap:Ot,sheenRoughnessMap:vt,specularMap:jt,specularColorMap:Vt,specularIntensityMap:ge,transmission:St,transmissionMap:L,thicknessMap:dt,gradientMap:q,opaque:E.transparent===!1&&E.blending===Na&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:pt,combine:E.combine,mapUv:he&&v(E.map.channel),aoMapUv:U&&v(E.aoMap.channel),lightMapUv:kn&&v(E.lightMap.channel),bumpMapUv:$t&&v(E.bumpMap.channel),normalMapUv:Kt&&v(E.normalMap.channel),displacementMapUv:Tt&&v(E.displacementMap.channel),emissiveMapUv:xe&&v(E.emissiveMap.channel),metalnessMapUv:Et&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:ft&&v(E.anisotropyMap.channel),clearcoatMapUv:Ct&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(E.sheenRoughnessMap.channel),specularMapUv:jt&&v(E.specularMap.channel),specularColorMapUv:Vt&&v(E.specularColorMap.channel),specularIntensityMapUv:ge&&v(E.specularIntensityMap.channel),transmissionMapUv:L&&v(E.transmissionMap.channel),thicknessMapUv:dt&&v(E.thicknessMap.channel),alphaMapUv:et&&v(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Kt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(he||et),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:he&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:xe&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Oi,flipSided:E.side===vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function u(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)b.push(N),b.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(_(b,E),x(b,E),b.push(e.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function _(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function x(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let b=g[E.type],N;if(b){let Y=Ii[b];N=eM.clone(Y.uniforms)}else N=E.uniforms;return N}function A(E,b){let N;for(let Y=0,k=h.length;Y<k;Y++){let z=h[Y];if(z.cacheKey===b){N=z,++N.usedTimes;break}}return N===void 0&&(N=new OC(e,b,E,a),h.push(N)),N}function R(E){if(--E.usedTimes===0){let b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:D}}function zC(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function BC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function SM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function EM(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(p,f,d,g,v,m){let u=e[t];return u===void 0?(u={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:v,group:m},e[t]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=d,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=v,u.group=m),t++,u}function o(p,f,d,g,v,m){let u=r(p,f,d,g,v,m);d.transmission>0?i.push(u):d.transparent===!0?s.push(u):n.push(u)}function l(p,f,d,g,v,m){let u=r(p,f,d,g,v,m);d.transmission>0?i.unshift(u):d.transparent===!0?s.unshift(u):n.unshift(u)}function c(p,f){n.length>1&&n.sort(p||BC),i.length>1&&i.sort(f||SM),s.length>1&&s.sort(f||SM)}function h(){for(let p=t,f=e.length;p<f;p++){let d=e[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function FC(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new EM,e.set(i,[r])):s>=a.length?(r=new EM,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function HC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new I,color:new Ht};break;case"SpotLight":n={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":n={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function VC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var kC=0;function GC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function XC(e){let t=new HC,n=VC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,a=new Ae,r=new Ae;function o(c){let h=0,p=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,v=0,m=0,u=0,_=0,x=0,y=0,A=0,R=0,w=0;c.sort(GC);for(let E=0,b=c.length;E<b;E++){let N=c[E],Y=N.color,k=N.intensity,z=N.distance,J=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=Y.r*k,p+=Y.g*k,f+=Y.b*k;else if(N.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(N.sh.coefficients[F],k);w++}else if(N.isDirectionalLight){let F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,X=n.get(N);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=N.shadow.matrix,_++}i.directional[d]=F,d++}else if(N.isSpotLight){let F=t.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(Y).multiplyScalar(k),F.distance=z,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,i.spot[v]=F;let Q=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,Q.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[v]=Q.matrix,N.castShadow){let X=n.get(N);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=J,y++}v++}else if(N.isRectAreaLight){let F=t.get(N);F.color.copy(Y).multiplyScalar(k),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=F,m++}else if(N.isPointLight){let F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){let Q=N.shadow,X=n.get(N);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=N.shadow.matrix,x++}i.point[g]=F,g++}else if(N.isHemisphereLight){let F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(k),F.groundColor.copy(N.groundColor).multiplyScalar(k),i.hemi[u]=F,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==_||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==A||D.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=_,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=A,D.numLightProbes=w,i.version=kC++)}function l(c,h){let p=0,f=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){let x=c[u];if(x.isDirectionalLight){let y=i.directional[p];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(x.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(x.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function TM(e){let t=new XC(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function a(h){n.push(h)}function r(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function WC(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new TM(e),t.set(s,[o])):a>=r.length?(o=new TM(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var qC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZC(e,t,n){let i=new so,s=new zt,a=new zt,r=new Ce,o=new Rh({depthPacking:Vb}),l=new Dh,c={},h=n.maxTextureSize,p={[cs]:vn,[vn]:cs,[Oi]:Oi},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:qC,fragmentShader:YC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new hn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new yn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ng;let u=this.type;this.render=function(R,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=e.getRenderTarget(),b=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),Y=e.state;Y.setBlending(hs),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let k=u!==Li&&this.type===Li,z=u===Li&&this.type!==Li;for(let J=0,F=R.length;J<F;J++){let Q=R[J],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();if(s.multiply(nt),a.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,X.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,X.mapSize.y=a.y)),X.map===null||k===!0||z===!0){let Z=this.type!==Li?{minFilter:ii,magFilter:ii}:{};X.map!==null&&X.map.dispose(),X.map=new Ri(s.x,s.y,Z),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();let lt=X.getViewportCount();for(let Z=0;Z<lt;Z++){let ct=X.getViewport(Z);r.set(a.x*ct.x,a.y*ct.y,a.x*ct.z,a.y*ct.w),Y.viewport(r),X.updateMatrices(Q,Z),i=X.getFrustum(),y(w,D,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Li&&_(X,D),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,b,N)};function _(R,w){let D=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,D,f,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,D,d,v,null)}function x(R,w,D,E){let b=null,N=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)b=N;else if(b=D.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let Y=b.uuid,k=w.uuid,z=c[Y];z===void 0&&(z={},c[Y]=z);let J=z[k];J===void 0&&(J=b.clone(),z[k]=J,w.addEventListener("dispose",A)),b=J}if(b.visible=w.visible,b.wireframe=w.wireframe,E===Li?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:p[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Y=e.properties.get(b);Y.light=D}return b}function y(R,w,D,E,b){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let k=t.update(R),z=R.material;if(Array.isArray(z)){let J=k.groups;for(let F=0,Q=J.length;F<Q;F++){let X=J[F],nt=z[X.materialIndex];if(nt&&nt.visible){let lt=x(R,nt,E,b);R.onBeforeShadow(e,R,w,D,k,lt,X),e.renderBufferDirect(D,null,k,lt,R,X),R.onAfterShadow(e,R,w,D,k,lt,X)}}}else if(z.visible){let J=x(R,z,E,b);R.onBeforeShadow(e,R,w,D,k,J,null),e.renderBufferDirect(D,null,k,J,R,null),R.onAfterShadow(e,R,w,D,k,J,null)}}let Y=R.children;for(let k=0,z=Y.length;k<z;k++)y(Y[k],w,D,E,b)}function A(R){R.target.removeEventListener("dispose",A);for(let D in c){let E=c[D],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var KC={[kh]:Gh,[Xh]:Yh,[Wh]:Zh,[Ua]:qh,[Gh]:kh,[Yh]:Xh,[Zh]:Wh,[qh]:Ua};function jC(e,t){function n(){let L=!1,dt=new Ce,q=null,et=new Ce(0,0,0,0);return{setMask:function(gt){q!==gt&&!L&&(e.colorMask(gt,gt,gt,gt),q=gt)},setLocked:function(gt){L=gt},setClear:function(gt,pt,Ft,Re,nn){nn===!0&&(gt*=Re,pt*=Re,Ft*=Re),dt.set(gt,pt,Ft,Re),et.equals(dt)===!1&&(e.clearColor(gt,pt,Ft,Re),et.copy(dt))},reset:function(){L=!1,q=null,et.set(-1,0,0,0)}}}function i(){let L=!1,dt=!1,q=null,et=null,gt=null;return{setReversed:function(pt){if(dt!==pt){let Ft=t.get("EXT_clip_control");pt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),dt=pt;let Re=gt;gt=null,this.setClear(Re)}},getReversed:function(){return dt},setTest:function(pt){pt?at(e.DEPTH_TEST):Mt(e.DEPTH_TEST)},setMask:function(pt){q!==pt&&!L&&(e.depthMask(pt),q=pt)},setFunc:function(pt){if(dt&&(pt=KC[pt]),et!==pt){switch(pt){case kh:e.depthFunc(e.NEVER);break;case Gh:e.depthFunc(e.ALWAYS);break;case Xh:e.depthFunc(e.LESS);break;case Ua:e.depthFunc(e.LEQUAL);break;case Wh:e.depthFunc(e.EQUAL);break;case qh:e.depthFunc(e.GEQUAL);break;case Yh:e.depthFunc(e.GREATER);break;case Zh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}et=pt}},setLocked:function(pt){L=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),e.clearDepth(pt),gt=pt)},reset:function(){L=!1,q=null,et=null,gt=null,dt=!1}}}function s(){let L=!1,dt=null,q=null,et=null,gt=null,pt=null,Ft=null,Re=null,nn=null;return{setTest:function(oe){L||(oe?at(e.STENCIL_TEST):Mt(e.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!L&&(e.stencilMask(oe),dt=oe)},setFunc:function(oe,ri,Bi){(q!==oe||et!==ri||gt!==Bi)&&(e.stencilFunc(oe,ri,Bi),q=oe,et=ri,gt=Bi)},setOp:function(oe,ri,Bi){(pt!==oe||Ft!==ri||Re!==Bi)&&(e.stencilOp(oe,ri,Bi),pt=oe,Ft=ri,Re=Bi)},setLocked:function(oe){L=oe},setClear:function(oe){nn!==oe&&(e.clearStencil(oe),nn=oe)},reset:function(){L=!1,dt=null,q=null,et=null,gt=null,pt=null,Ft=null,Re=null,nn=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},f=new WeakMap,d=[],g=null,v=!1,m=null,u=null,_=null,x=null,y=null,A=null,R=null,w=new Ht(0,0,0),D=0,E=!1,b=null,N=null,Y=null,k=null,z=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Q=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=Q>=2);let nt=null,lt={},Z=e.getParameter(e.SCISSOR_BOX),ct=e.getParameter(e.VIEWPORT),Lt=new Ce().fromArray(Z),W=new Ce().fromArray(ct);function st(L,dt,q,et){let gt=new Uint8Array(4),pt=e.createTexture();e.bindTexture(L,pt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ft=0;Ft<q;Ft++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(dt,0,e.RGBA,1,1,et,0,e.RGBA,e.UNSIGNED_BYTE,gt):e.texImage2D(dt+Ft,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,gt);return pt}let mt={};mt[e.TEXTURE_2D]=st(e.TEXTURE_2D,e.TEXTURE_2D,1),mt[e.TEXTURE_CUBE_MAP]=st(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[e.TEXTURE_2D_ARRAY]=st(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),mt[e.TEXTURE_3D]=st(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(e.DEPTH_TEST),r.setFunc(Ua),$t(!1),Kt(eg),at(e.CULL_FACE),U(hs);function at(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function Mt(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function It(L,dt){return p[L]!==dt?(e.bindFramebuffer(L,dt),p[L]=dt,L===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=dt),L===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=dt),!0):!1}function xt(L,dt){let q=d,et=!1;if(L){q=f.get(dt),q===void 0&&(q=[],f.set(dt,q));let gt=L.textures;if(q.length!==gt.length||q[0]!==e.COLOR_ATTACHMENT0){for(let pt=0,Ft=gt.length;pt<Ft;pt++)q[pt]=e.COLOR_ATTACHMENT0+pt;q.length=gt.length,et=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,et=!0);et&&e.drawBuffers(q)}function he(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let Qt={[Js]:e.FUNC_ADD,[db]:e.FUNC_SUBTRACT,[pb]:e.FUNC_REVERSE_SUBTRACT};Qt[mb]=e.MIN,Qt[gb]=e.MAX;let Xt={[_b]:e.ZERO,[xb]:e.ONE,[yb]:e.SRC_COLOR,[_h]:e.SRC_ALPHA,[Tb]:e.SRC_ALPHA_SATURATE,[Sb]:e.DST_COLOR,[bb]:e.DST_ALPHA,[vb]:e.ONE_MINUS_SRC_COLOR,[xh]:e.ONE_MINUS_SRC_ALPHA,[Eb]:e.ONE_MINUS_DST_COLOR,[Mb]:e.ONE_MINUS_DST_ALPHA,[Ab]:e.CONSTANT_COLOR,[wb]:e.ONE_MINUS_CONSTANT_COLOR,[Cb]:e.CONSTANT_ALPHA,[Rb]:e.ONE_MINUS_CONSTANT_ALPHA};function U(L,dt,q,et,gt,pt,Ft,Re,nn,oe){if(L===hs){v===!0&&(Mt(e.BLEND),v=!1);return}if(v===!1&&(at(e.BLEND),v=!0),L!==fb){if(L!==m||oe!==E){if((u!==Js||y!==Js)&&(e.blendEquation(e.FUNC_ADD),u=Js,y=Js),oe)switch(L){case Na:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ig:e.blendFunc(e.ONE,e.ONE);break;case sg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ag:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Na:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ig:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case sg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ag:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,x=null,A=null,R=null,w.set(0,0,0),D=0,m=L,E=oe}return}gt=gt||dt,pt=pt||q,Ft=Ft||et,(dt!==u||gt!==y)&&(e.blendEquationSeparate(Qt[dt],Qt[gt]),u=dt,y=gt),(q!==_||et!==x||pt!==A||Ft!==R)&&(e.blendFuncSeparate(Xt[q],Xt[et],Xt[pt],Xt[Ft]),_=q,x=et,A=pt,R=Ft),(Re.equals(w)===!1||nn!==D)&&(e.blendColor(Re.r,Re.g,Re.b,nn),w.copy(Re),D=nn),m=L,E=!1}function kn(L,dt){L.side===Oi?Mt(e.CULL_FACE):at(e.CULL_FACE);let q=L.side===vn;dt&&(q=!q),$t(q),L.blending===Na&&L.transparent===!1?U(hs):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let et=L.stencilWrite;o.setTest(et),et&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):Mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){b!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),b=L)}function Kt(L){L!==cb?(at(e.CULL_FACE),L!==N&&(L===eg?e.cullFace(e.BACK):L===ub?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Mt(e.CULL_FACE),N=L}function Tt(L){L!==Y&&(F&&e.lineWidth(L),Y=L)}function xe(L,dt,q){L?(at(e.POLYGON_OFFSET_FILL),(k!==dt||z!==q)&&(e.polygonOffset(dt,q),k=dt,z=q)):Mt(e.POLYGON_OFFSET_FILL)}function Et(L){L?at(e.SCISSOR_TEST):Mt(e.SCISSOR_TEST)}function T(L){L===void 0&&(L=e.TEXTURE0+J-1),nt!==L&&(e.activeTexture(L),nt=L)}function M(L,dt,q){q===void 0&&(nt===null?q=e.TEXTURE0+J-1:q=nt);let et=lt[q];et===void 0&&(et={type:void 0,texture:void 0},lt[q]=et),(et.type!==L||et.texture!==dt)&&(nt!==q&&(e.activeTexture(q),nt=q),e.bindTexture(L,dt||mt[L]),et.type=L,et.texture=dt)}function H(){let L=lt[nt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(L){Lt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Lt.copy(L))}function vt(L){W.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function jt(L,dt){let q=c.get(dt);q===void 0&&(q=new WeakMap,c.set(dt,q));let et=q.get(L);et===void 0&&(et=e.getUniformBlockIndex(dt,L.name),q.set(L,et))}function Vt(L,dt){let et=c.get(dt).get(L);l.get(dt)!==et&&(e.uniformBlockBinding(dt,et,L.__bindingPointIndex),l.set(dt,et))}function ge(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},nt=null,lt={},p={},f=new WeakMap,d=[],g=null,v=!1,m=null,u=null,_=null,x=null,y=null,A=null,R=null,w=new Ht(0,0,0),D=0,E=!1,b=null,N=null,Y=null,k=null,z=null,Lt.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:Mt,bindFramebuffer:It,drawBuffers:xt,useProgram:he,setBlending:U,setMaterial:kn,setFlipSided:$t,setCullFace:Kt,setLineWidth:Tt,setPolygonOffset:xe,setScissorTest:Et,activeTexture:T,bindTexture:M,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:it,texImage2D:yt,texImage3D:Nt,updateUBOMapping:jt,uniformBlockBinding:Vt,texStorage2D:Dt,texStorage3D:rt,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Ct,scissor:Ot,viewport:vt,reset:ge}}function JC(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,p,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):Fl("canvas")}function v(T,M,H){let $=1,it=Et(T);if((it.width>H||it.height>H)&&($=H/Math.max(it.width,it.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor($*it.width),St=Math.floor($*it.height);p===void 0&&(p=g(K,St));let ft=M?g(K,St):p;return ft.width=K,ft.height=St,ft.getContext("2d").drawImage(T,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+K+"x"+St+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(T,M,H,$,it=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=M;if(M===e.RED&&(H===e.FLOAT&&(K=e.R32F),H===e.HALF_FLOAT&&(K=e.R16F),H===e.UNSIGNED_BYTE&&(K=e.R8)),M===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.R8UI),H===e.UNSIGNED_SHORT&&(K=e.R16UI),H===e.UNSIGNED_INT&&(K=e.R32UI),H===e.BYTE&&(K=e.R8I),H===e.SHORT&&(K=e.R16I),H===e.INT&&(K=e.R32I)),M===e.RG&&(H===e.FLOAT&&(K=e.RG32F),H===e.HALF_FLOAT&&(K=e.RG16F),H===e.UNSIGNED_BYTE&&(K=e.RG8)),M===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.RG8UI),H===e.UNSIGNED_SHORT&&(K=e.RG16UI),H===e.UNSIGNED_INT&&(K=e.RG32UI),H===e.BYTE&&(K=e.RG8I),H===e.SHORT&&(K=e.RG16I),H===e.INT&&(K=e.RG32I)),M===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.RGB8UI),H===e.UNSIGNED_SHORT&&(K=e.RGB16UI),H===e.UNSIGNED_INT&&(K=e.RGB32UI),H===e.BYTE&&(K=e.RGB8I),H===e.SHORT&&(K=e.RGB16I),H===e.INT&&(K=e.RGB32I)),M===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),H===e.UNSIGNED_INT&&(K=e.RGBA32UI),H===e.BYTE&&(K=e.RGBA8I),H===e.SHORT&&(K=e.RGBA16I),H===e.INT&&(K=e.RGBA32I)),M===e.RGB&&H===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),M===e.RGBA){let St=it?zl:ee.getTransfer($);H===e.FLOAT&&(K=e.RGBA32F),H===e.HALF_FLOAT&&(K=e.RGBA16F),H===e.UNSIGNED_BYTE&&(K=St===ue?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(T,M){let H;return T?M===null||M===sa||M===uo?H=e.DEPTH24_STENCIL8:M===Pi?H=e.DEPTH32F_STENCIL8:M===lo&&(H=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sa||M===uo?H=e.DEPTH_COMPONENT24:M===Pi?H=e.DEPTH_COMPONENT32F:M===lo&&(H=e.DEPTH_COMPONENT16),H}function A(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ii&&T.minFilter!==pi?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){let M=T.target;M.removeEventListener("dispose",R),D(M),M.isVideoTexture&&h.delete(M)}function w(T){let M=T.target;M.removeEventListener("dispose",w),b(M)}function D(T){let M=i.get(T);if(M.__webglInit===void 0)return;let H=T.source,$=f.get(H);if($){let it=$[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(T),Object.keys($).length===0&&f.delete(H)}i.remove(T)}function E(T){let M=i.get(T);e.deleteTexture(M.__webglTexture);let H=T.source,$=f.get(H);delete $[M.__cacheKey],r.memory.textures--}function b(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let it=0;it<M.__webglFramebuffer[$].length;it++)e.deleteFramebuffer(M.__webglFramebuffer[$][it]);else e.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)e.deleteFramebuffer(M.__webglFramebuffer[$]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=T.textures;for(let $=0,it=H.length;$<it;$++){let K=i.get(H[$]);K.__webglTexture&&(e.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(H[$])}i.remove(T)}let N=0;function Y(){N=0}function k(){let T=N;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),N+=1,T}function z(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function J(T,M){let H=i.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,T,M);return}}n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+M)}function F(T,M){let H=i.get(T);if(T.version>0&&H.__version!==T.version){W(H,T,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+M)}function Q(T,M){let H=i.get(T);if(T.version>0&&H.__version!==T.version){W(H,T,M);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+M)}function X(T,M){let H=i.get(T);if(T.version>0&&H.__version!==T.version){st(H,T,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+M)}let nt={[yh]:e.REPEAT,[js]:e.CLAMP_TO_EDGE,[vh]:e.MIRRORED_REPEAT},lt={[ii]:e.NEAREST,[Fb]:e.NEAREST_MIPMAP_NEAREST,[lc]:e.NEAREST_MIPMAP_LINEAR,[pi]:e.LINEAR,[Jh]:e.LINEAR_MIPMAP_NEAREST,[ia]:e.LINEAR_MIPMAP_LINEAR},Z={[Gb]:e.NEVER,[Kb]:e.ALWAYS,[Xb]:e.LESS,[_g]:e.LEQUAL,[Wb]:e.EQUAL,[Zb]:e.GEQUAL,[qb]:e.GREATER,[Yb]:e.NOTEQUAL};function ct(T,M){if(M.type===Pi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===pi||M.magFilter===Jh||M.magFilter===lc||M.magFilter===ia||M.minFilter===pi||M.minFilter===Jh||M.minFilter===lc||M.minFilter===ia)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,nt[M.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,nt[M.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,nt[M.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,lt[M.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==lc&&M.minFilter!==ia||M.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Lt(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));let $=M.source,it=f.get($);it===void 0&&(it={},f.set($,it));let K=z(M);if(K!==T.__cacheKey){it[K]===void 0&&(it[K]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,H=!0),it[K].usedTimes++;let St=it[T.__cacheKey];St!==void 0&&(it[T.__cacheKey].usedTimes--,St.usedTimes===0&&E(M)),T.__cacheKey=K,T.__webglTexture=it[K].texture}return H}function W(T,M,H){let $=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=e.TEXTURE_3D);let it=Lt(T,M),K=M.source;n.bindTexture($,T.__webglTexture,e.TEXTURE0+H);let St=i.get(K);if(K.version!==St.__version||it===!0){n.activeTexture(e.TEXTURE0+H);let ft=ee.getPrimaries(ee.workingColorSpace),Ct=M.colorSpace===ds?null:ee.getPrimaries(M.colorSpace),Dt=M.colorSpace===ds||ft===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let rt=v(M.image,!1,s.maxTextureSize);rt=xe(M,rt);let yt=a.convert(M.format,M.colorSpace),Nt=a.convert(M.type),Ot=x(M.internalFormat,yt,Nt,M.colorSpace,M.isVideoTexture);ct($,M);let vt,jt=M.mipmaps,Vt=M.isVideoTexture!==!0,ge=St.__version===void 0||it===!0,L=K.dataReady,dt=A(M,rt);if(M.isDepthTexture)Ot=y(M.format===ho,M.type),ge&&(Vt?n.texStorage2D(e.TEXTURE_2D,1,Ot,rt.width,rt.height):n.texImage2D(e.TEXTURE_2D,0,Ot,rt.width,rt.height,0,yt,Nt,null));else if(M.isDataTexture)if(jt.length>0){Vt&&ge&&n.texStorage2D(e.TEXTURE_2D,dt,Ot,jt[0].width,jt[0].height);for(let q=0,et=jt.length;q<et;q++)vt=jt[q],Vt?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,Nt,vt.data):n.texImage2D(e.TEXTURE_2D,q,Ot,vt.width,vt.height,0,yt,Nt,vt.data);M.generateMipmaps=!1}else Vt?(ge&&n.texStorage2D(e.TEXTURE_2D,dt,Ot,rt.width,rt.height),L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt.width,rt.height,yt,Nt,rt.data)):n.texImage2D(e.TEXTURE_2D,0,Ot,rt.width,rt.height,0,yt,Nt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&ge&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,Ot,jt[0].width,jt[0].height,rt.depth);for(let q=0,et=jt.length;q<et;q++)if(vt=jt[q],M.format!==ai)if(yt!==null)if(Vt){if(L)if(M.layerUpdates.size>0){let gt=Tg(vt.width,vt.height,M.format,M.type);for(let pt of M.layerUpdates){let Ft=vt.data.subarray(pt*gt/vt.data.BYTES_PER_ELEMENT,(pt+1)*gt/vt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,pt,vt.width,vt.height,1,yt,Ft)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,rt.depth,yt,vt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,Ot,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,rt.depth,yt,Nt,vt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,q,Ot,vt.width,vt.height,rt.depth,0,yt,Nt,vt.data)}else{Vt&&ge&&n.texStorage2D(e.TEXTURE_2D,dt,Ot,jt[0].width,jt[0].height);for(let q=0,et=jt.length;q<et;q++)vt=jt[q],M.format!==ai?yt!==null?Vt?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,vt.data):n.compressedTexImage2D(e.TEXTURE_2D,q,Ot,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,Nt,vt.data):n.texImage2D(e.TEXTURE_2D,q,Ot,vt.width,vt.height,0,yt,Nt,vt.data)}else if(M.isDataArrayTexture)if(Vt){if(ge&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,Ot,rt.width,rt.height,rt.depth),L)if(M.layerUpdates.size>0){let q=Tg(rt.width,rt.height,M.format,M.type);for(let et of M.layerUpdates){let gt=rt.data.subarray(et*q/rt.data.BYTES_PER_ELEMENT,(et+1)*q/rt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,yt,Nt,gt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Nt,rt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ot,rt.width,rt.height,rt.depth,0,yt,Nt,rt.data);else if(M.isData3DTexture)Vt?(ge&&n.texStorage3D(e.TEXTURE_3D,dt,Ot,rt.width,rt.height,rt.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Nt,rt.data)):n.texImage3D(e.TEXTURE_3D,0,Ot,rt.width,rt.height,rt.depth,0,yt,Nt,rt.data);else if(M.isFramebufferTexture){if(ge)if(Vt)n.texStorage2D(e.TEXTURE_2D,dt,Ot,rt.width,rt.height);else{let q=rt.width,et=rt.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,Ot,q,et,0,yt,Nt,null),q>>=1,et>>=1}}else if(jt.length>0){if(Vt&&ge){let q=Et(jt[0]);n.texStorage2D(e.TEXTURE_2D,dt,Ot,q.width,q.height)}for(let q=0,et=jt.length;q<et;q++)vt=jt[q],Vt?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,yt,Nt,vt):n.texImage2D(e.TEXTURE_2D,q,Ot,yt,Nt,vt);M.generateMipmaps=!1}else if(Vt){if(ge){let q=Et(rt);n.texStorage2D(e.TEXTURE_2D,dt,Ot,q.width,q.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,yt,Nt,rt)}else n.texImage2D(e.TEXTURE_2D,0,Ot,yt,Nt,rt);m(M)&&u($),St.__version=K.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function st(T,M,H){if(M.image.length!==6)return;let $=Lt(T,M),it=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+H);let K=i.get(it);if(it.version!==K.__version||$===!0){n.activeTexture(e.TEXTURE0+H);let St=ee.getPrimaries(ee.workingColorSpace),ft=M.colorSpace===ds?null:ee.getPrimaries(M.colorSpace),Ct=M.colorSpace===ds||St===ft?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Dt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let et=0;et<6;et++)!Dt&&!rt?yt[et]=v(M.image[et],!0,s.maxCubemapSize):yt[et]=rt?M.image[et].image:M.image[et],yt[et]=xe(M,yt[et]);let Nt=yt[0],Ot=a.convert(M.format,M.colorSpace),vt=a.convert(M.type),jt=x(M.internalFormat,Ot,vt,M.colorSpace),Vt=M.isVideoTexture!==!0,ge=K.__version===void 0||$===!0,L=it.dataReady,dt=A(M,Nt);ct(e.TEXTURE_CUBE_MAP,M);let q;if(Dt){Vt&&ge&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,jt,Nt.width,Nt.height);for(let et=0;et<6;et++){q=yt[et].mipmaps;for(let gt=0;gt<q.length;gt++){let pt=q[gt];M.format!==ai?Ot!==null?Vt?L&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ot,pt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Ot,vt,pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,jt,pt.width,pt.height,0,Ot,vt,pt.data)}}}else{if(q=M.mipmaps,Vt&&ge){q.length>0&&dt++;let et=Et(yt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,jt,et.width,et.height)}for(let et=0;et<6;et++)if(rt){Vt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,yt[et].width,yt[et].height,Ot,vt,yt[et].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,yt[et].width,yt[et].height,0,Ot,vt,yt[et].data);for(let gt=0;gt<q.length;gt++){let Ft=q[gt].image[et].image;Vt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ft.width,Ft.height,Ot,vt,Ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,jt,Ft.width,Ft.height,0,Ot,vt,Ft.data)}}else{Vt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot,vt,yt[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,Ot,vt,yt[et]);for(let gt=0;gt<q.length;gt++){let pt=q[gt];Vt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ot,vt,pt.image[et]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,jt,Ot,vt,pt.image[et])}}}m(M)&&u(e.TEXTURE_CUBE_MAP),K.__version=it.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function mt(T,M,H,$,it,K){let St=a.convert(H.format,H.colorSpace),ft=a.convert(H.type),Ct=x(H.internalFormat,St,ft,H.colorSpace),Dt=i.get(M),rt=i.get(H);if(rt.__renderTarget=M,!Dt.__hasExternalTextures){let yt=Math.max(1,M.width>>K),Nt=Math.max(1,M.height>>K);it===e.TEXTURE_3D||it===e.TEXTURE_2D_ARRAY?n.texImage3D(it,K,Ct,yt,Nt,M.depth,0,St,ft,null):n.texImage2D(it,K,Ct,yt,Nt,0,St,ft,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Kt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,it,rt.__webglTexture,0,$t(M)):(it===e.TEXTURE_2D||it>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,it,rt.__webglTexture,K),n.bindFramebuffer(e.FRAMEBUFFER,null)}function at(T,M,H){if(e.bindRenderbuffer(e.RENDERBUFFER,T),M.depthBuffer){let $=M.depthTexture,it=$&&$.isDepthTexture?$.type:null,K=y(M.stencilBuffer,it),St=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=$t(M);Kt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ft,K,M.width,M.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,K,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,K,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,St,e.RENDERBUFFER,T)}else{let $=M.textures;for(let it=0;it<$.length;it++){let K=$[it],St=a.convert(K.format,K.colorSpace),ft=a.convert(K.type),Ct=x(K.internalFormat,St,ft,K.colorSpace),Dt=$t(M);H&&Kt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,Ct,M.width,M.height):Kt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Dt,Ct,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Ct,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Mt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);let it=$.__webglTexture,K=$t(M);if(M.depthTexture.format===$r)Kt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0);else if(M.depthTexture.format===ho)Kt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function It(T){let M=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",it)};$.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=$}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let $=T.texture.mipmaps;$&&$.length>0?Mt(M.__webglFramebuffer[0],T):Mt(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=e.createRenderbuffer(),at(M.__webglDepthbuffer[$],T,!1);else{let it=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,K)}}else{let $=T.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),at(M.__webglDepthbuffer,T,!1);else{let it=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,K)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xt(T,M,H){let $=i.get(T);M!==void 0&&mt($.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&It(T)}function he(T){let M=T.texture,H=i.get(T),$=i.get(M);T.addEventListener("dispose",w);let it=T.textures,K=T.isWebGLCubeRenderTarget===!0,St=it.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=M.version,r.memory.textures++),K){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)H.__webglFramebuffer[ft][Ct]=e.createFramebuffer()}else H.__webglFramebuffer[ft]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)H.__webglFramebuffer[ft]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(St)for(let ft=0,Ct=it.length;ft<Ct;ft++){let Dt=i.get(it[ft]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Kt(T)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){let Ct=it[ft];H.__webglColorRenderbuffer[ft]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);let Dt=a.convert(Ct.format,Ct.colorSpace),rt=a.convert(Ct.type),yt=x(Ct.internalFormat,Dt,rt,Ct.colorSpace,T.isXRRenderTarget===!0),Nt=$t(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Nt,yt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),at(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(K){n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),ct(e.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)mt(H.__webglFramebuffer[ft][Ct],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ct);else mt(H.__webglFramebuffer[ft],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let ft=0,Ct=it.length;ft<Ct;ft++){let Dt=it[ft],rt=i.get(Dt);n.bindTexture(e.TEXTURE_2D,rt.__webglTexture),ct(e.TEXTURE_2D,Dt),mt(H.__webglFramebuffer,T,Dt,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,0),m(Dt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let ft=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,$.__webglTexture),ct(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)mt(H.__webglFramebuffer[Ct],T,M,e.COLOR_ATTACHMENT0,ft,Ct);else mt(H.__webglFramebuffer,T,M,e.COLOR_ATTACHMENT0,ft,0);m(M)&&u(ft),n.unbindTexture()}T.depthBuffer&&It(T)}function Qt(T){let M=T.textures;for(let H=0,$=M.length;H<$;H++){let it=M[H];if(m(it)){let K=_(T),St=i.get(it).__webglTexture;n.bindTexture(K,St),u(K),n.unbindTexture()}}}let Xt=[],U=[];function kn(T){if(T.samples>0){if(Kt(T)===!1){let M=T.textures,H=T.width,$=T.height,it=e.COLOR_BUFFER_BIT,K=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,St=i.get(T),ft=M.length>1;if(ft)for(let Dt=0;Dt<M.length;Dt++)n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let Ct=T.texture.mipmaps;Ct&&Ct.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Dt=0;Dt<M.length;Dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=e.STENCIL_BUFFER_BIT)),ft){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,St.__webglColorRenderbuffer[Dt]);let rt=i.get(M[Dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,rt,0)}e.blitFramebuffer(0,0,H,$,0,0,H,$,it,e.NEAREST),l===!0&&(Xt.length=0,U.length=0,Xt.push(e.COLOR_ATTACHMENT0+Dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Xt.push(K),U.push(K),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,U)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Xt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ft)for(let Dt=0;Dt<M.length;Dt++){n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,St.__webglColorRenderbuffer[Dt]);let rt=i.get(M[Dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,rt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function $t(T){return Math.min(s.maxSamples,T.samples)}function Kt(T){let M=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(T){let M=r.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function xe(T,M){let H=T.colorSpace,$=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==La&&H!==ds&&(ee.getTransfer(H)===ue?($!==ai||it!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Et(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=F,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=xt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Kt}function QC(e,t){function n(i,s=ds){let a,r=ee.getTransfer(s);if(i===_i)return e.UNSIGNED_BYTE;if(i===$h)return e.UNSIGNED_SHORT_4_4_4_4;if(i===tf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ug)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===lg)return e.BYTE;if(i===cg)return e.SHORT;if(i===lo)return e.UNSIGNED_SHORT;if(i===Qh)return e.INT;if(i===sa)return e.UNSIGNED_INT;if(i===Pi)return e.FLOAT;if(i===co)return e.HALF_FLOAT;if(i===hg)return e.ALPHA;if(i===fg)return e.RGB;if(i===ai)return e.RGBA;if(i===$r)return e.DEPTH_COMPONENT;if(i===ho)return e.DEPTH_STENCIL;if(i===dg)return e.RED;if(i===ef)return e.RED_INTEGER;if(i===pg)return e.RG;if(i===nf)return e.RG_INTEGER;if(i===sf)return e.RGBA_INTEGER;if(i===cc||i===uc||i===hc||i===fc)if(r===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===cc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===af||i===rf||i===of||i===lf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===af)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===of)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cf||i===uf||i===hf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===cf||i===uf)return r===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===hf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===xf||i===yf||i===vf||i===bf||i===Mf||i===Sf||i===Ef||i===Tf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ff)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===df)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_f)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ef)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tf)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===Af||i===wf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===dc)return r===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Af)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mg||i===Cf||i===Rf||i===Df)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Cf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Df)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===uo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var $C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){let s=new Hn,a=t.properties.get(s);a.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new gi({vertexShader:$C,fragmentShader:t3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yn(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fg=class extends Ci{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,d=null,g=null,v=new Bg,m=n.getContextAttributes(),u=null,_=null,x=[],y=[],A=new zt,R=null,w=new cn;w.viewport=new Ce;let D=new cn;D.viewport=new Ce;let E=[w,D],b=new Hh,N=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let st=x[W];return st===void 0&&(st=new io,x[W]=st),st.getTargetRaySpace()},this.getControllerGrip=function(W){let st=x[W];return st===void 0&&(st=new io,x[W]=st),st.getGripSpace()},this.getHand=function(W){let st=x[W];return st===void 0&&(st=new io,x[W]=st),st.getHandSpace()};function k(W){let st=y.indexOf(W.inputSource);if(st===-1)return;let mt=x[st];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||r),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let W=0;W<x.length;W++){let st=y[W];st!==null&&(y[W]=null,x[W].disconnect(st))}N=null,Y=null,v.reset(),t.setRenderTarget(u),d=null,f=null,p=null,s=null,_=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,at=null,Mt=null;m.depth&&(Mt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,mt=m.stencil?ho:$r,at=m.stencil?uo:sa);let It={colorFormat:n.RGBA8,depthFormat:Mt,scaleFactor:a};p=new XRWebGLBinding(s,n),f=p.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ri(f.textureWidth,f.textureHeight,{format:ai,type:_i,depthTexture:new Ql(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ri(d.framebufferWidth,d.framebufferHeight,{format:ai,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(W){for(let st=0;st<W.removed.length;st++){let mt=W.removed[st],at=y.indexOf(mt);at>=0&&(y[at]=null,x[at].disconnect(mt))}for(let st=0;st<W.added.length;st++){let mt=W.added[st],at=y.indexOf(mt);if(at===-1){for(let It=0;It<x.length;It++)if(It>=y.length){y.push(mt),at=It;break}else if(y[It]===null){y[It]=mt,at=It;break}if(at===-1)break}let Mt=x[at];Mt&&Mt.connect(mt)}}let F=new I,Q=new I;function X(W,st,mt){F.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(mt.matrixWorld);let at=F.distanceTo(Q),Mt=st.projectionMatrix.elements,It=mt.projectionMatrix.elements,xt=Mt[14]/(Mt[10]-1),he=Mt[14]/(Mt[10]+1),Qt=(Mt[9]+1)/Mt[5],Xt=(Mt[9]-1)/Mt[5],U=(Mt[8]-1)/Mt[0],kn=(It[8]+1)/It[0],$t=xt*U,Kt=xt*kn,Tt=at/(-U+kn),xe=Tt*-U;if(st.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xe),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Mt[10]===-1)W.projectionMatrix.copy(st.projectionMatrix),W.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Et=xt+Tt,T=he+Tt,M=$t-xe,H=Kt+(at-xe),$=Qt*he/T*Et,it=Xt*he/T*Et;W.projectionMatrix.makePerspective(M,H,$,it,Et,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function nt(W,st){st===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(st.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let st=W.near,mt=W.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),b.near=D.near=w.near=st,b.far=D.far=w.far=mt,(N!==b.near||Y!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,Y=b.far),w.layers.mask=W.layers.mask|2,D.layers.mask=W.layers.mask|4,b.layers.mask=w.layers.mask|D.layers.mask;let at=W.parent,Mt=b.cameras;nt(b,at);for(let It=0;It<Mt.length;It++)nt(Mt[It],at);Mt.length===2?X(b,w,D):b.projectionMatrix.copy(w.projectionMatrix),lt(W,b,at)};function lt(W,st,mt){mt===null?W.matrix.copy(st.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(st.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(st.projectionMatrix),W.projectionMatrixInverse.copy(st.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=to*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Z=null;function ct(W,st){if(h=st.getViewerPose(c||r),g=st,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let at=!1;mt.length!==b.cameras.length&&(b.cameras.length=0,at=!0);for(let xt=0;xt<mt.length;xt++){let he=mt[xt],Qt=null;if(d!==null)Qt=d.getViewport(he);else{let U=p.getViewSubImage(f,he);Qt=U.viewport,xt===0&&(t.setRenderTargetTextures(_,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(_))}let Xt=E[xt];Xt===void 0&&(Xt=new cn,Xt.layers.enable(xt),Xt.viewport=new Ce,E[xt]=Xt),Xt.matrix.fromArray(he.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(he.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),xt===0&&(b.matrix.copy(Xt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),at===!0&&b.cameras.push(Xt)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){let xt=p.getDepthInformation(mt[0]);xt&&xt.isValid&&xt.texture&&v.init(t,xt,s.renderState)}}for(let mt=0;mt<x.length;mt++){let at=y[mt],Mt=x[mt];at!==null&&Mt!==void 0&&Mt.update(at,st,c||r)}Z&&Z(W,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}let Lt=new AM;Lt.setAnimationLoop(ct),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}},Va=new mi,e3=new Ae;function n3(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Mg(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),p(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,y)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),v(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===vn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===vn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=t.get(u),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,Va.copy(y),Va.x*=-1,Va.y*=-1,Va.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Va.y*=-1,Va.z*=-1),m.envMapRotation.value.setFromMatrix4(e3.makeRotationFromEuler(Va)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===vn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function i3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let y=x.program;i.uniformBlockBinding(_,y)}function c(_,x){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let A=x.program;i.updateUBOMapping(_,A);let R=t.render.frame;a[_.id]!==R&&(f(_),a[_.id]=R)}function h(_){let x=p();_.__bindingPointIndex=x;let y=e.createBuffer(),A=_.__size,R=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,y),y}function p(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=s[_.id],y=_.uniforms,A=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let R=0,w=y.length;R<w;R++){let D=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,b=D.length;E<b;E++){let N=D[E];if(d(N,R,E,A)===!0){let Y=N.__offset,k=Array.isArray(N.value)?N.value:[N.value],z=0;for(let J=0;J<k.length;J++){let F=k[J],Q=v(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,e.bufferSubData(e.UNIFORM_BUFFER,Y+z,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,Y,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(_,x,y,A){let R=_.value,w=x+"_"+y;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let D=A[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return A[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(_){let x=_.uniforms,y=0,A=16;for(let w=0,D=x.length;w<D;w++){let E=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,N=E.length;b<N;b++){let Y=E[b],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let z=0,J=k.length;z<J;z++){let F=k[z],Q=v(F),X=y%A,nt=X%Q.boundary,lt=X+nt;y+=nt,lt!==0&&A-lt<Q.storage&&(y+=A-lt),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=Q.storage}}}let R=y%A;return R>0&&(y+=A-R),_.__size=y,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function u(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var Pf=class{constructor(t={}){let{canvas:n=jb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;let g=new Uint32Array(4),v=new Int32Array(4),m=null,u=null,_=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=xn;let R=0,w=0,D=null,E=-1,b=null,N=new Ce,Y=new Ce,k=null,z=new Ht(0),J=0,F=n.width,Q=n.height,X=1,nt=null,lt=null,Z=new Ce(0,0,F,Q),ct=new Ce(0,0,F,Q),Lt=!1,W=new so,st=!1,mt=!1,at=new Ae,Mt=new Ae,It=new I,xt=new Ce,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Xt(){return D===null?X:1}let U=i;function kn(S,O){return n.getContext(S,O)}try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vh}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",gt,!1),n.addEventListener("webglcontextcreationerror",pt,!1),U===null){let O="webgl2";if(U=kn(O,S),U===null)throw kn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $t,Kt,Tt,xe,Et,T,M,H,$,it,K,St,ft,Ct,Dt,rt,yt,Nt,Ot,vt,jt,Vt,ge,L;function dt(){$t=new b2(U),$t.init(),Vt=new QC(U,$t),Kt=new p2(U,$t,t,Vt),Tt=new jC(U,$t),Kt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),xe=new E2(U),Et=new zC,T=new JC(U,$t,Tt,Et,Kt,Vt,xe),M=new g2(y),H=new v2(y),$=new DT(U),ge=new f2(U,$),it=new M2(U,$,xe,ge),K=new A2(U,it,$,xe),Ot=new T2(U,Kt,T),rt=new m2(Et),St=new IC(y,M,H,$t,Kt,ge,rt),ft=new n3(y,Et),Ct=new FC,Dt=new WC($t),Nt=new h2(y,M,H,Tt,K,d,l),yt=new ZC(y,K,Kt),L=new i3(U,xe,Kt,Tt),vt=new d2(U,$t,xe),jt=new S2(U,$t,xe),xe.programs=St.programs,y.capabilities=Kt,y.extensions=$t,y.properties=Et,y.renderLists=Ct,y.shadowMap=yt,y.state=Tt,y.info=xe}dt();let q=new Fg(y,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=$t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=$t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(F,Q,!1))},this.getSize=function(S){return S.set(F,Q)},this.setSize=function(S,O,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,Q=O,n.width=Math.floor(S*X),n.height=Math.floor(O*X),V===!0&&(n.style.width=S+"px",n.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(F*X,Q*X).floor()},this.setDrawingBufferSize=function(S,O,V){F=S,Q=O,X=V,n.width=Math.floor(S*V),n.height=Math.floor(O*V),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,O,V,G){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,O,V,G),Tt.viewport(N.copy(Z).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,O,V,G){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,O,V,G),Tt.scissor(Y.copy(ct).multiplyScalar(X).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(S){Tt.setScissorTest(Lt=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,V=!0){let G=0;if(S){let P=!1;if(D!==null){let ot=D.texture.format;P=ot===sf||ot===nf||ot===ef}if(P){let ot=D.texture.type,ht=ot===_i||ot===sa||ot===lo||ot===uo||ot===$h||ot===tf,_t=Nt.getClearColor(),bt=Nt.getClearAlpha(),Pt=_t.r,Ut=_t.g,At=_t.b;ht?(g[0]=Pt,g[1]=Ut,g[2]=At,g[3]=bt,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Pt,v[1]=Ut,v[2]=At,v[3]=bt,U.clearBufferiv(U.COLOR,0,v))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT),V&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",gt,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),Nt.dispose(),Ct.dispose(),Dt.dispose(),Et.dispose(),M.dispose(),H.dispose(),K.dispose(),ge.dispose(),L.dispose(),St.dispose(),q.dispose(),q.removeEventListener("sessionstart",Zg),q.removeEventListener("sessionend",Kg),aa.stop()};function et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=xe.autoReset,O=yt.enabled,V=yt.autoUpdate,G=yt.needsUpdate,P=yt.type;dt(),xe.autoReset=S,yt.enabled=O,yt.autoUpdate=V,yt.needsUpdate=G,yt.type=P}function pt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ft(S){let O=S.target;O.removeEventListener("dispose",Ft),Re(O)}function Re(S){nn(S),Et.remove(S)}function nn(S){let O=Et.get(S).programs;O!==void 0&&(O.forEach(function(V){St.releaseProgram(V)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,V,G,P,ot){O===null&&(O=he);let ht=P.isMesh&&P.matrixWorld.determinant()<0,_t=IM(S,O,V,G,P);Tt.setMaterial(G,ht);let bt=V.index,Pt=1;if(G.wireframe===!0){if(bt=it.getWireframeAttribute(V),bt===void 0)return;Pt=2}let Ut=V.drawRange,At=V.attributes.position,te=Ut.start*Pt,ae=(Ut.start+Ut.count)*Pt;ot!==null&&(te=Math.max(te,ot.start*Pt),ae=Math.min(ae,(ot.start+ot.count)*Pt)),bt!==null?(te=Math.max(te,0),ae=Math.min(ae,bt.count)):At!=null&&(te=Math.max(te,0),ae=Math.min(ae,At.count));let Pe=ae-te;if(Pe<0||Pe===1/0)return;ge.setup(P,G,_t,V,bt);let De,ne=vt;if(bt!==null&&(De=$.get(bt),ne=jt,ne.setIndex(De)),P.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Xt()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(P.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*Xt()),P.isLineSegments?ne.setMode(U.LINES):P.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else P.isPoints?ne.setMode(U.POINTS):P.isSprite&&ne.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)pc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ne.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let wt=P._multiDrawStarts,Qe=P._multiDrawCounts,re=P._multiDrawCount,oi=bt?$.get(bt).bytesPerElement:1,Xa=Et.get(G).currentProgram.getUniforms();for(let Cn=0;Cn<re;Cn++)Xa.setValue(U,"_gl_DrawID",Cn),ne.render(wt[Cn]/oi,Qe[Cn])}else if(P.isInstancedMesh)ne.renderInstances(te,Pe,P.count);else if(V.isInstancedBufferGeometry){let wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Qe=Math.min(V.instanceCount,wt);ne.renderInstances(te,Pe,Qe)}else ne.render(te,Pe)};function oe(S,O,V){S.transparent===!0&&S.side===Oi&&S.forceSinglePass===!1?(S.side=vn,S.needsUpdate=!0,yc(S,O,V),S.side=cs,S.needsUpdate=!0,yc(S,O,V),S.side=Oi):yc(S,O,V)}this.compile=function(S,O,V=null){V===null&&(V=S),u=Dt.get(V),u.init(O),x.push(u),V.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),S!==V&&S.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();let G=new Set;return S.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let ot=P.material;if(ot)if(Array.isArray(ot))for(let ht=0;ht<ot.length;ht++){let _t=ot[ht];oe(_t,V,P),G.add(_t)}else oe(ot,V,P),G.add(ot)}),u=x.pop(),G},this.compileAsync=function(S,O,V=null){let G=this.compile(S,O,V);return new Promise(P=>{function ot(){if(G.forEach(function(ht){Et.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){P(S);return}setTimeout(ot,10)}$t.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ri=null;function Bi(S){ri&&ri(S)}function Zg(){aa.stop()}function Kg(){aa.start()}let aa=new AM;aa.setAnimationLoop(Bi),typeof self<"u"&&aa.setContext(self),this.setAnimationLoop=function(S){ri=S,q.setAnimationLoop(S),S===null?aa.stop():aa.start()},q.addEventListener("sessionstart",Zg),q.addEventListener("sessionend",Kg),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,O,D),u=Dt.get(S,x.length),u.init(O),x.push(u),Mt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Mt),mt=this.localClippingEnabled,st=rt.init(this.clippingPlanes,mt),m=Ct.get(S,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){let ot=y.xr.getDepthSensingMesh();ot!==null&&kf(ot,O,-1/0,y.sortObjects)}kf(S,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(nt,lt),Qt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Qt&&Nt.addToRenderList(m,S),this.info.render.frame++,st===!0&&rt.beginShadows();let V=u.state.shadowsArray;yt.render(V,S,O),st===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,P=m.transmissive;if(u.setupLights(),O.isArrayCamera){let ot=O.cameras;if(P.length>0)for(let ht=0,_t=ot.length;ht<_t;ht++){let bt=ot[ht];Jg(G,P,S,bt)}Qt&&Nt.render(S);for(let ht=0,_t=ot.length;ht<_t;ht++){let bt=ot[ht];jg(m,S,bt,bt.viewport)}}else P.length>0&&Jg(G,P,S,O),Qt&&Nt.render(S),jg(m,S,O);D!==null&&w===0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(y,S,O),ge.resetDefaultState(),E=-1,b=null,x.pop(),x.length>0?(u=x[x.length-1],st===!0&&rt.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function kf(S,O,V,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){G&&xt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Mt);let ht=K.update(S),_t=S.material;_t.visible&&m.push(S,ht,_t,V,xt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){let ht=K.update(S),_t=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),xt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),xt.copy(ht.boundingSphere.center)),xt.applyMatrix4(S.matrixWorld).applyMatrix4(Mt)),Array.isArray(_t)){let bt=ht.groups;for(let Pt=0,Ut=bt.length;Pt<Ut;Pt++){let At=bt[Pt],te=_t[At.materialIndex];te&&te.visible&&m.push(S,ht,te,V,xt.z,At)}}else _t.visible&&m.push(S,ht,_t,V,xt.z,null)}}let ot=S.children;for(let ht=0,_t=ot.length;ht<_t;ht++)kf(ot[ht],O,V,G)}function jg(S,O,V,G){let P=S.opaque,ot=S.transmissive,ht=S.transparent;u.setupLightsView(V),st===!0&&rt.setGlobalState(y.clippingPlanes,V),G&&Tt.viewport(N.copy(G)),P.length>0&&xc(P,O,V),ot.length>0&&xc(ot,O,V),ht.length>0&&xc(ht,O,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Jg(S,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Ri(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?co:_i,minFilter:ia,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let ot=u.state.transmissionRenderTarget[G.id],ht=G.viewport||N;ot.setSize(ht.z*y.transmissionResolutionScale,ht.w*y.transmissionResolutionScale);let _t=y.getRenderTarget();y.setRenderTarget(ot),y.getClearColor(z),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Qt&&Nt.render(V);let bt=y.toneMapping;y.toneMapping=fs;let Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),st===!0&&rt.setGlobalState(y.clippingPlanes,G),xc(S,V,G),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let At=0,te=O.length;At<te;At++){let ae=O[At],Pe=ae.object,De=ae.geometry,ne=ae.material,wt=ae.group;if(ne.side===Oi&&Pe.layers.test(G.layers)){let Qe=ne.side;ne.side=vn,ne.needsUpdate=!0,Qg(Pe,V,G,De,ne,wt),ne.side=Qe,ne.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}y.setRenderTarget(_t),y.setClearColor(z,J),Pt!==void 0&&(G.viewport=Pt),y.toneMapping=bt}function xc(S,O,V){let G=O.isScene===!0?O.overrideMaterial:null;for(let P=0,ot=S.length;P<ot;P++){let ht=S[P],_t=ht.object,bt=ht.geometry,Pt=ht.group,Ut=ht.material;Ut.allowOverride===!0&&G!==null&&(Ut=G),_t.layers.test(V.layers)&&Qg(_t,O,V,bt,Ut,Pt)}}function Qg(S,O,V,G,P,ot){S.onBeforeRender(y,O,V,G,P,ot),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),P.onBeforeRender(y,O,V,G,S,ot),P.transparent===!0&&P.side===Oi&&P.forceSinglePass===!1?(P.side=vn,P.needsUpdate=!0,y.renderBufferDirect(V,O,G,P,S,ot),P.side=cs,P.needsUpdate=!0,y.renderBufferDirect(V,O,G,P,S,ot),P.side=Oi):y.renderBufferDirect(V,O,G,P,S,ot),S.onAfterRender(y,O,V,G,P,ot)}function yc(S,O,V){O.isScene!==!0&&(O=he);let G=Et.get(S),P=u.state.lights,ot=u.state.shadowsArray,ht=P.state.version,_t=St.getParameters(S,P.state,ot,O,V),bt=St.getProgramCacheKey(_t),Pt=G.programs;G.environment=S.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(S.isMeshStandardMaterial?H:M).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",Ft),Pt=new Map,G.programs=Pt);let Ut=Pt.get(bt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===ht)return t0(S,_t),Ut}else _t.uniforms=St.getUniforms(S),S.onBeforeCompile(_t,y),Ut=St.acquireProgram(_t,bt),Pt.set(bt,Ut),G.uniforms=_t.uniforms;let At=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=rt.uniform),t0(S,_t),G.needsLights=BM(S),G.lightsStateVersion=ht,G.needsLights&&(At.ambientLightColor.value=P.state.ambient,At.lightProbe.value=P.state.probe,At.directionalLights.value=P.state.directional,At.directionalLightShadows.value=P.state.directionalShadow,At.spotLights.value=P.state.spot,At.spotLightShadows.value=P.state.spotShadow,At.rectAreaLights.value=P.state.rectArea,At.ltc_1.value=P.state.rectAreaLTC1,At.ltc_2.value=P.state.rectAreaLTC2,At.pointLights.value=P.state.point,At.pointLightShadows.value=P.state.pointShadow,At.hemisphereLights.value=P.state.hemi,At.directionalShadowMap.value=P.state.directionalShadowMap,At.directionalShadowMatrix.value=P.state.directionalShadowMatrix,At.spotShadowMap.value=P.state.spotShadowMap,At.spotLightMatrix.value=P.state.spotLightMatrix,At.spotLightMap.value=P.state.spotLightMap,At.pointShadowMap.value=P.state.pointShadowMap,At.pointShadowMatrix.value=P.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function $g(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=go.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function t0(S,O){let V=Et.get(S);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function IM(S,O,V,G,P){O.isScene!==!0&&(O=he),T.resetTextureUnits();let ot=O.fog,ht=G.isMeshStandardMaterial?O.environment:null,_t=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:La,bt=(G.isMeshStandardMaterial?H:M).get(G.envMap||ht),Pt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),At=!!V.morphAttributes.position,te=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color,Pe=fs;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Pe=y.toneMapping);let De=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=De!==void 0?De.length:0,wt=Et.get(G),Qe=u.state.lights;if(st===!0&&(mt===!0||S!==b)){let dn=S===b&&G.id===E;rt.setState(G,S,dn)}let re=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Qe.state.version||wt.outputColorSpace!==_t||P.isBatchedMesh&&wt.batching===!1||!P.isBatchedMesh&&wt.batching===!0||P.isBatchedMesh&&wt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&wt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&wt.instancing===!1||!P.isInstancedMesh&&wt.instancing===!0||P.isSkinnedMesh&&wt.skinning===!1||!P.isSkinnedMesh&&wt.skinning===!0||P.isInstancedMesh&&wt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&wt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&wt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&wt.instancingMorph===!1&&P.morphTexture!==null||wt.envMap!==bt||G.fog===!0&&wt.fog!==ot||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==rt.numPlanes||wt.numIntersection!==rt.numIntersection)||wt.vertexAlphas!==Pt||wt.vertexTangents!==Ut||wt.morphTargets!==At||wt.morphNormals!==te||wt.morphColors!==ae||wt.toneMapping!==Pe||wt.morphTargetsCount!==ne)&&(re=!0):(re=!0,wt.__version=G.version);let oi=wt.currentProgram;re===!0&&(oi=yc(G,O,P));let Xa=!1,Cn=!1,Mo=!1,be=oi.getUniforms(),Gn=wt.uniforms;if(Tt.useProgram(oi.program)&&(Xa=!0,Cn=!0,Mo=!0),G.id!==E&&(E=G.id,Cn=!0),Xa||b!==S){Tt.buffers.depth.getReversed()?(at.copy(S.projectionMatrix),Qb(at),$b(at),be.setValue(U,"projectionMatrix",at)):be.setValue(U,"projectionMatrix",S.projectionMatrix),be.setValue(U,"viewMatrix",S.matrixWorldInverse);let bn=be.map.cameraPosition;bn!==void 0&&bn.setValue(U,It.setFromMatrixPosition(S.matrixWorld)),Kt.logarithmicDepthBuffer&&be.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Cn=!0,Mo=!0)}if(P.isSkinnedMesh){be.setOptional(U,P,"bindMatrix"),be.setOptional(U,P,"bindMatrixInverse");let dn=P.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),be.setValue(U,"boneTexture",dn.boneTexture,T))}P.isBatchedMesh&&(be.setOptional(U,P,"batchingTexture"),be.setValue(U,"batchingTexture",P._matricesTexture,T),be.setOptional(U,P,"batchingIdTexture"),be.setValue(U,"batchingIdTexture",P._indirectTexture,T),be.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&be.setValue(U,"batchingColorTexture",P._colorsTexture,T));let Xn=V.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Ot.update(P,V,oi),(Cn||wt.receiveShadow!==P.receiveShadow)&&(wt.receiveShadow=P.receiveShadow,be.setValue(U,"receiveShadow",P.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gn.envMap.value=bt,Gn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Gn.envMapIntensity.value=O.environmentIntensity),Cn&&(be.setValue(U,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&zM(Gn,Mo),ot&&G.fog===!0&&ft.refreshFogUniforms(Gn,ot),ft.refreshMaterialUniforms(Gn,G,X,Q,u.state.transmissionRenderTarget[S.id]),go.upload(U,$g(wt),Gn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(go.upload(U,$g(wt),Gn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(U,"center",P.center),be.setValue(U,"modelViewMatrix",P.modelViewMatrix),be.setValue(U,"normalMatrix",P.normalMatrix),be.setValue(U,"modelMatrix",P.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let dn=G.uniformsGroups;for(let bn=0,Gf=dn.length;bn<Gf;bn++){let ra=dn[bn];L.update(ra,oi),L.bind(ra,oi)}}return oi}function zM(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function BM(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,O,V){let G=Et.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Et.get(S.texture).__webglTexture=O,Et.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let V=Et.get(S);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let FM=U.createFramebuffer();this.setRenderTarget=function(S,O=0,V=0){D=S,R=O,w=V;let G=!0,P=null,ot=!1,ht=!1;if(S){let bt=Et.get(S);if(bt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(bt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(bt.__hasExternalTextures)T.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let At=S.depthTexture;if(bt.__boundDepthTexture!==At){if(At!==null&&Et.has(At)&&(S.width!==At.image.width||S.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Pt=S.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);let Ut=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?P=Ut[O][V]:P=Ut[O],ot=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?P=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?P=Ut[V]:P=Ut,N.copy(S.viewport),Y.copy(S.scissor),k=S.scissorTest}else N.copy(Z).multiplyScalar(X).floor(),Y.copy(ct).multiplyScalar(X).floor(),k=Lt;if(V!==0&&(P=FM),Tt.bindFramebuffer(U.FRAMEBUFFER,P)&&G&&Tt.drawBuffers(S,P),Tt.viewport(N),Tt.scissor(Y),Tt.setScissorTest(k),ot){let bt=Et.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,V)}else if(ht){let bt=Et.get(S.texture),Pt=O;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,V,Pt)}else if(S!==null&&V!==0){let bt=Et.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(S,O,V,G,P,ot,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){Tt.bindFramebuffer(U.FRAMEBUFFER,_t);try{let bt=S.texture,Pt=bt.format,Ut=bt.type;if(!Kt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-G&&V>=0&&V<=S.height-P&&U.readPixels(O,V,G,P,Vt.convert(Pt),Vt.convert(Ut),ot)}finally{let bt=D!==null?Et.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,O,V,G,P,ot,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t)if(O>=0&&O<=S.width-G&&V>=0&&V<=S.height-P){Tt.bindFramebuffer(U.FRAMEBUFFER,_t);let bt=S.texture,Pt=bt.format,Ut=bt.type;if(!Kt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,ot.byteLength,U.STREAM_READ),U.readPixels(O,V,G,P,Vt.convert(Pt),Vt.convert(Ut),0);let te=D!==null?Et.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,te);let ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jb(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ot),U.deleteBuffer(At),U.deleteSync(ae),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,V=0){let G=Math.pow(2,-V),P=Math.floor(S.image.width*G),ot=Math.floor(S.image.height*G),ht=O!==null?O.x:0,_t=O!==null?O.y:0;T.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ht,_t,P,ot),Tt.unbindTexture()};let HM=U.createFramebuffer(),VM=U.createFramebuffer();this.copyTextureToTexture=function(S,O,V=null,G=null,P=0,ot=null){ot===null&&(P!==0?(pc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=P,P=0):ot=0);let ht,_t,bt,Pt,Ut,At,te,ae,Pe,De=S.isCompressedTexture?S.mipmaps[ot]:S.image;if(V!==null)ht=V.max.x-V.min.x,_t=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Ut=V.min.y,At=V.isBox3?V.min.z:0;else{let Xn=Math.pow(2,-P);ht=Math.floor(De.width*Xn),_t=Math.floor(De.height*Xn),S.isDataArrayTexture?bt=De.depth:S.isData3DTexture?bt=Math.floor(De.depth*Xn):bt=1,Pt=0,Ut=0,At=0}G!==null?(te=G.x,ae=G.y,Pe=G.z):(te=0,ae=0,Pe=0);let ne=Vt.convert(O.format),wt=Vt.convert(O.type),Qe;O.isData3DTexture?(T.setTexture3D(O,0),Qe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Qe=U.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Qe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let re=U.getParameter(U.UNPACK_ROW_LENGTH),oi=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xa=U.getParameter(U.UNPACK_SKIP_PIXELS),Cn=U.getParameter(U.UNPACK_SKIP_ROWS),Mo=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,De.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Pt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,At);let be=S.isDataArrayTexture||S.isData3DTexture,Gn=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Xn=Et.get(S),dn=Et.get(O),bn=Et.get(Xn.__renderTarget),Gf=Et.get(dn.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,bn.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gf.__webglFramebuffer);for(let ra=0;ra<bt;ra++)be&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(S).__webglTexture,P,At+ra),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(O).__webglTexture,ot,Pe+ra)),U.blitFramebuffer(Pt,Ut,ht,_t,te,ae,ht,_t,U.DEPTH_BUFFER_BIT,U.NEAREST);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(P!==0||S.isRenderTargetTexture||Et.has(S)){let Xn=Et.get(S),dn=Et.get(O);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,HM),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,VM);for(let bn=0;bn<bt;bn++)be?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xn.__webglTexture,P,At+bn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xn.__webglTexture,P),Gn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dn.__webglTexture,ot,Pe+bn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dn.__webglTexture,ot),P!==0?U.blitFramebuffer(Pt,Ut,ht,_t,te,ae,ht,_t,U.COLOR_BUFFER_BIT,U.NEAREST):Gn?U.copyTexSubImage3D(Qe,ot,te,ae,Pe+bn,Pt,Ut,ht,_t):U.copyTexSubImage2D(Qe,ot,te,ae,Pt,Ut,ht,_t);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Gn?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Qe,ot,te,ae,Pe,ht,_t,bt,ne,wt,De.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Qe,ot,te,ae,Pe,ht,_t,bt,ne,De.data):U.texSubImage3D(Qe,ot,te,ae,Pe,ht,_t,bt,ne,wt,De):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ot,te,ae,ht,_t,ne,wt,De.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ot,te,ae,De.width,De.height,ne,De.data):U.texSubImage2D(U.TEXTURE_2D,ot,te,ae,ht,_t,ne,wt,De);U.pixelStorei(U.UNPACK_ROW_LENGTH,re),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oi),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xa),U.pixelStorei(U.UNPACK_SKIP_ROWS,Cn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mo),ot===0&&O.generateMipmaps&&U.generateMipmap(Qe),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,O,V=null,G=null,P=0){return pc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,V,G,P)},this.initRenderTarget=function(S){Et.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){R=0,w=0,D=null,Tt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=ee._getUnpackColorSpace()}};var NM={type:"change"},kg={type:"start"},LM={type:"end"},zf=new Qs,UM=new ni,a3=Math.cos(70*vg.DEG2RAD),Xe=new I,wn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vg=1e-6,Bf=class extends rc{constructor(t,n=null){super(t,n),this.state=pe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ea.ROTATE,MIDDLE:ea.DOLLY,RIGHT:ea.PAN},this.touches={ONE:na.ROTATE,TWO:na.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new si,this._lastTargetPosition=new I,this._quat=new si().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oo,this._sphericalDelta=new oo,this._scale=1,this._panOffset=new I,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new I,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o3.bind(this),this._onPointerDown=r3.bind(this),this._onPointerUp=l3.bind(this),this._onContextMenu=m3.bind(this),this._onMouseWheel=h3.bind(this),this._onKeyDown=f3.bind(this),this._onTouchStart=d3.bind(this),this._onTouchMove=p3.bind(this),this._onMouseDown=c3.bind(this),this._onMouseMove=u3.bind(this),this._interceptControlDown=g3.bind(this),this._interceptControlUp=_3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(NM),this.update(),this.state=pe.NONE}update(t=null){let n=this.object.position;Xe.copy(n).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),s<-Math.PI?s+=wn:s>Math.PI&&(s-=wn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),n.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Xe.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(zf.origin.copy(this.object.position),zf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zf.direction))<a3?this.object.lookAt(this.target):(UM.setFromNormalAndCoplanarPoint(this.object.up,this.target),zf.intersectPlane(UM,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Vg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vg||this._lastTargetPosition.distanceToSquared(this.target)>Vg?(this.dispatchEvent(NM),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?wn/60*this.autoRotateSpeed*t:wn/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Xe.setFromMatrixColumn(n,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,n){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(n,1):(Xe.setFromMatrixColumn(n,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Xe.copy(s).sub(this.target);let a=Xe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new zt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function r3(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function o3(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function l3(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(LM),this.state=pe.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function c3(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ea.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=pe.DOLLY;break;case ea.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pe.ROTATE}break;case ea.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(kg)}function u3(e){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function h3(e){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(e.preventDefault(),this.dispatchEvent(kg),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(LM))}function f3(e){this.enabled!==!1&&this._handleKeyDown(e)}function d3(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case na.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=pe.TOUCH_ROTATE;break;case na.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case na.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=pe.TOUCH_DOLLY_PAN;break;case na.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(kg)}function p3(e){switch(this._trackPointer(e),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=pe.NONE}}function m3(e){this.enabled!==!1&&e.preventDefault()}function g3(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _3(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var j=vc(Ya(),1);var Ff={normal:"\u6B63\u5E38\uFF1A\u795E\u7ECF\u4F7F\u80FD + \u4EBA\u5DE5\u6B65\u5E8F",cut_synapses:"\u5207\u65AD\u5168\u90E8\u7A81\u89E6",cut_motor:"\u5207\u65AD\u8FD0\u52A8\u795E\u7ECF\u8BFB\u51FA",bypass:"\u4EBA\u5DE5\u65C1\u8DEF\uFF1A\u7A81\u89E6\u65AD\u5F00\uFF0C\u56FA\u5B9A\u4F7F\u80FD",no_reflex:"\u5173\u95ED\u4EBA\u5DE5\u6B65\u5E8F\u5C42",no_afferents:"\u4EC5\u5173\u95ED\u795E\u7ECF\u611F\u89C9\u8F93\u5165"},Gg=["#8bd9c1","#df8e87","#a78cce","#edbb72","#809cab","#80bddd"];function Hf({samples:e,series:t,title:n,min:i=0,max:s}){let a=e.slice(-250),r=340,o=82,l=a.flatMap(d=>t.map(g=>d[g.key]??0)),c=s??Math.max(1,...l),h=i,p=a[0]?.t||0,f=a.at(-1)?.t||p+1;return j.default.createElement("div",{className:"causal-signal"},j.default.createElement("b",null,n),j.default.createElement("svg",{viewBox:"0 0 360 108",role:"img","aria-label":n},j.default.createElement("path",{d:"M10 8 V90 H350",fill:"none",stroke:"#35505b"}),t.map(d=>j.default.createElement("polyline",{key:d.key,fill:"none",stroke:d.color,strokeWidth:"1.5",points:a.map(g=>`${10+(g.t-p)*r/Math.max(f-p,.1)},${90-Math.min(1,Math.max(0,((g[d.key]??0)-h)/Math.max(c-h,.001)))*o}`).join(" ")})),j.default.createElement("text",{x:"13",y:"104"},p.toFixed(1)," s"),j.default.createElement("text",{x:"290",y:"104"},f.toFixed(1)," s"),j.default.createElement("text",{x:"16",y:"20"},c.toFixed(2))),j.default.createElement("div",null,t.map(d=>j.default.createElement("span",{key:d.key,style:{color:d.color}},d.label))))}function x3({trace:e}){let t=e.cells||[],n=(e.samples||[]).slice(-120),i=n[0]?.t||0,s=n.at(-1)?.t||1;return j.default.createElement("div",{className:"causal-raster"},j.default.createElement("div",null,j.default.createElement("b",null,"\u6A21\u578B\u7EC6\u80DE\u8109\u51B2\u8BA1\u6570\u6805\u683C"),j.default.createElement("span",null,"\u84DD\uFF1A\u4E0B\u884C DN \xB7 \u7EFF\uFF1A\u8FD0\u52A8 MN \xB7 \u7EA6100 ms \u4E00\u7BB1 \xB7 \u62BD\u6837\u7EC6\u80DE\uFF0C\u975E\u89E3\u5256\u8111\u56FE")),j.default.createElement("svg",{viewBox:`0 0 1000 ${Math.max(90,t.length*5+28)}`,role:"img","aria-label":"\u6A21\u578B\u795E\u7ECF\u5143\u8109\u51B2\u8BA1\u6570\u6805\u683C"},j.default.createElement("text",{x:"0",y:"11"},"DN"),j.default.createElement("text",{x:"0",y:Math.max(30,t.filter(a=>a.group==="DN").length*5+14)},"MN"),n.flatMap((a,r)=>t.map((o,l)=>a.spike_counts?.[l]>0?j.default.createElement("rect",{key:`${r}-${l}`,x:35+(a.t-i)*945/Math.max(s-i,.1),y:l*5+8,width:"2.5",height:"3.5",opacity:Math.min(1,.35+a.spike_counts[l]/8),fill:o.group==="DN"?"#83cfe3":"#93e0b7"},j.default.createElement("title",null,`bodyId ${o.body_id} \xB7 ${o.type||o.group} \xB7 ${a.t}s \xB7 ${a.spike_counts[l]} spikes`)):null)),j.default.createElement("text",{x:"35",y:t.length*5+25},i.toFixed(1)," s"),j.default.createElement("text",{x:"920",y:t.length*5+25},s.toFixed(1)," s")),j.default.createElement("details",null,j.default.createElement("summary",null,"\u67E5\u770B\u62BD\u6837\u7EC6\u80DE\u7684\u771F\u5B9E bodyId"),j.default.createElement("p",null,t.map(a=>`${a.group}:${a.body_id}`).join(" \xB7 "))))}function y3({job:e}){let t=e.result;if(!t)return j.default.createElement("p",{className:"causal-empty"},e.status==="failed"?`\u5B9E\u9A8C\u5931\u8D25\uFF1A${e.error}`:e.status==="running"?`\u6B63\u5728\u72EC\u7ACB\u4EFF\u771F ${e.completed}/6\uFF1A${e.condition||"\u51C6\u5907\u4E2D"}`:"\u70B9\u51FB\u8FD0\u884C\u516D\u7EC4\u72EC\u7ACB\u5B9E\u9A8C\u3002\u6BCF\u7EC4\u91C7\u7528\u76F8\u540C\u521D\u59CB\u59FF\u6001\u3001\u79CD\u5B50\u548C\u524D\u8FDB\u610F\u56FE\uFF1B\u4E0D\u4F1A\u79FB\u52A8\u5F53\u524D\u573A\u666F\u3002");let n=t.trials,i=Math.max(.1,...n.map(s=>Math.abs(s.dx_m)));return j.default.createElement("div",{className:"causal-results"},j.default.createElement("p",{className:"causal-verdict"},t.passed?"\u5B9E\u9A8C\u5B8C\u6574\u6027\u68C0\u67E5\u901A\u8FC7\u3002":"\u5B58\u5728\u5931\u8D25\u9879\uFF0C\u8BF7\u68C0\u67E5\u539F\u59CB\u6570\u636E\u3002"," ",j.default.createElement("strong",null,"\u5F53\u524D\u7ED3\u679C\u4E0D\u80FD\u8BC1\u660E\u679C\u8747\u5927\u8111\u751F\u6210\u6B65\u6001\u3002")," \u4EBA\u5DE5\u65C1\u8DEF\u662F\u5426\u4ECD\u80FD\u884C\u8D70\uFF0C\u662F\u5173\u952E\u53CD\u4F8B\u3002"),j.default.createElement("div",{className:"causal-bars"},n.map((s,a)=>j.default.createElement("div",{key:s.id},j.default.createElement("span",null,Ff[s.id]),j.default.createElement("div",{className:"bar-track"},j.default.createElement("i",{style:{width:`${Math.abs(s.dx_m)*100/i}%`,background:Gg[a]}})),j.default.createElement("b",null,(Math.abs(s.dx_m)<5e-5?0:s.dx_m*1e3).toFixed(1)," mm")))),j.default.createElement("div",{className:"causal-report-charts"},j.default.createElement(Hf,{title:"\u76F8\u540C8\u79D2\u524D\u8FDB\u610F\u56FE\uFF1A\u5B9E\u9645\u4F4D\u79FB m",samples:n[0].trace.map((s,a)=>Object.assign({t:s.t},...n.map(r=>({[r.id]:r.trace[a]?.x||0})))),series:n.map((s,a)=>({key:s.id,color:Gg[a],label:Ff[s.id]}))}),j.default.createElement("table",{className:"causal-table"},j.default.createElement("thead",null,j.default.createElement("tr",null,j.default.createElement("th",null,"\u6761\u4EF6"),j.default.createElement("th",null,"MN\u4EFF\u771F\u8109\u51B2"),j.default.createElement("th",null,"\u63A8\u7B97/\u91C7\u7528\u4F7F\u80FD\u5747\u503C"),j.default.createElement("th",null,"\u843D\u8DB3\u603B\u6B21\u6570"))),j.default.createElement("tbody",null,n.map((s,a)=>j.default.createElement("tr",{key:s.id},j.default.createElement("td",{style:{color:Gg[a]}},Ff[s.id]),j.default.createElement("td",null,s.actual_mn_spikes.toLocaleString()),j.default.createElement("td",null,s.mean_measured_gate.toFixed(2)," / ",s.mean_applied_gate.toFixed(2)),j.default.createElement("td",null,s.steps.reduce((r,o)=>r+o,0))))))),j.default.createElement("p",{className:"causal-note"},"\u65B0\u6267\u884C\u7684 MuJoCo \u5B9E\u9A8C \xB7 \u79CD\u5B50 ",t.seed," \xB7 \u6BCF\u7EC4\u9884\u70ED ",t.warmup_sim_s,"s \u540E\u523A\u6FC08s \xB7 \u76F8\u540C\u5DF2\u4FDD\u5B58\u59FF\u6001 \xB7 \u5404\u7EC4\u6CBF\u7528\u540C\u4E00\u5957\u65E2\u6709LIF\u6743\u91CD\u53D8\u6362\uFF0C\u672A\u5728\u7EC4\u95F4\u8BAD\u7EC3\u3002\u7A81\u89E6\u65AD\u5F00\u540E\u7684\u201C\u505C\u6B62\u201D\u90E8\u5206\u7531\u4F7F\u80FD\u89C4\u5219\u51B3\u5B9A\uFF1B\u5173\u95ED\u4EBA\u5DE5\u6B65\u5E8F\u4E5F\u505C\u6B62\uFF0C\u4E0D\u80FD\u5355\u72EC\u5F52\u529F\u4E8E\u795E\u7ECF\u7F51\u7EDC\u3002"),j.default.createElement("details",null,j.default.createElement("summary",null,"\u6743\u91CD\u6307\u7EB9\u4E0E\u9A8C\u8BC1\u6761\u4EF6"),j.default.createElement("p",null,"SHA256 ",t.graph_weight_sha256),j.default.createElement("p",null,Object.entries(t.checks).map(([s,a])=>`${s}: ${a}`).join(" \xB7 "))))}function Xg({state:e,connected:t,sendAudit:n}){let[i,s]=(0,j.useState)({samples:[],cells:[]}),[a,r]=(0,j.useState)({status:"idle"}),[o,l]=(0,j.useState)("report"),[c,h]=(0,j.useState)("");(0,j.useEffect)(()=>{let g=!1,v=!1,m=async()=>{if(!v){v=!0;try{let[_,x]=await Promise.all([fetch("/api/causal/trace"),fetch("/api/causal/audit")]);if(!_.ok||!x.ok)throw Error("\u5BA1\u8BA1\u6570\u636E\u6682\u4E0D\u53EF\u7528");let[y,A]=await Promise.all([_.json(),x.json()]);g||(s(y),r(A),h(""))}catch(_){g||h(_.message)}finally{v=!1}}};m();let u=setInterval(m,700);return()=>{g=!0,clearInterval(u)}},[]);let p=e?.causal,f=p?.dn_rates_hz||{},d=i.session===p?.session?i.samples:[];return j.default.createElement("section",{className:"panel causal-panel"},j.default.createElement("div",{className:"panel-title"},j.default.createElement("h2",null,"\u63A7\u5236\u6765\u6E90\u5BA1\u8BA1 \xB7 \u80FD\u8BC1\u660E\u4EC0\u4E48\uFF1F"),j.default.createElement("span",{className:"causal-limit"},"\u5C1A\u65E0\u5B8C\u6574\u8111\u63A7\u5236\u8BC1\u636E")),j.default.createElement("p",{className:"causal-lead"},"\u5F53\u524D\u6B65\u5E8F\u7531\u4EBA\u5DE5\u89C4\u5219\u751F\u6210\uFF1B\u8FDE\u63A5\u7EC4\u4EFF\u771F\u6D3B\u52A8\u53C2\u4E0E\u4F7F\u80FD\u548C\u65B9\u5411\u8BFB\u51FA\u3002\u4EC5\u770B\u653E\u7535\u6216\u65AD\u5F00\u540E\u505C\u6B62\uFF0C\u4E0D\u80FD\u8BC1\u660E\u5927\u8111\u751F\u6210\u8FD0\u52A8\u3002"),j.default.createElement("div",{className:"causal-path"},j.default.createElement("div",{className:"engineered"},j.default.createElement("small",null,"\u4EBA\u5DE5\u4EE3\u7406"),j.default.createElement("b",null,"\u7528\u6237\u79FB\u52A8\u610F\u56FE"),j.default.createElement("span",null,"\u4E2D\u592E\u8111\u672A\u6A21\u62DF")),j.default.createElement("i",null,"\u2192"),j.default.createElement("div",{className:"neural-node"},j.default.createElement("small",null,"\u8FDE\u63A5\u7EC4ID / LIF\u4EFF\u771F"),j.default.createElement("b",null,"\u4E0B\u884C DN \u6A21\u578B\u6D3B\u52A8"),j.default.createElement("span",null,"\u524D ",Number(f.forward||0).toFixed(1)," \xB7 \u540E ",Number(f.backward||0).toFixed(1)," Hz")),j.default.createElement("i",null,"\u2192"),j.default.createElement("div",{className:"neural-node"},j.default.createElement("small",null,"\u771F\u5B9E\u8FDE\u63A5\u5B50\u7F51"),j.default.createElement("b",null,"VNC \u4EFF\u771F\u4E0E MN"),j.default.createElement("span",null,"\u8FD0\u52A8\u6C60\u5747\u503C ",Number(p?.motor_mean_hz||0).toFixed(2)," Hz")),j.default.createElement("i",null,"\u2192"),j.default.createElement("div",{className:"engineered"},j.default.createElement("small",null,"\u4EBA\u5DE5\u538B\u7F29\u89C4\u5219"),j.default.createElement("b",null,"1\u4E2A\u6807\u91CF\u4F7F\u80FD"),j.default.createElement("span",null,"\u63A8\u7B97 ",Number(p?.measured_gate||0).toFixed(2)," / \u91C7\u7528 ",Number(p?.applied_gate||0).toFixed(2))),j.default.createElement("i",null,"\u2192"),j.default.createElement("div",{className:"engineered"},j.default.createElement("small",null,"\u4EBA\u5DE5\u5B9E\u73B0"),j.default.createElement("b",null,"\u89E6\u5730\u6B65\u5E8F\u4E0E\u4F3A\u670D"),j.default.createElement("span",null,e?.vnc?.status||"\u7B49\u5F85\u6570\u636E"))),j.default.createElement("p",{className:"causal-direct"},"\u65B9\u5411\u53E6\u4E00\u8DEF\uFF1A\u4E0B\u884CDN \u2192 \u4EBA\u5DE5\u4F4E\u901A\u4E0E\u9608\u503C \u2192 \u8FD0\u52A8\u65B9\u5411\uFF1B\u6B65\u5E8F\u4E0D\u7531220\u4E2A\u8FD0\u52A8\u795E\u7ECF\u5143\u9010\u5173\u8282\u751F\u6210\u3002"),j.default.createElement("div",{className:"causal-toolbar"},j.default.createElement("div",{className:"causal-tabs"},j.default.createElement("button",{className:o==="report"?"selected":"",onClick:()=>l("report")},"\u516D\u7EC4\u53CD\u4F8B\u5B9E\u9A8C"),j.default.createElement("button",{className:o==="live"?"selected":"",onClick:()=>l("live")},"\u5B9E\u65F6\u4FE1\u53F7\u4E0E\u73B0\u573A\u5E72\u9884")),j.default.createElement("button",{className:"run-audit",disabled:!t||a.status==="running",onClick:()=>{l("report"),n({command:"run_causal_audit"})}},a.status==="running"?`\u6B63\u5728\u8FD0\u884C ${a.completed}/6`:"\u91CD\u65B0\u8FD0\u884C\u516D\u7EC4\u72EC\u7ACB\u5B9E\u9A8C"),a.result&&j.default.createElement("a",{href:"/api/causal/report.json",download:!0},"\u4E0B\u8F7D\u539F\u59CB\u5B9E\u9A8C JSON")),c&&j.default.createElement("p",{className:"causal-note"},c),o==="report"?j.default.createElement(y3,{job:a}):j.default.createElement("div",null,j.default.createElement("label",{className:"intervention-label"},"\u73B0\u573A\u5BF9\u7167\uFF08\u5207\u6362\u4F1A\u505C\u6B62\u5E76\u590D\u4F4D\uFF09",j.default.createElement("select",{"aria-label":"\u73B0\u573A\u56E0\u679C\u5BF9\u7167",value:p?.intervention||"normal",disabled:!t||e?.mode!=="vnc",onChange:g=>n({command:"set_intervention",intervention:g.target.value})},Object.entries(Ff).map(([g,v])=>j.default.createElement("option",{key:g,value:g},v)))),p?.intervention==="bypass"&&j.default.createElement("p",{className:"causal-bypass"},"\u4EBA\u5DE5\u65C1\u8DEF\u6B63\u5728\u751F\u6548\uFF1A\u7A81\u89E6\u5DF2\u5207\u65AD\uFF0C\u79FB\u52A8\u65F6\u8FD0\u52A8\u4F7F\u80FD\u5F3A\u5236\u4E3A1\uFF0C\u65B9\u5411\u76F4\u63A5\u6765\u81EA\u7528\u6237\u3002\u8FD9\u662F\u4EBA\u5DE5\u63A7\u5236\u53CD\u4F8B\u3002"),j.default.createElement("div",{className:"causal-live-charts"},j.default.createElement(Hf,{samples:d,title:"\u8FD0\u52A8\u6C60\u6A21\u578B\u5E73\u5747\u653E\u7535 Hz",series:[{key:"mn_hz",label:"\u6A21\u578B MN",color:"#8bd9c1"}]}),j.default.createElement(Hf,{samples:d,title:"\u4F7F\u80FD\uFF1A\u653E\u7535\u63A8\u7B97 vs \u5DE5\u7A0B\u91C7\u7528",max:1,series:[{key:"measured_gate",label:"\u653E\u7535\u63A8\u7B97",color:"#8bd9c1"},{key:"applied_gate",label:"\u5DE5\u7A0B\u91C7\u7528",color:"#edbb72"}]}),j.default.createElement(Hf,{samples:d,title:"\u673A\u8EAB\u5B9E\u9645\u901F\u5EA6 m/s",min:-.08,max:.1,series:[{key:"body_vx",label:"MuJoCo X\u901F\u5EA6",color:"#8ac7e2"}]})),j.default.createElement(x3,{trace:{...i,samples:d}}),j.default.createElement("a",{className:"causal-raw",href:"/api/causal/trace",target:"_blank",rel:"noreferrer"},"\u67E5\u770B\u5B9E\u65F6\u539F\u59CB\u4FE1\u53F7 JSON")))}var B=vc(Ya(),1);var xo=["lf","lm","lr","rf","rm","rr"],zi=["\u5DE6\u524D","\u5DE6\u4E2D","\u5DE6\u540E","\u53F3\u524D","\u53F3\u4E2D","\u53F3\u540E"],gc=["hip","thigh","calf"],yo=["\u9ACB","\u5927\u817F","\u5C0F\u817F"],OM=["forward","backward","left","right"],v3=["\u524D\u8FDB","\u540E\u9000","\u5DE6\u8F6C","\u53F3\u8F6C"],bo=e=>Math.max(0,Math.min(1,e||0)),Vf=(e,t)=>e>0?.35+.65*bo(e/Math.max(1,t*1.5)):0,vo=(e,t,n,i)=>`M${e},${t} C${(e+n)/2},${t} ${(e+n)/2},${i} ${n},${i}`;function ps({d:e,level:t=0,kind:n="neural",enabled:i=!0,focused:s=!0,route:a,label:r}){let o=i?bo(t):0;return B.default.createElement("path",{d:e,className:`wiring-wire ${n} ${o>0?"firing":""} ${i?"":"cut"}`,"data-route":a,"data-enabled":String(i),"data-level":o.toFixed(3),style:{opacity:(s?1:.16)*(i?.13+o*.82:.4),strokeWidth:o>0?1.2+o*1.8:1}},r&&B.default.createElement("title",null,r))}function Wg({state:e,connected:t}){let[n,i]=(0,B.useState)(null),[s,a]=(0,B.useState)(""),[r,o]=(0,B.useState)("all"),[l,c]=(0,B.useState)(null),[h,p]=(0,B.useState)(null);(0,B.useEffect)(()=>{let Z=!0;return fetch("/api/neural/wiring").then(async ct=>{if(!ct.ok)throw Error("\u6620\u5C04\u6570\u636E\u6682\u4E0D\u53EF\u7528");return ct.json()}).then(ct=>{Z&&i(ct)}).catch(ct=>{Z&&a(ct.message)}),()=>{Z=!1}},[]);let f=h||e,d=f?.neural,g=f?.causal,v=f?.vnc,m=d?.wiring_window||{},u=t&&!!f&&f.mode==="vnc",_=u&&d?.synapses_enabled,x=u&&g?.intervention==="bypass",y=u&&d?.motor_output_enabled&&!x,A=u&&v?.output_enabled,R=u?bo(g?.applied_gate):0,w=m.dn_spikes||{},D=m.pool_spikes||{},E=d?.motor_rates_hz||{},b=f?.intent?.requested||[0,0],N=Math.max(...b.map(Math.abs)),Y=[Math.max(b[0],0),Math.max(-b[0],0),Math.max(b[1],0),Math.max(-b[1],0)],k=u?bo(Math.abs(g?.decoded_forward||0)+Math.abs(g?.decoded_turn||0)):0,z=f?.body_feedback,J=u&&d?.feedback_enabled,F=Z=>{o(Z),c(null)},Q=Z=>r==="all"||r===Z,X=l&&n?.pools?.[l],nt=n?Object.entries(n.pools).filter(([Z])=>l?Z===l:r==="all"?!1:Z.startsWith(`${r}_`)):[],lt=!!h;return B.default.createElement("section",{className:`panel wiring-panel ${lt?"is-frozen":""}`,"aria-label":"\u795E\u7ECF\u5230\u673A\u8EAB\u52A8\u6001\u63A5\u7EBF\u6620\u5C04","data-window-ms":m.end_ms||0,"data-window-mn-spikes":m.mapped_mn_spikes||0},B.default.createElement("div",{className:"wiring-header"},B.default.createElement("div",null,B.default.createElement("div",{className:"wiring-eyebrow"},"SIGNAL FLOW / \u5B9E\u65F6\u529F\u80FD\u6620\u5C04"),B.default.createElement("h2",null,"\u4ECE\u795E\u7ECF\u6D3B\u52A8\uFF0C\u5230\u673A\u8EAB\u52A8\u4F5C"),B.default.createElement("p",null,"\u9010\u5C42\u770B\u4FE1\u53F7\u5982\u4F55\u6C47\u805A\u3001\u7ECF\u8FC7\u5DE5\u7A0B\u63A7\u5236\uFF0C\u518D\u5230\u516D\u6761\u817F\u3002")),B.default.createElement("div",{className:"wiring-time"},B.default.createElement("span",{className:t?lt?"frozen":"online":"offline"},t?lt?"\u753B\u9762\u5DF2\u51BB\u7ED3":f?.mode!=="vnc"?"\u5BF9\u7167\u6A21\u5F0F \xB7 \u6B64\u8DEF\u5F84\u672A\u542F\u7528":"\u5B9E\u65F6\u4FE1\u53F7":"\u8FDE\u63A5\u5DF2\u65AD\u5F00"),B.default.createElement("b",null,((m.end_ms||0)/1e3).toFixed(1)," ",B.default.createElement("small",null,"s")),B.default.createElement("small",null,"\u6700\u8FD1 ",m.duration_ms||100," ms \u8109\u51B2\u7A97\u53E3"))),B.default.createElement("div",{className:"wiring-toolbar"},B.default.createElement("div",{className:"wiring-leg-filter",role:"group","aria-label":"\u8FFD\u8E2A\u817F\u90E8\u901A\u8DEF"},B.default.createElement("span",null,"\u8FFD\u8E2A\u901A\u8DEF"),B.default.createElement("button",{"aria-pressed":r==="all",onClick:()=>F("all")},"\u5168\u90E8"),xo.map((Z,ct)=>B.default.createElement("button",{key:Z,"aria-label":`\u8FFD\u8E2A${zi[ct]}\u817F`,"aria-pressed":r===Z,onClick:()=>F(Z)},zi[ct]))),B.default.createElement("button",{className:"wiring-freeze",disabled:!e,onClick:()=>p(lt?null:e)},lt?"\u8DDF\u968F\u5B9E\u65F6":"\u51BB\u7ED3\u753B\u9762")),n?B.default.createElement(B.default.Fragment,null,B.default.createElement("div",{className:"wiring-pan-hint"},"\u5DE6\u53F3\u6ED1\u52A8\u67E5\u770B\u5B8C\u6574\u63A5\u7EBF \xB7 \u70B9\u51FB\u8FD0\u52A8\u6C60\u6216\u817F\u90E8\u8FFD\u8E2A \xB7 \u51BB\u7ED3\u53EA\u6682\u505C\u56FE\u793A\uFF0C\u4EFF\u771F\u7EE7\u7EED"),B.default.createElement("div",{className:"wiring-scroll"},B.default.createElement("svg",{className:"wiring-graph",viewBox:"0 0 1470 670",role:"group","aria-label":"\u79FB\u52A8\u610F\u56FE\u3001\u4E0B\u884CDN\u3001VNC\u300136\u8FD0\u52A8\u6C60\u3001\u5355\u6807\u91CF\u4F7F\u80FD\u3001\u4EBA\u5DE5\u6B65\u5E8F\u4E0E\u516D\u817F18\u5173\u8282\u7684\u52A8\u6001\u6620\u5C04"},B.default.createElement("defs",null,B.default.createElement("filter",{id:"wiring-glow",x:"-80%",y:"-80%",width:"260%",height:"260%"},B.default.createElement("feGaussianBlur",{stdDeviation:"3"}))),B.default.createElement("g",{className:"wiring-columns"},B.default.createElement("text",{x:"80",y:"30"},"01 / \u79FB\u52A8\u610F\u56FE"),B.default.createElement("text",{x:"240",y:"30"},"02 / \u4E0B\u884C DN"),B.default.createElement("text",{x:"382",y:"30"},"03 / VNC \u5B50\u7F51"),B.default.createElement("text",{x:"590",y:"30"},"04 / 36 \u4E2A\u8FD0\u52A8\u6C60"),B.default.createElement("text",{x:"767",y:"30"},"05 / \u5DE5\u7A0B\u8BFB\u51FA"),B.default.createElement("text",{x:"927",y:"30"},"06 / \u4EBA\u5DE5\u6B65\u5E8F"),B.default.createElement("text",{x:"1260",y:"30"},"07 / \u516D\u8DB3\u673A\u8EAB")),B.default.createElement("rect",{className:"wiring-neural-region",x:"178",y:"104",width:"532",height:"456",rx:"13"}),B.default.createElement("text",{className:"wiring-region-title",x:"194",y:"125"},"MaleCNS \u8FDE\u63A5\u7EC4\u5B50\u56FE \xB7 \u7B80\u5316 LIF \u4EFF\u771F"),B.default.createElement("g",{className:"wiring-dn-lines"},OM.map((Z,ct)=>{let Lt=185+ct*100,W=u?Vf(w[Z]||0,n.dn[Z].count):0;return B.default.createElement(B.default.Fragment,{key:Z},B.default.createElement(ps,{d:vo(129,330,197,Lt),level:u?Y[ct]:0,kind:"engineered",route:`intent-${Z}`,label:"\u7528\u6237\u65B9\u5411\u7ECF\u8FC7\u4EBA\u5DE5\u523A\u6FC0\u7F16\u7801\uFF0C\u975E\u4E2D\u592E\u8111\u8F93\u51FA"}),B.default.createElement(ps,{d:vo(279,Lt,337,330),level:W,enabled:_,route:`dn-${Z}-vnc`,label:"\u8FDB\u5165VNC\u5B50\u7F51\u7684\u6C47\u603B\u8DEF\u5F84\uFF1B\u4E0D\u662F\u67D0\u4E00\u6761\u76F4\u63A5\u7A81\u89E6"}))})),B.default.createElement("g",{className:"wiring-pool-lines"},xo.flatMap((Z,ct)=>gc.flatMap((Lt,W)=>["positive","negative"].map((st,mt)=>{let at=`${Z}_${Lt}_${st}`,Mt=526+W*58+mt*22,It=192+ct*62,xt=u?Vf(D[at]||0,n.pools[at].count):0;return B.default.createElement(B.default.Fragment,{key:at},B.default.createElement(ps,{d:vo(427,330,Mt-8,It),level:xt,enabled:_,focused:Q(Z),label:"VNC\u9012\u5F52/\u591A\u7A81\u89E6\u7F51\u7EDC\u5230\u8FD0\u52A8\u6C60\u7684\u5206\u7EC4\u793A\u610F"}),B.default.createElement(ps,{d:vo(Mt+8,It,723,330),level:xt,enabled:y,focused:Q(Z),route:`pool-${at}-gate`,label:"\u6B64\u6C60\u53C2\u4E0E220\u4E2A\u552F\u4E00MN\u5747\u503C\uFF0C\u53EA\u6C47\u5165\u540C\u4E00\u4E2A\u4F7F\u80FD\u503C"}))})))),B.default.createElement(ps,{d:vo(811,330,876,330),level:R,enabled:A,kind:"engineered",route:"gate-to-engineering"}),B.default.createElement(ps,{d:"M279,169 L300,169 L300,72 L927,72 L927,276",level:k,enabled:u&&!x,kind:"direction",route:"dn-direction-readout"}),B.default.createElement("text",{className:"wiring-top-label",x:"570",y:"64"},"DN \u65B9\u5411\u6D3B\u52A8 \u2192 \u4EBA\u5DE5\u9608\u503C/\u4F4E\u901A \u2192 \u65B9\u5411\u8BFB\u51FA"),x&&B.default.createElement(B.default.Fragment,null,B.default.createElement(ps,{d:"M80,283 L80,91 L853,91 L853,250 L927,250 L927,276",level:N,kind:"engineered",route:"artificial-bypass"}),B.default.createElement("text",{className:"wiring-bypass-label",x:"575",y:"104"},"\u4EBA\u5DE5\u65C1\u8DEF\uFF1A\u7528\u6237\u76F4\u63A5\u7ED9\u65B9\u5411\uFF0C\u79FB\u52A8\u65F6\u4F7F\u80FD = 1")),B.default.createElement("g",{className:"wiring-proxy"},B.default.createElement("rect",{x:"29",y:"282",width:"100",height:"96",rx:"15"}),B.default.createElement("path",{d:"M57 311 C48 293 78 292 78 308 C91 287 111 308 97 318 C109 331 82 342 78 324 C63 342 47 324 57 311"}),B.default.createElement("text",{x:"79",y:"354"},"\u7528\u6237\u79FB\u52A8\u610F\u56FE"),B.default.createElement("text",{className:"wiring-small",x:"79",y:"399"},"\u4E2D\u592E\u8111\u672A\u6A21\u62DF"),B.default.createElement("text",{className:"wiring-small",x:"79",y:"416"},"\u4EBA\u5DE5\u4EE3\u7406\u8F93\u5165"),B.default.createElement("text",{className:"wiring-number",x:"79",y:"447"},b[0].toFixed(2)," / ",b[1].toFixed(2))),OM.map((Z,ct)=>{let Lt=185+ct*100,W=w[Z]||0,st=u?Vf(W,n.dn[Z].count):0,mt=g?.dn_rates_hz?.[Z]||0;return B.default.createElement("g",{key:Z,className:"wiring-dn-node","data-dn":Z,"data-spikes":W,"data-active":String(st>0)},B.default.createElement("rect",{x:"197",y:Lt-27,width:"82",height:"54",rx:"8",style:{stroke:st>0?"#83d6eb":"#345865",fill:`rgba(87,187,216,${.05+st*.25})`}}),B.default.createElement("circle",{cx:"206",cy:Lt-17,r:"3",fill:"#96edff",opacity:st}),B.default.createElement("text",{x:"238",y:Lt-4},v3[ct]),B.default.createElement("text",{className:"wiring-number",x:"238",y:Lt+14},mt.toFixed(1)," Hz"),B.default.createElement("title",null,`${n.dn[Z].count}\u4E2ADN \xB7 \u8BE5\u7A97\u53E3${W}\u8109\u51B2 \xB7 bodyId ${n.dn[Z].cells.map(at=>at.body_id).join(", ")}`))}),B.default.createElement("g",{className:"wiring-vnc-node"},B.default.createElement("rect",{x:"337",y:"249",width:"90",height:"162",rx:"12",style:{stroke:_?"#407c70":"#626b72"}}),B.default.createElement("path",{d:"M351 272 H413 M351 278 H399 M351 284 H407"}),B.default.createElement("text",{x:"382",y:"312"},"VNC \u7F51\u7EDC"),B.default.createElement("text",{className:"wiring-small",x:"382",y:"333"},n.neurons.toLocaleString()," \u7EC6\u80DE"),B.default.createElement("text",{className:"wiring-small",x:"382",y:"351"},"\u9012\u5F52 / \u591A\u7A81\u89E6"),B.default.createElement("text",{x:"382",y:"377",fill:_?"#a0d5c2":"#da9b8f"},_?"\u7A81\u89E6\u5DF2\u8FDE\u63A5":"\u7A81\u89E6\u672A\u8FDE\u63A5")),gc.map((Z,ct)=>B.default.createElement("text",{key:Z,className:"wiring-small",x:537+ct*58,y:"161"},yo[ct]," \xB1")),xo.map((Z,ct)=>B.default.createElement("g",{key:Z,opacity:Q(Z)?1:.28},B.default.createElement("text",{className:"wiring-leg-name",x:"485",y:196+ct*62},zi[ct]),gc.flatMap((Lt,W)=>["positive","negative"].map((st,mt)=>{let at=`${Z}_${Lt}_${st}`,Mt=D[at]||0,It=u?Vf(Mt,n.pools[at].count):0,xt=526+W*58+mt*22,he=192+ct*62;return B.default.createElement("g",{className:`wiring-pool-node ${l===at?"selected":""}`,key:at,role:"button",tabIndex:"0","aria-label":`${zi[ct]}${yo[W]}${st==="positive"?"\u6B63":"\u8D1F"}\u6295\u5F71\u8FD0\u52A8\u6C60`,"data-pool":at,"data-spikes":Mt,"data-active":String(It>0),onClick:()=>{o(Z),c(at)},onKeyDown:Qt=>{(Qt.key==="Enter"||Qt.key===" ")&&(Qt.preventDefault(),o(Z),c(at))}},B.default.createElement("circle",{className:"wiring-halo",cx:xt,cy:he,r:"13",filter:"url(#wiring-glow)",opacity:It*.6}),B.default.createElement("circle",{cx:xt,cy:he,r:"8",style:{fill:It>0?`rgba(141,233,182,${.18+It*.75})`:"#152c30",stroke:It>0?"#b0f2ca":"#466f63"}}),B.default.createElement("text",{x:xt,y:he+3},mt===0?"+":"\u2212"),B.default.createElement("title",null,`${zi[ct]}${yo[W]} ${st} \xB7 ${n.pools[at].count}\u7EC6\u80DE \xB7 ${Mt}\u8109\u51B2/${m.duration_ms||100}ms \xB7 ${(E[at]||0).toFixed(2)}Hz`))})))),B.default.createElement("g",{className:"wiring-gate-node","data-gate":R.toFixed(3)},B.default.createElement("rect",{x:"723",y:"281",width:"88",height:"98",rx:"10"}),B.default.createElement("text",{x:"767",y:"302"},"220 MN \u5747\u503C"),B.default.createElement("text",{className:"wiring-small",x:"767",y:"319"},"\u4EBA\u5DE5\u538B\u7F29 / \u9650\u5E45"),B.default.createElement("text",{className:"wiring-gate-value",x:"767",y:"347"},(R*100).toFixed(0),"%"),B.default.createElement("text",{className:"wiring-small",x:"767",y:"366"},"\u5B9E\u9645\u91C7\u7528\u4F7F\u80FD"),B.default.createElement("text",{className:"wiring-small",x:"767",y:"402"},m.mapped_mn_spikes||0," \u8109\u51B2 / \u7A97\u53E3"),B.default.createElement("text",{className:"wiring-small",x:"767",y:"420"},y?"36\u6C60 \u2192 \u4EC51\u4E2A\u6807\u91CF":"\u795E\u7ECF\u8BFB\u51FA\u672A\u4F7F\u7528")),B.default.createElement("g",{className:"wiring-engineering-node"},B.default.createElement("rect",{x:"876",y:"276",width:"102",height:"108",rx:"10",style:{stroke:R>0?"#e0b779":"#64583d"}}),B.default.createElement("text",{x:"927",y:"298"},"\u4EBA\u5DE5\u63A5\u89E6\u6B65\u5E8F"),B.default.createElement("text",{className:"wiring-small",x:"927",y:"320"},"\u62AC\u8DB3 / \u524D\u6446 / \u843D\u8DB3"),B.default.createElement("text",{className:"wiring-small",x:"927",y:"340"},"\u9006\u89E3 + \u5173\u8282\u4F3A\u670D"),B.default.createElement("text",{x:"927",y:"365"},v?.status||"\u7B49\u5F85\u72B6\u6001"),B.default.createElement("text",{className:"wiring-small",x:"927",y:"408"},"\u795E\u7ECF\u4F7F\u80FD \u2260 \u9010\u5173\u8282\u63A7\u5236"),B.default.createElement("text",{className:"wiring-small",x:"927",y:"426"},"v ",(v?.decoded_velocity_m_s||0).toFixed(3)," m/s")),B.default.createElement("g",{className:"wiring-robot"},B.default.createElement("rect",{x:"1228",y:"195",width:"64",height:"230",rx:"25"}),B.default.createElement("path",{d:"M1260 210 V175 M1253 183 L1260 175 L1267 183"}),B.default.createElement("text",{x:"1260",y:"163"},"\u524D\u65B9"),B.default.createElement("text",{x:"1260",y:"292"},"NBS V5"),B.default.createElement("text",{className:"wiring-small",x:"1260",y:"313"},"18 \u5173\u8282"),B.default.createElement("text",{className:"wiring-small",x:"1260",y:"334"},"\u5B9E\u9645\u65BD\u52A0"),B.default.createElement("text",{className:"wiring-small",x:"1260",y:"351"},"\u626D\u77E9 N\xB7m"),xo.map((Z,ct)=>{let Lt=ct<3?-1:1,W=ct%3,st=215+W*95,mt=(W-1)*.7,at=[0,1,2].map(xt=>[1260+Lt*(62+xt*36),st+mt*(24+xt*25)]),Mt=[1260+Lt*170,st+mt*99],It=Q(Z);return B.default.createElement("g",{key:Z,opacity:It?1:.23,className:"wiring-body-leg",role:"button",tabIndex:"0","aria-label":`\u67E5\u770B${zi[ct]}\u673A\u8EAB\u6620\u5C04`,onClick:()=>F(Z),onKeyDown:xt=>{xt.key==="Enter"&&(xt.preventDefault(),F(Z))}},B.default.createElement(ps,{d:vo(978,330,at[0][0],at[0][1]),enabled:A,level:R,kind:"engineered",focused:It,route:`engineering-${Z}`}),B.default.createElement("path",{className:"wiring-robot-limb",d:`M${1260+Lt*28},${st} ${at.map(xt=>`L${xt}`).join(" ")} L${Mt}`}),at.map(([xt,he],Qt)=>{let Xt=f?.joint_torques_nm?.[ct*3+Qt]||0,U=t?bo(Math.abs(Xt)/90):0;return B.default.createElement("g",{key:Qt,"data-joint":`${Z}_${gc[Qt]}`,"data-torque":Xt.toFixed(3)},B.default.createElement("circle",{cx:xt,cy:he,r:8,style:{fill:`rgba(238,188,116,${.08+U*.8})`,stroke:Math.abs(Xt)>405?"#f28b79":"#ba9b6a"}}),B.default.createElement("text",{className:"wiring-joint-label",x:xt,y:he+23},yo[Qt]),B.default.createElement("title",null,`${zi[ct]}${yo[Qt]}\u5B9E\u9645\u65BD\u52A0\u626D\u77E9 ${Xt.toFixed(2)} N\xB7m\uFF0C\u5DE5\u7A0B\u4F3A\u670D\u8F93\u51FA\uFF0C\u975E\u795E\u7ECF\u653E\u7535`))}),B.default.createElement("circle",{cx:Mt[0],cy:Mt[1],r:"5",style:{fill:z?.touch?.[ct]?"#a4dec6":"#1d292e",stroke:"#688e85"}}),B.default.createElement("text",{className:"wiring-body-label",x:Mt[0],y:Mt[1]+(W===0?-15:30)},zi[ct]))})),B.default.createElement(ps,{d:"M1260,428 V608 H382 V411",enabled:J,level:J?bo((d?.feedback_hz?.load||0)/140):0,kind:"feedback",route:"body-feedback",label:"\u8DB3\u7AEF\u53CD\u9988\u7ECF\u5DE5\u7A0B\u611F\u89C9\u7F16\u7801\u8F93\u5165\u611F\u89C9\u7EC6\u80DE\uFF1B\u4E0D\u662F\u76F4\u63A5\u6307\u5B9A\u795E\u7ECF\u6B65\u5E8F"}),B.default.createElement("text",{className:"wiring-feedback-label",x:"815",y:"601"},"\u89E6\u5730 / \u8F7D\u8377 / \u6ED1\u79FB / \u626D\u77E9 \u2192 \u4EBA\u5DE5\u611F\u89C9\u7F16\u7801 \u2192 ",n.sensory_neurons," \u4E2A\u611F\u89C9\u7EC6\u80DE"),B.default.createElement("text",{className:"wiring-bottom-note",x:"730",y:"652"},"\u529F\u80FD\u5206\u7EC4\u4E0E\u8F6F\u4EF6\u63A5\u7EBF\u793A\u610F\uFF1BVNC \u8FDE\u7EBF\u6C47\u603B\u591A\u7A81\u89E6\u8DEF\u5F84\uFF0C\u4E0D\u8868\u793A DN \u4E0E\u5404\u8FD0\u52A8\u6C60\u76F4\u63A5\u76F8\u8FDE\u3002"))),B.default.createElement("div",{className:"wiring-legend"},B.default.createElement("span",null,B.default.createElement("i",{className:"dn"}),"\u4E0B\u884C\u6D3B\u52A8"),B.default.createElement("span",null,B.default.createElement("i",{className:"mn"}),"\u8FD0\u52A8\u6C60\u8109\u51B2"),B.default.createElement("span",null,B.default.createElement("i",{className:"engineering"}),"\u5DE5\u7A0B\u63A7\u5236 / \u5173\u8282\u626D\u77E9"),B.default.createElement("span",null,B.default.createElement("i",{className:"feedback"}),"\u8EAB\u4F53\u53CD\u9988"),B.default.createElement("span",null,B.default.createElement("i",{className:"disconnected"}),"\u65AD\u5F00 / \u672A\u4F7F\u7528")),B.default.createElement("div",{className:"wiring-explainer"},B.default.createElement("p",null,B.default.createElement("b",null,x?"\u4EBA\u5DE5\u65C1\u8DEF\u6B63\u5728\u8FD0\u884C":u?_?y?A?"\u6309\u4F4F W / A / S / D\uFF0C\u89C2\u5BDF\u4FE1\u53F7\u53D8\u5316":"\u4EBA\u5DE5\u6B65\u5E8F\u5DF2\u5173\u95ED":"\u8FD0\u52A8\u795E\u7ECF\u8BFB\u51FA\u5DF2\u5207\u65AD":"VNC \u7A81\u89E6\u5DF2\u5207\u65AD":"\u6B64\u56FE\u7684 VNC \u63A7\u5236\u8DEF\u5F84\u672A\u542F\u7528"),B.default.createElement("span",null,x?"\u6A59\u8272\u65C1\u8DEF\u76F4\u63A5\u4F20\u5165\u7528\u6237\u610F\u56FE\uFF1BMN \u53EF\u4EE5\u4E0D\u653E\u7535\u800C\u673A\u8EAB\u4ECD\u8FD0\u52A8\u3002":"\u795E\u7ECF\u4EAE\u5EA6\u6765\u81EA\u6700\u8FD1100 ms\u5B9E\u9645\u4EFF\u771F\u8BA1\u6570\uFF1B\u6D41\u52A8\u865A\u7EBF\u4EC5\u8868\u793A\u7A97\u53E3\u6709\u6D3B\u52A8\uFF0C\u4E0D\u8868\u793A\u5355\u8109\u51B2\u4F20\u5BFC\u65F6\u523B\u3002\u5173\u8282\u4EAE\u5EA6\u6309 |\u626D\u77E9|/90 N\xB7m \u663E\u793A\uFF0C\u7AD9\u7ACB\u627F\u91CD\u4E5F\u4F1A\u4EAE\u3002")),B.default.createElement("p",{className:"wiring-limit"},"\u4E2D\u592E\u8111\u5C1A\u672A\u6A21\u62DF\uFF0C\u6B65\u5E8F\u4ECD\u7531\u4EBA\u5DE5\u89C4\u5219\u751F\u6210\u3002\u6B64\u56FE\u89E3\u91CA\u4FE1\u53F7\u8DEF\u5F84\uFF0C\u4E0D\u80FD\u5355\u72EC\u8BC1\u660E\u679C\u8747\u5927\u8111\u63A7\u5236\u3002")),B.default.createElement("div",{className:"wiring-inspector"},B.default.createElement("div",null,B.default.createElement("b",null,l?`${zi[xo.indexOf(r)]} \xB7 ${yo[gc.indexOf(l.split("_")[1])]} \xB7 ${l.endsWith("positive")?"\u6B63":"\u8D1F"}\u6295\u5F71\u6C60`:r==="all"?"\u70B9\u51FB\u7EFF\u8272\u8FD0\u52A8\u6C60\u6216\u9009\u62E9\u4E00\u6761\u817F\uFF0C\u67E5\u770B\u6620\u5C04\u7EC6\u80DE":`${zi[xo.indexOf(r)]}\u817F \xB7 6\u4E2A\u8FD0\u52A8\u6C60 \u2192 \u516C\u5171\u4F7F\u80FD \u2192 \u5DE5\u7A0B\u4F3A\u670D`),X&&B.default.createElement("span",null,X.count," \u4E2A\u7EC6\u80DE \xB7 \u5F53\u524D\u7A97\u53E3 ",D[l]||0," \u8109\u51B2 \xB7 ",(E[l]||0).toFixed(2)," Hz")),nt.length>0&&B.default.createElement("details",{key:l||r},B.default.createElement("summary",null,"\u67E5\u770B\u8FDE\u63A5\u7EC4 bodyId \u4E0E\u5206\u7EC4"),nt.map(([Z,ct])=>B.default.createElement("p",{key:Z},B.default.createElement("b",null,Z)," (",ct.count,")\uFF1A",ct.cells.map(Lt=>Lt.body_id).join(" \xB7 "))),B.default.createElement("small",null,"\xB1 \u8868\u793A\u65E2\u6709\u673A\u5668\u4EBA\u5173\u8282\u6295\u5F71\u7B26\u53F7\uFF0C\u4E0D\u7B49\u4E8E\u5DF2\u9A8C\u8BC1\u7684\u751F\u7269\u62EE\u6297\u808C\u4F5C\u7528\u3002")),B.default.createElement("a",{href:"/api/neural/wiring",target:"_blank",rel:"noreferrer"},"\u67E5\u770B\u539F\u59CB\u5206\u7EC4\u6620\u5C04 JSON \u2197"))):B.default.createElement("p",{className:"wiring-loading",role:"status"},s||"\u6B63\u5728\u8BFB\u53D6\u8FDE\u63A5\u7EC4\u5206\u7EC4\u4E0E\u8EAB\u4F53\u6620\u5C04\u2026"))}var qg={forward:"\u524D\u8FDB",backward:"\u540E\u9000",left:"\u5DE6\u8F6C",right:"\u53F3\u8F6C",stop:"\u5F85\u673A"},Yg={current:null};function b3({scene:e,onReady:t,view:n}){let i=(0,C.useRef)(null);return(0,C.useEffect)(()=>{if(!e)return;let s=i.current,a;try{a=new Pf({antialias:!0,alpha:!0})}catch(z){t("WebGL \u521B\u5EFA\u5931\u8D25\uFF1A"+z.message);return}a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(1055266,1),a.shadowMap.enabled=!0,a.outputColorSpace=xn,s.appendChild(a.domElement),a.domElement.setAttribute("aria-label","\u7528\u6237 NBS \u516D\u8DB3\u6A21\u578B\u5B9E\u65F6\u4E09\u7EF4\u89C6\u56FE");let r=new Zl;r.up.set(0,0,1),r.fog=new Yl(1055266,10,35);let o=new cn(42,1,.01,100);o.up.set(...n==="top"?[1,0,0]:[0,0,1]),o.position.set(2.3,-2.7,2.3);let l=new Bf(o,a.domElement);l.target.set(0,0,.2),l.enableDamping=!0,l.maxPolarAngle=n==="top"?Math.PI:Math.PI*.49,l.enableRotate=n!=="top",r.add(new ec(13036287,5464170,2.8));let c=new ic(16773083,4);c.position.set(3,-4,7),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-3,c.shadow.camera.right=3,c.shadow.camera.top=3,c.shadow.camera.bottom=-3,r.add(c);let h=new yn(new Pa(80,80),new ro({color:1319210,roughness:1}));h.position.z=-.005,h.receiveShadow=!0,r.add(h);let p=new sc(40,80,4350060,2307907);p.rotation.x=Math.PI/2,r.add(p);let f=new ac(.25);f.position.set(-.85,-.85,.01),r.add(f);let d={};for(let[z,J]of Object.entries(e.meshes)){let F=new hn;F.setAttribute("position",new je(J.vertices,3)),F.setIndex(J.faces),F.computeVertexNormals(),d[z]=F}let g={};for(let z of e.geoms){g[z.body]||(g[z.body]=new os,r.add(g[z.body]));let J=z.name.includes("motor")?2307648:z.name.includes("foot")?2505530:z.name.startsWith("l")?7518894:12965339,F=new yn(d[z.mesh],new ro({color:J,metalness:.45,roughness:.43}));F.position.fromArray(z.position);let[Q,X,nt,lt]=z.quaternion;F.quaternion.set(X,nt,lt,Q),F.castShadow=!0,F.receiveShadow=!0,g[z.body].add(F)}let v=[],m=new hn,u=new Float32Array(1500*3);m.setAttribute("position",new un(u,3)),m.setDrawRange(0,0);let _=new Oa(m,new us({color:7527106,transparent:!0,opacity:.7}));r.add(_);let x=new Float32Array(18),y=new hn;y.setAttribute("position",new un(x,3));let A=new jl(y,new us({color:10217148,transparent:!0,opacity:.7}));A.frustumCulled=!1,r.add(A);let R=new Jl(y,new ao({color:11728335,size:.026}));R.frustumCulled=!1,r.add(R);let w,D=-1,E=!1,b=null,N=new ResizeObserver(()=>{let{width:z,height:J}=s.getBoundingClientRect();a.setSize(z,J),o.aspect=z/Math.max(J,1),o.updateProjectionMatrix()});N.observe(s);let Y=0,k=()=>{w=requestAnimationFrame(k);let z=Yg.current;if(z){for(let F of z.bodies||[]){let Q=g[F.name];if(Q){Q.position.fromArray(F.position);let[X,nt,lt,Z]=F.quaternion;Q.quaternion.set(nt,lt,Z,X)}}if(!E){let F=new Di;for(let ct of Object.values(g))F.expandByObject(ct);let Q=F.getBoundingSphere(new Ni),X=o.fov*Math.PI/180,nt=2*Math.atan(Math.tan(X/2)*o.aspect),lt=Q.radius/Math.sin(Math.min(X,nt)/2)*1.25,Z=n==="top"?new I(0,0,1):new I(1.1,-1.4,1.05).normalize();l.target.copy(Q.center),o.position.copy(Q.center).addScaledVector(Z,lt),E=!0}let J=new I(z.position[0],z.position[1],0);if(b){let F=J.clone().sub(b);o.position.add(F),l.target.add(F)}if(b=J,z.feet&&([0,1,2,5,4,3].forEach((F,Q)=>{x[Q*3]=z.feet[F][0],x[Q*3+1]=z.feet[F][1],x[Q*3+2]=z.feet[F][2]+.026}),y.attributes.position.needsUpdate=!0),z.time<D&&(v.length=0),z.time!==D){D=z.time;let F=new I(z.position[0],z.position[1],.006);if(!v.length||F.distanceTo(v.at(-1))>.01){v.push(F),v.length>1500&&v.shift();for(let Q=0;Q<v.length;Q++)v[Q].toArray(u,Q*3);m.attributes.position.needsUpdate=!0,m.setDrawRange(0,v.length),m.computeBoundingSphere()}}}l.update(),a.render(r,o),++Y===3&&(s.dataset.rendered="true",t("3D \u5DF2\u5C31\u7EEA"))};return k(),()=>{cancelAnimationFrame(w),N.disconnect(),l.dispose(),r.traverse(z=>{z.material&&z.material.dispose()}),Object.values(d).forEach(z=>z.dispose()),m.dispose(),y.dispose(),h.geometry.dispose(),a.dispose(),s.replaceChildren()}},[e,n]),C.default.createElement("div",{className:"viewport",ref:i})}function M3(){let[e,t]=(0,C.useState)(null),[n,i]=(0,C.useState)(null),[s,a]=(0,C.useState)(!1),[r,o]=(0,C.useState)(""),[l,c]=(0,C.useState)("3D \u8F7D\u5165\u4E2D"),[h,p]=(0,C.useState)("perspective"),[f,d]=(0,C.useState)(1),g=(0,C.useRef)(1);g.current=f;let[v,m]=(0,C.useState)(!1),[u,_]=(0,C.useState)(""),x=(0,C.useRef)(null),y=(0,C.useRef)("stop"),A=b=>{if(x.current?.readyState===WebSocket.OPEN){let N={forward:[1,0],backward:[-1,0],left:[0,1],right:[0,-1]}[b],Y=Yg.current?.mode==="vnc"&&N?{command:"move_intent",forward:N[0]*g.current,turn:N[1]*g.current}:{command:b};x.current.send(JSON.stringify(Y)),b!=="heartbeat"&&(y.current=["reset","stop"].includes(b)?"stop":b)}},R=b=>{x.current?.readyState===WebSocket.OPEN&&(x.current.send(JSON.stringify({command:"set_mode",mode:b})),y.current="stop")},w=b=>{x.current?.readyState===WebSocket.OPEN&&(o(""),b.command==="set_intervention"&&(y.current="stop"),x.current.send(JSON.stringify(b)))},D=(b,N=!1)=>{x.current?.readyState===WebSocket.OPEN&&(y.current="stop",o(""),_(""),m(!0),x.current.send(JSON.stringify({command:N?"restore_stance":"set_stance",angles_deg:b})))};(0,C.useEffect)(()=>{let b=!1,N;fetch("/api/scene").then(nt=>{if(!nt.ok)throw Error("\u6A21\u578B\u52A0\u8F7D\u5931\u8D25");return nt.json()}).then(t).catch(nt=>o(nt.message));let Y=()=>{if(b)return;let nt=new WebSocket(`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`);x.current=nt,nt.onopen=()=>{a(!0),o(""),y.current="stop"},nt.onmessage=lt=>{let Z=JSON.parse(lt.data);Z.type==="state"?(Yg.current=Z,i(Z)):Z.type==="error"?(o(Z.message),_(Z.message),m(!1),y.current="stop"):Z.type==="stance_saved"&&(o(""),m(!1),_(Z.persistent?"\u5DF2\u4FDD\u5B58\uFF0C\u5BB9\u5668\u91CD\u542F\u540E\u4FDD\u7559\uFF1B\u573A\u666F\u5DF2\u590D\u4F4D":"\u5DF2\u5E94\u7528\u5E76\u590D\u4F4D\uFF0C\u672C\u6B21\u4F1A\u8BDD\u6709\u6548"))},nt.onclose=()=>{a(!1),m(!1),y.current="stop",b||(N=setTimeout(Y,1500))},nt.onerror=()=>o("\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u6B63\u5728\u91CD\u8FDE")};Y();let k=setInterval(()=>{y.current!=="stop"&&A("heartbeat")},200),z=()=>A("stop"),J=()=>{document.hidden&&z()},F={w:"forward",s:"backward",a:"left",d:"right",ArrowUp:"forward",ArrowDown:"backward",ArrowLeft:"left",ArrowRight:"right"},Q=nt=>{nt.repeat||/INPUT|TEXTAREA|SELECT/.test(nt.target.tagName)||(F[nt.key]&&(nt.preventDefault(),A(F[nt.key])),nt.code==="Space"&&(nt.preventDefault(),z()))},X=nt=>{F[nt.key]&&(nt.preventDefault(),z())};return window.addEventListener("keydown",Q),window.addEventListener("keyup",X),window.addEventListener("blur",z),document.addEventListener("visibilitychange",J),window.addEventListener("pointerup",z),()=>{b=!0,clearTimeout(N),clearInterval(k),x.current?.close(),window.removeEventListener("keydown",Q),window.removeEventListener("keyup",X),window.removeEventListener("blur",z),document.removeEventListener("visibilitychange",J),window.removeEventListener("pointerup",z)}},[]);let E=(b,N,Y)=>C.default.createElement("button",{className:`direction ${n?.command===b?"active":""}`,disabled:!s||!!n?.fault,"aria-label":qg[b],onPointerDown:k=>{k.currentTarget.setPointerCapture(k.pointerId),A(b)},onPointerUp:()=>A("stop"),onPointerCancel:()=>A("stop")},C.default.createElement("span",null,N),C.default.createElement("b",null,qg[b]),C.default.createElement("small",null,Y));return C.default.createElement("div",{className:"shell"},C.default.createElement("header",null,C.default.createElement("a",{className:"brand",href:"/"},C.default.createElement("span",{className:"brand-icon"},"\u2733"),C.default.createElement("div",null,"HEXAPOD ",C.default.createElement("em",null,"/ NEURO LAB"),C.default.createElement("small",null,"\u516D\u8DB3\u673A\u5668\u4EBA \xB7 \u795E\u7ECF\u63A7\u5236\u5B9E\u9A8C\u5BA4"))),C.default.createElement("div",{className:"header-right"},C.default.createElement("span",{className:"local"},"LOCAL / DOCKER"),C.default.createElement("span",{className:`status ${s?"online":""}`},s?"\u5B9E\u65F6\u8FDE\u63A5":"\u6B63\u5728\u8FDE\u63A5"))),C.default.createElement("main",null,C.default.createElement("div",{className:"heading"},C.default.createElement("div",null,C.default.createElement("div",{className:"eyebrow"},"EXPERIMENT 003 / VNC CONTACT FEEDBACK"),C.default.createElement("h1",null,"\u4ECE\u610F\u56FE\uFF0C\u5230\u89E6\u5730\u3002"),C.default.createElement("p",null,"\u8FDE\u63A5\u7EC4\u4EFF\u771F\u6D3B\u52A8 \xB7 \u63A5\u89E6\u53CD\u9988 \xB7 \u5DE5\u7A0B\u8FD0\u52A8\u63A5\u53E3")),C.default.createElement("span",{className:"mode-tag"},{vnc:"VNC \u63A5\u89E6\u95ED\u73AF",neural:"\u795E\u7ECF\u76F4\u63A5\u504F\u79FB\u5BF9\u7167",cpg:"CPG \u4EBA\u5DE5\u6B65\u6001\u5BF9\u7167"}[n?.mode]||"\u6B63\u5728\u8FDE\u63A5")),C.default.createElement("div",{className:"mode-bar"},C.default.createElement("span",null,"\u63A7\u5236\u6765\u6E90"),C.default.createElement("button",{"aria-label":"VNC \u63A5\u89E6\u95ED\u73AF",className:n?.mode==="vnc"?"selected":"",onClick:()=>R("vnc"),disabled:!s},"VNC \u63A5\u89E6\u95ED\u73AF"),C.default.createElement("button",{"aria-label":"MaleCNS \u795E\u7ECF\u5B9E\u9A8C",className:n?.mode==="neural"?"selected":"",onClick:()=>R("neural"),disabled:!s},"\u795E\u7ECF\u76F4\u63A5\u504F\u79FB\u5BF9\u7167"),C.default.createElement("button",{"aria-label":"CPG \u4EBA\u5DE5\u6B65\u6001\u5BF9\u7167",className:n?.mode==="cpg"?"selected":"",onClick:()=>R("cpg"),disabled:!s},"CPG \u4EBA\u5DE5\u6B65\u6001\u5BF9\u7167"),C.default.createElement("small",null,n?.mode==="vnc"?"\u4E2D\u592E\u8111\u610F\u56FE\u4EE3\u7406 + MaleCNS \u4E0B\u884C/VNC + \u5DE5\u7A0B\u63A5\u89E6\u53CD\u5C04\u5C42":n?.mode==="cpg"?"\u4EBA\u5DE5\u4E09\u8DB3\u6B65\u6001\uFF0C\u4EC5\u7528\u4E8E\u94FE\u8DEF\u5BF9\u7167":"\u65E7\u7248\u76F4\u63A5\u504F\u79FB\uFF1B\u672A\u5F62\u6210\u53EF\u9760\u6B65\u884C")),C.default.createElement(Wg,{state:n,connected:s}),C.default.createElement(Xg,{state:n,connected:s,sendAudit:w}),C.default.createElement("div",{className:"pose-summary"},C.default.createElement("span",null,n?.stance_settings?.custom?"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u89D2\u5EA6":"\u521D\u59CB\u8DB3\u7AEF\u6B63\u516D\u8FB9\u5F62 \xB7 \u534A\u5F84 600 mm"),C.default.createElement("span",null,"\u673A\u8EAB\u4E0B\u8868\u9762\u51C0\u7A7A ",C.default.createElement("b",null,n?.chassis_clearance_m===void 0?"\u2014":(n.chassis_clearance_m*1e3).toFixed(1)," mm")," / \u76EE\u6807 250 mm"),C.default.createElement("span",null,"\u819D\u5185\u89D2 ",n?.knee_internal_angles_deg?`${Math.min(...n.knee_internal_angles_deg).toFixed(1)}\xB0 \uFF5E ${Math.max(...n.knee_internal_angles_deg).toFixed(1)}\xB0`:"\u2014")),C.default.createElement("div",{className:"workspace"},C.default.createElement("section",{className:"stage"},C.default.createElement("div",{className:"stage-top"},C.default.createElement("div",null,C.default.createElement("span",{className:"dot"})," \u5B9E\u65F6\u7269\u7406\u573A\u666F"),C.default.createElement("div",{className:"view-buttons"},C.default.createElement("button",{className:h==="perspective"?"selected":"",onClick:()=>p("perspective")},"\u900F\u89C6"),C.default.createElement("button",{className:h==="top"?"selected":"",onClick:()=>p("top")},"\u4FEF\u89C6\u8DB3\u7AEF"))),C.default.createElement(b3,{scene:e,view:h,onReady:c}),C.default.createElement("div",{className:"scene-label"},C.default.createElement("b",null,"NBS V5"),C.default.createElement("span",null,"\u7528\u6237 URDF \xB7 18 \u81EA\u7531\u5EA6")),C.default.createElement("div",{className:"scene-help"},h==="top"?"\u4FEF\u89C6 \xB7 \u524D\u65B9 \u2191 \xB7 \u6EDA\u8F6E\u7F29\u653E":"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E",C.default.createElement("span",null,l)),C.default.createElement("div",{className:"stage-bottom"},C.default.createElement("span",null,C.default.createElement("i",{className:"mint"}),"\u5DE6\u4FA7\u817F"),C.default.createElement("span",null,C.default.createElement("i",{className:"silver"}),"\u53F3\u4FA7\u817F"),C.default.createElement("span",{className:"push"},"\u4EAE\u7EBF\uFF1A\u5B9E\u9645\u8DB3\u7AEF\u8F6E\u5ED3"))),C.default.createElement("aside",null,C.default.createElement("section",{className:"panel control"},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,n?.mode==="vnc"?"\u79FB\u52A8\u60F3\u6CD5\u8F93\u5165":n?.mode==="cpg"?"\u5BF9\u7167\u6B65\u6001\u6307\u4EE4":"\u4E0B\u884C\u901A\u8DEF\u523A\u6FC0"),C.default.createElement("span",{className:"pill"},qg[n?.command]||"\u5F85\u673A")),C.default.createElement("p",null,n?.mode==="vnc"?"\u6309\u4F4F\u65B9\u5411\u8F93\u5165\u79FB\u52A8\u610F\u56FE\uFF0C\u4F5C\u4E3A\u4E2D\u592E\u8111\u4EE3\u7406\u523A\u6FC0\u4E0B\u884C\u795E\u7ECF\u7FA4\u3002\u5173\u8282\u7531\u795E\u7ECF\u6D3B\u52A8\u4E0E\u5DE5\u7A0B\u63A5\u89E6\u53CD\u5C04\u5C42\u9A71\u52A8\u3002":n?.mode==="cpg"?"\u6309\u4F4F W / A / S / D \u8FD0\u884C\u4EBA\u5DE5\u6B65\u6001\uFF0C\u677E\u5F00\u505C\u6B62\u3002":"\u65E7\u7248\u653E\u7535\u5230\u89D2\u5EA6\u504F\u79FB\u5BF9\u7167\uFF0C\u5C1A\u4E0D\u80FD\u53EF\u9760\u884C\u8D70\u3002"),n?.mode==="vnc"&&C.default.createElement("label",{className:"intent-gain"},"\u610F\u56FE\u5F3A\u5EA6 ",C.default.createElement("b",null,Math.round(f*100),"%"),C.default.createElement("input",{"aria-label":"\u610F\u56FE\u5F3A\u5EA6",type:"range",min:"0.2",max:"1",step:"0.05",value:f,onChange:b=>{let N=Number(b.target.value);g.current=N,d(N),y.current!=="stop"&&A(y.current)}})),C.default.createElement("div",{className:"pad"},C.default.createElement("div",null),E("forward","\u2191","W"),C.default.createElement("div",null),E("left","\u21B6","A"),C.default.createElement("button",{className:"stop","aria-label":"\u505C\u6B62",onPointerDown:()=>A("stop")},"\u25A0",C.default.createElement("small",null,"\u505C\u6B62")),E("right","\u21B7","D"),C.default.createElement("div",null),E("backward","\u2193","S"),C.default.createElement("div",null)),C.default.createElement("button",{className:"reset",onClick:()=>A("reset"),disabled:!s},"\u21BB \u590D\u4F4D\u573A\u666F",C.default.createElement("span",null,"\u795E\u7ECF\u72B6\u6001\u540C\u6B65\u590D\u4F4D")),C.default.createElement("div",{className:"control-note"},"\u7A7A\u683C\u505C\u6B62 \xB7 \u5931\u53BB\u7126\u70B9\u505C\u6B62 \xB7 \u65AD\u7EBF\u81EA\u52A8\u505C\u6B62")),C.default.createElement("section",{className:"panel pipeline"},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,"\u63A7\u5236\u94FE\u8DEF"),C.default.createElement("span",null,n?.mode==="cpg"?"\u5BF9\u7167":"\u95ED\u73AF\u5B9E\u9A8C")),C.default.createElement("div",{className:"chain"},C.default.createElement("b",null,n?.mode==="cpg"?"\u4EBA\u5DE5 CPG":"\u4E0B\u884C \u2192 VNC"),C.default.createElement("i",null,"\u2192"),C.default.createElement("b",null,n?.mode==="vnc"?"\u63A5\u89E6\u53CD\u5C04\u5C42":n?.mode==="cpg"?"\u5173\u8282\u8F68\u8FF9":"\u8FD0\u52A8\u653E\u7535"),C.default.createElement("i",null,"\u2192"),C.default.createElement("b",null,"18 \u8DEF\u4F3A\u670D")),C.default.createElement("div",{className:"neural"},C.default.createElement("span",null,"\u611F\u89C9\u53CD\u9988"),C.default.createElement("b",null,"\u89E6\u5730 / \u8F7D\u8377 / \u6ED1\u79FB / \u626D\u77E9"),C.default.createElement("small",null,n?.mode==="cpg"?"CPG \u5BF9\u7167\u672A\u8BFB\u53D6\u795E\u7ECF\u8F93\u51FA":"MuJoCo \u2192 \u611F\u89C9\u8F93\u5165 \u2192 \u8FDE\u63A5\u7EC4"))))),C.default.createElement(S3,{state:n}),C.default.createElement(E3,{state:n,connected:s,pending:v,notice:u,onSave:D}),C.default.createElement(T3,{neural:n?.neural,mode:n?.mode}),C.default.createElement("div",{className:"metrics"},C.default.createElement(_c,{label:"\u4EFF\u771F\u65F6\u95F4",value:n?.time?.toFixed(1)||"0.0",unit:"s"}),C.default.createElement(_c,{label:"\u673A\u8EAB\u4F4D\u7F6E X / Y",value:n?`${n.position[0].toFixed(3)} / ${n.position[1].toFixed(3)}`:"\u2014",unit:"m"}),C.default.createElement(_c,{label:"\u673A\u8EAB\u4E0B\u8868\u9762\u51C0\u7A7A",value:n?.chassis_clearance_m?.toFixed(3)||"\u2014",unit:"m"}),C.default.createElement(_c,{label:"\u822A\u5411\u89D2",value:n?(n.yaw*180/Math.PI).toFixed(1):"\u2014",unit:"\xB0"}),C.default.createElement(_c,{label:"\u63A5\u89E6\u70B9 / \u5F15\u64CE\u8B66\u544A",value:n?`${n.contacts} / ${n.warnings}`:"\u2014",unit:""})),C.default.createElement("div",{className:"lower"},C.default.createElement("section",{className:"panel log-panel"},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,"\u8FD0\u884C\u65E5\u5FD7"),C.default.createElement("span",{className:"live-label"},"LIVE")),C.default.createElement("div",{className:"logs",role:"log"},(n?.events||[]).slice(-7).reverse().map((b,N)=>C.default.createElement("div",{key:`${b.time}${N}`},C.default.createElement("time",null,b.time),C.default.createElement("span",null,b.message))))),C.default.createElement("section",{className:"panel model-panel"},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,"\u6A21\u578B\u4E0E\u4EFF\u771F\u5047\u8BBE"),C.default.createElement("span",{className:"pill"},"\u7528\u6237\u6A21\u578B")),C.default.createElement("p",null,e?.engine||"MuJoCo"," \xB7 500 Hz \u7269\u7406 / 0.5 ms \u795E\u7ECF\u6B65\u957F / 100 Hz \u76EE\u6807\u66F4\u65B0"),C.default.createElement("p",null,"\u8D28\u91CF ",e?.mass?.toFixed(2)||"107.63"," kg \xB7 \u4FDD\u7559 URDF \u8D28\u91CF\u4E0E\u60EF\u91CF"),C.default.createElement("small",null,"\u795E\u7ECF\u7EC6\u80DE\u548C\u8FDE\u63A5\u6765\u81EA MaleCNS\uFF1BLIF \u52A8\u529B\u5B66\u3001\u611F\u89C9\u7F16\u7801\u3001\u808C\u8089\u5230\u673A\u5668\u4EBA\u6295\u5F71\u662F\u5EFA\u6A21\u5047\u8BBE\u3002\u672A\u4F7F\u7528\u5B8C\u6574\u8111\uFF1B\u63A5\u89E6\u6B65\u5E8F\u7531\u5DE5\u7A0B\u53CD\u5C04\u5C42\u751F\u6210\uFF0C\u975E\u751F\u7269\u8282\u5F8B\u91CD\u5EFA\u3002\u4F3A\u670D\u53C2\u6570\u672A\u5B9E\u673A\u6807\u5B9A\uFF1B\u6682\u5173\u95ED\u81EA\u8EAB\u78B0\u649E\u3002"))),(r||n?.fault)&&C.default.createElement("div",{className:"error",role:"alert"},r||n.fault),C.default.createElement("footer",null,C.default.createElement("span",null,"HEXAPOD / NEURO LAB"),C.default.createElement("span",null,"\u672C\u673A\u8FD0\u884C \xB7 \u4E0D\u8FDE\u63A5\u5B9E\u673A \xB7 AGX Orin \u672A\u4F7F\u7528"))))}function S3({state:e}){let t=e?.body_feedback,n=e?.vnc;if(!t||!n)return null;let i=["\u5DE6\u524D","\u5DE6\u4E2D","\u5DE6\u540E","\u53F3\u524D","\u53F3\u4E2D","\u53F3\u540E"],s={support:"\u652F\u6491",lift:"\u62AC\u8DB3",advance:"\u524D\u6446",lower:"\u843D\u8DB3"};return C.default.createElement("section",{className:"panel vnc-panel"},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,"\u9ED1\u7403\u89E6\u5730\u53CD\u9988\u4E0E\u7B49\u6548\u808C\u7FA4\u8D1F\u8F7D"),C.default.createElement("span",{className:"pill"},e.mode==="vnc"?n.status:"\u4F20\u611F\u89C2\u6D4B \xB7 \u5BF9\u7167\u6A21\u5F0F")),C.default.createElement("div",{className:"vnc-readout"},C.default.createElement("span",null,"\u79FB\u52A8\u60F3\u6CD5 ",C.default.createElement("b",null,"\u524D\u540E ",e.intent.requested[0].toFixed(2)," / \u8F6C\u5411 ",e.intent.requested[1].toFixed(2))),C.default.createElement("span",null,"\u8FD0\u52A8\u795E\u7ECF\u4F7F\u80FD ",C.default.createElement("b",null,e.mode==="vnc"?(n.motor_gate*100).toFixed(0)+"%":"\u672A\u4F7F\u7528")),C.default.createElement("span",null,"\u89E3\u7801\u8FD0\u52A8 ",C.default.createElement("b",null,e.mode==="vnc"?`${n.decoded_velocity_m_s.toFixed(3)} m/s \xB7 ${n.decoded_turn_rad_s.toFixed(3)} rad/s`:"\u2014"))),C.default.createElement("div",{className:"feedback-table-wrap"},C.default.createElement("table",{className:"feedback-table"},C.default.createElement("thead",null,C.default.createElement("tr",null,C.default.createElement("th",null,"\u817F / \u8DB3\u7AEF"),C.default.createElement("th",null,"\u6CD5\u5411\u8F7D\u8377 N"),C.default.createElement("th",null,"\u6ED1\u79FB mm/s"),C.default.createElement("th",null,"\u9ACB\u7B49\u6548\u529B N"),C.default.createElement("th",null,"\u5927\u817F\u7B49\u6548\u529B N"),C.default.createElement("th",null,"\u5C0F\u817F\u7B49\u6548\u529B N"),C.default.createElement("th",null,"\u5DF2\u786E\u8BA4\u843D\u8DB3"))),C.default.createElement("tbody",null,i.map((a,r)=>C.default.createElement("tr",{key:a},C.default.createElement("th",null,a," ",C.default.createElement("span",{className:t.touch[r]?"contact-on":"contact-off"},t.touch[r]?"\u89E6\u5730":"\u79BB\u5730"),C.default.createElement("small",null,e.mode==="vnc"?s[n.leg_stages[r]]:"\u2014")),C.default.createElement("td",null,t.normal_force_n[r].toFixed(1)),C.default.createElement("td",{className:t.slip_m_s[r]>.03?"slipping":""},(t.slip_m_s[r]*1e3).toFixed(1)),[0,1,2].map(o=>C.default.createElement("td",{key:o},(t.muscle_positive_n[r][o]+t.muscle_negative_n[r][o]).toFixed(0))),C.default.createElement("td",null,e.mode==="vnc"?n.steps[r]:"\u2014")))))),C.default.createElement("p",{className:"joint-footnote"},"\u53EA\u7EDF\u8BA1\u9ED1\u8272\u8DB3\u7AEF\u7403\u4E0E\u5730\u9762\u7684\u771F\u5B9E\u78B0\u649E\uFF1B\u8F7D\u8377\u548C\u63A5\u89E6\u70B9\u6ED1\u79FB\u9001\u5165\u5DE5\u7A0B\u611F\u89C9\u7F16\u7801\u3002\u7B49\u6548\u529B = \u6EE4\u6CE2\u626D\u77E9\u5927\u5C0F \xF7 \u5047\u8BBE\u529B\u81C2\uFF08\u9ACB/\u5927\u817F/\u5C0F\u817F ",t.moment_arms_m[0].map(a=>(a*1e3).toFixed(0)).join("/")," mm\uFF09\uFF0C\u4E0D\u542B\u672A\u77E5\u5171\u540C\u6536\u7F29\uFF0C\u4E0D\u662F\u771F\u5B9E\u679C\u8747\u808C\u8089\u529B\u3002\u4E2D\u592E\u8111\u7531\u65B9\u5411\u610F\u56FE\u4EE3\u7406\uFF0C\u6B65\u5E8F\u7531\u660E\u786E\u7684\u5DE5\u7A0B\u53CD\u5C04\u89C4\u5219\u751F\u6210\u3002"))}function E3({state:e,connected:t,pending:n,notice:i,onSave:s}){let a=e?.stance_settings,[r,o]=(0,C.useState)(null),[l,c]=(0,C.useState)(!1);(0,C.useEffect)(()=>{a&&(o(a.reference_angles_deg.map(g=>g.map(v=>v.toFixed(3)))),c(!1))},[a?.revision]);let h=["\u5DE6\u524D","\u5DE6\u4E2D","\u5DE6\u540E","\u53F3\u524D","\u53F3\u4E2D","\u53F3\u540E"],p=["\u9ACB","\u5927\u817F","\u5C0F\u817F"],f=(g,v,m)=>{o(u=>u.map((_,x)=>_.map((y,A)=>x===g&&A===v?m:y))),c(!0)},d=r&&r.every((g,v)=>g.every((m,u)=>m.trim()!==""&&Number.isFinite(Number(m))&&Math.abs(Number(m)-a.factory_angles_deg[v][u])<=15.000001));return C.default.createElement("div",{className:"joint-workspace"},C.default.createElement("section",{className:"panel torque-panel"},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,"\u5F53\u524D\u5173\u8282\u626D\u77E9"),C.default.createElement("span",{className:"pill"},"\u5B9E\u65F6 \xB7 N\xB7m")),C.default.createElement("p",{className:"joint-caption"},"\u4EFF\u771F\u5B9E\u9645\u9A71\u52A8\u626D\u77E9\uFF1B\u5927\u5B57\u4E3A\u5927\u5C0F\uFF0C\u4E0B\u65B9\u4E3A\u5E26\u65B9\u5411\u8BFB\u6570\u3002"),C.default.createElement("table",{className:"joint-table"},C.default.createElement("thead",null,C.default.createElement("tr",null,C.default.createElement("th",null,"\u817F"),p.map(g=>C.default.createElement("th",{key:g},g,"\u5173\u8282")))),C.default.createElement("tbody",null,h.map((g,v)=>C.default.createElement("tr",{key:g},C.default.createElement("th",null,g),p.map((m,u)=>{let _=e?.joint_torques_nm?.[v*3+u];return C.default.createElement("td",{key:m,className:Math.abs(_)>=405?"near-limit":""},C.default.createElement("b",{"aria-label":`${g}${m}\u626D\u77E9\u5927\u5C0F`},_===void 0?"\u2014":Math.abs(_).toFixed(2)),C.default.createElement("small",null,_===void 0?"":`${_>=0?"+":""}${_.toFixed(2)}`))}))))),C.default.createElement("p",{className:"joint-footnote"},"\u5355\u5173\u8282\u9650\u5E45 \xB1450 N\xB7m\uFF0C\u63A5\u8FD1\u9650\u5E45\u65F6\u6807\u6A59\u3002\u4E3A MuJoCo \u9A71\u52A8\u529B\u77E9\uFF0C\u4E0D\u662F\u5B9E\u673A\u4F20\u611F\u5668\u503C\uFF0C\u4E5F\u4E0D\u5305\u542B\u5730\u9762\u7EA6\u675F\u53CD\u529B\u3002")),C.default.createElement("section",{className:"panel stance-panel"},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,"\u9ED8\u8BA4\u5173\u8282\u89D2\u5EA6"),C.default.createElement("span",{className:"pill"},a?.custom?"\u81EA\u5B9A\u4E49":"\u516D\u8FB9\u5F62\u9884\u8BBE"," \xB7 \xB0")),C.default.createElement("p",{className:"joint-caption"},"\u9010\u817F\u8BBE\u7F6E\u521D\u59CB\u89D2\u5EA6\uFF1B\u590D\u4F4D\u548C\u6A21\u5F0F\u5207\u6362\u5747\u6CBF\u7528\u4FDD\u5B58\u503C\u3002"),C.default.createElement("form",{onSubmit:g=>{g.preventDefault(),d&&s(r.map(v=>v.map(Number)))}},C.default.createElement("table",{className:"joint-table angle-table"},C.default.createElement("thead",null,C.default.createElement("tr",null,C.default.createElement("th",null,"\u817F"),p.map(g=>C.default.createElement("th",{key:g},g,"\u5173\u8282")))),C.default.createElement("tbody",null,h.map((g,v)=>C.default.createElement("tr",{key:g},C.default.createElement("th",null,g),p.map((m,u)=>C.default.createElement("td",{key:m},C.default.createElement("input",{type:"number",step:"any","aria-label":`${g}${m}\u9ED8\u8BA4\u89D2\u5EA6`,value:r?.[v]?.[u]??"",min:a?a.factory_angles_deg[v][u]-15:void 0,max:a?a.factory_angles_deg[v][u]+15:void 0,onChange:_=>f(v,u,_.target.value),disabled:!t||n||!r}))))))),C.default.createElement("div",{className:"stance-actions"},C.default.createElement("button",{className:"apply-stance",type:"submit",disabled:!t||n||!d||!l},n?"\u6B63\u5728\u4FDD\u5B58\u2026":"\u4FDD\u5B58\u5E76\u590D\u4F4D"),C.default.createElement("button",{type:"button",onClick:()=>s(null,!0),disabled:!t||n},"\u6062\u590D\u516D\u8FB9\u5F62\u9884\u8BBE"))),C.default.createElement("p",{className:"joint-footnote"},"\u76F8\u5BF9\u9884\u8BBE\u53EF\u8C03 \xB115\xB0\u3002\u89D2\u5EA6\u6309\u6A21\u578B\u96F6\u4F4D\u8BA1\uFF0C\u533A\u522B\u4E8E\u819D\u5185\u89D2\uFF1B\u81EA\u5B9A\u4E49\u540E\u4E0D\u4FDD\u8BC1\u6B63\u516D\u8FB9\u5F62\u3002250 mm \u9AD8\u5EA6\u8865\u507F\u7EE7\u7EED\u4F5C\u7528\uFF0C\u627F\u91CD\u89D2\u5EA6\u4F1A\u6709\u53D8\u5316\u3002\u8DB3\u7AEF\u9AD8\u5EA6\u4E0D\u534F\u8C03\u7684\u8BBE\u7F6E\u4F1A\u88AB\u62D2\u7EDD\u3002"),i&&C.default.createElement("p",{className:"stance-notice",role:"status"},i)))}function T3({neural:e,mode:t}){let n=(0,C.useRef)([]);if(e&&n.current.at(-1)?.time!==e.time_ms&&(e.time_ms<(n.current.at(-1)?.time||0)&&(n.current=[]),n.current.push({time:e.time_ms,values:e.leg_rates.map(s=>s.rate_hz)}),n.current.length>100&&n.current.shift()),!e)return C.default.createElement("div",{className:"panel neural-panel"},"\u6B63\u5728\u52A0\u8F7D MaleCNS \u8FDE\u63A5\u7EC4\u2026");let i={lf:"\u5DE6\u524D",lm:"\u5DE6\u4E2D",lr:"\u5DE6\u540E",rf:"\u53F3\u524D",rm:"\u53F3\u4E2D",rr:"\u53F3\u540E"};return C.default.createElement("section",{className:`panel neural-panel ${t==="cpg"?"comparison":""}`},C.default.createElement("div",{className:"panel-title"},C.default.createElement("h2",null,"\u8FDE\u63A5\u7EC4\u653E\u7535\u4E0E\u5173\u8282\u6295\u5F71"),C.default.createElement("span",{className:"pill"},t==="vnc"?"\u8FDE\u63A5\u7EC4\u4EFF\u771F\u6D3B\u52A8 + \u5DE5\u7A0B\u63A5\u89E6\u53CD\u5C04":t==="cpg"?"\u5BF9\u7167\u6A21\u5F0F\uFF1A\u795E\u7ECF\u8F93\u51FA\u672A\u4F7F\u7528":"\u795E\u7ECF\u76F4\u63A5\u504F\u79FB\u5BF9\u7167")),C.default.createElement("div",{className:"neural-stats"},C.default.createElement("span",null,C.default.createElement("b",null,e.neurons.toLocaleString())," \u795E\u7ECF\u5143"),C.default.createElement("span",null,C.default.createElement("b",null,e.edges.toLocaleString())," \u6709\u6548\u8FDE\u63A5"),C.default.createElement("span",null,C.default.createElement("b",null,e.motor_neurons)," \u817F\u90E8\u8FD0\u52A8\u795E\u7ECF\u5143\uFF08",e.mapped_motor_neurons," \u4E2A\u7528\u4E8E\u6295\u5F71\uFF09"),C.default.createElement("span",null,C.default.createElement("b",null,e.total_spikes.toLocaleString())," \u7D2F\u8BA1\u8109\u51B2")),C.default.createElement("div",{className:"motor-grid"},e.leg_rates.map((s,a)=>C.default.createElement("div",{className:"motor-card",key:s.leg},C.default.createElement("div",null,C.default.createElement("b",null,i[s.leg]),C.default.createElement("span",null,s.rate_hz.toFixed(1)," Hz")),C.default.createElement("svg",{viewBox:"0 0 100 28",role:"img","aria-label":`${i[s.leg]}\u8FD0\u52A8\u795E\u7ECF\u5143\u653E\u7535\u8F68\u8FF9`},C.default.createElement("polyline",{fill:"none",stroke:a<3?"#83d9bf":"#a6c9de",strokeWidth:"1.3",points:n.current.map((r,o)=>`${o*100/99},${27-Math.min(100,r.values[a])*25/100}`).join(" ")})),C.default.createElement("small",null,"\u76EE\u6807\u504F\u79FB ",e.joint_offset_rad.slice(a*3,a*3+3).map(r=>(r*180/Math.PI).toFixed(1)+"\xB0").join(" / "))))),C.default.createElement("div",{className:"neural-details"},C.default.createElement("span",null,"\u5F53\u524D\u523A\u6FC0\uFF1A",e.command==="stop"?"\u5173\u95ED":`${e.command} \xB7 ${e.stimulus_hz} Hz`,C.default.createElement("small",null," bodyId: ",e.stimulated_body_ids.join(", ")||"\u2014")),C.default.createElement("span",null,"\u611F\u89C9\u8F93\u5165\u5747\u503C\uFF1A\u89D2\u5EA6 ",e.feedback_hz.angle||0," / \u901F\u5EA6 ",e.feedback_hz.velocity||0," / \u8F7D\u8377 ",e.feedback_hz.load||0," Hz")),C.default.createElement("p",{className:"experiment-note"},"VNC \u95ED\u73AF\u4EE5\u771F\u5B9E\u8FD0\u52A8\u6C60\u6D3B\u52A8\u4F7F\u80FD\u3001\u4E0B\u884C\u653E\u7535\u8BFB\u53D6\u65B9\u5411\uFF1B\u62AC\u8DB3\u4E0E\u843D\u8DB3\u7531\u5DE5\u7A0B\u63A5\u89E6\u53CD\u5C04\u5C42\u534F\u8C03\u3002\u5176\u4ED6\u4E24\u6A21\u5F0F\u4FDD\u7559\u4E3A\u5BF9\u7167\u3002"))}function _c({label:e,value:t,unit:n}){return C.default.createElement("div",{className:"metric"},C.default.createElement("small",null,e),C.default.createElement("div",null,t,C.default.createElement("span",null,n)))}(0,PM.createRoot)(document.getElementById("root")).render(C.default.createElement(M3,null));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
