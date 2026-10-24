import{j as n,m as no}from"./motion-C9y4tNzv.js";import{a as I5,d as e1,r as T,L as Ns,O as io,N as u1,u as Cf,e as a1,f as Of,h as On,i as t1,j as Je,k as n1,B as i1}from"./react-CReDDrmt.js";import{L as l1,F as Qi,B as Mn,a as lo,S as s1,b as Mf,A as r1,C as Yi,U as o1,G as Dn,c as Ji,d as Df,e as _f,f as c1,X as Uf,M as d1,g as As,h as f1,i as m1,E as Lf,j as Z4,I as b1,k as h1,l as p1,m as Bf,n as vs,D as x1,o as zs,p as V3,q as g1,P as v1,r as Gi,s as Ff,t as y1,u as k1,v as Un,w as Ss,x as P4,W as j1,y as X4,Q as w1,z as z1,H as S1,J as R1,K as N1,R as Hf,N as A1,O as so,T as E1,V as T1,Y as q1,Z as C1,_ as O1,$ as K3,a0 as $f,a1 as Vf,a2 as M1,a3 as D1,a4 as F4,a5 as Kf,a6 as Yf,a7 as _1,a8 as U1,a9 as L1,aa as B1,ab as F1}from"./icons-BkeU7HaQ.js";import{R as Y3,B as H1,X as $1,Y as V1,T as Q3,a as K1,P as Y1,b as Q1,C as J1}from"./charts-BD2IJKiB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const x of m)if(x.type==="childList")for(const v of x.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function c(m){const x={};return m.integrity&&(x.integrity=m.integrity),m.referrerPolicy&&(x.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?x.credentials="include":m.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function d(m){if(m.ep)return;m.ep=!0;const x=c(m);fetch(m.href,x)}})();var H4={exports:{}},Hi={},$4={exports:{}},V4={};var J3;function G1(){return J3||(J3=1,(function(l){function o(V,X){var le=V.length;V.push(X);e:for(;0<le;){var Ee=le-1>>>1,He=V[Ee];if(0<m(He,X))V[Ee]=X,V[le]=He,le=Ee;else break e}}function c(V){return V.length===0?null:V[0]}function d(V){if(V.length===0)return null;var X=V[0],le=V.pop();if(le!==X){V[0]=le;e:for(var Ee=0,He=V.length,De=He>>>1;Ee<De;){var Oe=2*(Ee+1)-1,we=V[Oe],uu=Oe+1,Bu=V[uu];if(0>m(we,le))uu<He&&0>m(Bu,we)?(V[Ee]=Bu,V[uu]=le,Ee=uu):(V[Ee]=we,V[Oe]=le,Ee=Oe);else if(uu<He&&0>m(Bu,le))V[Ee]=Bu,V[uu]=le,Ee=uu;else break e}}return X}function m(V,X){var le=V.sortIndex-X.sortIndex;return le!==0?le:V.id-X.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;l.unstable_now=function(){return x.now()}}else{var v=Date,w=v.now();l.unstable_now=function(){return v.now()-w}}var j=[],N=[],k=1,S=null,q=3,K=!1,A=!1,_=!1,C=!1,Z=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function ue(V){for(var X=c(N);X!==null;){if(X.callback===null)d(N);else if(X.startTime<=V)d(N),X.sortIndex=X.expirationTime,o(j,X);else break;X=c(N)}}function me(V){if(_=!1,ue(V),!A)if(c(j)!==null)A=!0,ce||(ce=!0,Ce());else{var X=c(N);X!==null&&Lu(me,X.startTime-V)}}var ce=!1,P=-1,D=5,he=-1;function Ie(){return C?!0:!(l.unstable_now()-he<D)}function qe(){if(C=!1,ce){var V=l.unstable_now();he=V;var X=!0;try{e:{A=!1,_&&(_=!1,ee(P),P=-1),K=!0;var le=q;try{u:{for(ue(V),S=c(j);S!==null&&!(S.expirationTime>V&&Ie());){var Ee=S.callback;if(typeof Ee=="function"){S.callback=null,q=S.priorityLevel;var He=Ee(S.expirationTime<=V);if(V=l.unstable_now(),typeof He=="function"){S.callback=He,ue(V),X=!0;break u}S===c(j)&&d(j),ue(V)}else d(j);S=c(j)}if(S!==null)X=!0;else{var De=c(N);De!==null&&Lu(me,De.startTime-V),X=!1}}break e}finally{S=null,q=le,K=!1}X=void 0}}finally{X?Ce():ce=!1}}}var Ce;if(typeof ne=="function")Ce=function(){ne(qe)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Su=Ge.port2;Ge.port1.onmessage=qe,Ce=function(){Su.postMessage(null)}}else Ce=function(){Z(qe,0)};function Lu(V,X){P=Z(function(){V(l.unstable_now())},X)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(V){V.callback=null},l.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<V?Math.floor(1e3/V):5},l.unstable_getCurrentPriorityLevel=function(){return q},l.unstable_next=function(V){switch(q){case 1:case 2:case 3:var X=3;break;default:X=q}var le=q;q=X;try{return V()}finally{q=le}},l.unstable_requestPaint=function(){C=!0},l.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=q;q=V;try{return X()}finally{q=le}},l.unstable_scheduleCallback=function(V,X,le){var Ee=l.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Ee+le:Ee):le=Ee,V){case 1:var He=-1;break;case 2:He=250;break;case 5:He=1073741823;break;case 4:He=1e4;break;default:He=5e3}return He=le+He,V={id:k++,callback:X,priorityLevel:V,startTime:le,expirationTime:He,sortIndex:-1},le>Ee?(V.sortIndex=le,o(N,V),c(j)===null&&V===c(N)&&(_?(ee(P),P=-1):_=!0,Lu(me,le-Ee))):(V.sortIndex=He,o(j,V),A||K||(A=!0,ce||(ce=!0,Ce()))),V},l.unstable_shouldYield=Ie,l.unstable_wrapCallback=function(V){var X=q;return function(){var le=q;q=X;try{return V.apply(this,arguments)}finally{q=le}}}})(V4)),V4}var G3;function W1(){return G3||(G3=1,$4.exports=G1()),$4.exports}var W3;function Z1(){if(W3)return Hi;W3=1;var l=W1(),o=I5(),c=e1();function d(e){var u="https://react.dev/errors/"+e;if(1<arguments.length){u+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)u+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var u=e,a=e;if(e.alternate)for(;u.return;)u=u.return;else{e=u;do u=e,(u.flags&4098)!==0&&(a=u.return),e=u.return;while(e)}return u.tag===3?a:null}function v(e){if(e.tag===13){var u=e.memoizedState;if(u===null&&(e=e.alternate,e!==null&&(u=e.memoizedState)),u!==null)return u.dehydrated}return null}function w(e){if(e.tag===31){var u=e.memoizedState;if(u===null&&(e=e.alternate,e!==null&&(u=e.memoizedState)),u!==null)return u.dehydrated}return null}function j(e){if(x(e)!==e)throw Error(d(188))}function N(e){var u=e.alternate;if(!u){if(u=x(e),u===null)throw Error(d(188));return u!==e?null:e}for(var a=e,t=u;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(t=i.return,t!==null){a=t;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return j(i),e;if(r===t)return j(i),u;r=r.sibling}throw Error(d(188))}if(a.return!==t.return)a=i,t=r;else{for(var b=!1,g=i.child;g;){if(g===a){b=!0,a=i,t=r;break}if(g===t){b=!0,t=i,a=r;break}g=g.sibling}if(!b){for(g=r.child;g;){if(g===a){b=!0,a=r,t=i;break}if(g===t){b=!0,t=r,a=i;break}g=g.sibling}if(!b)throw Error(d(189))}}if(a.alternate!==t)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:u}function k(e){var u=e.tag;if(u===5||u===26||u===27||u===6)return e;for(e=e.child;e!==null;){if(u=k(e),u!==null)return u;e=e.sibling}return null}var S=Object.assign,q=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),qe=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=qe&&e[qe]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Symbol.for("react.client.reference");function Su(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case Z:return"Profiler";case C:return"StrictMode";case me:return"Suspense";case ce:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case ne:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case ue:var u=e.render;return e=e.displayName,e||(e=u.displayName||u.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return u=e.displayName||null,u!==null?u:Su(e.type)||"Memo";case D:u=e._payload,e=e._init;try{return Su(e(u))}catch{}}return null}var Lu=Array.isArray,V=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Ee=[],He=-1;function De(e){return{current:e}}function Oe(e){0>He||(e.current=Ee[He],Ee[He]=null,He--)}function we(e,u){He++,Ee[He]=e.current,e.current=u}var uu=De(null),Bu=De(null),Ea=De(null),$t=De(null);function k0(e,u){switch(we(Ea,u),we(Bu,e),we(uu,null),u.nodeType){case 9:case 11:e=(e=u.documentElement)&&(e=e.namespaceURI)?f3(e):0;break;default:if(e=u.tagName,u=u.namespaceURI)u=f3(u),e=m3(u,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Oe(uu),we(uu,e)}function Pa(){Oe(uu),Oe(Bu),Oe(Ea)}function Hn(e){e.memoizedState!==null&&we($t,e);var u=uu.current,a=m3(u,e.type);u!==a&&(we(Bu,e),we(uu,a))}function j0(e){Bu.current===e&&(Oe(uu),Oe(Bu)),$t.current===e&&(Oe($t),Ui._currentValue=le)}var $n,Vn;function Xa(e){if($n===void 0)try{throw Error()}catch(a){var u=a.stack.trim().match(/\n( *(at )?)/);$n=u&&u[1]||"",Vn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$n+e+Vn}var w0=!1;function Kn(e,u){if(!e||w0)return"";w0=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(u){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch($){var B=$}Reflect.construct(e,[],G)}else{try{G.call()}catch($){B=$}e.call(G.prototype)}}else{try{throw Error()}catch($){B=$}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch($){if($&&B&&typeof $.stack=="string")return[$.stack,B.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=t.DetermineComponentFrameRoot(),b=r[0],g=r[1];if(b&&g){var R=b.split(`
`),L=g.split(`
`);for(i=t=0;t<R.length&&!R[t].includes("DetermineComponentFrameRoot");)t++;for(;i<L.length&&!L[i].includes("DetermineComponentFrameRoot");)i++;if(t===R.length||i===L.length)for(t=R.length-1,i=L.length-1;1<=t&&0<=i&&R[t]!==L[i];)i--;for(;1<=t&&0<=i;t--,i--)if(R[t]!==L[i]){if(t!==1||i!==1)do if(t--,i--,0>i||R[t]!==L[i]){var Y=`
`+R[t].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=t&&0<=i);break}}}finally{w0=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xa(a):""}function el(e,u){switch(e.tag){case 26:case 27:case 5:return Xa(e.type);case 16:return Xa("Lazy");case 13:return e.child!==u&&u!==null?Xa("Suspense Fallback"):Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 15:return Kn(e.type,!1);case 11:return Kn(e.type.render,!1);case 1:return Kn(e.type,!0);case 31:return Xa("Activity");default:return""}}function Yn(e){try{var u="",a=null;do u+=el(e,a),a=e,e=e.return;while(e);return u}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Qn=Object.prototype.hasOwnProperty,Vt=l.unstable_scheduleCallback,Jn=l.unstable_cancelCallback,_s=l.unstable_shouldYield,Us=l.unstable_requestPaint,Ou=l.unstable_now,Ls=l.unstable_getCurrentPriorityLevel,ul=l.unstable_ImmediatePriority,al=l.unstable_UserBlockingPriority,Kt=l.unstable_NormalPriority,Bs=l.unstable_LowPriority,tl=l.unstable_IdlePriority,Fs=l.log,Hs=l.unstable_setDisableYieldValue,z0=null,Fu=null;function Hu(e){if(typeof Fs=="function"&&Hs(e),Fu&&typeof Fu.setStrictMode=="function")try{Fu.setStrictMode(z0,e)}catch{}}var Mu=Math.clz32?Math.clz32:nl,$s=Math.log,Vs=Math.LN2;function nl(e){return e>>>=0,e===0?32:31-($s(e)/Vs|0)|0}var ct=256,S0=262144,Yt=4194304;function Ia(e){var u=e&42;if(u!==0)return u;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function R0(e,u,a){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var g=t&134217727;return g!==0?(t=g&~r,t!==0?i=Ia(t):(b&=g,b!==0?i=Ia(b):a||(a=g&~e,a!==0&&(i=Ia(a))))):(g=t&~r,g!==0?i=Ia(g):b!==0?i=Ia(b):a||(a=t&~e,a!==0&&(i=Ia(a)))),i===0?0:u!==0&&u!==i&&(u&r)===0&&(r=i&-i,a=u&-u,r>=a||r===32&&(a&4194048)!==0)?u:i}function dt(e,u){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&u)===0}function ve(e,u){switch(e){case 1:case 2:case 4:case 8:case 64:return u+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return u+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lu(){var e=Yt;return Yt<<=1,(Yt&62914560)===0&&(Yt=4194304),e}function ft(e){for(var u=[],a=0;31>a;a++)u.push(e);return u}function Ru(e,u){e.pendingLanes|=u,u!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function il(e,u,a,t,i,r){var b=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,R=e.expirationTimes,L=e.hiddenUpdates;for(a=b&~a;0<a;){var Y=31-Mu(a),G=1<<Y;g[Y]=0,R[Y]=-1;var B=L[Y];if(B!==null)for(L[Y]=null,Y=0;Y<B.length;Y++){var $=B[Y];$!==null&&($.lane&=-536870913)}a&=~G}t!==0&&Gn(e,t,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(b&~u))}function Gn(e,u,a){e.pendingLanes|=u,e.suspendedLanes&=~u;var t=31-Mu(u);e.entangledLanes|=u,e.entanglements[t]=e.entanglements[t]|1073741824|a&261930}function Wn(e,u){var a=e.entangledLanes|=u;for(e=e.entanglements;a;){var t=31-Mu(a),i=1<<t;i&u|e[t]&u&&(e[t]|=u),a&=~i}}function Zn(e,u){var a=u&-u;return a=(a&42)!==0?1:Qt(a),(a&(e.suspendedLanes|u))!==0?0:a}function Qt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ta(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:_3(e.type))}function N0(e,u){var a=X.p;try{return X.p=e,u()}finally{X.p=a}}var qa=Math.random().toString(36).slice(2),fu="__reactFiber$"+qa,yu="__reactProps$"+qa,e0="__reactContainer$"+qa,Pn="__reactEvents$"+qa,Xn="__reactListeners$"+qa,Le="__reactHandles$"+qa,ll="__reactResources$"+qa,bt="__reactMarker$"+qa;function In(e){delete e[fu],delete e[yu],delete e[Pn],delete e[Xn],delete e[Le]}function A0(e){var u=e[fu];if(u)return u;for(var a=e.parentNode;a;){if(u=a[e0]||a[fu]){if(a=u.alternate,u.child!==null||a!==null&&a.child!==null)for(e=y3(e);e!==null;){if(a=e[fu])return a;e=y3(e)}return u}e=a,a=e.parentNode}return null}function E0(e){if(e=e[fu]||e[e0]){var u=e.tag;if(u===5||u===6||u===13||u===31||u===26||u===27||u===3)return e}return null}function ht(e){var u=e.tag;if(u===5||u===26||u===27||u===6)return e.stateNode;throw Error(d(33))}function Va(e){var u=e[ll];return u||(u=e[ll]={hoistableStyles:new Map,hoistableScripts:new Map}),u}function mu(e){e[bt]=!0}var Jt=new Set,Gt={};function ze(e,u){T0(e,u),T0(e+"Capture",u)}function T0(e,u){for(Gt[e]=u,e=0;e<u.length;e++)Jt.add(u[e])}var Ks=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pt={},Wt={};function sl(e){return Qn.call(Wt,e)?!0:Qn.call(pt,e)?!1:Ks.test(e)?Wt[e]=!0:(pt[e]=!0,!1)}function aa(e,u,a){if(sl(u))if(a===null)e.removeAttribute(u);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(u);return;case"boolean":var t=u.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(u);return}}e.setAttribute(u,""+a)}}function Zt(e,u,a){if(a===null)e.removeAttribute(u);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(u);return}e.setAttribute(u,""+a)}}function ta(e,u,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(u,a,""+t)}}function Du(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pt(e){var u=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(u==="checkbox"||u==="radio")}function ei(e,u,a){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,u);if(!e.hasOwnProperty(u)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,u,{configurable:!0,get:function(){return i.call(this)},set:function(b){a=""+b,r.call(this,b)}}),Object.defineProperty(e,u,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){e._valueTracker=null,delete e[u]}}}}function xt(e){if(!e._valueTracker){var u=Pt(e)?"checked":"value";e._valueTracker=ei(e,u,""+e[u])}}function ui(e){if(!e)return!1;var u=e._valueTracker;if(!u)return!0;var a=u.getValue(),t="";return e&&(t=Pt(e)?e.checked?"true":"false":e.value),e=t,e!==a?(u.setValue(e),!0):!1}function u0(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rl=/[\n"\\]/g;function $u(e){return e.replace(rl,function(u){return"\\"+u.charCodeAt(0).toString(16)+" "})}function Fe(e,u,a,t,i,r,b,g){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),u!=null?b==="number"?(u===0&&e.value===""||e.value!=u)&&(e.value=""+Du(u)):e.value!==""+Du(u)&&(e.value=""+Du(u)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),u!=null?We(e,b,Du(u)):a!=null?We(e,b,Du(a)):t!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Du(g):e.removeAttribute("name")}function ol(e,u,a,t,i,r,b,g){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),u!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||u!=null)){xt(e);return}a=a!=null?""+Du(a):"",u=u!=null?""+Du(u):a,g||u===e.value||(e.value=u),e.defaultValue=u}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=g?e.checked:!!t,e.defaultChecked=!!t,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),xt(e)}function We(e,u,a){u==="number"&&u0(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function q0(e,u,a,t){if(e=e.options,u){u={};for(var i=0;i<a.length;i++)u["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=u.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&t&&(e[a].defaultSelected=!0)}else{for(a=""+Du(a),u=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}u!==null||e[i].disabled||(u=e[i])}u!==null&&(u.selected=!0)}}function Me(e,u,a){if(u!=null&&(u=""+Du(u),u!==e.value&&(e.value=u),a==null)){e.defaultValue!==u&&(e.defaultValue=u);return}e.defaultValue=a!=null?""+Du(a):""}function C0(e,u,a,t){if(u==null){if(t!=null){if(a!=null)throw Error(d(92));if(Lu(t)){if(1<t.length)throw Error(d(93));t=t[0]}a=t}a==null&&(a=""),u=a}a=Du(u),e.defaultValue=a,t=e.textContent,t===a&&t!==""&&t!==null&&(e.value=t),xt(e)}function Se(e,u){if(u){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=u;return}}e.textContent=u}var cl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function a0(e,u,a){var t=u.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?t?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="":t?e.setProperty(u,a):typeof a!="number"||a===0||cl.has(u)?u==="float"?e.cssFloat=a:e[u]=(""+a).trim():e[u]=a+"px"}function ai(e,u,a){if(u!=null&&typeof u!="object")throw Error(d(62));if(e=e.style,a!=null){for(var t in a)!a.hasOwnProperty(t)||u!=null&&u.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var i in u)t=u[i],u.hasOwnProperty(i)&&a[i]!==t&&a0(e,i,t)}else for(var r in u)u.hasOwnProperty(r)&&a0(e,r,u[r])}function Ka(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(e){return O0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vu(){}var Ca=null;function M0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oa=null,Ma=null;function Da(e){var u=E0(e);if(u&&(e=u.stateNode)){var a=e[yu]||null;e:switch(e=u.stateNode,u.type){case"input":if(Fe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),u=a.name,a.type==="radio"&&u!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+$u(""+u)+'"][type="radio"]'),u=0;u<a.length;u++){var t=a[u];if(t!==e&&t.form===e.form){var i=t[yu]||null;if(!i)throw Error(d(90));Fe(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(u=0;u<a.length;u++)t=a[u],t.form===e.form&&ui(t)}break e;case"textarea":Me(e,a.value,a.defaultValue);break e;case"select":u=a.value,u!=null&&q0(e,!!a.multiple,u,!1)}}}var t0=!1;function _a(e,u,a){if(t0)return e(u,a);t0=!0;try{var t=e(u);return t}finally{if(t0=!1,(Oa!==null||Ma!==null)&&(Wl(),Oa&&(u=Oa,e=Ma,Ma=Oa=null,Da(u),e)))for(u=0;u<e.length;u++)Da(e[u])}}function Ze(e,u){var a=e.stateNode;if(a===null)return null;var t=a[yu]||null;if(t===null)return null;a=t[u];e:switch(u){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,u,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xt=!1;if(ia)try{var gt={};Object.defineProperty(gt,"passive",{get:function(){Xt=!0}}),window.addEventListener("test",gt,gt),window.removeEventListener("test",gt,gt)}catch{Xt=!1}var Ua=null,la=null,Ya=null;function fl(){if(Ya)return Ya;var e,u=la,a=u.length,t,i="value"in Ua?Ua.value:Ua.textContent,r=i.length;for(e=0;e<a&&u[e]===i[e];e++);var b=a-e;for(t=1;t<=b&&u[a-t]===i[r-t];t++);return Ya=i.slice(e,1<t?1-t:void 0)}function D0(e){var u=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&u===13&&(e=13)):e=u,e===10&&(e=13),32<=e||e===13?e:0}function _0(){return!0}function It(){return!1}function ku(e){function u(a,t,i,r,b){this._reactName=a,this._targetInst=i,this.type=t,this.nativeEvent=r,this.target=b,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(r):r[g]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?_0:It,this.isPropagationStopped=It,this}return S(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_0)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_0)},persist:function(){},isPersistent:_0}),u}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vt=ku(Qa),U0=S({},Qa,{view:0,detail:0}),Ys=ku(U0),ti,n0,L0,p=S({},U0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==L0&&(L0&&e.type==="mousemove"?(ti=e.screenX-L0.screenX,n0=e.screenY-L0.screenY):n0=ti=0,L0=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:n0}}),s=ku(p),f=S({},p,{dataTransfer:0}),h=ku(f),y=S({},U0,{relatedTarget:0}),z=ku(y),M=S({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),H=ku(M),J=S({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W=ku(J),ae=S({},Qa,{data:0}),xe=ku(ae),fe={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Re={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ju(e){var u=this.nativeEvent;return u.getModifierState?u.getModifierState(e):(e=eu[e])?!!u[e]:!1}function wu(){return ju}var Qu=S({},U0,{key:function(e){if(e.key){var u=fe[e.key]||e.key;if(u!=="Unidentified")return u}return e.type==="keypress"?(e=D0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Re[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?D0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?D0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),en=ku(Qu),B0=S({},p,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yt=ku(B0),I=S({},U0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),de=ku(I),Pe=S({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),sa=ku(Pe),ra=S({},p,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nu=ku(ra),ml=S({},Qa,{newState:0,oldState:0}),ym=ku(ml),km=[9,13,27,32],Qs=ia&&"CompositionEvent"in window,ni=null;ia&&"documentMode"in document&&(ni=document.documentMode);var jm=ia&&"TextEvent"in window&&!ni,go=ia&&(!Qs||ni&&8<ni&&11>=ni),vo=" ",yo=!1;function ko(e,u){switch(e){case"keyup":return km.indexOf(u.keyCode)!==-1;case"keydown":return u.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function wm(e,u){switch(e){case"compositionend":return jo(u);case"keypress":return u.which!==32?null:(yo=!0,vo);case"textInput":return e=u.data,e===vo&&yo?null:e;default:return null}}function zm(e,u){if(un)return e==="compositionend"||!Qs&&ko(e,u)?(e=fl(),Ya=la=Ua=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(u.ctrlKey||u.altKey||u.metaKey)||u.ctrlKey&&u.altKey){if(u.char&&1<u.char.length)return u.char;if(u.which)return String.fromCharCode(u.which)}return null;case"compositionend":return go&&u.locale!=="ko"?null:u.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wo(e){var u=e&&e.nodeName&&e.nodeName.toLowerCase();return u==="input"?!!Sm[e.type]:u==="textarea"}function zo(e,u,a,t){Oa?Ma?Ma.push(t):Ma=[t]:Oa=t,u=as(u,"onChange"),0<u.length&&(a=new vt("onChange","change",null,a,t),e.push({event:a,listeners:u}))}var ii=null,li=null;function Rm(e){l3(e,0)}function bl(e){var u=ht(e);if(ui(u))return e}function So(e,u){if(e==="change")return u}var Ro=!1;if(ia){var Js;if(ia){var Gs="oninput"in document;if(!Gs){var No=document.createElement("div");No.setAttribute("oninput","return;"),Gs=typeof No.oninput=="function"}Js=Gs}else Js=!1;Ro=Js&&(!document.documentMode||9<document.documentMode)}function Ao(){ii&&(ii.detachEvent("onpropertychange",Eo),li=ii=null)}function Eo(e){if(e.propertyName==="value"&&bl(li)){var u=[];zo(u,li,e,M0(e)),_a(Rm,u)}}function Nm(e,u,a){e==="focusin"?(Ao(),ii=u,li=a,ii.attachEvent("onpropertychange",Eo)):e==="focusout"&&Ao()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(li)}function Em(e,u){if(e==="click")return bl(u)}function Tm(e,u){if(e==="input"||e==="change")return bl(u)}function qm(e,u){return e===u&&(e!==0||1/e===1/u)||e!==e&&u!==u}var oa=typeof Object.is=="function"?Object.is:qm;function si(e,u){if(oa(e,u))return!0;if(typeof e!="object"||e===null||typeof u!="object"||u===null)return!1;var a=Object.keys(e),t=Object.keys(u);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var i=a[t];if(!Qn.call(u,i)||!oa(e[i],u[i]))return!1}return!0}function To(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qo(e,u){var a=To(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=u&&t>=u)return{node:a,offset:u-e};e=t}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=To(a)}}function Co(e,u){return e&&u?e===u?!0:e&&e.nodeType===3?!1:u&&u.nodeType===3?Co(e,u.parentNode):"contains"in e?e.contains(u):e.compareDocumentPosition?!!(e.compareDocumentPosition(u)&16):!1:!1}function Oo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var u=u0(e.document);u instanceof e.HTMLIFrameElement;){try{var a=typeof u.contentWindow.location.href=="string"}catch{a=!1}if(a)e=u.contentWindow;else break;u=u0(e.document)}return u}function Ws(e){var u=e&&e.nodeName&&e.nodeName.toLowerCase();return u&&(u==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||u==="textarea"||e.contentEditable==="true")}var Cm=ia&&"documentMode"in document&&11>=document.documentMode,an=null,Zs=null,ri=null,Ps=!1;function Mo(e,u,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ps||an==null||an!==u0(t)||(t=an,"selectionStart"in t&&Ws(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ri&&si(ri,t)||(ri=t,t=as(Zs,"onSelect"),0<t.length&&(u=new vt("onSelect","select",null,u,a),e.push({event:u,listeners:t}),u.target=an)))}function kt(e,u){var a={};return a[e.toLowerCase()]=u.toLowerCase(),a["Webkit"+e]="webkit"+u,a["Moz"+e]="moz"+u,a}var tn={animationend:kt("Animation","AnimationEnd"),animationiteration:kt("Animation","AnimationIteration"),animationstart:kt("Animation","AnimationStart"),transitionrun:kt("Transition","TransitionRun"),transitionstart:kt("Transition","TransitionStart"),transitioncancel:kt("Transition","TransitionCancel"),transitionend:kt("Transition","TransitionEnd")},Xs={},Do={};ia&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function jt(e){if(Xs[e])return Xs[e];if(!tn[e])return e;var u=tn[e],a;for(a in u)if(u.hasOwnProperty(a)&&a in Do)return Xs[e]=u[a];return e}var _o=jt("animationend"),Uo=jt("animationiteration"),Lo=jt("animationstart"),Om=jt("transitionrun"),Mm=jt("transitionstart"),Dm=jt("transitioncancel"),Bo=jt("transitionend"),Fo=new Map,Is="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Is.push("scrollEnd");function La(e,u){Fo.set(e,u),ze(u,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var u=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(u))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pa=[],nn=0,er=0;function pl(){for(var e=nn,u=er=nn=0;u<e;){var a=pa[u];pa[u++]=null;var t=pa[u];pa[u++]=null;var i=pa[u];pa[u++]=null;var r=pa[u];if(pa[u++]=null,t!==null&&i!==null){var b=t.pending;b===null?i.next=i:(i.next=b.next,b.next=i),t.pending=i}r!==0&&Ho(a,i,r)}}function xl(e,u,a,t){pa[nn++]=e,pa[nn++]=u,pa[nn++]=a,pa[nn++]=t,er|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function ur(e,u,a,t){return xl(e,u,a,t),gl(e)}function wt(e,u){return xl(e,null,null,u),gl(e)}function Ho(e,u,a){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,t=r.alternate,t!==null&&(t.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&u!==null&&(i=31-Mu(a),e=r.hiddenUpdates,t=e[i],t===null?e[i]=[u]:t.push(u),u.lane=a|536870912),r):null}function gl(e){if(50<Ti)throw Ti=0,c4=null,Error(d(185));for(var u=e.return;u!==null;)e=u,u=e.return;return e.tag===3?e.stateNode:null}var ln={};function _m(e,u,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=u,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(e,u,a,t){return new _m(e,u,a,t)}function ar(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i0(e,u){var a=e.alternate;return a===null?(a=ca(e.tag,u,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=u,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,u=e.dependencies,a.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $o(e,u){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=u,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,u=a.dependencies,e.dependencies=u===null?null:{lanes:u.lanes,firstContext:u.firstContext}),e}function vl(e,u,a,t,i,r){var b=0;if(t=e,typeof e=="function")ar(e)&&(b=1);else if(typeof e=="string")b=H5(e,a,uu.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=ca(31,a,u,i),e.elementType=he,e.lanes=r,e;case _:return zt(a.children,i,r,u);case C:b=8,i|=24;break;case Z:return e=ca(12,a,u,i|2),e.elementType=Z,e.lanes=r,e;case me:return e=ca(13,a,u,i),e.elementType=me,e.lanes=r,e;case ce:return e=ca(19,a,u,i),e.elementType=ce,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:b=10;break e;case ee:b=9;break e;case ue:b=11;break e;case P:b=14;break e;case D:b=16,t=null;break e}b=29,a=Error(d(130,e===null?"null":typeof e,"")),t=null}return u=ca(b,a,u,i),u.elementType=e,u.type=t,u.lanes=r,u}function zt(e,u,a,t){return e=ca(7,e,t,u),e.lanes=a,e}function tr(e,u,a){return e=ca(6,e,null,u),e.lanes=a,e}function Vo(e){var u=ca(18,null,null,0);return u.stateNode=e,u}function nr(e,u,a){return u=ca(4,e.children!==null?e.children:[],e.key,u),u.lanes=a,u.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},u}var Ko=new WeakMap;function xa(e,u){if(typeof e=="object"&&e!==null){var a=Ko.get(e);return a!==void 0?a:(u={value:e,source:u,stack:Yn(u)},Ko.set(e,u),u)}return{value:e,source:u,stack:Yn(u)}}var sn=[],rn=0,yl=null,oi=0,ga=[],va=0,F0=null,Ja=1,Ga="";function l0(e,u){sn[rn++]=oi,sn[rn++]=yl,yl=e,oi=u}function Yo(e,u,a){ga[va++]=Ja,ga[va++]=Ga,ga[va++]=F0,F0=e;var t=Ja;e=Ga;var i=32-Mu(t)-1;t&=~(1<<i),a+=1;var r=32-Mu(u)+i;if(30<r){var b=i-i%5;r=(t&(1<<b)-1).toString(32),t>>=b,i-=b,Ja=1<<32-Mu(u)+i|a<<i|t,Ga=r+e}else Ja=1<<r|a<<i|t,Ga=e}function ir(e){e.return!==null&&(l0(e,1),Yo(e,1,0))}function lr(e){for(;e===yl;)yl=sn[--rn],sn[rn]=null,oi=sn[--rn],sn[rn]=null;for(;e===F0;)F0=ga[--va],ga[va]=null,Ga=ga[--va],ga[va]=null,Ja=ga[--va],ga[va]=null}function Qo(e,u){ga[va++]=Ja,ga[va++]=Ga,ga[va++]=F0,Ja=u.id,Ga=u.overflow,F0=e}var Au=null,au=null,Te=!1,H0=null,ya=!1,sr=Error(d(519));function $0(e){var u=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ci(xa(u,e)),sr}function Jo(e){var u=e.stateNode,a=e.type,t=e.memoizedProps;switch(u[fu]=e,u[yu]=t,a){case"dialog":je("cancel",u),je("close",u);break;case"iframe":case"object":case"embed":je("load",u);break;case"video":case"audio":for(a=0;a<Ci.length;a++)je(Ci[a],u);break;case"source":je("error",u);break;case"img":case"image":case"link":je("error",u),je("load",u);break;case"details":je("toggle",u);break;case"input":je("invalid",u),ol(u,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":je("invalid",u);break;case"textarea":je("invalid",u),C0(u,t.value,t.defaultValue,t.children)}a=t.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||u.textContent===""+a||t.suppressHydrationWarning===!0||c3(u.textContent,a)?(t.popover!=null&&(je("beforetoggle",u),je("toggle",u)),t.onScroll!=null&&je("scroll",u),t.onScrollEnd!=null&&je("scrollend",u),t.onClick!=null&&(u.onclick=Vu),u=!0):u=!1,u||$0(e,!0)}function Go(e){for(Au=e.return;Au;)switch(Au.tag){case 5:case 31:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:Au=Au.return}}function on(e){if(e!==Au)return!1;if(!Te)return Go(e),Te=!0,!1;var u=e.tag,a;if((a=u!==3&&u!==27)&&((a=u===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||S4(e.type,e.memoizedProps)),a=!a),a&&au&&$0(e),Go(e),u===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));au=v3(e)}else if(u===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));au=v3(e)}else u===27?(u=au,at(e.type)?(e=T4,T4=null,au=e):au=u):au=Au?ja(e.stateNode.nextSibling):null;return!0}function St(){au=Au=null,Te=!1}function rr(){var e=H0;return e!==null&&(Zu===null?Zu=e:Zu.push.apply(Zu,e),H0=null),e}function ci(e){H0===null?H0=[e]:H0.push(e)}var or=De(null),Rt=null,s0=null;function V0(e,u,a){we(or,u._currentValue),u._currentValue=a}function r0(e){e._currentValue=or.current,Oe(or)}function cr(e,u,a){for(;e!==null;){var t=e.alternate;if((e.childLanes&u)!==u?(e.childLanes|=u,t!==null&&(t.childLanes|=u)):t!==null&&(t.childLanes&u)!==u&&(t.childLanes|=u),e===a)break;e=e.return}}function dr(e,u,a,t){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var b=i.child;r=r.firstContext;e:for(;r!==null;){var g=r;r=i;for(var R=0;R<u.length;R++)if(g.context===u[R]){r.lanes|=a,g=r.alternate,g!==null&&(g.lanes|=a),cr(r.return,a,e),t||(b=null);break e}r=g.next}}else if(i.tag===18){if(b=i.return,b===null)throw Error(d(341));b.lanes|=a,r=b.alternate,r!==null&&(r.lanes|=a),cr(b,a,e),b=null}else b=i.child;if(b!==null)b.return=i;else for(b=i;b!==null;){if(b===e){b=null;break}if(i=b.sibling,i!==null){i.return=b.return,b=i;break}b=b.return}i=b}}function cn(e,u,a,t){e=null;for(var i=u,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var b=i.alternate;if(b===null)throw Error(d(387));if(b=b.memoizedProps,b!==null){var g=i.type;oa(i.pendingProps.value,b.value)||(e!==null?e.push(g):e=[g])}}else if(i===$t.current){if(b=i.alternate,b===null)throw Error(d(387));b.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ui):e=[Ui])}i=i.return}e!==null&&dr(u,e,a,t),u.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!oa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Nt(e){Rt=e,s0=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Eu(e){return Wo(Rt,e)}function jl(e,u){return Rt===null&&Nt(e),Wo(e,u)}function Wo(e,u){var a=u._currentValue;if(u={context:u,memoizedValue:a,next:null},s0===null){if(e===null)throw Error(d(308));s0=u,e.dependencies={lanes:0,firstContext:u},e.flags|=524288}else s0=s0.next=u;return a}var Um=typeof AbortController<"u"?AbortController:function(){var e=[],u=this.signal={aborted:!1,addEventListener:function(a,t){e.push(t)}};this.abort=function(){u.aborted=!0,e.forEach(function(a){return a()})}},Lm=l.unstable_scheduleCallback,Bm=l.unstable_NormalPriority,bu={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fr(){return{controller:new Um,data:new Map,refCount:0}}function di(e){e.refCount--,e.refCount===0&&Lm(Bm,function(){e.controller.abort()})}var fi=null,mr=0,dn=0,fn=null;function Fm(e,u){if(fi===null){var a=fi=[];mr=0,dn=p4(),fn={status:"pending",value:void 0,then:function(t){a.push(t)}}}return mr++,u.then(Zo,Zo),u}function Zo(){if(--mr===0&&fi!==null){fn!==null&&(fn.status="fulfilled");var e=fi;fi=null,dn=0,fn=null;for(var u=0;u<e.length;u++)(0,e[u])()}}function Hm(e,u){var a=[],t={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){t.status="fulfilled",t.value=u;for(var i=0;i<a.length;i++)(0,a[i])(u)},function(i){for(t.status="rejected",t.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),t}var Po=V.S;V.S=function(e,u){Md=Ou(),typeof u=="object"&&u!==null&&typeof u.then=="function"&&Fm(e,u),Po!==null&&Po(e,u)};var At=De(null);function br(){var e=At.current;return e!==null?e:Xe.pooledCache}function wl(e,u){u===null?we(At,At.current):we(At,u.pool)}function Xo(){var e=br();return e===null?null:{parent:bu._currentValue,pool:e}}var mn=Error(d(460)),hr=Error(d(474)),zl=Error(d(542)),Sl={then:function(){}};function Io(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ec(e,u,a){switch(a=e[a],a===void 0?e.push(u):a!==u&&(u.then(Vu,Vu),u=a),u.status){case"fulfilled":return u.value;case"rejected":throw e=u.reason,ac(e),e;default:if(typeof u.status=="string")u.then(Vu,Vu);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=u,e.status="pending",e.then(function(t){if(u.status==="pending"){var i=u;i.status="fulfilled",i.value=t}},function(t){if(u.status==="pending"){var i=u;i.status="rejected",i.reason=t}})}switch(u.status){case"fulfilled":return u.value;case"rejected":throw e=u.reason,ac(e),e}throw Tt=u,mn}}function Et(e){try{var u=e._init;return u(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tt=a,mn):a}}var Tt=null;function uc(){if(Tt===null)throw Error(d(459));var e=Tt;return Tt=null,e}function ac(e){if(e===mn||e===zl)throw Error(d(483))}var bn=null,mi=0;function Rl(e){var u=mi;return mi+=1,bn===null&&(bn=[]),ec(bn,e,u)}function bi(e,u){u=u.props.ref,e.ref=u!==void 0?u:null}function Nl(e,u){throw u.$$typeof===q?Error(d(525)):(e=Object.prototype.toString.call(u),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":e)))}function tc(e){function u(O,E){if(e){var U=O.deletions;U===null?(O.deletions=[E],O.flags|=16):U.push(E)}}function a(O,E){if(!e)return null;for(;E!==null;)u(O,E),E=E.sibling;return null}function t(O){for(var E=new Map;O!==null;)O.key!==null?E.set(O.key,O):E.set(O.index,O),O=O.sibling;return E}function i(O,E){return O=i0(O,E),O.index=0,O.sibling=null,O}function r(O,E,U){return O.index=U,e?(U=O.alternate,U!==null?(U=U.index,U<E?(O.flags|=67108866,E):U):(O.flags|=67108866,E)):(O.flags|=1048576,E)}function b(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function g(O,E,U,Q){return E===null||E.tag!==6?(E=tr(U,O.mode,Q),E.return=O,E):(E=i(E,U),E.return=O,E)}function R(O,E,U,Q){var se=U.type;return se===_?Y(O,E,U.props.children,Q,U.key):E!==null&&(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&Et(se)===E.type)?(E=i(E,U.props),bi(E,U),E.return=O,E):(E=vl(U.type,U.key,U.props,null,O.mode,Q),bi(E,U),E.return=O,E)}function L(O,E,U,Q){return E===null||E.tag!==4||E.stateNode.containerInfo!==U.containerInfo||E.stateNode.implementation!==U.implementation?(E=nr(U,O.mode,Q),E.return=O,E):(E=i(E,U.children||[]),E.return=O,E)}function Y(O,E,U,Q,se){return E===null||E.tag!==7?(E=zt(U,O.mode,Q,se),E.return=O,E):(E=i(E,U),E.return=O,E)}function G(O,E,U){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=tr(""+E,O.mode,U),E.return=O,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case K:return U=vl(E.type,E.key,E.props,null,O.mode,U),bi(U,E),U.return=O,U;case A:return E=nr(E,O.mode,U),E.return=O,E;case D:return E=Et(E),G(O,E,U)}if(Lu(E)||Ce(E))return E=zt(E,O.mode,U,null),E.return=O,E;if(typeof E.then=="function")return G(O,Rl(E),U);if(E.$$typeof===ne)return G(O,jl(O,E),U);Nl(O,E)}return null}function B(O,E,U,Q){var se=E!==null?E.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return se!==null?null:g(O,E,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case K:return U.key===se?R(O,E,U,Q):null;case A:return U.key===se?L(O,E,U,Q):null;case D:return U=Et(U),B(O,E,U,Q)}if(Lu(U)||Ce(U))return se!==null?null:Y(O,E,U,Q,null);if(typeof U.then=="function")return B(O,E,Rl(U),Q);if(U.$$typeof===ne)return B(O,E,jl(O,U),Q);Nl(O,U)}return null}function $(O,E,U,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return O=O.get(U)||null,g(E,O,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case K:return O=O.get(Q.key===null?U:Q.key)||null,R(E,O,Q,se);case A:return O=O.get(Q.key===null?U:Q.key)||null,L(E,O,Q,se);case D:return Q=Et(Q),$(O,E,U,Q,se)}if(Lu(Q)||Ce(Q))return O=O.get(U)||null,Y(E,O,Q,se,null);if(typeof Q.then=="function")return $(O,E,U,Rl(Q),se);if(Q.$$typeof===ne)return $(O,E,U,jl(E,Q),se);Nl(E,Q)}return null}function te(O,E,U,Q){for(var se=null,_e=null,ie=E,ge=E=0,Ae=null;ie!==null&&ge<U.length;ge++){ie.index>ge?(Ae=ie,ie=null):Ae=ie.sibling;var Ue=B(O,ie,U[ge],Q);if(Ue===null){ie===null&&(ie=Ae);break}e&&ie&&Ue.alternate===null&&u(O,ie),E=r(Ue,E,ge),_e===null?se=Ue:_e.sibling=Ue,_e=Ue,ie=Ae}if(ge===U.length)return a(O,ie),Te&&l0(O,ge),se;if(ie===null){for(;ge<U.length;ge++)ie=G(O,U[ge],Q),ie!==null&&(E=r(ie,E,ge),_e===null?se=ie:_e.sibling=ie,_e=ie);return Te&&l0(O,ge),se}for(ie=t(ie);ge<U.length;ge++)Ae=$(ie,O,ge,U[ge],Q),Ae!==null&&(e&&Ae.alternate!==null&&ie.delete(Ae.key===null?ge:Ae.key),E=r(Ae,E,ge),_e===null?se=Ae:_e.sibling=Ae,_e=Ae);return e&&ie.forEach(function(st){return u(O,st)}),Te&&l0(O,ge),se}function re(O,E,U,Q){if(U==null)throw Error(d(151));for(var se=null,_e=null,ie=E,ge=E=0,Ae=null,Ue=U.next();ie!==null&&!Ue.done;ge++,Ue=U.next()){ie.index>ge?(Ae=ie,ie=null):Ae=ie.sibling;var st=B(O,ie,Ue.value,Q);if(st===null){ie===null&&(ie=Ae);break}e&&ie&&st.alternate===null&&u(O,ie),E=r(st,E,ge),_e===null?se=st:_e.sibling=st,_e=st,ie=Ae}if(Ue.done)return a(O,ie),Te&&l0(O,ge),se;if(ie===null){for(;!Ue.done;ge++,Ue=U.next())Ue=G(O,Ue.value,Q),Ue!==null&&(E=r(Ue,E,ge),_e===null?se=Ue:_e.sibling=Ue,_e=Ue);return Te&&l0(O,ge),se}for(ie=t(ie);!Ue.done;ge++,Ue=U.next())Ue=$(ie,O,ge,Ue.value,Q),Ue!==null&&(e&&Ue.alternate!==null&&ie.delete(Ue.key===null?ge:Ue.key),E=r(Ue,E,ge),_e===null?se=Ue:_e.sibling=Ue,_e=Ue);return e&&ie.forEach(function(X5){return u(O,X5)}),Te&&l0(O,ge),se}function Qe(O,E,U,Q){if(typeof U=="object"&&U!==null&&U.type===_&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case K:e:{for(var se=U.key;E!==null;){if(E.key===se){if(se=U.type,se===_){if(E.tag===7){a(O,E.sibling),Q=i(E,U.props.children),Q.return=O,O=Q;break e}}else if(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===D&&Et(se)===E.type){a(O,E.sibling),Q=i(E,U.props),bi(Q,U),Q.return=O,O=Q;break e}a(O,E);break}else u(O,E);E=E.sibling}U.type===_?(Q=zt(U.props.children,O.mode,Q,U.key),Q.return=O,O=Q):(Q=vl(U.type,U.key,U.props,null,O.mode,Q),bi(Q,U),Q.return=O,O=Q)}return b(O);case A:e:{for(se=U.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===U.containerInfo&&E.stateNode.implementation===U.implementation){a(O,E.sibling),Q=i(E,U.children||[]),Q.return=O,O=Q;break e}else{a(O,E);break}else u(O,E);E=E.sibling}Q=nr(U,O.mode,Q),Q.return=O,O=Q}return b(O);case D:return U=Et(U),Qe(O,E,U,Q)}if(Lu(U))return te(O,E,U,Q);if(Ce(U)){if(se=Ce(U),typeof se!="function")throw Error(d(150));return U=se.call(U),re(O,E,U,Q)}if(typeof U.then=="function")return Qe(O,E,Rl(U),Q);if(U.$$typeof===ne)return Qe(O,E,jl(O,U),Q);Nl(O,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,E!==null&&E.tag===6?(a(O,E.sibling),Q=i(E,U),Q.return=O,O=Q):(a(O,E),Q=tr(U,O.mode,Q),Q.return=O,O=Q),b(O)):a(O,E)}return function(O,E,U,Q){try{mi=0;var se=Qe(O,E,U,Q);return bn=null,se}catch(ie){if(ie===mn||ie===zl)throw ie;var _e=ca(29,ie,null,O.mode);return _e.lanes=Q,_e.return=O,_e}}}var qt=tc(!0),nc=tc(!1),K0=!1;function pr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xr(e,u){e=e.updateQueue,u.updateQueue===e&&(u.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Y0(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Q0(e,u,a){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(Be&2)!==0){var i=t.pending;return i===null?u.next=u:(u.next=i.next,i.next=u),t.pending=u,u=gl(e),Ho(e,null,a),u}return xl(e,t,u,a),gl(e)}function hi(e,u,a){if(u=u.updateQueue,u!==null&&(u=u.shared,(a&4194048)!==0)){var t=u.lanes;t&=e.pendingLanes,a|=t,u.lanes=a,Wn(e,a)}}function gr(e,u){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=b:r=r.next=b,a=a.next}while(a!==null);r===null?i=r=u:r=r.next=u}else i=r=u;a={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:t.shared,callbacks:t.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=u:e.next=u,a.lastBaseUpdate=u}var vr=!1;function pi(){if(vr){var e=fn;if(e!==null)throw e}}function xi(e,u,a,t){vr=!1;var i=e.updateQueue;K0=!1;var r=i.firstBaseUpdate,b=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var R=g,L=R.next;R.next=null,b===null?r=L:b.next=L,b=R;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,g=Y.lastBaseUpdate,g!==b&&(g===null?Y.firstBaseUpdate=L:g.next=L,Y.lastBaseUpdate=R))}if(r!==null){var G=i.baseState;b=0,Y=L=R=null,g=r;do{var B=g.lane&-536870913,$=B!==g.lane;if($?(Ne&B)===B:(t&B)===B){B!==0&&B===dn&&(vr=!0),Y!==null&&(Y=Y.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var te=e,re=g;B=u;var Qe=a;switch(re.tag){case 1:if(te=re.payload,typeof te=="function"){G=te.call(Qe,G,B);break e}G=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=re.payload,B=typeof te=="function"?te.call(Qe,G,B):te,B==null)break e;G=S({},G,B);break e;case 2:K0=!0}}B=g.callback,B!==null&&(e.flags|=64,$&&(e.flags|=8192),$=i.callbacks,$===null?i.callbacks=[B]:$.push(B))}else $={lane:B,tag:g.tag,payload:g.payload,callback:g.callback,next:null},Y===null?(L=Y=$,R=G):Y=Y.next=$,b|=B;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;$=g,g=$.next,$.next=null,i.lastBaseUpdate=$,i.shared.pending=null}}while(!0);Y===null&&(R=G),i.baseState=R,i.firstBaseUpdate=L,i.lastBaseUpdate=Y,r===null&&(i.shared.lanes=0),P0|=b,e.lanes=b,e.memoizedState=G}}function ic(e,u){if(typeof e!="function")throw Error(d(191,e));e.call(u)}function lc(e,u){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ic(a[e],u)}var hn=De(null),Al=De(0);function sc(e,u){e=x0,we(Al,e),we(hn,u),x0=e|u.baseLanes}function yr(){we(Al,x0),we(hn,hn.current)}function kr(){x0=Al.current,Oe(hn),Oe(Al)}var da=De(null),ka=null;function J0(e){var u=e.alternate;we(cu,cu.current&1),we(da,e),ka===null&&(u===null||hn.current!==null||u.memoizedState!==null)&&(ka=e)}function jr(e){we(cu,cu.current),we(da,e),ka===null&&(ka=e)}function rc(e){e.tag===22?(we(cu,cu.current),we(da,e),ka===null&&(ka=e)):G0()}function G0(){we(cu,cu.current),we(da,da.current)}function fa(e){Oe(da),ka===e&&(ka=null),Oe(cu)}var cu=De(0);function El(e){for(var u=e;u!==null;){if(u.tag===13){var a=u.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||A4(a)||E4(a)))return u}else if(u.tag===19&&(u.memoizedProps.revealOrder==="forwards"||u.memoizedProps.revealOrder==="backwards"||u.memoizedProps.revealOrder==="unstable_legacy-backwards"||u.memoizedProps.revealOrder==="together")){if((u.flags&128)!==0)return u}else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break;for(;u.sibling===null;){if(u.return===null||u.return===e)return null;u=u.return}u.sibling.return=u.return,u=u.sibling}return null}var o0=0,pe=null,Ke=null,hu=null,Tl=!1,pn=!1,Ct=!1,ql=0,gi=0,xn=null,$m=0;function su(){throw Error(d(321))}function wr(e,u){if(u===null)return!1;for(var a=0;a<u.length&&a<e.length;a++)if(!oa(e[a],u[a]))return!1;return!0}function zr(e,u,a,t,i,r){return o0=r,pe=u,u.memoizedState=null,u.updateQueue=null,u.lanes=0,V.H=e===null||e.memoizedState===null?Yc:Br,Ct=!1,r=a(t,i),Ct=!1,pn&&(r=cc(u,a,t,i)),oc(e),r}function oc(e){V.H=ki;var u=Ke!==null&&Ke.next!==null;if(o0=0,hu=Ke=pe=null,Tl=!1,gi=0,xn=null,u)throw Error(d(300));e===null||pu||(e=e.dependencies,e!==null&&kl(e)&&(pu=!0))}function cc(e,u,a,t){pe=e;var i=0;do{if(pn&&(xn=null),gi=0,pn=!1,25<=i)throw Error(d(301));if(i+=1,hu=Ke=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}V.H=Qc,r=u(a,t)}while(pn);return r}function Vm(){var e=V.H,u=e.useState()[0];return u=typeof u.then=="function"?vi(u):u,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(pe.flags|=1024),u}function Sr(){var e=ql!==0;return ql=0,e}function Rr(e,u,a){u.updateQueue=e.updateQueue,u.flags&=-2053,e.lanes&=~a}function Nr(e){if(Tl){for(e=e.memoizedState;e!==null;){var u=e.queue;u!==null&&(u.pending=null),e=e.next}Tl=!1}o0=0,hu=Ke=pe=null,pn=!1,gi=ql=0,xn=null}function Ku(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hu===null?pe.memoizedState=hu=e:hu=hu.next=e,hu}function du(){if(Ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var u=hu===null?pe.memoizedState:hu.next;if(u!==null)hu=u,Ke=e;else{if(e===null)throw pe.alternate===null?Error(d(467)):Error(d(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},hu===null?pe.memoizedState=hu=e:hu=hu.next=e}return hu}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vi(e){var u=gi;return gi+=1,xn===null&&(xn=[]),e=ec(xn,e,u),u=pe,(hu===null?u.memoizedState:hu.next)===null&&(u=u.alternate,V.H=u===null||u.memoizedState===null?Yc:Br),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vi(e);if(e.$$typeof===ne)return Eu(e)}throw Error(d(438,String(e)))}function Ar(e){var u=null,a=pe.updateQueue;if(a!==null&&(u=a.memoCache),u==null){var t=pe.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(u={data:t.data.map(function(i){return i.slice()}),index:0})))}if(u==null&&(u={data:[],index:0}),a===null&&(a=Cl(),pe.updateQueue=a),a.memoCache=u,a=u.data[u.index],a===void 0)for(a=u.data[u.index]=Array(e),t=0;t<e;t++)a[t]=Ie;return u.index++,a}function c0(e,u){return typeof u=="function"?u(e):u}function Ml(e){var u=du();return Er(u,Ke,e)}function Er(e,u,a){var t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=a;var i=e.baseQueue,r=t.pending;if(r!==null){if(i!==null){var b=i.next;i.next=r.next,r.next=b}u.baseQueue=i=r,t.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{u=i.next;var g=b=null,R=null,L=u,Y=!1;do{var G=L.lane&-536870913;if(G!==L.lane?(Ne&G)===G:(o0&G)===G){var B=L.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),G===dn&&(Y=!0);else if((o0&B)===B){L=L.next,B===dn&&(Y=!0);continue}else G={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(g=R=G,b=r):R=R.next=G,pe.lanes|=B,P0|=B;G=L.action,Ct&&a(r,G),r=L.hasEagerState?L.eagerState:a(r,G)}else B={lane:G,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(g=R=B,b=r):R=R.next=B,pe.lanes|=G,P0|=G;L=L.next}while(L!==null&&L!==u);if(R===null?b=r:R.next=g,!oa(r,e.memoizedState)&&(pu=!0,Y&&(a=fn,a!==null)))throw a;e.memoizedState=r,e.baseState=b,e.baseQueue=R,t.lastRenderedState=r}return i===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function Tr(e){var u=du(),a=u.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var t=a.dispatch,i=a.pending,r=u.memoizedState;if(i!==null){a.pending=null;var b=i=i.next;do r=e(r,b.action),b=b.next;while(b!==i);oa(r,u.memoizedState)||(pu=!0),u.memoizedState=r,u.baseQueue===null&&(u.baseState=r),a.lastRenderedState=r}return[r,t]}function dc(e,u,a){var t=pe,i=du(),r=Te;if(r){if(a===void 0)throw Error(d(407));a=a()}else a=u();var b=!oa((Ke||i).memoizedState,a);if(b&&(i.memoizedState=a,pu=!0),i=i.queue,Or(bc.bind(null,t,i,e),[e]),i.getSnapshot!==u||b||hu!==null&&hu.memoizedState.tag&1){if(t.flags|=2048,gn(9,{destroy:void 0},mc.bind(null,t,i,a,u),null),Xe===null)throw Error(d(349));r||(o0&127)!==0||fc(t,u,a)}return a}function fc(e,u,a){e.flags|=16384,e={getSnapshot:u,value:a},u=pe.updateQueue,u===null?(u=Cl(),pe.updateQueue=u,u.stores=[e]):(a=u.stores,a===null?u.stores=[e]:a.push(e))}function mc(e,u,a,t){u.value=a,u.getSnapshot=t,hc(u)&&pc(e)}function bc(e,u,a){return a(function(){hc(u)&&pc(e)})}function hc(e){var u=e.getSnapshot;e=e.value;try{var a=u();return!oa(e,a)}catch{return!0}}function pc(e){var u=wt(e,2);u!==null&&Pu(u,e,2)}function qr(e){var u=Ku();if(typeof e=="function"){var a=e;if(e=a(),Ct){Hu(!0);try{a()}finally{Hu(!1)}}}return u.memoizedState=u.baseState=e,u.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:e},u}function xc(e,u,a,t){return e.baseState=a,Er(e,Ke,typeof t=="function"?t:c0)}function Km(e,u,a,t,i){if(Ul(e))throw Error(d(485));if(e=u.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){r.listeners.push(b)}};V.T!==null?a(!0):r.isTransition=!1,t(r),a=u.pending,a===null?(r.next=u.pending=r,gc(u,r)):(r.next=a.next,u.pending=a.next=r)}}function gc(e,u){var a=u.action,t=u.payload,i=e.state;if(u.isTransition){var r=V.T,b={};V.T=b;try{var g=a(i,t),R=V.S;R!==null&&R(b,g),vc(e,u,g)}catch(L){Cr(e,u,L)}finally{r!==null&&b.types!==null&&(r.types=b.types),V.T=r}}else try{r=a(i,t),vc(e,u,r)}catch(L){Cr(e,u,L)}}function vc(e,u,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(t){yc(e,u,t)},function(t){return Cr(e,u,t)}):yc(e,u,a)}function yc(e,u,a){u.status="fulfilled",u.value=a,kc(u),e.state=a,u=e.pending,u!==null&&(a=u.next,a===u?e.pending=null:(a=a.next,u.next=a,gc(e,a)))}function Cr(e,u,a){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do u.status="rejected",u.reason=a,kc(u),u=u.next;while(u!==t)}e.action=null}function kc(e){e=e.listeners;for(var u=0;u<e.length;u++)(0,e[u])()}function jc(e,u){return u}function wc(e,u){if(Te){var a=Xe.formState;if(a!==null){e:{var t=pe;if(Te){if(au){u:{for(var i=au,r=ya;i.nodeType!==8;){if(!r){i=null;break u}if(i=ja(i.nextSibling),i===null){i=null;break u}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){au=ja(i.nextSibling),t=i.data==="F!";break e}}$0(t)}t=!1}t&&(u=a[0])}}return a=Ku(),a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jc,lastRenderedState:u},a.queue=t,a=$c.bind(null,pe,t),t.dispatch=a,t=qr(!1),r=Lr.bind(null,pe,!1,t.queue),t=Ku(),i={state:u,dispatch:null,action:e,pending:null},t.queue=i,a=Km.bind(null,pe,i,r,a),i.dispatch=a,t.memoizedState=e,[u,a,!1]}function zc(e){var u=du();return Sc(u,Ke,e)}function Sc(e,u,a){if(u=Er(e,u,jc)[0],e=Ml(c0)[0],typeof u=="object"&&u!==null&&typeof u.then=="function")try{var t=vi(u)}catch(b){throw b===mn?zl:b}else t=u;u=du();var i=u.queue,r=i.dispatch;return a!==u.memoizedState&&(pe.flags|=2048,gn(9,{destroy:void 0},Ym.bind(null,i,a),null)),[t,r,e]}function Ym(e,u){e.action=u}function Rc(e){var u=du(),a=Ke;if(a!==null)return Sc(u,a,e);du(),u=u.memoizedState,a=du();var t=a.queue.dispatch;return a.memoizedState=e,[u,t,!1]}function gn(e,u,a,t){return e={tag:e,create:a,deps:t,inst:u,next:null},u=pe.updateQueue,u===null&&(u=Cl(),pe.updateQueue=u),a=u.lastEffect,a===null?u.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,u.lastEffect=e),e}function Nc(){return du().memoizedState}function Dl(e,u,a,t){var i=Ku();pe.flags|=e,i.memoizedState=gn(1|u,{destroy:void 0},a,t===void 0?null:t)}function _l(e,u,a,t){var i=du();t=t===void 0?null:t;var r=i.memoizedState.inst;Ke!==null&&t!==null&&wr(t,Ke.memoizedState.deps)?i.memoizedState=gn(u,r,a,t):(pe.flags|=e,i.memoizedState=gn(1|u,r,a,t))}function Ac(e,u){Dl(8390656,8,e,u)}function Or(e,u){_l(2048,8,e,u)}function Qm(e){pe.flags|=4;var u=pe.updateQueue;if(u===null)u=Cl(),pe.updateQueue=u,u.events=[e];else{var a=u.events;a===null?u.events=[e]:a.push(e)}}function Ec(e){var u=du().memoizedState;return Qm({ref:u,nextImpl:e}),function(){if((Be&2)!==0)throw Error(d(440));return u.impl.apply(void 0,arguments)}}function Tc(e,u){return _l(4,2,e,u)}function qc(e,u){return _l(4,4,e,u)}function Cc(e,u){if(typeof u=="function"){e=e();var a=u(e);return function(){typeof a=="function"?a():u(null)}}if(u!=null)return e=e(),u.current=e,function(){u.current=null}}function Oc(e,u,a){a=a!=null?a.concat([e]):null,_l(4,4,Cc.bind(null,u,e),a)}function Mr(){}function Mc(e,u){var a=du();u=u===void 0?null:u;var t=a.memoizedState;return u!==null&&wr(u,t[1])?t[0]:(a.memoizedState=[e,u],e)}function Dc(e,u){var a=du();u=u===void 0?null:u;var t=a.memoizedState;if(u!==null&&wr(u,t[1]))return t[0];if(t=e(),Ct){Hu(!0);try{e()}finally{Hu(!1)}}return a.memoizedState=[t,u],t}function Dr(e,u,a){return a===void 0||(o0&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=u:(e.memoizedState=a,e=_d(),pe.lanes|=e,P0|=e,a)}function _c(e,u,a,t){return oa(a,u)?a:hn.current!==null?(e=Dr(e,a,t),oa(e,u)||(pu=!0),e):(o0&42)===0||(o0&1073741824)!==0&&(Ne&261930)===0?(pu=!0,e.memoizedState=a):(e=_d(),pe.lanes|=e,P0|=e,u)}function Uc(e,u,a,t,i){var r=X.p;X.p=r!==0&&8>r?r:8;var b=V.T,g={};V.T=g,Lr(e,!1,u,a);try{var R=i(),L=V.S;if(L!==null&&L(g,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var Y=Hm(R,t);yi(e,u,Y,ha(e))}else yi(e,u,t,ha(e))}catch(G){yi(e,u,{then:function(){},status:"rejected",reason:G},ha())}finally{X.p=r,b!==null&&g.types!==null&&(b.types=g.types),V.T=b}}function Jm(){}function _r(e,u,a,t){if(e.tag!==5)throw Error(d(476));var i=Lc(e).queue;Uc(e,i,u,le,a===null?Jm:function(){return Bc(e),a(t)})}function Lc(e){var u=e.memoizedState;if(u!==null)return u;u={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:le},next:null};var a={};return u.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:a},next:null},e.memoizedState=u,e=e.alternate,e!==null&&(e.memoizedState=u),u}function Bc(e){var u=Lc(e);u.next===null&&(u=e.alternate.memoizedState),yi(e,u.next.queue,{},ha())}function Ur(){return Eu(Ui)}function Fc(){return du().memoizedState}function Hc(){return du().memoizedState}function Gm(e){for(var u=e.return;u!==null;){switch(u.tag){case 24:case 3:var a=ha();e=Y0(a);var t=Q0(u,e,a);t!==null&&(Pu(t,u,a),hi(t,u,a)),u={cache:fr()},e.payload=u;return}u=u.return}}function Wm(e,u,a){var t=ha();a={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?Vc(u,a):(a=ur(e,u,a,t),a!==null&&(Pu(a,e,t),Kc(a,u,t)))}function $c(e,u,a){var t=ha();yi(e,u,a,t)}function yi(e,u,a,t){var i={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Vc(u,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=u.lastRenderedReducer,r!==null))try{var b=u.lastRenderedState,g=r(b,a);if(i.hasEagerState=!0,i.eagerState=g,oa(g,b))return xl(e,u,i,0),Xe===null&&pl(),!1}catch{}if(a=ur(e,u,i,t),a!==null)return Pu(a,e,t),Kc(a,u,t),!0}return!1}function Lr(e,u,a,t){if(t={lane:2,revertLane:p4(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(u)throw Error(d(479))}else u=ur(e,a,t,2),u!==null&&Pu(u,e,2)}function Ul(e){var u=e.alternate;return e===pe||u!==null&&u===pe}function Vc(e,u){pn=Tl=!0;var a=e.pending;a===null?u.next=u:(u.next=a.next,a.next=u),e.pending=u}function Kc(e,u,a){if((a&4194048)!==0){var t=u.lanes;t&=e.pendingLanes,a|=t,u.lanes=a,Wn(e,a)}}var ki={readContext:Eu,use:Ol,useCallback:su,useContext:su,useEffect:su,useImperativeHandle:su,useLayoutEffect:su,useInsertionEffect:su,useMemo:su,useReducer:su,useRef:su,useState:su,useDebugValue:su,useDeferredValue:su,useTransition:su,useSyncExternalStore:su,useId:su,useHostTransitionStatus:su,useFormState:su,useActionState:su,useOptimistic:su,useMemoCache:su,useCacheRefresh:su};ki.useEffectEvent=su;var Yc={readContext:Eu,use:Ol,useCallback:function(e,u){return Ku().memoizedState=[e,u===void 0?null:u],e},useContext:Eu,useEffect:Ac,useImperativeHandle:function(e,u,a){a=a!=null?a.concat([e]):null,Dl(4194308,4,Cc.bind(null,u,e),a)},useLayoutEffect:function(e,u){return Dl(4194308,4,e,u)},useInsertionEffect:function(e,u){Dl(4,2,e,u)},useMemo:function(e,u){var a=Ku();u=u===void 0?null:u;var t=e();if(Ct){Hu(!0);try{e()}finally{Hu(!1)}}return a.memoizedState=[t,u],t},useReducer:function(e,u,a){var t=Ku();if(a!==void 0){var i=a(u);if(Ct){Hu(!0);try{a(u)}finally{Hu(!1)}}}else i=u;return t.memoizedState=t.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},t.queue=e,e=e.dispatch=Wm.bind(null,pe,e),[t.memoizedState,e]},useRef:function(e){var u=Ku();return e={current:e},u.memoizedState=e},useState:function(e){e=qr(e);var u=e.queue,a=$c.bind(null,pe,u);return u.dispatch=a,[e.memoizedState,a]},useDebugValue:Mr,useDeferredValue:function(e,u){var a=Ku();return Dr(a,e,u)},useTransition:function(){var e=qr(!1);return e=Uc.bind(null,pe,e.queue,!0,!1),Ku().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,u,a){var t=pe,i=Ku();if(Te){if(a===void 0)throw Error(d(407));a=a()}else{if(a=u(),Xe===null)throw Error(d(349));(Ne&127)!==0||fc(t,u,a)}i.memoizedState=a;var r={value:a,getSnapshot:u};return i.queue=r,Ac(bc.bind(null,t,r,e),[e]),t.flags|=2048,gn(9,{destroy:void 0},mc.bind(null,t,r,a,u),null),a},useId:function(){var e=Ku(),u=Xe.identifierPrefix;if(Te){var a=Ga,t=Ja;a=(t&~(1<<32-Mu(t)-1)).toString(32)+a,u="_"+u+"R_"+a,a=ql++,0<a&&(u+="H"+a.toString(32)),u+="_"}else a=$m++,u="_"+u+"r_"+a.toString(32)+"_";return e.memoizedState=u},useHostTransitionStatus:Ur,useFormState:wc,useActionState:wc,useOptimistic:function(e){var u=Ku();u.memoizedState=u.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return u.queue=a,u=Lr.bind(null,pe,!0,a),a.dispatch=u,[e,u]},useMemoCache:Ar,useCacheRefresh:function(){return Ku().memoizedState=Gm.bind(null,pe)},useEffectEvent:function(e){var u=Ku(),a={impl:e};return u.memoizedState=a,function(){if((Be&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Br={readContext:Eu,use:Ol,useCallback:Mc,useContext:Eu,useEffect:Or,useImperativeHandle:Oc,useInsertionEffect:Tc,useLayoutEffect:qc,useMemo:Dc,useReducer:Ml,useRef:Nc,useState:function(){return Ml(c0)},useDebugValue:Mr,useDeferredValue:function(e,u){var a=du();return _c(a,Ke.memoizedState,e,u)},useTransition:function(){var e=Ml(c0)[0],u=du().memoizedState;return[typeof e=="boolean"?e:vi(e),u]},useSyncExternalStore:dc,useId:Fc,useHostTransitionStatus:Ur,useFormState:zc,useActionState:zc,useOptimistic:function(e,u){var a=du();return xc(a,Ke,e,u)},useMemoCache:Ar,useCacheRefresh:Hc};Br.useEffectEvent=Ec;var Qc={readContext:Eu,use:Ol,useCallback:Mc,useContext:Eu,useEffect:Or,useImperativeHandle:Oc,useInsertionEffect:Tc,useLayoutEffect:qc,useMemo:Dc,useReducer:Tr,useRef:Nc,useState:function(){return Tr(c0)},useDebugValue:Mr,useDeferredValue:function(e,u){var a=du();return Ke===null?Dr(a,e,u):_c(a,Ke.memoizedState,e,u)},useTransition:function(){var e=Tr(c0)[0],u=du().memoizedState;return[typeof e=="boolean"?e:vi(e),u]},useSyncExternalStore:dc,useId:Fc,useHostTransitionStatus:Ur,useFormState:Rc,useActionState:Rc,useOptimistic:function(e,u){var a=du();return Ke!==null?xc(a,Ke,e,u):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ar,useCacheRefresh:Hc};Qc.useEffectEvent=Ec;function Fr(e,u,a,t){u=e.memoizedState,a=a(t,u),a=a==null?u:S({},u,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hr={enqueueSetState:function(e,u,a){e=e._reactInternals;var t=ha(),i=Y0(t);i.payload=u,a!=null&&(i.callback=a),u=Q0(e,i,t),u!==null&&(Pu(u,e,t),hi(u,e,t))},enqueueReplaceState:function(e,u,a){e=e._reactInternals;var t=ha(),i=Y0(t);i.tag=1,i.payload=u,a!=null&&(i.callback=a),u=Q0(e,i,t),u!==null&&(Pu(u,e,t),hi(u,e,t))},enqueueForceUpdate:function(e,u){e=e._reactInternals;var a=ha(),t=Y0(a);t.tag=2,u!=null&&(t.callback=u),u=Q0(e,t,a),u!==null&&(Pu(u,e,a),hi(u,e,a))}};function Jc(e,u,a,t,i,r,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,r,b):u.prototype&&u.prototype.isPureReactComponent?!si(a,t)||!si(i,r):!0}function Gc(e,u,a,t){e=u.state,typeof u.componentWillReceiveProps=="function"&&u.componentWillReceiveProps(a,t),typeof u.UNSAFE_componentWillReceiveProps=="function"&&u.UNSAFE_componentWillReceiveProps(a,t),u.state!==e&&Hr.enqueueReplaceState(u,u.state,null)}function Ot(e,u){var a=u;if("ref"in u){a={};for(var t in u)t!=="ref"&&(a[t]=u[t])}if(e=e.defaultProps){a===u&&(a=S({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Wc(e){hl(e)}function Zc(e){console.error(e)}function Pc(e){hl(e)}function Ll(e,u){try{var a=e.onUncaughtError;a(u.value,{componentStack:u.stack})}catch(t){setTimeout(function(){throw t})}}function Xc(e,u,a){try{var t=e.onCaughtError;t(a.value,{componentStack:a.stack,errorBoundary:u.tag===1?u.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function $r(e,u,a){return a=Y0(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,u)},a}function Ic(e){return e=Y0(e),e.tag=3,e}function ed(e,u,a,t){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;e.payload=function(){return i(r)},e.callback=function(){Xc(u,a,t)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Xc(u,a,t),typeof i!="function"&&(X0===null?X0=new Set([this]):X0.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})})}function Zm(e,u,a,t,i){if(a.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(u=a.alternate,u!==null&&cn(u,a,i,!0),a=da.current,a!==null){switch(a.tag){case 31:case 13:return ka===null?Zl():a.alternate===null&&ru===0&&(ru=3),a.flags&=-257,a.flags|=65536,a.lanes=i,t===Sl?a.flags|=16384:(u=a.updateQueue,u===null?a.updateQueue=new Set([t]):u.add(t),m4(e,t,i)),!1;case 22:return a.flags|=65536,t===Sl?a.flags|=16384:(u=a.updateQueue,u===null?(u={transitions:null,markerInstances:null,retryQueue:new Set([t])},a.updateQueue=u):(a=u.retryQueue,a===null?u.retryQueue=new Set([t]):a.add(t)),m4(e,t,i)),!1}throw Error(d(435,a.tag))}return m4(e,t,i),Zl(),!1}if(Te)return u=da.current,u!==null?((u.flags&65536)===0&&(u.flags|=256),u.flags|=65536,u.lanes=i,t!==sr&&(e=Error(d(422),{cause:t}),ci(xa(e,a)))):(t!==sr&&(u=Error(d(423),{cause:t}),ci(xa(u,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,t=xa(t,a),i=$r(e.stateNode,t,i),gr(e,i),ru!==4&&(ru=2)),!1;var r=Error(d(520),{cause:t});if(r=xa(r,a),Ei===null?Ei=[r]:Ei.push(r),ru!==4&&(ru=2),u===null)return!0;t=xa(t,a),a=u;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=$r(a.stateNode,t,e),gr(a,e),!1;case 1:if(u=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(X0===null||!X0.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Ic(i),ed(i,e,a,t),gr(a,i),!1}a=a.return}while(a!==null);return!1}var Vr=Error(d(461)),pu=!1;function Tu(e,u,a,t){u.child=e===null?nc(u,null,a,t):qt(u,e.child,a,t)}function ud(e,u,a,t,i){a=a.render;var r=u.ref;if("ref"in t){var b={};for(var g in t)g!=="ref"&&(b[g]=t[g])}else b=t;return Nt(u),t=zr(e,u,a,b,r,i),g=Sr(),e!==null&&!pu?(Rr(e,u,i),d0(e,u,i)):(Te&&g&&ir(u),u.flags|=1,Tu(e,u,t,i),u.child)}function ad(e,u,a,t,i){if(e===null){var r=a.type;return typeof r=="function"&&!ar(r)&&r.defaultProps===void 0&&a.compare===null?(u.tag=15,u.type=r,td(e,u,r,t,i)):(e=vl(a.type,null,t,u,u.mode,i),e.ref=u.ref,e.return=u,u.child=e)}if(r=e.child,!Pr(e,i)){var b=r.memoizedProps;if(a=a.compare,a=a!==null?a:si,a(b,t)&&e.ref===u.ref)return d0(e,u,i)}return u.flags|=1,e=i0(r,t),e.ref=u.ref,e.return=u,u.child=e}function td(e,u,a,t,i){if(e!==null){var r=e.memoizedProps;if(si(r,t)&&e.ref===u.ref)if(pu=!1,u.pendingProps=t=r,Pr(e,i))(e.flags&131072)!==0&&(pu=!0);else return u.lanes=e.lanes,d0(e,u,i)}return Kr(e,u,a,t,i)}function nd(e,u,a,t){var i=t.children,r=e!==null?e.memoizedState:null;if(e===null&&u.stateNode===null&&(u.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((u.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(t=u.child=e.child,i=0;t!==null;)i=i|t.lanes|t.childLanes,t=t.sibling;t=i&~r}else t=0,u.child=null;return id(e,u,r,a,t)}if((a&536870912)!==0)u.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(u,r!==null?r.cachePool:null),r!==null?sc(u,r):yr(),rc(u);else return t=u.lanes=536870912,id(e,u,r!==null?r.baseLanes|a:a,a,t)}else r!==null?(wl(u,r.cachePool),sc(u,r),G0(),u.memoizedState=null):(e!==null&&wl(u,null),yr(),G0());return Tu(e,u,i,a),u.child}function ji(e,u){return e!==null&&e.tag===22||u.stateNode!==null||(u.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.sibling}function id(e,u,a,t,i){var r=br();return r=r===null?null:{parent:bu._currentValue,pool:r},u.memoizedState={baseLanes:a,cachePool:r},e!==null&&wl(u,null),yr(),rc(u),e!==null&&cn(e,u,t,!0),u.childLanes=i,null}function Bl(e,u){return u=Hl({mode:u.mode,children:u.children},e.mode),u.ref=e.ref,e.child=u,u.return=e,u}function ld(e,u,a){return qt(u,e.child,null,a),e=Bl(u,u.pendingProps),e.flags|=2,fa(u),u.memoizedState=null,e}function Pm(e,u,a){var t=u.pendingProps,i=(u.flags&128)!==0;if(u.flags&=-129,e===null){if(Te){if(t.mode==="hidden")return e=Bl(u,t),u.lanes=536870912,ji(null,e);if(jr(u),(e=au)?(e=g3(e,ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(u.memoizedState={dehydrated:e,treeContext:F0!==null?{id:Ja,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},a=Vo(e),a.return=u,u.child=a,Au=u,au=null)):e=null,e===null)throw $0(u);return u.lanes=536870912,null}return Bl(u,t)}var r=e.memoizedState;if(r!==null){var b=r.dehydrated;if(jr(u),i)if(u.flags&256)u.flags&=-257,u=ld(e,u,a);else if(u.memoizedState!==null)u.child=e.child,u.flags|=128,u=null;else throw Error(d(558));else if(pu||cn(e,u,a,!1),i=(a&e.childLanes)!==0,pu||i){if(t=Xe,t!==null&&(b=Zn(t,a),b!==0&&b!==r.retryLane))throw r.retryLane=b,wt(e,b),Pu(t,e,b),Vr;Zl(),u=ld(e,u,a)}else e=r.treeContext,au=ja(b.nextSibling),Au=u,Te=!0,H0=null,ya=!1,e!==null&&Qo(u,e),u=Bl(u,t),u.flags|=4096;return u}return e=i0(e.child,{mode:t.mode,children:t.children}),e.ref=u.ref,u.child=e,e.return=u,e}function Fl(e,u){var a=u.ref;if(a===null)e!==null&&e.ref!==null&&(u.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(u.flags|=4194816)}}function Kr(e,u,a,t,i){return Nt(u),a=zr(e,u,a,t,void 0,i),t=Sr(),e!==null&&!pu?(Rr(e,u,i),d0(e,u,i)):(Te&&t&&ir(u),u.flags|=1,Tu(e,u,a,i),u.child)}function sd(e,u,a,t,i,r){return Nt(u),u.updateQueue=null,a=cc(u,t,a,i),oc(e),t=Sr(),e!==null&&!pu?(Rr(e,u,r),d0(e,u,r)):(Te&&t&&ir(u),u.flags|=1,Tu(e,u,a,r),u.child)}function rd(e,u,a,t,i){if(Nt(u),u.stateNode===null){var r=ln,b=a.contextType;typeof b=="object"&&b!==null&&(r=Eu(b)),r=new a(t,r),u.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hr,u.stateNode=r,r._reactInternals=u,r=u.stateNode,r.props=t,r.state=u.memoizedState,r.refs={},pr(u),b=a.contextType,r.context=typeof b=="object"&&b!==null?Eu(b):ln,r.state=u.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Fr(u,a,b,t),r.state=u.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(b=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),b!==r.state&&Hr.enqueueReplaceState(r,r.state,null),xi(u,t,r,i),pi(),r.state=u.memoizedState),typeof r.componentDidMount=="function"&&(u.flags|=4194308),t=!0}else if(e===null){r=u.stateNode;var g=u.memoizedProps,R=Ot(a,g);r.props=R;var L=r.context,Y=a.contextType;b=ln,typeof Y=="object"&&Y!==null&&(b=Eu(Y));var G=a.getDerivedStateFromProps;Y=typeof G=="function"||typeof r.getSnapshotBeforeUpdate=="function",g=u.pendingProps!==g,Y||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(g||L!==b)&&Gc(u,r,t,b),K0=!1;var B=u.memoizedState;r.state=B,xi(u,t,r,i),pi(),L=u.memoizedState,g||B!==L||K0?(typeof G=="function"&&(Fr(u,a,G,t),L=u.memoizedState),(R=K0||Jc(u,a,R,t,B,L,b))?(Y||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(u.flags|=4194308)):(typeof r.componentDidMount=="function"&&(u.flags|=4194308),u.memoizedProps=t,u.memoizedState=L),r.props=t,r.state=L,r.context=b,t=R):(typeof r.componentDidMount=="function"&&(u.flags|=4194308),t=!1)}else{r=u.stateNode,xr(e,u),b=u.memoizedProps,Y=Ot(a,b),r.props=Y,G=u.pendingProps,B=r.context,L=a.contextType,R=ln,typeof L=="object"&&L!==null&&(R=Eu(L)),g=a.getDerivedStateFromProps,(L=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(b!==G||B!==R)&&Gc(u,r,t,R),K0=!1,B=u.memoizedState,r.state=B,xi(u,t,r,i),pi();var $=u.memoizedState;b!==G||B!==$||K0||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof g=="function"&&(Fr(u,a,g,t),$=u.memoizedState),(Y=K0||Jc(u,a,Y,t,B,$,R)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(L||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(t,$,R),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(t,$,R)),typeof r.componentDidUpdate=="function"&&(u.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(u.flags|=1024)):(typeof r.componentDidUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(u.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(u.flags|=1024),u.memoizedProps=t,u.memoizedState=$),r.props=t,r.state=$,r.context=R,t=Y):(typeof r.componentDidUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(u.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&B===e.memoizedState||(u.flags|=1024),t=!1)}return r=t,Fl(e,u),t=(u.flags&128)!==0,r||t?(r=u.stateNode,a=t&&typeof a.getDerivedStateFromError!="function"?null:r.render(),u.flags|=1,e!==null&&t?(u.child=qt(u,e.child,null,i),u.child=qt(u,null,a,i)):Tu(e,u,a,i),u.memoizedState=r.state,e=u.child):e=d0(e,u,i),e}function od(e,u,a,t){return St(),u.flags|=256,Tu(e,u,a,t),u.child}var Yr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qr(e){return{baseLanes:e,cachePool:Xo()}}function Jr(e,u,a){return e=e!==null?e.childLanes&~a:0,u&&(e|=ba),e}function cd(e,u,a){var t=u.pendingProps,i=!1,r=(u.flags&128)!==0,b;if((b=r)||(b=e!==null&&e.memoizedState===null?!1:(cu.current&2)!==0),b&&(i=!0,u.flags&=-129),b=(u.flags&32)!==0,u.flags&=-33,e===null){if(Te){if(i?J0(u):G0(),(e=au)?(e=g3(e,ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(u.memoizedState={dehydrated:e,treeContext:F0!==null?{id:Ja,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},a=Vo(e),a.return=u,u.child=a,Au=u,au=null)):e=null,e===null)throw $0(u);return E4(e)?u.lanes=32:u.lanes=536870912,null}var g=t.children;return t=t.fallback,i?(G0(),i=u.mode,g=Hl({mode:"hidden",children:g},i),t=zt(t,i,a,null),g.return=u,t.return=u,g.sibling=t,u.child=g,t=u.child,t.memoizedState=Qr(a),t.childLanes=Jr(e,b,a),u.memoizedState=Yr,ji(null,t)):(J0(u),Gr(u,g))}var R=e.memoizedState;if(R!==null&&(g=R.dehydrated,g!==null)){if(r)u.flags&256?(J0(u),u.flags&=-257,u=Wr(e,u,a)):u.memoizedState!==null?(G0(),u.child=e.child,u.flags|=128,u=null):(G0(),g=t.fallback,i=u.mode,t=Hl({mode:"visible",children:t.children},i),g=zt(g,i,a,null),g.flags|=2,t.return=u,g.return=u,t.sibling=g,u.child=t,qt(u,e.child,null,a),t=u.child,t.memoizedState=Qr(a),t.childLanes=Jr(e,b,a),u.memoizedState=Yr,u=ji(null,t));else if(J0(u),E4(g)){if(b=g.nextSibling&&g.nextSibling.dataset,b)var L=b.dgst;b=L,t=Error(d(419)),t.stack="",t.digest=b,ci({value:t,source:null,stack:null}),u=Wr(e,u,a)}else if(pu||cn(e,u,a,!1),b=(a&e.childLanes)!==0,pu||b){if(b=Xe,b!==null&&(t=Zn(b,a),t!==0&&t!==R.retryLane))throw R.retryLane=t,wt(e,t),Pu(b,e,t),Vr;A4(g)||Zl(),u=Wr(e,u,a)}else A4(g)?(u.flags|=192,u.child=e.child,u=null):(e=R.treeContext,au=ja(g.nextSibling),Au=u,Te=!0,H0=null,ya=!1,e!==null&&Qo(u,e),u=Gr(u,t.children),u.flags|=4096);return u}return i?(G0(),g=t.fallback,i=u.mode,R=e.child,L=R.sibling,t=i0(R,{mode:"hidden",children:t.children}),t.subtreeFlags=R.subtreeFlags&65011712,L!==null?g=i0(L,g):(g=zt(g,i,a,null),g.flags|=2),g.return=u,t.return=u,t.sibling=g,u.child=t,ji(null,t),t=u.child,g=e.child.memoizedState,g===null?g=Qr(a):(i=g.cachePool,i!==null?(R=bu._currentValue,i=i.parent!==R?{parent:R,pool:R}:i):i=Xo(),g={baseLanes:g.baseLanes|a,cachePool:i}),t.memoizedState=g,t.childLanes=Jr(e,b,a),u.memoizedState=Yr,ji(e.child,t)):(J0(u),a=e.child,e=a.sibling,a=i0(a,{mode:"visible",children:t.children}),a.return=u,a.sibling=null,e!==null&&(b=u.deletions,b===null?(u.deletions=[e],u.flags|=16):b.push(e)),u.child=a,u.memoizedState=null,a)}function Gr(e,u){return u=Hl({mode:"visible",children:u},e.mode),u.return=e,e.child=u}function Hl(e,u){return e=ca(22,e,null,u),e.lanes=0,e}function Wr(e,u,a){return qt(u,e.child,null,a),e=Gr(u,u.pendingProps.children),e.flags|=2,u.memoizedState=null,e}function dd(e,u,a){e.lanes|=u;var t=e.alternate;t!==null&&(t.lanes|=u),cr(e.return,u,a)}function Zr(e,u,a,t,i,r){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:u,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:i,treeForkCount:r}:(b.isBackwards=u,b.rendering=null,b.renderingStartTime=0,b.last=t,b.tail=a,b.tailMode=i,b.treeForkCount=r)}function fd(e,u,a){var t=u.pendingProps,i=t.revealOrder,r=t.tail;t=t.children;var b=cu.current,g=(b&2)!==0;if(g?(b=b&1|2,u.flags|=128):b&=1,we(cu,b),Tu(e,u,t,a),t=Te?oi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=u.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,a,u);else if(e.tag===19)dd(e,a,u);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===u)break e;for(;e.sibling===null;){if(e.return===null||e.return===u)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=u.child,i=null;a!==null;)e=a.alternate,e!==null&&El(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=u.child,u.child=null):(i=a.sibling,a.sibling=null),Zr(u,!1,i,a,r,t);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=u.child,u.child=null;i!==null;){if(e=i.alternate,e!==null&&El(e)===null){u.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Zr(u,!0,a,null,r,t);break;case"together":Zr(u,!1,null,null,void 0,t);break;default:u.memoizedState=null}return u.child}function d0(e,u,a){if(e!==null&&(u.dependencies=e.dependencies),P0|=u.lanes,(a&u.childLanes)===0)if(e!==null){if(cn(e,u,a,!1),(a&u.childLanes)===0)return null}else return null;if(e!==null&&u.child!==e.child)throw Error(d(153));if(u.child!==null){for(e=u.child,a=i0(e,e.pendingProps),u.child=a,a.return=u;e.sibling!==null;)e=e.sibling,a=a.sibling=i0(e,e.pendingProps),a.return=u;a.sibling=null}return u.child}function Pr(e,u){return(e.lanes&u)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function Xm(e,u,a){switch(u.tag){case 3:k0(u,u.stateNode.containerInfo),V0(u,bu,e.memoizedState.cache),St();break;case 27:case 5:Hn(u);break;case 4:k0(u,u.stateNode.containerInfo);break;case 10:V0(u,u.type,u.memoizedProps.value);break;case 31:if(u.memoizedState!==null)return u.flags|=128,jr(u),null;break;case 13:var t=u.memoizedState;if(t!==null)return t.dehydrated!==null?(J0(u),u.flags|=128,null):(a&u.child.childLanes)!==0?cd(e,u,a):(J0(u),e=d0(e,u,a),e!==null?e.sibling:null);J0(u);break;case 19:var i=(e.flags&128)!==0;if(t=(a&u.childLanes)!==0,t||(cn(e,u,a,!1),t=(a&u.childLanes)!==0),i){if(t)return fd(e,u,a);u.flags|=128}if(i=u.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(cu,cu.current),t)break;return null;case 22:return u.lanes=0,nd(e,u,a,u.pendingProps);case 24:V0(u,bu,e.memoizedState.cache)}return d0(e,u,a)}function md(e,u,a){if(e!==null)if(e.memoizedProps!==u.pendingProps)pu=!0;else{if(!Pr(e,a)&&(u.flags&128)===0)return pu=!1,Xm(e,u,a);pu=(e.flags&131072)!==0}else pu=!1,Te&&(u.flags&1048576)!==0&&Yo(u,oi,u.index);switch(u.lanes=0,u.tag){case 16:e:{var t=u.pendingProps;if(e=Et(u.elementType),u.type=e,typeof e=="function")ar(e)?(t=Ot(e,t),u.tag=1,u=rd(null,u,e,t,a)):(u.tag=0,u=Kr(null,u,e,t,a));else{if(e!=null){var i=e.$$typeof;if(i===ue){u.tag=11,u=ud(null,u,e,t,a);break e}else if(i===P){u.tag=14,u=ad(null,u,e,t,a);break e}}throw u=Su(e)||e,Error(d(306,u,""))}}return u;case 0:return Kr(e,u,u.type,u.pendingProps,a);case 1:return t=u.type,i=Ot(t,u.pendingProps),rd(e,u,t,i,a);case 3:e:{if(k0(u,u.stateNode.containerInfo),e===null)throw Error(d(387));t=u.pendingProps;var r=u.memoizedState;i=r.element,xr(e,u),xi(u,t,null,a);var b=u.memoizedState;if(t=b.cache,V0(u,bu,t),t!==r.cache&&dr(u,[bu],a,!0),pi(),t=b.element,r.isDehydrated)if(r={element:t,isDehydrated:!1,cache:b.cache},u.updateQueue.baseState=r,u.memoizedState=r,u.flags&256){u=od(e,u,t,a);break e}else if(t!==i){i=xa(Error(d(424)),u),ci(i),u=od(e,u,t,a);break e}else for(e=u.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,au=ja(e.firstChild),Au=u,Te=!0,H0=null,ya=!0,a=nc(u,null,t,a),u.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(St(),t===i){u=d0(e,u,a);break e}Tu(e,u,t,a)}u=u.child}return u;case 26:return Fl(e,u),e===null?(a=z3(u.type,null,u.pendingProps,null))?u.memoizedState=a:Te||(a=u.type,e=u.pendingProps,t=ts(Ea.current).createElement(a),t[fu]=u,t[yu]=e,qu(t,a,e),mu(t),u.stateNode=t):u.memoizedState=z3(u.type,e.memoizedProps,u.pendingProps,e.memoizedState),null;case 27:return Hn(u),e===null&&Te&&(t=u.stateNode=k3(u.type,u.pendingProps,Ea.current),Au=u,ya=!0,i=au,at(u.type)?(T4=i,au=ja(t.firstChild)):au=i),Tu(e,u,u.pendingProps.children,a),Fl(e,u),e===null&&(u.flags|=4194304),u.child;case 5:return e===null&&Te&&((i=t=au)&&(t=A5(t,u.type,u.pendingProps,ya),t!==null?(u.stateNode=t,Au=u,au=ja(t.firstChild),ya=!1,i=!0):i=!1),i||$0(u)),Hn(u),i=u.type,r=u.pendingProps,b=e!==null?e.memoizedProps:null,t=r.children,S4(i,r)?t=null:b!==null&&S4(i,b)&&(u.flags|=32),u.memoizedState!==null&&(i=zr(e,u,Vm,null,null,a),Ui._currentValue=i),Fl(e,u),Tu(e,u,t,a),u.child;case 6:return e===null&&Te&&((e=a=au)&&(a=E5(a,u.pendingProps,ya),a!==null?(u.stateNode=a,Au=u,au=null,e=!0):e=!1),e||$0(u)),null;case 13:return cd(e,u,a);case 4:return k0(u,u.stateNode.containerInfo),t=u.pendingProps,e===null?u.child=qt(u,null,t,a):Tu(e,u,t,a),u.child;case 11:return ud(e,u,u.type,u.pendingProps,a);case 7:return Tu(e,u,u.pendingProps,a),u.child;case 8:return Tu(e,u,u.pendingProps.children,a),u.child;case 12:return Tu(e,u,u.pendingProps.children,a),u.child;case 10:return t=u.pendingProps,V0(u,u.type,t.value),Tu(e,u,t.children,a),u.child;case 9:return i=u.type._context,t=u.pendingProps.children,Nt(u),i=Eu(i),t=t(i),u.flags|=1,Tu(e,u,t,a),u.child;case 14:return ad(e,u,u.type,u.pendingProps,a);case 15:return td(e,u,u.type,u.pendingProps,a);case 19:return fd(e,u,a);case 31:return Pm(e,u,a);case 22:return nd(e,u,a,u.pendingProps);case 24:return Nt(u),t=Eu(bu),e===null?(i=br(),i===null&&(i=Xe,r=fr(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),u.memoizedState={parent:t,cache:i},pr(u),V0(u,bu,i)):((e.lanes&a)!==0&&(xr(e,u),xi(u,null,null,a),pi()),i=e.memoizedState,r=u.memoizedState,i.parent!==t?(i={parent:t,cache:t},u.memoizedState=i,u.lanes===0&&(u.memoizedState=u.updateQueue.baseState=i),V0(u,bu,t)):(t=r.cache,V0(u,bu,t),t!==i.cache&&dr(u,[bu],a,!0))),Tu(e,u,u.pendingProps.children,a),u.child;case 29:throw u.pendingProps}throw Error(d(156,u.tag))}function f0(e){e.flags|=4}function Xr(e,u,a,t,i){if((u=(e.mode&32)!==0)&&(u=!1),u){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Fd())e.flags|=8192;else throw Tt=Sl,hr}else e.flags&=-16777217}function bd(e,u){if(u.type!=="stylesheet"||(u.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!E3(u))if(Fd())e.flags|=8192;else throw Tt=Sl,hr}function $l(e,u){u!==null&&(e.flags|=4),e.flags&16384&&(u=e.tag!==22?lu():536870912,e.lanes|=u,jn|=u)}function wi(e,u){if(!Te)switch(e.tailMode){case"hidden":u=e.tail;for(var a=null;u!==null;)u.alternate!==null&&(a=u),u=u.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?u||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function tu(e){var u=e.alternate!==null&&e.alternate.child===e.child,a=0,t=0;if(u)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=a,u}function Im(e,u,a){var t=u.pendingProps;switch(lr(u),u.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tu(u),null;case 1:return tu(u),null;case 3:return a=u.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),u.memoizedState.cache!==t&&(u.flags|=2048),r0(bu),Pa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(on(u)?f0(u):e===null||e.memoizedState.isDehydrated&&(u.flags&256)===0||(u.flags|=1024,rr())),tu(u),null;case 26:var i=u.type,r=u.memoizedState;return e===null?(f0(u),r!==null?(tu(u),bd(u,r)):(tu(u),Xr(u,i,null,t,a))):r?r!==e.memoizedState?(f0(u),tu(u),bd(u,r)):(tu(u),u.flags&=-16777217):(e=e.memoizedProps,e!==t&&f0(u),tu(u),Xr(u,i,e,t,a)),null;case 27:if(j0(u),a=Ea.current,i=u.type,e!==null&&u.stateNode!=null)e.memoizedProps!==t&&f0(u);else{if(!t){if(u.stateNode===null)throw Error(d(166));return tu(u),null}e=uu.current,on(u)?Jo(u):(e=k3(i,t,a),u.stateNode=e,f0(u))}return tu(u),null;case 5:if(j0(u),i=u.type,e!==null&&u.stateNode!=null)e.memoizedProps!==t&&f0(u);else{if(!t){if(u.stateNode===null)throw Error(d(166));return tu(u),null}if(r=uu.current,on(u))Jo(u);else{var b=ts(Ea.current);switch(r){case 1:r=b.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=b.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=b.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=b.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=b.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof t.is=="string"?b.createElement("select",{is:t.is}):b.createElement("select"),t.multiple?r.multiple=!0:t.size&&(r.size=t.size);break;default:r=typeof t.is=="string"?b.createElement(i,{is:t.is}):b.createElement(i)}}r[fu]=u,r[yu]=t;e:for(b=u.child;b!==null;){if(b.tag===5||b.tag===6)r.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===u)break e;for(;b.sibling===null;){if(b.return===null||b.return===u)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}u.stateNode=r;e:switch(qu(r,i,t),i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&f0(u)}}return tu(u),Xr(u,u.type,e===null?null:e.memoizedProps,u.pendingProps,a),null;case 6:if(e&&u.stateNode!=null)e.memoizedProps!==t&&f0(u);else{if(typeof t!="string"&&u.stateNode===null)throw Error(d(166));if(e=Ea.current,on(u)){if(e=u.stateNode,a=u.memoizedProps,t=null,i=Au,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}e[fu]=u,e=!!(e.nodeValue===a||t!==null&&t.suppressHydrationWarning===!0||c3(e.nodeValue,a)),e||$0(u,!0)}else e=ts(e).createTextNode(t),e[fu]=u,u.stateNode=e}return tu(u),null;case 31:if(a=u.memoizedState,e===null||e.memoizedState!==null){if(t=on(u),a!==null){if(e===null){if(!t)throw Error(d(318));if(e=u.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[fu]=u}else St(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;tu(u),e=!1}else a=rr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return u.flags&256?(fa(u),u):(fa(u),null);if((u.flags&128)!==0)throw Error(d(558))}return tu(u),null;case 13:if(t=u.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=on(u),t!==null&&t.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=u.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[fu]=u}else St(),(u.flags&128)===0&&(u.memoizedState=null),u.flags|=4;tu(u),i=!1}else i=rr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return u.flags&256?(fa(u),u):(fa(u),null)}return fa(u),(u.flags&128)!==0?(u.lanes=a,u):(a=t!==null,e=e!==null&&e.memoizedState!==null,a&&(t=u.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048)),a!==e&&a&&(u.child.flags|=8192),$l(u,u.updateQueue),tu(u),null);case 4:return Pa(),e===null&&y4(u.stateNode.containerInfo),tu(u),null;case 10:return r0(u.type),tu(u),null;case 19:if(Oe(cu),t=u.memoizedState,t===null)return tu(u),null;if(i=(u.flags&128)!==0,r=t.rendering,r===null)if(i)wi(t,!1);else{if(ru!==0||e!==null&&(e.flags&128)!==0)for(e=u.child;e!==null;){if(r=El(e),r!==null){for(u.flags|=128,wi(t,!1),e=r.updateQueue,u.updateQueue=e,$l(u,e),u.subtreeFlags=0,e=a,a=u.child;a!==null;)$o(a,e),a=a.sibling;return we(cu,cu.current&1|2),Te&&l0(u,t.treeForkCount),u.child}e=e.sibling}t.tail!==null&&Ou()>Jl&&(u.flags|=128,i=!0,wi(t,!1),u.lanes=4194304)}else{if(!i)if(e=El(r),e!==null){if(u.flags|=128,i=!0,e=e.updateQueue,u.updateQueue=e,$l(u,e),wi(t,!0),t.tail===null&&t.tailMode==="hidden"&&!r.alternate&&!Te)return tu(u),null}else 2*Ou()-t.renderingStartTime>Jl&&a!==536870912&&(u.flags|=128,i=!0,wi(t,!1),u.lanes=4194304);t.isBackwards?(r.sibling=u.child,u.child=r):(e=t.last,e!==null?e.sibling=r:u.child=r,t.last=r)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=Ou(),e.sibling=null,a=cu.current,we(cu,i?a&1|2:a&1),Te&&l0(u,t.treeForkCount),e):(tu(u),null);case 22:case 23:return fa(u),kr(),t=u.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(u.flags|=8192):t&&(u.flags|=8192),t?(a&536870912)!==0&&(u.flags&128)===0&&(tu(u),u.subtreeFlags&6&&(u.flags|=8192)):tu(u),a=u.updateQueue,a!==null&&$l(u,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),t=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(t=u.memoizedState.cachePool.pool),t!==a&&(u.flags|=2048),e!==null&&Oe(At),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),u.memoizedState.cache!==a&&(u.flags|=2048),r0(bu),tu(u),null;case 25:return null;case 30:return null}throw Error(d(156,u.tag))}function e5(e,u){switch(lr(u),u.tag){case 1:return e=u.flags,e&65536?(u.flags=e&-65537|128,u):null;case 3:return r0(bu),Pa(),e=u.flags,(e&65536)!==0&&(e&128)===0?(u.flags=e&-65537|128,u):null;case 26:case 27:case 5:return j0(u),null;case 31:if(u.memoizedState!==null){if(fa(u),u.alternate===null)throw Error(d(340));St()}return e=u.flags,e&65536?(u.flags=e&-65537|128,u):null;case 13:if(fa(u),e=u.memoizedState,e!==null&&e.dehydrated!==null){if(u.alternate===null)throw Error(d(340));St()}return e=u.flags,e&65536?(u.flags=e&-65537|128,u):null;case 19:return Oe(cu),null;case 4:return Pa(),null;case 10:return r0(u.type),null;case 22:case 23:return fa(u),kr(),e!==null&&Oe(At),e=u.flags,e&65536?(u.flags=e&-65537|128,u):null;case 24:return r0(bu),null;case 25:return null;default:return null}}function hd(e,u){switch(lr(u),u.tag){case 3:r0(bu),Pa();break;case 26:case 27:case 5:j0(u);break;case 4:Pa();break;case 31:u.memoizedState!==null&&fa(u);break;case 13:fa(u);break;case 19:Oe(cu);break;case 10:r0(u.type);break;case 22:case 23:fa(u),kr(),e!==null&&Oe(At);break;case 24:r0(bu)}}function zi(e,u){try{var a=u.updateQueue,t=a!==null?a.lastEffect:null;if(t!==null){var i=t.next;a=i;do{if((a.tag&e)===e){t=void 0;var r=a.create,b=a.inst;t=r(),b.destroy=t}a=a.next}while(a!==i)}}catch(g){Ve(u,u.return,g)}}function W0(e,u,a){try{var t=u.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var r=i.next;t=r;do{if((t.tag&e)===e){var b=t.inst,g=b.destroy;if(g!==void 0){b.destroy=void 0,i=u;var R=a,L=g;try{L()}catch(Y){Ve(i,R,Y)}}}t=t.next}while(t!==r)}}catch(Y){Ve(u,u.return,Y)}}function pd(e){var u=e.updateQueue;if(u!==null){var a=e.stateNode;try{lc(u,a)}catch(t){Ve(e,e.return,t)}}}function xd(e,u,a){a.props=Ot(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(t){Ve(e,u,t)}}function Si(e,u){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof a=="function"?e.refCleanup=a(t):a.current=t}}catch(i){Ve(e,u,i)}}function Wa(e,u){var a=e.ref,t=e.refCleanup;if(a!==null)if(typeof t=="function")try{t()}catch(i){Ve(e,u,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ve(e,u,i)}else a.current=null}function gd(e){var u=e.type,a=e.memoizedProps,t=e.stateNode;try{e:switch(u){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break e;case"img":a.src?t.src=a.src:a.srcSet&&(t.srcset=a.srcSet)}}catch(i){Ve(e,e.return,i)}}function Ir(e,u,a){try{var t=e.stateNode;j5(t,e.type,a,u),t[yu]=u}catch(i){Ve(e,e.return,i)}}function vd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&at(e.type)||e.tag===4}function e4(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&at(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function u4(e,u,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,u?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,u):(u=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,u.appendChild(e),a=a._reactRootContainer,a!=null||u.onclick!==null||(u.onclick=Vu));else if(t!==4&&(t===27&&at(e.type)&&(a=e.stateNode,u=null),e=e.child,e!==null))for(u4(e,u,a),e=e.sibling;e!==null;)u4(e,u,a),e=e.sibling}function Vl(e,u,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,u?a.insertBefore(e,u):a.appendChild(e);else if(t!==4&&(t===27&&at(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,u,a),e=e.sibling;e!==null;)Vl(e,u,a),e=e.sibling}function yd(e){var u=e.stateNode,a=e.memoizedProps;try{for(var t=e.type,i=u.attributes;i.length;)u.removeAttributeNode(i[0]);qu(u,t,a),u[fu]=e,u[yu]=a}catch(r){Ve(e,e.return,r)}}var m0=!1,xu=!1,a4=!1,kd=typeof WeakSet=="function"?WeakSet:Set,zu=null;function u5(e,u){if(e=e.containerInfo,w4=cs,e=Oo(e),Ws(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var i=t.anchorOffset,r=t.focusNode;t=t.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var b=0,g=-1,R=-1,L=0,Y=0,G=e,B=null;u:for(;;){for(var $;G!==a||i!==0&&G.nodeType!==3||(g=b+i),G!==r||t!==0&&G.nodeType!==3||(R=b+t),G.nodeType===3&&(b+=G.nodeValue.length),($=G.firstChild)!==null;)B=G,G=$;for(;;){if(G===e)break u;if(B===a&&++L===i&&(g=b),B===r&&++Y===t&&(R=b),($=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=$}a=g===-1||R===-1?null:{start:g,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(z4={focusedElem:e,selectionRange:a},cs=!1,zu=u;zu!==null;)if(u=zu,e=u.child,(u.subtreeFlags&1028)!==0&&e!==null)e.return=u,zu=e;else for(;zu!==null;){switch(u=zu,r=u.alternate,e=u.flags,u.tag){case 0:if((e&4)!==0&&(e=u.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=u,i=r.memoizedProps,r=r.memoizedState,t=a.stateNode;try{var te=Ot(a.type,i);e=t.getSnapshotBeforeUpdate(te,r),t.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ve(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=u.stateNode.containerInfo,a=e.nodeType,a===9)N4(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":N4(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=u.sibling,e!==null){e.return=u.return,zu=e;break}zu=u.return}}function jd(e,u,a){var t=a.flags;switch(a.tag){case 0:case 11:case 15:h0(e,a),t&4&&zi(5,a);break;case 1:if(h0(e,a),t&4)if(e=a.stateNode,u===null)try{e.componentDidMount()}catch(b){Ve(a,a.return,b)}else{var i=Ot(a.type,u.memoizedProps);u=u.memoizedState;try{e.componentDidUpdate(i,u,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ve(a,a.return,b)}}t&64&&pd(a),t&512&&Si(a,a.return);break;case 3:if(h0(e,a),t&64&&(e=a.updateQueue,e!==null)){if(u=null,a.child!==null)switch(a.child.tag){case 27:case 5:u=a.child.stateNode;break;case 1:u=a.child.stateNode}try{lc(e,u)}catch(b){Ve(a,a.return,b)}}break;case 27:u===null&&t&4&&yd(a);case 26:case 5:h0(e,a),u===null&&t&4&&gd(a),t&512&&Si(a,a.return);break;case 12:h0(e,a);break;case 31:h0(e,a),t&4&&Sd(e,a);break;case 13:h0(e,a),t&4&&Rd(e,a),t&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=c5.bind(null,a),T5(e,a))));break;case 22:if(t=a.memoizedState!==null||m0,!t){u=u!==null&&u.memoizedState!==null||xu,i=m0;var r=xu;m0=t,(xu=u)&&!r?p0(e,a,(a.subtreeFlags&8772)!==0):h0(e,a),m0=i,xu=r}break;case 30:break;default:h0(e,a)}}function wd(e){var u=e.alternate;u!==null&&(e.alternate=null,wd(u)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(u=e.stateNode,u!==null&&In(u)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var iu=null,Ju=!1;function b0(e,u,a){for(a=a.child;a!==null;)zd(e,u,a),a=a.sibling}function zd(e,u,a){if(Fu&&typeof Fu.onCommitFiberUnmount=="function")try{Fu.onCommitFiberUnmount(z0,a)}catch{}switch(a.tag){case 26:xu||Wa(a,u),b0(e,u,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xu||Wa(a,u);var t=iu,i=Ju;at(a.type)&&(iu=a.stateNode,Ju=!1),b0(e,u,a),Mi(a.stateNode),iu=t,Ju=i;break;case 5:xu||Wa(a,u);case 6:if(t=iu,i=Ju,iu=null,b0(e,u,a),iu=t,Ju=i,iu!==null)if(Ju)try{(iu.nodeType===9?iu.body:iu.nodeName==="HTML"?iu.ownerDocument.body:iu).removeChild(a.stateNode)}catch(r){Ve(a,u,r)}else try{iu.removeChild(a.stateNode)}catch(r){Ve(a,u,r)}break;case 18:iu!==null&&(Ju?(e=iu,p3(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):p3(iu,a.stateNode));break;case 4:t=iu,i=Ju,iu=a.stateNode.containerInfo,Ju=!0,b0(e,u,a),iu=t,Ju=i;break;case 0:case 11:case 14:case 15:W0(2,a,u),xu||W0(4,a,u),b0(e,u,a);break;case 1:xu||(Wa(a,u),t=a.stateNode,typeof t.componentWillUnmount=="function"&&xd(a,u,t)),b0(e,u,a);break;case 21:b0(e,u,a);break;case 22:xu=(t=xu)||a.memoizedState!==null,b0(e,u,a),xu=t;break;default:b0(e,u,a)}}function Sd(e,u){if(u.memoizedState===null&&(e=u.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tn(e)}catch(a){Ve(u,u.return,a)}}}function Rd(e,u){if(u.memoizedState===null&&(e=u.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){Ve(u,u.return,a)}}function a5(e){switch(e.tag){case 31:case 13:case 19:var u=e.stateNode;return u===null&&(u=e.stateNode=new kd),u;case 22:return e=e.stateNode,u=e._retryCache,u===null&&(u=e._retryCache=new kd),u;default:throw Error(d(435,e.tag))}}function Kl(e,u){var a=a5(e);u.forEach(function(t){if(!a.has(t)){a.add(t);var i=d5.bind(null,e,t);t.then(i,i)}})}function Gu(e,u){var a=u.deletions;if(a!==null)for(var t=0;t<a.length;t++){var i=a[t],r=e,b=u,g=b;e:for(;g!==null;){switch(g.tag){case 27:if(at(g.type)){iu=g.stateNode,Ju=!1;break e}break;case 5:iu=g.stateNode,Ju=!1;break e;case 3:case 4:iu=g.stateNode.containerInfo,Ju=!0;break e}g=g.return}if(iu===null)throw Error(d(160));zd(r,b,i),iu=null,Ju=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(u.subtreeFlags&13886)for(u=u.child;u!==null;)Nd(u,e),u=u.sibling}var Ba=null;function Nd(e,u){var a=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gu(u,e),Wu(e),t&4&&(W0(3,e,e.return),zi(3,e),W0(5,e,e.return));break;case 1:Gu(u,e),Wu(e),t&512&&(xu||a===null||Wa(a,a.return)),t&64&&m0&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:var i=Ba;if(Gu(u,e),Wu(e),t&512&&(xu||a===null||Wa(a,a.return)),t&4){var r=a!==null?a.memoizedState:null;if(t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null){e:{t=e.type,a=e.memoizedProps,i=i.ownerDocument||i;u:switch(t){case"title":r=i.getElementsByTagName("title")[0],(!r||r[bt]||r[fu]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector("head > title"))),qu(r,t,a),r[fu]=e,mu(r),t=r;break e;case"link":var b=N3("link","href",i).get(t+(a.href||""));if(b){for(var g=0;g<b.length;g++)if(r=b[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(g,1);break u}}r=i.createElement(t),qu(r,t,a),i.head.appendChild(r);break;case"meta":if(b=N3("meta","content",i).get(t+(a.content||""))){for(g=0;g<b.length;g++)if(r=b[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(g,1);break u}}r=i.createElement(t),qu(r,t,a),i.head.appendChild(r);break;default:throw Error(d(468,t))}r[fu]=e,mu(r),t=r}e.stateNode=t}else A3(i,e.type,e.stateNode);else e.stateNode=R3(i,t,e.memoizedProps);else r!==t?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,t===null?A3(i,e.type,e.stateNode):R3(i,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Ir(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gu(u,e),Wu(e),t&512&&(xu||a===null||Wa(a,a.return)),a!==null&&t&4&&Ir(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gu(u,e),Wu(e),t&512&&(xu||a===null||Wa(a,a.return)),e.flags&32){i=e.stateNode;try{Se(i,"")}catch(te){Ve(e,e.return,te)}}t&4&&e.stateNode!=null&&(i=e.memoizedProps,Ir(e,i,a!==null?a.memoizedProps:i)),t&1024&&(a4=!0);break;case 6:if(Gu(u,e),Wu(e),t&4){if(e.stateNode===null)throw Error(d(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t}catch(te){Ve(e,e.return,te)}}break;case 3:if(ls=null,i=Ba,Ba=ns(u.containerInfo),Gu(u,e),Ba=i,Wu(e),t&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(u.containerInfo)}catch(te){Ve(e,e.return,te)}a4&&(a4=!1,Ad(e));break;case 4:t=Ba,Ba=ns(e.stateNode.containerInfo),Gu(u,e),Wu(e),Ba=t;break;case 12:Gu(u,e),Wu(e);break;case 31:Gu(u,e),Wu(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Kl(e,t)));break;case 13:Gu(u,e),Wu(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=Ou()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Kl(e,t)));break;case 22:i=e.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,L=m0,Y=xu;if(m0=L||i,xu=Y||R,Gu(u,e),xu=Y,m0=L,Wu(e),t&8192)e:for(u=e.stateNode,u._visibility=i?u._visibility&-2:u._visibility|1,i&&(a===null||R||m0||xu||Mt(e)),a=null,u=e;;){if(u.tag===5||u.tag===26){if(a===null){R=a=u;try{if(r=R.stateNode,i)b=r.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{g=R.stateNode;var G=R.memoizedProps.style,B=G!=null&&G.hasOwnProperty("display")?G.display:null;g.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(te){Ve(R,R.return,te)}}}else if(u.tag===6){if(a===null){R=u;try{R.stateNode.nodeValue=i?"":R.memoizedProps}catch(te){Ve(R,R.return,te)}}}else if(u.tag===18){if(a===null){R=u;try{var $=R.stateNode;i?x3($,!0):x3(R.stateNode,!1)}catch(te){Ve(R,R.return,te)}}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;a===u&&(a=null),u=u.return}a===u&&(a=null),u.sibling.return=u.return,u=u.sibling}t&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,Kl(e,a))));break;case 19:Gu(u,e),Wu(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Kl(e,t)));break;case 30:break;case 21:break;default:Gu(u,e),Wu(e)}}function Wu(e){var u=e.flags;if(u&2){try{for(var a,t=e.return;t!==null;){if(vd(t)){a=t;break}t=t.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,r=e4(e);Vl(e,r,i);break;case 5:var b=a.stateNode;a.flags&32&&(Se(b,""),a.flags&=-33);var g=e4(e);Vl(e,g,b);break;case 3:case 4:var R=a.stateNode.containerInfo,L=e4(e);u4(e,L,R);break;default:throw Error(d(161))}}catch(Y){Ve(e,e.return,Y)}e.flags&=-3}u&4096&&(e.flags&=-4097)}function Ad(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var u=e;Ad(u),u.tag===5&&u.flags&1024&&u.stateNode.reset(),e=e.sibling}}function h0(e,u){if(u.subtreeFlags&8772)for(u=u.child;u!==null;)jd(e,u.alternate,u),u=u.sibling}function Mt(e){for(e=e.child;e!==null;){var u=e;switch(u.tag){case 0:case 11:case 14:case 15:W0(4,u,u.return),Mt(u);break;case 1:Wa(u,u.return);var a=u.stateNode;typeof a.componentWillUnmount=="function"&&xd(u,u.return,a),Mt(u);break;case 27:Mi(u.stateNode);case 26:case 5:Wa(u,u.return),Mt(u);break;case 22:u.memoizedState===null&&Mt(u);break;case 30:Mt(u);break;default:Mt(u)}e=e.sibling}}function p0(e,u,a){for(a=a&&(u.subtreeFlags&8772)!==0,u=u.child;u!==null;){var t=u.alternate,i=e,r=u,b=r.flags;switch(r.tag){case 0:case 11:case 15:p0(i,r,a),zi(4,r);break;case 1:if(p0(i,r,a),t=r,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(L){Ve(t,t.return,L)}if(t=r,i=t.updateQueue,i!==null){var g=t.stateNode;try{var R=i.shared.hiddenCallbacks;if(R!==null)for(i.shared.hiddenCallbacks=null,i=0;i<R.length;i++)ic(R[i],g)}catch(L){Ve(t,t.return,L)}}a&&b&64&&pd(r),Si(r,r.return);break;case 27:yd(r);case 26:case 5:p0(i,r,a),a&&t===null&&b&4&&gd(r),Si(r,r.return);break;case 12:p0(i,r,a);break;case 31:p0(i,r,a),a&&b&4&&Sd(i,r);break;case 13:p0(i,r,a),a&&b&4&&Rd(i,r);break;case 22:r.memoizedState===null&&p0(i,r,a),Si(r,r.return);break;case 30:break;default:p0(i,r,a)}u=u.sibling}}function t4(e,u){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(e=u.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&di(a))}function n4(e,u){e=null,u.alternate!==null&&(e=u.alternate.memoizedState.cache),u=u.memoizedState.cache,u!==e&&(u.refCount++,e!=null&&di(e))}function Fa(e,u,a,t){if(u.subtreeFlags&10256)for(u=u.child;u!==null;)Ed(e,u,a,t),u=u.sibling}function Ed(e,u,a,t){var i=u.flags;switch(u.tag){case 0:case 11:case 15:Fa(e,u,a,t),i&2048&&zi(9,u);break;case 1:Fa(e,u,a,t);break;case 3:Fa(e,u,a,t),i&2048&&(e=null,u.alternate!==null&&(e=u.alternate.memoizedState.cache),u=u.memoizedState.cache,u!==e&&(u.refCount++,e!=null&&di(e)));break;case 12:if(i&2048){Fa(e,u,a,t),e=u.stateNode;try{var r=u.memoizedProps,b=r.id,g=r.onPostCommit;typeof g=="function"&&g(b,u.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Ve(u,u.return,R)}}else Fa(e,u,a,t);break;case 31:Fa(e,u,a,t);break;case 13:Fa(e,u,a,t);break;case 23:break;case 22:r=u.stateNode,b=u.alternate,u.memoizedState!==null?r._visibility&2?Fa(e,u,a,t):Ri(e,u):r._visibility&2?Fa(e,u,a,t):(r._visibility|=2,vn(e,u,a,t,(u.subtreeFlags&10256)!==0||!1)),i&2048&&t4(b,u);break;case 24:Fa(e,u,a,t),i&2048&&n4(u.alternate,u);break;default:Fa(e,u,a,t)}}function vn(e,u,a,t,i){for(i=i&&((u.subtreeFlags&10256)!==0||!1),u=u.child;u!==null;){var r=e,b=u,g=a,R=t,L=b.flags;switch(b.tag){case 0:case 11:case 15:vn(r,b,g,R,i),zi(8,b);break;case 23:break;case 22:var Y=b.stateNode;b.memoizedState!==null?Y._visibility&2?vn(r,b,g,R,i):Ri(r,b):(Y._visibility|=2,vn(r,b,g,R,i)),i&&L&2048&&t4(b.alternate,b);break;case 24:vn(r,b,g,R,i),i&&L&2048&&n4(b.alternate,b);break;default:vn(r,b,g,R,i)}u=u.sibling}}function Ri(e,u){if(u.subtreeFlags&10256)for(u=u.child;u!==null;){var a=e,t=u,i=t.flags;switch(t.tag){case 22:Ri(a,t),i&2048&&t4(t.alternate,t);break;case 24:Ri(a,t),i&2048&&n4(t.alternate,t);break;default:Ri(a,t)}u=u.sibling}}var Ni=8192;function yn(e,u,a){if(e.subtreeFlags&Ni)for(e=e.child;e!==null;)Td(e,u,a),e=e.sibling}function Td(e,u,a){switch(e.tag){case 26:yn(e,u,a),e.flags&Ni&&e.memoizedState!==null&&$5(a,Ba,e.memoizedState,e.memoizedProps);break;case 5:yn(e,u,a);break;case 3:case 4:var t=Ba;Ba=ns(e.stateNode.containerInfo),yn(e,u,a),Ba=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ni,Ni=16777216,yn(e,u,a),Ni=t):yn(e,u,a));break;default:yn(e,u,a)}}function qd(e){var u=e.alternate;if(u!==null&&(e=u.child,e!==null)){u.child=null;do u=e.sibling,e.sibling=null,e=u;while(e!==null)}}function Ai(e){var u=e.deletions;if((e.flags&16)!==0){if(u!==null)for(var a=0;a<u.length;a++){var t=u[a];zu=t,Od(t,e)}qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 0:case 11:case 15:Ai(e),e.flags&2048&&W0(9,e,e.return);break;case 3:Ai(e);break;case 12:Ai(e);break;case 22:var u=e.stateNode;e.memoizedState!==null&&u._visibility&2&&(e.return===null||e.return.tag!==13)?(u._visibility&=-3,Yl(e)):Ai(e);break;default:Ai(e)}}function Yl(e){var u=e.deletions;if((e.flags&16)!==0){if(u!==null)for(var a=0;a<u.length;a++){var t=u[a];zu=t,Od(t,e)}qd(e)}for(e=e.child;e!==null;){switch(u=e,u.tag){case 0:case 11:case 15:W0(8,u,u.return),Yl(u);break;case 22:a=u.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(u));break;default:Yl(u)}e=e.sibling}}function Od(e,u){for(;zu!==null;){var a=zu;switch(a.tag){case 0:case 11:case 15:W0(8,a,u);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var t=a.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:di(a.memoizedState.cache)}if(t=a.child,t!==null)t.return=a,zu=t;else e:for(a=e;zu!==null;){t=zu;var i=t.sibling,r=t.return;if(wd(t),t===a){zu=null;break e}if(i!==null){i.return=r,zu=i;break e}zu=r}}}var t5={getCacheForType:function(e){var u=Eu(bu),a=u.data.get(e);return a===void 0&&(a=e(),u.data.set(e,a)),a},cacheSignal:function(){return Eu(bu).controller.signal}},n5=typeof WeakMap=="function"?WeakMap:Map,Be=0,Xe=null,ke=null,Ne=0,$e=0,ma=null,Z0=!1,kn=!1,i4=!1,x0=0,ru=0,P0=0,Dt=0,l4=0,ba=0,jn=0,Ei=null,Zu=null,s4=!1,Ql=0,Md=0,Jl=1/0,Gl=null,X0=null,vu=0,I0=null,wn=null,g0=0,r4=0,o4=null,Dd=null,Ti=0,c4=null;function ha(){return(Be&2)!==0&&Ne!==0?Ne&-Ne:V.T!==null?p4():Ta()}function _d(){if(ba===0)if((Ne&536870912)===0||Te){var e=S0;S0<<=1,(S0&3932160)===0&&(S0=262144),ba=e}else ba=536870912;return e=da.current,e!==null&&(e.flags|=32),ba}function Pu(e,u,a){(e===Xe&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(zn(e,0),et(e,Ne,ba,!1)),Ru(e,a),((Be&2)===0||e!==Xe)&&(e===Xe&&((Be&2)===0&&(Dt|=a),ru===4&&et(e,Ne,ba,!1)),Za(e))}function Ud(e,u,a){if((Be&6)!==0)throw Error(d(327));var t=!a&&(u&127)===0&&(u&e.expiredLanes)===0||dt(e,u),i=t?s5(e,u):f4(e,u,!0),r=t;do{if(i===0){kn&&!t&&et(e,u,0,!1);break}else{if(a=e.current.alternate,r&&!i5(a)){i=f4(e,u,!1),r=!1;continue}if(i===2){if(r=u,e.errorRecoveryDisabledLanes&r)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){u=b;e:{var g=e;i=Ei;var R=g.current.memoizedState.isDehydrated;if(R&&(zn(g,b).flags|=256),b=f4(g,b,!1),b!==2){if(i4&&!R){g.errorRecoveryDisabledLanes|=r,Dt|=r,i=4;break e}r=Zu,Zu=i,r!==null&&(Zu===null?Zu=r:Zu.push.apply(Zu,r))}i=b}if(r=!1,i!==2)continue}}if(i===1){zn(e,0),et(e,u,0,!0);break}e:{switch(t=e,r=i,r){case 0:case 1:throw Error(d(345));case 4:if((u&4194048)!==u)break;case 6:et(t,u,ba,!Z0);break e;case 2:Zu=null;break;case 3:case 5:break;default:throw Error(d(329))}if((u&62914560)===u&&(i=Ql+300-Ou(),10<i)){if(et(t,u,ba,!Z0),R0(t,0,!0)!==0)break e;g0=u,t.timeoutHandle=b3(Ld.bind(null,t,a,Zu,Gl,s4,u,ba,Dt,jn,Z0,r,"Throttled",-0,0),i);break e}Ld(t,a,Zu,Gl,s4,u,ba,Dt,jn,Z0,r,null,-0,0)}}break}while(!0);Za(e)}function Ld(e,u,a,t,i,r,b,g,R,L,Y,G,B,$){if(e.timeoutHandle=-1,G=u.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vu},Td(u,r,G);var te=(r&62914560)===r?Ql-Ou():(r&4194048)===r?Md-Ou():0;if(te=V5(G,te),te!==null){g0=r,e.cancelPendingCommit=te(Qd.bind(null,e,u,r,a,t,i,b,g,R,Y,G,null,B,$)),et(e,r,b,!L);return}}Qd(e,u,r,a,t,i,b,g,R)}function i5(e){for(var u=e;;){var a=u.tag;if((a===0||a===11||a===15)&&u.flags&16384&&(a=u.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var t=0;t<a.length;t++){var i=a[t],r=i.getSnapshot;i=i.value;try{if(!oa(r(),i))return!1}catch{return!1}}if(a=u.child,u.subtreeFlags&16384&&a!==null)a.return=u,u=a;else{if(u===e)break;for(;u.sibling===null;){if(u.return===null||u.return===e)return!0;u=u.return}u.sibling.return=u.return,u=u.sibling}}return!0}function et(e,u,a,t){u&=~l4,u&=~Dt,e.suspendedLanes|=u,e.pingedLanes&=~u,t&&(e.warmLanes|=u),t=e.expirationTimes;for(var i=u;0<i;){var r=31-Mu(i),b=1<<r;t[r]=-1,i&=~b}a!==0&&Gn(e,a,u)}function Wl(){return(Be&6)===0?(qi(0),!1):!0}function d4(){if(ke!==null){if($e===0)var e=ke.return;else e=ke,s0=Rt=null,Nr(e),bn=null,mi=0,e=ke;for(;e!==null;)hd(e.alternate,e),e=e.return;ke=null}}function zn(e,u){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,S5(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),g0=0,d4(),Xe=e,ke=a=i0(e.current,null),Ne=u,$e=0,ma=null,Z0=!1,kn=dt(e,u),i4=!1,jn=ba=l4=Dt=P0=ru=0,Zu=Ei=null,s4=!1,(u&8)!==0&&(u|=u&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=u;0<t;){var i=31-Mu(t),r=1<<i;u|=e[i],t&=~r}return x0=u,pl(),a}function Bd(e,u){pe=null,V.H=ki,u===mn||u===zl?(u=uc(),$e=3):u===hr?(u=uc(),$e=4):$e=u===Vr?8:u!==null&&typeof u=="object"&&typeof u.then=="function"?6:1,ma=u,ke===null&&(ru=1,Ll(e,xa(u,e.current)))}function Fd(){var e=da.current;return e===null?!0:(Ne&4194048)===Ne?ka===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===ka:!1}function Hd(){var e=V.H;return V.H=ki,e===null?ki:e}function $d(){var e=V.A;return V.A=t5,e}function Zl(){ru=4,Z0||(Ne&4194048)!==Ne&&da.current!==null||(kn=!0),(P0&134217727)===0&&(Dt&134217727)===0||Xe===null||et(Xe,Ne,ba,!1)}function f4(e,u,a){var t=Be;Be|=2;var i=Hd(),r=$d();(Xe!==e||Ne!==u)&&(Gl=null,zn(e,u)),u=!1;var b=ru;e:do try{if($e!==0&&ke!==null){var g=ke,R=ma;switch($e){case 8:d4(),b=6;break e;case 3:case 2:case 9:case 6:da.current===null&&(u=!0);var L=$e;if($e=0,ma=null,Sn(e,g,R,L),a&&kn){b=0;break e}break;default:L=$e,$e=0,ma=null,Sn(e,g,R,L)}}l5(),b=ru;break}catch(Y){Bd(e,Y)}while(!0);return u&&e.shellSuspendCounter++,s0=Rt=null,Be=t,V.H=i,V.A=r,ke===null&&(Xe=null,Ne=0,pl()),b}function l5(){for(;ke!==null;)Vd(ke)}function s5(e,u){var a=Be;Be|=2;var t=Hd(),i=$d();Xe!==e||Ne!==u?(Gl=null,Jl=Ou()+500,zn(e,u)):kn=dt(e,u);e:do try{if($e!==0&&ke!==null){u=ke;var r=ma;u:switch($e){case 1:$e=0,ma=null,Sn(e,u,r,1);break;case 2:case 9:if(Io(r)){$e=0,ma=null,Kd(u);break}u=function(){$e!==2&&$e!==9||Xe!==e||($e=7),Za(e)},r.then(u,u);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:Io(r)?($e=0,ma=null,Kd(u)):($e=0,ma=null,Sn(e,u,r,7));break;case 5:var b=null;switch(ke.tag){case 26:b=ke.memoizedState;case 5:case 27:var g=ke;if(b?E3(b):g.stateNode.complete){$e=0,ma=null;var R=g.sibling;if(R!==null)ke=R;else{var L=g.return;L!==null?(ke=L,Pl(L)):ke=null}break u}}$e=0,ma=null,Sn(e,u,r,5);break;case 6:$e=0,ma=null,Sn(e,u,r,6);break;case 8:d4(),ru=6;break e;default:throw Error(d(462))}}r5();break}catch(Y){Bd(e,Y)}while(!0);return s0=Rt=null,V.H=t,V.A=i,Be=a,ke!==null?0:(Xe=null,Ne=0,pl(),ru)}function r5(){for(;ke!==null&&!_s();)Vd(ke)}function Vd(e){var u=md(e.alternate,e,x0);e.memoizedProps=e.pendingProps,u===null?Pl(e):ke=u}function Kd(e){var u=e,a=u.alternate;switch(u.tag){case 15:case 0:u=sd(a,u,u.pendingProps,u.type,void 0,Ne);break;case 11:u=sd(a,u,u.pendingProps,u.type.render,u.ref,Ne);break;case 5:Nr(u);default:hd(a,u),u=ke=$o(u,x0),u=md(a,u,x0)}e.memoizedProps=e.pendingProps,u===null?Pl(e):ke=u}function Sn(e,u,a,t){s0=Rt=null,Nr(u),bn=null,mi=0;var i=u.return;try{if(Zm(e,i,u,a,Ne)){ru=1,Ll(e,xa(a,e.current)),ke=null;return}}catch(r){if(i!==null)throw ke=i,r;ru=1,Ll(e,xa(a,e.current)),ke=null;return}u.flags&32768?(Te||t===1?e=!0:kn||(Ne&536870912)!==0?e=!1:(Z0=e=!0,(t===2||t===9||t===3||t===6)&&(t=da.current,t!==null&&t.tag===13&&(t.flags|=16384))),Yd(u,e)):Pl(u)}function Pl(e){var u=e;do{if((u.flags&32768)!==0){Yd(u,Z0);return}e=u.return;var a=Im(u.alternate,u,x0);if(a!==null){ke=a;return}if(u=u.sibling,u!==null){ke=u;return}ke=u=e}while(u!==null);ru===0&&(ru=5)}function Yd(e,u){do{var a=e5(e.alternate,e);if(a!==null){a.flags&=32767,ke=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!u&&(e=e.sibling,e!==null)){ke=e;return}ke=e=a}while(e!==null);ru=6,ke=null}function Qd(e,u,a,t,i,r,b,g,R){e.cancelPendingCommit=null;do Xl();while(vu!==0);if((Be&6)!==0)throw Error(d(327));if(u!==null){if(u===e.current)throw Error(d(177));if(r=u.lanes|u.childLanes,r|=er,il(e,a,r,b,g,R),e===Xe&&(ke=Xe=null,Ne=0),wn=u,I0=e,g0=a,r4=r,o4=i,Dd=t,(u.subtreeFlags&10256)!==0||(u.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,f5(Kt,function(){return Pd(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(u.flags&13878)!==0,(u.subtreeFlags&13878)!==0||t){t=V.T,V.T=null,i=X.p,X.p=2,b=Be,Be|=4;try{u5(e,u,a)}finally{Be=b,X.p=i,V.T=t}}vu=1,Jd(),Gd(),Wd()}}function Jd(){if(vu===1){vu=0;var e=I0,u=wn,a=(u.flags&13878)!==0;if((u.subtreeFlags&13878)!==0||a){a=V.T,V.T=null;var t=X.p;X.p=2;var i=Be;Be|=4;try{Nd(u,e);var r=z4,b=Oo(e.containerInfo),g=r.focusedElem,R=r.selectionRange;if(b!==g&&g&&g.ownerDocument&&Co(g.ownerDocument.documentElement,g)){if(R!==null&&Ws(g)){var L=R.start,Y=R.end;if(Y===void 0&&(Y=L),"selectionStart"in g)g.selectionStart=L,g.selectionEnd=Math.min(Y,g.value.length);else{var G=g.ownerDocument||document,B=G&&G.defaultView||window;if(B.getSelection){var $=B.getSelection(),te=g.textContent.length,re=Math.min(R.start,te),Qe=R.end===void 0?re:Math.min(R.end,te);!$.extend&&re>Qe&&(b=Qe,Qe=re,re=b);var O=qo(g,re),E=qo(g,Qe);if(O&&E&&($.rangeCount!==1||$.anchorNode!==O.node||$.anchorOffset!==O.offset||$.focusNode!==E.node||$.focusOffset!==E.offset)){var U=G.createRange();U.setStart(O.node,O.offset),$.removeAllRanges(),re>Qe?($.addRange(U),$.extend(E.node,E.offset)):(U.setEnd(E.node,E.offset),$.addRange(U))}}}}for(G=[],$=g;$=$.parentNode;)$.nodeType===1&&G.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<G.length;g++){var Q=G[g];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}cs=!!w4,z4=w4=null}finally{Be=i,X.p=t,V.T=a}}e.current=u,vu=2}}function Gd(){if(vu===2){vu=0;var e=I0,u=wn,a=(u.flags&8772)!==0;if((u.subtreeFlags&8772)!==0||a){a=V.T,V.T=null;var t=X.p;X.p=2;var i=Be;Be|=4;try{jd(e,u.alternate,u)}finally{Be=i,X.p=t,V.T=a}}vu=3}}function Wd(){if(vu===4||vu===3){vu=0,Us();var e=I0,u=wn,a=g0,t=Dd;(u.subtreeFlags&10256)!==0||(u.flags&10256)!==0?vu=5:(vu=0,wn=I0=null,Zd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(X0=null),mt(a),u=u.stateNode,Fu&&typeof Fu.onCommitFiberRoot=="function")try{Fu.onCommitFiberRoot(z0,u,void 0,(u.current.flags&128)===128)}catch{}if(t!==null){u=V.T,i=X.p,X.p=2,V.T=null;try{for(var r=e.onRecoverableError,b=0;b<t.length;b++){var g=t[b];r(g.value,{componentStack:g.stack})}}finally{V.T=u,X.p=i}}(g0&3)!==0&&Xl(),Za(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===c4?Ti++:(Ti=0,c4=e):Ti=0,qi(0)}}function Zd(e,u){(e.pooledCacheLanes&=u)===0&&(u=e.pooledCache,u!=null&&(e.pooledCache=null,di(u)))}function Xl(){return Jd(),Gd(),Wd(),Pd()}function Pd(){if(vu!==5)return!1;var e=I0,u=r4;r4=0;var a=mt(g0),t=V.T,i=X.p;try{X.p=32>a?32:a,V.T=null,a=o4,o4=null;var r=I0,b=g0;if(vu=0,wn=I0=null,g0=0,(Be&6)!==0)throw Error(d(331));var g=Be;if(Be|=4,Cd(r.current),Ed(r,r.current,b,a),Be=g,qi(0,!1),Fu&&typeof Fu.onPostCommitFiberRoot=="function")try{Fu.onPostCommitFiberRoot(z0,r)}catch{}return!0}finally{X.p=i,V.T=t,Zd(e,u)}}function Xd(e,u,a){u=xa(a,u),u=$r(e.stateNode,u,2),e=Q0(e,u,2),e!==null&&(Ru(e,2),Za(e))}function Ve(e,u,a){if(e.tag===3)Xd(e,e,a);else for(;u!==null;){if(u.tag===3){Xd(u,e,a);break}else if(u.tag===1){var t=u.stateNode;if(typeof u.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(X0===null||!X0.has(t))){e=xa(a,e),a=Ic(2),t=Q0(u,a,2),t!==null&&(ed(a,t,u,e),Ru(t,2),Za(t));break}}u=u.return}}function m4(e,u,a){var t=e.pingCache;if(t===null){t=e.pingCache=new n5;var i=new Set;t.set(u,i)}else i=t.get(u),i===void 0&&(i=new Set,t.set(u,i));i.has(a)||(i4=!0,i.add(a),e=o5.bind(null,e,u,a),u.then(e,e))}function o5(e,u,a){var t=e.pingCache;t!==null&&t.delete(u),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Ne&a)===a&&(ru===4||ru===3&&(Ne&62914560)===Ne&&300>Ou()-Ql?(Be&2)===0&&zn(e,0):l4|=a,jn===Ne&&(jn=0)),Za(e)}function Id(e,u){u===0&&(u=lu()),e=wt(e,u),e!==null&&(Ru(e,u),Za(e))}function c5(e){var u=e.memoizedState,a=0;u!==null&&(a=u.retryLane),Id(e,a)}function d5(e,u){var a=0;switch(e.tag){case 31:case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(d(314))}t!==null&&t.delete(u),Id(e,a)}function f5(e,u){return Vt(e,u)}var Il=null,Rn=null,b4=!1,es=!1,h4=!1,ut=0;function Za(e){e!==Rn&&e.next===null&&(Rn===null?Il=Rn=e:Rn=Rn.next=e),es=!0,b4||(b4=!0,b5())}function qi(e,u){if(!h4&&es){h4=!0;do for(var a=!1,t=Il;t!==null;){if(e!==0){var i=t.pendingLanes;if(i===0)var r=0;else{var b=t.suspendedLanes,g=t.pingedLanes;r=(1<<31-Mu(42|e)+1)-1,r&=i&~(b&~g),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,t3(t,r))}else r=Ne,r=R0(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(r&3)===0||dt(t,r)||(a=!0,t3(t,r));t=t.next}while(a);h4=!1}}function m5(){e3()}function e3(){es=b4=!1;var e=0;ut!==0&&z5()&&(e=ut);for(var u=Ou(),a=null,t=Il;t!==null;){var i=t.next,r=u3(t,u);r===0?(t.next=null,a===null?Il=i:a.next=i,i===null&&(Rn=a)):(a=t,(e!==0||(r&3)!==0)&&(es=!0)),t=i}vu!==0&&vu!==5||qi(e),ut!==0&&(ut=0)}function u3(e,u){for(var a=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var b=31-Mu(r),g=1<<b,R=i[b];R===-1?((g&a)===0||(g&t)!==0)&&(i[b]=ve(g,u)):R<=u&&(e.expiredLanes|=g),r&=~g}if(u=Xe,a=Ne,a=R0(e,e===u?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,a===0||e===u&&($e===2||$e===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&Jn(t),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||dt(e,a)){if(u=a&-a,u===e.callbackPriority)return u;switch(t!==null&&Jn(t),mt(a)){case 2:case 8:a=al;break;case 32:a=Kt;break;case 268435456:a=tl;break;default:a=Kt}return t=a3.bind(null,e),a=Vt(a,t),e.callbackPriority=u,e.callbackNode=a,u}return t!==null&&t!==null&&Jn(t),e.callbackPriority=2,e.callbackNode=null,2}function a3(e,u){if(vu!==0&&vu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var t=Ne;return t=R0(e,e===Xe?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Ud(e,t,u),u3(e,Ou()),e.callbackNode!=null&&e.callbackNode===a?a3.bind(null,e):null)}function t3(e,u){if(Xl())return null;Ud(e,u,!0)}function b5(){R5(function(){(Be&6)!==0?Vt(ul,m5):e3()})}function p4(){if(ut===0){var e=dn;e===0&&(e=ct,ct<<=1,(ct&261888)===0&&(ct=256)),ut=e}return ut}function n3(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:na(""+e)}function i3(e,u){var a=u.ownerDocument.createElement("input");return a.name=u.name,a.value=u.value,e.id&&a.setAttribute("form",e.id),u.parentNode.insertBefore(a,u),e=new FormData(e),a.parentNode.removeChild(a),e}function h5(e,u,a,t,i){if(u==="submit"&&a&&a.stateNode===i){var r=n3((i[yu]||null).action),b=t.submitter;b&&(u=(u=b[yu]||null)?n3(u.formAction):b.getAttribute("formAction"),u!==null&&(r=u,b=null));var g=new vt("action","action",null,t,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(ut!==0){var R=b?i3(i,b):new FormData(i);_r(a,{pending:!0,data:R,method:i.method,action:r},null,R)}}else typeof r=="function"&&(g.preventDefault(),R=b?i3(i,b):new FormData(i),_r(a,{pending:!0,data:R,method:i.method,action:r},r,R))},currentTarget:i}]})}}for(var x4=0;x4<Is.length;x4++){var g4=Is[x4],p5=g4.toLowerCase(),x5=g4[0].toUpperCase()+g4.slice(1);La(p5,"on"+x5)}La(_o,"onAnimationEnd"),La(Uo,"onAnimationIteration"),La(Lo,"onAnimationStart"),La("dblclick","onDoubleClick"),La("focusin","onFocus"),La("focusout","onBlur"),La(Om,"onTransitionRun"),La(Mm,"onTransitionStart"),La(Dm,"onTransitionCancel"),La(Bo,"onTransitionEnd"),T0("onMouseEnter",["mouseout","mouseover"]),T0("onMouseLeave",["mouseout","mouseover"]),T0("onPointerEnter",["pointerout","pointerover"]),T0("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci));function l3(e,u){u=(u&4)!==0;for(var a=0;a<e.length;a++){var t=e[a],i=t.event;t=t.listeners;e:{var r=void 0;if(u)for(var b=t.length-1;0<=b;b--){var g=t[b],R=g.instance,L=g.currentTarget;if(g=g.listener,R!==r&&i.isPropagationStopped())break e;r=g,i.currentTarget=L;try{r(i)}catch(Y){hl(Y)}i.currentTarget=null,r=R}else for(b=0;b<t.length;b++){if(g=t[b],R=g.instance,L=g.currentTarget,g=g.listener,R!==r&&i.isPropagationStopped())break e;r=g,i.currentTarget=L;try{r(i)}catch(Y){hl(Y)}i.currentTarget=null,r=R}}}}function je(e,u){var a=u[Pn];a===void 0&&(a=u[Pn]=new Set);var t=e+"__bubble";a.has(t)||(s3(u,e,2,!1),a.add(t))}function v4(e,u,a){var t=0;u&&(t|=4),s3(a,e,t,u)}var us="_reactListening"+Math.random().toString(36).slice(2);function y4(e){if(!e[us]){e[us]=!0,Jt.forEach(function(a){a!=="selectionchange"&&(g5.has(a)||v4(a,!1,e),v4(a,!0,e))});var u=e.nodeType===9?e:e.ownerDocument;u===null||u[us]||(u[us]=!0,v4("selectionchange",!1,u))}}function s3(e,u,a,t){switch(_3(u)){case 2:var i=Q5;break;case 8:i=J5;break;default:i=D4}a=i.bind(null,u,a,e),i=void 0,!Xt||u!=="touchstart"&&u!=="touchmove"&&u!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(u,a,{capture:!0,passive:i}):e.addEventListener(u,a,!0):i!==void 0?e.addEventListener(u,a,{passive:i}):e.addEventListener(u,a,!1)}function k4(e,u,a,t,i){var r=t;if((u&1)===0&&(u&2)===0&&t!==null)e:for(;;){if(t===null)return;var b=t.tag;if(b===3||b===4){var g=t.stateNode.containerInfo;if(g===i)break;if(b===4)for(b=t.return;b!==null;){var R=b.tag;if((R===3||R===4)&&b.stateNode.containerInfo===i)return;b=b.return}for(;g!==null;){if(b=A0(g),b===null)return;if(R=b.tag,R===5||R===6||R===26||R===27){t=r=b;continue e}g=g.parentNode}}t=t.return}_a(function(){var L=r,Y=M0(a),G=[];e:{var B=Fo.get(e);if(B!==void 0){var $=vt,te=e;switch(e){case"keypress":if(D0(a)===0)break e;case"keydown":case"keyup":$=en;break;case"focusin":te="focus",$=z;break;case"focusout":te="blur",$=z;break;case"beforeblur":case"afterblur":$=z;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=de;break;case _o:case Uo:case Lo:$=H;break;case Bo:$=sa;break;case"scroll":case"scrollend":$=Ys;break;case"wheel":$=Nu;break;case"copy":case"cut":case"paste":$=W;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=yt;break;case"toggle":case"beforetoggle":$=ym}var re=(u&4)!==0,Qe=!re&&(e==="scroll"||e==="scrollend"),O=re?B!==null?B+"Capture":null:B;re=[];for(var E=L,U;E!==null;){var Q=E;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||O===null||(Q=Ze(E,O),Q!=null&&re.push(Oi(E,Q,U))),Qe)break;E=E.return}0<re.length&&(B=new $(B,te,null,a,Y),G.push({event:B,listeners:re}))}}if((u&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",B&&a!==Ca&&(te=a.relatedTarget||a.fromElement)&&(A0(te)||te[e0]))break e;if(($||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,$?(te=a.relatedTarget||a.toElement,$=L,te=te?A0(te):null,te!==null&&(Qe=x(te),re=te.tag,te!==Qe||re!==5&&re!==27&&re!==6)&&(te=null)):($=null,te=L),$!==te)){if(re=s,Q="onMouseLeave",O="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(re=yt,Q="onPointerLeave",O="onPointerEnter",E="pointer"),Qe=$==null?B:ht($),U=te==null?B:ht(te),B=new re(Q,E+"leave",$,a,Y),B.target=Qe,B.relatedTarget=U,Q=null,A0(Y)===L&&(re=new re(O,E+"enter",te,a,Y),re.target=U,re.relatedTarget=Qe,Q=re),Qe=Q,$&&te)u:{for(re=v5,O=$,E=te,U=0,Q=O;Q;Q=re(Q))U++;Q=0;for(var se=E;se;se=re(se))Q++;for(;0<U-Q;)O=re(O),U--;for(;0<Q-U;)E=re(E),Q--;for(;U--;){if(O===E||E!==null&&O===E.alternate){re=O;break u}O=re(O),E=re(E)}re=null}else re=null;$!==null&&r3(G,B,$,re,!1),te!==null&&Qe!==null&&r3(G,Qe,te,re,!0)}}e:{if(B=L?ht(L):window,$=B.nodeName&&B.nodeName.toLowerCase(),$==="select"||$==="input"&&B.type==="file")var _e=So;else if(wo(B))if(Ro)_e=Tm;else{_e=Am;var ie=Nm}else $=B.nodeName,!$||$.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&Ka(L.elementType)&&(_e=So):_e=Em;if(_e&&(_e=_e(e,L))){zo(G,_e,a,Y);break e}ie&&ie(e,B,L),e==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&We(B,"number",B.value)}switch(ie=L?ht(L):window,e){case"focusin":(wo(ie)||ie.contentEditable==="true")&&(an=ie,Zs=L,ri=null);break;case"focusout":ri=Zs=an=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Mo(G,a,Y);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":Mo(G,a,Y)}var ge;if(Qs)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else un?ko(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(go&&a.locale!=="ko"&&(un||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&un&&(ge=fl()):(Ua=Y,la="value"in Ua?Ua.value:Ua.textContent,un=!0)),ie=as(L,Ae),0<ie.length&&(Ae=new xe(Ae,e,null,a,Y),G.push({event:Ae,listeners:ie}),ge?Ae.data=ge:(ge=jo(a),ge!==null&&(Ae.data=ge)))),(ge=jm?wm(e,a):zm(e,a))&&(Ae=as(L,"onBeforeInput"),0<Ae.length&&(ie=new xe("onBeforeInput","beforeinput",null,a,Y),G.push({event:ie,listeners:Ae}),ie.data=ge)),h5(G,e,L,a,Y)}l3(G,u)})}function Oi(e,u,a){return{instance:e,listener:u,currentTarget:a}}function as(e,u){for(var a=u+"Capture",t=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Ze(e,a),i!=null&&t.unshift(Oi(e,i,r)),i=Ze(e,u),i!=null&&t.push(Oi(e,i,r))),e.tag===3)return t;e=e.return}return[]}function v5(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r3(e,u,a,t,i){for(var r=u._reactName,b=[];a!==null&&a!==t;){var g=a,R=g.alternate,L=g.stateNode;if(g=g.tag,R!==null&&R===t)break;g!==5&&g!==26&&g!==27||L===null||(R=L,i?(L=Ze(a,r),L!=null&&b.unshift(Oi(a,L,R))):i||(L=Ze(a,r),L!=null&&b.push(Oi(a,L,R)))),a=a.return}b.length!==0&&e.push({event:u,listeners:b})}var y5=/\r\n?/g,k5=/\u0000|\uFFFD/g;function o3(e){return(typeof e=="string"?e:""+e).replace(y5,`
`).replace(k5,"")}function c3(e,u){return u=o3(u),o3(e)===u}function Ye(e,u,a,t,i,r){switch(a){case"children":typeof t=="string"?u==="body"||u==="textarea"&&t===""||Se(e,t):(typeof t=="number"||typeof t=="bigint")&&u!=="body"&&Se(e,""+t);break;case"className":Zt(e,"class",t);break;case"tabIndex":Zt(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Zt(e,a,t);break;case"style":ai(e,t,r);break;case"data":if(u!=="object"){Zt(e,"data",t);break}case"src":case"href":if(t===""&&(u!=="a"||a!=="href")){e.removeAttribute(a);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(a);break}t=na(""+t),e.setAttribute(a,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(u!=="input"&&Ye(e,u,"name",i.name,i,null),Ye(e,u,"formEncType",i.formEncType,i,null),Ye(e,u,"formMethod",i.formMethod,i,null),Ye(e,u,"formTarget",i.formTarget,i,null)):(Ye(e,u,"encType",i.encType,i,null),Ye(e,u,"method",i.method,i,null),Ye(e,u,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(a);break}t=na(""+t),e.setAttribute(a,t);break;case"onClick":t!=null&&(e.onclick=Vu);break;case"onScroll":t!=null&&je("scroll",e);break;case"onScrollEnd":t!=null&&je("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(a=t.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}a=na(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,""+t):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":t===!0?e.setAttribute(a,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,t):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(a,t):e.removeAttribute(a);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(a):e.setAttribute(a,t);break;case"popover":je("beforetoggle",e),je("toggle",e),aa(e,"popover",t);break;case"xlinkActuate":ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":ta(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":ta(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":ta(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":ta(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":aa(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dl.get(a)||a,aa(e,a,t))}}function j4(e,u,a,t,i,r){switch(a){case"style":ai(e,t,r);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(a=t.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof t=="string"?Se(e,t):(typeof t=="number"||typeof t=="bigint")&&Se(e,""+t);break;case"onScroll":t!=null&&je("scroll",e);break;case"onScrollEnd":t!=null&&je("scrollend",e);break;case"onClick":t!=null&&(e.onclick=Vu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),u=a.slice(2,i?a.length-7:void 0),r=e[yu]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(u,r,i),typeof t=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,t,i);break e}a in e?e[a]=t:t===!0?e.setAttribute(a,""):aa(e,a,t)}}}function qu(e,u,a){switch(u){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",e),je("load",e);var t=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var b=a[r];if(b!=null)switch(r){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,u));default:Ye(e,u,r,b,a,null)}}i&&Ye(e,u,"srcSet",a.srcSet,a,null),t&&Ye(e,u,"src",a.src,a,null);return;case"input":je("invalid",e);var g=r=b=i=null,R=null,L=null;for(t in a)if(a.hasOwnProperty(t)){var Y=a[t];if(Y!=null)switch(t){case"name":i=Y;break;case"type":b=Y;break;case"checked":R=Y;break;case"defaultChecked":L=Y;break;case"value":r=Y;break;case"defaultValue":g=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(d(137,u));break;default:Ye(e,u,t,Y,a,null)}}ol(e,r,g,R,L,b,i,!1);return;case"select":je("invalid",e),t=b=r=null;for(i in a)if(a.hasOwnProperty(i)&&(g=a[i],g!=null))switch(i){case"value":r=g;break;case"defaultValue":b=g;break;case"multiple":t=g;default:Ye(e,u,i,g,a,null)}u=r,a=b,e.multiple=!!t,u!=null?q0(e,!!t,u,!1):a!=null&&q0(e,!!t,a,!0);return;case"textarea":je("invalid",e),r=i=t=null;for(b in a)if(a.hasOwnProperty(b)&&(g=a[b],g!=null))switch(b){case"value":t=g;break;case"defaultValue":i=g;break;case"children":r=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:Ye(e,u,b,g,a,null)}C0(e,t,i,r);return;case"option":for(R in a)a.hasOwnProperty(R)&&(t=a[R],t!=null)&&(R==="selected"?e.selected=t&&typeof t!="function"&&typeof t!="symbol":Ye(e,u,R,t,a,null));return;case"dialog":je("beforetoggle",e),je("toggle",e),je("cancel",e),je("close",e);break;case"iframe":case"object":je("load",e);break;case"video":case"audio":for(t=0;t<Ci.length;t++)je(Ci[t],e);break;case"image":je("error",e),je("load",e);break;case"details":je("toggle",e);break;case"embed":case"source":case"link":je("error",e),je("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(t=a[L],t!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,u));default:Ye(e,u,L,t,a,null)}return;default:if(Ka(u)){for(Y in a)a.hasOwnProperty(Y)&&(t=a[Y],t!==void 0&&j4(e,u,Y,t,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(t=a[g],t!=null&&Ye(e,u,g,t,a,null))}function j5(e,u,a,t){switch(u){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,b=null,g=null,R=null,L=null,Y=null;for($ in a){var G=a[$];if(a.hasOwnProperty($)&&G!=null)switch($){case"checked":break;case"value":break;case"defaultValue":R=G;default:t.hasOwnProperty($)||Ye(e,u,$,null,t,G)}}for(var B in t){var $=t[B];if(G=a[B],t.hasOwnProperty(B)&&($!=null||G!=null))switch(B){case"type":r=$;break;case"name":i=$;break;case"checked":L=$;break;case"defaultChecked":Y=$;break;case"value":b=$;break;case"defaultValue":g=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(d(137,u));break;default:$!==G&&Ye(e,u,B,$,t,G)}}Fe(e,b,g,R,L,Y,r,i);return;case"select":$=b=g=B=null;for(r in a)if(R=a[r],a.hasOwnProperty(r)&&R!=null)switch(r){case"value":break;case"multiple":$=R;default:t.hasOwnProperty(r)||Ye(e,u,r,null,t,R)}for(i in t)if(r=t[i],R=a[i],t.hasOwnProperty(i)&&(r!=null||R!=null))switch(i){case"value":B=r;break;case"defaultValue":g=r;break;case"multiple":b=r;default:r!==R&&Ye(e,u,i,r,t,R)}u=g,a=b,t=$,B!=null?q0(e,!!a,B,!1):!!t!=!!a&&(u!=null?q0(e,!!a,u,!0):q0(e,!!a,a?[]:"",!1));return;case"textarea":$=B=null;for(g in a)if(i=a[g],a.hasOwnProperty(g)&&i!=null&&!t.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ye(e,u,g,null,t,i)}for(b in t)if(i=t[b],r=a[b],t.hasOwnProperty(b)&&(i!=null||r!=null))switch(b){case"value":B=i;break;case"defaultValue":$=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==r&&Ye(e,u,b,i,t,r)}Me(e,B,$);return;case"option":for(var te in a)B=a[te],a.hasOwnProperty(te)&&B!=null&&!t.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:Ye(e,u,te,null,t,B));for(R in t)B=t[R],$=a[R],t.hasOwnProperty(R)&&B!==$&&(B!=null||$!=null)&&(R==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":Ye(e,u,R,B,t,$));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)B=a[re],a.hasOwnProperty(re)&&B!=null&&!t.hasOwnProperty(re)&&Ye(e,u,re,null,t,B);for(L in t)if(B=t[L],$=a[L],t.hasOwnProperty(L)&&B!==$&&(B!=null||$!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(d(137,u));break;default:Ye(e,u,L,B,t,$)}return;default:if(Ka(u)){for(var Qe in a)B=a[Qe],a.hasOwnProperty(Qe)&&B!==void 0&&!t.hasOwnProperty(Qe)&&j4(e,u,Qe,void 0,t,B);for(Y in t)B=t[Y],$=a[Y],!t.hasOwnProperty(Y)||B===$||B===void 0&&$===void 0||j4(e,u,Y,B,t,$);return}}for(var O in a)B=a[O],a.hasOwnProperty(O)&&B!=null&&!t.hasOwnProperty(O)&&Ye(e,u,O,null,t,B);for(G in t)B=t[G],$=a[G],!t.hasOwnProperty(G)||B===$||B==null&&$==null||Ye(e,u,G,B,t,$)}function d3(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function w5(){if(typeof performance.getEntriesByType=="function"){for(var e=0,u=0,a=performance.getEntriesByType("resource"),t=0;t<a.length;t++){var i=a[t],r=i.transferSize,b=i.initiatorType,g=i.duration;if(r&&g&&d3(b)){for(b=0,g=i.responseEnd,t+=1;t<a.length;t++){var R=a[t],L=R.startTime;if(L>g)break;var Y=R.transferSize,G=R.initiatorType;Y&&d3(G)&&(R=R.responseEnd,b+=Y*(R<g?1:(g-L)/(R-L)))}if(--t,u+=8*(r+b)/(i.duration/1e3),e++,10<e)break}}if(0<e)return u/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var w4=null,z4=null;function ts(e){return e.nodeType===9?e:e.ownerDocument}function f3(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m3(e,u){if(e===0)switch(u){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&u==="foreignObject"?0:e}function S4(e,u){return e==="textarea"||e==="noscript"||typeof u.children=="string"||typeof u.children=="number"||typeof u.children=="bigint"||typeof u.dangerouslySetInnerHTML=="object"&&u.dangerouslySetInnerHTML!==null&&u.dangerouslySetInnerHTML.__html!=null}var R4=null;function z5(){var e=window.event;return e&&e.type==="popstate"?e===R4?!1:(R4=e,!0):(R4=null,!1)}var b3=typeof setTimeout=="function"?setTimeout:void 0,S5=typeof clearTimeout=="function"?clearTimeout:void 0,h3=typeof Promise=="function"?Promise:void 0,R5=typeof queueMicrotask=="function"?queueMicrotask:typeof h3<"u"?function(e){return h3.resolve(null).then(e).catch(N5)}:b3;function N5(e){setTimeout(function(){throw e})}function at(e){return e==="head"}function p3(e,u){var a=u,t=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(t===0){e.removeChild(i),Tn(u);return}t--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")t++;else if(a==="html")Mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mi(a);for(var r=a.firstChild;r;){var b=r.nextSibling,g=r.nodeName;r[bt]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=b}}else a==="body"&&Mi(e.ownerDocument.body);a=i}while(a);Tn(u)}function x3(e,u){var a=e;e=0;do{var t=a.nextSibling;if(a.nodeType===1?u?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(u?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),t&&t.nodeType===8)if(a=t.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=t}while(a)}function N4(e){var u=e.firstChild;for(u&&u.nodeType===10&&(u=u.nextSibling);u;){var a=u;switch(u=u.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":N4(a),In(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function A5(e,u,a,t){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==u.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[bt])switch(u){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(u==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ja(e.nextSibling),e===null)break}return null}function E5(e,u,a){if(u==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ja(e.nextSibling),e===null))return null;return e}function g3(e,u){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!u||(e=ja(e.nextSibling),e===null))return null;return e}function A4(e){return e.data==="$?"||e.data==="$~"}function E4(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function T5(e,u){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=u;else if(e.data!=="$?"||a.readyState!=="loading")u();else{var t=function(){u(),a.removeEventListener("DOMContentLoaded",t)};a.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function ja(e){for(;e!=null;e=e.nextSibling){var u=e.nodeType;if(u===1||u===3)break;if(u===8){if(u=e.data,u==="$"||u==="$!"||u==="$?"||u==="$~"||u==="&"||u==="F!"||u==="F")break;if(u==="/$"||u==="/&")return null}}return e}var T4=null;function v3(e){e=e.nextSibling;for(var u=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(u===0)return ja(e.nextSibling);u--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||u++}e=e.nextSibling}return null}function y3(e){e=e.previousSibling;for(var u=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(u===0)return e;u--}else a!=="/$"&&a!=="/&"||u++}e=e.previousSibling}return null}function k3(e,u,a){switch(u=ts(a),e){case"html":if(e=u.documentElement,!e)throw Error(d(452));return e;case"head":if(e=u.head,!e)throw Error(d(453));return e;case"body":if(e=u.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Mi(e){for(var u=e.attributes;u.length;)e.removeAttributeNode(u[0]);In(e)}var wa=new Map,j3=new Set;function ns(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var v0=X.d;X.d={f:q5,r:C5,D:O5,C:M5,L:D5,m:_5,X:L5,S:U5,M:B5};function q5(){var e=v0.f(),u=Wl();return e||u}function C5(e){var u=E0(e);u!==null&&u.tag===5&&u.type==="form"?Bc(u):v0.r(e)}var Nn=typeof document>"u"?null:document;function w3(e,u,a){var t=Nn;if(t&&typeof u=="string"&&u){var i=$u(u);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),j3.has(i)||(j3.add(i),e={rel:e,crossOrigin:a,href:u},t.querySelector(i)===null&&(u=t.createElement("link"),qu(u,"link",e),mu(u),t.head.appendChild(u)))}}function O5(e){v0.D(e),w3("dns-prefetch",e,null)}function M5(e,u){v0.C(e,u),w3("preconnect",e,u)}function D5(e,u,a){v0.L(e,u,a);var t=Nn;if(t&&e&&u){var i='link[rel="preload"][as="'+$u(u)+'"]';u==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+$u(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+$u(a.imageSizes)+'"]')):i+='[href="'+$u(e)+'"]';var r=i;switch(u){case"style":r=An(e);break;case"script":r=En(e)}wa.has(r)||(e=S({rel:"preload",href:u==="image"&&a&&a.imageSrcSet?void 0:e,as:u},a),wa.set(r,e),t.querySelector(i)!==null||u==="style"&&t.querySelector(Di(r))||u==="script"&&t.querySelector(_i(r))||(u=t.createElement("link"),qu(u,"link",e),mu(u),t.head.appendChild(u)))}}function _5(e,u){v0.m(e,u);var a=Nn;if(a&&e){var t=u&&typeof u.as=="string"?u.as:"script",i='link[rel="modulepreload"][as="'+$u(t)+'"][href="'+$u(e)+'"]',r=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=En(e)}if(!wa.has(r)&&(e=S({rel:"modulepreload",href:e},u),wa.set(r,e),a.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_i(r)))return}t=a.createElement("link"),qu(t,"link",e),mu(t),a.head.appendChild(t)}}}function U5(e,u,a){v0.S(e,u,a);var t=Nn;if(t&&e){var i=Va(t).hoistableStyles,r=An(e);u=u||"default";var b=i.get(r);if(!b){var g={loading:0,preload:null};if(b=t.querySelector(Di(r)))g.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":u},a),(a=wa.get(r))&&q4(e,a);var R=b=t.createElement("link");mu(R),qu(R,"link",e),R._p=new Promise(function(L,Y){R.onload=L,R.onerror=Y}),R.addEventListener("load",function(){g.loading|=1}),R.addEventListener("error",function(){g.loading|=2}),g.loading|=4,is(b,u,t)}b={type:"stylesheet",instance:b,count:1,state:g},i.set(r,b)}}}function L5(e,u){v0.X(e,u);var a=Nn;if(a&&e){var t=Va(a).hoistableScripts,i=En(e),r=t.get(i);r||(r=a.querySelector(_i(i)),r||(e=S({src:e,async:!0},u),(u=wa.get(i))&&C4(e,u),r=a.createElement("script"),mu(r),qu(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},t.set(i,r))}}function B5(e,u){v0.M(e,u);var a=Nn;if(a&&e){var t=Va(a).hoistableScripts,i=En(e),r=t.get(i);r||(r=a.querySelector(_i(i)),r||(e=S({src:e,async:!0,type:"module"},u),(u=wa.get(i))&&C4(e,u),r=a.createElement("script"),mu(r),qu(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},t.set(i,r))}}function z3(e,u,a,t){var i=(i=Ea.current)?ns(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(u=An(a.href),a=Va(i).hoistableStyles,t=a.get(u),t||(t={type:"style",instance:null,count:0,state:null},a.set(u,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=An(a.href);var r=Va(i).hoistableStyles,b=r.get(e);if(b||(i=i.ownerDocument||i,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,b),(r=i.querySelector(Di(e)))&&!r._p&&(b.instance=r,b.state.loading=5),wa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wa.set(e,a),r||F5(i,e,a,b.state))),u&&t===null)throw Error(d(528,""));return b}if(u&&t!==null)throw Error(d(529,""));return null;case"script":return u=a.async,a=a.src,typeof a=="string"&&u&&typeof u!="function"&&typeof u!="symbol"?(u=En(a),a=Va(i).hoistableScripts,t=a.get(u),t||(t={type:"script",instance:null,count:0,state:null},a.set(u,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function An(e){return'href="'+$u(e)+'"'}function Di(e){return'link[rel="stylesheet"]['+e+"]"}function S3(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function F5(e,u,a,t){e.querySelector('link[rel="preload"][as="style"]['+u+"]")?t.loading=1:(u=e.createElement("link"),t.preload=u,u.addEventListener("load",function(){return t.loading|=1}),u.addEventListener("error",function(){return t.loading|=2}),qu(u,"link",a),mu(u),e.head.appendChild(u))}function En(e){return'[src="'+$u(e)+'"]'}function _i(e){return"script[async]"+e}function R3(e,u,a){if(u.count++,u.instance===null)switch(u.type){case"style":var t=e.querySelector('style[data-href~="'+$u(a.href)+'"]');if(t)return u.instance=t,mu(t),t;var i=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),mu(t),qu(t,"style",i),is(t,a.precedence,e),u.instance=t;case"stylesheet":i=An(a.href);var r=e.querySelector(Di(i));if(r)return u.state.loading|=4,u.instance=r,mu(r),r;t=S3(a),(i=wa.get(i))&&q4(t,i),r=(e.ownerDocument||e).createElement("link"),mu(r);var b=r;return b._p=new Promise(function(g,R){b.onload=g,b.onerror=R}),qu(r,"link",t),u.state.loading|=4,is(r,a.precedence,e),u.instance=r;case"script":return r=En(a.src),(i=e.querySelector(_i(r)))?(u.instance=i,mu(i),i):(t=a,(i=wa.get(r))&&(t=S({},a),C4(t,i)),e=e.ownerDocument||e,i=e.createElement("script"),mu(i),qu(i,"link",t),e.head.appendChild(i),u.instance=i);case"void":return null;default:throw Error(d(443,u.type))}else u.type==="stylesheet"&&(u.state.loading&4)===0&&(t=u.instance,u.state.loading|=4,is(t,a.precedence,e));return u.instance}function is(e,u,a){for(var t=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,r=i,b=0;b<t.length;b++){var g=t[b];if(g.dataset.precedence===u)r=g;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(u=a.nodeType===9?a.head:a,u.insertBefore(e,u.firstChild))}function q4(e,u){e.crossOrigin==null&&(e.crossOrigin=u.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=u.referrerPolicy),e.title==null&&(e.title=u.title)}function C4(e,u){e.crossOrigin==null&&(e.crossOrigin=u.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=u.referrerPolicy),e.integrity==null&&(e.integrity=u.integrity)}var ls=null;function N3(e,u,a){if(ls===null){var t=new Map,i=ls=new Map;i.set(a,t)}else i=ls,t=i.get(a),t||(t=new Map,i.set(a,t));if(t.has(e))return t;for(t.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[bt]||r[fu]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var b=r.getAttribute(u)||"";b=e+b;var g=t.get(b);g?g.push(r):t.set(b,[r])}}return t}function A3(e,u,a){e=e.ownerDocument||e,e.head.insertBefore(a,u==="title"?e.querySelector("head > title"):null)}function H5(e,u,a){if(a===1||u.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof u.precedence!="string"||typeof u.href!="string"||u.href==="")break;return!0;case"link":if(typeof u.rel!="string"||typeof u.href!="string"||u.href===""||u.onLoad||u.onError)break;return u.rel==="stylesheet"?(e=u.disabled,typeof u.precedence=="string"&&e==null):!0;case"script":if(u.async&&typeof u.async!="function"&&typeof u.async!="symbol"&&!u.onLoad&&!u.onError&&u.src&&typeof u.src=="string")return!0}return!1}function E3(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $5(e,u,a,t){if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=An(t.href),r=u.querySelector(Di(i));if(r){u=r._p,u!==null&&typeof u=="object"&&typeof u.then=="function"&&(e.count++,e=ss.bind(e),u.then(e,e)),a.state.loading|=4,a.instance=r,mu(r);return}r=u.ownerDocument||u,t=S3(t),(i=wa.get(i))&&q4(t,i),r=r.createElement("link"),mu(r);var b=r;b._p=new Promise(function(g,R){b.onload=g,b.onerror=R}),qu(r,"link",t),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,u),(u=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ss.bind(e),u.addEventListener("load",a),u.addEventListener("error",a))}}var O4=0;function V5(e,u){return e.stylesheets&&e.count===0&&os(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var t=setTimeout(function(){if(e.stylesheets&&os(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+u);0<e.imgBytes&&O4===0&&(O4=62500*w5());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&os(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>O4?50:800)+u);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(i)}}:null}function ss(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)os(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rs=null;function os(e,u){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rs=new Map,u.forEach(K5,e),rs=null,ss.call(e))}function K5(e,u){if(!(u.state.loading&4)){var a=rs.get(e);if(a)var t=a.get(null);else{a=new Map,rs.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var b=i[r];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),t=b)}t&&a.set(null,t)}i=u.instance,b=i.getAttribute("data-precedence"),r=a.get(b)||t,r===t&&a.set(null,i),a.set(b,i),this.count++,t=ss.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),u.state.loading|=4}}var Ui={$$typeof:ne,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Y5(e,u,a,t,i,r,b,g,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function T3(e,u,a,t,i,r,b,g,R,L,Y,G){return e=new Y5(e,u,a,b,R,L,Y,G,g),u=1,r===!0&&(u|=24),r=ca(3,null,null,u),e.current=r,r.stateNode=e,u=fr(),u.refCount++,e.pooledCache=u,u.refCount++,r.memoizedState={element:t,isDehydrated:a,cache:u},pr(r),e}function q3(e){return e?(e=ln,e):ln}function C3(e,u,a,t,i,r){i=q3(i),t.context===null?t.context=i:t.pendingContext=i,t=Y0(u),t.payload={element:a},r=r===void 0?null:r,r!==null&&(t.callback=r),a=Q0(e,t,u),a!==null&&(Pu(a,e,u),hi(a,e,u))}function O3(e,u){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<u?a:u}}function M4(e,u){O3(e,u),(e=e.alternate)&&O3(e,u)}function M3(e){if(e.tag===13||e.tag===31){var u=wt(e,67108864);u!==null&&Pu(u,e,67108864),M4(e,67108864)}}function D3(e){if(e.tag===13||e.tag===31){var u=ha();u=Qt(u);var a=wt(e,u);a!==null&&Pu(a,e,u),M4(e,u)}}var cs=!0;function Q5(e,u,a,t){var i=V.T;V.T=null;var r=X.p;try{X.p=2,D4(e,u,a,t)}finally{X.p=r,V.T=i}}function J5(e,u,a,t){var i=V.T;V.T=null;var r=X.p;try{X.p=8,D4(e,u,a,t)}finally{X.p=r,V.T=i}}function D4(e,u,a,t){if(cs){var i=_4(t);if(i===null)k4(e,u,t,ds,a),U3(e,t);else if(W5(i,e,u,a,t))t.stopPropagation();else if(U3(e,t),u&4&&-1<G5.indexOf(e)){for(;i!==null;){var r=E0(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var b=Ia(r.pendingLanes);if(b!==0){var g=r;for(g.pendingLanes|=2,g.entangledLanes|=2;b;){var R=1<<31-Mu(b);g.entanglements[1]|=R,b&=~R}Za(r),(Be&6)===0&&(Jl=Ou()+500,qi(0))}}break;case 31:case 13:g=wt(r,2),g!==null&&Pu(g,r,2),Wl(),M4(r,2)}if(r=_4(t),r===null&&k4(e,u,t,ds,a),r===i)break;i=r}i!==null&&t.stopPropagation()}else k4(e,u,t,null,a)}}function _4(e){return e=M0(e),U4(e)}var ds=null;function U4(e){if(ds=null,e=A0(e),e!==null){var u=x(e);if(u===null)e=null;else{var a=u.tag;if(a===13){if(e=v(u),e!==null)return e;e=null}else if(a===31){if(e=w(u),e!==null)return e;e=null}else if(a===3){if(u.stateNode.current.memoizedState.isDehydrated)return u.tag===3?u.stateNode.containerInfo:null;e=null}else u!==e&&(e=null)}}return ds=e,null}function _3(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ls()){case ul:return 2;case al:return 8;case Kt:case Bs:return 32;case tl:return 268435456;default:return 32}default:return 32}}var L4=!1,tt=null,nt=null,it=null,Li=new Map,Bi=new Map,lt=[],G5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U3(e,u){switch(e){case"focusin":case"focusout":tt=null;break;case"dragenter":case"dragleave":nt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Li.delete(u.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(u.pointerId)}}function Fi(e,u,a,t,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:u,domEventName:a,eventSystemFlags:t,nativeEvent:r,targetContainers:[i]},u!==null&&(u=E0(u),u!==null&&M3(u)),e):(e.eventSystemFlags|=t,u=e.targetContainers,i!==null&&u.indexOf(i)===-1&&u.push(i),e)}function W5(e,u,a,t,i){switch(u){case"focusin":return tt=Fi(tt,e,u,a,t,i),!0;case"dragenter":return nt=Fi(nt,e,u,a,t,i),!0;case"mouseover":return it=Fi(it,e,u,a,t,i),!0;case"pointerover":var r=i.pointerId;return Li.set(r,Fi(Li.get(r)||null,e,u,a,t,i)),!0;case"gotpointercapture":return r=i.pointerId,Bi.set(r,Fi(Bi.get(r)||null,e,u,a,t,i)),!0}return!1}function L3(e){var u=A0(e.target);if(u!==null){var a=x(u);if(a!==null){if(u=a.tag,u===13){if(u=v(a),u!==null){e.blockedOn=u,N0(e.priority,function(){D3(a)});return}}else if(u===31){if(u=w(a),u!==null){e.blockedOn=u,N0(e.priority,function(){D3(a)});return}}else if(u===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var u=e.targetContainers;0<u.length;){var a=_4(e.nativeEvent);if(a===null){a=e.nativeEvent;var t=new a.constructor(a.type,a);Ca=t,a.target.dispatchEvent(t),Ca=null}else return u=E0(a),u!==null&&M3(u),e.blockedOn=a,!1;u.shift()}return!0}function B3(e,u,a){fs(e)&&a.delete(u)}function Z5(){L4=!1,tt!==null&&fs(tt)&&(tt=null),nt!==null&&fs(nt)&&(nt=null),it!==null&&fs(it)&&(it=null),Li.forEach(B3),Bi.forEach(B3)}function ms(e,u){e.blockedOn===u&&(e.blockedOn=null,L4||(L4=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Z5)))}var bs=null;function F3(e){bs!==e&&(bs=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){bs===e&&(bs=null);for(var u=0;u<e.length;u+=3){var a=e[u],t=e[u+1],i=e[u+2];if(typeof t!="function"){if(U4(t||a)===null)continue;break}var r=E0(a);r!==null&&(e.splice(u,3),u-=3,_r(r,{pending:!0,data:i,method:a.method,action:t},t,i))}}))}function Tn(e){function u(R){return ms(R,e)}tt!==null&&ms(tt,e),nt!==null&&ms(nt,e),it!==null&&ms(it,e),Li.forEach(u),Bi.forEach(u);for(var a=0;a<lt.length;a++){var t=lt[a];t.blockedOn===e&&(t.blockedOn=null)}for(;0<lt.length&&(a=lt[0],a.blockedOn===null);)L3(a),a.blockedOn===null&&lt.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(t=0;t<a.length;t+=3){var i=a[t],r=a[t+1],b=i[yu]||null;if(typeof r=="function")b||F3(a);else if(b){var g=null;if(r&&r.hasAttribute("formAction")){if(i=r,b=r[yu]||null)g=b.formAction;else if(U4(i)!==null)continue}else g=b.action;typeof g=="function"?a[t+1]=g:(a.splice(t,3),t-=3),F3(a)}}}function H3(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(b){return i=b})},focusReset:"manual",scroll:"manual"})}function u(){i!==null&&(i(),i=null),t||setTimeout(a,20)}function a(){if(!t&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",u),navigation.addEventListener("navigateerror",u),setTimeout(a,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",u),navigation.removeEventListener("navigateerror",u),i!==null&&(i(),i=null)}}}function B4(e){this._internalRoot=e}hs.prototype.render=B4.prototype.render=function(e){var u=this._internalRoot;if(u===null)throw Error(d(409));var a=u.current,t=ha();C3(a,t,e,u,null,null)},hs.prototype.unmount=B4.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var u=e.containerInfo;C3(e.current,2,null,e,null,null),Wl(),u[e0]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var u=Ta();e={blockedOn:null,target:e,priority:u};for(var a=0;a<lt.length&&u!==0&&u<lt[a].priority;a++);lt.splice(a,0,e),a===0&&L3(e)}};var $3=o.version;if($3!=="19.2.5")throw Error(d(527,$3,"19.2.5"));X.findDOMNode=function(e){var u=e._reactInternals;if(u===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=N(u),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var P5={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{z0=ps.inject(P5),Fu=ps}catch{}}return Hi.createRoot=function(e,u){if(!m(e))throw Error(d(299));var a=!1,t="",i=Wc,r=Zc,b=Pc;return u!=null&&(u.unstable_strictMode===!0&&(a=!0),u.identifierPrefix!==void 0&&(t=u.identifierPrefix),u.onUncaughtError!==void 0&&(i=u.onUncaughtError),u.onCaughtError!==void 0&&(r=u.onCaughtError),u.onRecoverableError!==void 0&&(b=u.onRecoverableError)),u=T3(e,1,!1,null,null,a,t,null,i,r,b,H3),e[e0]=u.current,y4(e),new B4(u)},Hi.hydrateRoot=function(e,u,a){if(!m(e))throw Error(d(299));var t=!1,i="",r=Wc,b=Zc,g=Pc,R=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(R=a.formState)),u=T3(e,1,!0,u,a??null,t,i,R,r,b,g,H3),u.context=q3(null),a=u.current,t=ha(),t=Qt(t),i=Y0(t),i.callback=null,Q0(a,i,t),a=t,u.current.lanes=a,Ru(u,a),Za(u),e[e0]=u.current,y4(e),new hs(u)},Hi.version="19.2.5",Hi}var Z3;function P1(){if(Z3)return H4.exports;Z3=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),H4.exports=Z1(),H4.exports}var X1=P1();function Qf(l,o){return function(){return l.apply(o,arguments)}}const{toString:I1}=Object.prototype,{getPrototypeOf:Es}=Object,{iterator:Ts,toStringTag:Jf}=Symbol,qs=(l=>o=>{const c=I1.call(o);return l[c]||(l[c]=c.slice(8,-1).toLowerCase())})(Object.create(null)),$a=l=>(l=l.toLowerCase(),o=>qs(o)===l),Cs=l=>o=>typeof o===l,{isArray:Ln}=Array,_n=Cs("undefined");function Wi(l){return l!==null&&!_n(l)&&l.constructor!==null&&!_n(l.constructor)&&Iu(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const Gf=$a("ArrayBuffer");function eb(l){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(l):o=l&&l.buffer&&Gf(l.buffer),o}const ub=Cs("string"),Iu=Cs("function"),Wf=Cs("number"),Zi=l=>l!==null&&typeof l=="object",ab=l=>l===!0||l===!1,ys=l=>{if(qs(l)!=="object")return!1;const o=Es(l);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Jf in l)&&!(Ts in l)},tb=l=>{if(!Zi(l)||Wi(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},nb=$a("Date"),ib=$a("File"),lb=l=>!!(l&&typeof l.uri<"u"),sb=l=>l&&typeof l.getParts<"u",rb=$a("Blob"),ob=$a("FileList"),cb=l=>Zi(l)&&Iu(l.pipe);function db(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const P3=db(),X3=typeof P3.FormData<"u"?P3.FormData:void 0,fb=l=>{if(!l)return!1;if(X3&&l instanceof X3)return!0;const o=Es(l);if(!o||o===Object.prototype||!Iu(l.append))return!1;const c=qs(l);return c==="formdata"||c==="object"&&Iu(l.toString)&&l.toString()==="[object FormData]"},mb=$a("URLSearchParams"),[bb,hb,pb,xb]=["ReadableStream","Request","Response","Headers"].map($a),gb=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Pi(l,o,{allOwnKeys:c=!1}={}){if(l===null||typeof l>"u")return;let d,m;if(typeof l!="object"&&(l=[l]),Ln(l))for(d=0,m=l.length;d<m;d++)o.call(null,l[d],d,l);else{if(Wi(l))return;const x=c?Object.getOwnPropertyNames(l):Object.keys(l),v=x.length;let w;for(d=0;d<v;d++)w=x[d],o.call(null,l[w],w,l)}}function Zf(l,o){if(Wi(l))return null;o=o.toLowerCase();const c=Object.keys(l);let d=c.length,m;for(;d-- >0;)if(m=c[d],o===m.toLowerCase())return m;return null}const Ut=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Pf=l=>!_n(l)&&l!==Ut;function I4(){const{caseless:l,skipUndefined:o}=Pf(this)&&this||{},c={},d=(m,x)=>{if(x==="__proto__"||x==="constructor"||x==="prototype")return;const v=l&&Zf(c,x)||x;ys(c[v])&&ys(m)?c[v]=I4(c[v],m):ys(m)?c[v]=I4({},m):Ln(m)?c[v]=m.slice():(!o||!_n(m))&&(c[v]=m)};for(let m=0,x=arguments.length;m<x;m++)arguments[m]&&Pi(arguments[m],d);return c}const vb=(l,o,c,{allOwnKeys:d}={})=>(Pi(o,(m,x)=>{c&&Iu(m)?Object.defineProperty(l,x,{value:Qf(m,c),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(l,x,{value:m,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:d}),l),yb=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),kb=(l,o,c,d)=>{l.prototype=Object.create(o.prototype,d),Object.defineProperty(l.prototype,"constructor",{value:l,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(l,"super",{value:o.prototype}),c&&Object.assign(l.prototype,c)},jb=(l,o,c,d)=>{let m,x,v;const w={};if(o=o||{},l==null)return o;do{for(m=Object.getOwnPropertyNames(l),x=m.length;x-- >0;)v=m[x],(!d||d(v,l,o))&&!w[v]&&(o[v]=l[v],w[v]=!0);l=c!==!1&&Es(l)}while(l&&(!c||c(l,o))&&l!==Object.prototype);return o},wb=(l,o,c)=>{l=String(l),(c===void 0||c>l.length)&&(c=l.length),c-=o.length;const d=l.indexOf(o,c);return d!==-1&&d===c},zb=l=>{if(!l)return null;if(Ln(l))return l;let o=l.length;if(!Wf(o))return null;const c=new Array(o);for(;o-- >0;)c[o]=l[o];return c},Sb=(l=>o=>l&&o instanceof l)(typeof Uint8Array<"u"&&Es(Uint8Array)),Rb=(l,o)=>{const d=(l&&l[Ts]).call(l);let m;for(;(m=d.next())&&!m.done;){const x=m.value;o.call(l,x[0],x[1])}},Nb=(l,o)=>{let c;const d=[];for(;(c=l.exec(o))!==null;)d.push(c);return d},Ab=$a("HTMLFormElement"),Eb=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(c,d,m){return d.toUpperCase()+m}),I3=(({hasOwnProperty:l})=>(o,c)=>l.call(o,c))(Object.prototype),Tb=$a("RegExp"),Xf=(l,o)=>{const c=Object.getOwnPropertyDescriptors(l),d={};Pi(c,(m,x)=>{let v;(v=o(m,x,l))!==!1&&(d[x]=v||m)}),Object.defineProperties(l,d)},qb=l=>{Xf(l,(o,c)=>{if(Iu(l)&&["arguments","caller","callee"].indexOf(c)!==-1)return!1;const d=l[c];if(Iu(d)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+c+"'")})}})},Cb=(l,o)=>{const c={},d=m=>{m.forEach(x=>{c[x]=!0})};return Ln(l)?d(l):d(String(l).split(o)),c},Ob=()=>{},Mb=(l,o)=>l!=null&&Number.isFinite(l=+l)?l:o;function Db(l){return!!(l&&Iu(l.append)&&l[Jf]==="FormData"&&l[Ts])}const _b=l=>{const o=new Array(10),c=(d,m)=>{if(Zi(d)){if(o.indexOf(d)>=0)return;if(Wi(d))return d;if(!("toJSON"in d)){o[m]=d;const x=Ln(d)?[]:{};return Pi(d,(v,w)=>{const j=c(v,m+1);!_n(j)&&(x[w]=j)}),o[m]=void 0,x}}return d};return c(l,0)},Ub=$a("AsyncFunction"),Lb=l=>l&&(Zi(l)||Iu(l))&&Iu(l.then)&&Iu(l.catch),If=((l,o)=>l?setImmediate:o?((c,d)=>(Ut.addEventListener("message",({source:m,data:x})=>{m===Ut&&x===c&&d.length&&d.shift()()},!1),m=>{d.push(m),Ut.postMessage(c,"*")}))(`axios@${Math.random()}`,[]):c=>setTimeout(c))(typeof setImmediate=="function",Iu(Ut.postMessage)),Bb=typeof queueMicrotask<"u"?queueMicrotask.bind(Ut):typeof process<"u"&&process.nextTick||If,Fb=l=>l!=null&&Iu(l[Ts]),F={isArray:Ln,isArrayBuffer:Gf,isBuffer:Wi,isFormData:fb,isArrayBufferView:eb,isString:ub,isNumber:Wf,isBoolean:ab,isObject:Zi,isPlainObject:ys,isEmptyObject:tb,isReadableStream:bb,isRequest:hb,isResponse:pb,isHeaders:xb,isUndefined:_n,isDate:nb,isFile:ib,isReactNativeBlob:lb,isReactNative:sb,isBlob:rb,isRegExp:Tb,isFunction:Iu,isStream:cb,isURLSearchParams:mb,isTypedArray:Sb,isFileList:ob,forEach:Pi,merge:I4,extend:vb,trim:gb,stripBOM:yb,inherits:kb,toFlatObject:jb,kindOf:qs,kindOfTest:$a,endsWith:wb,toArray:zb,forEachEntry:Rb,matchAll:Nb,isHTMLForm:Ab,hasOwnProperty:I3,hasOwnProp:I3,reduceDescriptors:Xf,freezeMethods:qb,toObjectSet:Cb,toCamelCase:Eb,noop:Ob,toFiniteNumber:Mb,findKey:Zf,global:Ut,isContextDefined:Pf,isSpecCompliantForm:Db,toJSONObject:_b,isAsyncFn:Ub,isThenable:Lb,setImmediate:If,asap:Bb,isIterable:Fb};let oe=class em extends Error{static from(o,c,d,m,x,v){const w=new em(o.message,c||o.code,d,m,x);return w.cause=o,w.name=o.name,o.status!=null&&w.status==null&&(w.status=o.status),v&&Object.assign(w,v),w}constructor(o,c,d,m,x){super(o),Object.defineProperty(this,"message",{value:o,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,c&&(this.code=c),d&&(this.config=d),m&&(this.request=m),x&&(this.response=x,this.status=x.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}};oe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";oe.ERR_BAD_OPTION="ERR_BAD_OPTION";oe.ECONNABORTED="ECONNABORTED";oe.ETIMEDOUT="ETIMEDOUT";oe.ERR_NETWORK="ERR_NETWORK";oe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";oe.ERR_DEPRECATED="ERR_DEPRECATED";oe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";oe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";oe.ERR_CANCELED="ERR_CANCELED";oe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";oe.ERR_INVALID_URL="ERR_INVALID_URL";oe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Hb=null;function eo(l){return F.isPlainObject(l)||F.isArray(l)}function um(l){return F.endsWith(l,"[]")?l.slice(0,-2):l}function K4(l,o,c){return l?l.concat(o).map(function(m,x){return m=um(m),!c&&x?"["+m+"]":m}).join(c?".":""):o}function $b(l){return F.isArray(l)&&!l.some(eo)}const Vb=F.toFlatObject(F,{},null,function(o){return/^is[A-Z]/.test(o)});function Os(l,o,c){if(!F.isObject(l))throw new TypeError("target must be an object");o=o||new FormData,c=F.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,Z){return!F.isUndefined(Z[C])});const d=c.metaTokens,m=c.visitor||S,x=c.dots,v=c.indexes,w=c.Blob||typeof Blob<"u"&&Blob,j=c.maxDepth===void 0?100:c.maxDepth,N=w&&F.isSpecCompliantForm(o);if(!F.isFunction(m))throw new TypeError("visitor must be a function");function k(_){if(_===null)return"";if(F.isDate(_))return _.toISOString();if(F.isBoolean(_))return _.toString();if(!N&&F.isBlob(_))throw new oe("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(_)||F.isTypedArray(_)?N&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function S(_,C,Z){let ee=_;if(F.isReactNative(o)&&F.isReactNativeBlob(_))return o.append(K4(Z,C,x),k(_)),!1;if(_&&!Z&&typeof _=="object"){if(F.endsWith(C,"{}"))C=d?C:C.slice(0,-2),_=JSON.stringify(_);else if(F.isArray(_)&&$b(_)||(F.isFileList(_)||F.endsWith(C,"[]"))&&(ee=F.toArray(_)))return C=um(C),ee.forEach(function(ue,me){!(F.isUndefined(ue)||ue===null)&&o.append(v===!0?K4([C],me,x):v===null?C:C+"[]",k(ue))}),!1}return eo(_)?!0:(o.append(K4(Z,C,x),k(_)),!1)}const q=[],K=Object.assign(Vb,{defaultVisitor:S,convertValue:k,isVisitable:eo});function A(_,C,Z=0){if(!F.isUndefined(_)){if(Z>j)throw new oe("Object is too deeply nested ("+Z+" levels). Max depth: "+j,oe.ERR_FORM_DATA_DEPTH_EXCEEDED);if(q.indexOf(_)!==-1)throw Error("Circular reference detected in "+C.join("."));q.push(_),F.forEach(_,function(ne,ue){(!(F.isUndefined(ne)||ne===null)&&m.call(o,ne,F.isString(ue)?ue.trim():ue,C,K))===!0&&A(ne,C?C.concat(ue):[ue],Z+1)}),q.pop()}}if(!F.isObject(l))throw new TypeError("data must be an object");return A(l),o}function ef(l){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(l).replace(/[!'()~]|%20/g,function(d){return o[d]})}function ro(l,o){this._pairs=[],l&&Os(l,this,o)}const am=ro.prototype;am.append=function(o,c){this._pairs.push([o,c])};am.toString=function(o){const c=o?function(d){return o.call(this,d,ef)}:ef;return this._pairs.map(function(m){return c(m[0])+"="+c(m[1])},"").join("&")};function Kb(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function tm(l,o,c){if(!o)return l;const d=c&&c.encode||Kb,m=F.isFunction(c)?{serialize:c}:c,x=m&&m.serialize;let v;if(x?v=x(o,m):v=F.isURLSearchParams(o)?o.toString():new ro(o,m).toString(d),v){const w=l.indexOf("#");w!==-1&&(l=l.slice(0,w)),l+=(l.indexOf("?")===-1?"?":"&")+v}return l}class uf{constructor(){this.handlers=[]}use(o,c,d){return this.handlers.push({fulfilled:o,rejected:c,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){F.forEach(this.handlers,function(d){d!==null&&o(d)})}}const oo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Yb=typeof URLSearchParams<"u"?URLSearchParams:ro,Qb=typeof FormData<"u"?FormData:null,Jb=typeof Blob<"u"?Blob:null,Gb={isBrowser:!0,classes:{URLSearchParams:Yb,FormData:Qb,Blob:Jb},protocols:["http","https","file","blob","url","data"]},co=typeof window<"u"&&typeof document<"u",uo=typeof navigator=="object"&&navigator||void 0,Wb=co&&(!uo||["ReactNative","NativeScript","NS"].indexOf(uo.product)<0),Zb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Pb=co&&window.location.href||"http://localhost",Xb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:co,hasStandardBrowserEnv:Wb,hasStandardBrowserWebWorkerEnv:Zb,navigator:uo,origin:Pb},Symbol.toStringTag,{value:"Module"})),_u={...Xb,...Gb};function Ib(l,o){return Os(l,new _u.classes.URLSearchParams,{visitor:function(c,d,m,x){return _u.isNode&&F.isBuffer(c)?(this.append(d,c.toString("base64")),!1):x.defaultVisitor.apply(this,arguments)},...o})}function eh(l){return F.matchAll(/\w+|\[(\w*)]/g,l).map(o=>o[0]==="[]"?"":o[1]||o[0])}function uh(l){const o={},c=Object.keys(l);let d;const m=c.length;let x;for(d=0;d<m;d++)x=c[d],o[x]=l[x];return o}function nm(l){function o(c,d,m,x){let v=c[x++];if(v==="__proto__")return!0;const w=Number.isFinite(+v),j=x>=c.length;return v=!v&&F.isArray(m)?m.length:v,j?(F.hasOwnProp(m,v)?m[v]=F.isArray(m[v])?m[v].concat(d):[m[v],d]:m[v]=d,!w):((!m[v]||!F.isObject(m[v]))&&(m[v]=[]),o(c,d,m[v],x)&&F.isArray(m[v])&&(m[v]=uh(m[v])),!w)}if(F.isFormData(l)&&F.isFunction(l.entries)){const c={};return F.forEachEntry(l,(d,m)=>{o(eh(d),m,c,0)}),c}return null}const qn=(l,o)=>l!=null&&F.hasOwnProp(l,o)?l[o]:void 0;function ah(l,o,c){if(F.isString(l))try{return(o||JSON.parse)(l),F.trim(l)}catch(d){if(d.name!=="SyntaxError")throw d}return(c||JSON.stringify)(l)}const Xi={transitional:oo,adapter:["xhr","http","fetch"],transformRequest:[function(o,c){const d=c.getContentType()||"",m=d.indexOf("application/json")>-1,x=F.isObject(o);if(x&&F.isHTMLForm(o)&&(o=new FormData(o)),F.isFormData(o))return m?JSON.stringify(nm(o)):o;if(F.isArrayBuffer(o)||F.isBuffer(o)||F.isStream(o)||F.isFile(o)||F.isBlob(o)||F.isReadableStream(o))return o;if(F.isArrayBufferView(o))return o.buffer;if(F.isURLSearchParams(o))return c.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let w;if(x){const j=qn(this,"formSerializer");if(d.indexOf("application/x-www-form-urlencoded")>-1)return Ib(o,j).toString();if((w=F.isFileList(o))||d.indexOf("multipart/form-data")>-1){const N=qn(this,"env"),k=N&&N.FormData;return Os(w?{"files[]":o}:o,k&&new k,j)}}return x||m?(c.setContentType("application/json",!1),ah(o)):o}],transformResponse:[function(o){const c=qn(this,"transitional")||Xi.transitional,d=c&&c.forcedJSONParsing,m=qn(this,"responseType"),x=m==="json";if(F.isResponse(o)||F.isReadableStream(o))return o;if(o&&F.isString(o)&&(d&&!m||x)){const w=!(c&&c.silentJSONParsing)&&x;try{return JSON.parse(o,qn(this,"parseReviver"))}catch(j){if(w)throw j.name==="SyntaxError"?oe.from(j,oe.ERR_BAD_RESPONSE,this,null,qn(this,"response")):j}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_u.classes.FormData,Blob:_u.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],l=>{Xi.headers[l]={}});const th=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nh=l=>{const o={};let c,d,m;return l&&l.split(`
`).forEach(function(v){m=v.indexOf(":"),c=v.substring(0,m).trim().toLowerCase(),d=v.substring(m+1).trim(),!(!c||o[c]&&th[c])&&(c==="set-cookie"?o[c]?o[c].push(d):o[c]=[d]:o[c]=o[c]?o[c]+", "+d:d)}),o},af=Symbol("internals"),ih=/[^\x09\x20-\x7E\x80-\xFF]/g;function lh(l){let o=0,c=l.length;for(;o<c;){const d=l.charCodeAt(o);if(d!==9&&d!==32)break;o+=1}for(;c>o;){const d=l.charCodeAt(c-1);if(d!==9&&d!==32)break;c-=1}return o===0&&c===l.length?l:l.slice(o,c)}function $i(l){return l&&String(l).trim().toLowerCase()}function sh(l){return lh(l.replace(ih,""))}function ks(l){return l===!1||l==null?l:F.isArray(l)?l.map(ks):sh(String(l))}function rh(l){const o=Object.create(null),c=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let d;for(;d=c.exec(l);)o[d[1]]=d[2];return o}const oh=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function Y4(l,o,c,d,m){if(F.isFunction(d))return d.call(this,o,c);if(m&&(o=c),!!F.isString(o)){if(F.isString(d))return o.indexOf(d)!==-1;if(F.isRegExp(d))return d.test(o)}}function ch(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,c,d)=>c.toUpperCase()+d)}function dh(l,o){const c=F.toCamelCase(" "+o);["get","set","has"].forEach(d=>{Object.defineProperty(l,d+c,{value:function(m,x,v){return this[d].call(this,o,m,x,v)},configurable:!0})})}let ea=class{constructor(o){o&&this.set(o)}set(o,c,d){const m=this;function x(w,j,N){const k=$i(j);if(!k)throw new Error("header name must be a non-empty string");const S=F.findKey(m,k);(!S||m[S]===void 0||N===!0||N===void 0&&m[S]!==!1)&&(m[S||j]=ks(w))}const v=(w,j)=>F.forEach(w,(N,k)=>x(N,k,j));if(F.isPlainObject(o)||o instanceof this.constructor)v(o,c);else if(F.isString(o)&&(o=o.trim())&&!oh(o))v(nh(o),c);else if(F.isObject(o)&&F.isIterable(o)){let w={},j,N;for(const k of o){if(!F.isArray(k))throw TypeError("Object iterator must return a key-value pair");w[N=k[0]]=(j=w[N])?F.isArray(j)?[...j,k[1]]:[j,k[1]]:k[1]}v(w,c)}else o!=null&&x(c,o,d);return this}get(o,c){if(o=$i(o),o){const d=F.findKey(this,o);if(d){const m=this[d];if(!c)return m;if(c===!0)return rh(m);if(F.isFunction(c))return c.call(this,m,d);if(F.isRegExp(c))return c.exec(m);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,c){if(o=$i(o),o){const d=F.findKey(this,o);return!!(d&&this[d]!==void 0&&(!c||Y4(this,this[d],d,c)))}return!1}delete(o,c){const d=this;let m=!1;function x(v){if(v=$i(v),v){const w=F.findKey(d,v);w&&(!c||Y4(d,d[w],w,c))&&(delete d[w],m=!0)}}return F.isArray(o)?o.forEach(x):x(o),m}clear(o){const c=Object.keys(this);let d=c.length,m=!1;for(;d--;){const x=c[d];(!o||Y4(this,this[x],x,o,!0))&&(delete this[x],m=!0)}return m}normalize(o){const c=this,d={};return F.forEach(this,(m,x)=>{const v=F.findKey(d,x);if(v){c[v]=ks(m),delete c[x];return}const w=o?ch(x):String(x).trim();w!==x&&delete c[x],c[w]=ks(m),d[w]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const c=Object.create(null);return F.forEach(this,(d,m)=>{d!=null&&d!==!1&&(c[m]=o&&F.isArray(d)?d.join(", "):d)}),c}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,c])=>o+": "+c).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...c){const d=new this(o);return c.forEach(m=>d.set(m)),d}static accessor(o){const d=(this[af]=this[af]={accessors:{}}).accessors,m=this.prototype;function x(v){const w=$i(v);d[w]||(dh(m,v),d[w]=!0)}return F.isArray(o)?o.forEach(x):x(o),this}};ea.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(ea.prototype,({value:l},o)=>{let c=o[0].toUpperCase()+o.slice(1);return{get:()=>l,set(d){this[c]=d}}});F.freezeMethods(ea);function Q4(l,o){const c=this||Xi,d=o||c,m=ea.from(d.headers);let x=d.data;return F.forEach(l,function(w){x=w.call(c,x,m.normalize(),o?o.status:void 0)}),m.normalize(),x}function im(l){return!!(l&&l.__CANCEL__)}let Ii=class extends oe{constructor(o,c,d){super(o??"canceled",oe.ERR_CANCELED,c,d),this.name="CanceledError",this.__CANCEL__=!0}};function lm(l,o,c){const d=c.config.validateStatus;!c.status||!d||d(c.status)?l(c):o(new oe("Request failed with status code "+c.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(c.status/100)-4],c.config,c.request,c))}function fh(l){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return o&&o[1]||""}function mh(l,o){l=l||10;const c=new Array(l),d=new Array(l);let m=0,x=0,v;return o=o!==void 0?o:1e3,function(j){const N=Date.now(),k=d[x];v||(v=N),c[m]=j,d[m]=N;let S=x,q=0;for(;S!==m;)q+=c[S++],S=S%l;if(m=(m+1)%l,m===x&&(x=(x+1)%l),N-v<o)return;const K=k&&N-k;return K?Math.round(q*1e3/K):void 0}}function bh(l,o){let c=0,d=1e3/o,m,x;const v=(N,k=Date.now())=>{c=k,m=null,x&&(clearTimeout(x),x=null),l(...N)};return[(...N)=>{const k=Date.now(),S=k-c;S>=d?v(N,k):(m=N,x||(x=setTimeout(()=>{x=null,v(m)},d-S)))},()=>m&&v(m)]}const Rs=(l,o,c=3)=>{let d=0;const m=mh(50,250);return bh(x=>{const v=x.loaded,w=x.lengthComputable?x.total:void 0,j=w!=null?Math.min(v,w):v,N=Math.max(0,j-d),k=m(N);d=Math.max(d,j);const S={loaded:j,total:w,progress:w?j/w:void 0,bytes:N,rate:k||void 0,estimated:k&&w?(w-j)/k:void 0,event:x,lengthComputable:w!=null,[o?"download":"upload"]:!0};l(S)},c)},tf=(l,o)=>{const c=l!=null;return[d=>o[0]({lengthComputable:c,total:l,loaded:d}),o[1]]},nf=l=>(...o)=>F.asap(()=>l(...o)),hh=_u.hasStandardBrowserEnv?((l,o)=>c=>(c=new URL(c,_u.origin),l.protocol===c.protocol&&l.host===c.host&&(o||l.port===c.port)))(new URL(_u.origin),_u.navigator&&/(msie|trident)/i.test(_u.navigator.userAgent)):()=>!0,ph=_u.hasStandardBrowserEnv?{write(l,o,c,d,m,x,v){if(typeof document>"u")return;const w=[`${l}=${encodeURIComponent(o)}`];F.isNumber(c)&&w.push(`expires=${new Date(c).toUTCString()}`),F.isString(d)&&w.push(`path=${d}`),F.isString(m)&&w.push(`domain=${m}`),x===!0&&w.push("secure"),F.isString(v)&&w.push(`SameSite=${v}`),document.cookie=w.join("; ")},read(l){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function xh(l){return typeof l!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function gh(l,o){return o?l.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):l}function sm(l,o,c){let d=!xh(o);return l&&(d||c===!1)?gh(l,o):o}const lf=l=>l instanceof ea?{...l}:l;function Bt(l,o){o=o||{};const c=Object.create(null);Object.defineProperty(c,"hasOwnProperty",{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function d(N,k,S,q){return F.isPlainObject(N)&&F.isPlainObject(k)?F.merge.call({caseless:q},N,k):F.isPlainObject(k)?F.merge({},k):F.isArray(k)?k.slice():k}function m(N,k,S,q){if(F.isUndefined(k)){if(!F.isUndefined(N))return d(void 0,N,S,q)}else return d(N,k,S,q)}function x(N,k){if(!F.isUndefined(k))return d(void 0,k)}function v(N,k){if(F.isUndefined(k)){if(!F.isUndefined(N))return d(void 0,N)}else return d(void 0,k)}function w(N,k,S){if(F.hasOwnProp(o,S))return d(N,k);if(F.hasOwnProp(l,S))return d(void 0,N)}const j={url:x,method:x,data:x,baseURL:v,transformRequest:v,transformResponse:v,paramsSerializer:v,timeout:v,timeoutMessage:v,withCredentials:v,withXSRFToken:v,adapter:v,responseType:v,xsrfCookieName:v,xsrfHeaderName:v,onUploadProgress:v,onDownloadProgress:v,decompress:v,maxContentLength:v,maxBodyLength:v,beforeRedirect:v,transport:v,httpAgent:v,httpsAgent:v,cancelToken:v,socketPath:v,allowedSocketPaths:v,responseEncoding:v,validateStatus:w,headers:(N,k,S)=>m(lf(N),lf(k),S,!0)};return F.forEach(Object.keys({...l,...o}),function(k){if(k==="__proto__"||k==="constructor"||k==="prototype")return;const S=F.hasOwnProp(j,k)?j[k]:m,q=F.hasOwnProp(l,k)?l[k]:void 0,K=F.hasOwnProp(o,k)?o[k]:void 0,A=S(q,K,k);F.isUndefined(A)&&S!==w||(c[k]=A)}),c}const rm=l=>{const o=Bt({},l),c=q=>F.hasOwnProp(o,q)?o[q]:void 0,d=c("data");let m=c("withXSRFToken");const x=c("xsrfHeaderName"),v=c("xsrfCookieName");let w=c("headers");const j=c("auth"),N=c("baseURL"),k=c("allowAbsoluteUrls"),S=c("url");if(o.headers=w=ea.from(w),o.url=tm(sm(N,S,k),l.params,l.paramsSerializer),j&&w.set("Authorization","Basic "+btoa((j.username||"")+":"+(j.password?unescape(encodeURIComponent(j.password)):""))),F.isFormData(d)){if(_u.hasStandardBrowserEnv||_u.hasStandardBrowserWebWorkerEnv)w.setContentType(void 0);else if(F.isFunction(d.getHeaders)){const q=d.getHeaders(),K=["content-type","content-length"];Object.entries(q).forEach(([A,_])=>{K.includes(A.toLowerCase())&&w.set(A,_)})}}if(_u.hasStandardBrowserEnv&&(F.isFunction(m)&&(m=m(o)),m===!0||m==null&&hh(o.url))){const K=x&&v&&ph.read(v);K&&w.set(x,K)}return o},vh=typeof XMLHttpRequest<"u",yh=vh&&function(l){return new Promise(function(c,d){const m=rm(l);let x=m.data;const v=ea.from(m.headers).normalize();let{responseType:w,onUploadProgress:j,onDownloadProgress:N}=m,k,S,q,K,A;function _(){K&&K(),A&&A(),m.cancelToken&&m.cancelToken.unsubscribe(k),m.signal&&m.signal.removeEventListener("abort",k)}let C=new XMLHttpRequest;C.open(m.method.toUpperCase(),m.url,!0),C.timeout=m.timeout;function Z(){if(!C)return;const ne=ea.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),me={data:!w||w==="text"||w==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:ne,config:l,request:C};lm(function(P){c(P),_()},function(P){d(P),_()},me),C=null}"onloadend"in C?C.onloadend=Z:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(Z)},C.onabort=function(){C&&(d(new oe("Request aborted",oe.ECONNABORTED,l,C)),C=null)},C.onerror=function(ue){const me=ue&&ue.message?ue.message:"Network Error",ce=new oe(me,oe.ERR_NETWORK,l,C);ce.event=ue||null,d(ce),C=null},C.ontimeout=function(){let ue=m.timeout?"timeout of "+m.timeout+"ms exceeded":"timeout exceeded";const me=m.transitional||oo;m.timeoutErrorMessage&&(ue=m.timeoutErrorMessage),d(new oe(ue,me.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,l,C)),C=null},x===void 0&&v.setContentType(null),"setRequestHeader"in C&&F.forEach(v.toJSON(),function(ue,me){C.setRequestHeader(me,ue)}),F.isUndefined(m.withCredentials)||(C.withCredentials=!!m.withCredentials),w&&w!=="json"&&(C.responseType=m.responseType),N&&([q,A]=Rs(N,!0),C.addEventListener("progress",q)),j&&C.upload&&([S,K]=Rs(j),C.upload.addEventListener("progress",S),C.upload.addEventListener("loadend",K)),(m.cancelToken||m.signal)&&(k=ne=>{C&&(d(!ne||ne.type?new Ii(null,l,C):ne),C.abort(),C=null)},m.cancelToken&&m.cancelToken.subscribe(k),m.signal&&(m.signal.aborted?k():m.signal.addEventListener("abort",k)));const ee=fh(m.url);if(ee&&_u.protocols.indexOf(ee)===-1){d(new oe("Unsupported protocol "+ee+":",oe.ERR_BAD_REQUEST,l));return}C.send(x||null)})},kh=(l,o)=>{const{length:c}=l=l?l.filter(Boolean):[];if(o||c){let d=new AbortController,m;const x=function(N){if(!m){m=!0,w();const k=N instanceof Error?N:this.reason;d.abort(k instanceof oe?k:new Ii(k instanceof Error?k.message:k))}};let v=o&&setTimeout(()=>{v=null,x(new oe(`timeout of ${o}ms exceeded`,oe.ETIMEDOUT))},o);const w=()=>{l&&(v&&clearTimeout(v),v=null,l.forEach(N=>{N.unsubscribe?N.unsubscribe(x):N.removeEventListener("abort",x)}),l=null)};l.forEach(N=>N.addEventListener("abort",x));const{signal:j}=d;return j.unsubscribe=()=>F.asap(w),j}},jh=function*(l,o){let c=l.byteLength;if(c<o){yield l;return}let d=0,m;for(;d<c;)m=d+o,yield l.slice(d,m),d=m},wh=async function*(l,o){for await(const c of zh(l))yield*jh(c,o)},zh=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const o=l.getReader();try{for(;;){const{done:c,value:d}=await o.read();if(c)break;yield d}}finally{await o.cancel()}},sf=(l,o,c,d)=>{const m=wh(l,o);let x=0,v,w=j=>{v||(v=!0,d&&d(j))};return new ReadableStream({async pull(j){try{const{done:N,value:k}=await m.next();if(N){w(),j.close();return}let S=k.byteLength;if(c){let q=x+=S;c(q)}j.enqueue(new Uint8Array(k))}catch(N){throw w(N),N}},cancel(j){return w(j),m.return()}},{highWaterMark:2})},rf=64*1024,{isFunction:xs}=F,Sh=(({Request:l,Response:o})=>({Request:l,Response:o}))(F.global),{ReadableStream:of,TextEncoder:cf}=F.global,df=(l,...o)=>{try{return!!l(...o)}catch{return!1}},Rh=l=>{l=F.merge.call({skipUndefined:!0},Sh,l);const{fetch:o,Request:c,Response:d}=l,m=o?xs(o):typeof fetch=="function",x=xs(c),v=xs(d);if(!m)return!1;const w=m&&xs(of),j=m&&(typeof cf=="function"?(A=>_=>A.encode(_))(new cf):async A=>new Uint8Array(await new c(A).arrayBuffer())),N=x&&w&&df(()=>{let A=!1;const _=new c(_u.origin,{body:new of,method:"POST",get duplex(){return A=!0,"half"}}),C=_.headers.has("Content-Type");return _.body!=null&&_.body.cancel(),A&&!C}),k=v&&w&&df(()=>F.isReadableStream(new d("").body)),S={stream:k&&(A=>A.body)};m&&["text","arrayBuffer","blob","formData","stream"].forEach(A=>{!S[A]&&(S[A]=(_,C)=>{let Z=_&&_[A];if(Z)return Z.call(_);throw new oe(`Response type '${A}' is not supported`,oe.ERR_NOT_SUPPORT,C)})});const q=async A=>{if(A==null)return 0;if(F.isBlob(A))return A.size;if(F.isSpecCompliantForm(A))return(await new c(_u.origin,{method:"POST",body:A}).arrayBuffer()).byteLength;if(F.isArrayBufferView(A)||F.isArrayBuffer(A))return A.byteLength;if(F.isURLSearchParams(A)&&(A=A+""),F.isString(A))return(await j(A)).byteLength},K=async(A,_)=>{const C=F.toFiniteNumber(A.getContentLength());return C??q(_)};return async A=>{let{url:_,method:C,data:Z,signal:ee,cancelToken:ne,timeout:ue,onDownloadProgress:me,onUploadProgress:ce,responseType:P,headers:D,withCredentials:he="same-origin",fetchOptions:Ie}=rm(A),qe=o||fetch;P=P?(P+"").toLowerCase():"text";let Ce=kh([ee,ne&&ne.toAbortSignal()],ue),Ge=null;const Su=Ce&&Ce.unsubscribe&&(()=>{Ce.unsubscribe()});let Lu;try{if(ce&&N&&C!=="get"&&C!=="head"&&(Lu=await K(D,Z))!==0){let De=new c(_,{method:"POST",body:Z,duplex:"half"}),Oe;if(F.isFormData(Z)&&(Oe=De.headers.get("content-type"))&&D.setContentType(Oe),De.body){const[we,uu]=tf(Lu,Rs(nf(ce)));Z=sf(De.body,rf,we,uu)}}F.isString(he)||(he=he?"include":"omit");const V=x&&"credentials"in c.prototype;if(F.isFormData(Z)){const De=D.getContentType();De&&/^multipart\/form-data/i.test(De)&&!/boundary=/i.test(De)&&D.delete("content-type")}const X={...Ie,signal:Ce,method:C.toUpperCase(),headers:D.normalize().toJSON(),body:Z,duplex:"half",credentials:V?he:void 0};Ge=x&&new c(_,X);let le=await(x?qe(Ge,Ie):qe(_,X));const Ee=k&&(P==="stream"||P==="response");if(k&&(me||Ee&&Su)){const De={};["status","statusText","headers"].forEach(Bu=>{De[Bu]=le[Bu]});const Oe=F.toFiniteNumber(le.headers.get("content-length")),[we,uu]=me&&tf(Oe,Rs(nf(me),!0))||[];le=new d(sf(le.body,rf,we,()=>{uu&&uu(),Su&&Su()}),De)}P=P||"text";let He=await S[F.findKey(S,P)||"text"](le,A);return!Ee&&Su&&Su(),await new Promise((De,Oe)=>{lm(De,Oe,{data:He,headers:ea.from(le.headers),status:le.status,statusText:le.statusText,config:A,request:Ge})})}catch(V){throw Su&&Su(),V&&V.name==="TypeError"&&/Load failed|fetch/i.test(V.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,A,Ge,V&&V.response),{cause:V.cause||V}):oe.from(V,V&&V.code,A,Ge,V&&V.response)}}},Nh=new Map,om=l=>{let o=l&&l.env||{};const{fetch:c,Request:d,Response:m}=o,x=[d,m,c];let v=x.length,w=v,j,N,k=Nh;for(;w--;)j=x[w],N=k.get(j),N===void 0&&k.set(j,N=w?new Map:Rh(o)),k=N;return N};om();const fo={http:Hb,xhr:yh,fetch:{get:om}};F.forEach(fo,(l,o)=>{if(l){try{Object.defineProperty(l,"name",{value:o})}catch{}Object.defineProperty(l,"adapterName",{value:o})}});const ff=l=>`- ${l}`,Ah=l=>F.isFunction(l)||l===null||l===!1;function Eh(l,o){l=F.isArray(l)?l:[l];const{length:c}=l;let d,m;const x={};for(let v=0;v<c;v++){d=l[v];let w;if(m=d,!Ah(d)&&(m=fo[(w=String(d)).toLowerCase()],m===void 0))throw new oe(`Unknown adapter '${w}'`);if(m&&(F.isFunction(m)||(m=m.get(o))))break;x[w||"#"+v]=m}if(!m){const v=Object.entries(x).map(([j,N])=>`adapter ${j} `+(N===!1?"is not supported by the environment":"is not available in the build"));let w=c?v.length>1?`since :
`+v.map(ff).join(`
`):" "+ff(v[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+w,"ERR_NOT_SUPPORT")}return m}const cm={getAdapter:Eh,adapters:fo};function J4(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new Ii(null,l)}function mf(l){return J4(l),l.headers=ea.from(l.headers),l.data=Q4.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),cm.getAdapter(l.adapter||Xi.adapter,l)(l).then(function(d){return J4(l),d.data=Q4.call(l,l.transformResponse,d),d.headers=ea.from(d.headers),d},function(d){return im(d)||(J4(l),d&&d.response&&(d.response.data=Q4.call(l,l.transformResponse,d.response),d.response.headers=ea.from(d.response.headers))),Promise.reject(d)})}const dm="1.15.2",Ms={};["object","boolean","number","function","string","symbol"].forEach((l,o)=>{Ms[l]=function(d){return typeof d===l||"a"+(o<1?"n ":" ")+l}});const bf={};Ms.transitional=function(o,c,d){function m(x,v){return"[Axios v"+dm+"] Transitional option '"+x+"'"+v+(d?". "+d:"")}return(x,v,w)=>{if(o===!1)throw new oe(m(v," has been removed"+(c?" in "+c:"")),oe.ERR_DEPRECATED);return c&&!bf[v]&&(bf[v]=!0,console.warn(m(v," has been deprecated since v"+c+" and will be removed in the near future"))),o?o(x,v,w):!0}};Ms.spelling=function(o){return(c,d)=>(console.warn(`${d} is likely a misspelling of ${o}`),!0)};function Th(l,o,c){if(typeof l!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const d=Object.keys(l);let m=d.length;for(;m-- >0;){const x=d[m],v=Object.prototype.hasOwnProperty.call(o,x)?o[x]:void 0;if(v){const w=l[x],j=w===void 0||v(w,x,l);if(j!==!0)throw new oe("option "+x+" must be "+j,oe.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new oe("Unknown option "+x,oe.ERR_BAD_OPTION)}}const js={assertOptions:Th,validators:Ms},za=js.validators;let Lt=class{constructor(o){this.defaults=o||{},this.interceptors={request:new uf,response:new uf}}async request(o,c){try{return await this._request(o,c)}catch(d){if(d instanceof Error){let m={};Error.captureStackTrace?Error.captureStackTrace(m):m=new Error;const x=(()=>{if(!m.stack)return"";const v=m.stack.indexOf(`
`);return v===-1?"":m.stack.slice(v+1)})();try{if(!d.stack)d.stack=x;else if(x){const v=x.indexOf(`
`),w=v===-1?-1:x.indexOf(`
`,v+1),j=w===-1?"":x.slice(w+1);String(d.stack).endsWith(j)||(d.stack+=`
`+x)}}catch{}}throw d}}_request(o,c){typeof o=="string"?(c=c||{},c.url=o):c=o||{},c=Bt(this.defaults,c);const{transitional:d,paramsSerializer:m,headers:x}=c;d!==void 0&&js.assertOptions(d,{silentJSONParsing:za.transitional(za.boolean),forcedJSONParsing:za.transitional(za.boolean),clarifyTimeoutError:za.transitional(za.boolean),legacyInterceptorReqResOrdering:za.transitional(za.boolean)},!1),m!=null&&(F.isFunction(m)?c.paramsSerializer={serialize:m}:js.assertOptions(m,{encode:za.function,serialize:za.function},!0)),c.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?c.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:c.allowAbsoluteUrls=!0),js.assertOptions(c,{baseUrl:za.spelling("baseURL"),withXsrfToken:za.spelling("withXSRFToken")},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase();let v=x&&F.merge(x.common,x[c.method]);x&&F.forEach(["delete","get","head","post","put","patch","common"],A=>{delete x[A]}),c.headers=ea.concat(v,x);const w=[];let j=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(c)===!1)return;j=j&&_.synchronous;const C=c.transitional||oo;C&&C.legacyInterceptorReqResOrdering?w.unshift(_.fulfilled,_.rejected):w.push(_.fulfilled,_.rejected)});const N=[];this.interceptors.response.forEach(function(_){N.push(_.fulfilled,_.rejected)});let k,S=0,q;if(!j){const A=[mf.bind(this),void 0];for(A.unshift(...w),A.push(...N),q=A.length,k=Promise.resolve(c);S<q;)k=k.then(A[S++],A[S++]);return k}q=w.length;let K=c;for(;S<q;){const A=w[S++],_=w[S++];try{K=A(K)}catch(C){_.call(this,C);break}}try{k=mf.call(this,K)}catch(A){return Promise.reject(A)}for(S=0,q=N.length;S<q;)k=k.then(N[S++],N[S++]);return k}getUri(o){o=Bt(this.defaults,o);const c=sm(o.baseURL,o.url,o.allowAbsoluteUrls);return tm(c,o.params,o.paramsSerializer)}};F.forEach(["delete","get","head","options"],function(o){Lt.prototype[o]=function(c,d){return this.request(Bt(d||{},{method:o,url:c,data:(d||{}).data}))}});F.forEach(["post","put","patch"],function(o){function c(d){return function(x,v,w){return this.request(Bt(w||{},{method:o,headers:d?{"Content-Type":"multipart/form-data"}:{},url:x,data:v}))}}Lt.prototype[o]=c(),Lt.prototype[o+"Form"]=c(!0)});let qh=class fm{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let c;this.promise=new Promise(function(x){c=x});const d=this;this.promise.then(m=>{if(!d._listeners)return;let x=d._listeners.length;for(;x-- >0;)d._listeners[x](m);d._listeners=null}),this.promise.then=m=>{let x;const v=new Promise(w=>{d.subscribe(w),x=w}).then(m);return v.cancel=function(){d.unsubscribe(x)},v},o(function(x,v,w){d.reason||(d.reason=new Ii(x,v,w),c(d.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const c=this._listeners.indexOf(o);c!==-1&&this._listeners.splice(c,1)}toAbortSignal(){const o=new AbortController,c=d=>{o.abort(d)};return this.subscribe(c),o.signal.unsubscribe=()=>this.unsubscribe(c),o.signal}static source(){let o;return{token:new fm(function(m){o=m}),cancel:o}}};function Ch(l){return function(c){return l.apply(null,c)}}function Oh(l){return F.isObject(l)&&l.isAxiosError===!0}const ao={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ao).forEach(([l,o])=>{ao[o]=l});function mm(l){const o=new Lt(l),c=Qf(Lt.prototype.request,o);return F.extend(c,Lt.prototype,o,{allOwnKeys:!0}),F.extend(c,o,null,{allOwnKeys:!0}),c.create=function(m){return mm(Bt(l,m))},c}const ou=mm(Xi);ou.Axios=Lt;ou.CanceledError=Ii;ou.CancelToken=qh;ou.isCancel=im;ou.VERSION=dm;ou.toFormData=Os;ou.AxiosError=oe;ou.Cancel=ou.CanceledError;ou.all=function(o){return Promise.all(o)};ou.spread=Ch;ou.isAxiosError=Oh;ou.mergeConfig=Bt;ou.AxiosHeaders=ea;ou.formToJSON=l=>nm(F.isHTMLForm(l)?new FormData(l):l);ou.getAdapter=cm.getAdapter;ou.HttpStatusCode=ao;ou.default=ou;const{Axios:t6,AxiosError:n6,CanceledError:i6,isCancel:l6,CancelToken:s6,VERSION:r6,all:o6,Cancel:c6,isAxiosError:d6,spread:f6,toFormData:m6,AxiosHeaders:b6,HttpStatusCode:h6,formToJSON:p6,getAdapter:x6,mergeConfig:g6}=ou,Mh={},bm=Mh?.VITE_API_BASE_URL||"/api",hf=bm.replace(/\/api\/?$/,""),mo="accessToken",bo="refreshToken",Ds=ou.create({baseURL:bm});function hm(){return localStorage.getItem(mo)}function Dh(){return localStorage.getItem(bo)}function pf({access:l,refresh:o}){l&&localStorage.setItem(mo,l),o&&localStorage.setItem(bo,o)}function to(){localStorage.removeItem(mo),localStorage.removeItem(bo)}function ho(l){return l?/^https?:\/\//i.test(l)?l:l.startsWith("/")?`${hf}${l}`:`${hf}/${l}`:""}function rt(l){const o=l?.file_url||l?.attachment_url||l?.file||l?.attachment||l?.resource_file||l?.video_file||l?.external_url||l?.launch_url||l?.embed_url||"";return ho(o)}function Ft(l){const o=rt(l);if(!o)return"ITEM";let c="";try{const m=new URL(o,"https://resource.invalid");c=m.searchParams.get("filename")||m.pathname.split("/").pop()||""}catch{c=o.split("?")[0].split("#")[0].split("/").pop()||""}return(c.includes(".")?c.slice(c.lastIndexOf(".")+1).toUpperCase():"LINK")||"ITEM"}function pm(l){return new Set(["PDF","JPG","JPEG","PNG","TXT","HTML","HTM","MP4","MOV","AVI"]).has(Ft(l))}function po(l,o){const c=rt(l);if(!c)return"";const d=/^https?:\/\//i.test(c),m=new URL(c,"https://resource.invalid");return o==="download"?m.searchParams.set("download","1"):m.searchParams.delete("download"),d?m.toString():`${m.pathname}${m.search}${m.hash}`}async function _h(l,o){const c=po(l,o),d=ho(c),m=/^https?:\/\//i.test(d)?d:new URL(d,window.location.origin).toString();try{const x=await Ds.get(m,{responseType:"blob"}),v=new URL(c,window.location.origin);return{blob:new Blob([x.data],{type:x.headers["content-type"]||x.data.type}),filename:v.searchParams.get("filename")||"download"}}catch(x){let v=x.response?.data?.detail||x.response?.data?.message||x.message;if(x.response?.data instanceof Blob)try{const w=JSON.parse(await x.response.data.text());v=w.detail||w.message||v}catch{}throw new Error(v||"Faylni yuklab bo'lmadi.")}}Ds.interceptors.request.use(l=>{const o=hm();return o&&(l.headers.Authorization=`Bearer ${o}`),!(l.data instanceof FormData)&&!l.headers["Content-Type"]&&(l.headers["Content-Type"]="application/json"),l.data instanceof FormData&&delete l.headers["Content-Type"],l});Ds.interceptors.response.use(l=>l,l=>(l.response?.status===401&&(to(),window.dispatchEvent(new CustomEvent("auth:unauthorized"))),Promise.reject(l)));async function Ha(l){try{return(await Ds(l)).data}catch(o){const c=o.response?.data?.detail||o.response?.data?.message||o.message||"Request failed";throw new Error(c)}}const be={list:(l,o)=>Ha({url:`/${l}/`,method:"GET",params:o}),get:(l,o)=>Ha({url:`/${l}/${o}/`,method:"GET"}),create:(l,o)=>Ha({url:`/${l}/`,method:"POST",data:o}),update:(l,o,c)=>Ha({url:`/${l}/${o}/`,method:"PATCH",data:c}),remove:(l,o)=>Ha({url:`/${l}/${o}/`,method:"DELETE"}),fetch:(l,o={})=>Ha({url:l,method:o.method||"GET",...o}),login:l=>Ha({url:"/auth/token/",method:"POST",data:l}),register:l=>Ha({url:"/auth/register/",method:"POST",data:l}),me:()=>Ha({url:"/auth/me/",method:"GET"}),updateMe:l=>Ha({url:"/auth/me/",method:"PUT",data:l}),refresh:(l=Dh())=>Ha({url:"/auth/token/refresh/",method:"POST",data:{refresh:l}})};function ws(l){return Array.isArray(l)?l:l?.results||[]}const xm=T.createContext(null);function Ht(l){switch(l){case"student":return"/student-profile";case"teacher":return"/teacher-profile";case"admin":return"/admin-profile";case"guest":return"/dashboard";default:return"/login"}}function Uh({children:l}){const[o,c]=T.useState(null),[d,m]=T.useState(!0);T.useEffect(()=>{let S=!0;async function q(){if(!hm()){S&&m(!1);return}try{const _=await be.me();S&&c(_)}catch{to(),S&&c(null)}finally{S&&m(!1)}}q();const K=()=>{S&&c(null)};return window.addEventListener("auth:unauthorized",K),()=>{S=!1,window.removeEventListener("auth:unauthorized",K)}},[]);async function x({identifier:S,password:q}){const K=await be.login({username:S,password:q});pf(K);const A=K.user||await be.me();return c(A),A}async function v(S){const q=await be.register(S);pf(q);const K=q.user||await be.me();return c(K),K}async function w(){const S=await be.me();return c(S),S}async function j(S){const q=await be.updateMe(S);return c(q),q}function N(){to(),c(null)}const k=T.useMemo(()=>({user:o,loading:d,isAuthenticated:!!o,login:x,register:v,logout:N,refreshUser:w,updateProfile:j}),[d,o]);return n.jsx(xm.Provider,{value:k,children:l})}function Uu(){const l=T.useContext(xm);if(!l)throw new Error("useAuth must be used within AuthProvider");return l}const Lh=[{path:"/dashboard",label:"Bosh sahifa",icon:l1,roles:["guest","student","teacher","admin"]},{path:"/dars-hujjatlari",label:"Dars hujjatlari",icon:Qi,roles:["guest","student","teacher","admin"]},{path:"/nazariy-bilimlar",label:"Nazariy bilimlar",icon:Mn,roles:["student","teacher","admin"]},{path:"/laboratoriya",label:"Laboratoriya",icon:lo,roles:["student","teacher","admin"]},{path:"/simulations",label:"Simulatsiyalar",icon:s1,roles:["student","teacher","admin"]},{path:"/videos",label:"Videolar",icon:Mf,roles:["guest","student","teacher","admin"]},{path:"/mobileapps",label:"Mobil ilovalar",icon:r1,roles:["student","teacher","admin"]},{path:"/testsystem",label:"Testlar",icon:Yi,roles:["student","teacher","admin"]},{path:"/profile",label:"Talaba profili",icon:o1,roles:["student"]}],Bh=[{path:"/subjects",label:"Fanlar",icon:Dn,roles:["guest","student","teacher","admin"]},{path:"/accounts",label:"Foydalanuvchilar",icon:Ji,roles:["admin"]},{path:"/analytics",label:"Analitika",icon:Df,roles:["teacher","admin"]},{path:"/notifications",label:"Bildirishnomalar",icon:_f,roles:["student","teacher","admin"]},{path:"/teacher-profile",label:"O'qituvchi profili",icon:Dn,roles:["teacher"]},{path:"/admin-profile",label:"Admin profili",icon:c1,roles:["admin"]}];function xf(l,o){return o?l.filter(c=>!c.roles||c.roles.includes(o)):[]}function gs({item:l,onNavigate:o}){const c=l.icon;return n.jsxs(u1,{to:l.path,onClick:o,className:({isActive:d})=>["group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition",d?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"text-slate-600 hover:bg-blue-50 hover:text-blue-700"].join(" "),children:[n.jsx(c,{size:18}),n.jsx("span",{children:l.label})]})}function Fh({children:l}){const{user:o,logout:c}=Uu(),[d,m]=T.useState(!1),x=o?.role,v=xf(Lh,x),w=xf(Bh,x),j=(o?.full_name||o?.username||"U").split(" ").map(S=>S[0]).join("").slice(0,2).toUpperCase(),N={student:"talaba",teacher:"o'qituvchi",admin:"admin",guest:"mehmon"};T.useEffect(()=>{if(!d)return;const S=q=>{q.key==="Escape"&&m(!1)};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[d]);const k=()=>m(!1);return n.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-900",children:[n.jsxs("aside",{className:"fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-blue-100 bg-white/95 px-4 py-5 shadow-xl shadow-blue-950/5 backdrop-blur lg:block",children:[n.jsxs(Ns,{to:"/dashboard",className:"mb-7 flex items-center gap-3 rounded-3xl px-2 py-1 transition hover:bg-blue-50",children:[n.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25",children:n.jsx(Dn,{size:24})}),n.jsxs("div",{children:[n.jsx("p",{className:"text-base font-black tracking-tight text-slate-950",children:"EduPlatform"}),n.jsx("p",{className:"text-xs font-medium text-slate-500",children:"Ta'lim platformasi"})]})]}),n.jsxs("div",{className:"space-y-6 overflow-y-auto pr-1",children:[n.jsx("nav",{className:"space-y-1.5",children:v.map(S=>n.jsx(gs,{item:S},S.path))}),n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400",children:"Boshqaruv"}),n.jsx("nav",{className:"space-y-1.5",children:w.map(S=>n.jsx(gs,{item:S},S.path))})]})]})]}),n.jsxs("div",{className:"lg:pl-72",children:[n.jsx("header",{className:`sticky top-0 ${d?"z-50":"z-30"} border-b border-blue-100 bg-white/85 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8`,children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("button",{type:"button",onClick:()=>m(S=>!S),className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-600 lg:hidden","aria-label":d?"Menyuni yopish":"Menyuni ochish","aria-expanded":d,"aria-controls":"mobile-navigation",children:d?n.jsx(Uf,{size:20}):n.jsx(d1,{size:20})}),n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-blue-600",children:"Ta'lim platformasi"}),n.jsx("h1",{className:"truncate text-xl font-black tracking-tight text-slate-950 sm:text-2xl",children:"Ta'lim boshqaruv paneli"})]}),n.jsxs("label",{className:"hidden min-h-11 w-full max-w-md items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 text-slate-500 md:flex",children:[n.jsx(As,{size:18}),n.jsx("input",{className:"w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400",placeholder:"Fanlar, darslar va testlarni qidirish..."})]}),n.jsxs("button",{className:"relative flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-600 shadow-sm",children:[n.jsx(_f,{size:19}),n.jsx("span",{className:"absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"})]}),n.jsxs("button",{className:"flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-2.5 py-2 shadow-sm",children:[o?.avatar?n.jsx("img",{src:o.avatar,alt:o.full_name||o.username,className:"h-8 w-8 rounded-xl object-cover"}):n.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-black text-white",children:j}),n.jsxs("div",{className:"hidden text-left sm:block",children:[n.jsx("p",{className:"text-sm font-bold leading-4 text-slate-900",children:o?.full_name||o?.username||"Foydalanuvchi"}),n.jsx("p",{className:"text-xs capitalize text-slate-500",children:N[x]||"a'zo"})]}),n.jsx(f1,{className:"hidden text-slate-400 sm:block",size:16})]}),n.jsx("button",{type:"button",onClick:c,className:"flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-600","aria-label":"Chiqish",children:n.jsx(m1,{size:18})})]})}),d&&n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",className:"fixed inset-x-0 bottom-0 top-[76px] z-40 bg-slate-950/35 lg:hidden",onClick:k,"aria-label":"Menyuni yopish"}),n.jsxs("aside",{id:"mobile-navigation",className:"fixed bottom-0 left-0 top-[76px] z-40 w-[min(20rem,85vw)] overflow-y-auto border-t border-blue-100 bg-white px-4 py-5 shadow-xl lg:hidden","aria-label":"Mobil navigatsiya",children:[n.jsx("nav",{className:"space-y-1.5",children:v.map(S=>n.jsx(gs,{item:S,onNavigate:k},S.path))}),w.length>0&&n.jsxs("div",{className:"mt-6",children:[n.jsx("p",{className:"mb-2 px-3 text-xs font-bold uppercase tracking-wide text-slate-400",children:"Boshqaruv"}),n.jsx("nav",{className:"space-y-1.5",children:w.map(S=>n.jsx(gs,{item:S,onNavigate:k},S.path))})]})]})]}),n.jsx("main",{className:"px-4 py-6 sm:px-6 lg:px-8",children:l||n.jsx(io,{})})]})]})}function Hh({title:l,subtitle:o,meta:c,badge:d,icon:m,actionLabel:x="Open",tone:v="blue",primaryAction:w,secondaryAction:j,fileUnavailable:N=!1}){const k={blue:"bg-blue-50 text-blue-700",emerald:"bg-emerald-50 text-emerald-700",violet:"bg-violet-50 text-violet-700",amber:"bg-amber-50 text-amber-700"};return n.jsxs(no.article,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},className:"group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10",children:[n.jsxs("div",{className:"mb-5 flex items-start justify-between gap-4",children:[n.jsx("div",{className:`flex h-12 w-12 items-center justify-center rounded-2xl ${k[v]}`,children:m&&n.jsx(m,{size:22})}),d&&n.jsx("span",{className:"rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600",children:d})]}),n.jsx("h3",{className:"line-clamp-2 text-lg font-black tracking-tight text-slate-950",children:l}),o&&n.jsx("p",{className:"mt-2 line-clamp-3 text-sm leading-6 text-slate-600",children:o}),c&&n.jsx("p",{className:"mt-4 text-xs font-bold uppercase tracking-wide text-slate-400",children:c}),N&&n.jsx("p",{role:"status",className:"mt-4 text-sm font-semibold text-rose-700",children:"Fayl hozir serverda mavjud emas. Administratorga murojaat qiling."}),n.jsxs("div",{className:"mt-5 flex flex-wrap gap-3",children:[j?.href&&n.jsxs("a",{href:j.href,target:j.target||"_blank",rel:j.target==="_self"?void 0:"noreferrer",download:j.download||void 0,onClick:j.onClick,className:"inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700",children:[n.jsx(Lf,{size:16}),j.label||"Ko'rish"]}),w?.href?n.jsxs("a",{href:w.href,target:w.target||"_blank",rel:w.target==="_self"?void 0:"noreferrer",download:w.download||void 0,onClick:w.onClick,className:"inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-700",children:[w.label||x,n.jsx(Z4,{size:16})]}):n.jsxs("button",{className:"inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-700",children:[x,n.jsx(Z4,{size:16})]})]})]})}function Yu({columns:l,rows:o}){return n.jsx("div",{className:"overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm shadow-blue-950/5",children:n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full min-w-[680px] border-collapse",children:[n.jsx("thead",{className:"bg-blue-50/80",children:n.jsx("tr",{children:l.map(c=>n.jsx("th",{className:"px-5 py-4 text-left text-xs font-black uppercase tracking-wide text-slate-500",children:c.label},c.key))})}),n.jsx("tbody",{children:o.map(c=>n.jsx("tr",{className:"border-t border-blue-50",children:l.map(d=>n.jsx("td",{className:"px-5 py-4 text-sm text-slate-700",children:d.render?d.render(c):c[d.key]||"—"},d.key))},c.id))})]})})})}function Xu({title:l="Ma'lumot topilmadi",description:o="Yangi yozuvlar qo'shilgach, ular shu yerda ko'rinadi."}){return n.jsxs("div",{className:"flex min-h-56 flex-col items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-white/70 p-8 text-center",children:[n.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600",children:n.jsx(b1,{size:26})}),n.jsx("h3",{className:"mt-4 text-lg font-black text-slate-950",children:l}),n.jsx("p",{className:"mt-2 max-w-md text-sm leading-6 text-slate-600",children:o})]})}function ot({label:l="Ma'lumotlar yuklanmoqda..."}){return n.jsxs("div",{className:"flex min-h-44 flex-col items-center justify-center gap-3 rounded-3xl border border-blue-100 bg-white text-slate-500",children:[n.jsx("div",{className:"h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"}),n.jsx("p",{className:"text-sm font-semibold",children:l})]})}function $h({value:l,onChange:o,placeholder:c="Yozuvlarni qidirish",children:d}){return n.jsxs("div",{className:"flex flex-col gap-3 rounded-3xl border border-blue-100 bg-white p-3 shadow-sm shadow-blue-950/5 md:flex-row md:items-center",children:[n.jsxs("label",{className:"flex min-h-12 flex-1 items-center gap-3 rounded-2xl bg-blue-50 px-4 text-slate-500",children:[n.jsx(As,{size:18}),n.jsx("input",{value:l,onChange:m=>o(m.target.value),placeholder:c,className:"w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[d,n.jsxs("button",{className:"inline-flex min-h-12 items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 text-sm font-bold text-slate-700",children:[n.jsx(h1,{size:17}),"Filtrlar"]})]})]})}function Bn({eyebrow:l,title:o,description:c,action:d}){return n.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[n.jsxs("div",{children:[l&&n.jsx("p",{className:"text-xs font-black uppercase tracking-wide text-blue-600",children:l}),n.jsx("h2",{className:"mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl",children:o}),c&&n.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-6 text-slate-600",children:c})]}),d]})}function Vh(l){const[o,c]=T.useState([]),[d,m]=T.useState(!0),[x,v]=T.useState("");return T.useEffect(()=>{let w=!0;return m(!0),v(""),be.list(l).then(j=>{w&&c(ws(j))}).catch(j=>{w&&(v(j.message),c([]))}).finally(()=>{w&&m(!1)}),()=>{w=!1}},[l]),T.useMemo(()=>({rows:o,loading:d,error:x}),[x,d,o])}function Fn({eyebrow:l,title:o,description:c,resource:d,icon:m,tone:x,card:v,columns:w,action:j,secondary:N,sortRows:k,filterRows:S,onPreview:q,onPrimaryAction:K}){const[A,_]=T.useState(""),[C,Z]=T.useState(""),{rows:ee,loading:ne,error:ue}=Vh(d),me=async(P,D)=>{Z("");const he=D==="preview"?window.open("about:blank","_blank"):null;if(D==="preview"&&!he){Z("Brauzer yangi oynani blokladi. PDF ko'rish uchun pop-up oynaga ruxsat bering.");return}he&&(he.opener=null);try{const{blob:Ie,filename:qe}=await _h(P,D),Ce=URL.createObjectURL(Ie);if(he)he.addEventListener("pagehide",()=>URL.revokeObjectURL(Ce),{once:!0}),he.location.replace(Ce);else{const Ge=document.createElement("a");Ge.href=Ce,Ge.download=qe,document.body.appendChild(Ge),Ge.click(),Ge.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ce),6e4)}}catch(Ie){he?.close(),Z(Ie.message||"Faylni ochib yoki yuklab bo'lmadi.")}},ce=T.useMemo(()=>{const P=A.trim().toLowerCase(),D=S?ee.filter(S):ee,he=k?[...D].sort(k):D;return P?he.filter(Ie=>JSON.stringify(Ie).toLowerCase().includes(P)):he},[S,A,ee,k]);return n.jsxs("div",{className:"space-y-6",children:[n.jsx(Bn,{eyebrow:l,title:o,description:c,action:j}),n.jsx($h,{value:A,onChange:_,placeholder:`${o.toLowerCase()} bo'yicha qidirish`}),ne&&n.jsx(ot,{label:`${o.toLowerCase()} yuklanmoqda...`}),ue&&n.jsx(Xu,{title:"Ma'lumotlarni yuklab bo'lmadi",description:ue}),C&&n.jsx("p",{role:"alert",className:"rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800",children:C}),!ne&&!ue&&ce.length===0&&n.jsx(Xu,{}),!ne&&!ue&&ce.length>0&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"grid gap-5 md:grid-cols-2 xl:grid-cols-3",children:ce.map(P=>{const D=P.file_available!==!1&&P.attachment_available!==!1,he=typeof v.showPreview=="function"?v.showPreview(P):v.showPreview??pm(P);return n.jsx(Hh,{icon:m,tone:x,title:v.title(P),subtitle:v.subtitle?.(P),meta:v.meta?.(P),badge:v.badge?.(P)||Ft(P),actionLabel:v.actionLabel,fileUnavailable:!D,secondaryAction:D&&he?{href:v.previewHref?.(P)||rt(P),label:v.previewLabel||"Ko'rish",target:typeof v.previewTarget=="function"?v.previewTarget(P):v.previewTarget,download:typeof v.previewDownload=="function"?v.previewDownload(P):v.previewDownload,onClick:Ie=>{q?.(P),v.authenticatedFileActions&&(Ie.preventDefault(),me(P,"preview"))}}:void 0,primaryAction:D&&rt(P)?{href:v.actionHref?.(P)||rt(P),label:v.actionLabel||"Open",target:typeof v.actionTarget=="function"?v.actionTarget(P):v.actionTarget,download:typeof v.actionDownload=="function"?v.actionDownload(P):v.actionDownload,onClick:Ie=>{K?.(P),v.authenticatedFileActions&&(Ie.preventDefault(),me(P,"download"))}}:void 0},P.id)})}),w&&n.jsx(Yu,{columns:w,rows:ce.slice(0,8)})]}),N]})}function Kh(){return n.jsx(Fn,{eyebrow:"Accounts",title:"User directory",description:"Role-based account overview for admins, teachers, students, and guests.",resource:"users",icon:Ji,tone:"violet",card:{title:l=>l.first_name||l.last_name?`${l.first_name} ${l.last_name}`:l.username,subtitle:l=>l.email||l.bio||"Platform user account.",meta:l=>`Joined ${new Date(l.date_joined).toLocaleDateString()}`,badge:l=>l.role,actionLabel:"Open profile"},columns:[{key:"username",label:"Username"},{key:"email",label:"Email"},{key:"role",label:"Role"},{key:"is_active",label:"Active",render:l=>l.is_active?"Yes":"No"}]})}function xo({user:l,title:o="Profil sozlamalari",description:c,onSave:d,saving:m=!1}){const[x,v]=T.useState({first_name:"",last_name:"",email:"",phone:"",bio:""}),[w,j]=T.useState(null),[N,k]=T.useState(""),[S,q]=T.useState("");T.useEffect(()=>{v({first_name:l?.first_name||"",last_name:l?.last_name||"",email:l?.email||"",phone:l?.phone||"",bio:l?.bio||""}),j(null)},[l]);function K(_){const{name:C,value:Z}=_.target;v(ee=>({...ee,[C]:Z}))}async function A(_){_.preventDefault(),k(""),q("");try{const C=new FormData;Object.entries(x).forEach(([Z,ee])=>C.append(Z,ee)),w&&C.append("avatar",w),await d(C),q("ok"),j(null)}catch(C){k(C.message||"Profilni yangilab bo'lmadi.")}}return n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-lg font-black text-slate-950",children:o}),c&&n.jsx("p",{className:"text-sm leading-6 text-slate-600",children:c})]}),n.jsxs("form",{className:"mt-5 space-y-4",onSubmit:A,children:[n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:"Ism"}),n.jsx("input",{name:"first_name",value:x.first_name,onChange:K,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:"Familiya"}),n.jsx("input",{name:"last_name",value:x.last_name,onChange:K,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:"Email"}),n.jsx("input",{type:"email",name:"email",value:x.email,onChange:K,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:"Telefon"}),n.jsx("input",{name:"phone",value:x.phone,onChange:K,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"})]})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:"Bio"}),n.jsx("textarea",{name:"bio",rows:"4",value:x.bio,onChange:K,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"})]}),n.jsxs("label",{className:"flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 px-4 py-4 text-sm font-semibold text-blue-700 transition hover:border-blue-400 hover:bg-blue-50",children:[n.jsx(p1,{size:18}),n.jsx("span",{children:w?w.name:"Avatar yuklash"}),n.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:_=>j(_.target.files?.[0]||null)})]}),N&&n.jsx("p",{className:"rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600",children:N}),S&&n.jsx("p",{className:"rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700",children:"Profil muvaffaqiyatli yangilandi."}),n.jsxs("button",{type:"submit",disabled:m,className:"inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60",children:[n.jsx(Bf,{size:16}),m?"Saqlanmoqda...":"Profilni saqlash"]})]})]})}function nu({title:l,value:o,icon:c,tone:d="blue",detail:m}){const x={blue:"from-blue-600 to-cyan-500 shadow-blue-600/20",emerald:"from-emerald-500 to-teal-500 shadow-emerald-600/20",violet:"from-violet-500 to-indigo-500 shadow-violet-600/20",amber:"from-amber-500 to-orange-500 shadow-amber-600/20",rose:"from-rose-500 to-pink-500 shadow-rose-600/20"};return n.jsx(no.article,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:n.jsxs("div",{className:"flex items-center justify-between gap-4",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-semibold text-slate-500",children:l}),n.jsx("strong",{className:"mt-2 block text-3xl font-black tracking-tight text-slate-950",children:o}),m&&n.jsx("span",{className:"mt-1 block text-xs font-semibold text-emerald-600",children:m})]}),n.jsx("div",{className:`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${x[d]}`,children:n.jsx(c,{size:22})})]})})}function Yh(){const{user:l,updateProfile:o}=Uu(),[c,d]=T.useState(!0),[m,x]=T.useState(!1),[v,w]=T.useState(""),[j,N]=T.useState({counts:{},metrics:[],announcements:[],activity:[]}),[k,S]=T.useState({users:[],subjects:[],documents:[],videos:[]});T.useEffect(()=>{let A=!0;async function _(){d(!0),w("");try{const[C,Z,ee,ne,ue]=await Promise.all([be.fetch("/dashboard/summary/"),be.fetch("/admin/users/"),be.fetch("/admin/subjects/"),be.fetch("/admin/documents/"),be.fetch("/admin/videos/")]);if(!A)return;N(C),S({users:Z,subjects:ee,documents:ne,videos:ue})}catch(C){A&&w(C.message||"Unable to load admin dashboard.")}finally{A&&d(!1)}}return _(),()=>{A=!1}},[]);const q=T.useMemo(()=>({students:k.users.filter(A=>A.role==="student").length,teachers:k.users.filter(A=>A.role==="teacher").length}),[k.users]);async function K(A){x(!0);try{await o(A)}finally{x(!1)}}return c?n.jsx(ot,{label:"Loading admin profile..."}):v?n.jsx(Xu,{title:"Unable to load admin profile",description:v}):n.jsxs("div",{className:"space-y-6",children:[n.jsx(Bn,{eyebrow:"Admin profile",title:`Platform control center for ${l.full_name||l.username}`,description:"Oversee users, academic resources, announcements, moderation queues, and recent system activity."}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[n.jsx(nu,{title:"Total users",value:j.counts.total_users||0,icon:Ji,detail:"All registered accounts"}),n.jsx(nu,{title:"Students",value:j.counts.total_students||q.students,icon:vs,tone:"blue",detail:"Active learner accounts"}),n.jsx(nu,{title:"Teachers",value:j.counts.total_teachers||q.teachers,icon:vs,tone:"amber",detail:"Active teacher accounts"}),n.jsx(nu,{title:"Subjects",value:j.counts.total_subjects||k.subjects.length,icon:x1,tone:"emerald",detail:"Academic structure"})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[n.jsx(nu,{title:"Documents",value:j.counts.total_documents||k.documents.length,icon:Qi,detail:"Moderation inventory"}),n.jsx(nu,{title:"Videos",value:j.counts.total_videos||k.videos.length,icon:zs,tone:"violet",detail:"Published and draft media"}),n.jsx(nu,{title:"Tests",value:j.counts.total_tests||0,icon:V3,tone:"rose",detail:"Assessment coverage"}),n.jsx(nu,{title:"Announcements",value:j.announcements.length,icon:V3,tone:"amber",detail:"System communications"})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-[1fr_0.95fr]",children:[n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[n.jsx(vs,{className:"text-blue-600",size:22}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"System announcements"})]}),j.announcements.length?n.jsx(Yu,{rows:j.announcements,columns:[{key:"title",label:"Title"},{key:"audience",label:"Audience"},{key:"pinned",label:"Pinned",render:A=>A.pinned?"Yes":"No"}]}):n.jsx(Xu,{title:"No announcements available",description:"Announcements will appear here when published."})]}),n.jsx(xo,{user:l,onSave:K,saving:m,title:"Administrator settings",description:"Keep your administrator profile updated for moderation and leadership responsibilities."})]}),j.activity.length?n.jsx(Yu,{rows:j.activity.map(A=>({...A,actorLabel:A.actor_name||"System",dateLabel:new Date(A.created_at).toLocaleString()})),columns:[{key:"actorLabel",label:"Actor"},{key:"action",label:"Action"},{key:"target_type",label:"Target"},{key:"dateLabel",label:"Date"}]}):n.jsx(Xu,{title:"No recent activity",description:"Recent activity logs will appear here."}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-2",children:[n.jsx(Yu,{rows:k.users.slice(0,12),columns:[{key:"full_name",label:"User"},{key:"email",label:"Email"},{key:"role",label:"Role"},{key:"is_active",label:"Active",render:A=>A.is_active?"Yes":"No"}]}),n.jsx(Yu,{rows:k.subjects.slice(0,12),columns:[{key:"title",label:"Subject"},{key:"owner_name",label:"Owner"},{key:"courses_count",label:"Courses"},{key:"created_at",label:"Created",render:A=>new Date(A.created_at).toLocaleDateString()}]})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-2",children:[n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(Qi,{className:"text-blue-600",size:20}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Documents moderation"})]}),n.jsx(Yu,{rows:k.documents.slice(0,10),columns:[{key:"title",label:"Document"},{key:"category_name",label:"Category"},{key:"uploader_name",label:"Uploader"},{key:"access_level",label:"Access"}]})]}),n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(zs,{className:"text-blue-600",size:20}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Video moderation"})]}),n.jsx(Yu,{rows:k.videos.slice(0,10),columns:[{key:"title",label:"Video"},{key:"course_title",label:"Course"},{key:"author_name",label:"Author"},{key:"published",label:"Published",render:A=>A.published?"Yes":"No"}]})]})]})]})}function gf(){return n.jsx(Fn,{eyebrow:"Analytics",title:"Dashboard metrics",description:"System metrics, operational numbers, and activity indicators.",resource:"dashboard-metrics",icon:Df,tone:"emerald",card:{title:l=>l.label,subtitle:l=>l.key||"Metric key",meta:l=>`${l.value||0} ${l.unit||""}`,badge:()=>"metric",actionLabel:"Inspect"},columns:[{key:"label",label:"Metric"},{key:"key",label:"Key"},{key:"value",label:"Value"},{key:"unit",label:"Unit"}]})}function vf({title:l,description:o,children:c}){return n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4",children:[n.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-950",children:l}),o&&n.jsx("p",{className:"mt-1 text-sm text-slate-500",children:o})]}),n.jsx("div",{className:"h-72",children:c})]})}const Cu={getDashboardStats(){return be.fetch("/student/dashboard-stats/")},getProfileStats(){return be.fetch("/student/profile-stats/")},getDashboardFeed(){return be.fetch("/dashboard/summary/")},getEnrollments(){return be.fetch("/my/enrollments/")},getTheoryProgress(){return be.fetch("/my/theory-progress/")},getPracticalSubmissions(){return be.fetch("/my/practical-submissions/")},getLabReports(){return be.fetch("/my/lab-reports/")},getVideoProgress(){return be.fetch("/my/video-progress/")},getTestAttempts(){return be.fetch("/my/test-attempts/")},getCertificates(){return be.fetch("/my/certificates/")},trackVideo(l){return be.fetch("/student/track-video/",{method:"POST",data:l})},trackTest(l){return be.fetch("/student/track-test/",{method:"POST",data:l})},trackSimulation(l){return be.fetch("/student/track-simulation/",{method:"POST",data:l})},trackTheory(l){return be.fetch("/student/track-theory/",{method:"POST",data:l})},trackDocument(l){return be.fetch("/student/track-document/",{method:"POST",data:l})}};function Qh(){const{user:l}=Uu(),[o,c]=T.useState({subjects:0,documents:0,videos:0,tests:0,activity:0}),[d,m]=T.useState([]),[x,v]=T.useState([]),[w,j]=T.useState(!0);if(T.useEffect(()=>{let q=!0;async function K(){j(!0);try{const A=l?.role==="student"?await Cu.getDashboardFeed():await be.fetch("/dashboard/summary/"),_=l?.role==="student"?await Cu.getDashboardStats():null;if(!q)return;const C=_||A.counts||{};c({subjects:C.subjects_count||C.subjects||C.total_subjects||C.enrollments||0,documents:C.documents_count||C.documents||C.total_documents||C.practical_submissions||0,videos:C.videos_count||C.videos||C.total_videos||C.watched_videos||C.uploaded_lessons||0,tests:C.tests_count||C.tests||C.total_tests||C.test_attempts||0,activity:C.activity_count||(A.activity||[]).length}),m(A.announcements||[]),v(A.activity||[])}catch{q&&(c({subjects:0,documents:0,videos:0,tests:0,activity:0}),m([]),v([]))}finally{q&&j(!1)}}return K(),()=>{q=!1}},[l?.role]),w)return n.jsx(ot,{label:"Bosh sahifa yuklanmoqda..."});const N=[{name:"Fanlar",value:o.subjects},{name:"Hujjatlar",value:o.documents},{name:"Videolar",value:o.videos},{name:"Testlar",value:o.tests}],k=[{name:"Dars hujjatlari",value:o.documents||1},{name:"Videolar",value:o.videos||1},{name:"Testlar",value:o.tests||1}],S=["#2563eb","#06b6d4","#8b5cf6"];return n.jsxs("div",{className:"space-y-6",children:[n.jsx(no.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},className:"overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-6 text-white shadow-2xl shadow-blue-600/20 md:p-8",children:n.jsxs("div",{className:"max-w-3xl",children:[n.jsx("p",{className:"text-sm font-bold uppercase tracking-wide text-blue-100",children:"Xush kelibsiz"}),n.jsx("h2",{className:"mt-2 text-3xl font-black tracking-tight md:text-4xl",children:"Barcha ta'lim jarayonlarini bir joydan boshqaring"}),n.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-6 text-blue-50",children:"Django backend bilan bog'langan jonli statistika orqali fanlar, hujjatlar, videolar va testlar holatini real vaqtda kuzating."})]})}),n.jsx(Bn,{eyebrow:"Bosh sahifa",title:"Platforma statistikasi",description:"Django API orqali olinayotgan jonli ko'rsatkichlar va so'nggi faolliklar."}),n.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-5",children:[n.jsx(nu,{title:"Fanlar",value:o.subjects,icon:Mn,detail:"Faol o'quv yo'nalishlari"}),n.jsx(nu,{title:"Dars hujjatlari",value:o.documents,icon:Qi,tone:"emerald",detail:"Mavjud o'quv fayllari"}),n.jsx(nu,{title:"Video darslar",value:o.videos,icon:Mf,tone:"violet",detail:"Video kutubxonasi"}),n.jsx(nu,{title:"Testlar",value:o.tests,icon:Yi,tone:"amber",detail:"Baholash materiallari"}),n.jsx(nu,{title:"Faollik",value:o.activity,icon:zs,tone:"rose",detail:"So'nggi amallar"})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-2",children:[n.jsx(vf,{title:"Kontent hajmi",description:"Asosiy ta'lim kontenti turlari bo'yicha umumiy sonlar",children:n.jsx(Y3,{width:"100%",height:"100%",children:n.jsxs(H1,{data:N,children:[n.jsx($1,{dataKey:"name",axisLine:!1,tickLine:!1}),n.jsx(V1,{allowDecimals:!1,axisLine:!1,tickLine:!1}),n.jsx(Q3,{}),n.jsx(K1,{dataKey:"value",radius:[10,10,0,0],fill:"#2563eb"})]})})}),n.jsx(vf,{title:"Ta'lim tarkibi",description:"Hujjatlar, videolar va testlar nisbati",children:n.jsx(Y3,{width:"100%",height:"100%",children:n.jsxs(Y1,{children:[n.jsx(Q1,{data:k,dataKey:"value",innerRadius:58,outerRadius:96,paddingAngle:4,children:k.map((q,K)=>n.jsx(J1,{fill:S[K%S.length]},q.name))}),n.jsx(Q3,{})]})})})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-2",children:[n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(g1,{className:"text-blue-600",size:22}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Bosh sahifa resurslari"})]}),d.length?n.jsx("div",{className:"space-y-3",children:d.slice(0,5).map(q=>{const K=rt(q),A=pm(q);return n.jsxs("div",{className:"flex flex-col gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 md:flex-row md:items-center md:justify-between",children:[n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("p",{className:"font-black text-slate-950",children:q.title}),n.jsx("span",{className:"rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700",children:Ft(q)}),q.pinned&&n.jsx("span",{className:"rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700",children:"Biriktirilgan"})]}),n.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-600",children:q.body})]}),K&&n.jsxs("div",{className:"flex flex-wrap gap-2",children:[A&&n.jsxs("a",{href:K,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700",children:[n.jsx(Lf,{size:16}),"Ko'rish"]}),n.jsxs("a",{href:K,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20",children:[n.jsx(v1,{size:16}),"Faylni ochish"]})]})]},q.id)})}):n.jsx(Xu,{title:"Bosh sahifa resurslari yo'q",description:"Import qilingan bosh sahifa fayllari va e'lonlar bu yerda ko'rsatiladi."})]}),n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(zs,{className:"text-blue-600",size:22}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"So'nggi faolliklar"})]}),x.length?n.jsx(Yu,{rows:x.slice(0,5),columns:[{key:"action",label:"Harakat"},{key:"target_type",label:"Maqsad"},{key:"created_at",label:"Sana",render:q=>new Date(q.created_at).toLocaleDateString()}]}):n.jsx(Xu,{title:"Faoliyat yo'q",description:"Foydalanuvchi va kontent voqealari bu yerda ko'rsatiladi."})]})]})]})}function yf(){const{user:l}=Uu(),o=(d,m)=>(d.title||"").localeCompare(m.title||"",void 0,{numeric:!0,sensitivity:"base"}),c=(d,m)=>{l?.role==="student"&&Cu.trackDocument({resource_id:String(d.id),resource_title:d.title,metadata:{source:m}}).catch(()=>{})};return n.jsx(Fn,{eyebrow:"Dars hujjatlari",title:"Dars hujjatlari",description:"Kursga oid dars hujjatlari ro'yxati. Bu yerda siz barcha dars hujjatlarini ko'rishingiz, qidirishingiz va boshqarishingiz mumkin.",resource:"documents",icon:Qi,tone:"blue",card:{authenticatedFileActions:!0,title:d=>d.title,subtitle:d=>d.description||"Kursga oid dars hujjati ko'rib chiqishga va yuklab olishga tayyor.",meta:d=>`${d.access_level||"public"} • ${d.downloads_count||0} yuklab olish`,badge:d=>Ft(d),previewLabel:"Ko'rish",actionLabel:"Yuklab olish",actionHref:d=>po(d,"download"),previewTarget:"_self"},sortRows:o,columns:[{key:"title",label:"Hujjat"},{key:"access_level",label:"Ruxsat"},{key:"downloads_count",label:"Yuklab olish"}],action:n.jsxs("a",{href:ho("/api/documents/bulk-download/"),onClick:()=>{l?.role==="student"&&Cu.trackDocument({resource_id:"bulk-download",resource_title:"Dars hujjatlari to'plami",metadata:{source:"bulk-download"}}).catch(()=>{})},className:"inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20",download:!0,children:[n.jsx(Gi,{size:17}),"Ommaviy yuklab olish"]}),onPreview:d=>c(d,"preview"),onPrimaryAction:d=>c(d,"download")})}function kf(){const l=(c,d)=>(c.title||"").localeCompare(d.title||"",void 0,{numeric:!0,sensitivity:"base"}),o=c=>(c.resource_file||"").includes("simulations/files/simulations/imported/");return n.jsx(Fn,{eyebrow:"Labaratoriya",title:"Labaratoriya",description:"Labaratoriya uchun flesh fayllarni ko'rish va yuklab olish mumkin bo'lgan bo'lim.",resource:"simulations",icon:lo,tone:"amber",filterRows:o,sortRows:l,card:{title:c=>c.title,subtitle:c=>c.description||"Labaratoriya flesh fayli.",meta:c=>c.launch_url||c.embed_url||"Flesh laboratoriya fayli",badge:c=>Ft(c),showPreview:!0,previewLabel:"Ko'rish",previewTarget:"_self",previewHref:c=>`/laboratory/${c.id}/view`,actionLabel:"Yuklab olish",actionDownload:!0},columns:[{key:"title",label:"Fayl"},{key:"resource_file",label:"Manba"},{key:"published",label:"Tayyor",render:c=>c.published?"Ha":"Yo'q"}],action:n.jsxs("button",{className:"inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20",children:[n.jsx(Ff,{size:17}),"Flesh fayllar"]})})}function Jh(){const l=Cf(),{user:o,login:c,loading:d}=Uu(),[m,x]=T.useState({identifier:"",password:""}),[v,w]=T.useState(""),[j,N]=T.useState(!1);T.useEffect(()=>{!d&&o&&l(Ht(o.role),{replace:!0})},[d,l,o]);async function k(S){S.preventDefault(),N(!0),w("");try{const q=await c(m);l(Ht(q.role),{replace:!0})}catch(q){w(q.message||"Login failed.")}finally{N(!1)}}return n.jsx("div",{className:"min-h-screen bg-slate-950 px-4 py-10 text-slate-50",children:n.jsxs("div",{className:"mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]",children:[n.jsxs("section",{className:"rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-8 shadow-2xl shadow-blue-950/30 md:p-10",children:[n.jsx("div",{className:"inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur",children:n.jsx(y1,{size:30})}),n.jsx("p",{className:"mt-6 text-sm font-bold uppercase tracking-[0.24em] text-blue-100",children:"Education Platform"}),n.jsx("h1",{className:"mt-4 text-4xl font-black tracking-tight md:text-5xl",children:"UMUMIY O‘RTA TA’LIM MAKTABINING 9-SINF FIZIKA FANIDAN RAQAMLASHTIRILGAN PLATFORMA "}),n.jsx("p",{className:"mt-5 max-w-xl text-sm leading-7 text-blue-50/90 md:text-base",children:"Tizimda talabalar, o‘qituvchilar, administratorlar va mehmonlar uchun alohida rolga mos boshqaruv panellari mavjud. Foydalanuvchilar tizimga kirish orqali darslar, topshiriqlar, baholash ko‘rsatkichlari hamda umumiy faollikni yagona platformada kuzatishlari mumkin."}),n.jsx("div",{className:"mt-10 grid gap-4 sm:grid-cols-3",children:[{label:"O'quvchi",detail:"Kurslar va sertifikatlarni kuzatish"},{label:"O'qituvchi",detail:"Darslarni va topshiriqlarni boshqarish"},{label:"Admin",detail:"Foydalanuvchilar, faoliyat va tahlillarni nazorat qilish"}].map(S=>n.jsxs("article",{className:"rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm",children:[n.jsx("p",{className:"text-sm font-black text-white",children:S.label}),n.jsx("p",{className:"mt-2 text-xs leading-6 text-blue-100",children:S.detail})]},S.label))})]}),n.jsxs("section",{className:"rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-2xl shadow-black/20 md:p-10",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"mt-2 text-3xl font-black tracking-tight",children:"Kirish"}),n.jsx("p",{className:"mt-3 text-sm leading-6 text-slate-600",children:"Foydalanuvchi nomi yoki elektron pochta manzilingiz va parolingizni kiriting."})]}),n.jsxs("form",{className:"mt-8 space-y-5",onSubmit:k,children:[n.jsxs("label",{className:"block space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:"Foydalanuvchi nomi yoki elektron pochta"}),n.jsx("input",{value:m.identifier,onChange:S=>x(q=>({...q,identifier:S.target.value})),className:"w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white",placeholder:"student01 or student@example.com",autoComplete:"username",required:!0})]}),n.jsxs("label",{className:"block space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:"Parol"}),n.jsx("input",{type:"password",value:m.password,onChange:S=>x(q=>({...q,password:S.target.value})),className:"w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white",placeholder:"••••••••",autoComplete:"current-password",required:!0})]}),v&&n.jsx("p",{className:"rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600",children:v}),n.jsxs("button",{type:"submit",disabled:j,className:"inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60",children:[n.jsx(k1,{size:18}),j?"Kirish...":"Kirish"]})]}),n.jsxs("p",{className:"mt-6 text-sm text-slate-600",children:["Platformada yangimisiz? "," ",n.jsx(Ns,{to:"/register",className:"font-bold text-blue-600 hover:text-blue-700",children:"Hisob yaratish"})]})]})]})})}function Gh({app:l,loading:o,onDownload:c}){const d=o||!l?.url;return n.jsxs("article",{className:"mobile-apk-card",children:[n.jsxs("div",{className:"mobile-apk-card__header",children:[n.jsxs("div",{className:"mobile-apk-card__icon-wrap",children:[n.jsx("div",{className:"mobile-apk-card__icon",children:n.jsx("span",{children:"EP"})}),n.jsxs("div",{children:[n.jsx("p",{className:"mobile-apk-card__eyebrow",children:"EduPlatform Android"}),n.jsx("h3",{className:"mobile-apk-card__title",children:l?.displayName||"EduPlatform Mobil Ilovasi"})]})]}),n.jsxs("span",{className:"mobile-apk-card__badge",children:[n.jsx(Un,{size:14})," Premium APK"]})]}),n.jsxs("div",{className:"mobile-apk-card__stats",children:[n.jsxs("div",{className:"mobile-apk-card__stat",children:[n.jsx("span",{children:"Versiya"}),n.jsx("strong",{children:l?.version||"v1.0.0"})]}),n.jsxs("div",{className:"mobile-apk-card__stat",children:[n.jsx("span",{children:"Hajmi"}),n.jsx("strong",{children:l?.size||"—"})]}),n.jsxs("div",{className:"mobile-apk-card__stat mobile-apk-card__stat--badge",children:[n.jsx(Ss,{size:16}),n.jsx("strong",{children:l?.platformLabel||"Android 8+"})]})]}),n.jsxs("div",{className:"mobile-apk-card__body",children:[n.jsx("p",{children:"Telefon orqali darslarni ko'rish, test ishlash, simulatsiyalarni ochish va platformaga tezkor kirish uchun rasmiy Android APK."}),n.jsxs("div",{className:"mobile-apk-card__trust-row",children:[n.jsxs("span",{children:[n.jsx(vs,{size:15})," Xavfsiz yuklab olish"]}),n.jsx("span",{children:"To'g'ridan-to'g'ri serverdan"})]})]}),n.jsxs("button",{type:"button",className:"mobile-apk-card__button",onClick:c,disabled:d,children:[n.jsx(P4,{size:18}),o?"APK tayyorlanmoqda...":"APK Yuklab olish"]})]})}const Wh=[{title:"Offline video darslar",description:"Internet bo'lmasa ham dars videolarini telefoningizda ochib ko'rish imkoniyati.",accent:"emerald"},{title:"Interaktiv testlar",description:"Natijalarni tez ko'ring, ball to'plang va har bir mavzuni o'zingizni sinab mustahkamlang.",accent:"blue"},{title:"Fizika simulatsiyalar",description:"Murakkab fizik jarayonlarni sensorli interfeys orqali jonli tajriba sifatida boshqaring.",accent:"violet"},{title:"Tezkor foydalanish",description:"Telefon orqali platformaga tez kirish, bildirishnoma olish va asosiy bo'limlarga bir teginishda o'tish.",accent:"amber"}],Vi=[{title:"Bosh sahifa",caption:"Kurslar, tavsiyalar va kundalik reja bir ekranda.",chips:["Jonli statistika","Premium UI","Tezkor kirish"]},{title:"Video darslar",caption:"Google Play uslubidagi video kutubxona va yuklab olish tugmalari.",chips:["Offline rejim","HD format","Davomiylik"]},{title:"Testlar bo'limi",caption:"Gamifikatsiyalangan testlar, XP va yulduzli natijalar ko'rinishi.",chips:["XP","Badge","Progress"]},{title:"Simulatsiyalar",caption:"Telefon ekranida ham ishlaydigan laboratoriya va vizual modellar.",chips:["Animatsiya","Sensorli boshqaruv","Formula"]}],Zh=[[1,1,1,1,1,1,1,0,1,0,1,1],[1,0,0,0,0,0,1,0,1,0,0,1],[1,0,1,1,1,0,1,0,1,1,0,1],[1,0,1,1,1,0,1,0,0,1,0,1],[1,0,1,1,1,0,1,1,0,1,1,0],[1,0,0,0,0,0,1,0,1,0,0,1],[1,1,1,1,1,1,1,0,1,1,1,1],[0,0,0,0,1,0,0,1,0,0,0,0],[1,1,1,0,1,1,0,1,1,1,0,1],[0,0,1,0,0,1,1,0,0,1,1,0],[1,1,0,1,0,0,1,1,0,0,1,1],[1,0,1,1,1,0,0,1,1,0,1,0]];function Ph(l){return Array.isArray(l)?l[0]||null:l?.results&&Array.isArray(l.results)?l.results[0]||null:l||null}function Xh(l){return[{icon:X4,label:l?.version||"v1.0.0"},{icon:Gi,label:l?.size||"APK hajmi noma'lum"},{icon:Ss,label:l?.platformLabel||"Android 8+ qo'llab-quvvatlanadi"}]}function Ih(){const[l,o]=T.useState(null),[c,d]=T.useState(!0),[m,x]=T.useState(""),[v,w]=T.useState(0);T.useEffect(()=>{let k=!0;async function S(){d(!0),x("");try{const q=await be.fetch("/mobile-app/");if(!k)return;const K=Ph(q);o(K),K||x("APK fayli hozircha topilmadi.")}catch(q){k&&(o(null),x(q.message||"APK ma'lumotlarini olishda xatolik yuz berdi."))}finally{k&&d(!1)}}return S(),()=>{k=!1}},[]),T.useEffect(()=>{const k=window.setInterval(()=>{w(S=>(S+1)%Vi.length)},4200);return()=>window.clearInterval(k)},[]);const j=T.useMemo(()=>Xh(l),[l]),N=()=>{l?.url&&window.open(l.url,"_blank","noopener,noreferrer")};return c&&!l?n.jsx(ot,{label:"Mobil ilova ma'lumotlari yuklanmoqda..."}):n.jsxs("div",{className:"mobile-apps-page",children:[n.jsx("div",{className:"mobile-apps-page__backdrop mobile-apps-page__backdrop--one"}),n.jsx("div",{className:"mobile-apps-page__backdrop mobile-apps-page__backdrop--two"}),n.jsxs("section",{className:"mobile-apps-hero",children:[n.jsxs("div",{className:"mobile-apps-hero__content",children:[n.jsxs("span",{className:"mobile-apps-hero__eyebrow",children:[n.jsx(Un,{size:16})," Google Play uslubidagi premium sahifa"]}),n.jsx("h1",{children:"EduPlatform Mobil Ilovasi"}),n.jsx("p",{children:"Endi talabalar telefon orqali istalgan joydan video darslarni ko'rishi, testlarni ishlashi, simulatsiyalarni ochishi va o'quv jarayonini qulay boshqarishi mumkin."}),n.jsx("div",{className:"mobile-apps-hero__badges",children:j.map(k=>{const S=k.icon;return n.jsxs("span",{className:"mobile-apps-hero__badge",children:[n.jsx(S,{size:16})," ",k.label]},k.label)})}),n.jsxs("div",{className:"mobile-apps-hero__actions",children:[n.jsxs("button",{type:"button",className:"mobile-apps-primary-button",onClick:N,disabled:!l?.url,children:[n.jsx(P4,{size:20})," APK Yuklab olish"]}),n.jsxs("div",{className:"mobile-apps-hero__caption",children:[n.jsx(Ss,{size:18})," Rasmiy Android APK fayl — to'g'ridan-to'g'ri Django serveridan."]})]}),m?n.jsx("div",{className:"mobile-apps-error-banner",children:m}):null]}),n.jsx("div",{className:"mobile-apps-hero__visual",children:n.jsxs("div",{className:"mobile-apps-phone-float",children:[n.jsx("div",{className:"mobile-apps-phone-float__glow"}),n.jsxs("div",{className:"mobile-apps-phone",children:[n.jsx("div",{className:"mobile-apps-phone__notch"}),n.jsxs("div",{className:"mobile-apps-phone__screen",children:[n.jsxs("div",{className:"mobile-apps-phone__status",children:[n.jsx("span",{children:"09:41"}),n.jsx("span",{children:"5G • 100%"})]}),n.jsxs("div",{className:"mobile-apps-phone__hero-card",children:[n.jsx("div",{className:"mobile-apps-phone__app-icon",children:"EP"}),n.jsxs("div",{children:[n.jsx("h3",{children:"EduPlatform"}),n.jsx("p",{children:"Mobil ta'lim markazi"})]})]}),n.jsxs("div",{className:"mobile-apps-phone__mini-grid",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"24+"}),n.jsx("span",{children:"Video dars"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"12"}),n.jsx("span",{children:"Test blok"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"8"}),n.jsx("span",{children:"Simulyatsiya"})]})]}),n.jsxs("div",{className:"mobile-apps-phone__lesson-card",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Bugungi dars"}),n.jsx("strong",{children:"Molekulyar fizika"})]}),n.jsx("button",{type:"button",children:"Boshlash"})]})]})]})]})})]}),n.jsxs("section",{className:"mobile-apps-grid-section",children:[n.jsx(Gh,{app:l,loading:c,onDownload:N}),n.jsxs("div",{className:"mobile-apps-quick-panel",children:[n.jsxs("div",{className:"mobile-apps-quick-panel__header",children:[n.jsx("span",{className:"mobile-apps-quick-panel__eyebrow",children:"Nega aynan mobil ilova?"}),n.jsx("h2",{children:"Talabalar uchun tez, qulay va zamonaviy tajriba"})]}),n.jsxs("div",{className:"mobile-apps-quick-panel__points",children:[n.jsxs("article",{children:[n.jsx(j1,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Offline rejim"}),n.jsx("p",{children:"Yuklab olingan materiallar va darslar bilan internet bo'lmaganda ham ishlash qulayligi."})]})]}),n.jsxs("article",{children:[n.jsx(Ss,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Telefon uchun moslashgan"}),n.jsx("p",{children:"Kichik ekranlar uchun mos navigatsiya, katta tugmalar va zamonaviy animatsiyalar."})]})]}),n.jsxs("article",{children:[n.jsx(X4,{size:18}),n.jsxs("div",{children:[n.jsx("strong",{children:"Rasmiy nashr"}),n.jsx("p",{children:"APK fayli bevosita backend orqali tarqatiladi va versiya ma'lumoti avtomatik yangilanadi."})]})]})]})]})]}),n.jsxs("section",{className:"mobile-apps-features",children:[n.jsxs("div",{className:"mobile-apps-section-head",children:[n.jsx("span",{children:"Asosiy imkoniyatlar"}),n.jsx("h2",{children:"Mobil ilova ichida o'quv jarayonining eng muhim qismlari"})]}),n.jsx("div",{className:"mobile-apps-features__grid",children:Wh.map(k=>n.jsxs("article",{className:`mobile-apps-feature-card mobile-apps-feature-card--${k.accent}`,children:[n.jsx("div",{className:"mobile-apps-feature-card__orb"}),n.jsx("h3",{children:k.title}),n.jsx("p",{children:k.description})]},k.title))})]}),n.jsxs("section",{className:"mobile-apps-showcase",children:[n.jsxs("div",{className:"mobile-apps-section-head",children:[n.jsx("span",{children:"Ilova ekranlari"}),n.jsx("h2",{children:"Premium mobil maketlar va sahifa ko'rinishlari"})]}),n.jsxs("div",{className:"mobile-apps-showcase__layout",children:[n.jsx("div",{className:"mobile-apps-showcase__track",children:Vi.map((k,S)=>n.jsxs("button",{type:"button",className:`mobile-apps-screen-card ${v===S?"is-active":""}`,onClick:()=>w(S),children:[n.jsxs("div",{className:"mobile-apps-screen-card__mockup",children:[n.jsx("div",{className:"mobile-apps-screen-card__topbar"}),n.jsxs("div",{className:"mobile-apps-screen-card__body",children:[n.jsx("div",{className:"mobile-apps-screen-card__line mobile-apps-screen-card__line--wide"}),n.jsx("div",{className:"mobile-apps-screen-card__line"}),n.jsx("div",{className:"mobile-apps-screen-card__chips",children:k.chips.map(q=>n.jsx("span",{children:q},q))}),n.jsx("div",{className:"mobile-apps-screen-card__panel"})]})]}),n.jsxs("div",{children:[n.jsx("strong",{children:k.title}),n.jsx("p",{children:k.caption})]})]},k.title))}),n.jsx("div",{className:"mobile-apps-showcase__spotlight",children:n.jsxs("div",{className:"mobile-apps-showcase__phone",children:[n.jsx("div",{className:"mobile-apps-showcase__phone-top"}),n.jsxs("div",{className:"mobile-apps-showcase__phone-body",children:[n.jsx("span",{className:"mobile-apps-showcase__label",children:"Faol ekran"}),n.jsx("h3",{children:Vi[v].title}),n.jsx("p",{children:Vi[v].caption}),n.jsx("div",{className:"mobile-apps-showcase__chips",children:Vi[v].chips.map(k=>n.jsx("span",{children:k},k))})]})]})})]})]}),n.jsxs("section",{className:"mobile-apps-bottom-grid",children:[n.jsxs("article",{className:"mobile-apps-qr-card",children:[n.jsxs("div",{className:"mobile-apps-qr-card__header",children:[n.jsxs("span",{children:[n.jsx(w1,{size:16})," QR orqali o'rnatish"]}),n.jsx("strong",{children:"Telefon bilan skaner qiling"})]}),n.jsxs("div",{className:"mobile-apps-qr-card__body",children:[n.jsx("div",{className:"mobile-apps-qr-grid","aria-hidden":"true",children:Zh.flatMap((k,S)=>k.map((q,K)=>n.jsx("span",{className:q?"is-filled":""},`${S}-${K}`)))}),n.jsxs("div",{className:"mobile-apps-qr-card__info",children:[n.jsx("p",{children:"APK havolasini tez ochish uchun QR ko'rinishidagi karta tayyorlandi."}),n.jsxs("button",{type:"button",onClick:N,className:"mobile-apps-secondary-button",disabled:!l?.url,children:[n.jsx(P4,{size:18})," Yuklab olish oynasini ochish"]})]})]})]}),n.jsxs("article",{className:"mobile-apps-status-card",children:[n.jsxs("div",{className:"mobile-apps-status-card__top",children:[n.jsx("span",{className:"mobile-apps-status-card__pill",children:"Jonli backend ma'lumoti"}),c?n.jsx(z1,{className:"mobile-apps-spin",size:18}):n.jsx(X4,{size:18})]}),n.jsx("h3",{children:l?.name||"APK fayl tekshirilmoqda"}),n.jsxs("p",{children:["Backend avtomatik ravishda ",n.jsx("strong",{children:"media/mobili/apk/"})," papkasini skaner qiladi va mavjud Android faylini ushbu sahifaga uzatadi."]}),n.jsxs("dl",{children:[n.jsxs("div",{children:[n.jsx("dt",{children:"Fayl nomi"}),n.jsx("dd",{children:l?.name||"Topilmadi"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Versiya"}),n.jsx("dd",{children:l?.version||"v1.0.0"})]}),n.jsxs("div",{children:[n.jsx("dt",{children:"Hajmi"}),n.jsx("dd",{children:l?.size||"—"})]})]})]})]})]})}const ep=[{value:"student",label:"Talaba"},{value:"teacher",label:"O'qituvchi"},{value:"guest",label:"Mehmon"}];function up(){const l=Cf(),{user:o,register:c,loading:d}=Uu(),[m,x]=T.useState({username:"",email:"",password:"",first_name:"",last_name:"",role:"student"}),[v,w]=T.useState(""),[j,N]=T.useState(!1);T.useEffect(()=>{!d&&o&&l(Ht(o.role),{replace:!0})},[d,l,o]);function k(q){const{name:K,value:A}=q.target;x(_=>({..._,[K]:A}))}async function S(q){q.preventDefault(),N(!0),w("");try{const K=await c(m);l(Ht(K.role),{replace:!0})}catch(K){w(K.message||"Ro'yxatdan o'tishda xatolik yuz berdi.")}finally{N(!1)}}return n.jsx("div",{className:"min-h-screen bg-slate-100 px-4 py-10 text-slate-900",children:n.jsxs("div",{className:"mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]",children:[n.jsxs("section",{className:"rounded-[2rem] border border-blue-100 bg-white p-8 shadow-xl shadow-blue-950/5 md:p-10",children:[n.jsx("div",{className:"inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25",children:n.jsx(Dn,{size:30})}),n.jsx("p",{className:"mt-6 text-sm font-black uppercase tracking-[0.24em] text-blue-600",children:"Hisob yaratish"}),n.jsx("h1",{className:"mt-4 text-4xl font-black tracking-tight",children:"Ta'lim platformasiga bir necha daqiqada qo'shiling."}),n.jsx("p",{className:"mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base",children:"Talaba, o'qituvchi yoki mehmon sifatida ro'yxatdan o'ting. Ro'yxatdan o'tgandan so'ng, tizim sizni avtomatik ravishda mos shaxsiy sahifaga yo'naltiradi."}),n.jsx("div",{className:"mt-8 space-y-4",children:["Talabalar o'z kurslari, sertifikatlari, videolari va test natijalarini kuzatadi.","O'qituvchilar kontent joylaydi, topshiriqlarni tekshiradi va statistika bilan ishlaydi.","Mehmonlar tizimga to'liq kirmasdan oldin umumiy imkoniyatlarni ko'rib chiqishi mumkin."].map(q=>n.jsx("div",{className:"rounded-3xl border border-blue-100 bg-blue-50/70 px-4 py-4 text-sm font-medium text-slate-700",children:q},q))})]}),n.jsxs("section",{className:"rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 md:p-10",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-black uppercase tracking-wide text-cyan-300",children:"Ro'yxatdan o'tish"}),n.jsx("h2",{className:"mt-2 text-3xl font-black tracking-tight",children:"O'quv profilingizni yarating"}),n.jsx("p",{className:"mt-3 text-sm leading-6 text-slate-300",children:"Quyidagi shaklni to'ldirib, platformadan foydalanishni boshlang."})]}),n.jsxs("form",{className:"mt-8 grid gap-4 md:grid-cols-2",onSubmit:S,children:[n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-100",children:[n.jsx("span",{children:"Ism"}),n.jsx("input",{name:"first_name",value:m.first_name,onChange:k,className:"w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10",required:!0})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-100",children:[n.jsx("span",{children:"Familiya"}),n.jsx("input",{name:"last_name",value:m.last_name,onChange:k,className:"w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10",required:!0})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-100",children:[n.jsx("span",{children:"Foydalanuvchi nomi"}),n.jsx("input",{name:"username",value:m.username,onChange:k,className:"w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10",required:!0})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-100",children:[n.jsx("span",{children:"Email"}),n.jsx("input",{type:"email",name:"email",value:m.email,onChange:k,className:"w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10",required:!0})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-100 md:col-span-2",children:[n.jsx("span",{children:"Parol"}),n.jsx("input",{type:"password",name:"password",value:m.password,onChange:k,minLength:8,className:"w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10",required:!0})]}),n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-100 md:col-span-2",children:[n.jsx("span",{children:"Rol"}),n.jsx("select",{name:"role",value:m.role,onChange:k,className:"w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white/10",children:ep.map(q=>n.jsx("option",{value:q.value,className:"text-slate-900",children:q.label},q.value))})]}),v&&n.jsx("p",{className:"rounded-2xl bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-200 md:col-span-2",children:v}),n.jsxs("button",{type:"submit",disabled:j,className:"inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2",children:[n.jsx(S1,{size:18}),j?"Hisob yaratilmoqda...":"Ro'yxatdan o'tish"]})]}),n.jsxs("p",{className:"mt-6 text-sm text-slate-300",children:["Akkauntingiz bormi? "," ",n.jsx(Ns,{to:"/login",className:"font-bold text-cyan-300 hover:text-cyan-200",children:"Kirish sahifasiga o'ting"})]})]})]})})}function jf(l,o,c){return Math.min(c,Math.max(o,l))}function ye({label:l,value:o,min:c,max:d,step:m=1,onChange:x,suffix:v="",accent:w="#2563eb"}){return n.jsxs("div",{className:"simulation-slider",style:{"--sim-accent":w},children:[n.jsxs("div",{className:"simulation-slider-head",children:[n.jsx("label",{children:l}),n.jsxs("span",{className:"simulation-slider-value",children:[o,v]})]}),n.jsx("input",{type:"range",min:c,max:d,step:m,value:o,onChange:j=>x(Number(j.target.value))}),n.jsxs("div",{className:"simulation-slider-meta",children:[c,v," — ",d,v]})]})}function Sa({items:l}){return n.jsx("div",{className:"formula-bar",children:l.map(o=>n.jsxs("div",{className:"formula-pill",children:[n.jsx("strong",{children:o.formula}),n.jsx("span",{children:o.label})]},o.label))})}function Ra({onReset:l,onToggle:o,running:c,startLabel:d="Boshlash",stopLabel:m="To'xtatish"}){return n.jsxs("div",{className:"simulation-actions",children:[o&&n.jsxs("button",{type:"button",className:"simulation-btn simulation-btn-primary",onClick:o,children:[c?n.jsx(R1,{size:16}):n.jsx(N1,{size:16})," ",c?m:d]}),n.jsxs("button",{type:"button",className:"simulation-btn simulation-btn-secondary",onClick:l,children:[n.jsx(Hf,{size:16})," Reset"]})]})}function ua({points:l,xLabel:o,yLabel:c,color:d="#2563eb"}){const w=l.length?l:[{x:0,y:0}],j=Math.max(...w.map(_=>_.x),1),N=Math.min(...w.map(_=>_.x),0),k=Math.max(...w.map(_=>_.y),1),S=Math.min(...w.map(_=>_.y),0),q=_=>28+(_-N)/(j-N||1)*304,K=_=>192-(_-S)/(k-S||1)*164,A=w.map((_,C)=>`${C===0?"M":"L"} ${q(_.x)} ${K(_.y)}`).join(" ");return n.jsxs("div",{className:"simulation-graph",children:[n.jsxs("svg",{viewBox:"0 0 360 220",className:"graph-svg",role:"img","aria-label":`${o} va ${c} grafigi`,children:[n.jsx("rect",{x:"0",y:"0",width:360,height:220,rx:"24",fill:"rgba(248,250,252,0.95)"}),n.jsx("line",{x1:28,y1:192,x2:360-28/2,y2:192,stroke:"rgba(148,163,184,0.4)",strokeWidth:"2"}),n.jsx("line",{x1:28,y1:28/2,x2:28,y2:192,stroke:"rgba(148,163,184,0.4)",strokeWidth:"2"}),n.jsx("path",{d:A,fill:"none",stroke:d,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),w.map((_,C)=>n.jsx("circle",{cx:q(_.x),cy:K(_.y),r:"4.5",fill:d},`${_.x}-${_.y}-${C}`))]}),n.jsxs("div",{className:"graph-labels",children:[n.jsx("span",{children:o}),n.jsx("span",{children:c})]})]})}function ap({title:l,note:o,widthPercent:c=82,moleculeCount:d=18,speed:m=1,accent:x="#2563eb",pressureLabel:v}){const w=Array.from({length:d},(j,N)=>({id:N,left:8+N*31%78,top:10+N*23%72,dx:`${N%6*6-12}px`,dy:`${(N+2)%5*7-14}px`,duration:`${Math.max(.45,2.8-m*.18+N%5*.08)}s`}));return n.jsxs("div",{className:"simulation-visual",style:{"--sim-accent":x},children:[n.jsx("p",{className:"simulation-card-title",children:l}),n.jsxs("div",{className:"gas-box",children:[n.jsxs("div",{className:"pressure-gauge",children:[n.jsx("strong",{children:v}),n.jsx("div",{className:"simulation-note",children:o})]}),n.jsx("div",{className:"gas-vessel",style:{"--gas-width":`${c}%`},children:w.map(j=>n.jsx("span",{className:"gas-molecule",style:{left:`${j.left}%`,top:`${j.top}%`,animationDuration:j.duration,"--dx":j.dx,"--dy":j.dy,"--sim-accent":x}},j.id))})]})]})}function tp({title:l,pistonTop:o,running:c,pressureLabel:d,accent:m="#f97316",children:x,showFlame:v=!1,flameScale:w=1}){return n.jsxs("div",{className:"simulation-visual",style:{"--sim-accent":m},children:[n.jsx("p",{className:"simulation-card-title",children:l}),n.jsxs("div",{className:"cylinder-box",children:[n.jsxs("div",{className:"pressure-gauge",children:[n.jsx("strong",{children:d}),n.jsx("div",{className:"simulation-note",children:c?"Animatsiya faol":"Animatsiya to'xtagan"})]}),n.jsx("div",{className:"piston",style:{"--piston-top":`${o}%`}}),n.jsx("div",{className:"gas-vessel",style:{"--gas-width":"56%",left:"22%",right:"22%"},children:x}),v&&n.jsx("div",{className:"flame",style:{"--flame-scale":w}})]})]})}function np(l,o=1,c="#2563eb"){return Array.from({length:l},(d,m)=>n.jsx("span",{className:"gas-molecule",style:{left:`${8+m*29%78}%`,top:`${14+m*17%68}%`,animationDuration:`${Math.max(.45,2.5-o*.15+m%4*.08)}s`,"--dx":`${m%7*5-12}px`,"--dy":`${(m+1)%6*6-15}px`,"--sim-accent":c}},m))}function Na({items:l}){return n.jsx("div",{className:"simulation-stats-grid",children:l.map(o=>n.jsxs("div",{className:"simulation-stat",children:[n.jsx("span",{children:o.label}),n.jsx("strong",{children:o.value})]},o.label))})}function Aa({children:l}){return n.jsxs("div",{className:"simulation-card",children:[n.jsxs("div",{className:"simulation-badge",children:[n.jsx(A1,{size:14})," Tushuntirish"]}),n.jsx("p",{className:"simulation-hint",style:{marginTop:"0.85rem"},children:l})]})}function ip(){const[l,o]=T.useState(.6),[c,d]=T.useState(.072),[m,x]=T.useState(1e3),[v,w]=T.useState(!0),j=T.useMemo(()=>Number((2*c/(l/1e3*m*9.8)).toFixed(3)),[m,l,c]),N=Math.min(85,15+j*150),k=T.useMemo(()=>Array.from({length:10},(q,K)=>{const A=.2+K*.2;return{x:A,y:Number((2*c/(A/1e3*m*9.8)).toFixed(3))}}),[m,c]),S=()=>{o(.6),d(.072),x(1e3),w(!0)};return n.jsxs("div",{className:"simulation-shell capillary-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Kapillyarlik"}),n.jsx("h2",{children:"Kapillyar naychadagi suyuqlik ko'tarilishi"}),n.jsx("p",{children:"Kapillyar radiusi kichiklashgan sari suyuqlik balandroq ko'tariladi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"h = 2σ / ρgr",label:"Jurin formulasi"},{formula:`h = ${j} m`,label:"Ko'tarilish balandligi"}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Kapillyar tasviri"}),n.jsxs("div",{style:{height:"320px",display:"grid",placeItems:"end center",background:"linear-gradient(180deg,#eff6ff,#dbeafe)",borderRadius:"1.5rem",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"36%",background:"linear-gradient(180deg,#67e8f9,#0ea5e9)"}}),n.jsx("div",{style:{position:"relative",width:`${20+l*14}px`,height:"260px",border:"4px solid #0f172a",borderRadius:"999px",background:"rgba(255,255,255,0.6)"},children:n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:`${N}%`,background:"linear-gradient(180deg,#38bdf8,#0ea5e9)",borderRadius:"999px 999px 28px 28px"}})})]}),n.jsx(Na,{items:[{label:"Radius",value:`${l} mm`},{label:"σ",value:`${c} N/m`},{label:"ρ",value:`${m} kg/m³`},{label:"h",value:`${j} m`}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"O'zgaruvchilar"}),n.jsx(ye,{label:"Kapillyar radiusi",value:l,min:.2,max:2,step:.1,suffix:" mm",onChange:o,accent:"#14b8a6"}),n.jsx(ye,{label:"Sirt tarangligi",value:c,min:.02,max:.1,step:.001,suffix:" N/m",onChange:d,accent:"#0ea5e9"}),n.jsx(ye,{label:"Zichlik",value:m,min:600,max:1400,step:10,suffix:" kg/m³",onChange:x,accent:"#0f766e"}),n.jsx(Ra,{onReset:S,onToggle:()=>w(q=>!q),running:v})]})]}),n.jsx(ua,{points:k,xLabel:"r (mm)",yLabel:"h (m)",color:"#14b8a6"}),n.jsx(Aa,{children:"Kapillyarda ko'tarilish sirt tarangligi va adgeziya kuchlari bilan bog'liq. Radius kichik bo'lgani sari meniskning egriligi ortadi va suyuqlik yuqoriga ko'tariladi."})]})]})}function lp(){const[l,o]=T.useState(35),[c,d]=T.useState(1.2),[m,x]=T.useState(45),[v,w]=T.useState(!0),j=T.useMemo(()=>Number((l/50*c*(1-m/100)*10).toFixed(2)),[m,c,l]),N=T.useMemo(()=>Number((m/100*Math.max(0,30-l)/30).toFixed(2)),[m,l]),k=T.useMemo(()=>Array.from({length:10},(q,K)=>({x:K,y:Number(((10+K*4)/50*c*(1-m/100)*10).toFixed(2))})),[m,c]),S=()=>{o(35),d(1.2),x(45),w(!0)};return n.jsxs("div",{className:"simulation-shell evaporation-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Bug'lanish"}),n.jsx("h2",{children:"Bug'lanish va kondensatsiya"}),n.jsx("p",{children:"Temperatura va namlik o'zgargan sari suyuqlikdan bug'ga va bug'dan suyuqlikka o'tish tezligi almashinadi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"v ~ T·S·(1-H)",label:"Bug'lanish tendensiyasi"},{formula:`v = ${j}`,label:`k = ${N}`}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Faza almashinuvi muhiti"}),n.jsxs("div",{style:{height:"310px",position:"relative",overflow:"hidden",borderRadius:"1.5rem",background:"linear-gradient(180deg,#ddd6fe,#bfdbfe 45%,#93c5fd 45%,#60a5fa)"},children:[n.jsx("div",{style:{position:"absolute",left:"10%",right:"10%",bottom:"8%",height:"20%",borderRadius:"1.25rem",background:"linear-gradient(180deg,#38bdf8,#2563eb)"}}),Array.from({length:12},(q,K)=>n.jsx("span",{style:{position:"absolute",bottom:`${30+K%3*8}%`,left:`${12+K*6}%`,width:"14px",height:"14px",borderRadius:"999px",background:"rgba(255,255,255,0.75)",filter:"blur(1px)",transform:`translateY(${v?-(K%4)*14:0}px)`}},K))]}),n.jsx(Na,{items:[{label:"Bug'lanish",value:j},{label:"Kondensatsiya",value:N},{label:"Namlik",value:`${m} %`},{label:"Yuza",value:`${c} m²`}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Muhit parametrlari"}),n.jsx(ye,{label:"Temperatura",value:l,min:0,max:60,step:1,suffix:" °C",onChange:o,accent:"#8b5cf6"}),n.jsx(ye,{label:"Sirt maydoni",value:c,min:.2,max:3,step:.1,suffix:" m²",onChange:d,accent:"#2563eb"}),n.jsx(ye,{label:"Nisbiy namlik",value:m,min:5,max:100,step:1,suffix:" %",onChange:x,accent:"#0ea5e9"}),n.jsx(Ra,{onReset:S,onToggle:()=>w(q=>!q),running:v})]})]}),n.jsx(ua,{points:k,xLabel:"T bosqich",yLabel:"Bug'lanish",color:"#8b5cf6"}),n.jsx(Aa,{children:"Quruq va issiq havoda bug'lanish kuchayadi. Nam va sovuq muhitda esa kondensatsiya kuchayib, bug' tomchilarga aylanadi."})]})]})}const Ki={isotermik:{label:"Izotermik jarayon",formula:"T = const"},izobarik:{label:"Izobarik jarayon",formula:"P = const"},izoxorik:{label:"Izoxorik jarayon",formula:"V = const"}};function sp(){const[l,o]=T.useState("isotermik"),[c,d]=T.useState(18),[m,x]=T.useState(2.2),[v,w]=T.useState(310),[j,N]=T.useState(!0),k=T.useMemo(()=>({pressure:2.2,volume:18,temperature:310}),[]),S=ee=>{l!=="izoxorik"&&(d(ee),l==="isotermik"&&x(Number((k.pressure*k.volume/ee).toFixed(2))),l==="izobarik"&&w(Math.round(ee/k.volume*k.temperature)))},q=ee=>{l!=="izobarik"&&(x(ee),l==="isotermik"&&d(Number((k.pressure*k.volume/ee).toFixed(1))),l==="izoxorik"&&w(Math.round(ee/k.pressure*k.temperature)))},K=ee=>{l!=="isotermik"&&(w(ee),l==="izobarik"&&d(Number((ee/k.temperature*k.volume).toFixed(1))),l==="izoxorik"&&x(Number((ee/k.temperature*k.pressure).toFixed(2))))},A=T.useMemo(()=>Array.from({length:10},(ee,ne)=>{const ue=8+ne*2.4,me=l==="izobarik"?m:m*c/ue;return{x:ue,y:Number(me.toFixed(2))}}),[l,m,c]),_=T.useMemo(()=>Array.from({length:10},(ee,ne)=>{const ue=8+ne*2.4,me=l==="izotermik"?v:v/c*ue;return{x:ue,y:Number(me.toFixed(2))}}),[l,v,c]),C=Math.max(20,72-c*1.8),Z=()=>{o("isotermik"),d(18),x(2.2),w(310),N(!0)};return n.jsxs("div",{className:"simulation-shell gas-process-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"GasProcessesSimulation"}),n.jsx("h2",{children:"Gaz termodinamik jarayonlari simulyatori"}),n.jsx("p",{children:"Izotermik, izobarik va izoxorik jarayonlarni solishtiring. Bir parametr o'zgarmas bo'lib qoladi, qolganlari esa jonli ravishda yangilanadi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx("div",{className:"simulation-mode-row",children:Object.entries(Ki).map(([ee,ne])=>n.jsx("button",{type:"button",className:`simulation-mode-btn ${l===ee?"is-active":""}`,onClick:()=>o(ee),children:ne.label},ee))}),n.jsx(Sa,{items:[{formula:Ki[l].formula,label:Ki[l].label},{formula:`P=${m} atm`,label:`V=${c} L • T=${v} K`}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsx("div",{className:"simulation-card",children:n.jsx(tp,{title:"Porshenli silindr",pistonTop:C,running:j,pressureLabel:`${Ki[l].label}`,accent:"#7c3aed",children:np(20,j?v/120:.2,"#7c3aed")})}),n.jsxs("div",{className:"simulation-controls gas-process-theme",children:[n.jsx("p",{className:"simulation-card-title",children:"Jarayon boshqaruvi"}),n.jsx(ye,{label:"Hajm",value:c,min:8,max:28,step:.5,suffix:" L",onChange:S}),n.jsx(ye,{label:"Bosim",value:m,min:.8,max:4.8,step:.1,suffix:" atm",onChange:q}),n.jsx(ye,{label:"Temperatura",value:v,min:220,max:520,step:5,suffix:" K",onChange:K}),n.jsx(Na,{items:[{label:"Rejim",value:Ki[l].label},{label:"P",value:`${m} atm`},{label:"V",value:`${c} L`},{label:"T",value:`${v} K`}]}),n.jsx(Ra,{onReset:Z,onToggle:()=>N(ee=>!ee),running:j})]})]}),n.jsxs("div",{className:"simulation-grid-2",children:[n.jsx(ua,{points:A,xLabel:"V (L)",yLabel:"P (atm)",color:"#7c3aed"}),n.jsx(ua,{points:_,xLabel:"V (L)",yLabel:"T (K)",color:"#f97316"})]}),n.jsx(Aa,{children:"Izotermik jarayonda temperatura o'zgarmaydi. Izobarikda bosim, izoxorikda esa hajm doimiy qoladi. Shu sababli grafiklarning shakli turlicha ko'rinadi."})]})]})}function rp(){const[l,o]=T.useState(600),[c,d]=T.useState(300),[m,x]=T.useState(1200),[v,w]=T.useState(!0),j=T.useMemo(()=>Number((1-c/l).toFixed(3)),[c,l]),N=T.useMemo(()=>Number((m*j).toFixed(1)),[j,m]),k=T.useMemo(()=>Number((m-N).toFixed(1)),[m,N]),S=T.useMemo(()=>[{x:1,y:l},{x:2,y:l*.85},{x:3,y:c*1.1},{x:4,y:c}],[c,l]),q=()=>{o(600),d(300),x(1200),w(!0)};return n.jsxs("div",{className:"simulation-shell heat-engine-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Issiqlik mashinasi"}),n.jsx("h2",{children:"Karnot dvigateli samaradorligi"}),n.jsx("p",{children:"Issiq manbadan olingan energiyaning qanchasi foydali ishga aylanishini kuzating."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"η = 1 - T₂/T₁",label:"Karnot formulasi"},{formula:`η = ${(j*100).toFixed(1)}%`,label:`A = ${N} J`}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Energiya oqimi"}),n.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[n.jsxs("div",{style:{padding:"1rem",borderRadius:"1rem",background:"linear-gradient(90deg,#f97316,#f59e0b)",color:"white"},children:["Issiq manba: ",m," J"]}),n.jsxs("div",{style:{padding:"1rem",borderRadius:"1rem",background:"linear-gradient(90deg,#22c55e,#16a34a)",color:"white",width:`${Math.max(25,j*100)}%`},children:["Foydali ish: ",N," J"]}),n.jsxs("div",{style:{padding:"1rem",borderRadius:"1rem",background:"linear-gradient(90deg,#60a5fa,#2563eb)",color:"white",width:`${Math.max(25,k/m*100)}%`},children:["Sovuq manbaga ketgan: ",k," J"]})]}),n.jsx(Na,{items:[{label:"T₁",value:`${l} K`},{label:"T₂",value:`${c} K`},{label:"Samaradorlik",value:`${(j*100).toFixed(1)} %`},{label:"Ish",value:`${N} J`}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Dvigatel parametrlari"}),n.jsx(ye,{label:"Issiq manba temperaturasi",value:l,min:350,max:900,step:10,suffix:" K",onChange:o,accent:"#f97316"}),n.jsx(ye,{label:"Sovuq manba temperaturasi",value:c,min:120,max:500,step:10,suffix:" K",onChange:d,accent:"#2563eb"}),n.jsx(ye,{label:"Berilgan issiqlik",value:m,min:400,max:2200,step:20,suffix:" J",onChange:x,accent:"#16a34a"}),n.jsx(Ra,{onReset:q,onToggle:()=>w(K=>!K),running:v})]})]}),n.jsx(ua,{points:S,xLabel:"Sikl bosqichi",yLabel:"T (K)",color:"#f59e0b"}),n.jsx(Aa,{children:"Issiqlik mashinasining nazariy maksimal samaradorligi issiq va sovuq manba temperaturalari farqiga bog'liq. Sovuq manba qancha past bo'lsa, samaradorlik shuncha yuqori bo'ladi."})]})]})}function op(){const[l,o]=T.useState(2.5),[c,d]=T.useState(1.8),[m,x]=T.useState(80),[v,w]=T.useState(20),[j,N]=T.useState(!0),k=T.useMemo(()=>Number(((l*m+c*v)/(l+c)).toFixed(1)),[c,l,v,m]),S=T.useMemo(()=>Number((l*(m-k)*4200).toFixed(0)),[k,l,m]),q=T.useMemo(()=>Number((c*(k-v)*4200).toFixed(0)),[k,c,v]),K=T.useMemo(()=>Array.from({length:8},(C,Z)=>({x:Z,y:Number((m-(m-k)/7*Z).toFixed(1))})),[k,m]),A=T.useMemo(()=>Array.from({length:8},(C,Z)=>({x:Z,y:Number((v+(k-v)/7*Z).toFixed(1))})),[k,v]),_=()=>{o(2.5),d(1.8),x(80),w(20),N(!0)};return n.jsxs("div",{className:"simulation-shell heat-equilibrium-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Issiqlik muvozanati"}),n.jsx("h2",{children:"Ikki jism orasidagi issiqlik almashinuvi"}),n.jsx("p",{children:"Qizigan va sovuq jismlar o'zaro issiqlik almashib, bitta umumiy muvozanat temperaturasiga keladi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"Qyo'qotilgan = Qolingan",label:"Muvozanat sharti"},{formula:`Tₘ = ${k} °C`,label:"Yakuniy temperatura"}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Aralashish sxemasi"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"end",gap:"1rem"},children:[n.jsx("div",{style:{padding:"1rem",borderRadius:"1.25rem",background:"linear-gradient(180deg,#fb7185,#ef4444)",color:"white",minHeight:`${120+l*18}px`},children:"Issiq jism"}),n.jsx("div",{style:{fontSize:"2rem",fontWeight:900,color:"#0f172a"},children:"⇄"}),n.jsx("div",{style:{padding:"1rem",borderRadius:"1.25rem",background:"linear-gradient(180deg,#38bdf8,#0ea5e9)",color:"white",minHeight:`${120+c*18}px`},children:"Sovuq jism"})]}),n.jsx(Na,{items:[{label:"Issiq jism issiqligi",value:`${S} J`},{label:"Sovuq jism olgan issiqlik",value:`${q} J`},{label:"Yakuniy T",value:`${k} °C`}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Qiymatlar"}),n.jsx(ye,{label:"Issiq jism massasi",value:l,min:.5,max:5,step:.1,suffix:" kg",onChange:o,accent:"#ef4444"}),n.jsx(ye,{label:"Sovuq jism massasi",value:c,min:.5,max:5,step:.1,suffix:" kg",onChange:d,accent:"#0ea5e9"}),n.jsx(ye,{label:"Issiq temperatura",value:m,min:40,max:100,step:1,suffix:" °C",onChange:x,accent:"#ef4444"}),n.jsx(ye,{label:"Sovuq temperatura",value:v,min:0,max:40,step:1,suffix:" °C",onChange:w,accent:"#0ea5e9"}),n.jsx(Ra,{onReset:_,onToggle:()=>N(C=>!C),running:j})]})]}),n.jsxs("div",{className:"simulation-grid-2",children:[n.jsx(ua,{points:K,xLabel:"Vaqt",yLabel:"Issiq T",color:"#ef4444"}),n.jsx(ua,{points:A,xLabel:"Vaqt",yLabel:"Sovuq T",color:"#0ea5e9"})]}),n.jsx(Aa,{children:"Agar tashqi muhitga issiqlik yo'qotilishi hisobga olinmasa, issiq jism yo'qotgan energiya sovuq jism olgan energiyaga teng bo'ladi."})]})]})}const wf=.082;function cp(){const[l,o]=T.useState(2.4),[c,d]=T.useState(22),[m,x]=T.useState(320),[v,w]=T.useState(1.2),[j,N]=T.useState(!0),k=T.useMemo(()=>Number((v*wf*m/c).toFixed(2)),[v,m,c]),S=Number((l-k).toFixed(2)),q=jf(Math.round(v*14),10,32),K=T.useMemo(()=>Array.from({length:12},(_,C)=>{const Z=8+C*3;return{x:Z,y:Number((v*wf*m/Z).toFixed(2))}}),[v,m]),A=()=>{o(2.4),d(22),x(320),w(1.2),N(!0)};return n.jsxs("div",{className:"simulation-shell ideal-gas-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Ideal Gas Law Simulation"}),n.jsx("h2",{children:"Ideal gaz qonuni laboratoriyasi"}),n.jsx("p",{children:"PV = nRT formulasi asosida bosim, hajm, temperatura va modda miqdori o'rtasidagi bog'lanishni virtual tajriba orqali kuzating."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"PV = nRT",label:"Asosiy formula"},{formula:`P = ${k.toFixed(2)} atm`,label:"Hisoblangan bosim"}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsx("div",{className:"simulation-card",children:n.jsx(ap,{title:"Gaz molekulalari",note:"Temperatura oshsa molekulalar tezroq harakatlanadi",widthPercent:jf(45+c*2,48,92),moleculeCount:q,speed:j?m/110:0,pressureLabel:`Bosim ko'rsatkichi: ${l.toFixed(1)} atm`})}),n.jsxs("div",{className:"simulation-controls ideal-gas-theme",children:[n.jsx("p",{className:"simulation-card-title",children:"Parametrlarni boshqarish"}),n.jsxs("div",{className:"simulation-grid-2",children:[n.jsx(ye,{label:"Bosim",value:l,min:.5,max:6,step:.1,suffix:" atm",onChange:o}),n.jsx(ye,{label:"Hajm",value:c,min:8,max:36,step:1,suffix:" L",onChange:d}),n.jsx(ye,{label:"Temperatura",value:m,min:220,max:600,step:5,suffix:" K",onChange:x}),n.jsx(ye,{label:"Mole miqdori",value:v,min:.4,max:2.5,step:.1,suffix:" mol",onChange:w})]}),n.jsx(Na,{items:[{label:"Hisoblangan P",value:`${k} atm`},{label:"Kiritilgan P",value:`${l.toFixed(1)} atm`},{label:"Farq",value:`${S>0?"+":""}${S} atm`},{label:"Molekulalar",value:q}]}),n.jsx(Ra,{onReset:A,onToggle:()=>N(_=>!_),running:j,startLabel:"Animatsiyani boshlash",stopLabel:"Animatsiyani to'xtatish"})]})]}),n.jsxs("div",{className:"simulation-grid-2",children:[n.jsx(ua,{points:K,xLabel:"V (L)",yLabel:"P (atm)",color:"#2563eb"}),n.jsx(Aa,{children:"Temperatura oshishi bilan gaz molekulalari tezroq harakat qiladi. Hajm kichrayganda idish devorlariga urilishlar ko'payib, bosim oshadi."})]})]})]})}function dp(){const[l,o]=T.useState(20),[c,d]=T.useState(45),[m,x]=T.useState(8),[v,w]=T.useState(!0),j=T.useMemo(()=>Number((l*c/(c-l)).toFixed(1)),[l,c]),N=T.useMemo(()=>Number((j/c).toFixed(2)),[j,c]),k=T.useMemo(()=>Number((m*N).toFixed(1)),[N,m]),S=T.useMemo(()=>Array.from({length:8},(K,A)=>{const _=25+A*10;return{x:_,y:Number((l*_/(_-l)).toFixed(1))}}),[l]),q=()=>{o(20),d(45),x(8),w(!0)};return n.jsxs("div",{className:"simulation-shell lens-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Linza"}),n.jsx("h2",{children:"Yupqa linza tasvir yasashi"}),n.jsx("p",{children:"Jism masofasi o'zgarsa, tasvir masofasi va kattalashishi ham o'zgaradi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"1/f = 1/d + 1/f'",label:"Yupqa linza formulasi"},{formula:`M = ${N}`,label:`h' = ${k} sm`}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Optik sxema"}),n.jsxs("svg",{viewBox:"0 0 520 280",style:{width:"100%",borderRadius:"1.5rem",background:"linear-gradient(180deg,#f0fdf4,#dcfce7)"},children:[n.jsx("line",{x1:"20",y1:"140",x2:"500",y2:"140",stroke:"#0f172a",strokeWidth:"2"}),n.jsx("ellipse",{cx:"260",cy:"140",rx:"22",ry:"95",fill:"rgba(34,197,94,0.18)",stroke:"#22c55e",strokeWidth:"4"}),n.jsx("line",{x1:260-c*4,y1:"140",x2:260-c*4,y2:140-m*10,stroke:"#f97316",strokeWidth:"5"}),n.jsx("line",{x1:260+j*3,y1:"140",x2:260+j*3,y2:140+k*10,stroke:"#2563eb",strokeWidth:"5"}),n.jsx("circle",{cx:260-l*4,cy:"140",r:"5",fill:"#0f172a"}),n.jsx("circle",{cx:260+l*4,cy:"140",r:"5",fill:"#0f172a"})]}),n.jsx(Na,{items:[{label:"f",value:`${l} sm`},{label:"d",value:`${c} sm`},{label:"d'",value:`${j} sm`},{label:"M",value:N}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Optik parametrlar"}),n.jsx(ye,{label:"Fokus masofasi",value:l,min:5,max:30,step:1,suffix:" sm",onChange:o,accent:"#22c55e"}),n.jsx(ye,{label:"Jism masofasi",value:c,min:25,max:80,step:1,suffix:" sm",onChange:d,accent:"#f97316"}),n.jsx(ye,{label:"Jism balandligi",value:m,min:2,max:15,step:.5,suffix:" sm",onChange:x,accent:"#2563eb"}),n.jsx(Ra,{onReset:q,onToggle:()=>w(K=>!K),running:v})]})]}),n.jsx(ua,{points:S,xLabel:"d",yLabel:"d'",color:"#22c55e"}),n.jsx(Aa,{children:"Jism fokusdan tashqarida joylashganda haqiqiy tasvir hosil bo'ladi. Tasvir masofasi fokusga va jismning linzadan qancha uzoqligiga bog'liq."})]})]})}function fp(){const[l,o]=T.useState(2),[c,d]=T.useState(28e4),[m,x]=T.useState(0),[v,w]=T.useState(!0),j=334e3,N=T.useMemo(()=>Math.max(0,Math.min(1,c/(l*j))),[c,j,l]),k=N>=1?"To'liq suyuq":N<=0?"To'liq muz":"Aralash faza",S=T.useMemo(()=>[{x:0,y:-10},{x:1,y:0},{x:2,y:0},{x:3,y:15}],[]),q=()=>{o(2),d(28e4),x(0),w(!0)};return n.jsxs("div",{className:"simulation-shell melting-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Erish va qotish"}),n.jsx("h2",{children:"Faza almashinuvi simulyatori"}),n.jsx("p",{children:"Muz erishi vaqtida temperatura o'zgarmasdan qoladi, ammo modda ichki energiya yig'adi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"Q = λm",label:"Erish issiqligi"},{formula:`${(N*100).toFixed(1)}%`,label:k}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Faza ko'rinishi"}),n.jsx("div",{style:{height:"300px",borderRadius:"1.5rem",background:"linear-gradient(180deg,#eff6ff,#bfdbfe)",position:"relative",overflow:"hidden"},children:n.jsxs("div",{style:{position:"absolute",inset:"auto 10% 8% 10%",height:"54%",borderRadius:"1.5rem",background:"rgba(255,255,255,0.55)",border:"2px solid rgba(59,130,246,0.25)"},children:[n.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:`${N*100}%`,background:"linear-gradient(180deg,#38bdf8,#2563eb)"}}),n.jsx("div",{style:{position:"absolute",left:0,right:0,top:0,height:`${(1-N)*100}%`,background:"repeating-linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9) 10px, rgba(191,219,254,0.95) 10px, rgba(191,219,254,0.95) 20px)"}})]})}),n.jsx(Na,{items:[{label:"Massa",value:`${l} kg`},{label:"Berilgan Q",value:`${c} J`},{label:"Temperatura",value:`${m} °C`},{label:"Holat",value:k}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Parametrlar"}),n.jsx(ye,{label:"Massa",value:l,min:.5,max:5,step:.1,suffix:" kg",onChange:o,accent:"#3b82f6"}),n.jsx(ye,{label:"Berilgan issiqlik",value:c,min:0,max:8e5,step:1e4,suffix:" J",onChange:d,accent:"#f97316"}),n.jsx(ye,{label:"Boshlang'ich temperatura",value:m,min:-20,max:20,step:1,suffix:" °C",onChange:x,accent:"#6366f1"}),n.jsx(Ra,{onReset:q,onToggle:()=>w(K=>!K),running:v})]})]}),n.jsx(ua,{points:S,xLabel:"Jarayon",yLabel:"T (°C)",color:"#3b82f6"}),n.jsx(Aa,{children:"Erish nuqtasida temperatura vaqtincha o'zgarmaydi. Chunki berilgan energiya kristall panjarani buzishga sarflanadi."})]})]})}function mp(){const[l,o]=T.useState(40),[c,d]=T.useState(1),[m,x]=T.useState(1.5),[v,w]=T.useState(!0),j=l,N=T.useMemo(()=>{const q=c/m*Math.sin(l*Math.PI/180),K=Math.max(-1,Math.min(1,q));return Number((Math.asin(K)*180/Math.PI).toFixed(1))},[l,c,m]),k=T.useMemo(()=>Array.from({length:10},(q,K)=>{const A=5+K*8,_=c/m*Math.sin(A*Math.PI/180),C=Math.max(-1,Math.min(1,_));return{x:A,y:Number((Math.asin(C)*180/Math.PI).toFixed(1))}}),[c,m]),S=()=>{o(40),d(1),x(1.5),w(!0)};return n.jsxs("div",{className:"simulation-shell reflection-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Optika"}),n.jsx("h2",{children:"Qaytish va sinish"}),n.jsx("p",{children:"Nur ikki muhit chegarasiga tushganda bir qismi qaytadi, bir qismi esa Snell qonuniga ko'ra sinadi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"n₁sinα = n₂sinβ",label:"Snell qonuni"},{formula:`β = ${N}°`,label:`α' = ${j}°`}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Nur diagrammasi"}),n.jsxs("svg",{viewBox:"0 0 420 300",style:{width:"100%",borderRadius:"1.5rem",background:"linear-gradient(180deg,#ecfeff 0%,#cffafe 50%,#dbeafe 50%,#bfdbfe 100%)"},children:[n.jsx("line",{x1:"210",y1:"0",x2:"210",y2:"300",stroke:"#0f172a",strokeDasharray:"8 6",strokeWidth:"2"}),n.jsx("line",{x1:"0",y1:"150",x2:"420",y2:"150",stroke:"#94a3b8",strokeWidth:"2"}),n.jsx("line",{x1:"210",y1:"150",x2:210-Math.sin(l*Math.PI/180)*120,y2:150-Math.cos(l*Math.PI/180)*120,stroke:"#f97316",strokeWidth:"5",strokeLinecap:"round"}),n.jsx("line",{x1:"210",y1:"150",x2:210+Math.sin(j*Math.PI/180)*120,y2:150-Math.cos(j*Math.PI/180)*120,stroke:"#22c55e",strokeWidth:"5",strokeLinecap:"round"}),n.jsx("line",{x1:"210",y1:"150",x2:210+Math.sin(N*Math.PI/180)*120,y2:150+Math.cos(N*Math.PI/180)*120,stroke:"#2563eb",strokeWidth:"5",strokeLinecap:"round"})]}),n.jsx(Na,{items:[{label:"Tushish burchagi",value:`${l}°`},{label:"Qaytish burchagi",value:`${j}°`},{label:"Sinish burchagi",value:`${N}°`}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Optik muhitlar"}),n.jsx(ye,{label:"Tushish burchagi",value:l,min:5,max:80,step:1,suffix:" °",onChange:o,accent:"#f97316"}),n.jsx(ye,{label:"1-muhit sindirish ko'rsatkichi",value:c,min:1,max:2,step:.01,onChange:d,accent:"#06b6d4"}),n.jsx(ye,{label:"2-muhit sindirish ko'rsatkichi",value:m,min:1,max:2.5,step:.01,onChange:x,accent:"#2563eb"}),n.jsx(Ra,{onReset:S,onToggle:()=>w(q=>!q),running:v})]})]}),n.jsx(ua,{points:k,xLabel:"α",yLabel:"β",color:"#06b6d4"}),n.jsx(Aa,{children:"Zichroq muhitga kirgan nur normalga yaqinlashadi, siyrak muhitga o'tganda esa normaldan uzoqlashadi."})]})]})}function bp(){const[l,o]=T.useState(.072),[c,d]=T.useState(.18),[m,x]=T.useState(25),[v,w]=T.useState(!0),j=T.useMemo(()=>Number((l*(1-(m-25)*.003)).toFixed(4)),[l,m]),N=T.useMemo(()=>Number((2*j*c).toFixed(4)),[j,c]),k=T.useMemo(()=>Array.from({length:10},(q,K)=>{const A=5+K*8;return{x:A,y:Number((l*(1-(A-25)*.003)).toFixed(4))}}),[l]),S=()=>{o(.072),d(.18),x(25),w(!0)};return n.jsxs("div",{className:"simulation-shell surface-tension-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"Sirt tarangligi"}),n.jsx("h2",{children:"Suyuqlik pardasining taranglik kuchi"}),n.jsx("p",{children:"Sirt molekulalari ichkariga tortiladi va parda cho'zilgan ipga o'xshash kuch hosil qiladi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"F = 2σl",label:"Parda formulasi"},{formula:`F = ${N} N`,label:"Taranglik kuchi"}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Sovun pardasi modeli"}),n.jsxs("div",{style:{height:"300px",borderRadius:"1.5rem",background:"radial-gradient(circle at 50% 20%, rgba(255,255,255,0.9), rgba(244,114,182,0.18), rgba(59,130,246,0.18))",border:"3px solid rgba(236,72,153,0.25)",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",left:"14%",right:"14%",top:"10%",bottom:"10%",borderRadius:"999px",border:"4px solid rgba(15,23,42,0.8)"}}),n.jsx("div",{style:{position:"absolute",left:"18%",right:"18%",top:`${46-N*2200}%`,height:"10px",borderRadius:"999px",background:"linear-gradient(90deg,#ec4899,#8b5cf6)"}})]}),n.jsx(Na,{items:[{label:"σ",value:`${j} N/m`},{label:"l",value:`${c} m`},{label:"T",value:`${m} °C`},{label:"F",value:`${N} N`}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Parametrlar"}),n.jsx(ye,{label:"Boshlang'ich σ",value:l,min:.02,max:.1,step:.001,suffix:" N/m",onChange:o,accent:"#ec4899"}),n.jsx(ye,{label:"Parda uzunligi",value:c,min:.05,max:.4,step:.01,suffix:" m",onChange:d,accent:"#8b5cf6"}),n.jsx(ye,{label:"Temperatura",value:m,min:0,max:80,step:1,suffix:" °C",onChange:x,accent:"#f97316"}),n.jsx(Ra,{onReset:S,onToggle:()=>w(q=>!q),running:v})]})]}),n.jsx(ua,{points:k,xLabel:"T (°C)",yLabel:"σ (N/m)",color:"#ec4899"}),n.jsx(Aa,{children:"Temperatura oshgan sari molekulalararo bog'lanish biroz susayadi va sirt tarangligi kamayadi. Shu sababli tomchilar shakli ham o'zgaradi."})]})]})}function hp(){const[l,o]=T.useState(480),[c,d]=T.useState(180),[m,x]=T.useState(300),[v,w]=T.useState(!0),j=T.useMemo(()=>Number((l-c).toFixed(1)),[l,c]),N=T.useMemo(()=>[{x:1,y:l},{x:2,y:c},{x:3,y:j},{x:4,y:m+j}],[j,l,m,c]),k=()=>{o(480),d(180),x(300),w(!0)};return n.jsxs("div",{className:"simulation-shell thermo-law-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"1-qonun"}),n.jsx("h2",{children:"Termodinamikaning birinchi qonuni"}),n.jsx("p",{children:"Issiqlik, ish va ichki energiya o'rtasidagi bog'lanishni kuzating: $Q = \\Delta U + A$."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"Q = ΔU + A",label:"Asosiy tenglama"},{formula:`ΔU = ${j}`,label:"Hisoblangan ichki energiya o'zgarishi"}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Energiya almashinuvi"}),n.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[n.jsx("div",{style:{height:"18px",width:`${Math.min(100,l/6)}%`,borderRadius:"999px",background:"linear-gradient(90deg, #fb7185, #ef4444)"}}),n.jsx("div",{style:{height:"18px",width:`${Math.min(100,c/6)}%`,borderRadius:"999px",background:"linear-gradient(90deg, #f59e0b, #f97316)"}}),n.jsx("div",{style:{height:"18px",width:`${Math.min(100,Math.abs(j)/6)}%`,borderRadius:"999px",background:"linear-gradient(90deg, #60a5fa, #2563eb)"}})]}),n.jsx(Na,{items:[{label:"Issiqlik Q",value:`${l} J`},{label:"Ish A",value:`${c} J`},{label:"ΔU",value:`${j} J`},{label:"Yakuniy U",value:`${m+j} J`}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Parametrlar"}),n.jsx(ye,{label:"Berilgan issiqlik",value:l,min:100,max:900,step:10,suffix:" J",onChange:o,accent:"#ef4444"}),n.jsx(ye,{label:"Bajarilgan ish",value:c,min:0,max:700,step:10,suffix:" J",onChange:d,accent:"#f59e0b"}),n.jsx(ye,{label:"Boshlang'ich ichki energiya",value:m,min:100,max:700,step:10,suffix:" J",onChange:x,accent:"#2563eb"}),n.jsx(Ra,{onReset:k,onToggle:()=>w(S=>!S),running:v})]})]}),n.jsx(ua,{points:N,xLabel:"Bosqich",yLabel:"Energiya (J)",color:"#ef4444"}),n.jsx(Aa,{children:"Yopiq tizimga issiqlik berilsa, uning bir qismi ichki energiyani oshiradi, qolgan qismi esa tashqi kuchlarga qarshi ish bajarishga sarflanadi."})]})]})}function pp(){const[l,o]=T.useState(1.5),[c,d]=T.useState(1),[m,x]=T.useState(35),[v,w]=T.useState(!0),j=T.useMemo(()=>Number((Math.asin(Math.min(.999,c/l))*180/Math.PI).toFixed(1)),[l,c]),N=m>=j,k=T.useMemo(()=>Array.from({length:10},(q,K)=>({x:10+K*6,y:j})),[j]),S=()=>{o(1.5),d(1),x(35),w(!0)};return n.jsxs("div",{className:"simulation-shell tir-theme",children:[n.jsxs("div",{className:"simulation-hero",children:[n.jsx("span",{className:"simulation-badge",children:"To'la ichki qaytish"}),n.jsx("h2",{children:"Kritik burchak hodisasi"}),n.jsx("p",{children:"Zich muhitdan siyrak muhitga o'tayotganda tushish burchagi kritik qiymatdan katta bo'lsa, nur to'liq qaytadi."})]}),n.jsxs("div",{className:"simulation-body",children:[n.jsx(Sa,{items:[{formula:"sin αₖ = n₂ / n₁",label:"Kritik burchak"},{formula:`αₖ = ${j}°`,label:N?"To'la ichki qaytish":"Oddiy sinish"}]}),n.jsxs("div",{className:"simulation-main-grid",children:[n.jsxs("div",{className:"simulation-card",children:[n.jsx("p",{className:"simulation-card-title",children:"Optik tolaga o'xshash model"}),n.jsxs("svg",{viewBox:"0 0 420 300",style:{width:"100%",borderRadius:"1.5rem",background:"linear-gradient(180deg,#eef2ff,#dbeafe)"},children:[n.jsx("rect",{x:"40",y:"70",width:"340",height:"160",rx:"24",fill:"rgba(99,102,241,0.12)",stroke:"rgba(99,102,241,0.5)",strokeWidth:"4"}),n.jsx("line",{x1:"210",y1:"150",x2:100+Math.cos(m*Math.PI/180)*100,y2:150-Math.sin(m*Math.PI/180)*100,stroke:"#f97316",strokeWidth:"5"}),n.jsx("line",{x1:"210",y1:"150",x2:320-Math.cos(m*Math.PI/180)*100,y2:150-Math.sin(m*Math.PI/180)*100,stroke:N?"#22c55e":"#2563eb",strokeWidth:"5"})]}),n.jsx(Na,{items:[{label:"n₁",value:l},{label:"n₂",value:c},{label:"α",value:`${m}°`},{label:"Holat",value:N?"Qaytdi":"SindI"}]})]}),n.jsxs("div",{className:"simulation-controls",children:[n.jsx("p",{className:"simulation-card-title",children:"Parametrlar"}),n.jsx(ye,{label:"Zich muhit n₁",value:l,min:1.2,max:2,step:.01,onChange:o,accent:"#6366f1"}),n.jsx(ye,{label:"Siyrak muhit n₂",value:c,min:1,max:1.5,step:.01,onChange:d,accent:"#06b6d4"}),n.jsx(ye,{label:"Tushish burchagi",value:m,min:5,max:85,step:1,suffix:" °",onChange:x,accent:"#f97316"}),n.jsx(Ra,{onReset:S,onToggle:()=>w(q=>!q),running:v})]})]}),n.jsx(ua,{points:k,xLabel:"Tajriba",yLabel:"αₖ",color:"#6366f1"}),n.jsx(Aa,{children:"Bu hodisa optik tolalarda, prizmali asboblarda va turli sensorlarda qo'llanadi. Nur energiyasi tashqariga chiqmay, ichkarida yo'naltiriladi."})]})]})}const y0=[{id:"ideal-gas",title:"Ideal gaz qonuni",category:"Molekulyar fizika",icon:"⚛️",summary:"PV = nRT qonunini molekulalar animatsiyasi va bosim-grafik bilan o'rganing.",tags:["Bosim","Temperatura","Grafik"],component:cp},{id:"gas-processes",title:"Gaz jarayonlari",category:"Molekulyar fizika",icon:"🧪",summary:"Izotermik, izobarik va izoxorik jarayonlarni bir joyda solishtiring.",tags:["Izotermik","Izobarik","Izoxorik"],component:sp},{id:"first-law",title:"Termodinamikaning I qonuni",category:"Termodinamika",icon:"🔥",summary:"Issiqlik, ichki energiya va ish orasidagi energiya balansini ko'ring.",tags:["Q","ΔU","A"],component:hp},{id:"heat-equilibrium",title:"Issiqlik muvozanati",category:"Termodinamika",icon:"🌡️",summary:"Ikki jism aralashganda qanday umumiy temperatura hosil bo'lishini kuzating.",tags:["Muvozanat","Kalorimetriya"],component:op},{id:"heat-engine",title:"Issiqlik mashinasi",category:"Termodinamika",icon:"⚙️",summary:"Karnot samaradorligi va foydali ish ulushini o'rganing.",tags:["Karnot","η","Ish"],component:rp},{id:"capillary",title:"Kapillyarlik hodisasi",category:"Suyuqliklar fizikasi",icon:"🧫",summary:"Kapillyar naycha radiusi suyuqlik balandligiga qanday ta'sir qilishini ko'ring.",tags:["Menisk","Jurin"],component:ip},{id:"surface-tension",title:"Sirt tarangligi",category:"Suyuqliklar fizikasi",icon:"💧",summary:"Suyuq parda kuchi va temperaturaning σ ga ta'siri bilan ishlang.",tags:["σ","Parda"],component:bp},{id:"melting",title:"Erish va qotish",category:"Faza o'tishlari",icon:"🧊",summary:"Yashirin issiqlik hisobiga temperatura nega o'zgarmay turishini o'rganing.",tags:["Faza","λ","Muz"],component:fp},{id:"evaporation",title:"Bug'lanish va kondensatsiya",category:"Faza o'tishlari",icon:"☁️",summary:"Namlik, temperatura va sirt maydoni bug'lanish tezligini qanday o'zgartirishini ko'ring.",tags:["Namlik","Bug'"],component:lp},{id:"reflection",title:"Qaytish va sinish",category:"Optika",icon:"🔦",summary:"Snell qonunini nur diagrammasi bilan tajriba ko'rinishida o'rganing.",tags:["Snell","Nur"],component:mp},{id:"tir",title:"To'la ichki qaytish",category:"Optika",icon:"✨",summary:"Kritik burchakdan katta holatda nur qanday to'liq qaytishini ko'ring.",tags:["Kritik burchak","Optik tola"],component:pp},{id:"lens",title:"Linza simulyatori",category:"Optika",icon:"🔍",summary:"Linza yordamida hosil bo'ladigan tasvir masofasi va kattalashishini o'lchang.",tags:["Linza","Tasvir"],component:dp}],zf=["Barchasi",...new Set(y0.map(l=>l.category))];function xp(){const{user:l}=Uu(),[o,c]=T.useState("Barchasi"),[d,m]=T.useState(y0[0].id),x=T.useMemo(()=>o==="Barchasi"?y0:y0.filter(j=>j.category===o),[o]),v=T.useMemo(()=>x.find(j=>j.id===d)||x[0]||y0[0],[x,d]);T.useEffect(()=>{!v||l?.role!=="student"||Cu.trackSimulation({resource_id:v.id,resource_title:v.title,metadata:{category:v.category,source:"interactive-simulations"}}).catch(()=>{})},[v,l?.role]);const w=v.component;return n.jsxs("div",{className:"simulations-page",children:[n.jsxs("section",{className:"simulations-hero",children:[n.jsxs("span",{className:"simulations-badge",children:[n.jsx(Un,{size:16})," Virtual fizika laboratoriyasi"]}),n.jsx("h1",{children:"Interaktiv simulatsiyalar markazi"}),n.jsx("p",{children:"Bu bo'limda molekulyar fizika, termodinamika, suyuqliklar fizikasi va optika mavzulari uchun zamonaviy, jonli va formulalar bilan boyitilgan virtual tajribalar jamlandi."}),n.jsxs("div",{className:"simulations-summary",children:[n.jsxs("div",{className:"simulations-summary-card",children:[n.jsx("span",{children:"Umumiy tajribalar"}),n.jsxs("strong",{children:[y0.length," ta"]})]}),n.jsxs("div",{className:"simulations-summary-card",children:[n.jsx("span",{children:"Yo'nalishlar"}),n.jsxs("strong",{children:[zf.length-1," ta bo'lim"]})]}),n.jsxs("div",{className:"simulations-summary-card",children:[n.jsx("span",{children:"Format"}),n.jsx("strong",{children:"Grafik + formula + animatsiya"})]}),n.jsxs("div",{className:"simulations-summary-card",children:[n.jsx("span",{children:"Til"}),n.jsx("strong",{children:"To'liq o'zbekcha"})]})]})]}),n.jsx("section",{children:n.jsxs("div",{className:"simulations-toolbar",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"simulations-section-title",children:"Simulyatsiyani tanlang"}),n.jsx("p",{className:"simulations-muted",children:"Kartani bosing va tanlangan tajriba pastda to'liq interaktiv rejimda ochiladi."})]}),n.jsx("div",{className:"simulations-chip-row",children:zf.map(j=>n.jsx("button",{type:"button",className:`simulations-chip ${o===j?"is-active":""}`,onClick:()=>{c(j);const N=j==="Barchasi"?y0:y0.filter(k=>k.category===j);N.some(k=>k.id===d)||m(N[0]?.id||y0[0].id)},children:j},j))})]})}),n.jsx("section",{className:"simulations-grid",children:x.map(j=>n.jsxs("article",{className:`simulation-card-item ${v.id===j.id?"is-active":""}`,children:[n.jsxs("div",{className:"simulation-card-top",children:[n.jsxs("div",{children:[n.jsx("div",{className:"simulation-card-icon",children:j.icon}),n.jsx("h3",{children:j.title}),n.jsx("p",{children:j.summary})]}),n.jsx("span",{className:"simulations-badge",style:{background:"#eff6ff",color:"#1d4ed8"},children:j.category})]}),n.jsx("div",{className:"simulation-card-meta",children:j.tags.map(N=>n.jsx("span",{children:N},N))}),n.jsxs("button",{type:"button",className:"simulation-card-action",onClick:()=>m(j.id),children:[n.jsx(so,{size:18,style:{display:"inline",marginRight:"0.45rem",verticalAlign:"text-bottom"}}),"Simulyatsiyani ochish"]})]},j.id))}),n.jsxs("section",{className:"simulations-viewer",children:[n.jsxs("div",{className:"simulations-viewer-head",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"simulations-badge",style:{background:"#dbeafe",color:"#1d4ed8"},children:[n.jsx(lo,{size:16})," Faol tajriba"]}),n.jsx("h2",{children:v.title}),n.jsx("p",{children:v.summary})]}),n.jsxs("div",{className:"simulations-viewer-note",children:["Kategoriya: ",v.category]})]}),n.jsx(w,{})]})]})}var Sf={},Rf;function gp(){return Rf||(Rf=1,(()=>{var l,o,c={48(p,s){Object.defineProperty(s,"__esModule",{value:!0})},269(p,s){Object.defineProperty(s,"__esModule",{value:!0})},460(p,s){Object.defineProperty(s,"__esModule",{value:!0})},778(p,s){Object.defineProperty(s,"__esModule",{value:!0})},125(p,s){Object.defineProperty(s,"__esModule",{value:!0})},65(p,s){Object.defineProperty(s,"__esModule",{value:!0}),s.classnames=function(M){const H=z(M).filter(h);return H.length>0?H.join(" "):void 0};const f=M=>!!M,h=(M,H,J)=>J.indexOf(M)===H,y=[];function z(M){return M?typeof M=="string"?[M]:Array.isArray(M)?M.flatMap(z).filter(f):(H=M,Object.entries(H).map(([J,W])=>W&&J)).filter(f):y;var H}},665(p,s,f){var h=this&&this.__createBinding||(Object.create?function(z,M,H,J){J===void 0&&(J=H);var W=Object.getOwnPropertyDescriptor(M,H);W&&!("get"in W?!M.__esModule:W.writable||W.configurable)||(W={enumerable:!0,get:function(){return M[H]}}),Object.defineProperty(z,J,W)}:function(z,M,H,J){J===void 0&&(J=H),z[J]=M[H]}),y=this&&this.__exportStar||function(z,M){for(var H in z)H==="default"||Object.prototype.hasOwnProperty.call(M,H)||h(M,z,H)};Object.defineProperty(s,"__esModule",{value:!0}),y(f(48),s),y(f(269),s),y(f(125),s),y(f(778),s),y(f(460),s),y(f(65),s)},53(p,s,f){Object.defineProperty(s,"__esModule",{value:!0}),s.createRef=s.h=void 0,s.createElement=z;const h=f(136),y=f(56);function z(M,H,...J){if(typeof M=="function")return M({...H,children:J});const{finalTag:W,finalAttrs:ae}=(0,y.applyTsxTag)(M,H),xe=(0,y.createDomElement)(W,ae);return ae&&(0,h.setAttributes)(xe,ae),(0,y.applyChildren)(xe,J),xe}s.h=z,s.createRef=()=>({current:null})},325(p,s,f){Object.defineProperty(s,"__esModule",{value:!0}),s.defineCustomElement=function(y,z,M){return customElements.define(y,z,M),H=>(0,h.jsx)(y,H)};const h=f(553)},29(p,s,f){var h=this&&this.__createBinding||(Object.create?function(z,M,H,J){J===void 0&&(J=H);var W=Object.getOwnPropertyDescriptor(M,H);W&&!("get"in W?!M.__esModule:W.writable||W.configurable)||(W={enumerable:!0,get:function(){return M[H]}}),Object.defineProperty(z,J,W)}:function(z,M,H,J){J===void 0&&(J=H),z[J]=M[H]}),y=this&&this.__exportStar||function(z,M){for(var H in z)H==="default"||Object.prototype.hasOwnProperty.call(M,H)||h(M,z,H)};Object.defineProperty(s,"__esModule",{value:!0}),y(f(53),s),y(f(325),s),y(f(553),s),y(f(836),s)},553(p,s,f){Object.defineProperty(s,"__esModule",{value:!0}),s.jsx=z,s.jsxs=z,s.jsxDEV=z;const h=f(136),y=f(56);function z(M,H){if(typeof M=="function")return M(H);const{children:J,...W}=H,{finalTag:ae,finalAttrs:xe}=(0,y.applyTsxTag)(M,W),fe=(0,y.createDomElement)(ae,xe);return(0,h.setAttributes)(fe,xe),(0,y.applyChildren)(fe,[J]),fe}},136(p,s,f){Object.defineProperty(s,"__esModule",{value:!0}),s.setAttributes=function(M,H){for(const J of Object.keys(H)){if(J==="__source"||J==="__self"||J==="tsxTag")continue;const W=H[J];if(J==="class"){const ae=(0,h.classnames)(W);ae&&M.setAttribute(J,ae)}else if(J==="ref")W.current=M;else if(z.test(J)){const ae=J.replace(/Capture$/,""),xe=J!==ae,fe=ae.toLowerCase().substring(2);M.addEventListener(fe,W,xe)}else J==="style"&&typeof W!="string"?y(W,M.style):J==="dangerouslySetInnerHTML"?M.innerHTML=W:W===!0?M.setAttribute(J,J):(W||W===0||W==="")&&M.setAttribute(J,W.toString())}};const h=f(665);function y(M,H){for(const J of Object.keys(M))J in H&&(H[J]=M[J])}const z=new RegExp("^on\\p{Lu}","u")},836(p,s){Object.defineProperty(s,"__esModule",{value:!0})},56(p,s){function f(h,y){y instanceof Element?h.appendChild(y):typeof y=="string"||typeof y=="number"?h.appendChild(document.createTextNode(y.toString())):console.warn("Unknown type to append: ",y)}Object.defineProperty(s,"__esModule",{value:!0}),s.applyChildren=function h(y,z){for(const M of z)(M||M===0)&&(Array.isArray(M)?h(y,M):f(y,M))},s.createDomElement=function(h,y){const z=y?.is?{is:y.is}:void 0;return y?.xmlns?document.createElementNS(y.xmlns,h,z):document.createElement(h,z)},s.applyTsxTag=function(h,y){let z=h,M=y;return M&&"tsxTag"in M&&(z=M.tsxTag,!M.is&&h.includes("-")&&(M={...M,is:h})),{finalTag:z,finalAttrs:M}}},124(p,s,f){p.exports=f.p+"9efcd0d2d4d78e11d2ce.wasm"},797(p,s,f){p.exports=f.p+"a5826dfcf67f2aeda9d9.wasm"}},d={};function m(p){var s=d[p];if(s!==void 0)return s.exports;var f=d[p]={exports:{}};return c[p].call(f.exports,f,f.exports,m),f.exports}m.m=c,m.d=(p,s)=>{for(var f in s)m.o(s,f)&&!m.o(p,f)&&Object.defineProperty(p,f,{enumerable:!0,get:s[f]})},m.f={},m.e=p=>Promise.all(Object.keys(m.f).reduce((s,f)=>(m.f[f](p,s),s),[])),m.u=p=>"core.ruffle."+{482:"9ba82492a657469d1305",655:"2f238b02da899769713f"}[p]+".js",m.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),m.o=(p,s)=>Object.prototype.hasOwnProperty.call(p,s),l={},o="ruffle-selfhosted:",m.l=(p,s,f,h)=>{if(l[p])l[p].push(s);else{var y,z;if(f!==void 0)for(var M=document.getElementsByTagName("script"),H=0;H<M.length;H++){var J=M[H];if(J.getAttribute("src")==p||J.getAttribute("data-webpack")==o+f){y=J;break}}y||(z=!0,(y=document.createElement("script")).charset="utf-8",m.nc&&y.setAttribute("nonce",m.nc),y.setAttribute("data-webpack",o+f),y.src=p),l[p]=[s];var W=(xe,fe)=>{y.onerror=y.onload=null,clearTimeout(ae);var Re=l[p];if(delete l[p],y.parentNode&&y.parentNode.removeChild(y),Re&&Re.forEach(eu=>eu(fe)),xe)return xe(fe)},ae=setTimeout(W.bind(null,void 0,{type:"timeout",target:y}),12e4);y.onerror=W.bind(null,y.onerror),y.onload=W.bind(null,y.onload),z&&document.head.appendChild(y)}},m.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})},m.p="",(()=>{m.b=typeof document<"u"&&document.baseURI||self.location.href;var p={792:0};m.f.j=(h,y)=>{var z=m.o(p,h)?p[h]:void 0;if(z!==0)if(z)y.push(z[2]);else{var M=new Promise((W,ae)=>z=p[h]=[W,ae]);y.push(z[2]=M);var H=m.p+m.u(h),J=new Error;m.l(H,W=>{if(m.o(p,h)&&((z=p[h])!==0&&(p[h]=void 0),z)){var ae=W&&(W.type==="load"?"missing":W.type),xe=W&&W.target&&W.target.src;J.message="Loading chunk "+h+` failed.
(`+ae+": "+xe+")",J.name="ChunkLoadError",J.type=ae,J.request=xe,z[1](J)}},"chunk-"+h,h)}};var s=(h,y)=>{var z,M,[H,J,W]=y,ae=0;if(H.some(xe=>p[xe]!==0)){for(z in J)m.o(J,z)&&(m.m[z]=J[z]);W&&W(m)}for(h&&h(y);ae<H.length;ae++)M=H[ae],m.o(p,M)&&p[M]&&p[M][0](),p[M]=0},f=self.webpackChunkruffle_selfhosted=self.webpackChunkruffle_selfhosted||[];f.forEach(s.bind(null,0)),f.push=s.bind(null,f.push.bind(f))})();class x{constructor(s,f,h,y,z){this.major=s,this.minor=f,this.patch=h,this.prIdent=y,this.buildIdent=z}static fromSemver(s){const f=s.split("+"),h=f[0].split("-"),y=h[0].split("."),z=parseInt(y[0],10);let M=0,H=0,J=null,W=null;return y[1]!==void 0&&(M=parseInt(y[1],10)),y[2]!==void 0&&(H=parseInt(y[2],10)),h[1]!==void 0&&(J=h[1].split(".")),f[1]!==void 0&&(W=f[1].split(".")),new x(z,M,H,J,W)}isCompatibleWith(s){return this.major!==0&&this.major===s.major||this.major===0&&s.major===0&&this.minor!==0&&this.minor===s.minor||this.major===0&&s.major===0&&this.minor===0&&s.minor===0&&this.patch!==0&&this.patch===s.patch}hasPrecedenceOver(s){if(this.major>s.major)return!0;if(this.major<s.major)return!1;if(this.minor>s.minor)return!0;if(this.minor<s.minor)return!1;if(this.patch>s.patch)return!0;if(this.patch<s.patch)return!1;if(this.prIdent===null&&s.prIdent!==null)return!0;if(this.prIdent!==null&&s.prIdent===null)return!1;if(this.prIdent!==null&&s.prIdent!==null){const f=/^[0-9]*$/;for(let h=0;h<this.prIdent.length&&h<s.prIdent.length;h+=1){const y=f.test(s.prIdent[h]),z=f.test(this.prIdent[h]);if(!z&&y)return!0;if(z&&y){const M=parseInt(this.prIdent[h],10),H=parseInt(s.prIdent[h],10);if(M>H)return!0;if(M<H)return!1}else{if(z&&!y)return!1;if(!z&&!y){if(this.prIdent[h]>s.prIdent[h])return!0;if(this.prIdent[h]<s.prIdent[h])return!1}}}if(this.prIdent.length>s.prIdent.length)return!0;if(this.prIdent.length<s.prIdent.length)return!1}if(this.buildIdent!==null&&s.buildIdent===null)return!0;if(this.buildIdent===null&&s.buildIdent!==null)return!1;if(this.buildIdent!==null&&s.buildIdent!==null){const f=/^[0-9]*$/;for(let h=0;h<this.buildIdent.length&&h<s.buildIdent.length;h+=1){const y=f.test(this.buildIdent[h]),z=f.test(s.buildIdent[h]);if(!y&&z)return!0;if(y&&z){const M=parseInt(this.buildIdent[h],10),H=parseInt(s.buildIdent[h],10);if(M>H)return!0;if(M<H)return!1}else{if(y&&!z)return!1;if(!y&&!z){if(this.buildIdent[h]>s.buildIdent[h])return!0;if(this.buildIdent[h]<s.buildIdent[h])return!1}}}return this.buildIdent.length>s.buildIdent.length}return!1}isEqual(s){return this.major===s.major&&this.minor===s.minor&&this.patch===s.patch}isStableOrCompatiblePrerelease(s){return s.prIdent===null||this.major===s.major&&this.minor===s.minor&&this.patch===s.patch}}class v{constructor(s){this.requirements=s}satisfiedBy(s){for(const f of this.requirements){let h=!0;for(const{comparator:y,version:z}of f)h=h&&z.isStableOrCompatiblePrerelease(s),y===""||y==="="?h=h&&z.isEqual(s):y===">"?h=h&&s.hasPrecedenceOver(z):y===">="?h=h&&(s.hasPrecedenceOver(z)||z.isEqual(s)):y==="<"?h=h&&z.hasPrecedenceOver(s):y==="<="?h=h&&(z.hasPrecedenceOver(s)||z.isEqual(s)):y==="^"&&(h=h&&z.isCompatibleWith(s));if(h)return!0}return!1}static fromRequirementString(s){const f=s.split(" ");let h=[];const y=[];for(const z of f)if(z==="||")h.length>0&&(y.push(h),h=[]);else if(z.length>0){const M=/[0-9]/.exec(z);if(M){const H=z.slice(0,M.index).trim(),J=x.fromSemver(z.slice(M.index).trim());h.push({comparator:H,version:J})}}return h.length>0&&y.push(h),new v(y)}}class w{constructor(s){this.sources=s?.sources||{},this.config=s?.config||{},this.invoked=s?.invoked||!1,this.newestName=s?.newestName||null,s?.superseded?.(),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let s=null,f=x.fromSemver("0.0.0");for(const h in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,h)){const y=x.fromSemver(this.sources[h].version);y.hasPrecedenceOver(f)&&(s=h,f=y)}return s}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");(!("polyfills"in this.config)||this.config.polyfills)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const s=this.newestSourceName();return s!==null?this.sources[s]:null}satisfying(s){const f=v.fromRequirementString(s);let h=null;for(const y in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,y)){const z=x.fromSemver(this.sources[y].version);f.satisfiedBy(z)&&(h=this.sources[y])}return h}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}const j={versionNumber:"0.2.0-nightly.2026.5.6",versionName:"0.2.0-nightly.2026.5.6",versionChannel:"nightly",buildDate:"2026-05-06T00:24:18.154Z",commitHash:"460ba5b032125a0cc27c9afbb08404b21f4d9667"};var N;(function(p){p[p.HaveNothing=0]="HaveNothing",p[p.Loading=1]="Loading",p[p.Loaded=2]="Loaded"})(N||(N={}));var k,S,q,K,A,_,C,Z,ee,ne,ue,me,ce,P,D=m(553);(function(p){p.On="on",p.Off="off",p.Auto="auto"})(k||(k={})),(function(p){p.Off="off",p.Fullscreen="fullscreen",p.On="on"})(S||(S={})),(function(p){p.Visible="visible",p.Hidden="hidden"})(q||(q={})),(function(p){p.Error="error",p.Warn="warn",p.Info="info",p.Debug="debug",p.Trace="trace"})(K||(K={})),(function(p){p.Window="window",p.Opaque="opaque",p.Transparent="transparent",p.Direct="direct",p.Gpu="gpu"})(A||(A={})),(function(p){p.WebGpu="webgpu",p.WgpuWebgl="wgpu-webgl",p.Webgl="webgl",p.Canvas="canvas"})(_||(_={})),(function(p){p.On="on",p.RightClickOnly="rightClickOnly",p.Off="off"})(C||(C={})),(function(p){p.AIR="air",p.FlashPlayer="flashPlayer"})(Z||(Z={})),(function(p){p.Allow="allow",p.Confirm="confirm",p.Deny="deny"})(ee||(ee={})),(function(p){p.All="all",p.Internal="internal",p.None="none"})(ne||(ne={})),(function(p){p.Always="always",p.Never="never",p.Smart="smart"})(ue||(ue={})),(function(p){p.Embedded="embedded",p.Canvas="canvas"})(me||(me={})),(function(p){p.None="none",p.MainThread="mainThread"})(ce||(ce={})),(function(p){p.South="south",p.East="east",p.North="north",p.West="west",p.LeftTrigger="left-trigger",p.LeftTrigger2="left-trigger-2",p.RightTrigger="right-trigger",p.RightTrigger2="right-trigger-2",p.Select="select",p.Start="start",p.DPadUp="dpad-up",p.DPadDown="dpad-down",p.DPadLeft="dpad-left",p.DPadRight="dpad-right"})(P||(P={}));const he={allowScriptAccess:!1,parameters:{},autoplay:k.Auto,backgroundColor:null,letterbox:S.Fullscreen,unmuteOverlay:q.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:K.Error,showSwfDownload:!1,contextMenu:C.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",fullScreenAspectRatio:"",forceAlign:!1,quality:null,scale:"showAll",forceScale:!1,frameRate:null,wmode:A.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:ee.Allow,allowNetworking:ne.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:Z.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[],scrollingBehavior:ue.Smart,deviceFontRenderer:me.Embedded,backgroundExecutionMode:ce.MainThread};class Ie{constructor(s){this.value=s}valueOf(){return this.value}}class qe extends Ie{constructor(s="???"){super(s)}toString(s){return`{${this.value}}`}}class Ce extends Ie{constructor(s,f={}){super(s),this.opts=f}toString(s){if(s)try{return s.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(f){s.reportError(f)}return this.value.toString(10)}}class Ge extends Ie{static supportsValue(s){if(typeof s=="number"||s instanceof Date)return!0;if(s instanceof Ie)return Ge.supportsValue(s.valueOf());if("Temporal"in globalThis){const f=globalThis.Temporal;if(s instanceof f.Instant||s instanceof f.PlainDateTime||s instanceof f.PlainDate||s instanceof f.PlainMonthDay||s instanceof f.PlainTime||s instanceof f.PlainYearMonth)return!0}return!1}constructor(s,f={}){s instanceof Ge?(f={...s.opts,...f},s=s.value):s instanceof Ie&&(s=s.valueOf()),typeof s=="object"&&"calendarId"in s&&f.calendar===void 0&&(f={...f,calendar:s.calendarId}),super(s),this.opts=f}[Symbol.toPrimitive](s){return s==="string"?this.toString():this.toNumber()}toNumber(){const s=this.value;if(typeof s=="number")return s;if(s instanceof Date)return s.getTime();if("epochMilliseconds"in s)return s.epochMilliseconds;if("toZonedDateTime"in s)return s.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(s){if(s)try{return s.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(f){s.reportError(f)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}}function Su(p,s,f){return f===s||f instanceof Ce&&s instanceof Ce&&f.value===s.value||s instanceof Ce&&typeof f=="string"&&f===p.memoizeIntlObject(Intl.PluralRules,s.opts).select(s.value)}function Lu(p,s,f){return s[f]?Ee(p,s[f].value):(p.reportError(new RangeError("No default")),new qe)}function V(p,s){const f=[],h=Object.create(null);for(const y of s)y.type==="narg"?h[y.name]=X(p,y.value):f.push(X(p,y));return{positional:f,named:h}}function X(p,s){switch(s.type){case"str":return s.value;case"num":return new Ce(s.value,{minimumFractionDigits:s.precision});case"var":return(function(f,{name:h}){let y;if(f.params){if(!Object.prototype.hasOwnProperty.call(f.params,h))return new qe(`$${h}`);y=f.params[h]}else{if(!f.args||!Object.prototype.hasOwnProperty.call(f.args,h))return f.reportError(new ReferenceError(`Unknown variable: $${h}`)),new qe(`$${h}`);y=f.args[h]}if(y instanceof Ie)return y;switch(typeof y){case"string":return y;case"number":return new Ce(y);case"object":if(Ge.supportsValue(y))return new Ge(y);default:return f.reportError(new TypeError(`Variable type not supported: $${h}, ${typeof y}`)),new qe(`$${h}`)}})(p,s);case"mesg":return(function(f,{name:h,attr:y}){const z=f.bundle._messages.get(h);if(!z)return f.reportError(new ReferenceError(`Unknown message: ${h}`)),new qe(h);if(y){const M=z.attributes[y];return M?Ee(f,M):(f.reportError(new ReferenceError(`Unknown attribute: ${y}`)),new qe(`${h}.${y}`))}return z.value?Ee(f,z.value):(f.reportError(new ReferenceError(`No value: ${h}`)),new qe(h))})(p,s);case"term":return(function(f,{name:h,attr:y,args:z}){const M=`-${h}`,H=f.bundle._terms.get(M);if(!H)return f.reportError(new ReferenceError(`Unknown term: ${M}`)),new qe(M);if(y){const W=H.attributes[y];if(W){f.params=V(f,z).named;const ae=Ee(f,W);return f.params=null,ae}return f.reportError(new ReferenceError(`Unknown attribute: ${y}`)),new qe(`${M}.${y}`)}f.params=V(f,z).named;const J=Ee(f,H.value);return f.params=null,J})(p,s);case"func":return(function(f,{name:h,args:y}){let z=f.bundle._functions[h];if(!z)return f.reportError(new ReferenceError(`Unknown function: ${h}()`)),new qe(`${h}()`);if(typeof z!="function")return f.reportError(new TypeError(`Function ${h}() is not callable`)),new qe(`${h}()`);try{let M=V(f,y);return z(M.positional,M.named)}catch(M){return f.reportError(M),new qe(`${h}()`)}})(p,s);case"select":return(function(f,{selector:h,variants:y,star:z}){let M=X(f,h);if(M instanceof qe)return Lu(f,y,z);for(const H of y)if(Su(f,M,X(f,H.key)))return Ee(f,H.value);return Lu(f,y,z)})(p,s);default:return new qe}}function le(p,s){if(p.dirty.has(s))return p.reportError(new RangeError("Cyclic reference")),new qe;p.dirty.add(s);const f=[],h=p.bundle._useIsolating&&s.length>1;for(const y of s)if(typeof y!="string"){if(p.placeables++,p.placeables>100)throw p.dirty.delete(s),new RangeError(`Too many placeables expanded: ${p.placeables}, max allowed is 100`);h&&f.push("⁨"),f.push(X(p,y).toString(p)),h&&f.push("⁩")}else f.push(p.bundle._transform(y));return p.dirty.delete(s),f.join("")}function Ee(p,s){return typeof s=="string"?p.bundle._transform(s):le(p,s)}class He{constructor(s,f,h){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=s,this.errors=f,this.args=h}reportError(s){if(!(this.errors&&s instanceof Error))throw s;this.errors.push(s)}memoizeIntlObject(s,f){let h=this.bundle._intls.get(s);h||(h={},this.bundle._intls.set(s,h));let y=JSON.stringify(f);return h[y]||(h[y]=new s(this.bundle.locales,f)),h[y]}}function De(p,s){const f=Object.create(null);for(const[h,y]of Object.entries(p))s.includes(h)&&(f[h]=y.valueOf());return f}const Oe=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function we(p,s){let f=p[0];if(f instanceof qe)return new qe(`NUMBER(${f.valueOf()})`);if(f instanceof Ce)return new Ce(f.valueOf(),{...f.opts,...De(s,Oe)});if(f instanceof Ge)return new Ce(f.toNumber(),{...De(s,Oe)});throw new TypeError("Invalid argument to NUMBER")}const uu=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Bu(p,s){let f=p[0];if(f instanceof qe)return new qe(`DATETIME(${f.valueOf()})`);if(f instanceof Ge||f instanceof Ce)return new Ge(f,De(s,uu));throw new TypeError("Invalid argument to DATETIME")}const Ea=new Map;class $t{constructor(s,{functions:f,useIsolating:h=!0,transform:y=z=>z}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(s)?s:[s],this._functions={NUMBER:we,DATETIME:Bu,...f},this._useIsolating=h,this._transform=y,this._intls=(function(z){const M=Array.isArray(z)?z.join(" "):z;let H=Ea.get(M);return H===void 0&&(H=new Map,Ea.set(M,H)),H})(s)}hasMessage(s){return this._messages.has(s)}getMessage(s){return this._messages.get(s)}addResource(s,{allowOverrides:f=!1}={}){const h=[];for(let y=0;y<s.body.length;y++){let z=s.body[y];if(z.id.startsWith("-")){if(f===!1&&this._terms.has(z.id)){h.push(new Error(`Attempt to override an existing term: "${z.id}"`));continue}this._terms.set(z.id,z)}else{if(f===!1&&this._messages.has(z.id)){h.push(new Error(`Attempt to override an existing message: "${z.id}"`));continue}this._messages.set(z.id,z)}}return h}formatPattern(s,f=null,h=null){if(typeof s=="string")return this._transform(s);let y=new He(this,h,f);try{return le(y,s).toString(y)}catch(z){if(y.errors&&z instanceof Error)return y.errors.push(z),new qe().toString(y);throw z}}}const k0=/^(-?[a-zA-Z][\w-]*) *= */gm,Pa=/\.([a-zA-Z][\w-]*) *= */y,Hn=/\*?\[/y,j0=/(-?[0-9]+(?:\.([0-9]+))?)/y,$n=/([a-zA-Z][\w-]*)/y,Vn=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Xa=/^[A-Z][A-Z0-9_-]*$/,w0=/([^{}\n\r]+)/y,Kn=/([^\\"\n\r]*)/y,el=/\\([\\"])/y,Yn=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Qn=/^\n+/,Vt=/ +$/,Jn=/ *\r?\n/g,_s=/( *)$/,Us=/{\s*/y,Ou=/\s*}/y,Ls=/\[\s*/y,ul=/\s*] */y,al=/\s*\(\s*/y,Kt=/\s*->\s*/y,Bs=/\s*:\s*/y,tl=/\s*,?\s*/y,Fs=/\s+/y;class Hs{constructor(s){this.body=[],k0.lastIndex=0;let f=0;for(;;){let I=k0.exec(s);if(I===null)break;f=k0.lastIndex;try{this.body.push(J(I[1]))}catch(de){if(de instanceof SyntaxError)continue;throw de}}function h(I){return I.lastIndex=f,I.test(s)}function y(I,de){if(s[f]===I)return f++,!0;if(de)throw new de(`Expected ${I}`);return!1}function z(I,de){if(h(I))return f=I.lastIndex,!0;if(de)throw new de(`Expected ${I.toString()}`);return!1}function M(I){I.lastIndex=f;let de=I.exec(s);if(de===null)throw new SyntaxError(`Expected ${I.toString()}`);return f=I.lastIndex,de}function H(I){return M(I)[1]}function J(I){let de=W(),Pe=(function(){let sa=Object.create(null);for(;h(Pa);){let ra=H(Pa),Nu=W();if(Nu===null)throw new SyntaxError("Expected attribute value");sa[ra]=Nu}return sa})();if(de===null&&Object.keys(Pe).length===0)throw new SyntaxError("Expected message value or attributes");return{id:I,value:de,attributes:Pe}}function W(){let I;if(h(w0)&&(I=H(w0)),s[f]==="{"||s[f]==="}")return ae(I?[I]:[],1/0);let de=en();return de?I?ae([I,de],de.length):(de.value=B0(de.value,Qn),ae([de],de.length)):I?B0(I,Vt):null}function ae(I=[],de){for(;;){if(h(w0)){I.push(H(w0));continue}if(s[f]==="{"){I.push(xe());continue}if(s[f]==="}")throw new SyntaxError("Unbalanced closing brace");let Nu=en();if(!Nu)break;I.push(Nu),de=Math.min(de,Nu.length)}let Pe=I.length-1,sa=I[Pe];typeof sa=="string"&&(I[Pe]=B0(sa,Vt));let ra=[];for(let Nu of I)Nu instanceof z0&&(Nu=Nu.value.slice(0,Nu.value.length-de)),Nu&&ra.push(Nu);return ra}function xe(){z(Us,SyntaxError);let I=fe();if(z(Ou))return I;if(z(Kt)){let de=(function(){let Pe,sa=[],ra=0;for(;h(Hn);){y("*")&&(Pe=ra);let Nu=eu(),ml=W();if(ml===null)throw new SyntaxError("Expected variant value");sa[ra++]={key:Nu,value:ml}}if(ra===0)return null;if(Pe===void 0)throw new SyntaxError("Expected default variant");return{variants:sa,star:Pe}})();return z(Ou,SyntaxError),{type:"select",selector:I,...de}}throw new SyntaxError("Unclosed placeable")}function fe(){if(s[f]==="{")return xe();if(h(Vn)){let[,I,de,Pe=null]=M(Vn);if(I==="$")return{type:"var",name:de};if(z(al)){let sa=(function(){let ra=[];for(;;){switch(s[f]){case")":return f++,ra;case void 0:throw new SyntaxError("Unclosed argument list")}ra.push(Re()),z(tl)}})();if(I==="-")return{type:"term",name:de,attr:Pe,args:sa};if(Xa.test(de))return{type:"func",name:de,args:sa};throw new SyntaxError("Function names must be all upper-case")}return I==="-"?{type:"term",name:de,attr:Pe,args:[]}:{type:"mesg",name:de,attr:Pe}}return ju()}function Re(){let I=fe();return I.type!=="mesg"?I:z(Bs)?{type:"narg",name:I.name,value:ju()}:I}function eu(){let I;return z(Ls,SyntaxError),I=h(j0)?wu():{type:"str",value:H($n)},z(ul,SyntaxError),I}function ju(){if(h(j0))return wu();if(s[f]==='"')return(function(){y('"',SyntaxError);let I="";for(;;){if(I+=H(Kn),s[f]!=="\\"){if(y('"'))return{type:"str",value:I};throw new SyntaxError("Unclosed string literal")}I+=Qu()}})();throw new SyntaxError("Invalid expression")}function wu(){let[,I,de=""]=M(j0),Pe=de.length;return{type:"num",value:parseFloat(I),precision:Pe}}function Qu(){if(h(el))return H(el);if(h(Yn)){let[,I,de]=M(Yn),Pe=parseInt(I||de,16);return Pe<=55295||57344<=Pe?String.fromCodePoint(Pe):"�"}throw new SyntaxError("Unknown escape sequence")}function en(){let I=f;switch(z(Fs),s[f]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return yt(s.slice(I,f))}return s[f-1]===" "&&yt(s.slice(I,f))}function B0(I,de){return I.replace(de,"")}function yt(I){let de=I.replace(Jn,`
`),Pe=_s.exec(I)[1].length;return new z0(de,Pe)}}}class z0{constructor(s,f){this.value=s,this.length=f}}const Fu=new RegExp("^([a-z]{2,3}|\\*)(?:-([a-z]{4}|\\*))?(?:-([a-z]{2}|\\*))?(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))?$","i");class Hu{constructor(s){const f=Fu.exec(s.replace(/_/g,"-"));if(!f)return void(this.isWellFormed=!1);let[,h,y,z,M]=f;h&&(this.language=h.toLowerCase()),y&&(this.script=y[0].toUpperCase()+y.slice(1)),z&&(this.region=z.toUpperCase()),this.variant=M,this.isWellFormed=!0}isEqual(s){return this.language===s.language&&this.script===s.script&&this.region===s.region&&this.variant===s.variant}matches(s,f=!1,h=!1){return(this.language===s.language||f&&this.language===void 0||h&&s.language===void 0)&&(this.script===s.script||f&&this.script===void 0||h&&s.script===void 0)&&(this.region===s.region||f&&this.region===void 0||h&&s.region===void 0)&&(this.variant===s.variant||f&&this.variant===void 0||h&&s.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(s=>s!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const s=(function(f){if(Object.prototype.hasOwnProperty.call(Mu,f))return new Hu(Mu[f]);const h=new Hu(f);return h.language&&$s.includes(h.language)?(h.region=h.language.toUpperCase(),h):null})(this.toString().toLowerCase());return!!s&&(this.language=s.language,this.script=s.script,this.region=s.region,this.variant=s.variant,!0)}}const Mu={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},$s=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function Vs(p,s,{strategy:f="filtering",defaultLocale:h}={}){const y=(function(z,M,H){const J=new Set,W=new Map;for(let ae of M)new Hu(ae).isWellFormed&&W.set(ae,new Hu(ae));e:for(const ae of z){const xe=ae.toLowerCase(),fe=new Hu(xe);if(fe.language!==void 0){for(const Re of W.keys())if(xe===Re.toLowerCase()){if(J.add(Re),W.delete(Re),H==="lookup")return Array.from(J);if(H==="filtering")continue;continue e}for(const[Re,eu]of W.entries())if(eu.matches(fe,!0,!1)){if(J.add(Re),W.delete(Re),H==="lookup")return Array.from(J);if(H==="filtering")continue;continue e}if(fe.addLikelySubtags()){for(const[Re,eu]of W.entries())if(eu.matches(fe,!0,!1)){if(J.add(Re),W.delete(Re),H==="lookup")return Array.from(J);if(H==="filtering")continue;continue e}}fe.clearVariants();for(const[Re,eu]of W.entries())if(eu.matches(fe,!0,!0)){if(J.add(Re),W.delete(Re),H==="lookup")return Array.from(J);if(H==="filtering")continue;continue e}if(fe.clearRegion(),fe.addLikelySubtags()){for(const[Re,eu]of W.entries())if(eu.matches(fe,!0,!1)){if(J.add(Re),W.delete(Re),H==="lookup")return Array.from(J);if(H==="filtering")continue;continue e}}fe.clearRegion();for(const[Re,eu]of W.entries())if(eu.matches(fe,!0,!0)){if(J.add(Re),W.delete(Re),H==="lookup")return Array.from(J);if(H==="filtering")continue;continue e}}}return Array.from(J)})(Array.from(p??[]).map(String),Array.from(s??[]).map(String),f);if(f==="lookup"){if(h===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");y.length===0&&y.push(h)}else h&&!y.includes(h)&&y.push(h);return y}function nl(){if(typeof Map.prototype.set!="function"){const p=Map,s=document.createElement("iframe");return s.style.display="none",document.documentElement.append(s),Map=s.contentWindow.Map,s.remove(),p}}function ct(p){p&&(Map=p)}function S0(p){const s=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof s=="string"&&s.indexOf("[native code]")>=0&&Function.prototype.toString.call(p).indexOf("[native code]")>=0}function Yt(){typeof Array.prototype.reduce=="function"&&S0(Array.prototype.reduce)||Object.defineProperty(Array.prototype,"reduce",{value(...p){if(p.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const s=p[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof s!="function")throw new TypeError(`${s} is not a function`);const f=Object(this),h=f.length>>>0;let y,z=0;if(p.length>=2)y=p[1];else{for(;z<h&&!(z in f);)z++;if(z>=h)throw new TypeError("Reduce of empty array with no initial value");y=f[z++]}for(;z<h;)z in f&&(y=s(y,f[z],z,f)),z++;return y}}),typeof Window=="function"&&S0(Window)||typeof window.constructor=="function"&&S0(window.constructor)&&(window.Window=window.constructor),window.Reflect!==void 0&&window.Reflect!==null||(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value:(p,s)=>p[s]}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(p,s,f){p[s]=f}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value:(p,s)=>s in p}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value:p=>[...Object.getOwnPropertyNames(p),...Object.getOwnPropertySymbols(p)]})}const Ia={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = حمِّل .swf
context-menu-copy-debug-info = انسخ معلومات التنقيح
context-menu-open-save-manager = افتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] عن ملحق رَفل ({ $version })
       *[other] عن رَفل ({ $version })
    }
context-menu-hide = أخفِ هذه القائمة
context-menu-exit-fullscreen = اخرج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = ادخل وضعية الشاشة الكاملة
context-menu-volume-controls = عناصر التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم يكن رفل قادرًا على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.
message-restored-from-bfcache =
    استعاد متصفحك محتوى الفلاش هذا من جلسة سابقة.
    للبدء من جديد، أعد تحميل الصفحة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = شغِّل على أي حال
continue = استمر
report-bug = بلِّغ عن علة
update-ruffle = تحديث رفل
ruffle-demo = العرض التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = اعرض ويكي رفل
enable-hardware-acceleration = يبدو أن تسريع الجهاز معطل. على الرغم من أن رفل قد يعمل، إلا أنه قد يكون بطيئًا جدًا. يمكنك معرفة كيفية تمكين تسريع الأجهزة بالنقر على الرابط أدناه:
enable-hardware-acceleration-link = الأسئلة الشائعة - تسريع أجهزة كروم
view-error-details = إعرض تفاصيل الخطأ
open-in-new-tab = إفتح في علامة تبويب جديدة
click-to-unmute = إنقر لإلغاء الكتم
clipboard-message-title = النسخ واللصق في رفل
clipboard-message-description =
    {$variant ->
       *[unsupported] متصفحك لا يدعم الوصول للحافظة الكاملة،
        [access-denied] تم رفض الوصول للحافظة،
    } لكن يمكنك إستخدام هذه الاختصارات دائمًا:
clipboard-message-copy = { " " } للنسخ
clipboard-message-cut = { " " } للقص
clipboard-message-paste = { " " } للصق
error-canvas-reload = تعذر إعادة التحميل مع مُصَير اللوحة عندما استُخدِم مُصَير اللوحة مسبقًا.
error-file-protocol =
    يبدو أنك تشغِّل رفل على البروتوكول "file:".
    لا يعمل هذا إذ تمنع المتصفحات الكثير من الميزات من العمل لأسباب أمنية.
    بدلًا من ذلك، ندعوك إلى إعداد خادوم محلي أو استخدام عارض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض رفل إلى مشكلة كبيرة بسبب الإعدادات الخاطئة لجافا سكرِبت.
    إذا كنت مسؤول الخادوم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضًا الرجوع إلى ويكي رفل للحصول على المساعدة.
error-wasm-not-found =
    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادوم، يرجى التأكد من أن الملف قد رُفِع بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعداد "publicPath": رجاءً راجع ويكي رفل للحصول على المساعدة.
error-wasm-mime-type =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    خادوم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي رفل للحصول على المساعدة.
error-invalid-swf =
    لا يمكن لرفل تحليل الملف المطلوب.
    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحًا.
error-swf-fetch =
    فشل رفل في تحميل ملف فلاش SWF.
    السبب الأكثر احتمالًا هو أن الملف لم يعد موجودًا، لذلك لا يوجد شيء ليحمله رفل.
    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.
error-swf-cors =
    فشل رفل في تحميل ملف فلاش SWF.
    من المحتمل أن إحضار الملف قد حُظِر بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-cors =
    فشل رفل في تحميل مكون ملف ".wasm" المطلوب.
    من المحتمل أن إحضار الملف قد حُظِر بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-invalid =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تحتوي على ملفات مفقودة أو غير صالحة لتشغيل رفل.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي رفل للحصول على المساعدة.
error-wasm-download =
    واجه رفل مشكلة كبيرة أثناء محاولتها التهيئة.
    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.
    وإلا يرجى الاتصال بمدير الموقع.
error-wasm-disabled-on-edge =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    لإصلاح هذه المشكلة، حاول فتح إعدادات متصفحك، ثم إنقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".
    هذا سيسمح لمتصفحك بتحميل الملفات ".wasm" المطلوبة.
    إذا إستمرت المشكلة، قد تحتاج إلى إستخدام متصفح أخر.
error-wasm-unsupported-browser =
    لا يدعم المتصفح الذي تستخدمه امتدادات WebAssembly الذي يتطلبه رفل لتشغيله.
    رجاءً انتقل لمتصفح داعم.
    يمكنك إيجاد لائحة للمتصفحات الداعمة في الويكي.
error-javascript-conflict =
    واجه رفل مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تستخدم كود جافا سكريبت الذي يتعارض مع رفل.
    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.
error-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).
error-csp-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-unknown =
    واجه رفل مشكلة كبيرة أثناء محاولة عرض محتوى الفلاش هذا.
    { $outdated ->
        [true] إذا كنت مسؤول الخادم، يرجى محاولة تحميل إصدار أحدث من رفل (النسخة الحالية قديمة: { $buildDate }).
       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا بلغت عن الخطأ!
    }
`,"save-manager.ftl":`save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف الحفظ هذا؟
save-reload-prompt =
    الطريقة الوحيدة لـ { $action ->
        [delete] حذف
       *[replace] إستبدال
    } ملف الحفظ هذا دون تعارض محتمل هي إعادة تحميل هذه الصفحة. هل ترغب في المتابعة على أي حال؟
save-download = حمّل
save-replace = إستبدل
save-delete = إحذف
save-backup-all = حمّل جميع ملفات الحفظ
`,"volume-controls.ftl":`volume-controls-mute = إكتم
volume-controls-unmute = ألغِ الكتم
`},"bs-BA":{"context_menu.ftl":`context-menu-download-swf = Preuzmite .swf datoteku
context-menu-copy-debug-info = Kopiraj informacije o otklanjanju grešaka
context-menu-open-save-manager = Otvori upravitelj spremanja
context-menu-about-ruffle =
    { $flavor ->
    [extension] O ekstenziji Ruffle-a ({ $version })
    *[other] O Ruffle-u ({ $version })
    }
context-menu-hide = Sakrij ovaj meni
context-menu-exit-fullscreen = Izlaz iz režima punog ekrana
context-menu-enter-fullscreen = Pređi na cijeli ekran
context-menu-volume-controls = Kontrole jačine zvuka
`,"messages.ftl":`message-cant-embed =
    Ruffle nije mogao pokrenuti Flash ugrađen na ovoj stranici.
    Možete pokušati otvoriti datoteku u zasebnoj kartici kako biste izbjegli ovaj problem.
message-restored-from-bfcache =
    Vaš preglednik je vratio ovaj Flash sadržaj iz prethodne sesije.
    Molimo vas da ponovo učitate stranicu za novi početak.
panic-title = Nešto je pošlo po zlu :(
more-info = Dodatne informacije
run-anyway = Ipak pokreni
continue = Nastavi
report-bug = Prijavi grešku
update-ruffle = Ažuriraj Ruffle
ruffle-demo = Web probna verzija
ruffle-desktop = Desktop aplikacija
ruffle-wiki = Pogledaj Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogućeno. Iako Ruffle možda radi, moguće je da je vrlo spor. Možete saznati kako omogućiti hardversko ubrzanje slijedeći link ispod:
enable-hardware-acceleration-link = Često postavljana pitanja - Hardversko ubrzanje u Chromeu
view-error-details = Prikaži detalje greške
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite da biste uključili zvuk
clipboard-message-title = Kopiranje i naljepljivanje u Ruffle-u
clipboard-message-description =
    { $variant ->
    *[unsupported] Vaš preglednik ne podržava potpuni pristup međuspremniku,
    [access-denied] Pristup međuspremniku je odbijen,
    } ali uvijek možete koristiti ove prečice:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za isijecanje
clipboard-message-paste = { " " } za lijepljenje
error-canvas-reload = Nije moguće ponovo učitati renderer kada je renderer već u upotrebi.
error-file-protocol =
    Izgleda da koristite Ruffle na protokolu "file:".
    Ovo ne funkcioniše jer preglednici blokiraju mnoge funkcije iz sigurnosnih razloga.
    Umjesto toga, preporučujemo vam da postavite lokalni server ili koristite web probnu verziju ili aplikaciju.
error-javascript-config =
    Ruffle je naišao na ozbiljan problem zbog pogrešne konfiguracije JavaScript-a.
    Ako ste administrator servera, preporučujemo vam da provjerite detalje greške kako biste saznali koji parametar uzrokuje problem. Također možete konsultovati Ruffle wiki za pomoć.
error-wasm-not-found =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Ako ste administrator servera, provjerite je li datoteka ispravno otpremljena.
    Ako problem i dalje postoji, možda ćete morati koristiti postavku "publicPath": obratite se Ruffle wiki stranici za pomoć.
error-wasm-mime-type =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovaj web server ne poslužuje ".wasm" datoteke s ispravnim MIME tipom.
    Ako ste administrator servera, molimo vas da se obratite Ruffle wiki stranici za pomoć.
error-invalid-swf =
    Ruffle ne može analizirati traženu datoteku.
    Najvjerovatniji razlog je taj što tražena datoteka nije važeći SWF.
error-swf-fetch =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Najvjerovatniji razlog je taj što datoteka više ne postoji, tako da Ruffle nema šta učitati.
    Pokušajte kontaktirati administratora web stranice za pomoć.
error-swf-cors =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Pristup za preuzimanje je vjerovatno blokiran CORS politikom.
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomoć.
error-wasm-cors =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Pristup dohvatu je vjerovatno blokiran CORS politikom.
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomoć.
error-wasm-invalid =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ovoj stranici nedostaju ili su datoteke nevažeće za pokretanje Rufflea.
    Ako ste administrator servera, pogledajte Ruffle wiki za pomoć.
error-wasm-download =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovo se često može riješiti jednostavnim ponovnim učitavanjem stranice.
    U suprotnom, kontaktirajte administratora stranice.
error-wasm-disabled-on-edge =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Da biste riješili ovaj problem, pokušajte otvoriti postavke preglednika, kliknuti na "Privatnost, pretraga i usluge", pomaknuti se prema dolje i isključiti "Poboljšanje web sigurnosti".
    Ovo će omogućiti vašem pregledniku da učita potrebne datoteke ".wasm".
    Ako problem i dalje postoji, možda ćete morati koristiti drugi preglednik.
error-wasm-unsupported-browser =
    Preglednik koji koristite ne podržava WebAssembly ekstenzije potrebne za rad Ruffle-a.
    Molimo vas da pređete na podržani preglednik.
    Popis podržanih preglednika možete pronaći na Wiki stranici.
error-javascript-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ova stranica koristi JavaScript kod koji je u sukobu sa Ruffleom.
    Ako ste administrator servera, pozivamo vas da pokušate otpremiti datoteku na praznu stranicu.
error-javascript-conflict-outdated = Također možete pokušati prenijeti noviju verziju Rufflea koja bi mogla riješiti problem (trenutna verzija je zastarjela: { $buildDate }).
error-csp-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Politike sigurnosti sadržaja ovog web servera ne dozvoljavaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomoć.
error-unknown =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja prikazivanja ovog Flash sadržaja.
    { $outdated ->
    [true] Ako ste administrator servera, pokušajte prenijeti noviju verziju Rufflea (trenutna verzija je zastarjela: { $buildDate }).
    *[false] Ovo se ne bi trebalo dogoditi, pa bismo vam bili jako zahvalni ako biste prijavili grešku!
    }
`,"save-manager.ftl":`save-delete-prompt = Jeste li sigurni da želite izbrisati ovu sačuvanu datoteku?
save-reload-prompt =
    Jedini način da { $action ->
    [delete] izbrišete
    *[replace] zamijenite
    } ovu sačuvanu datoteku bez potencijalnog konflikta je da ponovo učitate ovaj sadržaj. Želite li ipak nastaviti?
save-download = Preuzmite
save-replace = Zamijeni
save-delete = Izbriši
save-backup-all = Preuzmi sve sačuvane datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isključi zvuk
volume-controls-unmute = Uključi zvuk
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer .swf
context-menu-copy-debug-info = Copia la informació de depuració
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensió de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest menú
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pàgina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = Més informació
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostració web
ruffle-desktop = Aplicació d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
enable-hardware-acceleration-link = FAQ - Acceleració per Hardware a Chrome
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
clipboard-message-title = Copiar i enganxar en Ruffle
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Això no funcionarà perquè els navegadors bloquegen moltes característiques per raons de seguretat. En comptes d'això, us suggerim que configureu un servidor local o bé utilitzeu la demostració web o l'aplicació d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuració JavaScript errònia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el paràmetre culpable.
    També podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, és possible que hàgiu d'utilitzar el parámetre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no està servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-invalid-swf =
    Ruffle no ha pogut llegir el fitxer sol·licitat.
    La raó més probable és que no sigui un fitxer SWF vàlid.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La raó més probable és que el fitxer ja no existeixi, així que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no són vàlids per a l'execució de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Això sovint això pot resoldre's sol, així que podeu provar de recarregar la pàgina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els paràmetres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenció de seguiment".
    Això permetrà que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = També podeu provar de carregar una versió més recent de Ruffle que podria resoldre el problema (la compilació actual està desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La política de seguretat del contingut (CSP) no permet l'execució del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versió més recent de Ruffle (la compilació actual està desactualitzada: { $buildDate }).
       *[false] Això no hauria d'haver passat, així que us agrairíem molt que n'informéssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'única forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte és recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls-mute = Silenci
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = Stáhnout .swf
context-menu-copy-debug-info = Zkopírovat debug info
context-menu-open-save-manager = Otevřít správce uložení
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle rozšíření ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrýt menu
context-menu-exit-fullscreen = Ukončit režim celé obrazovky
context-menu-enter-fullscreen = Přejít do režimu celé obrazovky
context-menu-volume-controls = Ovládání hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vložený na této stránce.
    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.
message-restored-from-bfcache =
    Váš prohlížeč obnovil tento Flash obsah z předchozí relace.
    Chcete-li začít znovu, znovu načtěte stránku.
panic-title = Něco se pokazilo :(
more-info = Další informace
run-anyway = Přesto spustit
continue = Pokračovat
report-bug = Nahlásit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
enable-hardware-acceleration = Zdá se, že hardwarová akcelerace je vypnutá. I když Ruffle funguje správně, může být nepřiměřeně pomalý. Jak povolit hardwarovou akceleraci zjistíte na tomto odkazu:
enable-hardware-acceleration-link = Časté dotazy - Hardwarová akcelerace Chrome
view-error-details = Zobrazit podrobnosti o chybě
open-in-new-tab = Otevřít na nové kartě
click-to-unmute = Kliknutím zrušíte ztlumení
clipboard-message-title = Kopírování a vkládání v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prohlížeč nepodporuje plný přístup ke schránce,
        [access-denied] Přístup ke schránce byl odepřen,
    } ale místo toho můžete vždy použít tyto zkratky:
clipboard-message-copy = { " " } pro kopírování
clipboard-message-cut = { " " } pro vystřihování
clipboard-message-paste = { " " } pro vkládání
error-canvas-reload = Nelze znovu načíst pomocí vykreslovače plátna, pokud je vykreslovač plátna již používán.
error-file-protocol =
    Zdá se, že používáte Ruffle na protokolu "file:".
    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.
    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.
    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.
    Pomoc můžete získat také na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.
    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém při pokusu o inicializaci.
    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemůže zpracovat požadovaný soubor.
    Nejpravděpodobnějším důvodem je, že požadovaný soubor není platným souborem SWF.
error-swf-fetch =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.
    Zkuste požádat o pomoc správce webu.
error-swf-cors =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém při pokusu o inicializaci.
    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.
    V opačném případě kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.
    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.
    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.
error-wasm-unsupported-browser =
    Prohlížeč, který používáte, nepodporuje rozšíření WebAssembly, které Ruffle vyžaduje ke spuštění.
    Přejděte na podporovaný prohlížeč.
    Seznam podporovaných prohlížečů naleznete na Wiki.
error-javascript-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.
    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.
error-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).
         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?
save-reload-prompt =
    Jediný způsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?
save-download = Stáhnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = Stáhnout všechny soubory s uloženými pozicemi
`,"volume-controls.ftl":`volume-controls-mute = Ztlumit
volume-controls-unmute = Zrušit ztlumení
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = .swf herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager öffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] Über Ruffle Erweiterung ({ $version })
       *[other] Über Ruffle ({ $version })
    }
context-menu-hide = Menü ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautstärke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte den Flash in dieser Seite nicht ausführen.
    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.
message-restored-from-bfcache = Dein Browser hat den Flash-Inhalt aus einer vorherigen Sitzung wiederhergestellt. Um von neuem zu beginnen, lade die Seite neu.
panic-title = Etwas ist schief gelaufen
more-info = Weitere Informationen
run-anyway = Trotzdem ausführen
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktuallisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
enable-hardware-acceleration = Es sieht so aus, als ob die Hardwarebeschleunigung deaktiviert ist. Ruffle kann zwar funktionieren, könnte aber sehr langsam sein. Wie Sie die Hardwarebeschleunigung aktivieren können, erfahren Sie unter dem folgenden Link:
enable-hardware-acceleration-link = FAQ - Chrome Hardwarebeschleunigung
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Klicke zum Entmuten
clipboard-message-title = Kopieren und Einfügen in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Dein Browser unterstützt keinen vollständigen Zugriff auf die Zwischenablage,
        [access-denied] Zugriff auf die Zwischenablage wurde verweigert,
    } aber du kannst stattdessen auch diese Tastenkombinationen verwenden:
clipboard-message-copy = { " " } zum Kopieren
clipboard-message-cut = { " " } zum Ausschneiden
clipboard-message-paste = { " " } zum Einfügen
error-canvas-reload = Canvas Renderer kann nicht neu geladen werden, während er in Verwendung ist.
error-file-protocol =
    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausführen.
    Jedoch werden aus Sicherheitsgründen viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.
    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.
error-javascript-config =
    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gestoßen.
    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.
    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.
error-wasm-mime-type =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-invalid-swf =
    Ruffle konnte die angegebene Datei nicht lesen.
    Am wahrscheinlichsten ist die angegebene Datei keine gültige SWF.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.
    Kontaktieren Sie den Website-Administrator für Hilfe.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-invalid =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-download =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.
    Andernfalls kontaktieren Sie bitte den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf "Privatsphäre, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.
    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.
    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.
error-wasm-unsupported-browser =
    Der verwendete Browser unterstützt die WebAssembly Erweiterungen nicht welche Ruffle zur Ausführung benötigt.
    Bitte verwende einen unterstützen Browser.
    Du kannst eine Liste der unterstützten Browser in der Wiki finden.
error-javascript-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.
    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).
error-csp-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-unknown =
    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.
    { $outdated ->
        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).
       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?
save-reload-prompt =
    Der einzige Weg zu { $action ->
        [delete] löschen
       *[replace] ersetzen
    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = Löschen
save-backup-all = Alle gespeicherten Dateien herunterladen
`,"volume-controls.ftl":`volume-controls-mute = Stummschalten
volume-controls-unmute = Stummschaltung aufheben
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download SWF
context-menu-copy-debug-info = Copy Debug Info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide This Menu
context-menu-exit-fullscreen = Exit Full Screen
context-menu-enter-fullscreen = Enter Full Screen
context-menu-volume-controls = Volume Controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
message-restored-from-bfcache =
    Your browser restored this Flash content from a previous session.
    To start fresh, reload the page.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is disabled. While Ruffle may work, it could be very slow. You can find out how to enable hardware acceleration by following the link below:
enable-hardware-acceleration-link = FAQ - Chrome Hardware Acceleration
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
clipboard-message-title = Copying and pasting in Ruffle
clipboard-message-description =
    { $variant ->
        *[unsupported] Your browser does not support full clipboard access,
        [access-denied] Access to the clipboard has been denied,
    } but you can always use these shortcuts instead:
clipboard-message-copy = { " " } for copy
clipboard-message-cut = { " " } for cut
clipboard-message-paste = { " " } for paste
error-canvas-reload = Cannot reload with the canvas renderer when the canvas renderer is already in use.
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-invalid-swf =
    Ruffle cannot parse the requested file.
    The most likely reason is that the requested file is not a valid SWF.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-wasm-unsupported-browser =
    The browser you are using does not support the WebAssembly extensions Ruffle requires to run.
    Please switch to a supported browser.
    You can find a list of supported browsers on the Wiki.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files
`,"volume-controls.ftl":`volume-controls-mute = Mute
volume-controls-unmute = Unmute
`},"eo-UY":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
context-menu-copy-debug-info = Copiar Información de depuración
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensión de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este menú
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta página.
    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.
message-restored-from-bfcache =
    Su navegador ha recuperado este contenido Flash de una sesión anterior.
    Para empezar de cero, refresque la página.
panic-title = Algo salió mal :(
more-info = Más info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostración de web
ruffle-desktop = Aplicación de desktop
ruffle-wiki = Ver la página wiki
enable-hardware-acceleration = Al parecer, la aceleración de hardware está deshabilitada. Puede que Ruffle funcione, pero este podría funcionar muy lentamente. Puedes averiguar como habilitar aceleración de hardware presionando el enlace:
enable-hardware-acceleration-link = Preguntas frecuentes sobre la aceleración de hardware en Chrome
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pestaña nueva
click-to-unmute = Haz clic para dejar de silenciar
clipboard-message-title = Para copiar y pegar en Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Este navegador no apoya acceso completo al portapapeles,
        [access-denied] Se ha denegado el acceso al portapapeles,
    } pero siempre se puede utilizar estos atajos:
clipboard-message-copy = Para copiar
clipboard-message-cut = Para cortar
clipboard-message-paste = Para pegar
error-canvas-reload = No se puede recargar con el renderizado de lienzo cuando este ya está en uso.
error-file-protocol =
    Parece que está ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.
    También puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuración "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-invalid-swf = Ruffle no puede analizar el archivo solicitado. La razón más probable es que no es un archivo válido SWF.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.
    De lo contrario, póngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en "Privacidad, búsqueda y servicios", desplazándote y apagando "Mejore su seguridad en la web".
    Esto permitirá a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-wasm-unsupported-browser =
    Este navegador no apoya las extensiones de WebAssembly que Ruffle requiere para ejecutar.
    Por favor, cambia a un navegador apoyado.
    Se puede ver una lista de navegadores apoyados en el Wiki.
error-javascript-conflict =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.
error-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontró un problema al intentar inicializarse.
    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm".
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La única forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Desmutear
`},"fi-FI":{"context_menu.ftl":`context-menu-download-swf = Lataa .swf
context-menu-copy-debug-info = Kopioi vianjäljitystiedot
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tietoja – Ruffle-laajennus ({ $version })
       *[other] Tietoja – Ruffle ({ $version })
    }
context-menu-hide = Piilota tämä valikko
context-menu-exit-fullscreen = Poistu koko näytön tilasta
context-menu-enter-fullscreen = Siirry koko näytön tilaan
context-menu-volume-controls = Äänenvoimakkuuden säätö
`,"messages.ftl":`message-restored-from-bfcache =
    Selaimesi palautti tämän Flash-sisällön aiemmasta istunnosta.
    Aloita alusta lataamalla sivu uudelleen.
panic-title = Jokin meni pieleen :(
more-info = Lisätietoja
run-anyway = Suorita silti
continue = Jatka
report-bug = Ilmoita ongelmasta
update-ruffle = Päivitä Ruffle
ruffle-desktop = Työpöytäsovellus
ruffle-wiki = Näytä Rufflen wiki
enable-hardware-acceleration = Vaikuttaa siltä, että laitteistokiihdytys on pois käytöstä. Ruffle saattaa silti toimia, mutta hitaasti. Lisätietoja laitteistokiihdytyksen ottamisesta käyttöön on saatavilla alla olevan linkin kautta:
view-error-details = Näytä virheen tiedot
open-in-new-tab = Avaa uudessa välilehdessä
click-to-unmute = Napsauta palauttaaksesi äänet
clipboard-message-title = Kopiointi ja liittäminen Rufflessa
clipboard-message-copy = { " " } kopioi
clipboard-message-cut = { " " } leikkaa
clipboard-message-paste = { " " } liittää
error-wasm-unsupported-browser =
    Käyttämäsi selain ei tue Rufflen vaatimia WebAssembly-laajennuksia.
    Vaihda tuettuun selaimeen.
    Lista tuetuista selaimista on koottu wikiin.
`,"save-manager.ftl":`save-delete-prompt = Haluatko varmasti poistaa tämän tallennuksen?
save-reload-prompt =
    Ainoa tapa { $action ->
        [delete] poistaa
       *[replace] korvata
    } tämä tiedosto ilman mahdollista ristiriitaa on ladata sisältö uudelleen. Haluatko jatkaa silti?
save-download = Lataa
save-replace = Korvaa
save-delete = Poista
`,"volume-controls.ftl":`volume-controls-mute = Mykistä
volume-controls-unmute = Poista mykistys
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que .swf
context-menu-copy-debug-info = Copier les infos de débogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] À propos de l'Extension Ruffle ({ $version })
       *[other] À propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein écran
context-menu-enter-fullscreen = Afficher en plein écran
context-menu-volume-controls = Contrôles du volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.
message-restored-from-bfcache =
    Votre navigateur a restauré ce contenu Flash d'une session antérieure.
    Rechargez la page pour repartir de zéro.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Exécuter quand même
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre à jour Ruffle
ruffle-demo = Démo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
enable-hardware-acceleration = Il semblerait que l'accélération matérielle soit désactivée. Cela n'empêche généralement pas Ruffle de fonctionner, mais il peut être beaucoup plus lent. Vous pouvez trouver comment activer l'accélération matérielle en suivant le lien ci-dessous :
enable-hardware-acceleration-link = FAQ - Accélération matérielle dans Chrome
view-error-details = Détails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
clipboard-message-title = Copier et coller dans Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Votre navigateur ne prend pas en charge l'accès au presse-papiers,
        [access-denied] L'accès au presse-papiers a été refusé,
    } mais vous pouvez toujours utiliser ces raccourcis clavier à la place :
clipboard-message-copy = { " " } pour copier
clipboard-message-cut = { " " } pour couper
clipboard-message-paste = { " " } pour coller
error-canvas-reload = Impossible de recharger avec le moteur de rendu canvas lorsque celui-ci est déjà en cours d'utilisation.
error-file-protocol =
    Il semblerait que vous exécutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.
    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.
    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.
    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.
    Si le problème persiste, il vous faudra peut-être utiliser le paramètre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-invalid-swf =
    Ruffle n'a pas été en mesure de lire le fichier demandé.
    La raison la plus probable est que ce fichier n'est pas un SWF valide.
error-swf-fetch =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.
    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur "Confidentialité, recherche et services". Puis, vers le bas de la page, désactivez l'option "Améliorez votre sécurité sur le web".
    Cela permettra à votre navigateur de charger les fichiers ".wasm".
    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.
error-wasm-unsupported-browser =
    Votre navigateur ne prend pas en charge les extensions WebAssembly nécessaires au fonctionnement de Ruffle.
    Veuillez utiliser un navigateur les prenant en charge.
    Vous pouvez trouver une liste de navigateurs fonctionnant avec Ruffle sur le wiki.
error-javascript-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.
    { $outdated ->
        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).
       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule façon de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?
save-download = Télécharger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = Télécharger tous les fichiers de sauvegarde
`,"volume-controls.ftl":`volume-controls-mute = Rendre muet
volume-controls-unmute = Rendre audible
`},"gl-ES":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הswf.
context-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות
context-menu-open-save-manager = פתח את מנהל השמירות
context-menu-about-ruffle =
    { $flavor ->
        [extension] אודות התוסף Ruffle ({ $version })
       *[other] אודות Ruffle ({ $version })
    }
context-menu-hide = הסתר תפריט זה
context-menu-exit-fullscreen = יציאה ממסך מלא
context-menu-enter-fullscreen = מסך מלא
context-menu-volume-controls = בקרת עוצמת קול
`,"messages.ftl":`message-cant-embed =
    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.
    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.
panic-title = משהו השתבש :(
more-info = מידע נוסף
run-anyway = הפעל בכל זאת
continue = המשך
report-bug = דווח על תקלה
update-ruffle = עדכן את Ruffle
ruffle-demo = הדגמה
ruffle-desktop = אפליקציית שולחן עבודה
ruffle-wiki = ראה את Ruffle wiki
enable-hardware-acceleration = נראה שהאצת החומרה שלך לא מופעלת. בעוד שRuffle עשוי לעבוד, הוא יכול להיות איטי. תוכל לראות כיצד להפעיל תכונה זו בלחיצה על הלינק הזה:
enable-hardware-acceleration-link = שאלות נפוצות - האצת החומרה של Chrome
view-error-details = ראה פרטי שגיאה
open-in-new-tab = פתח בכרטיסייה חדשה
click-to-unmute = לחץ על מנת לבטל השתקה
clipboard-message-title = העתקה והדבקה בRuffle
clipboard-message-copy = { " " } עבור העתקה
clipboard-message-cut = { " " } עבור גזירה
clipboard-message-paste = { " " } עבור הדבקה
error-canvas-reload = לא ניתן לטעון מחדש עם מעבד הקנבס כאשר מעבד הקנבס כבר בשימוש.
error-file-protocol =
    נדמה שאתה מריץ את Ruffle תחת פרוטוקול "file:".
    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.
    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.
error-javascript-config =
    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.
    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.
    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-not-found =
    Ruffle נכשל לטעון את קובץ ה"wasm." הדרוש.
    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.
    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת "publicPath": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-mime-type =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    שרתו של אתר זה לא משייך קבצי ".wasm" עם סוג הMIME הנכון.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-invalid-swf =
    Ruffle לא יכול לנתח את הקובץ המבוקש.
    הסיבה הסבירה ביותר לבעיה זו היא בגלל שהקובץ המבוקש אינו SWF חוקי.
error-swf-fetch =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.
    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.
error-swf-cors =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-cors =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-invalid =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-download =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.
    אם לא, אנא פנה למנהל האתר.
error-wasm-disabled-on-edge =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על "אבטחה, חיפוש ושירות",
    גלול מטה, וכבה את "הגבר את האבטחה שלך ברשת".
    זה יאפשר לדפדפן שלך לטעון את קובץ ה".wasm" הדרוש.
    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.
error-wasm-unsupported-browser =
    הדפדפן שבו אתה משתמש אינו תומך בתוספי WebAssembly ש-Ruffle דורש כדי לפעול.
    אנא עבור לדפדפן נתמך.
    אתה יכול למצוא רשימה של דפדפנים נתמכים ב-Wiki שלנו.
error-javascript-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.
    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.
error-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).
error-csp-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה"wasm." הדרוש לפעול.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-unknown =
    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.
    { $outdated ->
        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).
       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!
    }
`,"save-manager.ftl":`save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?
save-reload-prompt =
    הדרך היחידה { $action ->
        [delete] למחוק
       *[replace] להחליף
    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?
save-download = הורדה
save-replace = החלפה
save-delete = מחיקה
save-backup-all = הורדת כל קבצי השמירה
`,"volume-controls.ftl":`volume-controls-mute = השתק
volume-controls-unmute = ביטול השתקה
`},"hr-HR":{"context_menu.ftl":`context-menu-download-swf = Preuzmi .swf datoteku
context-menu-copy-debug-info = Kopiraj informacije o otklanjanju pogrešaka
context-menu-open-save-manager = Otvori Upravitelj spremanja
context-menu-about-ruffle =
    { $flavor ->
    [extension] O proširenju Ruffle ({ $version })
    *[other] O Ruffle ({ $version })
    }
context-menu-hide = Sakrij ovaj izbornik
context-menu-exit-fullscreen = Izađi iz cijelog zaslona
context-menu-enter-fullscreen = Uđi u cijeli zaslon
context-menu-volume-controls = Kontrole glasnoće
`,"messages.ftl":`message-cant-embed =
    Ruffle nije uspio pokrenuti Flash ugrađen na ovoj stranici.
    Možete pokušati otvoriti datoteku u zasebnoj kartici kako biste izbjegli ovaj problem.
message-restored-from-bfcache =
    Vaš je preglednik vratio ovaj Flash sadržaj iz prethodne sesije.
    Za novi početak ponovno učitajte stranicu.
panic-title = Nešto je pošlo po zlu :(
more-info = Dodatne informacije
run-anyway = Svejedno pokreni
continue = Nastavi
report-bug = Prijavi grešku
update-ruffle = Ažurirajte Ruffle
ruffle-demo = Web demo
ruffle-desktop = Aplikacija za stolna računala
ruffle-wiki = Pogledajte Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogućeno. Iako Ruffle možda radi, mogao bi biti vrlo spor. Kako omogućiti hardversko ubrzanje možete saznati slijedeći donju poveznicu:
enable-hardware-acceleration-link = Često postavljana pitanja - Ubrzanje hardvera u Chromeu
view-error-details = Prikaži detalje o pogrešci
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite za uključivanje zvuka
clipboard-message-title = Kopiranje i lijepljenje u Ruffleu
clipboard-message-description =
    { $variant ->
       *[unsupported] Vaš preglednik ne podržava puni pristup međuspremniku,
        [access-denied] Pristup međuspremniku je uskraćen,
    } ali uvijek možete umjesto toga koristiti ove prečace:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za izrezivanje
clipboard-message-paste = { " " } za lijepljenje
error-canvas-reload = Nije moguće ponovno učitavanje s rendererom platna kada je renderer platna već u upotrebi.
error-file-protocol =
    Čini se da koristite Ruffle na protokolu "file:".
    Ovo ne radi jer preglednici blokiraju mnoge značajke iz sigurnosnih razloga.
    Umjesto toga, pozivamo vas da postavite lokalni poslužitelj ili koristite web demo ili desktop aplikaciju.
error-javascript-config =
    Ruffle je naišao na veliki problem zbog netočne konfiguracije JavaScripta.
    Ako ste administrator poslužitelja, pozivamo vas da provjerite detalje pogreške kako biste saznali koji je parametar uzrok problema. Također možete konzultirati Ruffle wiki za pomoć.
error-wasm-not-found =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Ako ste administrator poslužitelja, provjerite je li datoteka ispravno prenesena.
    Ako se problem nastavi, možda ćete morati upotrijebiti postavku "publicPath": za pomoć se obratite Ruffle wikiju.
error-wasm-mime-type =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovaj web poslužitelj ne poslužuje ".wasm" datoteke s ispravnom MIME vrstom.
    Ako ste administrator poslužitelja, obratite se Ruffle wiki stranici za pomoć.
error-invalid-swf =
    Ruffle ne može analizirati traženu datoteku.
    Najvjerojatniji razlog je taj što tražena datoteka nije valjani SWF.
error-swf-fetch =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Najvjerojatniji razlog je taj što datoteka više ne postoji, pa Ruffle nema što učitati.
    Pokušajte se obratiti administratoru web-mjesta za pomoć.
error-swf-cors =
    Ruffle nije uspio učitati Flash SWF datoteku.
    Pristup dohvaćanju vjerojatno je blokiran pravilom CORS.
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-wasm-cors =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Pristup dohvaćanju vjerojatno je blokiran CORS pravilom.
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-wasm-invalid =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Čini se da ovoj stranici nedostaju ili su datoteke nevažeće za pokretanje Rufflea.
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-wasm-download =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    To se često može samo riješiti, pa možete pokušati ponovno učitati stranicu.
    U suprotnom, obratite se administratoru web-mjesta.
error-wasm-disabled-on-edge =
    Ruffle nije uspio učitati potrebnu komponentu datoteke ".wasm".
    Da biste to riješili, pokušajte otvoriti postavke preglednika, kliknuti "Privatnost, pretraživanje i usluge", pomaknuti se prema dolje i isključiti "Poboljšajte sigurnost na webu".
    To će omogućiti vašem pregledniku da učita potrebne datoteke ".wasm".
    Ako se problem nastavi, možda ćete morati koristiti drugi preglednik.
error-wasm-unsupported-browser =
    Preglednik koji koristite ne podržava WebAssembly ekstenzije koje su potrebne za rad Rufflea.
    Molimo prebacite se na podržani preglednik.
    Popis podržanih preglednika možete pronaći na Wiki stranici.
error-javascript-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Čini se da ova stranica koristi JavaScript kod koji je u sukobu s Ruffleom.
    Ako ste administrator poslužitelja, pozivamo vas da pokušate učitati datoteku na praznoj stranici.
error-javascript-conflict-outdated = Također možete pokušati prenijeti noviju verziju Rufflea koja bi mogla zaobići problem (trenutna verzija je zastarjela: { $buildDate }).
error-csp-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Pravila sigurnosti sadržaja ovog web poslužitelja ne dopuštaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator poslužitelja, za pomoć se obratite Ruffle wikiju.
error-unknown =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja prikaza ovog Flash sadržaja.
    { $outdated ->
    [true] Ako ste administrator poslužitelja, pokušajte prenijeti noviju verziju Rufflea (trenutna verzija je zastarjela: { $buildDate }).
    *[false] Ovo se ne bi trebalo događati, pa bismo vam bili jako zahvalni ako biste prijavili grešku!
    }
`,"save-manager.ftl":`save-delete-prompt = Jeste li sigurni da želite izbrisati ovu spremljenu datoteku?
save-reload-prompt =
    Jedini način da { $action ->
    [delete] izbrišete
    *[replace] zamijenite
    } ovu datoteku za spremanje bez potencijalnog sukoba jest ponovno učitavanje ovog sadržaja. Želite li ipak nastaviti?
save-download = Preuzmite
save-replace = Zamijeni
save-delete = Izbriši
save-backup-all = Preuzmi sve spremljene datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isključi zvuk
volume-controls-unmute = Uključi zvuk
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = .swf fájl letöltése
context-menu-copy-debug-info = Hibakeresési információk másolása
context-menu-open-save-manager = Mentéskezelő megnyitása
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kiegészítő ({ $version }) névjegye
       *[other] A Ruffle ({ $version }) névjegye
    }
context-menu-hide = Ezen menü elrejtése
context-menu-exit-fullscreen = Kilépés a teljes képernyőből
context-menu-enter-fullscreen = Váltás teljes képernyőre
context-menu-volume-controls = Hangerőszabályzó
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.
    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.
message-restored-from-bfcache =
    A böngésző ezt a Flash tartalmat egy korábbi munkamenetből állította vissza.
    A tiszta induláshoz frissítse az oldalt.
panic-title = Valami baj történt :(
more-info = További információ
run-anyway = Futtatás mégis
continue = Folytatás
report-bug = Hiba jelentése
update-ruffle = Ruffle frissítése
ruffle-demo = Webes demó
ruffle-desktop = Asztali alkalmazás
ruffle-wiki = Ruffle Wiki megnyitása
enable-hardware-acceleration = Úgy tűnik, a hardveres gyorsítás ki van kapcsolva. Bár a Ruffle működhet, nagyon lassú lehet. Az alábbi hivatkozást követve megtudhatod, hogyan engedélyezd a hardveres gyorsítást:
enable-hardware-acceleration-link = GYIK - Chrome hardveres gyorsítás
view-error-details = Hiba részletei
open-in-new-tab = Megnyitás új lapon
click-to-unmute = Kattints a némítás feloldásához
clipboard-message-title = Másolás és beíllesztés a Ruffle-ben
clipboard-message-description =
    { $variant ->
       *[unsupported] A böngésződ nem támogatja a vágólaphoz való teljes hozzáférést,
        [access-denied] A vágólaphoz való hozzáférés el lett utasítva,
    } de mindig használhatod ezeket a gyorsbillentyűket helyette:
clipboard-message-copy = { " " } másoláshoz
clipboard-message-cut = { " " } kivágáshoz
clipboard-message-paste = { " " } beillesztéshez
error-canvas-reload = Újratöltés a canvas megjelenítővel nem lehetséges, ha már az van használatban.
error-file-protocol =
    Úgy tűnik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.
    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.
error-javascript-config =
    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.
    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.
    A Ruffle wikiben is találhatsz ehhez segítséget.
error-wasm-not-found =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.
    Ha a probléma továbbra is fennáll, előfordulhat, hogy a "publicPath" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez a webszerver a ".wasm" fájlokat nem a megfelelő MIME-típussal szolgálja ki.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-invalid-swf =
    A Ruffle nem tudta értelmezni a kért fájlt.
    Ennek a legvalószínűbb oka az, hogy a kért fájl nem érvényes SWF.
error-swf-fetch =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.
    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.
error-swf-cors =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-wasm-cors =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-invalid =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-download =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.
    Ellenkező esetben fordulj a webhely rendszergazdájához.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.
    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges ".wasm" fájlokat.
    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.
error-wasm-unsupported-browser =
    Az általad használt böngésző nem támogatja a Ruffle futtatásához szükséges WebAssembly kiegészítéseket.
    Kérlek, válts egy támogatott böngészőre.
    A támogatott böngészők listáját a Wikin találod.
error-javascript-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.
    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.
error-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-unknown =
    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan törölni akarod ezt a mentést?
save-reload-prompt =
    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->
        [delete] törléséhez
       *[replace] cseréjéhez
    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?
save-download = Letöltés
save-replace = Csere
save-delete = Törlés
save-backup-all = Az összes fájl letöltése
`,"volume-controls.ftl":`volume-controls-mute = Némítás
volume-controls-unmute = Némítás feloldása
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh .swf
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:".
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-swf-fetch =
    Ruffle gagal memuat file SWF Flash.
    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat file SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls-mute = Bisukan
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica .swf
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
message-restored-from-bfcache = Il tuo browser ha ripristinato il contenuto del Flash da una sessione precedente. Per iniziare da capo, ricarica la pagina.
panic-title = Qualcosa è andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala un bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo web
ruffle-desktop = Applicazione desktop
ruffle-wiki = Visualizza la wiki di Ruffle
enable-hardware-acceleration = Sembra che l'accelerazione hardware sia disabilitata. Sebbene Ruffle possa funzionare, potrebbe essere molto lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo il link seguente:
enable-hardware-acceleration-link = FAQ - Accelerazione hardware di Chrome
view-error-details = Visualizza dettagli errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
clipboard-message-title = Copiando e incollando su Ruffle
clipboard-message-description =
    { $variant ->
      *[unsupported] Il tuo browser non ha supporto per accesso completo degli appunti,
       [access-denied] Accesso agli appunti e stato negato,
    } ma puoi sempre usare le scorciatoie al loro posto:
clipboard-message-copy = { " " } per copiare
clipboard-message-cut = { " " } per tagliare
clipboard-message-paste = { " " } per incollare
error-canvas-reload = Impossibile ricaricare con il canvas renderer quando è in uso.
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.
    Puoi anche consultare la wiki di Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare la wiki di Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ".wasm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per aiuto.
error-invalid-swf =
    Ruffle non può leggere il file richiesto.
    La ragione più probabile è che il file non è un SWF valido.
error-swf-fetch =
    Ruffle non è riuscito a caricare il file Flash SWF.
    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non è riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, ricerca e servizi", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetterà al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-wasm-unsupported-browser =
    Il browser che stai usando non ha supporto per l'estensione WebAssembly che Ruffle richiede per funzionare.
    Per favore cambi con un browser supportato.
    Puoi trovare una lista di browser supportati nella Wiki.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle di wiki per aiuto.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls-mute = Silenzia
volume-controls-unmute = Riattiva l'audio
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swfをダウンロード
context-menu-copy-debug-info = デバッグ情報をコピー
context-menu-open-save-manager = セーブマネージャーを開く
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle拡張機能について ({ $version })
       *[other] Ruffleについて ({ $version })
    }
context-menu-hide = メニューを隠す
context-menu-exit-fullscreen = フルスクリーンを終了
context-menu-enter-fullscreen = フルスクリーンにする
context-menu-volume-controls = 音量調節
`,"messages.ftl":`message-cant-embed =
    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。
    別のタブでファイルを開くことで、この問題を解決できるかもしれません。
message-restored-from-bfcache =
    ブラウザは、前回のセッションからFlashコンテンツを復元しました。
    最初から開始するには、ページを再読み込みしてください。
panic-title = エラーが発生しました :(
more-info = 詳細情報
run-anyway = とにかく実行する
continue = 続行
report-bug = バグを報告
update-ruffle = Ruffleを更新
ruffle-demo = Webデモ
ruffle-desktop = デスクトップアプリ
ruffle-wiki = Ruffle Wikiを閲覧
enable-hardware-acceleration = ハードウェア アクセラレーションが無効になっているようです。Ruffle は動作するかもしれませんが、非常に遅くなる可能性があります。ハードウェア アクセラレーションを有効にする方法については、以下のリンクを参照してください。
enable-hardware-acceleration-link = よくある質問 - Chromeのハードウェア アクセラレーション
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
clipboard-message-title = Ruffleでのコピーと貼り付け
clipboard-message-description =
    { $variant ->
       *[unsupported] お使いのブラウザはクリップボードへのフルアクセスをサポートしていません。
        [access-denied] クリップボードへのアクセスが拒否されました。
    } 代わりに、以下のショートカットを利用できます:
clipboard-message-copy = { " " } : コピー
clipboard-message-cut = { " " } : 切り取り
clipboard-message-paste = { " " } : 貼り付け
error-canvas-reload = canvasレンダラ使用中のため、canvasレンダラによる再読み込みはできません。
error-file-protocol =
    Ruffleを"file:"プロトコルで使用しているようです。
    ブラウザはセキュリティ上の理由から多くの機能を制限しているため、正しく動作しません。
    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。
error-javascript-config =
    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。
    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。
    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。
error-wasm-not-found =
    Ruffleは、必要な「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    サーバーの管理者は、ファイルが正しくアップロードされているか確認をしてください。問題が解決しない場合は、「publicPath」の設定が必要かもしれません。Ruffleのwikiを参照してください。
error-wasm-mime-type =
    Ruffleの初期化中に大きな問題が発生しました。
    このWebサーバーは「.wasm」ファイルを正しいMIMEタイプで提供していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-invalid-swf =
    Ruffle はリクエストされたファイルのパースに失敗しました。
    最も考えられる原因は、ファイルが有効な SWF でないことです。
error-swf-fetch =
    RuffleがFlash SWFファイルの読み込みに失敗しました。
    読み込むべきファイルが既に存在していないことが原因である可能性が高いです。
    Webサイトの管理者にお問い合わせください。
error-swf-cors =
    RuffleはSWFファイルの読み込みに失敗しました。
    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。
    サーバー管理者の方は、Ruffleのwikiを参照してください。
error-wasm-cors =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。
    サーバーの管理者は、Ruffle wikiを参照してください。
error-wasm-invalid =
    Ruffleの初期化時に重大な問題が発生しました。
    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-download =
    Ruffleの初期化時に重大な問題が発生しました。
    この問題は自然に解決する場合があるため、ページの再読み込みを試してください。
    それでも解決しない場合は、Webサイトの管理者にお問い合わせください。
error-wasm-disabled-on-edge =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    問題解決のため、ブラウザーの設定画面から、「プライバシー、検索、サービス」をクリックし、下にスクロールして「Web上のセキュリティを強化する」をオフにしてみてください。
    必要となる「.wasm」ファイルの読み込みが許可されます。
    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。
error-wasm-unsupported-browser =
    現在使用中のブラウザは、Ruffleの動作に必要なWebAssembly拡張をサポートしていません。
    サポートされているブラウザをご利用ください。
    サポートされているブラウザ一覧は、Wikiに記載されています。
error-javascript-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。
    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。
error-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })
error-csp-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-unknown =
    Flashコンテンツを表示する際にRuffleで問題が発生しました。
    { $outdated ->
        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。
       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!
    }
`,"save-manager.ftl":`save-delete-prompt = このセーブファイルを削除してもよろしいですか?
save-reload-prompt =
    セーブファイルを競合の可能性なく { $action ->
        [delete] 削除する
       *[replace] 置き換える
    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？
save-download = ダウンロード
save-replace = 置き換え
save-delete = 削除
save-backup-all = すべてのセーブファイルをダウンロード
`,"volume-controls.ftl":`volume-controls-mute = ミュート
volume-controls-unmute = ミュート解除
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = .swf 다운로드
context-menu-copy-debug-info = 디버그 정보 복사
context-menu-open-save-manager = 저장 관리자 열기
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle 확장 프로그램 정보 ({ $version })
       *[other] Ruffle 정보 ({ $version })
    }
context-menu-hide = 이 메뉴 숨기기
context-menu-exit-fullscreen = 전체화면 나가기
context-menu-enter-fullscreen = 전체화면으로 열기
context-menu-volume-controls = 음량 조절
`,"messages.ftl":`message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.
message-restored-from-bfcache =
    브라우저가 이전 세션에서 플래시 콘텐츠를 복원했습니다.
    새로 시작하려면 페이지를 새로 고침하세요.
panic-title = 문제가 발생했습니다 :(
more-info = 추가 정보
run-anyway = 그래도 실행하기
continue = 계속하기
report-bug = 버그 제보
update-ruffle = Ruffle 업데이트
ruffle-demo = 웹 데모
ruffle-desktop = 데스크톱 애플리케이션
ruffle-wiki = Ruffle 위키 보기
enable-hardware-acceleration = 하드웨어 가속이 비활성화되어 있는 것 같습니다. Ruffle은 계속 작동하지만 매우 느릴 수 있습니다. 아래 링크를 참고하여 하드웨어 가속을 활성화하는 방법을 찾아보세요:
enable-hardware-acceleration-link = FAQ - 크롬 하드웨어 가속
view-error-details = 오류 세부 정보 보기
open-in-new-tab = 새 탭에서 열기
click-to-unmute = 클릭하여 음소거 해제
clipboard-message-title = Ruffle에서 복사하고 붙여넣기
clipboard-message-description =
    { $variant ->
       *[unsupported] 이 브라우저는 클립보드 액세스를 지원하지 않습니다,
        [access-denied] 클립보드 액세스가 거절되었습니다,
    } 하지만 다음 단축키를 대신 사용할 수 있습니다:
clipboard-message-copy = { " " } 복사
clipboard-message-cut = { " " } 잘라내기
clipboard-message-paste = { " " } 붙여넣기
error-canvas-reload = 캔버스 렌더러가 이미 사용 중인 경우 캔버스 렌더러로 다시 로드할 수 없습니다.
error-file-protocol =
    Ruffle을 "file:" 프로토콜에서 실행하고 있는 것으로 보입니다.
    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.
    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.
error-javascript-config =
    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.
    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.
    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.
error-wasm-not-found =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.
    문제가 지속된다면 "publicPath" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.
error-wasm-mime-type =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버는 올바른 MIME 유형의 ".wasm" 파일을 제공하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.
error-invalid-swf =
    Ruffle이 요청한 파일을 분석하지 못했습니다.
    요청한 파일이 유효한 SWF 파일이 아닐 가능성이 높습니다.
error-swf-fetch =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.
    웹사이트 관리자에게 문의하여 도움을 받아보세요.
error-swf-cors =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-cors =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-invalid =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-download =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.
    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.
error-wasm-disabled-on-edge =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    이를 해결하려면 브라우저 설정에서 "개인 정보, 검색 및 서비스"를 클릭한 후, 하단으로 스크롤하여 "웹에서 보안 강화" 기능을 꺼야 합니다.
    이는 필요한 ".wasm" 파일을 브라우저에서 로드할 수 있도록 허용합니다.
    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.
error-wasm-unsupported-browser =
    사용 중인 브라우저에서 Ruffle이 필요한 웹 어셈블리 확장을 지원하지 않습니다.
    지원되는 브라우저로 전환하세요. 지원되는 브라우저 목록은 위키에서 확인할 수 있습니다.
error-javascript-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.
    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.
error-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).
error-csp-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버의 CSP(Content Security Policy) 정책이 ".wasm" 필수 구성요소를 실행하는 것을 허용하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-unknown =
    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.
    { $outdated ->
        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).
       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!
    }
`,"save-manager.ftl":`save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?
save-reload-prompt =
    \b이 파일을 잠재적인 충돌 없이 { $action ->
        [delete] 삭제
       *[replace] 교체
    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?
save-download = 다운로드
save-replace = 교체
save-delete = 삭제
save-backup-all = 모든 저장 파일 다운로드
`,"volume-controls.ftl":`volume-controls-mute = 음소거
volume-controls-unmute = 음소거 해제
`},"nb-NO":{"context_menu.ftl":`context-menu-download-swf = Last ned .swf
context-menu-copy-debug-info = Kopier feilsøkningsinfo
context-menu-open-save-manager = Åpne lagringsadministrasjon
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillegget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Skjul denne menyen
context-menu-exit-fullscreen = Avslutt fullskjermmodus
context-menu-enter-fullscreen = Fullskjermmodus
context-menu-volume-controls = Justering av lydnivå
`,"messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":`volume-controls-mute = Demp
volume-controls-unmute = Skru på lyd
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = .swf downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Volumeregelaars
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
message-restored-from-bfcache =
    Je browser heeft deze Flash-inhoud uit een eerdere sessie hersteld.
    Herlaad de pagina voor een frisse start.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
enable-hardware-acceleration = Het lijkt erop dat hardwareversnelling is uitgeschakeld. Ruffle zou hierdoor erg traag kunnen zijn. In de link hieronder wordt uitgelegd hoe je hardwareversnelling kunt inschakelen:
enable-hardware-acceleration-link = FAQ - Chrome Hardwareversnelling
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
clipboard-message-title = Kopiëren en plakken in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Je browser heeft geen ondersteuning voor volledige toegang tot het klembord,
        [access-denied] Toegang tot het klembord werd geweigerd,
    } maar je kunt altijd nog de volgende sneltoetsen gebruiken:
clipboard-message-copy = { " " } om te kopiëren
clipboard-message-cut = { " " } om te knippen
clipboard-message-paste = { " " } om te plakken
error-canvas-reload = De canvas renderer kan niet herladen worden wanneer deze al in gebruik is.
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-invalid-swf =
    Ruffle kon het gevraagde bestand niet verwerken.
    Waarschijnlijk is het geen geldig SWF bestand.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-wasm-unsupported-browser =
    De browser die je gebruikt ondersteunt de WebAssembly extensies die Ruffle nodig heeft niet.
    Gebruik alsjeblieft een ondersteunde browser.
    Je kunt een lijst aan ondersteunde browsers vinden op de Wiki.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls-mute = Dempen
volume-controls-unmute = Dempen opheffen
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otwórz menadżer zapisów
context-menu-about-ruffle =
    { $flavor ->
        [extension] O rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Opuść tryb pełnoekranowy
context-menu-enter-fullscreen = Tryb pełnoekranowy
context-menu-volume-controls = Sterowanie głośnością
`,"messages.ftl":`message-cant-embed =
    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.
    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.
message-restored-from-bfcache =
    Twoja przeglądarka przywróciła tę zawartość Flash z poprzedniej sesji.
    Aby zacząć od nowa, odśwież stronę.
panic-title = Coś poszło nie tak :(
more-info = Więcej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zgłoś błąd
update-ruffle = Zaktualizuj Ruffle
ruffle-demo = Webowe demo
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
enable-hardware-acceleration = Wygląda na to, że akceleracja grafiki jest wyłączona. Chociaż Ruffle może działać, może być bardzo powolny. Możesz dowiedzieć się, jak włączyć akcelerację grafiki, klikając poniższy link:
enable-hardware-acceleration-link = FAQ — Akceleracja Grafiki Chrome
view-error-details = Zobacz szczegóły błędu
open-in-new-tab = Otwórz w nowej karcie
click-to-unmute = Kliknij aby wyłączyć wyciszenie
clipboard-message-title = Kopiowanie i wklejanie w Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Twoja przeglądarka nie obsługuje pełnego dostępu do schowka,
        [access-denied] Odmówiono dostępu do schowka,
    } ale zawsze możesz stosować te skróty klawiszowe:
clipboard-message-copy = { " " } w celu skopiowania
clipboard-message-cut = { " " } w celu wycięcia
clipboard-message-paste = { " " } w celu wklejenia
error-canvas-reload = Nie można ponownie załadować renderera canvas, gdy jest już on używany.
error-file-protocol =
    Wygląda na to, że używasz Ruffle z protokołem "file:".
    To nie działa, ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.
    Zamiast tego zachęcamy do konfiguracji lokalnego serwera lub użycia webowego demo lub aplikacji desktopowej.
error-javascript-config =
    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.
    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.
    Możesz również zapoznać się z wiki Ruffle, aby uzyskać pomoc.
error-wasm-not-found =
    Nie udało się załadować wymaganego komponentu pliku ".wasm".
    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia "publicPath": zapoznaj się z wiki Ruffle, aby uzyskać pomoc.
error-wasm-mime-type =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten serwer nie serwuje plików ".wasm" z poprawnym typem MIME.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-invalid-swf =
    Ruffle nie może przetworzyć żądanego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Nie udało się załadować pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma co załadować.
    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.
error-swf-cors =
    Nie udało się załadować pliku Flash SWF.
    Pobieranie zostało prawdopodobnie zablokowane przez politykę CORS.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-cors =
    Nie udało się załadować wymaganego komponentu pliku ".wasm".
    Pobieranie zostało prawdopodobnie zablokowane przez politykę CORS.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-invalid =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki niezbędne do uruchomienia Ruffle.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-wasm-download =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten problem często sam się rozwiązuje, więc możesz spróbować odświeżyć stronę.
    W przeciwnym razie skontaktuj się z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając "Prywatność, wyszukiwanie i usługi", przewijając w dół i wyłączając "Zwiększ bezpieczeństwo w sieci".
    Pozwoli to przeglądarce załadować wymagane pliki ".wasm".
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.
error-wasm-unsupported-browser =
    Przeglądarka, której używasz, nie obsługuje rozszerzeń WebAssembly wymaganych do działania Ruffle.
    Proszę użyć obsługiwanej przeglądarki.
    Listę obsługiwanych przeglądarek znajdziesz na Wiki.
error-javascript-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.
    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.
error-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).
error-csp-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Polityka bezpieczeństwa zawartości tego serwera (CSP) nie zezwala na komponent ".wasm" wymagany do uruchomienia.
    Jeśli jesteś administratorem serwera, zasięgnij pomocy na wiki Ruffle.
error-unknown =
    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.
    { $outdated ->
        [true] Jeśli jesteś administratorem serwera, spróbuj zaktualizować Ruffle (obecna wersja jest przestarzała: { $buildDate }).
       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś zgłosił błąd!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?
save-reload-prompt =
    Jedyną opcją, aby { $action ->
        [delete] usunąć
       *[replace] zamienić
    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?
save-download = Pobierz
save-replace = Zamień
save-delete = Usuń
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls-mute = Wycisz
volume-controls-unmute = Wyłącz wyciszenie
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
context-menu-copy-debug-info = Copiar informação de depuração
context-menu-open-save-manager = Abrir o gerenciador de salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
context-menu-volume-controls = Controles de volume
`,"messages.ftl":`message-cant-embed =
    Ruffle não conseguiu executar o Flash incorporado nesta página.
    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
message-restored-from-bfcache =
    Seu navegador restaurou este conteúdo Flash de uma sessão anterior.
    Para começar do zero, recarregue a página.
panic-title = Algo deu errado :(
more-info = Mais informação
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de desktop
ruffle-wiki = Ver guia oficial do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desabilitada. Embora o Ruffle possa funcionar, ele pode ser muito lento. Você pode descobrir como habilitar a aceleração de hardware seguindo o link abaixo:
enable-hardware-acceleration-link = FAQ — Aceleração de hardware no Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiando e colando no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Seu navegador não suporta acesso total à área de transferência,
        [access-denied] O acesso à área de transferência foi negado,
    } mas você sempre pode usar estes atalhos:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para recortar
clipboard-message-paste = { " " } para colar
error-canvas-reload = Não é possível recarregar com o renderizador canvas enquanto ele já está em uso.
error-file-protocol =
    Parece que você está executando o Ruffle no protocolo "file:".
    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.
    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.
    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.
    Você também pode consultar o guia oficial do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.
    Se você é o administrador do servidor, por favor consulte o guia oficial do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle não pode analisar o arquivo solicitado.
    O motivo provável é que o arquivo solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle não conseguiu carregar o arquivo SWF do Flash.
    O acesso à requisição provavelmente foi bloqueado pela política de CORS.
    Se você for o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle não conseguiu carregar o componente obrigatório do arquivo “.wasm”.
    O acesso à busca provavelmente foi bloqueado pela política de CORS.
    Se você é o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-invalid =
    O Ruffle encontrou um erro grave ao tentar iniciar.
    Parece que esta página possui arquivos ausentes ou inválidos para executar o Ruffle.
    Se você é o administrador do servidor, consulte o guia oficial do Ruffle para obter assistência.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.
    Caso contrário, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Para corrigir isso, tente abrir configurações do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore sua segurança na web".
    Isso permitirá que seu navegador carregue os arquivos ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que você está usando não oferece suporte às extensões WebAssembly necessárias para o Ruffle funcionar.
    Por favor, mude para um navegador compatível.
    Você pode encontrar uma lista de navegadores compatíveis no guia oficial.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.
error-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema grave ao tentar iniciar.
    A Política de Segurança de Conteúdo deste servidor não permite a execução do componente “.wasm” necessário.
    Se você for o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.
    { $outdated ->
        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A única maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar som
`},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informações de depuração
context-menu-open-save-manager = Abrir gestor de gravações
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar ecrã inteiro
context-menu-enter-fullscreen = Abrir ecrã inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle não conseguiu abrir o Flash integrado nesta página.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
message-restored-from-bfcache =
    O seu navegador restaurou este conteúdo Flash de uma sessão anterior.
    Para começar do zero, recarregue a página.
panic-title = Algo correu mal :(
more-info = Mais informações
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstração web
ruffle-desktop = Aplicação para computador
ruffle-wiki = Ver a wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware está desativada. Mesmo que o Ruffle funcione, pode estar demasiado lento. Descubra como ativar a aceleração de hardware seguindo este link:
enable-hardware-acceleration-link = Perguntas Frequentes - Aceleração de Hardware no Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiar e colar no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] O seu navegador não suporta acesso total à área de transferência,
        [access-denied] O acesso à área de transferência foi negado,
    } mas pode sempre usar estes atalhos em alternativa:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para cortar
clipboard-message-paste = { " " } para colar
error-canvas-reload = Não é possível recarregar com o renderizador canvas quando este já está em uso.
error-file-protocol =
    Parece que executou o Ruffle no protocolo "file:".
    Isto não funciona porque os navegadores bloqueiam muitas funcionalidades por segurança.
    Em vez disto, experimente configurar um servidor local, ou então a usar a demonstração web ou a aplicação para computador.
error-javascript-config =
    O Ruffle encontrou um problema grave devido a uma configuração de JavaScript incorreta.
    Se é o administrador do servidor, experimente verificar os detalhes do erro para identificar o parâmetro em falha.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Se é o administrador do servidor, certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, talvez queira usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Este servidor web não está a servir ficheiros “.wasm” com o tipo MIME correto.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-invalid-swf =
    O Ruffle não consegue analisar o ficheiro solicitado.
    O mais provável é que o ficheiro solicitado não seja um SWF válido.
error-swf-fetch =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    O mais provável é que o ficheiro já não exista, daí não haver nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta página tem ficheiros inválidos ou em falta para executar o Ruffle.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Isto costuma resolver-se sozinho, por isso experimente recarregar a página.
    Se não acontecer, contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Tente corrigir isto nas definições do navegador; clique em "Privacidade, pesquisa e serviços", deslize para baixo e desative "Melhore a sua segurança na Web".
    Isto permitirá ao navegador carregar os ficheiros ".wasm" necessários.
    Se o problema persistir, talvez precise de um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que usa não suporta as extensões WebAssembly de que o Ruffle necessita para executar.
    Deve mudar para um navegador suportado.
    Pode encontrar uma lista de navegadores suportados na Wiki.
error-javascript-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se é o administrador do servidor, experimente carregar o ficheiro numa página em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    A Política de Segurança de Conteúdos deste servidor web não permite executar o componente ".wasm" necessário.
    Se é o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema grave ao tentar apresentar este conteúdo Flash.
    { $outdated ->
        [true] Se é o administrador do servidor, tente carregar uma versão mais recente do Ruffle (a versão atual está desatualizada: { $buildDate }).
       *[false] Não era suposto ter acontecido, por isso agradecíamos imenso se reportasse a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer eliminar esta gravação?
save-reload-prompt =
    A única forma de { $action ->
        [delete] eliminar
       *[replace] substituir
    } esta gravação sem risco de conflito é recarregando este conteúdo. Deseja continuar na mesma?
save-download = Descarregar
save-replace = Substituir
save-delete = Eliminar
save-backup-all = Descarregar todas as gravações
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar o som
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarcă .swf
context-menu-copy-debug-info = Copiază informațiile de depanare
context-menu-open-save-manager = Deschide managerul de salvări
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ieși din ecranul complet
context-menu-enter-fullscreen = Intră în ecran complet
context-menu-volume-controls = Comenzi pentru volum
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut să ruleze Flash încorporat în această pagină.
    Poți încerca să deschizi fișierul într-o filă separată, pentru a evita această problemă.
message-restored-from-bfcache =
    Browserul dvs. a restaurat acest conținut Flash dintr-o sesiune anterioară.
    Pentru a începe de la zero, reîncărcați pagina.
panic-title = Ceva a mers prost :(
more-info = Mai multe informații
run-anyway = Rulează oricum
continue = Continuă
report-bug = Raportează un bug
update-ruffle = Actualizează Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplicație desktop
ruffle-wiki = Vezi wikiul Ruffle
enable-hardware-acceleration = Se pare că accelerarea hardware este dezactivată. Deși Ruffle ar putea funcționa, va fi foarte lent. Puteți afla cum să activați accelerarea hardware accesând linkul de mai jos:
enable-hardware-acceleration-link = Întrebări frecvente - Accelerarea hardware Chrome
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide într-o filă nouă
click-to-unmute = Dă click pentru a dezmuți
clipboard-message-title = Copierea și lipirea în Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Browserul dvs. nu acceptă accesul complet către clipboard,
        [access-denied] Accesul la clipboard a fost refuzat,
    } dar puteți oricând să utilizați aceste scurtături:
clipboard-message-copy = { " " } pentru copiere
clipboard-message-cut = { " " } pentru decupare
clipboard-message-paste = { " " } pentru lipire
error-canvas-reload = Nu se poate reîncărca utilizând rendererul canvas atunci când acesta este deja folosit.
error-file-protocol =
    Se pare că rulezi Ruffle pe protocolul „file:”.
    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.
    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.
error-javascript-config =
    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.
    Dacă ești administratorul serverului, te invităm să verifici detaliile erorii pentru a afla care parametru este defect.
    De asemenea, poți consulta wikiul Ruffle pentru ajutor.
error-wasm-not-found =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Dacă ești administratorul serverului, te rugăm să te asiguri că fișierul a fost încărcat corect.
    Dacă problema persistă, poate fi necesar să folosești setarea „publicPath”: te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-mime-type =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Acest server web nu servește fișiere „.wasm” cu tipul MIME corect.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-invalid-swf =
    Ruffle nu poate analiza fișierul solicitat.
    Cel mai probabil motiv este că fișierul solicitat nu este un SWF valid.
error-swf-fetch =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Motivul cel mai probabil este că fișierul nu mai există, deci Ruffle nu mai are ce să încarce.
    Încearcă să contactezi administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-cors =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-invalid =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină are fișiere lipsă sau nevalide pentru a rula Ruffle.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-download =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.
    Acest lucru se poate rezolva adesea de la sine, așa că poți încerca să reîncarci pagina.
    În caz contrar, te rugăm să contactezi administratorul site-ului web.
error-wasm-disabled-on-edge =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Pentru a remedia acest lucru, încearcă să deschizi setările browserului, să faci clic pe „Confidențialitate, căutare și servicii”, să derulezi în jos și să dezactivezi „Îmbunătățiți-vă securitatea pe web”.
    Acest lucru va permite browserului să încarce fișierele „.wasm” necesare.
    Dacă problema persistă, este posibil să trebuiască să folosești un alt browser.
error-wasm-unsupported-browser =
    Browserul pe care îl utilizați nu suportă extensiile WebAssembly pe care Ruffle le solicită pentru a rula.
    Vă rugăm să folosiți un browser compatibil.
    Puteți găsi o listă de browsere compatibile pe Wiki.
error-javascript-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină folosește cod JavaScript care intră în conflict cu Ruffle.
    Dacă ești administratorul serverului, te invităm să încerci încărcarea fișierului pe o pagină goală.
error-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care ar putea ocoli problema (versiunea actuală este învechită: { $buildDate }).
error-csp-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Politica de securitate a conținutului a acestui server web nu permite rularea componentei „.wasm” necesare.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-unknown =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.
    { $outdated ->
        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este învechită: { $buildDate }).
       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] șterge
       *[replace] înlocui
    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?
save-download = Descarcă
save-replace = Înlocuiește
save-delete = Șterge
save-backup-all = Descarcă toate fișierele de salvare
`,"volume-controls.ftl":`volume-controls-mute = Mut
volume-controls-unmute = Activare sunet
`},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = Скачать .swf
context-menu-copy-debug-info = Копировать отладочную информацию
context-menu-open-save-manager = Менеджер сохранений
context-menu-about-ruffle =
    { $flavor ->
        [extension] О расширении Ruffle ({ $version })
       *[other] О Ruffle ({ $version })
    }
context-menu-hide = Скрыть это меню
context-menu-exit-fullscreen = Оконный режим
context-menu-enter-fullscreen = Полноэкранный режим
context-menu-volume-controls = Громкость
`,"messages.ftl":`message-cant-embed =
    Ruffle не смог запустить Flash, используемый на этой странице.
    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.
message-restored-from-bfcache =
    Ваш браузер восстановил этот Flash-контент с предыдущей сессии.
    Чтобы начать заново, перезагрузите страницу.
panic-title = Что-то пошло не так :(
more-info = Подробнее
run-anyway = Всё равно запустить
continue = Продолжить
report-bug = Сообщить об ошибке
update-ruffle = Обновить Ruffle
ruffle-demo = Веб-демо
ruffle-desktop = Настольное приложение
ruffle-wiki = Открыть вики Ruffle
enable-hardware-acceleration = Похоже, что аппаратное ускорение отключено. Хотя Ruffle может работать, но он может быть очень медленным. Вы можете узнать, как включить аппаратное ускорение, перейдя по ссылке ниже:
enable-hardware-acceleration-link = FAQ - Аппаратное ускорение Chrome
view-error-details = Сведения об ошибке
open-in-new-tab = Открыть в новой вкладке
click-to-unmute = Включить звук
clipboard-message-title = Копирование и вставка в Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ваш браузер не поддерживает полный доступ к буферу обмена.
        [access-denied]  Доступ к буферу обмена был отклонён.
    } Используйте сочетания клавиш для вырезания, копирования и вставки:
clipboard-message-copy = { " " } копировать
clipboard-message-cut = { " " } вырезать
clipboard-message-paste = { " " } вставить
error-canvas-reload = Невозможно перезагрузить с рендерером canvas, когда рендерер canvas уже используется.
error-file-protocol =
    Похоже, что вы запускаете Ruffle по протоколу "file:".
    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.
    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.
error-javascript-config =
    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.
    Вы также можете обратиться за помощью к вики Ruffle.
error-wasm-not-found =
    Ruffle не удалось запустить необходимый компонент файла ".wasm".
    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.
    Если проблема не устраняется, вам может потребоваться использовать настройку "publicPath": обратитесь к вики Ruffle.
error-wasm-mime-type =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Этот веб-сервер не предоставляет файлы ".wasm" с правильным типом MIME.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-invalid-swf =
    Ruffle не удалось обработать запрашиваемый файл.
    Вероятнее всего, данный SWF повреждён или не является таковым.
error-swf-fetch =
    Ruffle не удалось запустить SWF-файл Flash.
    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.
    Попробуйте связаться с администратором сайта для получения помощи.
error-swf-cors =
    Ruffle не удалось запустить SWF-файл Flash.
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-cors =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-invalid =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-download =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.
    Если ошибка продолжает появляться, свяжитесь с администратором сайта.
error-wasm-disabled-on-edge =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.
    Если проблема осталась, вам может потребоваться другой браузер.
error-wasm-unsupported-browser =
    Ваш браузер не поддерживает расширения WebAssembly, необходимые для запуска Ruffle.
    Пожалуйста, переключитесь на поддерживаемый браузер.
    Список поддерживаемых браузеров вы можете найти в Вики.
error-javascript-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.
error-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).
error-csp-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска ".wasm".
    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.
error-unknown =
    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.
    { $outdated ->
        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).
       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!
    }
`,"save-manager.ftl":`save-delete-prompt = Удалить этот файл сохранения?
save-reload-prompt =
    Единственный способ { $action ->
        [delete] удалить
       *[replace] заменить
    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?
save-download = Скачать
save-replace = Заменить
save-delete = Удалить
save-backup-all = Скачать все сохранения
`,"volume-controls.ftl":`volume-controls-mute = Без звука
volume-controls-unmute = Включить звук
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnuť .swf
context-menu-copy-debug-info = Skopírovať debug info
context-menu-open-save-manager = Otvoriť správcu uložení
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle rozšírení ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skryť menu
context-menu-exit-fullscreen = Ukončiť režim celej obrazovky
context-menu-enter-fullscreen = Prejsť do režimu celej obrazovky
context-menu-volume-controls = Ovládanie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spustiť Flash vložený na tejto stránke.
    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.
message-restored-from-bfcache =
    Váš prehliadač obnovil tento Flash obsah z predchádzajúcej relácie.
    Ak chcete začať znovu, opätovne načítajte stránku.
panic-title = Niečo sa pokazilo :(
more-info = Viac informácií
run-anyway = Spustiť aj tak
continue = Pokračovať
report-bug = Nahlásiť chybu
update-ruffle = Aktualizovať Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikácia
ruffle-wiki = Zobraziť Ruffle Wiki
enable-hardware-acceleration = Zdá sa, že hardvérová akcelerácia je vypnutá. Aj keď Ruffle funguje správne, môže byť neprimerane pomalý. Ako povoliť hardvérovú akceleráciu zistíte na tomto odkaze:
enable-hardware-acceleration-link = Časté otázky - Hardvérová akcelerácia Chrome
view-error-details = Zobraziť podrobnosti o chybe
open-in-new-tab = Otvoriť na novej karte
click-to-unmute = Kliknutím zapnete zvuk
clipboard-message-title = Kopírovanie a vkladanie v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Váš prehliadač nepodporuje plný prístup k schránke,
        [access-denied] Prístup k schránke bol odmietnutý,
    } ale namiesto toho môžete vždy použiť tieto skratky:
clipboard-message-copy = { " " } pre kopírovanie
clipboard-message-cut = { " " } pre vystrihovanie
clipboard-message-paste = { " " } pre vloženie
error-canvas-reload = Nie je možné znova načítať pomocou vykresľovača plátna, keď sa vykresľovanie plátna už používa.
error-file-protocol =
    Zdá sa, že používate Ruffle na protokole "file:".
    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.
    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.
error-javascript-config =
    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.
    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.
    Pomoc môžete získať aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.
    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemôže spracovať požadovaný súbor.
    Najpravdepodobnejším dôvodom je, že požadovaný súbor nie je platným súborom SWF.
error-swf-fetch =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.
    Skúste požiadať o pomoc správcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.
    V opačnom prípade kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.
    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.
    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.
error-wasm-unsupported-browser =
    Prehliadač, ktorý používate, nepodporuje rozšírenie WebAssembly, ktoré Ruffle vyžaduje na spustenie.
    Prejdite na podporovaný prehliadač.
    Zoznam podporovaných prehliadačov nájdete na Wiki.
error-javascript-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.
    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.
error-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.
    { $outdated ->
         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).
        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?
save-reload-prompt =
    Jediný spôsob, ako { $action ->
         [delete] vymazať
        *[replace] nahradiť
    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?
save-download = Stiahnuť
save-replace = Nahradiť
save-delete = Vymazať
save-backup-all = Stiahnuť všetky súbory s uloženými pozíciami
`,"volume-controls.ftl":`volume-controls-mute = Stlmiť
volume-controls-unmute = Zrušiť stlmenie
`},"sl-SI":{"context_menu.ftl":`context-menu-download-swf = Prenesi .swf
context-menu-copy-debug-info = Kopiraj informacije o odpravljanju napak
context-menu-open-save-manager = Odpri upravitelja shranjevanja
context-menu-about-ruffle =
    { $flavor ->
        [extension] O razširitvi Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrij ta meni
context-menu-exit-fullscreen = Izhod iz celozaslonskega načina
context-menu-enter-fullscreen = Vstopi v celozaslonski način
context-menu-volume-controls = Nadzor glasnosti
`,"messages.ftl":`message-cant-embed =
    Ruffle ni mogel zagnati Flash vsebine, vgrajene v to stran.
    Lahko poskusite odpreti datoteko v ločenem zavihku, da se izognete tej težavi.
message-restored-from-bfcache =
    Vaš brskalnik je obnovil to Flash vsebino iz prejšnje seje.
    Da bi začeli na novo, ponovno naložite stran.
panic-title = Nekaj je šlo narobe :(
more-info = Več informacij
run-anyway = Vseeno zaženi
continue = Nadaljuj
report-bug = Prijavi napako
update-ruffle = Posodobite Ruffle
ruffle-demo = Spletni demo
ruffle-desktop = Namizna aplikacija
ruffle-wiki = Oglejte si Ruffle Wiki
enable-hardware-acceleration = Zdi se, da je strojna pospešitev onemogočena. Ruffle bo sicer deloval, vendar bo lahko zelo počasen. Kako omogočiti strojno pospešitev, lahko izveste na spodnji povezavi:
enable-hardware-acceleration-link = Pogosta vprašanja – Pospeševanje strojne opreme v brskalniku Chrome
view-error-details = Poglej podrobnosti napake
open-in-new-tab = Odpri v novem zavihku
click-to-unmute = Kliknite za vklop zvoka
clipboard-message-title = Kopiranje in lepljenje v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Vaš brskalnik ne podpira polnega dostopa do odložišča,
        [access-denied] Dostop do odložišča je bil zavrnjen,
    } vendar lahko namesto tega vedno uporabite te bližnjice:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za izrez
clipboard-message-paste = { " " } za lepljenje
error-canvas-reload = Ne morem ponovno naložiti z upodabljalnikom platna, če je upodabljalnik platna že v uporabi.
error-file-protocol =
    Zdi se, da uporabljate Ruffle na protokolu "file:".
    To ne deluje, ker brskalniki iz varnostnih razlogov blokirajo delovanje mnogih funkcij.
    Namesto tega vam priporočamo, da nastavite lokalni strežnik ali uporabite spletno demo ali namizno aplikacijo.
error-javascript-config =
    Ruffle je naletel na večjo težavo zaradi nepravilne konfiguracije JavaScript.
    Če ste skrbnik strežnika, vas prosimo, da preverite podrobnosti napake in ugotovite, kateri parameter je kriv.
    Za pomoč lahko poiščete tudi wiki Ruffle.
error-wasm-not-found =
    Ruffle ni uspel naložiti potrebne datoteke ".wasm".
    Če ste skrbnik strežnika, preverite, ali je datoteka pravilno naložena.
    Če težava še vedno obstaja, boste morda morali uporabiti nastavitev "publicPath": za pomoč si oglejte wiki Ruffle.
error-wasm-mime-type =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Ta spletni strežnik ne servira datotek ".wasm" s pravilnim tipom MIME.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-invalid-swf =
    Ruffle ne more razčleniti zahtevane datoteke.
    Najverjetnejši razlog je, da zahtevana datoteka ni veljavna datoteka SWF.
error-swf-fetch =
    Ruffle ni uspel naložiti datoteke Flash SWF.
    Najverjetnejši razlog je, da datoteka ne obstaja več, zato Ruffle nima kaj naložiti.
    Za pomoč se obrnite na skrbnika spletnega mesta.
error-swf-cors =
    Ruffle ni uspel naložiti datoteke Flash SWF.
    Dostop do prenosa je verjetno blokiran s politiko CORS.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-wasm-cors =
    Ruffle ni uspel naložiti potrebne datotečne komponente datoteke ".wasm“.
    Dostop do prenosa je verjetno blokiran s politiko CORS.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-wasm-invalid =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Zdi se, da na tej strani manjkajo datoteke ali so datoteke za zagon Ruffle neveljavne.
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-wasm-download =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Ta se pogosto reši sama, zato lahko poskusite ponovno naložiti stran.
    V nasprotnem primeru se obrnite na skrbnika spletnega mesta.
error-wasm-disabled-on-edge =
    Ruffle ni uspel naložiti potrebne datotečne komponente ".wasm".
    Da bi to popravili, odprite nastavitve brskalnika, kliknite "Zasebnost, iskanje in storitve", pomaknite se navzdol in izklopite "Izboljšajte svojo varnost na spletu".
    Tako bo brskalnik lahko naložil potrebne datoteke ".wasm".
    Če težava še vedno obstaja, boste morda morali uporabiti drug brskalnik.
error-wasm-unsupported-browser =
    Brskalnik, ki ga uporabljate, ne podpira razširitev WebAssembly, ki jih Ruffle potrebuje za delovanje.
    Preklopite na podprt brskalnik.
    Seznam podprtih brskalnikov najdete na Wiki.
error-javascript-conflict =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Zdi se, da ta stran uporablja JavaScript kodo, ki je v nasprotju z Ruffle.
    Če ste skrbnik strežnika, vas prosimo, da poskusite naložiti datoteko na prazno stran.
error-javascript-conflict-outdated = Lahko poskusite naložiti novejšo različico Ruffle, ki bo morda odpravila težavo (trenutna različica je zastarela: { $buildDate }).
error-csp-conflict =
    Ruffle je med poskusom inicializacije naletel na večjo težavo.
    Varnostna politika vsebine tega spletnega strežnika ne dovoljuje izvajanja potrebne komponente ".wasm".
    Če ste skrbnik strežnika, poiščite pomoč v Ruffle wiki.
error-unknown =
    Ruffle je naletel na večjo težavo pri prikazovanju te vsebine Flash.
    { $outdated ->
        [true] Če ste skrbnik strežnika, poskusite naložiti novejšo različico Ruffle (trenutna različica je zastarela: { $buildDate }).
       *[false] To se ne bi smelo zgoditi, zato bi bili zelo hvaležni, če bi prijavili napako!
    }
`,"save-manager.ftl":`save-delete-prompt = Ali ste prepričani, da želite izbrisati to shranjeno datoteko?
save-reload-prompt =
    Edini način, da { $action ->
        [delete] izbrišete
       *[replace] zamenjate
    } to shranjeno datoteko brez morebitnega konflikta, je, da ponovno naložite to vsebino. Želite vseeno nadaljevati?
save-download = Prenesi
save-replace = Zamenjaj
save-delete = Izbriši
save-backup-all = Prenesi vse shranjene datoteke
`,"volume-controls.ftl":`volume-controls-mute = Utišaj
volume-controls-unmute = Vklopi zvok
`},"sr-CS":{"context_menu.ftl":`context-menu-download-swf = Preuzmite .swf datoteku
context-menu-copy-debug-info = Kopirajte informacije za otklanjanje grešaka
context-menu-open-save-manager = Otvori menadžer skladišta
context-menu-about-ruffle =
    { $flavor ->
    [extension] O ekstenziji Ruffle ({ $version })
    *[other] O Ruffle ({ $version })
    }
context-menu-hide = Sakrij ovaj meni
context-menu-exit-fullscreen = Izađi iz režima celog ekrana
context-menu-enter-fullscreen = Pređi na ceo ekran
context-menu-volume-controls = Kontrole jačine zvuka
`,"messages.ftl":`message-cant-embed =
    Ruffle nije mogao da pokrene Fleš ugrađen na ovoj stranici.
    Možete pokušati da otvorite datoteku u posebnoj kartici da biste izbegli ovaj problem.
message-restored-from-bfcache =
    Vaš pregledač je vratio ovaj Fleš sadržaj iz prethodne sesije.
    Molimo vas da ponovo učitate stranicu za novi početak.
panic-title = Nešto je pošlo po zlu :(
more-info = Dodatne informacije
run-anyway = Ipak pokreni
continue = Nastavi
report-bug = Prijavi grešku
update-ruffle = Ažurirajte Ruffle
ruffle-demo = Veb demo
ruffle-desktop = Desktop aplikacija
ruffle-wiki = Pogledajte Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogućeno. Iako Ruffle možda radi, može biti veoma spor. Možete saznati kako da omogućite hardversko ubrzanje prateći donju vezu:
enable-hardware-acceleration-link = Česta pitanja - Hardversko ubrzanje u Chrome-u
view-error-details = Prikaži detalje greške
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite da biste uključili zvuk
clipboard-message-title = Kopiranje i nalepljivanje u Ruffle-u
clipboard-message-description =
    { $variant ->
    *[unsupported] Vaš pregledač ne podržava potpun pristup međuspremniku,
    [access-denied] Pristup baferu je zabranjen,
    } ali uvek možete koristiti ove prečice:
clipboard-message-copy = { " " } za kopiju
clipboard-message-cut = { " " } za sečenje
clipboard-message-paste = { " " } za lepljenje
error-canvas-reload = Ne može se ponovo učitati renderer za platno kada je renderer za platno već u upotrebi.
error-file-protocol =
    Izgleda da koristite Ruffle na protokolu "file:".
    Ovo ne funkcioniše jer pregledači blokiraju mnoge funkcije iz bezbednosnih razloga.
    Umesto toga, preporučujemo podešavanje lokalnog servera ili korišćenje veb demo verzije ili desktop aplikacije.
error-javascript-config =
    Ruffle je naišao na ozbiljan problem zbog pogrešne konfiguracije JavaSkripta.
    Ako ste administrator servera, preporučujemo vam da proverite detalje greške kako biste saznali koji parametar uzrokuje problem. Takođe možete da konsultujete Ruffleov viki za pomoć.
error-wasm-not-found =
    Ruffle nije uspeo da učita potrebnu komponentu datoteke ".wasm".
    Ako ste administrator servera, proverite da li je datoteka ispravno otpremljena.
    Ako problem i dalje postoji, možda ćete morati da koristite podešavanje "publicPath": pogledajte Ruffleovu viki stranicu za pomoć.
error-wasm-mime-type =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovaj veb server ne služi ".wasm" datoteke sa ispravnim MIME tipom.
    Ako ste administrator servera, obratite se Ruffleovom vikiju za pomoć.
error-invalid-swf =
    Ruffle ne može da analizira traženu datoteku.
    Najverovatniji razlog je taj što tražena datoteka nije važeći SWF.
error-swf-fetch =
    Ruffle nije uspeo da učita Fleš SWF datoteku.
    Najverovatniji razlog je taj što datoteka više ne postoji, pa Ruffle nema šta da učita.
    Pokušajte da kontaktirate administratora veb stranice za pomoć.
error-swf-cors =
    Ruffle nije uspeo da učita Fleš SWF datoteku.
    Pristup preuzimanju je verovatno blokiran CORS politikom.
    Ako ste administrator servera, pogledajte Ruffleovu viki stranicu za pomoć.
error-wasm-cors =
    Ruffle nije uspeo da učita potrebnu komponentu datoteke ".wasm".
    Pristup preuzimanju je verovatno blokiran CORS politikom.
    Ako ste administrator servera, pogledajte Ruffleovu viki stranicu za pomoć.
error-wasm-invalid =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ovoj stranici nedostaju ili su nevažeće datoteke za pokretanje Rufflea.
    Ako ste administrator servera, pogledajte Ruffleov viki za pomoć.
error-wasm-download =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Ovo se često može rešiti jednostavnim ponovnim učitavanjem stranice.
    U suprotnom, kontaktirajte administratora sajta.
error-wasm-disabled-on-edge =
    Ruffle nije uspeo da učita potrebnu komponentnu datoteku ".wasm".
    Da biste rešili ovaj problem, pokušajte da otvorite podešavanja pregledača, kliknete na "Privatnost, pretraga i usluge", pomerite se nadole i isključite "Poboljšaj bezbednost veba".
    Ovo će omogućiti vašem pregledaču da učita potrebne ".wasm" datoteke.
    Ako problem i dalje postoji, možda ćete morati da koristite drugi pregledač.
error-wasm-unsupported-browser =
    Pregledač koji koristite ne podržava WebAssembly ekstenzije potrebne za rad Ruffle-a.
    Molimo vas da pređete na podržani pregledač.
    Lista podržanih pregledača može se naći na Viki stranici.
error-javascript-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Izgleda da ova stranica koristi JavaSkript kod koji je u sukobu sa Ruffleom.
    Ako ste administrator servera, pozivamo vas da pokušate da otpremite datoteku na praznu stranicu.
error-javascript-conflict-outdated = Takođe možete pokušati da otpremite noviju verziju programa Ruffle koja bi mogla da reši problem (trenutna verzija je zastarela: { $buildDate }).
error-csp-conflict =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja inicijalizacije.
    Politike bezbednosti sadržaja ovog veb servera ne dozvoljavaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator servera, obratite se Ruffleovom vikiju za pomoć.
error-unknown =
    Ruffle je naišao na ozbiljan problem prilikom pokušaja prikazivanja ovog Fleš sadržaja.
    { $outdated ->
    [true] Ako ste administrator servera, pokušajte da otpremite noviju verziju Rufflea (trenutna verzija je zastarela: { $buildDate }).
    *[false] Ovo ne bi trebalo da se dešava, pa bismo vam bili veoma zahvalni ako biste prijavili grešku!
    }
`,"save-manager.ftl":`save-delete-prompt = Da li ste sigurni da želite da obrišete ovu datoteku za čuvanje?
save-reload-prompt =
    Jedini način da { $action ->
        [delete] obrišete
       *[replace] zamenite
    } ovu sačuvanu datoteku bez mogućih konflikata jeste da ponovo učitate ovaj sadržaj. Da li želite da ipak nastavite?
save-download = Preuzmite
save-replace = Zameni
save-delete = Obriši
save-backup-all = Preuzmi sve sačuvane datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isključi zvuk
volume-controls-unmute = Uključi zvuk
`},"sr-SP":{"context_menu.ftl":`context-menu-download-swf = Преузмите .swf датотеку
context-menu-copy-debug-info = Копирајте информације за отклањање грешака
context-menu-open-save-manager = Отвори менаџер складишта
context-menu-about-ruffle =
    { $flavor ->
    [extension] О екстензији Ruffle ({ $version })
    *[other] О Ruffle ({ $version })
    }
context-menu-hide = Сакриј овај мени
context-menu-exit-fullscreen = Изађи из режима целог екрана
context-menu-enter-fullscreen = Пређи на цео екран
context-menu-volume-controls = Контроле јачине звука
`,"messages.ftl":`message-cant-embed =
    Ruffle није могао да покрене Флеш уграђен на овој страници.
    Можете покушати да отворите датотеку у посебној картици да бисте избегли овај проблем.
message-restored-from-bfcache =
    Ваш прегледач је вратио овај Флеш садржај из претходне сесије.
    Молимо вас да поново учитате страницу за нови почетак.
panic-title = Нешто је пошло по злу :(
more-info = Додатне информације
run-anyway = Ипак покрени
continue = Настави
report-bug = Пријави грешку
update-ruffle = Ажурирајте Ruffle
ruffle-demo = Веб демо
ruffle-desktop = Десктоп апликација
ruffle-wiki = Погледајте Ruffle Wiki
enable-hardware-acceleration = Изгледа да је хардверско убрзање онемогућено. Иако Ruffle можда ради, може бити веома спор. Можете сазнати како да омогућите хардверско убрзање пратећи доњу везу:
enable-hardware-acceleration-link = Честа питања - Хардверско убрзање у Chrome-у
view-error-details = Прикажи детаље грешке
open-in-new-tab = Отвори у новој картици
click-to-unmute = Кликните да бисте укључили звук
clipboard-message-title = Копирање и налепљивање у Ruffle-у
clipboard-message-description =
    { $variant ->
    *[unsupported] Ваш прегледач не подржава потпун приступ међуспремнику,
    [access-denied] Приступ баферу је забрањен,
    } али увек можете користити ове пречице:
clipboard-message-copy = { " " } за копију
clipboard-message-cut = { " " } за сечење
clipboard-message-paste = { " " } за лепљење
error-canvas-reload = Не може се поново учитати рендерер за платно када је рендерер за платно већ у употреби.
error-file-protocol =
    Изгледа да користите Ruffle на протоколу "file:".
    Ово не функционише јер прегледачи блокирају многе функције из безбедносних разлога.
    Уместо тога, препоручујемо подешавање локалног сервера или коришћење веб демо верзије или десктоп апликације.
error-javascript-config =
    Ruffle је наишао на озбиљан проблем због погрешне конфигурације ЈаваСкрипта.
    Ако сте администратор сервера, препоручујемо вам да проверите детаље грешке како бисте сазнали који параметар узрокује проблем. Такође можете да консултујете Ruffleов вики за помоћ.
error-wasm-not-found =
    Ruffle није успео да учита потребну компоненту датотеке ".wasm".
    Ако сте администратор сервера, проверите да ли је датотека исправно отпремљена.
    Ако проблем и даље постоји, можда ћете морати да користите подешавање "publicPath": погледајте Ruffleову вики страницу за помоћ.
error-wasm-mime-type =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Овај веб сервер не служи ".wasm" датотеке са исправним MIME типом.
    Ако сте администратор сервера, обратите се Ruffleовом викију за помоћ.
error-invalid-swf =
    Ruffle не може да анализира тражену датотеку.
    Највероватнији разлог је тај што тражена датотека није важећи SWF.
error-swf-fetch =
    Ruffle није успео да учита Флеш SWF датотеку.
    Највероватнији разлог је тај што датотека више не постоји, па Ruffle нема шта да учита.
    Покушајте да контактирате администратора веб странице за помоћ.
error-swf-cors =
    Ruffle није успео да учита Флеш SWF датотеку.
    Приступ преузимању је вероватно блокиран CORS политиком.
    Ако сте администратор сервера, погледајте Ruffleову вики страницу за помоћ.
error-wasm-cors =
    Ruffle није успео да учита потребну компоненту датотеке ".wasm".
    Приступ преузимању је вероватно блокиран CORS политиком.
    Ако сте администратор сервера, погледајте Ruffleову вики страницу за помоћ.
error-wasm-invalid =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Изгледа да овој страници недостају или су неважеће датотеке за покретање Ruffleа.
    Ако сте администратор сервера, погледајте Ruffleов вики за помоћ.
error-wasm-download =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Ово се често може решити једноставним поновним учитавањем странице.
    У супротном, контактирајте администратора сајта.
error-wasm-disabled-on-edge =
    Ruffle није успео да учита потребну компонентну датотеку ".wasm".
    Да бисте решили овај проблем, покушајте да отворите подешавања прегледача, кликнете на "Приватност, претрага и услуге", померите се надоле и искључите "Побољшај безбедност веба".
    Ово ће омогућити вашем прегледачу да учита потребне ".wasm" датотеке.
    Ако проблем и даље постоји, можда ћете морати да користите други прегледач.
error-wasm-unsupported-browser =
    Прегледач који користите не подржава WebAssembly екстензије потребне за рад Ruffle-а.
    Молимо вас да пређете на подржани прегледач.
    Листа подржаних прегледача може се наћи на Вики страници.
error-javascript-conflict =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Изгледа да ова страница користи ЈаваСкрипт код који је у сукобу са Ruffleом.
    Ако сте администратор сервера, позивамо вас да покушате да отпремите датотеку на празну страницу.
error-javascript-conflict-outdated = Такође можете покушати да отпремите новију верзију програма Ruffle која би могла да реши проблем (тренутна верзија је застарела: { $buildDate }).
error-csp-conflict =
    Ruffle је наишао на озбиљан проблем приликом покушаја иницијализације.
    Политике безбедности садржаја овог веб сервера не дозвољавају покретање потребне компоненте ".wasm".
    Ако сте администратор сервера, обратите се Ruffleовом викију за помоћ.
error-unknown =
    Ruffle је наишао на озбиљан проблем приликом покушаја приказивања овог Флеш садржаја.
    { $outdated ->
    [true] Ако сте администратор сервера, покушајте да отпремите новију верзију Ruffleа (тренутна верзија је застарела: { $buildDate }).
    *[false] Ово не би требало да се дешава, па бисмо вам били веома захвални ако бисте пријавили грешку!
    }
`,"save-manager.ftl":`save-delete-prompt = Да ли сте сигурни да желите да обришете ову датотеку за чување?
save-reload-prompt =
    Једини начин да { $action ->
        [delete] обришете
       *[replace] замените
    } ову сачувану датотеку без могућих конфликата јесте да поново учитате овај садржај. Да ли желите да ипак наставите?
save-download = Преузмите
save-replace = Замени
save-delete = Обриши
save-backup-all = Преузми све сачуване датотеке
`,"volume-controls.ftl":`volume-controls-mute = Искључи звук
volume-controls-unmute = Укључи звук
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner .swf
context-menu-copy-debug-info = Kopiera felsökningsinfo
context-menu-open-save-manager = Öppna Sparhanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillägget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Dölj denna meny
context-menu-exit-fullscreen = Avsluta helskärm
context-menu-enter-fullscreen = Helskärm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte köra det inbäddade Flashinnehållet på denna sida.
    Du kan försöka öppna filen i en separat flik för att kringgå problemet.
panic-title = Något gick fel :(
more-info = Mer info
run-anyway = Kör ändå
continue = Fortsätt
report-bug = Rapportera bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
enable-hardware-acceleration = Det ser ut som att hårdvaruacceleration är avstängt. På grund av det kan Ruffle fungera långsamt. Du kan ta reda på hur man sätter på hårdvaruacceleration genom länken nedan:
enable-hardware-acceleration-link = FAQ - Chrome hårdvaruacceleration
view-error-details = Visa felinformation
open-in-new-tab = Öppna i en ny flik
click-to-unmute = Klicka för ljud
clipboard-message-title = Kopierar och klistrar in i Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Din webbläsare har inte fullständig åtkomst till urklipp,
        [access-denied] Urklippsåtkomst har nekats,
    } men du kan använda dom här kortkommandon istället:
clipboard-message-copy = { " " } för att kopiera
clipboard-message-cut = { " " } för att klippa
clipboard-message-paste = { " " } för att klistra in
error-canvas-reload = Kan inte ladda om med canvas render:aren när den redan används.
error-file-protocol =
    Det verkar som att du kör Ruffle på "fil:"-protokollet.
    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.
    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.
    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.
    Du kan också konsultera Ruffle-wikin för hjälp.
error-wasm-not-found =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Om du är serveradministratören se till att filen har laddats upp korrekt.
    Om problemet kvarstår kan du behöva använda inställningen "publicPath": konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-mime-type =
    Ruffle har stött på ett stort fel under initialiseringen.
    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-invalid-swf =
    Ruffle kan inte läsa den begärda filen.
    Det mest sannolika skälet är att den begärda filen inte är en giltig SWF.
error-swf-fetch =
    Ruffle misslyckades ladda SWF-filen.
    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.
    Försök att kontakta webbplatsadministratören för hjälp.
error-swf-cors =
    Ruffle misslyckades ladda SWF-filen.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-cors =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-invalid =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-download =
    Ruffle har stött på ett stort fel under initialiseringen.
    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.
    Kontakta annars vänligen webbplatsens administratör.
error-wasm-disabled-on-edge =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på "Sekretess, sökning och tjänster", bläddra ner och stäng av "Förbättra säkerheten på webben".
    Detta tillåter din webbläsare att ladda ".wasm"-filerna.
    Om problemet kvarstår kan du behöva använda en annan webbläsare.
error-wasm-unsupported-browser =
    Webbläsaren du använder stöder inte de WebAssembly tilläggen som Ruffle behöver för att köra.
    Vänligen byt till en webbläsare som stöds.
    Du kan hitta en lista över webbläsare som stöds på Wikin.
error-javascript-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.
    Om du är serveradministratören bjuder vi in dig att försöka köra filen på en blank sida.
error-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Webbserverns Content Security Policy tillåter inte ".wasm"-komponenten att köra.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-unknown =
    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.
    { $outdated ->
        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).
       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = Är du säker på att du vill radera sparfilen?
save-reload-prompt =
    Det enda sättet att { $action ->
        [delete] radera
       *[replace] ersätta
    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?
save-download = Ladda ner
save-replace = Ersätt
save-delete = Radera
save-backup-all = Ladda ner alla sparfiler
`,"volume-controls.ftl":`volume-controls-mute = Stäng av ljud
`},"th-TH":{"context_menu.ftl":`context-menu-volume-controls = ปุ่มระดับเสียง
`,"messages.ftl":`ruffle-demo = เว็บตัวอย่าง
ruffle-wiki = ดูวิกิ Ruffle
`,"save-manager.ftl":`save-delete-prompt = คุณแน่ใจหรือว่าจะลบไฟล์นี้?
`,"volume-controls.ftl":`volume-controls-mute = ปิดเสียง
volume-controls-unmute = ใช้เสียง
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = .swf'i indir
context-menu-copy-debug-info = Hata ayıklama bilgisini kopyala
context-menu-open-save-manager = Kayıt yöneticisini aç
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzantısı Hakkında ({ $version })
       *[other] Ruffle Hakkında ({ $version })
    }
context-menu-hide = Bu menüyü gizle
context-menu-exit-fullscreen = Tam ekrandan çık
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya gömülü Flash'ı çalıştıramadı.
    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.
message-restored-from-bfcache =
    Tarayıcınız bu Flash içeriğini önceki bir oturumdan geri yükledi.
    Sıfırdan başlamak için sayfayı yeniden yükleyin.
panic-title = Bir şeyler yanlış gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de çalıştır
continue = Devam et
report-bug = Hata bildir
update-ruffle = Ruffle'ı güncelle
ruffle-demo = Ağ Demosu
ruffle-desktop = Masaüstü uygulaması
ruffle-wiki = Ruffle wiki'yi görüntüle
enable-hardware-acceleration = Donanım hızlandırması etkin değil gibi görünüyor. Ruffle çalışabilir ancak çok yavaş olabilir. Donanım hızlandırmasını nasıl etkinleştirebileceğinizi bu linkten öğrenebilirsiniz:
enable-hardware-acceleration-link = SSS - Chrome Donanım Hızlandırması
view-error-details = Hata ayrıntılarını görüntüle
open-in-new-tab = Yeni sekmede aç
click-to-unmute = Sesi açmak için tıklayın
clipboard-message-title = Ruffle'da kopyalama ve yapıştırma
clipboard-message-description =
    { $variant ->
    *[unsupported] Tarayıcınız tam panoya erişimi desteklemiyor,
    [access-denied] Pano erişimi reddedildi,
    } ancak pano yerine her zaman bu kısayolları kullanabilirsiniz:
clipboard-message-copy = { " " } kopyalamak için
clipboard-message-cut = { " " } kesmek için
clipboard-message-paste = { " " } yapıştırmak için
error-canvas-reload = Tuval oluşturucusu kullanımda olduğunda tuval oluşturucusu ile yeniden yükleme yapılamaz.
error-file-protocol =
    Görünüşe göre Ruffle'ı "dosya:" protokolünde çalıştırıyorsunuz.
    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.
    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.
    Yardım için Ruffle wiki'sine de başvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.
    Sorun devam ederse, "publicPath" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-mime-type =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusu, doğru MIME tipinde ".wasm" dosyaları sunmuyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-invalid-swf =
    Ruffle istenen dosyayı ayrıştıramıyor.
    Bunun en olası nedeni, istenen dosyanın geçerli bir SWF olmamasıdır.
error-swf-fetch =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle'ın yükleyeceği hiçbir şeyin olmamasıdır.
    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-invalid =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfada Ruffle'ı çalıştırmak için eksik veya geçersiz dosyalar var.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-download =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.
    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Bunu düzeltmek için tarayıcınızın ayarlarını açın, "Gizlilik, arama ve hizmetler"i tıklayın, aşağı kaydırın ve "Web'de güvenliğinizi artırın"ı kapatmayı deneyin.
    Bu, tarayıcınızın gerekli ".wasm" dosyalarını yüklemesine izin verecektir.
    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.
error-wasm-unsupported-browser =
    Kullandığınız tarayıcı, Ruffle'ın çalışması için gereken WebAssembly uzantılarını desteklemiyor.
    Lütfen desteklenen bir tarayıcıya geçin.
    Wiki'de desteklenen tarayıcıların bir listesini bulabilirsiniz.
error-javascript-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.
    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).
error-csp-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli ".wasm" bileşeninin çalışmasına izin vermiyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine bakın.
error-unknown =
    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.
    { $outdated ->
        [true] Sunucu yöneticisiyseniz, lütfen Ruffle'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).
       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->
        [delete] silmenin
       *[replace] değiştirmenin
    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?
save-download = İndir
save-replace = Değiştir
save-delete = Sil
save-backup-all = Tüm kayıt dosyalarını indir
`,"volume-controls.ftl":`volume-controls-mute = Sustur
volume-controls-unmute = Susturmayı kaldır
`},"tt-RU":{"context_menu.ftl":`context-menu-download-swf = .swf файлны йөкләү
context-menu-copy-debug-info = Дебаг мәгълүматын күчерү
context-menu-open-save-manager = Саклау менеджерын ачу
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle өстәмәсе турында ({ $version })
       *[other] Ruffle турында ({ $version })
    }
context-menu-hide = Бу менюны яшер
context-menu-exit-fullscreen = Тулы экраннан чыгу
context-menu-enter-fullscreen = Тулы экраннан күчү
context-menu-volume-controls = Тавыш көйләүләре
`,"messages.ftl":`panic-title = Нәрсәдер дөрес эшләмәгән :(
more-info = Тулырак
run-anyway = Барыбер эшләт
continue = Дәвам итү
report-bug = Хата турында хәбәр итү
open-in-new-tab = Яңа салынмада ачу
`,"save-manager.ftl":"","volume-controls.ftl":`volume-controls-mute = Тавышны ябу
volume-controls-unmute = Тавышны ачу
`},"uk-UA":{"context_menu.ftl":`context-menu-download-swf = Завантажити .swf
context-menu-copy-debug-info = Копіювати інформацію про налагодження
context-menu-open-save-manager = Відкрити менеджер збереження
context-menu-about-ruffle =
    { $flavor ->
        [extension] Про розширення Ruffle ({ $version })
       *[other] Про Ruffle ({ $version })
    }
context-menu-hide = Приховати це меню
context-menu-exit-fullscreen = Вийти з повноекранного режиму
context-menu-enter-fullscreen = Перейти в повноекранний режим
context-menu-volume-controls = Елементи керування гучністю
`,"messages.ftl":`message-cant-embed = Ruffle не вдалося запустити Flash, вбудований у цю сторінку. Ви можете спробувати відкрити файл в окремій вкладці, щоб уникнути цієї проблеми.
message-restored-from-bfcache =
    Ваш браузер відновив цей Flash-вміст із попередньої сесії.
    Щоб почати заново, оновіть сторінку.
panic-title = Щось пішло не так :(
more-info = Більше інформації
run-anyway = Запустити все одно
continue = Продовжити
report-bug = Повідомити про помилку
update-ruffle = Оновити Ruffle
ruffle-demo = Вебдемонстрація
ruffle-desktop = Застосунок робочого столу
ruffle-wiki = Переглянути Ruffle Wiki
enable-hardware-acceleration = Схоже, апаратне прискорення вимкнено. Хоча Ruffle може працювати, це може бути дуже повільним. Ви можете дізнатися, як увімкнути апаратне прискорення, перейшовши за посиланням нижче:
enable-hardware-acceleration-link = FAQ - Апаратне прискорення Chrome
view-error-details = Переглянути деталі помилки
open-in-new-tab = Відкрити в новій вкладці
click-to-unmute = Натисніть, щоб увімкнути звук
clipboard-message-title = Копіювання та вставлення в Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ваш браузер не підтримує повний доступ до буфера обміну,
        [access-denied] У доступі до буфера обміну відмовлено,
    } але ви завжди можете скористатися цими ярликами:
clipboard-message-copy = { " " } для копіювання
clipboard-message-cut = { " " } для вирізання
clipboard-message-paste = { " " } для вставлення
error-canvas-reload = Неможливо оновити з Canvas рендерером, коли Canvas рендерер вже використовується.
error-file-protocol = Здається, ви запускаєте Ruffle за протоколом "file:". Це не працює, оскільки браузери блокують роботу багатьох функцій з міркувань безпеки. Замість цього ми запрошуємо вас налаштувати локальний сервер або скористатися вебдемонстрацією чи застосунком робочого столу.
error-javascript-config = Ruffle зіткнувся з серйозною проблемою через неправильну конфігурацію JavaScript. Якщо ви адміністратор сервера, ми пропонуємо вам перевірити деталі помилки, щоб дізнатися, який параметр є несправним. Ви також можете звернутися за допомогою до Ruffle Wiki.
error-wasm-not-found = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Якщо ви адміністратор сервера, переконайтеся, що файл завантажено правильно. Якщо проблема не зникає, можливо, вам знадобиться скористатися налаштуванням "publicPath": будь ласка, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-mime-type = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Цей вебсервер не обслуговує файли ".wasm" із правильним типом MIME. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-invalid-swf = Ruffle не може проаналізувати файл запиту. Найімовірніша причина полягає в тому, що файл запиту не є дійсним SWF.
error-swf-fetch = Ruffle не вдалося завантажити файл Flash SWF. Найімовірніша причина полягає в тому, що файл більше не існує, тому Ruffle нема чого завантажити. Спробуйте звернутися по допомогу до адміністратора сайту.
error-swf-cors = Ruffle не вдалося завантажити файл Flash SWF. Можливо, доступ до отримання було заблоковано політикою CORS. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-cors = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Можливо, доступ до отримання було заблоковано політикою CORS. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-invalid = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Здається, на цій сторінці відсутні або недійсні файли для запуску Ruffle. Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-wasm-download = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Часто це може вирішитися само собою, тому ви можете спробувати оновити сторінку. В іншому випадку зверніться до адміністратора сайту.
error-wasm-disabled-on-edge = Ruffle не вдалося завантажити необхідний файловий компонент ".wasm". Щоб виправити це, спробуйте відкрити налаштування вашого браузера, натиснути «Конфіденційність, пошук і служби», прокрутити вниз і вимкнути «Підвищити безпеку в інтернеті». Це дозволить вашому браузеру завантажити необхідні файли «.wasm». Якщо проблема не зникає, можливо, вам доведеться скористатися іншим браузером.
error-wasm-unsupported-browser =
    Ваш браузер не підтримує розширення WebAssembly, необхідні для роботи Ruffle.
    Будь ласка, переключіться на підтримуваний браузер.
    Список підтримуваних браузерів можна знайти у Вікі.
error-javascript-conflict = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Схоже, що ця сторінка використовує код JavaScript, який конфліктує з Ruffle. Якщо ви адміністратор сервера, ми запрошуємо вас спробувати завантажити файл на порожній сторінці.
error-javascript-conflict-outdated = Ви також можете спробувати завантажити новішу версію Ruffle, яка може уникнути проблеми (поточна збірка застаріла: { $buildDate }).
error-csp-conflict = Ruffle зіткнувся з серйозною проблемою під час спроби ініціалізації. Політика безпеки контенту цього вебсервера не дозволяє запускати необхідний компонент ".wasm". Якщо ви адміністратор сервера, зверніться до Ruffle Wiki, щоб отримати допомогу.
error-unknown =
    Ruffle зіткнувся з серйозною проблемою під час спроби відобразити цей Flash контент.
    { $outdated ->
        [true] Якщо ви адміністратор сервера, спробуйте завантажити новішу версію Ruffle (поточна збірка застаріла: { $buildDate }).
       *[false] Цього не повинно відбуватися, тому ми будемо дуже вдячні, якщо ви повідомите про помилку!
    }
`,"save-manager.ftl":`save-delete-prompt = Ви впевнені, що хочете видалити цей файл збереження?
save-reload-prompt =
    Єдиний спосіб { $action ->
        [delete] видалити
       *[replace] замінити
    } цей файл збереження без потенційного конфлікту є перезавантаження цього контенту. Ви все одно бажаєте продовжити?
save-download = Завантажити
save-replace = Замінити
save-delete = Видалити
save-backup-all = Завантажити всі файли збереження
`,"volume-controls.ftl":`volume-controls-mute = Вимкнути звук
volume-controls-unmute = Увімкнути звук
`},"vi-VN":{"context_menu.ftl":`context-menu-download-swf = Tải về file .swf
context-menu-copy-debug-info = Sao chép thông tin gỡ lỗi
context-menu-open-save-manager = Mở trình quản lý lưu file
context-menu-about-ruffle =
    { $flavor ->
        [extension] Giới thiệu về phần mở rộng Ruffle ({ $version })
       *[other] Giới thiệu về Ruffle ({ $version })
    }
context-menu-hide = Ẩn menu này
context-menu-exit-fullscreen = Thoát chế độ toàn màn hình
context-menu-enter-fullscreen = Chuyển sang chế độ toàn màn hình
context-menu-volume-controls = Tuỳ chỉnh âm lượng
`,"messages.ftl":`message-cant-embed =
    Ruffle không thể chạy nội dung Flash được nhúng trong trang này.
    Bạn có thể thử mở tệp ở một tab riêng biệt để tránh sự cố này.
message-restored-from-bfcache = Trình duyệt đã khôi phục lại nội dung Flash từ phiên gần nhất. Tải lại trang nếu muốn bắt đầu lại từ đầu.
panic-title = Có lỗi xảy ra :(
more-info = Thông tin thêm
run-anyway = Vẫn khởi chạy
continue = Tiếp tục
report-bug = Báo cáo lỗi
update-ruffle = Cập nhật Ruffle
ruffle-demo = Trang demo
ruffle-desktop = Ứng dụng desktop
ruffle-wiki = Truy cập Ruffle Wiki
enable-hardware-acceleration = Có vẻ như tăng tốc phần cứng đã bị vô hiệu hoá. Mặc dù Ruffle vẫn có thể hoạt động, nhưng nó có thể rất chậm. Bạn có thể tìm cách bật tăng tốc phần cứng bằng cách làm theo hướng dẫn trong đường dẫn bên dưới:
enable-hardware-acceleration-link = Các câu hỏi thường gặp - Tăng tốc phần cứng cho Chrome
view-error-details = Xem chi tiết lỗi
open-in-new-tab = Mở trong thẻ mới
click-to-unmute = Bấm để bật tiếng
clipboard-message-title = Sao chép và dán bên trong Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Trình duyệt của bạn không hỗ trợ đầy đủ truy xuất bộ nhớ tạm,
        [access-denied] Truy xuất bộ nhớ tạm bị từ chối,
    } nhưng bạn luôn có thể sử dụng phím tắt để làm điều đó:
clipboard-message-copy = { " " } để sao chép
clipboard-message-cut = { " " } để cắt
clipboard-message-paste = { " " } để dán
error-canvas-reload = Trình kết xuất đồ hoạ canvas renderer đang được sử dụng nên không thể làm mới.
error-file-protocol =
    Có vẻ như bạn đang chạy Ruffle trên giao thức "file:".
    Điều này không được phép vì trình duyệt chặn nhiều tính năng hoạt động vì lý do bảo mật.
    Thay vào đó, chúng tôi mời bạn thiết lập một máy chủ cục bộ hoặc sử dụng trang demo hoặc ứng dụng desktop.
error-javascript-config =
    Ruffle đã gặp phải sự cố lớn do cấu hình JavaScript không chính xác.
    Nếu bạn là người quản trị máy chủ, chúng tôi mời bạn kiểm tra chi tiết lỗi để tìm ra tham số nào không đúng.
    Bạn cũng có thể tham khảo thông tin trợ giúp từ Ruffle Wiki.
error-wasm-not-found =
    Ruffle không tải được tệp ".wasm" cần thiết.
    Nếu bạn là người quản trị máy chủ, vui lòng đảm bảo tệp đã được tải lên đúng cách.
    Nếu sự cố vẫn tiếp diễn, bạn có thể cần phải sử dụng thiết lập "publicPath": vui lòng tham khảo thông tin trợ giúp từ Ruffle Wiki.
error-wasm-mime-type =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Máy chủ web không cung cấp tệp ".wasm" với đúng loại MIME.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo wiki Ruffle để được trợ giúp.
error-invalid-swf =
    Ruffle không thể phân tích tệp được yêu cầu.
    Khả năng lớn nhất là do tệp được yêu cầu không phải là một tệp SWF hợp lệ.
error-swf-fetch =
    Ruffle không tải được tệp Flash SWF.
    Khả năng lớn nhất là do tệp không còn tồn tại nữa, vì vậy không có gì để Ruffle tải.
    Hãy thử liên hệ với quản trị viên trang web để được trợ giúp.
error-swf-cors =
    Ruffle không tải được tệp Flash SWF.
    Quyền truy cập để lấy dữ liệu có thể đã bị chính sách CORS chặn.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-wasm-cors =
    Ruffle không tải được tệp ".wasm" cần thiết.
    Quyền truy cập để lấy dữ liệu có thể đã bị chính sách CORS chặn.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo wiki Ruffle để được trợ giúp.
error-wasm-invalid =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Có vẻ như trang này có các tệp bị thiếu hoặc không hợp lệ để chạy Ruffle.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-wasm-download =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Vấn đề này thường có thể tự giải quyết, vì vậy bạn có thể thử tải lại trang.
    Nếu không, vui lòng liên hệ với quản trị viên trang web.
error-wasm-disabled-on-edge =
    Ruffle không tải được thành phần tệp ".wasm" cần thiết.
    Để khắc phục sự cố này, hãy thử mở cài đặt của trình duyệt, nhấp vào "Quyền riêng tư, tìm kiếm và dịch vụ", cuộn xuống và tắt "Nâng cao bảo mật trên web".
    Thao tác này sẽ cho phép trình duyệt của bạn tải các tệp ".wasm" cần thiết.
    Nếu sự cố vẫn tiếp diễn, bạn có thể phải sử dụng trình duyệt khác.
error-wasm-unsupported-browser =
    Trình duyệt bạn đang sử dụng không hỗ trợ tiện ích mở rộng WebAssembly cần thiết để chạy Ruffle.
    Vui lòng chuyển sang trình duyệt được hỗ trợ.
    Bạn có thể xem danh sách các trình duyệt được hỗ trợ trên Ruffle Wiki.
error-javascript-conflict =
    Ruffle gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Có vẻ trang này sử dụng mã JavaScript xung đột với Ruffle.
    Nếu bạn là quản trị viên máy chủ, chúng tôi mời bạn thử tải tệp trên một trang trắng.
error-javascript-conflict-outdated = Bạn cũng có thể thử tải lên phiên bản Ruffle mới hơn để xem sự cố có thể được khắc phục (bản dựng hiện tại đã cũ: { $buildDate }).
error-csp-conflict =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng khởi tạo.
    Chính sách bảo mật nội dung của máy chủ web này không cho phép chạy thành phần tệp ".wasm" bắt buộc phải có để hoạt động.
    Nếu bạn là quản trị viên máy chủ, vui lòng tham khảo Ruffle Wiki để được trợ giúp.
error-unknown =
    Ruffle đã gặp phải một vấn đề lớn khi cố gắng hiển thị nội dung Flash này.
    { $outdated ->
        [true] Nếu bạn là quản trị viên máy chủ, vui lòng thử tải lên phiên bản Ruffle mới hơn (bản dựng hiện tại đã cũ: { $buildDate }).
       *[false] Vấn đề này đáng lẽ không nên xảy ra, vì vậy chúng tôi thực sự biết ơn nếu bạn có thể báo cáo lỗi!
    }
`,"save-manager.ftl":`save-delete-prompt = Bạn có chắc chắn muốn xoá tệp đã lưu này không?
save-reload-prompt =
    Cách duy nhất để { $action ->
        [delete] xoá
       *[replace] thay thế
    } tệp đã lưu này mà không có nguy cơ xung đột là tải lại nội dung này. Bạn có muốn tiếp tục không?
save-download = Tải về
save-replace = Thay thế
save-delete = Xoá
save-backup-all = Tải xuống tất cả tệp đã lưu
`,"volume-controls.ftl":`volume-controls-mute = Tắt tiếng
volume-controls-unmute = Bật tiếng
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = 下载 .swf
context-menu-copy-debug-info = 复制调试信息
context-menu-open-save-manager = 打开存档管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 关于 Ruffle 扩展 ({ $version })
       *[other] 关于 Ruffle ({ $version })
    }
context-menu-hide = 隐藏此菜单
context-menu-exit-fullscreen = 退出全屏
context-menu-enter-fullscreen = 进入全屏
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 无法运行嵌入在此页面中的 Flash。
    您可以尝试在单独的标签页中打开该文件，以回避此问题。
message-restored-from-bfcache =
    您的浏览器从之前的会话中恢复了这个Flash内容。
    若要从头开始播放，请重新加载页面。
panic-title = 出了些问题 :(
more-info = 更多信息
run-anyway = 仍然运行
continue = 继续
report-bug = 反馈问题
update-ruffle = 更新 Ruffle
ruffle-demo = 网页演示
ruffle-desktop = 桌面应用程序
ruffle-wiki = 查看 Ruffle Wiki
enable-hardware-acceleration = 看起来硬件加速已被禁用。虽然Ruffle可能可以运行，但速度可能会非常慢。您可以通过下面的链接了解如何启用硬件加速：
enable-hardware-acceleration-link = 常见问题 - Chrome 硬件加速
view-error-details = 查看错误详情
open-in-new-tab = 在新标签页中打开
click-to-unmute = 点击取消静音
clipboard-message-title = 在Ruffle中复制粘贴
clipboard-message-description =
    { $variant ->
       *[unsupported] 您的浏览器不支持完全剪贴板访问,
        [access-denied] 对剪贴板的访问已被拒绝,
    } 但您仍然可以使用以下快捷键:
clipboard-message-copy = { " " } 复制
clipboard-message-cut = { " " } 剪切
clipboard-message-paste = { " " } 粘贴
error-canvas-reload = Canvas 渲染器已在使用中时，无法使用 Canvas 渲染器重新加载。
error-file-protocol =
    看来您正在 "file:" 协议上使用 Ruffle。
    由于浏览器以安全原因阻止许多功能，因此这不起作用。
    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。
error-javascript-config =
    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。
    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。
    您也可以查阅 Ruffle 的 Wiki 获取帮助。
error-wasm-not-found =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    如果您是服务器管理员，请确保文件已正确上传。
    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。
error-wasm-mime-type =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器没有提供 ".asm” 文件正确的 MIME 类型。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-invalid-swf =
    Ruffle无法解析请求的文件。
    最有可能的原因是该请求文件不是一个合法的SWF文件。
error-swf-fetch =
    Ruffle 无法加载 Flash SWF 文件。
    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。
    请尝试联系网站管理员寻求帮助。
error-swf-cors =
    Ruffle 无法加载 Flash SWF 文件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。
error-wasm-cors =
    Ruffle 无法加载所需的“.wasm”文件组件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-invalid =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎缺少文件来运行 Curl。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-download =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这通常可以自行解决，因此您可以尝试重新加载页面。
    否则请联系网站管理员。
error-wasm-disabled-on-edge =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    要解决这个问题，请尝试打开您的浏览器设置，单击"隐私、搜索和服务"，向下滚动并关闭"增强 Web 安全性"。
    这将允许您的浏览器加载所需的 “.wasm” 文件。
    如果问题仍然存在，您可能必须使用不同的浏览器。
error-wasm-unsupported-browser =
    您使用的浏览器不支持 Ruffle 运行所需的 WebAssembly 扩展。
    请切换到支持的浏览器。
    您可以在 Wiki 上找到支持的浏览器列表。
error-javascript-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。
    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。
error-javascript-conflict-outdated = 您也可以尝试上传可能规避此问题的较新版本的 Ruffle (当前构建版本已过时: { $buildDate })。
error-csp-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-unknown =
    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。
    { $outdated ->
        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).
       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！
    }
`,"save-manager.ftl":`save-delete-prompt = 确定要删除此存档吗？
save-reload-prompt =
    为了避免潜在的冲突，{ $action ->
        [delete] 删除
       *[replace] 替换
    } 此存档文件需要重新加载当前内容。是否仍然继续？
save-download = 下载
save-replace = 替换
save-delete = 删除
save-backup-all = 下载所有存档文件
`,"volume-controls.ftl":`volume-controls-mute = 静音
volume-controls-unmute = 取消静音
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = 下載SWF檔案
context-menu-copy-debug-info = 複製除錯資訊
context-menu-open-save-manager = 開啟存檔管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 關於Ruffle擴充功能 ({ $version })
       *[other] 關於Ruffle ({ $version })
    }
context-menu-hide = 隱藏菜單
context-menu-exit-fullscreen = 退出全螢幕
context-menu-enter-fullscreen = 進入全螢幕
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 無法執行本頁面內嵌的 Flash。
    您可以嘗試在單獨的標籤頁中開啟檔案，以避免此問題。
message-restored-from-bfcache =
    您的瀏覽器從之前的會話中還原了此 Flash 內容。
    若要重新開始，請重新載入頁面。
panic-title = 發生了某些錯誤 :(
more-info = 更多資訊
run-anyway = 直接執行
continue = 繼續
report-bug = 回報BUG
update-ruffle = 更新Ruffle
ruffle-demo = 網頁展示
ruffle-desktop = 桌面應用程式
ruffle-wiki = 查看Ruffle Wiki
enable-hardware-acceleration = 看起來硬體加速已停用。雖然 Ruffle 可以運作，但速度可能很慢。您可以透過以下連結瞭解如何啟用硬體加速：
enable-hardware-acceleration-link = FAQ - Chrome硬體加速
view-error-details = 檢視錯誤詳細資料
open-in-new-tab = 開啟新增分頁
click-to-unmute = 點擊以取消靜音
clipboard-message-title = 在 Ruffle 中複製和貼上
clipboard-message-description =
    { $variant ->
       *[unsupported] 您的瀏覽器不支援完整的剪貼板存取、
        [access-denied] 已拒絕存取剪貼簿、
    } 但您可以使用這些捷徑來代替：
clipboard-message-copy = { " " } 複製
clipboard-message-cut = { " " } 剪下
clipboard-message-paste = { " " } 貼上
error-canvas-reload = 當畫布渲染器已在使用中時，無法使用畫布渲染器重新載入。
error-file-protocol =
    您似乎是在 「file: 」協定上執行 Ruffle。
    這並不可行，因為瀏覽器基於安全理由會阻擋許多功能的運作。
    相反，我們邀請您設定本機伺服器，或使用網頁示範或桌面應用程式。
error-javascript-config =
    由於 JavaScript 設定不正確，Ruffle 遇到了重大問題。
    如果您是伺服器管理員，我們邀請您檢查錯誤細節，找出是哪個參數出了問題。
    您也可以參考 Ruffle wiki 以獲得協助。
error-wasm-not-found =
    Ruffle 未能載入所需的 「.wasm」 檔案元件。
    如果您是伺服器管理員，請確認檔案已正確上傳。
    如果問題仍然存在，您可能需要使用「publicPath」設定：請參閱 Ruffle wiki 以獲得協助。
error-wasm-mime-type =
    Ruffle 在嘗試初始化時遇到重大問題。
    此 Web 伺服器無法提供 MIME 類型正確的 「.wasm 」檔案。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-invalid-swf =
    Ruffle 無法解析請求的檔案。
    最可能的原因是請求的檔案不是有效的 SWF。
error-swf-fetch =
    Ruffle 未能載入 Flash SWF 檔案。
    最可能的原因是該檔案已不存在，因此 Ruffle 無法載入任何內容。
    請嘗試聯絡網站管理員尋求協助。
error-swf-cors =
    Ruffle 未能載入 Flash SWF 檔案。
    訪問 fetch 可能已被 CORS 策略封鎖。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-cors =
    Ruffle 未能載入所需的 「.wasm」 檔案元件。
    訪問 fetch 可能已被 CORS 策略封鎖。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-invalid =
    Ruffle 在嘗試初始化時遇到重大問題。
    此頁面似乎有遺失或無效的檔案，無法執行 Ruffle。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以獲得協助。
error-wasm-download =
    Ruffle 在嘗試初始化時遇到重大問題。
    這通常可以自行解決，因此您可以嘗試重新載入頁面。
    否則，請聯絡網站管理員。
error-wasm-disabled-on-edge =
    Ruffle 未能載入所需的「.wasm 」檔案元件。
    要解決這個問題，請嘗試打開瀏覽器的設定，按一下「隱私、搜尋和服務」，向下捲動，然後關閉「加強您在網路上的安全性」。
    這將允許您的瀏覽器載入所需的「.wasm 」檔案。
    如果問題仍然存在，您可能必須使用其他瀏覽器。
error-wasm-unsupported-browser =
    您使用的瀏覽器不支援 Ruffle 執行所需的 WebAssembly 擴充套件。
    請切換到支援的瀏覽器。
    您可以在 Wiki 上找到支援的瀏覽器清單。
error-javascript-conflict =
    Ruffle 在嘗試初始化時遇到重大問題。
    這個頁面似乎使用了與 Ruffle 相衝突的 JavaScript 程式碼。
    如果您是伺服器管理員，請嘗試在空白頁面上載入檔案。
error-javascript-conflict-outdated = 您也可以嘗試上傳較新版本的 Ruffle，可能會避免此問題 (目前的版本已過時：{ $buildDate })。
error-csp-conflict =
    Ruffle 在嘗試初始化時遇到重大問題。
    此網頁伺服器的內容安全政策不允許執行所需的 「.wasm 」元件。
    如果您是伺服器管理員，請參閱 Ruffle wiki 以取得協助。
error-unknown =
    Ruffle 在嘗試顯示此 Flash 內容時遇到了重大問題。
    { $outdated ->
        [true]  如果您是伺服器管理員，請嘗試上傳較新版本的 Ruffle (目前的版本已經過時 { $buildDate })。
       *[false] 這不應該發生，所以如果您能提出錯誤，我們會非常感激！
    }
`,"save-manager.ftl":`save-delete-prompt = 你確定要刪除這個存檔嗎？
save-reload-prompt =
    唯一方法只有 { $action ->
        [delete] 刪除
       *[replace] 取代
    } 這個存檔不會完全取代直到重新啟動。 你需要繼續嗎?
save-download = 下載
save-replace = 取代
save-delete = 刪除
save-backup-all = 下載所有存檔檔案。
`,"volume-controls.ftl":`volume-controls-mute = 靜音
volume-controls-unmute = 取消靜音
`}},R0={};for(const[p,s]of Object.entries(Ia)){const f=new $t(p);if(s){let h;for(const[y,z]of Object.entries(s))if(z){h??=nl();for(const M of f.addResource(new Hs(z)))console.error(`Error in text for ${p} ${y}: ${M}`)}ct(h)}R0[p]=f}function dt(p,s,f){const h=R0[p];if(h!==void 0){const y=h.getMessage(s);if(y!==void 0&&y.value)return h.formatPattern(y.value,f)}return null}function ve(p,s){const f=nl(),h=Vs(navigator.languages,Object.keys(R0),{defaultLocale:"en-US"});for(const y in h){const z=dt(h[y],p,s);if(z)return z}return console.error(`Unknown text key '${p}'`),ct(f),p}function lu(p,s){const f=document.createElement("div");return ve(p,s).split(`
`).forEach(h=>{const y=document.createElement("p");y.innerText=h,f.appendChild(y)}),f}const ft=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl",Ru=document.createElement("template");Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("style",{children:`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;overflow:auto;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border-radius:8px;box-shadow:0 0 16px #0006;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;overflow:hidden;padding:5px 0;position:absolute;text-align:start;white-space:nowrap}#context-menu .menu-item{padding:7px 12px}#context-menu.has-checkmarks .menu-item{padding-inline-start:32px;position:relative}#context-menu.has-checkmarks .menu-item.checked:before{background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57z"/></svg>');background-repeat:no-repeat;background-size:contain;content:"";filter:var(--modal-foreground-filter);height:16px;inset-inline-start:8px;position:absolute;top:50%;transform:translateY(-50%);width:16px}#context-menu .menu-item.disabled{color:rgb(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgb(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgb(var(--modal-foreground-rgb),.2);margin:4px 0}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{animation:a 1.5s linear infinite;stroke:var(--ruffle-orange);stroke-dasharray:180;stroke-dashoffset:135;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgb(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("style",{id:"dynamic-styles"})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsxs)("div",{id:"container",children:[(0,D.jsx)("div",{id:"play-button",children:(0,D.jsx)("div",{class:"icon",children:(0,D.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[(0,D.jsxs)("defs",{xmlns:"http://www.w3.org/2000/svg",children:[(0,D.jsxs)("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[(0,D.jsx)("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),(0,D.jsx)("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),(0,D.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[(0,D.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),(0,D.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),(0,D.jsx)("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),(0,D.jsxs)("div",{id:"unmute-overlay",children:[(0,D.jsx)("div",{class:"background"}),(0,D.jsx)("div",{class:"icon",children:(0,D.jsxs)("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[(0,D.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),(0,D.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),(0,D.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),(0,D.jsx)("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),(0,D.jsx)("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsxs)("div",{id:"splash-screen",class:"hidden",children:[(0,D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:(0,D.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",children:[(0,D.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),(0,D.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),(0,D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:(0,D.jsx)("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),(0,D.jsx)("div",{class:"loadbar",children:(0,D.jsx)("div",{class:"loadbar-inner"})})]})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("div",{id:"save-manager",class:"modal hidden",children:(0,D.jsxs)("div",{id:"modal-area",class:"modal-area",children:[(0,D.jsx)("span",{class:"close-modal"}),(0,D.jsx)("div",{class:"general-save-options",children:(0,D.jsx)("span",{class:"modal-button"})}),(0,D.jsx)("table",{id:"local-saves"})]})})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("div",{id:"volume-controls-modal",class:"modal hidden",children:(0,D.jsx)("div",{class:"modal-area",children:(0,D.jsxs)("div",{id:"volume-controls",children:[(0,D.jsx)("input",{id:"mute-checkbox",type:"checkbox"}),(0,D.jsx)("label",{id:"volume-mute",for:"mute-checkbox",title:ve("volume-controls-unmute")}),(0,D.jsx)("label",{id:"volume-min",for:"mute-checkbox",title:ve("volume-controls-mute")}),(0,D.jsx)("label",{id:"volume-mid",for:"mute-checkbox",title:ve("volume-controls-mute")}),(0,D.jsx)("label",{id:"volume-max",for:"mute-checkbox",title:ve("volume-controls-mute")}),(0,D.jsx)("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),(0,D.jsx)("span",{id:"volume-slider-text"}),(0,D.jsx)("span",{class:"close-modal"})]})})})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("div",{id:"video-modal",class:"modal hidden",children:(0,D.jsxs)("div",{class:"modal-area",children:[(0,D.jsx)("span",{class:"close-modal"}),(0,D.jsx)("div",{id:"video-holder"})]})})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:(0,D.jsxs)("div",{class:"modal-area",children:[(0,D.jsx)("span",{class:"close-modal"}),(0,D.jsx)("span",{id:"acceleration-text",children:ve("enable-hardware-acceleration")}),(0,D.jsx)("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:ve("enable-hardware-acceleration-link")})]})})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("div",{id:"clipboard-modal",class:"modal hidden",children:(0,D.jsxs)("div",{class:"modal-area",children:[(0,D.jsx)("span",{class:"close-modal"}),(0,D.jsx)("h2",{children:ve("clipboard-message-title")}),(0,D.jsx)("p",{id:"clipboard-modal-description"}),(0,D.jsxs)("p",{children:[(0,D.jsxs)("b",{children:[ft,"+C"]}),(0,D.jsx)("span",{children:ve("clipboard-message-copy")})]}),(0,D.jsxs)("p",{children:[(0,D.jsxs)("b",{children:[ft,"+X"]}),(0,D.jsx)("span",{children:ve("clipboard-message-cut")})]}),(0,D.jsxs)("p",{children:[(0,D.jsxs)("b",{children:[ft,"+V"]}),(0,D.jsx)("span",{children:ve("clipboard-message-paste")})]})]})})},{})),Ru.content.appendChild((0,D.jsx)(function(){return(0,D.jsx)("div",{id:"context-menu-overlay",class:"hidden",children:(0,D.jsx)("ul",{id:"context-menu"})})},{}));const il="application/x-shockwave-flash",Gn="application/futuresplash",Wn="application/x-shockwave-flash2-preview",Zn="application/vnd.adobe.flash.movie";function Qt(p,s){const f=(function(h){let y="";try{y=new URL(h,"https://example.com").pathname}catch{}if(y&&y.length>=4){const z=y.slice(-4).toLowerCase();if(z===".swf"||z===".spl")return!0}return!1})(p);return s?(function(h,y){switch(h=h.toLowerCase()){case il.toLowerCase():case Gn.toLowerCase():case Wn.toLowerCase():case Zn.toLowerCase():return!0;default:if(y)switch(h){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1})(s,f):f}let mt=null,Ta=!1;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==""){let p=document.currentScript.src;p.endsWith(".js")||p.endsWith("/")||(p+="/"),mt=new URL(".",p),Ta=mt.protocol.includes("extension")}}catch(p){console.warn("Unable to get currentScript URL",p)}const N0="https://ruffle.rs";class qa extends Error{constructor(s,f){super(`Failed to fetch ${s}`),this.swfUrl=s,this.statusNotOk=f,this.swfUrl=s,this.statusNotOk=f}}class fu extends Error{constructor(s){super(`Not a valid swf: ${s}`)}}class yu extends Error{constructor(s){super("Failed to load Ruffle WASM"),this.cause=s}}class e0 extends Error{constructor(s){super(`Invalid options: ${s}`)}}var Pn=m(29);function Xn(){const p=new Date(j.buildDate),s=new Date;return s.setMonth(s.getMonth()-6),s>p}const Le={OpenDemo:{type:"open_link",url:N0+"/demo",label:ve("ruffle-demo")},DownloadDesktop:{type:"open_link",url:N0+"/downloads#desktop-app",label:ve("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:N0+"/downloads",label:ve("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return Xn()?this.UpdateRuffle:this.CreateReport},openWiki:(p,s)=>({type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${p}`,label:s??ve("ruffle-wiki")})};function ll(p,s,f,h){const y=f.join(""),{body:z,actions:M}=(function(W){if(W instanceof qa)return W.swfUrl&&!W.swfUrl.protocol.includes("http")?{body:lu("error-file-protocol"),actions:[Le.OpenDemo,Le.DownloadDesktop]}:window.location.origin===W.swfUrl?.origin||W.statusNotOk||window.location.protocol.includes("extension")?{body:lu("error-swf-fetch"),actions:[Le.ShowDetails]}:{body:lu("error-swf-cors"),actions:[Le.openWiki("Using-Ruffle#configure-cors-header"),Le.ShowDetails]};if(W instanceof fu)return{body:lu("error-invalid-swf"),actions:[Le.ShowDetails]};if(W instanceof yu){if(window.location.protocol==="file:")return{body:lu("error-file-protocol"),actions:[Le.OpenDemo,Le.DownloadDesktop]};const ae=String(W.cause.message).toLowerCase();if(ae.includes("mime"))return{body:lu("error-wasm-mime-type"),actions:[Le.openWiki("Using-Ruffle#configure-webassembly-mime-type"),Le.ShowDetails]};if(ae.includes("networkerror")||ae.includes("failed to fetch")||ae.includes("load failed"))return{body:lu("error-wasm-cors"),actions:[Le.openWiki("Using-Ruffle#configure-cors-header"),Le.ShowDetails]};if(ae.includes("disallowed by embedder"))return{body:lu("error-csp-conflict"),actions:[Le.openWiki("Using-Ruffle#configure-wasm-csp"),Le.ShowDetails]};if(W.cause.name==="CompileError"&&ae.includes("bad type"))return{body:lu("error-wasm-unsupported-browser"),actions:[Le.openWiki("#web"),Le.ShowDetails]};if(W.cause.name==="CompileError"||ae.includes("failed to execute 'compile' on 'webassembly'"))return{body:lu("error-wasm-invalid"),actions:[Le.openWiki("Using-Ruffle#addressing-a-compileerror"),Le.ShowDetails]};if((ae.includes("could not download wasm module")||ae.includes("webassembly compilation aborted"))&&W.cause.name==="TypeError")return{body:lu("error-wasm-download"),actions:[Le.ShowDetails]};if(W.cause.name==="TypeError"){const xe=lu("error-javascript-conflict");return Xn()&&xe.appendChild(lu("error-javascript-conflict-outdated",{buildDate:j.buildDate})),{body:xe,actions:[Le.createReportOrUpdate(),Le.ShowDetails]}}return navigator.userAgent.includes("Edg")&&ae.includes("webassembly is not defined")?{body:lu("error-wasm-disabled-on-edge"),actions:[Le.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",ve("more-info")),Le.ShowDetails]}:{body:lu("error-wasm-not-found"),actions:[Le.openWiki("Using-Ruffle#configuration-options"),Le.ShowDetails]}}return W instanceof e0?{body:lu("error-javascript-config"),actions:[Le.openWiki("Using-Ruffle#javascript-api"),Le.ShowDetails]}:{body:lu("error-unknown",{buildDate:j.buildDate,outdated:String(Xn)}),actions:[Le.createReportOrUpdate(),Le.ShowDetails]}})(s),H=(0,Pn.createRef)(),J=()=>{H.current.classList.add("details"),H.current.replaceChildren((0,D.jsx)("textarea",{readOnly:!0,children:y}))};p.textContent="",p.appendChild((0,D.jsxs)("div",{id:"panic",children:[(0,D.jsx)("div",{id:"panic-title",children:ve("panic-title")}),(0,D.jsx)("div",{id:"panic-body",ref:H,children:z}),(0,D.jsx)("div",{id:"panic-footer",children:(0,D.jsx)("ul",{children:M.map(W=>(function({action:ae,showDetails:xe,errorArray:fe,errorText:Re,swfUrl:eu}){if(ae.type==="show_details"){const ju=()=>(xe(),!1);return(0,D.jsx)("li",{children:(0,D.jsx)("a",{href:"#",id:"panic-view-details",onClick:ju,children:ve("view-error-details")})})}if(ae.type==="open_link")return(0,D.jsx)("li",{children:(0,D.jsx)("a",{href:ae.url,target:"_top",children:ae.label})});{let ju;ju=document.location.protocol.includes("extension")&&eu?eu.href:document.location.href,ju=ju.split(/[?#]/,1)[0];let wu=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${ju}`)}&template=error_report.md&labels=error-report&body=`,Qu=encodeURIComponent(Re);return fe.stackIndex>-1&&String(wu+Qu).length>8195&&(fe[fe.stackIndex]=null,fe.avmStackIndex>-1&&(fe[fe.avmStackIndex]=null),Qu=encodeURIComponent(fe.join(""))),wu+=Qu,(0,D.jsx)("li",{children:(0,D.jsx)("a",{href:wu,target:"_top",children:ve("report-bug")})})}})({action:W,showDetails:J,errorText:y,errorArray:f,swfUrl:h}))})})]}))}const bt=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),In=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),A0=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),E0=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),ht=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));let Va=null;async function mu(p){Va===null&&(Va=(async function(f){Yt();const h=(await Promise.all([bt(),ht(),A0(),E0(),In()])).every(Boolean);h||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),n0.options.onFirstLoad?.(),n0.options.onFirstLoad=()=>{};const{default:y,RuffleInstanceBuilder:z,ZipWriter:M}=await(h?m.e(655).then(m.bind(m,655)):m.e(482).then(m.bind(m,482)));let H;const J=h?new URL(m(797),m.b):new URL(m(124),m.b),W=await fetch(J);if(f&&typeof ReadableStreamDefaultController=="function"){const xe=W?.headers?.get("content-length")||"";let fe=0;const Re=parseInt(xe);H=new Response(new ReadableStream({async start(eu){const ju=W.body?.getReader();if(!ju)throw"Response had no body";for(f(fe,Re);;){const{done:wu,value:Qu}=await ju.read();if(wu)break;Qu?.byteLength&&(fe+=Qu?.byteLength),eu.enqueue(Qu),f(fe,Re)}eu.close()}}),W)}else H=W;return await y({module_or_path:H}),[z,M]})(p));const s=await Va;return[new s[0],()=>new s[1]]}const Jt={};function Gt(p,s){const f=Jt[p];if(f!==void 0){if(f.class!==s)throw new Error("Internal naming conflict on "+p);return f.name}let h=0;if(window.customElements!==void 0)for(;h<999;){let y=p;if(h>0&&(y=y+"-"+h),window.customElements.get(y)===void 0)return window.customElements.define(y,s),Jt[p]={class:s,name:y,internalName:p},y;h+=1}throw new Error("Failed to assign custom element "+p)}function ze(p){return p!=null}function T0(p,s){if(ze(s.allowScriptAccess)&&p.setAllowScriptAccess(s.allowScriptAccess),ze(s.backgroundColor)&&p.setBackgroundColor((function(f){if(f.startsWith("#")&&(f=f.substring(1)),f.length<6)return;let h=0;for(let y=0;y<6;y++){const z=parseInt(f[y],16);isNaN(z)?h<<=4:h=h<<4|z}return h})(s.backgroundColor)),ze(s.upgradeToHttps)&&p.setUpgradeToHttps(s.upgradeToHttps),ze(s.compatibilityRules)&&p.setCompatibilityRules(s.compatibilityRules),ze(s.letterbox)&&p.setLetterbox(s.letterbox.toLowerCase()),ze(s.base)&&p.setBaseUrl(s.base),ze(s.menu)&&p.setShowMenu(s.menu),ze(s.allowFullscreen)&&p.setAllowFullscreen(s.allowFullscreen),ze(s.salign)&&p.setStageAlign(s.salign.toLowerCase()),ze(s.forceAlign)&&p.setForceAlign(s.forceAlign),ze(s.quality)?p.setQuality(s.quality.toLowerCase()):window.orientation!==void 0&&(console.log("Running on a mobile device; defaulting to low quality"),p.setQuality("low")),ze(s.scale)&&p.setScale(s.scale.toLowerCase()),ze(s.forceScale)&&p.setForceScale(s.forceScale),ze(s.frameRate)&&p.setFrameRate(s.frameRate),ze(s.wmode)&&p.setWmode(s.wmode),ze(s.logLevel)&&p.setLogLevel(s.logLevel),ze(s.maxExecutionDuration)&&p.setMaxExecutionDuration((function(f){return typeof f=="number"?f:f.secs})(s.maxExecutionDuration)),ze(s.playerVersion)&&p.setPlayerVersion(s.playerVersion),ze(s.preferredRenderer)&&p.setPreferredRenderer(s.preferredRenderer),ze(s.openUrlMode)&&p.setOpenUrlMode(s.openUrlMode.toLowerCase()),ze(s.allowNetworking)&&p.setAllowNetworking(s.allowNetworking.toLowerCase()),ze(s.credentialAllowList)&&p.setCredentialAllowList(s.credentialAllowList),ze(s.playerRuntime)&&p.setPlayerRuntime(s.playerRuntime),ze(s.socketProxy))for(const f of s.socketProxy)p.addSocketProxy(f.host,f.port,f.proxyUrl);if(ze(s.gamepadButtonMapping))for(const[f,h]of Object.entries(s.gamepadButtonMapping))p.addGamepadButtonMapping(f,h);if(ze(s.urlRewriteRules))for(const[f,h]of s.urlRewriteRules)if(f instanceof RegExp)p.addUrlRewriteRule(f,h);else{const y=f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),z=new RegExp(`^${y}$`),M=h.replace(/\$/g,"$$$$");p.addUrlRewriteRule(z,M)}ze(s.scrollingBehavior)&&p.setScrollingBehavior(s.scrollingBehavior),ze(s.deviceFontRenderer)&&p.setDeviceFontRenderer(s.deviceFontRenderer)}const Ks=/^\s*(\d+(\.\d+)?(%)?)/;let pt=!1;function Wt(p){if(p==null)return{};p instanceof URLSearchParams||(p=new URLSearchParams(p));const s={};for(const[f,h]of p)s[f]=h.toString();return s}class sl{constructor(s,f){this.x=s,this.y=f}distanceTo(s){const f=s.x-this.x,h=s.y-this.y;return Math.sqrt(f*f+h*h)}}class aa{constructor(s,f,h){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:H,solName:J,solData:W})=>(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{title:H,children:J}),(0,D.jsx)("td",{children:(0,D.jsx)("span",{class:"save-option",id:"download-save",title:ve("save-download"),onClick:()=>xt((function(ae,xe){const fe=ui(ae);return new Blob([fe],{type:xe})})(W,"application/octet-stream"),J+".sol")})}),(0,D.jsxs)("td",{children:[(0,D.jsx)("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+H,onChange:ae=>this.replaceSOL(ae,H)}),(0,D.jsx)("label",{for:"replace-save-"+H,class:"save-option",id:"replace-save",title:ve("save-replace")})]}),(0,D.jsx)("td",{children:(0,D.jsx)("span",{class:"save-option",id:"delete-save",title:ve("save-delete"),onClick:()=>this.deleteSave(H)})})]}),this.element=s,this.debugPlayerInfo=f,this.onCallbackAvailable=h,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(Ru.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new Zt(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const y=this.saveManager.querySelector(".modal-button");y&&(y.addEventListener("click",this.backupSaves.bind(this)),y.innerText=ve("save-backup-all"));const z=this.unmuteOverlay.querySelector("#unmute-overlay-svg");z&&(z.querySelector("#unmute-text").textContent=ve("click-to-unmute")),this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");const M=H=>{H.preventDefault(),H.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",M),this.contextMenuElement.addEventListener("click",M),this.contextMenuElement.dir=(function(){const H=new Intl.Locale(navigator.language);let J=null;if("getTextInfo"in H&&typeof H.getTextInfo=="function")J=H.getTextInfo();else{if(!("textInfo"in H)||typeof H.textInfo!="object")return"ltr";J=H.textInfo}return typeof J=="object"&&"direction"in J&&typeof J.direction=="string"&&J.direction||"ltr"})(),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=N.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.backgroundWorker=null,this.setupTabVisibilityHandling()}addFSCommandHandler(s){this.onFSCommand.push(s)}callFSCommand(s,f){if(this.onFSCommand.length===0)return!1;for(const h of this.onFSCommand)h(s,f);return!0}addModalJavaScript(s){const f=s.querySelector("#video-holder"),h=()=>{s.classList.add("hidden"),f&&(f.textContent="")};s.parentNode.addEventListener("click",h);const y=s.querySelector(".modal-area");y&&y.addEventListener("click",M=>M.stopPropagation());const z=s.querySelector(".close-modal");z&&z.addEventListener("click",h)}addVolumeControlsJavaScript(s){const f=s.querySelector("#mute-checkbox"),h=s.querySelector("#volume-mute"),y=[s.querySelector("#volume-min"),s.querySelector("#volume-mid"),s.querySelector("#volume-max")],z=s.querySelector("#volume-slider"),M=s.querySelector("#volume-slider-text"),H=()=>{if(this.volumeSettings.isMuted)h.style.display="inline",y.forEach(J=>{J.style.display="none"});else{h.style.display="none";const J=Math.round(this.volumeSettings.volume/50);y.forEach((W,ae)=>{W.style.display=ae===J?"inline":"none"})}};f.checked=this.volumeSettings.isMuted,z.disabled=f.checked,z.valueAsNumber=this.volumeSettings.volume,M.textContent=z.value+"%",H(),f.addEventListener("change",()=>{z.disabled=f.checked,this.volumeSettings.isMuted=f.checked,this.instance?.set_volume(this.volumeSettings.get_volume()),H()}),z.addEventListener("input",()=>{M.textContent=z.value+"%",this.volumeSettings.volume=z.valueAsNumber,this.instance?.set_volume(this.volumeSettings.get_volume()),H()})}setupTabVisibilityHandling(){document.addEventListener("visibilitychange",()=>{if(!this.instance)return;const s=this.loadedConfig?.backgroundExecutionMode??ce.None;document.hidden?(this.lastActivePlayingState=this.instance.is_playing(),s===ce.MainThread?(this.instance.enable_background_tick_mode(),this.lastActivePlayingState&&this.startBackgroundTick()):this.instance.pause()):(s===ce.MainThread&&(this.stopBackgroundTick(),this.instance.restart_animation_loop()),this.lastActivePlayingState&&this.instance.play(),this.instance.audio_context()?.resume())})}startBackgroundTick(){const s=`
            const intervalMs = ${1e3/(this.metadata?.frameRate||24)};
            self.onmessage = () => {
                setTimeout(() => self.postMessage("tick"), intervalMs);
            };
            setTimeout(() => self.postMessage("tick"), intervalMs);
        `;try{const f=new Blob([s],{type:"application/javascript"}),h=URL.createObjectURL(f),y=new Worker(h);URL.revokeObjectURL(h),this.backgroundWorker=y,y.onmessage=()=>{this.backgroundWorker===y&&(this.instance?.tick_for_background(performance.now()),y.postMessage("ack"))}}catch(f){console.warn("Unable to create background Worker:",f),this.instance?.pause()}}stopBackgroundTick(){this.backgroundWorker?.terminate(),this.backgroundWorker=null}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let y=this.dynamicStyles.sheet.cssRules.length-1;y>=0;y--)this.dynamicStyles.sheet.deleteRule(y);const s=this.element.attributes.getNamedItem("align");if(s!=null){const y=s.value.toLowerCase(),z=(()=>{switch(y){case"right":return"vertical-align: top; float: right;";case"left":return"vertical-align: top; float: left;";case"bottom":return"vertical-align: baseline;";case"top":return"vertical-align: top;";case"center":return"vertical-align: middle; vertical-align: -moz-middle-with-baseline;";case"middle":return"vertical-align: middle; vertical-align: -webkit-baseline-middle; vertical-align: -moz-middle-with-baseline;";case"absbottom":return"vertical-align: bottom;";case"absmiddle":case"abscenter":return"vertical-align: middle;";case"texttop":return"vertical-align: text-top;";default:return""}})();z&&this.dynamicStyles.sheet.insertRule(`:host { ${z} }`)}const f=this.element.attributes.getNamedItem("width");if(f!=null){const y=aa.htmlDimensionToCssDimension(f.value);y!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${y}; }`)}const h=this.element.attributes.getNamedItem("height");if(h!=null){const y=aa.htmlDimensionToCssDimension(h.value);y!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${y}; }`)}}}isUnusedFallbackObject(){const s=(function(f){const h=Jt[f];return h!==void 0?{internalName:f,name:h.name,class:h.class}:null})("ruffle-object");if(s!==null){let f=this.element.parentNode;for(;f!==document&&f!==null;){if(f.nodeName===s.name)return!0;f=f.parentNode}}return!1}async ensureFreshInstance(){this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[s,f]=await mu(this.onRuffleDownloadProgress.bind(this)).catch(z=>{console.error(`Serious error loading Ruffle: ${z}`);const M=new yu(z);throw this.panic(M),M});if(this.newZipWriter=f,T0(s,this.loadedConfig||{}),s.setVolume(this.volumeSettings.get_volume()),this.loadedConfig?.fontSources)for(const z of this.loadedConfig.fontSources)try{const M=await fetch(z);s.addFont(z,new Uint8Array(await M.arrayBuffer()))}catch(M){console.warn(`Couldn't download font source from ${z}`,M)}for(const z in this.loadedConfig?.defaultFonts){const M=this.loadedConfig.defaultFonts[z];M&&s.setDefaultFont(z,M)}this.instance=await s.build(this.container,this).catch(z=>{throw console.error(`Serious error loading Ruffle: ${z}`),this.panic(z),z}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const h=this.instance.renderer_name(),y=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+j.versionName+" | WebAssembly extensions: "+(y.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(h??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(z=>{window.setTimeout(()=>{z()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===k.On||this.loadedConfig.autoplay!==k.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){this.loadedConfig&&this.loadedConfig.unmuteOverlay===q.Hidden||(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const z=this.instance?.audio_context();z&&(z.onstatechange=()=>{z.state==="running"&&this.unmuteOverlayClicked(),z.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(s,f){const h=this.splashScreen.querySelector(".loadbar-inner"),y=this.splashScreen.querySelector(".loadbar");Number.isNaN(f)?y&&(y.style.display="none"):h.style.width=s/f*100+"%"}destroy(){this.instance&&(this.stopBackgroundTick(),this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=N.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(s){if(typeof s=="string")return{url:s};const f=(h,y)=>{if(!h){const z=new e0(y);throw this.panic(z),z}};return f(s!==null&&typeof s=="object","Argument 0 must be a string or object"),f("url"in s||"data"in s,"Argument 0 must contain a `url` or `data` key"),f(!("url"in s)||typeof s.url=="string","`url` must be a string"),s}async reload(){if(!this.loadedConfig)throw new Error("Cannot reload if load wasn't first called");await this.load(this.loadedConfig)}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==_.Canvas){const s={...this.loadedConfig,preferredRenderer:_.Canvas};await this.load(s)}else{if(!this.loadedConfig)throw new Error("Cannot reload if load wasn't first called");this.panic(new Error(ve("error-canvas-reload")))}}async load(s,f=!1){if(s=this.checkOptions(s),this.element.isConnected&&!this.isUnusedFallbackObject()){if(!ei(this.element))try{this.loadedConfig={...he,...f&&"url"in s?{allowScriptAccess:$u("samedomain",s.url)}:{},...window.RufflePlayer?.config??{},...this.config,...s},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==A.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in s?(console.log(`Loading SWF file ${s.url}`),this.swfUrl=new URL(s.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,Wt(s.parameters))):"data"in s&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(s.data),Wt(s.parameters),s.swfFileName||"movie.swf"))}catch(h){console.error(`Serious error occurred loading SWF file: ${h}`);const y=new Error(h);throw this.panic(y),y}}else console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return!!this.instance&&this.instance.is_playing()}get volume(){return this.instance?this.instance.volume():1}set volume(s){this.instance&&this.instance.set_volume(s)}get fullscreenEnabled(){return!(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(s){this.fullscreenEnabled&&s!==this.isFullscreen&&(s?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const s={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(s):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(s):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(s)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){if(this.isFullscreen&&screen.orientation&&typeof screen.orientation.lock=="function"){const s=this.loadedConfig?.fullScreenAspectRatio?.toLowerCase()??"";["portrait","landscape","any"].includes(s)&&screen.orientation.lock(s).catch(()=>{})}else try{screen.orientation.unlock()}catch{}this.instance?.set_fullscreen(this.isFullscreen)}checkIfTouch(s){this.isTouch=s.pointerType==="touch"||s.pointerType==="pen"}confirmReloadSave(s,f,h){if(u0(f)&&localStorage[s]){if(!h&&!confirm(ve("save-delete-prompt")))return;const y=this.swfUrl?this.swfUrl.pathname:"",z=this.swfUrl?this.swfUrl.hostname:document.location.hostname,M=s.split("/").slice(1,-1).join("/");if(y.includes(M)&&s.startsWith(z))return void(confirm(ve("save-reload-prompt",{action:h?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),h?localStorage.setItem(s,f):localStorage.removeItem(s),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden")));h?localStorage.setItem(s,f):localStorage.removeItem(s),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(s,f){const h=s.target,y=new FileReader;y.addEventListener("load",()=>{if(y.result&&typeof y.result=="string"){const z=new RegExp("data:.*;base64,"),M=y.result.replace(z,"");this.confirmReloadSave(f,M,!0)}}),h&&h.files&&h.files.length>0&&h.files[0]&&y.readAsDataURL(h.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(s=>{const f=s.split("/").pop(),h=localStorage.getItem(s);return f&&h&&u0(h)})}deleteSave(s){const f=localStorage.getItem(s);f&&this.confirmReloadSave(s,f,!1)}populateSaves(){if(!this.checkSaves())return;const s=this.saveManager.querySelector("#local-saves");s.textContent="",Object.keys(localStorage).forEach(f=>{const h=f.split("/").pop(),y=localStorage.getItem(f);h&&y&&u0(y)&&s.appendChild((0,D.jsx)(this.SaveRow,{rowKey:f,solName:h,solData:y}))})}async backupSaves(){const s=this.newZipWriter(),f=[];Object.keys(localStorage).forEach(h=>{let y=String(h.split("/").pop());const z=localStorage.getItem(h);if(z&&u0(z)){const M=ui(z),H=f.filter(J=>J===y).length;f.push(y),H>0&&(y+=` (${H+1})`),s.addFile(y+".sol",M)}}),xt(new Blob([s.save()],{type:"application/zip"}),"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const s=await fetch(this.swfUrl.href);if(!s.ok)return void console.error("SWF download failed");xt(await s.blob(),(function(f){const h=f.pathname;return h.substring(h.lastIndexOf("/")+1)})(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const s=this.virtualKeyboard,f=s.value;for(const h of f)for(const y of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(y,{key:h,bubbles:!0}));s.value=""}openVirtualKeyboard(){this.instance?.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const s=[],f=()=>{s.length>0&&s[s.length-1]!==null&&s.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((h,y)=>{h.separatorBefore&&f(),s.push({text:h.caption,onClick:async()=>this.instance?.run_context_menu_callback(y),enabled:h.enabled,checked:h.checked})}),f()),this.fullscreenEnabled&&(this.isFullscreen?s.push({text:ve("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):s.push({text:ve("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),s.push({text:ve("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(f(),s.push({text:ve("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&s.push({text:ve("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&s.push({text:ve("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),f(),s.push({text:ve("context-menu-about-ruffle",{flavor:Ta?"extension":"",version:j.versionName}),async onClick(){window.open(N0,"_blank")}}),this.isTouch&&(f(),s.push({text:ve("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),s}pointerDown(s){this.pointerDownPosition=new sl(s.pageX,s.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(s){if(this.pointerDownPosition!==null){const f=new sl(s.pageX,s.pageY),h=this.pointerDownPosition.distanceTo(f);h>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=h)}}checkLongPress(s){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&s.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(s)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(s){if(this.panicked)return;if(s.type==="contextmenu"&&s.shiftKey)return void this.hideContextMenu();if(s.preventDefault(),this._suppressContextMenu)return void(this._suppressContextMenu=!1);if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(s.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),s.stopPropagation()),[!1,C.Off].includes(this.loadedConfig?.contextMenu??C.On)||this.isTouch&&this.loadedConfig?.contextMenu===C.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);const f=this.contextMenuItems(),h=f.some(wu=>wu!==null&&wu.checked!==void 0);this.contextMenuElement.classList.toggle("has-checkmarks",h);for(const wu of f)if(wu===null)this.contextMenuElement.appendChild((0,D.jsx)("li",{class:"menu-separator",children:(0,D.jsx)("hr",{})}));else{const{text:Qu,onClick:en,enabled:B0,checked:yt}=wu,I=(0,D.jsx)("li",{class:{"menu-item":!0,disabled:B0===!1,checked:yt===!0},"data-text":Qu,children:Qu});if(this.contextMenuElement.appendChild(I),B0!==!1){const de=async Pe=>{Pe.preventDefault(),Pe.stopPropagation(),await en(Pe),this.hideContextMenu()};this.contextMenuSupported?(I.addEventListener("click",de),I.addEventListener("contextmenu",de)):I.addEventListener("pointerup",de)}}this.contextMenuOverlay.classList.remove("hidden");const y=this.element.getBoundingClientRect(),z=this.contextMenuElement.getBoundingClientRect(),M=document.scrollingElement||document.body,H=z.width,J=z.height,W=M.clientWidth,ae=M.clientHeight;let xe=s.clientX;xe+H>W&&(xe=s.clientX-H>=0?s.clientX-H:W-H);let fe=s.clientY;fe+J>ae&&(fe=s.clientY-J>=0?s.clientY-J:ae-J);const Re=xe-y.x,eu=fe-y.y,ju=getComputedStyle(this.contextMenuElement).direction==="rtl";this.contextMenuElement.style.top=`${eu}px`,ju?(this.contextMenuElement.style.right=y.width-Re+"px",this.contextMenuElement.style.left=""):(this.contextMenuElement.style.right="",this.contextMenuElement.style.left=`${Re}px`)}hideContextMenu(){this.instance?.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const s=this.instance.audio_context();return s&&s.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const s=this.instance.audio_context();s&&s.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){pt||(navigator.maxTouchPoints<1?pt=!0:"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",()=>{if(pt)return;const s=this.instance?.audio_context();if(!s)return;const f=new Audio;f.src=(()=>{const h=new ArrayBuffer(10),y=new DataView(h),z=s.sampleRate;return y.setUint32(0,z,!0),y.setUint32(4,z,!0),y.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(h))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),f.load(),f.play().then(()=>{pt=!0}).catch(h=>{console.warn(`Failed to play dummy sound: ${h}`)})},{once:!0}))}static htmlDimensionToCssDimension(s){if(s){const f=s.match(Ks);if(f){let h=f[1];return f[3]||(h+="px"),h}}return null}callExternalInterface(s,f){return this.instance?.call_exposed_callback(s,f)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(s){this.instance?.set_trace_observer(s)}getPanicData(){let s=`
# Player Info
`;if(s+=`Allows script access: ${!!this.loadedConfig&&this.loadedConfig.allowScriptAccess}
`,s+=`${this.rendererDebugInfo}
`,s+=this.debugPlayerInfo(),s+=`
# Page Info
`,s+=`Page URL: ${document.location.href}
`,this.swfUrl&&(s+=`SWF URL: ${this.swfUrl}
`),s+=`
# Browser Info
`,s+=`User Agent: ${window.navigator.userAgent}
`,s+=`Platform: ${window.navigator.platform}
`,s+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,s+=`
# Ruffle Info
`,s+=`Version: ${j.versionNumber}
`,s+=`Name: ${j.versionName}
`,s+=`Channel: ${j.versionChannel}
`,s+=`Built: ${j.buildDate}
`,s+=`Commit: ${j.commitHash}
`,s+=`Is extension: ${Ta}
`,s+=`
# Metadata
`,this.metadata)for(const[f,h]of Object.entries(this.metadata))s+=`${f}: ${h}
`;return s}panic(s){if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();const f=s;if(s instanceof Error&&(s.name==="AbortError"||s.message.includes("AbortError")))return;if(s instanceof yu){const y=this.loadedConfig?.openInNewTab,z=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(y&&z)return void this.addOpenInNewTabMessage(y,z);s=s.cause}const h=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(h.push(`# Error Info
`),s instanceof Error){if(h.push(`Error name: ${s.name}
`),h.push(`Error message: ${s.message}
`),s.stack){const y=h.push(`Error stack:
\`\`\`
${s.stack}
\`\`\`
`)-1;if(s.avmStack){const z=h.push(`AVM2 stack:
\`\`\`
    ${s.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;h.avmStackIndex=z}h.stackIndex=y}}else h.push(`Error: ${s}
`);h.push(this.getPanicData()),ll(this.container,f,h,this.swfUrl),this.destroy()}addOpenInNewTabMessage(s,f){const h=new URL(f);if(this.loadedConfig?.parameters){const z=Wt(this.loadedConfig?.parameters);Object.entries(z).forEach(([M,H])=>{h.searchParams.set(M,H)})}this.hideSplashScreen();const y=(0,D.jsxs)("div",{children:[lu("message-cant-embed"),(0,D.jsx)("div",{children:(0,D.jsx)("a",{href:"#",onClick:()=>s(h),children:ve("open-in-new-tab")})})]});this.displayMessageOrElement(y,!0)}displayRootMovieDownloadFailedMessage(s,f){const h=this.loadedConfig?.openInNewTab;if(h&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(h,this.swfUrl);else{const y=f.includes("HTTP Status is not OK:"),z=s?new fu(this.swfUrl):new qa(this.swfUrl,y);this.panic(z)}}displayMessageOrElement(s,f){const h=s instanceof HTMLDivElement?s:(0,D.jsx)("p",{children:s}),y=f?null:(0,D.jsx)("div",{children:(0,D.jsx)("button",{id:"continue-btn",children:ve("continue")})}),z=(0,D.jsx)("div",{id:"message-overlay",children:(0,D.jsxs)("div",{class:"message",children:[h,y]})});this.container.prepend(z),!f&&(this.container.querySelector("#continue-btn").onclick=()=>{z.parentNode.removeChild(z)})}displayMessage(s){this.displayMessageOrElement(s)}displayRestoredFromBfcacheMessage(){if(this.container.querySelector("#message-overlay")!==null)return;const s=lu("message-restored-from-bfcache");this.displayMessageOrElement(s);const f=this.container.querySelector("#message-overlay");(f.scrollWidth>f.offsetWidth||f.scrollHeight>f.offsetHeight)&&f.parentNode.removeChild(f)}displayUnsupportedVideo(s){const f=this.videoModal.querySelector("#video-holder");if(f){const h=(0,D.jsx)("video",{src:s,autoplay:!0,controls:!0,onContextMenu:y=>y.stopPropagation()});f.textContent="",f.appendChild(h),this.videoModal.classList.remove("hidden")}}displayClipboardModal(s){const f=this.clipboardModal.querySelector("#clipboard-modal-description");f&&(f.textContent=ve("clipboard-message-description",{variant:s?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(s){this.metadata=s,this._readyState=N.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(aa.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(aa.LOADED_DATA))}}aa.LOADED_METADATA="loadedmetadata",aa.LOADED_DATA="loadeddata";class Zt{constructor(s,f){this.isMuted=s,this.volume=f}get_volume(){return this.isMuted?0:this.volume/100}}function ta(p,s){const f={url:p},h=s("allowNetworking");h!==null&&(f.allowNetworking=h);const y=$u(s("allowScriptAccess"),p);y!==null&&(f.allowScriptAccess=y);const z=s("bgcolor");z!==null&&(f.backgroundColor=z);const M=s("base");if(M!==null)if(M==="."){const ju=new URL(p,document.baseURI);f.base=new URL(M,ju).href}else f.base=M;const H=rl(s("menu"));H!==null&&(f.menu=H);const J=rl(s("allowFullScreen"));J!==null&&(f.allowFullscreen=J);const W=s("flashvars");W!==null&&(f.parameters=W);const ae=s("quality");ae!==null&&(f.quality=ae);const xe=s("salign");xe!==null&&(f.salign=xe);const fe=s("scale");fe!==null&&(f.scale=fe);const Re=s("wmode");Re!==null&&(f.wmode=Re);const eu=s("fullScreenAspectRatio");return eu!==null&&(f.fullScreenAspectRatio=eu),f}function Du(p){if(p){let s="",f="";try{const h=new URL(p,N0);s=h.pathname,f=h.hostname}catch{}if(s.startsWith("/v/")&&/^(?:www\.|m\.)?youtube(?:-nocookie)?\.com|youtu\.be$/i.test(f))return!0}return!1}function Pt(p,s){const f=p.getAttribute(s),h=window.RufflePlayer?.config??{};if(f)try{const y=new URL(f);y.protocol!=="http:"||window.location.protocol!=="https:"||"upgradeToHttps"in h&&h.upgradeToHttps===!1||(y.protocol="https:",p.setAttribute(s,y.toString()))}catch{}}function ei(p){let s=p.parentElement;for(;s!==null;){switch(s.tagName){case"AUDIO":case"VIDEO":return!0}s=s.parentElement}return!1}function xt(p,s){const f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=s,h.click(),URL.revokeObjectURL(f)}function ui(p){const s=atob(p);return Uint8Array.from(s,f=>f.charCodeAt(0))}function u0(p){try{return(s=atob(p)).charCodeAt(0)===0&&s.charCodeAt(1)===191&&s.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every((h,y)=>s.charCodeAt(10+y)===h)}catch{return!1}var s}function rl(p){switch(p?.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function $u(p,s){switch(p?.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(s,window.location.href).origin}catch{return!1}default:return null}}var Fe,ol=function(p,s,f,h,y){if(typeof s=="function"?p!==s||!0:!s.has(p))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s.set(p,f),f},We=function(p,s,f,h){if(typeof s=="function"?p!==s||!h:!s.has(p))throw new TypeError("Cannot read private member from an object whose class did not declare it");return f==="m"?h:f==="a"?h.call(p):h?h.value:s.get(p)};class q0{constructor(s){Fe.set(this,void 0),ol(this,Fe,s)}addFSCommandHandler(s){We(this,Fe,"f").addFSCommandHandler(s)}get readyState(){return We(this,Fe,"f")._readyState}get metadata(){return We(this,Fe,"f").metadata}get loadedConfig(){return We(this,Fe,"f").loadedConfig??null}async reload(){await We(this,Fe,"f").reload()}async load(s,f=!1){await We(this,Fe,"f").load(s,f)}resume(){We(this,Fe,"f").play()}get isPlaying(){return We(this,Fe,"f").isPlaying}get volume(){return We(this,Fe,"f").volume}set volume(s){We(this,Fe,"f").volume=s}get fullscreenEnabled(){return We(this,Fe,"f").fullscreenEnabled}get isFullscreen(){return We(this,Fe,"f").isFullscreen}setFullscreen(s){We(this,Fe,"f").setFullscreen(s)}requestFullscreen(){We(this,Fe,"f").enterFullscreen()}exitFullscreen(){We(this,Fe,"f").exitFullscreen()}async downloadSwf(){await We(this,Fe,"f").downloadSwf()}displayMessage(s){We(this,Fe,"f").displayMessage(s)}suspend(){We(this,Fe,"f").pause()}get suspended(){return!We(this,Fe,"f").isPlaying}set traceObserver(s){We(this,Fe,"f").traceObserver=s}get config(){return We(this,Fe,"f").config}set config(s){We(this,Fe,"f").config=s}callExternalInterface(s,...f){return We(this,Fe,"f").callExternalInterface(s,f)}}Fe=new WeakMap;var Me,C0,Se=function(p,s,f,h){if(typeof s=="function"?p!==s||!h:!s.has(p))throw new TypeError("Cannot read private member from an object whose class did not declare it");return f==="m"?h:f==="a"?h.call(p):h?h.value:s.get(p)},cl=function(p,s,f,h,y){if(typeof s=="function"?p!==s||!0:!s.has(p))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s.set(p,f),f};class a0 extends HTMLElement{get onFSCommand(){return Se(this,C0,"f")}set onFSCommand(s){cl(this,C0,s)}get readyState(){return Se(this,Me,"f")._readyState}get metadata(){return Se(this,Me,"f").metadata}constructor(){super(),Me.set(this,void 0),C0.set(this,null),cl(this,Me,new aa(this,()=>this.debugPlayerInfo(),s=>{try{Object.defineProperty(this,s,{value:(...f)=>Se(this,Me,"f").callExternalInterface(s,f),configurable:!0})}catch(f){console.warn(`Error setting ExternalInterface legacy callback for ${s}`,f)}})),Se(this,Me,"f").addFSCommandHandler((s,f)=>{Se(this,C0,"f")?.call(this,s,f)})}ruffle(s){if((s??1)===1)return new q0(Se(this,Me,"f"));throw new Error(`Version ${s} not supported.`)}get loadedConfig(){return Se(this,Me,"f").loadedConfig??null}connectedCallback(){Se(this,Me,"f").updateStyles()}static get observedAttributes(){return["width","height","align"]}attributeChangedCallback(s,f,h){a0.observedAttributes.includes(s)&&Se(this,Me,"f").updateStyles()}disconnectedCallback(){Se(this,Me,"f").destroy()}async reload(){await Se(this,Me,"f").reload()}async load(s,f=!1){await Se(this,Me,"f").load(s,f)}play(){Se(this,Me,"f").play()}get isPlaying(){return Se(this,Me,"f").isPlaying}get volume(){return Se(this,Me,"f").volume}set volume(s){Se(this,Me,"f").volume=s}get fullscreenEnabled(){return Se(this,Me,"f").fullscreenEnabled}get isFullscreen(){return Se(this,Me,"f").isFullscreen}setFullscreen(s){Se(this,Me,"f").setFullscreen(s)}enterFullscreen(){Se(this,Me,"f").enterFullscreen()}exitFullscreen(){Se(this,Me,"f").exitFullscreen()}async downloadSwf(){await Se(this,Me,"f").downloadSwf()}pause(){Se(this,Me,"f").pause()}set traceObserver(s){Se(this,Me,"f").traceObserver=s}debugPlayerInfo(){return""}PercentLoaded(){return Se(this,Me,"f")._readyState===N.Loaded?100:0}get config(){return Se(this,Me,"f").config}set config(s){Se(this,Me,"f").config=s}displayMessage(s){Se(this,Me,"f").displayMessage(s)}}function ai(p,s){if(p){for(const f of p.attributes)if(f.specified){if(f.name==="title"&&f.value==="Adobe Flash Player")continue;try{s.setAttribute(f.name,f.value)}catch{console.warn(`Unable to set attribute ${f.name} on Ruffle instance`)}}for(const f of Array.from(p.children))s.appendChild(f)}}Me=new WeakMap,C0=new WeakMap;class Ka extends a0{connectedCallback(){super.connectedCallback();const s=this.attributes.getNamedItem("src");if(s){const f=y=>this.attributes.getNamedItem(y)?.value??null,h=ta(s.value,f);this.load(h,!0)}}get nodeName(){return"EMBED"}get src(){return this.attributes.getNamedItem("src")?.value}set src(s){if(s){const f=document.createAttribute("src");f.value=s,this.attributes.setNamedItem(f)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return[...a0.observedAttributes,"src"]}attributeChangedCallback(s,f,h){if(super.attributeChangedCallback(s,f,h),this.isConnected&&s==="src"){const y=this.attributes.getNamedItem("src");if(y){const z=H=>this.attributes.getNamedItem(H)?.value??null,M=ta(y.value,z);this.load(M,!0)}}}static isInterdictable(s){const f=s.getAttribute("src"),h=s.getAttribute("type");return!!f&&!ei(s)&&(Du(f)?(Pt(s,"src"),!1):Qt(f,h))}static fromNativeEmbedElement(s){const f=Gt("ruffle-embed",Ka),h=document.createElement(f);return ai(s,h),h}get height(){return this.getAttribute("height")||""}set height(s){this.setAttribute("height",s)}get width(){return this.getAttribute("width")||""}set width(s){this.setAttribute("width",s)}get type(){return this.getAttribute("type")||""}set type(s){this.setAttribute("type",s)}}function dl(p){const s={};for(const f of p.children)if(f instanceof HTMLParamElement){const h=f.attributes.getNamedItem("name")?.value,y=f.attributes.getNamedItem("value")?.value;h&&y&&(s[h]=y)}return s}class O0 extends a0{constructor(){super(...arguments),this.params={}}connectedCallback(){super.connectedCallback(),this.params=dl(this);let s=null;if(this.attributes.getNamedItem("data")?s=this.attributes.getNamedItem("data")?.value:this.params.movie&&(s=this.params.movie),s){const f=["allowNetworking","base","bgcolor","flashvars"],h=ta(s,y=>(function(z,M,H){M=M.toLowerCase();for(const[J,W]of Object.entries(z))if(J.toLowerCase()===M)return W;return H})(this.params,y,f.includes(y)?this.getAttribute(y):null));this.load(h,!0)}}debugPlayerInfo(){let s=`Player type: Object
`,f=null;return this.attributes.getNamedItem("data")?f=this.attributes.getNamedItem("data")?.value:this.params.movie&&(f=this.params.movie),s+=`SWF URL: ${f}
`,Object.keys(this.params).forEach(h=>{s+=`Param ${h}: ${this.params[h]}
`}),Object.keys(this.attributes).forEach(h=>{s+=`Attribute ${h}: ${this.attributes.getNamedItem(h)?.value}
`}),s}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(s){if(s){const f=document.createAttribute("data");f.value=s,this.attributes.setNamedItem(f)}else this.attributes.removeNamedItem("data")}static isInterdictable(s){if(ei(s)||s.getElementsByTagName("ruffle-object").length>0||s.getElementsByTagName("ruffle-embed").length>0)return!1;const f=s.attributes.getNamedItem("data")?.value.toLowerCase(),h=s.attributes.getNamedItem("type")?.value??null,y=dl(s);let z;if(f){if(Du(f))return Pt(s,"data"),!1;z=f}else{if(!y||!y.movie)return!1;if(Du(y.movie)){const H=s.querySelector("param[name='movie']");if(H){Pt(H,"value");const J=H.getAttribute("value");J&&s.setAttribute("data",J)}return!1}z=y.movie}const M=s.attributes.getNamedItem("classid")?.value.toLowerCase();return M==="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase()?!Array.from(s.getElementsByTagName("object")).some(O0.isInterdictable)&&!Array.from(s.getElementsByTagName("embed")).some(Ka.isInterdictable):!M&&Qt(z,h)}static fromNativeObjectElement(s){const f=Gt("ruffle-object",O0),h=document.createElement(f);for(const y of Array.from(s.getElementsByTagName("embed")))Ka.isInterdictable(y)&&y.remove();for(const y of Array.from(s.getElementsByTagName("object")))O0.isInterdictable(y)&&y.remove();return ai(s,h),h}get height(){return this.getAttribute("height")||""}set height(s){this.setAttribute("height",s)}get width(){return this.getAttribute("width")||""}set width(s){this.setAttribute("width",s)}get type(){return this.getAttribute("type")||""}set type(s){this.setAttribute("type",s)}}var na,Vu,Ca,M0,Oa,Ma,Da,t0,_a=function(p,s,f,h,y){if(typeof s=="function"?p!==s||!0:!s.has(p))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s.set(p,f),f},Ze=function(p,s,f,h){if(typeof s=="function"?p!==s||!h:!s.has(p))throw new TypeError("Cannot read private member from an object whose class did not declare it");return f==="m"?h:f==="a"?h.call(p):h?h.value:s.get(p)};class ia{constructor(s){if(na.set(this,void 0),Vu.set(this,void 0),_a(this,na,[]),_a(this,Vu,{}),s)for(let f=0;f<s.length;f++)this.install(s[f])}install(s){const f=new Xt(s),h=Ze(this,na,"f").length;Ze(this,na,"f").push(f),Ze(this,Vu,"f")[s.type]=f,Object.defineProperty(this,f.type,{configurable:!0,enumerable:!1,value:f}),this[h]=f}item(s){return Ze(this,na,"f")[s>>>0]}namedItem(s){return Ze(this,Vu,"f")[s]}get length(){return Ze(this,na,"f").length}[(na=new WeakMap,Vu=new WeakMap,Symbol.iterator)](){return Ze(this,na,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class Xt{constructor(s){Ca.set(this,void 0),_a(this,Ca,s)}get type(){return Ze(this,Ca,"f").type}get description(){return Ze(this,Ca,"f").description}get suffixes(){return Ze(this,Ca,"f").suffixes}get enabledPlugin(){return Ze(this,Ca,"f").enabledPlugin}get[(Ca=new WeakMap,Symbol.toStringTag)](){return"MimeType"}}class gt extends ia{constructor(s,f,h){super(),M0.set(this,void 0),Oa.set(this,void 0),Ma.set(this,void 0),_a(this,M0,s),_a(this,Oa,f),_a(this,Ma,h)}get name(){return Ze(this,M0,"f")}get description(){return Ze(this,Oa,"f")}get filename(){return Ze(this,Ma,"f")}get[(M0=new WeakMap,Oa=new WeakMap,Ma=new WeakMap,Symbol.toStringTag)](){return"Plugin"}}class Ua{constructor(s){Da.set(this,void 0),t0.set(this,void 0),_a(this,Da,[]),_a(this,t0,{});for(let f=0;f<s.length;f++)this.install(s[f])}install(s){const f=Ze(this,Da,"f").length;Ze(this,Da,"f").push(s),Ze(this,t0,"f")[s.name]=s,Object.defineProperty(this,s.name,{configurable:!0,enumerable:!1,value:s}),this[f]=s}item(s){return Ze(this,Da,"f")[s>>>0]}namedItem(s){return Ze(this,t0,"f")[s]}refresh(){}[(Da=new WeakMap,t0=new WeakMap,Symbol.iterator)](){return Ze(this,Da,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return Ze(this,Da,"f").length}}const la=new gt("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");la.install({type:Gn,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:la}),la.install({type:il,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:la}),la.install({type:Wn,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:la}),la.install({type:Zn,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:la});const Ya=window.RufflePlayer?.config??{},fl=(function(p){let s=mt?.href??"";return!Ta&&"publicPath"in p&&p.publicPath!==null&&p.publicPath!==void 0&&(s=p.publicPath),s===""||s.endsWith("/")||(s+="/"),s})(Ya)+"ruffle.js";let D0,_0,It,ku;function Qa(){try{D0=D0??document.getElementsByTagName("object"),_0=_0??document.getElementsByTagName("embed");for(const p of Array.from(D0))if(O0.isInterdictable(p)){const s=O0.fromNativeObjectElement(p);p.replaceWith(s)}for(const p of Array.from(_0))if(Ka.isInterdictable(p)){const s=Ka.fromNativeEmbedElement(p);p.replaceWith(s)}}catch(p){console.error(`Serious error encountered when polyfilling native Flash elements: ${p}`)}}function vt(){It=It??document.getElementsByTagName("iframe"),ku=ku??document.getElementsByTagName("frame"),[It,ku].forEach(p=>{for(const s of p){if(s.dataset.rufflePolyfilled!==void 0)continue;s.dataset.rufflePolyfilled="";const f=s.contentWindow,h=`Couldn't load Ruffle into ${s.tagName}[${s.src}]: `;try{f.document.readyState==="complete"&&U0(f,h)}catch(y){Ta||console.warn(h+y)}s.addEventListener("load",()=>{U0(f,h)},!1)}})}async function U0(p,s){let f;await new Promise(h=>{window.setTimeout(()=>{h()},100)});try{if(f=p.document,!f)return}catch(h){return void(Ta||console.warn(s+h))}if(Ta||f.documentElement.dataset.ruffleOptout===void 0){if(Ta)p.RufflePlayer||(p.RufflePlayer={}),p.RufflePlayer.config={...Ya,...p.RufflePlayer.config??{}};else if(!p.RufflePlayer){const h=f.createElement("script");h.setAttribute("src",fl),h.onload=()=>{p.RufflePlayer={},p.RufflePlayer.config=Ya},f.head.appendChild(h)}}}function Ys(){(function(p){if(navigator.plugins.namedItem("Shockwave Flash"))return;"install"in navigator.plugins&&navigator.plugins.install||(Object.defineProperty(window,"PluginArray",{value:Ua}),Object.defineProperty(navigator,"plugins",{value:new Ua(navigator.plugins),writable:!1})),navigator.plugins.install(p),!(p.length>0)||"install"in navigator.mimeTypes&&navigator.mimeTypes.install||(Object.defineProperty(window,"MimeTypeArray",{value:ia}),Object.defineProperty(window,"MimeType",{value:Xt}),Object.defineProperty(navigator,"mimeTypes",{value:new ia(navigator.mimeTypes),writable:!1}));const s=navigator.mimeTypes;for(let f=0;f<p.length;f+=1)s.install(p[f])})(la)}function ti(){("favorFlash"in Ya&&Ya.favorFlash===!1||(navigator.plugins.namedItem("Shockwave Flash")?.filename??"ruffle.js")==="ruffle.js")&&(Qa(),vt(),new MutationObserver(function(p){p.some(s=>Array.from(s.addedNodes).some(f=>["EMBED","OBJECT"].includes(f.nodeName)||f instanceof Element&&f.querySelector("embed, object")!==null))&&(Qa(),vt())}).observe(document,{childList:!0,subtree:!0}))}const n0={version:j.versionNumber+"+"+j.buildDate.substring(0,10),polyfill(){ti()},pluginPolyfill(){Ys()},createPlayer(){const p=Gt("ruffle-player",a0);return document.createElement(p)},options:{}};let L0=null;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==""){let p=document.currentScript.src;p.endsWith(".js")||p.endsWith("/")||(p+="/"),L0=new URL(".",p)}}catch(p){console.warn("Unable to get currentScript URL",p)}(function(p,s={}){let f;window.RufflePlayer instanceof w?f=window.RufflePlayer:(f=new w(window.RufflePlayer),window.RufflePlayer=f),f.sources[p]=n0,n0.options=s,(!("polyfills"in f.config)||f.config.polyfills)!==!1&&n0.pluginPolyfill()})("local",{onFirstLoad:()=>{m.p=(function(p){let s=L0?.href??"";return"publicPath"in p&&p.publicPath!==null&&p.publicPath!==void 0&&(s=p.publicPath),s===""||s.endsWith("/")||(s+="/"),s})(window.RufflePlayer?.config)}})})()),Sf}gp();function G4(){const{simulationId:l}=a1(),o=Of(),{user:c}=Uu(),d=T.useRef(null),[m,x]=T.useState(null),[v,w]=T.useState(!0),[j,N]=T.useState("");if(T.useEffect(()=>{let A=!0;return be.get("simulations",l).then(_=>{A&&x(_)}).catch(_=>{A&&N(_.message||"Simulatsiyani yuklab bo'lmadi.")}).finally(()=>{A&&w(!1)}),()=>{A=!1}},[l]),T.useEffect(()=>{if(!m||!d.current)return;const A=rt(m);A&&(d.current.setAttribute("src",A),d.current.setAttribute("background","#ffffff"),d.current.setAttribute("wmode","direct"),d.current.setAttribute("quality","high"),d.current.style.width="100%",d.current.style.height="100%")},[m]),T.useEffect(()=>{!m||c?.role!=="student"||Cu.trackSimulation({resource_id:String(m.id),resource_title:m.title,metadata:{source:o.pathname.startsWith("/laboratory/")||o.pathname.startsWith("/laboratoriya/")?"laboratory-viewer":"simulation-viewer"}}).catch(()=>{})},[o.pathname,m,c?.role]),v)return n.jsx(ot,{label:"Simulatsiya yuklanmoqda..."});if(j||!m)return n.jsx(Xu,{title:"Simulatsiyani ochib bo'lmadi",description:j||"Simulatsiya topilmadi."});const k=rt(m),S=o.pathname.startsWith("/laboratory/")||o.pathname.startsWith("/laboratoriya/"),q=o.pathname.startsWith("/laboratoriya/")?"/laboratoriya":S?"/laboratory":"/simulations",K=S?"Laboratoriya":"Simulatsiyalar";return n.jsxs("div",{className:"space-y-6",children:[n.jsx(Bn,{eyebrow:K,title:m.title,description:m.description||"Flesh simulatsiyani shu oynaning o'zida ko'rish mumkin.",action:n.jsxs("div",{className:"flex flex-wrap gap-3",children:[n.jsxs(Ns,{to:q,className:"inline-flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm",children:[n.jsx(E1,{size:16}),"Orqaga"]}),n.jsxs("a",{href:k,download:!0,className:"inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20",children:[n.jsx(Gi,{size:16}),"Yuklab olish"]})]})}),n.jsxs("section",{className:"overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"flex items-center gap-3 border-b border-blue-50 bg-blue-50/60 px-5 py-4",children:[n.jsx(Ff,{className:"text-blue-600",size:20}),n.jsx("p",{className:"font-black text-slate-950",children:"Onlayn ko'rish"})]}),n.jsx("div",{className:"h-[75vh] min-h-[560px] bg-slate-100 p-3",children:n.jsx("ruffle-player",{ref:d,class:"block h-full w-full overflow-hidden rounded-3xl bg-white"})})]})]})}function Nf(l){return l?new Date(l).toLocaleDateString():"—"}function vp(){const{user:l,updateProfile:o}=Uu(),[c,d]=T.useState(!0),[m,x]=T.useState(!1),[v,w]=T.useState(""),[j,N]=T.useState({}),[k,S]=T.useState({enrollments:[],theoryProgress:[],practicalSubmissions:[],labReports:[],videoProgress:[],testAttempts:[],certificates:[]});T.useEffect(()=>{let A=!0;async function _(){d(!0),w("");try{const[C,Z,ee,ne,ue,me,ce,P]=await Promise.all([Cu.getProfileStats(),Cu.getEnrollments(),Cu.getTheoryProgress(),Cu.getPracticalSubmissions(),Cu.getLabReports(),Cu.getVideoProgress(),Cu.getTestAttempts(),Cu.getCertificates()]);if(!A)return;N(C),S({enrollments:Z,theoryProgress:ee,practicalSubmissions:ne,labReports:ue,videoProgress:me,testAttempts:ce,certificates:P})}catch(C){A&&w(C.message||"Talaba profili ma'lumotlarini yuklab bo'lmadi.")}finally{A&&d(!1)}}return _(),()=>{A=!1}},[]);const q=T.useMemo(()=>{if(!k.videoProgress.length)return 0;const A=k.videoProgress.reduce((_,C)=>_+Number(C.watched_percentage||0),0);return Math.round(A/k.videoProgress.length)},[k.videoProgress]);async function K(A){x(!0);try{await o(A)}finally{x(!1)}}return c?n.jsx(ot,{label:"Talaba profili yuklanmoqda..."}):v?n.jsx(Xu,{title:"Talaba profilini yuklab bo'lmadi",description:v}):n.jsxs("div",{className:"space-y-6",children:[n.jsx(Bn,{eyebrow:"Talaba profili",title:`Xush kelibsiz, ${l.full_name||l.username}`,description:"Shaxsiy o'quv statistikangiz, topshiriqlaringiz, test natijalaringiz va sertifikatlaringizni ko'rib chiqing."}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[n.jsx(nu,{title:"Fanlar",value:j.enrolled_subjects||0,icon:Mn,detail:"Ro'yxatdan o'tilgan fanlar"}),n.jsx(nu,{title:"Tugallangan darslar",value:j.completed_lessons||0,icon:T1,tone:"emerald",detail:"Yakunlangan nazariy darslar"}),n.jsx(nu,{title:"O'rtacha test natijasi",value:`${Math.round(j.average_test_score||0)}%`,icon:q1,tone:"violet",detail:"Barcha urinishlar bo'yicha"}),n.jsx(nu,{title:"Sertifikatlar",value:j.certificates||0,icon:C1,tone:"amber",detail:"Qo'lga kiritilgan yutuqlar"})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-[1.1fr_0.9fr]",children:[n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5",children:[n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Ko'rilgan videolar statistikasi"}),n.jsxs("div",{className:"mt-4 rounded-3xl bg-blue-50 p-5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-sm font-bold text-slate-700",children:"Umumiy ko'rish darajasi"}),n.jsxs("span",{className:"text-sm font-black text-blue-700",children:[q,"%"]})]}),n.jsx("div",{className:"mt-3 h-4 rounded-full bg-white",children:n.jsx("div",{className:"h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500",style:{width:`${q}%`}})}),n.jsxs("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[n.jsxs("div",{className:"rounded-2xl bg-white px-4 py-4 text-sm text-slate-700",children:["Ko'rilgan videolar: ",n.jsx("strong",{className:"text-slate-950",children:j.watched_videos||0})]}),n.jsxs("div",{className:"rounded-2xl bg-white px-4 py-4 text-sm text-slate-700",children:["Test urinishlari: ",n.jsx("strong",{className:"text-slate-950",children:j.test_attempts||0})]}),n.jsxs("div",{className:"rounded-2xl bg-white px-4 py-4 text-sm text-slate-700",children:["Amaliy topshiriqlar: ",n.jsx("strong",{className:"text-slate-950",children:j.practical_submissions||0})]}),n.jsxs("div",{className:"rounded-2xl bg-white px-4 py-4 text-sm text-slate-700",children:["Laboratoriya hisobotlari: ",n.jsx("strong",{className:"text-slate-950",children:j.lab_reports||0})]})]})]})]}),n.jsx(xo,{user:l,onSave:K,saving:m,title:"Shaxsiy sozlamalar",description:"Akkount ma'lumotlari, avatar, telefon raqami va bio qismini yangilang."})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-2",children:[n.jsx(Yu,{rows:k.enrollments.map(A=>({...A,progressLabel:`${A.progress}%`})),columns:[{key:"course_title",label:"Kurs"},{key:"subject_title",label:"Fan"},{key:"status",label:"Holat"},{key:"progressLabel",label:"Jarayon"}]}),k.certificates.length?n.jsx(Yu,{rows:k.certificates.map(A=>({...A,completionLabel:`${A.completion_percentage}%`})),columns:[{key:"course_title",label:"Sertifikat"},{key:"status",label:"Holat"},{key:"completionLabel",label:"Tugallanish"},{key:"issued_at",label:"Berilgan sana",render:A=>Nf(A.issued_at)}]}):n.jsx(Xu,{title:"Hozircha sertifikat yo'q",description:"Kurs bo'yicha yetarli progress to'planganda sertifikatlar shu yerda paydo bo'ladi."})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-3",children:[n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 xl:col-span-2",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(Bf,{className:"text-blue-600",size:20}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Mening topshiriqlarim"})]}),n.jsx(Yu,{rows:[...k.practicalSubmissions.slice(0,5).map(A=>({id:`practical-${A.id}`,title:A.assignment_title,course:A.course_title,status:A.status,score:A.score||"Kutilmoqda"})),...k.labReports.slice(0,5).map(A=>({id:`lab-${A.id}`,title:A.experiment_title,course:A.course_title,status:A.status,score:A.score||"Kutilmoqda"}))],columns:[{key:"title",label:"Topshiriq"},{key:"course",label:"Kurs"},{key:"status",label:"Holat"},{key:"score",label:"Ball"}]})]}),n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(so,{className:"text-blue-600",size:20}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Video faolligi"})]}),n.jsxs("div",{className:"space-y-3",children:[k.videoProgress.slice(0,4).map(A=>n.jsxs("div",{className:"rounded-2xl bg-slate-50 px-4 py-4",children:[n.jsxs("div",{className:"flex items-center justify-between gap-3 text-sm font-bold text-slate-800",children:[n.jsx("span",{className:"truncate",children:A.video_title}),n.jsxs("span",{children:[Math.round(A.watched_percentage),"%"]})]}),n.jsx("div",{className:"mt-3 h-2 rounded-full bg-white",children:n.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500",style:{width:`${A.watched_percentage}%`}})})]},A.id)),!k.videoProgress.length&&n.jsx(Xu,{title:"Hozircha ko'rilgan video yo'q",description:"Video ko'rish tarixi shu yerda ko'rinadi."})]})]})]}),k.testAttempts.length?n.jsx(Yu,{rows:k.testAttempts.slice(0,8).map(A=>({...A,scoreLabel:`${A.score}/${A.max_score}`,dateLabel:Nf(A.submitted_at||A.started_at)})),columns:[{key:"test_title",label:"Test"},{key:"course_title",label:"Kurs"},{key:"scoreLabel",label:"Ball"},{key:"percentage",label:"Foiz",render:A=>`${A.percentage}%`},{key:"dateLabel",label:"Sana"}]}):n.jsx(Xu,{title:"Hozircha test natijalari yo'q",description:"So'nggi urinishlaringiz va natijalaringiz shu yerda ko'rinadi."})]})}function yp(){return n.jsx(Fn,{eyebrow:"Subjects",title:"Subject catalog",description:"Academic subjects and course families available across the platform.",resource:"subjects",icon:Dn,tone:"blue",card:{title:l=>l.title,subtitle:l=>l.description||"Subject area for courses, theory, labs, and assessment content.",meta:l=>`Order ${l.order||0}`,badge:()=>"subject",actionLabel:"View courses"},columns:[{key:"title",label:"Subject"},{key:"slug",label:"Slug"},{key:"order",label:"Order"}]})}const Af={theory:{label:"Add Theory Lesson",endpoint:"/teacher/my-theory-lessons/",fields:[{name:"title",label:"Title",type:"text",required:!0},{name:"topic",label:"Topic",type:"select",optionSource:"topics",required:!0},{name:"module",label:"Module",type:"select",optionSource:"modules"},{name:"estimated_minutes",label:"Minutes",type:"number"},{name:"content",label:"Content",type:"textarea",required:!0,full:!0}]},practical:{label:"Add Practical Assignment",endpoint:"/teacher/my-practical-assignments/",fields:[{name:"title",label:"Title",type:"text",required:!0},{name:"course",label:"Course",type:"select",optionSource:"courses",required:!0},{name:"module",label:"Module",type:"select",optionSource:"modules"},{name:"max_score",label:"Max score",type:"number"},{name:"due_at",label:"Due date",type:"datetime-local"},{name:"instructions",label:"Instructions",type:"textarea",required:!0,full:!0}]},laboratory:{label:"Add Laboratory Work",endpoint:"/teacher/my-laboratories/",fields:[{name:"title",label:"Title",type:"text",required:!0},{name:"course",label:"Course",type:"select",optionSource:"courses",required:!0},{name:"module",label:"Module",type:"select",optionSource:"modules"},{name:"max_score",label:"Max score",type:"number"},{name:"objective",label:"Objective",type:"textarea",required:!0,full:!0},{name:"procedure",label:"Procedure",type:"textarea",required:!0,full:!0},{name:"equipment",label:"Equipment",type:"textarea",full:!0},{name:"expected_result",label:"Expected result",type:"textarea",full:!0}]},video:{label:"Add Video Lesson",endpoint:"/teacher/video-lessons/",fields:[{name:"title",label:"Title",type:"text",required:!0},{name:"course",label:"Course",type:"select",optionSource:"courses"},{name:"module",label:"Module",type:"select",optionSource:"modules"},{name:"duration_seconds",label:"Duration (sec)",type:"number"},{name:"external_url",label:"External URL",type:"url"},{name:"video_file",label:"Video file",type:"file",accept:"video/*",full:!0},{name:"description",label:"Description",type:"textarea",full:!0}]},test:{label:"Add Test",endpoint:"/teacher/tests/",fields:[{name:"title",label:"Title",type:"text",required:!0},{name:"course",label:"Course",type:"select",optionSource:"courses",required:!0},{name:"module",label:"Module",type:"select",optionSource:"modules"},{name:"duration_minutes",label:"Duration (min)",type:"number"},{name:"passing_score",label:"Passing score",type:"number"},{name:"description",label:"Description",type:"textarea",full:!0}]}},Ef={title:"",topic:"",course:"",module:"",estimated_minutes:10,max_score:100,duration_seconds:0,duration_minutes:30,passing_score:60,due_at:"",content:"",instructions:"",objective:"",procedure:"",equipment:"",expected_result:"",description:"",external_url:"",video_file:null};function kp({field:l,value:o,onChange:c,options:d}){return l.type==="textarea"?n.jsxs("label",{className:`space-y-2 text-sm font-semibold text-slate-700 ${l.full?"md:col-span-2":""}`,children:[n.jsx("span",{children:l.label}),n.jsx("textarea",{name:l.name,rows:"4",value:o||"",onChange:c,required:l.required,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"})]}):l.type==="select"?n.jsxs("label",{className:"space-y-2 text-sm font-semibold text-slate-700",children:[n.jsx("span",{children:l.label}),n.jsxs("select",{name:l.name,value:o||"",onChange:c,required:l.required,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white",children:[n.jsxs("option",{value:"",children:["Select ",l.label]}),d.map(m=>n.jsx("option",{value:m.id,children:m.title||m.label},m.id))]})]}):l.type==="file"?n.jsxs("label",{className:`space-y-2 text-sm font-semibold text-slate-700 ${l.full?"md:col-span-2":""}`,children:[n.jsx("span",{children:l.label}),n.jsx("input",{type:"file",name:l.name,accept:l.accept,onChange:c,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:font-bold file:text-white"})]}):n.jsxs("label",{className:`space-y-2 text-sm font-semibold text-slate-700 ${l.full?"md:col-span-2":""}`,children:[n.jsx("span",{children:l.label}),n.jsx("input",{type:l.type,name:l.name,value:o??"",onChange:c,required:l.required,className:"w-full rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"})]})}function jp({resources:l,onCreated:o}){const[c,d]=T.useState("theory"),[m,x]=T.useState(Ef),[v,w]=T.useState(!1),[j,N]=T.useState(""),[k,S]=T.useState(""),q=Af[c],K=T.useMemo(()=>({courses:l.courses||[],modules:l.modules||[],topics:l.topics||[]}),[l.courses,l.modules,l.topics]);function A(){x(Ef)}function _(Z){const{name:ee,value:ne,files:ue,type:me}=Z.target;x(ce=>({...ce,[ee]:me==="file"?ue?.[0]||null:ne}))}async function C(Z){Z.preventDefault(),w(!0),N(""),S("");try{const ee=new FormData;q.fields.forEach(ne=>{const ue=m[ne.name];ue==null||ue===""||ee.append(ne.name,ue)}),ee.append("published","true"),await be.fetch(q.endpoint,{method:"POST",data:ee}),S(`${q.label} created successfully.`),A(),await o?.()}catch(ee){N(ee.message||"Unable to create content.")}finally{w(!1)}}return n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5",children:[n.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(Af).map(([Z,ee])=>n.jsx("button",{type:"button",onClick:()=>{d(Z),N(""),S(""),A()},className:`rounded-2xl px-4 py-2 text-sm font-bold transition ${c===Z?"bg-blue-600 text-white shadow-lg shadow-blue-600/20":"bg-blue-50 text-blue-700 hover:bg-blue-100"}`,children:ee.label},Z))}),n.jsxs("form",{className:"mt-5 grid gap-4 md:grid-cols-2",onSubmit:C,children:[q.fields.map(Z=>n.jsx(kp,{field:Z,value:m[Z.name],onChange:_,options:K[Z.optionSource]||[]},Z.name)),j&&n.jsx("p",{className:"rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600 md:col-span-2",children:j}),k&&n.jsx("p",{className:"rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 md:col-span-2",children:k}),n.jsxs("button",{type:"submit",disabled:v,className:"inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2",children:[n.jsx(O1,{size:18}),v?"Creating...":q.label]})]})]})}function wp(){const{user:l,updateProfile:o}=Uu(),[c,d]=T.useState(!0),[m,x]=T.useState(!1),[v,w]=T.useState(""),[j,N]=T.useState({counts:{},metrics:{},activity:[]}),[k,S]=T.useState({lessons:[],assignments:[],laboratories:[],videos:[],tests:[],submissions:[],results:[],courses:[],modules:[],topics:[]});async function q(){d(!0),w("");try{const[_,C,Z,ee,ne,ue,me,ce,P,D,he]=await Promise.all([be.fetch("/dashboard/summary/"),be.fetch("/teacher/my-theory-lessons/"),be.fetch("/teacher/my-practical-assignments/"),be.fetch("/teacher/my-laboratories/"),be.fetch("/teacher/video-lessons/"),be.fetch("/teacher/tests/"),be.fetch("/teacher/student-submissions/"),be.fetch("/teacher/test-results/"),be.list("courses"),be.list("course-modules"),be.list("theory-topics")]);N(_),S({lessons:C,assignments:Z,laboratories:ee,videos:ne,tests:ue,submissions:me,results:ce,courses:ws(P),modules:ws(D),topics:ws(he)})}catch(_){w(_.message||"Unable to load teacher dashboard.")}finally{d(!1)}}T.useEffect(()=>{q()},[]);const K=T.useMemo(()=>k.submissions.filter(_=>["submitted","returned","revision_required"].includes(_.status)),[k.submissions]);async function A(_){x(!0);try{await o(_)}finally{x(!1)}}return c?n.jsx(ot,{label:"Loading teacher profile..."}):v?n.jsx(Xu,{title:"Unable to load teacher profile",description:v}):n.jsxs("div",{className:"space-y-6",children:[n.jsx(Bn,{eyebrow:"Teacher profile",title:`Teaching workspace for ${l.full_name||l.username}`,description:"Manage your educational content, review learners, and create new materials from one place."}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[n.jsx(nu,{title:"Uploaded lessons",value:j.counts.uploaded_lessons||0,icon:Mn,detail:"Theory, practical, lab, and video content"}),n.jsx(nu,{title:"Pending practical",value:j.counts.pending_practical_submissions||0,icon:Yi,tone:"amber",detail:"Assignments waiting for review"}),n.jsx(nu,{title:"Pending labs",value:j.counts.pending_lab_reports||0,icon:K3,tone:"violet",detail:"Laboratory reports to evaluate"}),n.jsx(nu,{title:"Active students",value:j.counts.active_students||0,icon:Ji,tone:"emerald",detail:"Distinct learners across your courses"})]}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-[1fr_0.95fr]",children:[n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[n.jsx($f,{className:"text-blue-600",size:22}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Teaching analytics"})]}),n.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:[n.jsx(nu,{title:"Tests",value:k.tests.length,icon:Dn,tone:"blue",detail:"Published assessments"}),n.jsx(nu,{title:"Videos",value:k.videos.length,icon:K3,tone:"violet",detail:"Teaching media library"}),n.jsx(nu,{title:"Average score",value:`${Math.round(j.metrics.average_test_score||0)}%`,icon:Yi,tone:"amber",detail:"Current learner performance"}),n.jsx(nu,{title:"Pass rate",value:`${Math.round(j.metrics.pass_rate||0)}%`,icon:Ji,tone:"emerald",detail:"Students meeting the threshold"})]})]}),n.jsx(xo,{user:l,onSave:A,saving:m,title:"Teacher profile settings",description:"Update your teaching profile, contact details, and avatar for learners and administrators."})]}),n.jsx(jp,{resources:{courses:k.courses,modules:k.modules,topics:k.topics},onCreated:q}),n.jsxs("div",{className:"grid gap-5 xl:grid-cols-2",children:[n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(Yi,{className:"text-blue-600",size:20}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"Quick grading table"})]}),K.length?n.jsx(Yu,{rows:K.slice(0,8),columns:[{key:"submission_type",label:"Type"},{key:"title",label:"Item"},{key:"learner_name",label:"Learner"},{key:"status",label:"Status"}]}):n.jsx(Xu,{title:"No pending submissions",description:"New practical or lab submissions will appear here."})]}),n.jsxs("section",{className:"rounded-3xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5",children:[n.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[n.jsx(Mn,{className:"text-blue-600",size:20}),n.jsx("h3",{className:"text-lg font-black text-slate-950",children:"My content overview"})]}),n.jsx(Yu,{rows:[{id:"lessons",title:"Theory lessons",total:k.lessons.length,note:"Course theory modules"},{id:"assignments",title:"Practical assignments",total:k.assignments.length,note:"Hands-on student work"},{id:"laboratories",title:"Laboratory works",total:k.laboratories.length,note:"Experiments and reporting"},{id:"videos",title:"Video lessons",total:k.videos.length,note:"Recorded or linked content"},{id:"tests",title:"Tests",total:k.tests.length,note:"Published assessments"}],columns:[{key:"title",label:"Content type"},{key:"total",label:"Total"},{key:"note",label:"Description"}]})]})]}),n.jsx(Yu,{rows:k.results.slice(0,10).map(_=>({..._,scoreLabel:`${_.score}/${_.max_score}`})),columns:[{key:"test_title",label:"Assessment"},{key:"student_name",label:"Learner"},{key:"course_title",label:"Course"},{key:"scoreLabel",label:"Score"},{key:"percentage",label:"Percentage",render:_=>`${_.percentage}%`}]})]})}const Cn=30;function zp(l){return l>=90?"A'lo natija! Siz fizikani juda yaxshi o'zlashtiryapsiz.":l>=70?"Yaxshi! Yana biroz mashq qilsangiz yanada zo'r bo'ladi.":"Qoniqarli. Davom eting, har bir test sizni kuchaytiradi."}function Sp(l){return l>=90?"Siz bugun haqiqiy Fizika Ustasisiz!":l>=80?"Ajoyib! Energiya va bilim bir nuqtada jamlandi.":l>=60?"Zo'r urinish! Keyingi safar yanada balandroq natija kutamiz.":"Taslim bo'lmang, fizika sirlarini birgalikda ochamiz."}function Rp(l){return l>=90?"A'lo":l>=70?"Yaxshi":"Qoniqarli"}function Np(){return Array.from({length:28},(l,o)=>({id:o,left:`${o*13%100}%`,delay:`${o%7*.08}s`,duration:`${2.8+o%5*.2}s`,color:["#f59e0b","#22c55e","#38bdf8","#a855f7","#ef4444"][o%5],rotate:`${o%9*24}deg`}))}function Ap({topic:l,questions:o,onBack:c,onComplete:d}){const m=T.useRef(!1),[x,v]=T.useState(0),[w,j]=T.useState(null),[N,k]=T.useState([]),[S,q]=T.useState(Cn),[K,A]=T.useState(!1);T.useEffect(()=>{m.current=!1,v(0),j(null),k([]),q(Cn),A(!1)},[l.id]);const _=o[x];T.useEffect(()=>{if(K)return;const P=window.setInterval(()=>{q(D=>D<=1?(window.clearInterval(P),ue(!0),Cn):D-1)},1e3);return()=>window.clearInterval(P)},[x,K,N,w]);const C=(x+1)/o.length*100,Z=T.useMemo(()=>{const P=o.reduce((Ce,Ge,Su)=>Ce+(N[Su]===Ge.correctAnswer?1:0),0),D=o.length-P,he=Math.round(P/o.length*100),Ie=P*12+(he>=80?80:20),qe=Math.max(1,Math.min(5,Math.round(he/20)));return{correctAnswers:P,incorrectAnswers:D,percentage:he,xp:Ie,stars:qe,gradeLabel:Rp(he),message:zp(he),phrase:Sp(he),showBadge:he>=90,showConfetti:he>80}},[N,o]),ee=T.useMemo(()=>Np(),[]);T.useEffect(()=>{K&&!m.current&&(m.current=!0,d?.({topicId:l.id,topicTitle:l.title,percentage:Z.percentage,correctAnswers:Z.correctAnswers,incorrectAnswers:Z.incorrectAnswers,xp:Z.xp,stars:Z.stars,badge:Z.showBadge?"Fizika Ustasi":null,completedAt:new Date().toISOString()}))},[K,d,Z,l.id,l.title]);function ne(){const P=[...N];return P[x]=w,k(P),P}function ue(P=!1){const D=N[x]!==void 0?N:ne();if(x===o.length-1){k(D),A(!0);return}k(D);const he=x+1;v(he),j(D[he]??null),q(Cn)}function me(){if(x===0)return;const P=ne(),D=x-1;k(P),v(D),j(P[D]??null),q(Cn)}function ce(){v(0),j(null),k([]),q(Cn),A(!1)}return T.useEffect(()=>{j(N[x]??null)},[x]),K?n.jsxs("section",{className:"physics-quiz-engine result-mode",children:[Z.showConfetti&&n.jsx("div",{className:"physics-confetti","aria-hidden":"true",children:ee.map(P=>n.jsx("span",{className:"physics-confetti-piece",style:{left:P.left,animationDelay:P.delay,animationDuration:P.duration,background:P.color,transform:`rotate(${P.rotate})`}},P.id))}),n.jsxs("div",{className:"physics-result-card",children:[n.jsxs("span",{className:"physics-result-badge",children:[n.jsx(Vf,{size:16})," Test yakunlandi"]}),n.jsx("h2",{children:l.title}),n.jsx("p",{children:Z.phrase}),n.jsx("div",{className:"physics-stars","aria-label":`Baholash: ${Z.stars} yulduz`,children:Array.from({length:5},(P,D)=>n.jsx(M1,{size:28,className:D<Z.stars?"is-filled":""},D))}),n.jsxs("div",{className:"physics-result-grid",children:[n.jsxs("div",{children:[n.jsx("span",{children:"To'g'ri javoblar"}),n.jsx("strong",{children:Z.correctAnswers})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Noto'g'ri javoblar"}),n.jsx("strong",{children:Z.incorrectAnswers})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Foiz"}),n.jsxs("strong",{children:[Z.percentage,"%"]})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Daraja"}),n.jsx("strong",{children:Z.gradeLabel})]}),n.jsxs("div",{children:[n.jsx("span",{children:"XP ochkolari"}),n.jsxs("strong",{children:["+",Z.xp," XP"]})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Status"}),n.jsx("strong",{children:Z.showBadge?"Fizika Ustasi":"Faol o'quvchi"})]})]}),Z.showBadge&&n.jsxs("div",{className:"physics-master-badge",children:[n.jsx(D1,{size:18})," Fizika Ustasi"]}),n.jsx("div",{className:"physics-result-message",children:Z.message}),n.jsxs("div",{className:"physics-result-actions",children:[n.jsxs("button",{type:"button",className:"physics-quiz-secondary",onClick:c,children:[n.jsx(F4,{size:18})," Mavzularga qaytish"]}),n.jsxs("button",{type:"button",className:"physics-quiz-primary",onClick:ce,children:[n.jsx(Hf,{size:18})," Restart Test"]})]})]})]}):n.jsxs("section",{className:"physics-quiz-engine",children:[n.jsxs("div",{className:"physics-quiz-topbar",children:[n.jsxs("button",{type:"button",className:"physics-quiz-secondary",onClick:c,children:[n.jsx(F4,{size:18})," Ortga"]}),n.jsxs("div",{className:"physics-quiz-pill",children:[n.jsx(Kf,{size:16})," ",S," s"]})]}),n.jsxs("div",{className:"physics-quiz-header",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"physics-quiz-badge",children:[n.jsx(Un,{size:15})," ",l.title]}),n.jsxs("h2",{children:[x+1,"-savol"]}),n.jsxs("p",{children:["20 ta savoldan ",x+1,"-savol. Har bir savol uchun 30 soniya vaqt beriladi."]})]}),n.jsxs("div",{className:"physics-quiz-pill",children:[n.jsx(Yf,{size:16})," ",Math.round(C),"%"]})]}),n.jsx("div",{className:"physics-quiz-progress-track",children:n.jsx("div",{className:"physics-quiz-progress-fill",style:{width:`${C}%`}})}),n.jsxs("div",{className:"physics-quiz-card",children:[n.jsx("h3",{children:_.question}),n.jsx("div",{className:"physics-quiz-options",children:_.options.map(P=>n.jsxs("button",{type:"button",className:`physics-quiz-option ${w===P?"is-selected":""}`,onClick:()=>j(P),children:[n.jsx("span",{className:"physics-quiz-option-letter",children:String.fromCharCode(65+_.options.indexOf(P))}),n.jsx("span",{children:P})]},P))}),n.jsxs("div",{className:"physics-quiz-actions",children:[n.jsxs("button",{type:"button",className:"physics-quiz-secondary",onClick:me,disabled:x===0,children:[n.jsx(F4,{size:18})," Oldingi"]}),n.jsxs("button",{type:"button",className:"physics-quiz-primary",onClick:()=>ue(!1),children:[x===o.length-1?"Yakunlash":"Keyingi savol"," ",n.jsx(_1,{size:18})]})]})]})]})}const Ep={"Boshlang'ich":"is-easy","O'rta":"is-medium",Qiyin:"is-hard"};function Tp({topic:l,onStart:o}){return n.jsxs("article",{className:"physics-test-card",children:[n.jsx("div",{className:"physics-test-card-orb"}),n.jsxs("div",{className:"physics-test-card-head",children:[n.jsx("div",{className:"physics-test-card-icon","aria-hidden":"true",children:l.icon}),n.jsx("span",{className:`physics-test-card-difficulty ${Ep[l.difficulty]||""}`,children:l.difficulty})]}),n.jsxs("div",{className:"physics-test-card-body",children:[n.jsx("h3",{children:l.title}),n.jsx("p",{children:"9-sinf o'quvchilari uchun gamifikatsiyalangan fizika savollari to'plami."}),n.jsxs("div",{className:"physics-test-card-meta",children:[n.jsxs("span",{children:[n.jsx(U1,{size:15})," 20 ta savol"]}),n.jsxs("span",{children:[n.jsx($f,{size:15})," ",l.branch]}),n.jsxs("span",{children:[n.jsx(L1,{size:15})," Premium test"]})]})]}),n.jsxs("button",{type:"button",className:"physics-test-card-button",onClick:()=>o(l),children:["Testni ishlash ",n.jsx(Z4,{size:17})]})]})}function gu(l,o,c){return{question:l,options:o,correctAnswer:c}}function qp(l){const o=l.shortTitle||l.title,c=l.concept,d=l.formula;return[gu(`${o} mavzusida ${c} nimani ifodalaydi?`,[`${c} fizik hodisaning asosiy mazmunini`,"Faqat laboratoriya jihozini","Faqat matematik o'yinni","Faqat tarixiy voqeani"],`${c} fizik hodisaning asosiy mazmunini`),gu(`${o} bo'yicha darsda eng ko'p uchraydigan formula qaysi?`,[d,"F = ma","I = U/R","pH = -lg[H+]"],d),gu(`${o} mavzusidagi masalalarda odatda birinchi qadam nima bo'ladi?`,["Berilganlarni yozib, fizik kattaliklarni aniqlash","Darhol javobni taxmin qilish","Faqat rasm chizish","Formulalarsiz yechish"],"Berilganlarni yozib, fizik kattaliklarni aniqlash"),gu(`${o} bo'yicha to'g'ri yondashuvni tanlang.`,["Kattaliklar birligini tekshirish","Birliklarni umuman yozmaslik","Faqat natijani eslab qolish","Savolni o'qimaslik"],"Kattaliklar birligini tekshirish"),gu(`${o} mavzusi qaysi fan bo'limiga tegishli?`,[l.branch,"Biologiya","Geografiya","Informatika"],l.branch),gu(`${o} ga oid tajribada kuzatuv natijasini qanday mustahkamlash kerak?`,["Natijani formula va izoh bilan solishtirish","Faqat yod olish","Faqat rangiga qarash","Faqat bir marta sinash"],"Natijani formula va izoh bilan solishtirish"),gu(`${o} bo'yicha eng muhim kompetensiya qaysi?`,["Mantiqiy tahlil va hisoblash","Faqat matn yodlash","Faqat rasmlarni ko'rish","Faqat test taxmin qilish"],"Mantiqiy tahlil va hisoblash"),gu(`${o} mavzusidagi noto'g'ri odat qaysi?`,["Birliklarni e'tiborsiz qoldirish","Grafikni tahlil qilish","Savolni diqqat bilan o'qish","Javobni tekshirish"],"Birliklarni e'tiborsiz qoldirish"),gu(`${o} uchun grafik berilgan bo'lsa, nima qilish kerak?`,["O'qlar nomi va kattaliklar orasidagi bog'lanishni aniqlash","Faqat rangini aytish","Grafikni o'tkazib yuborish","Faqat eng katta nuqtani yodlash"],"O'qlar nomi va kattaliklar orasidagi bog'lanishni aniqlash"),gu(`${o} bo'yicha masala yechilgach, yakunda nima qilinadi?`,["Javobning mantiqan to'g'riligini tekshirish","Hech narsa qilinmaydi","Darhol boshqa savolga o'tiladi","Faqat natijani bezash"],"Javobning mantiqan to'g'riligini tekshirish"),gu(`${o} mavzusida ${c} o'zgarishi nimaga olib kelishi mumkin?`,["Natijaning fizik talqini o'zgarishiga","Faqat daftar rangiga","Faqat kompyuter tezligiga","Umuman hech narsaga"],"Natijaning fizik talqini o'zgarishiga"),gu(`${o} darsida formuladagi har bir belgi nimani talab qiladi?`,["Aniq fizik ma'no va birlikni","Faqat bezakni","Faqat tarixiy nomni","Faqat lotincha yozuvni"],"Aniq fizik ma'no va birlikni"),gu(`${o} mavzusida tajriba xavfsizligi uchun nima zarur?`,["Jihozdan to'g'ri foydalanish","Savolni o'tkazib yuborish","Natijani ko'chirish","Faqat tez ishlash"],"Jihozdan to'g'ri foydalanish"),gu(`${o} bo'yicha yaxshi natijaga erishish siri nima?`,["Doimiy mashq va tahlil","Faqat omad","Faqat yodlash","Faqat tezkorlik"],"Doimiy mashq va tahlil"),gu(`${o} mavzusidagi savollarda ko'pincha qaysi ko'nikma sinovdan o'tadi?`,["Formulani amaliy qo'llash","Qo'shiq aytish","Rasm chizish","Matn tarjima qilish"],"Formulani amaliy qo'llash"),gu(`${o} bo'yicha noto'g'ri javoblarni kamaytirish uchun nima qilish kerak?`,["Har bir variantni solishtirib tahlil qilish","Faqat birinchi variantni belgilash","Tasodifiy tanlash","Faqat o'qituvchiga qarash"],"Har bir variantni solishtirib tahlil qilish"),gu(`${o} bilan bog'liq laboratoriya ishida eng muhim jihat nima?`,["O'lchov aniqligi","Faqat chiroyli yozuv","Faqat tez yakunlash","Faqat qiziqarli nom"],"O'lchov aniqligi"),gu(`${o} mavzusi kundalik hayotda nimaga yordam beradi?`,["Atrofdagi fizik hodisalarni tushunishga","Faqat telefon o'ynashga","Faqat she'r yozishga","Faqat xarita chizishga"],"Atrofdagi fizik hodisalarni tushunishga"),gu(`${o} bo'yicha yuqori ball olish uchun qay biri foydali?`,["Savol, formula va xulosani bog'lash","Faqat vaqtga qarab ishlash","Faqat bitta misolni yodlash","Faqat oxirgi variantni tanlash"],"Savol, formula va xulosani bog'lash"),gu(`${o} testini tugatishdan oldin nima qilish tavsiya etiladi?`,["Belgilangan javoblarni yana bir bor tekshirish","Darhol chiqib ketish","Faqat bir savolga qaytish","Hech narsani tekshirmaslik"],"Belgilangan javoblarni yana bir bor tekshirish")]}const Cp=[{id:"molekulyar-fizika",title:"Molekulyar fizika asoslari",shortTitle:"Molekulyar fizika",difficulty:"O'rta",icon:"⚛️",branch:"Fizika",concept:"modda zarralarining harakati",formula:"pV = nRT"},{id:"temperatura-issiqlik",title:"Temperatura va issiqlik miqdori",difficulty:"Boshlang'ich",icon:"🌡️",branch:"Termodinamika",concept:"temperatura o'zgarishi",formula:"Q = cmΔt"},{id:"ichki-energiya",title:"Ichki energiya va ish",difficulty:"O'rta",icon:"🔥",branch:"Termodinamika",concept:"ichki energiyaning almashinuvi",formula:"Q = ΔU + A"},{id:"gaz-qonunlari",title:"Gaz qonunlari",difficulty:"Qiyin",icon:"🧪",branch:"Molekulyar fizika",concept:"gaz kattaliklari orasidagi bog'lanish",formula:"p₁V₁/T₁ = p₂V₂/T₂"},{id:"suyuqliklar-bosimi",title:"Suyuqliklar bosimi",difficulty:"O'rta",icon:"💧",branch:"Mexanika",concept:"gidrostatik bosim",formula:"p = ρgh"},{id:"sirt-taranglik",title:"Sirt taranglik va kapillyarlik",difficulty:"Qiyin",icon:"🫧",branch:"Suyuqliklar fizikasi",concept:"suyuqlik sirtidagi kuchlar",formula:"F = 2σl"},{id:"buglanish-kondensatsiya",title:"Bug'lanish va kondensatsiya",difficulty:"O'rta",icon:"☁️",branch:"Faza o'tishlari",concept:"moddaning holat almashinuvi",formula:"Q = Lm"},{id:"yoruglik-tarqalishi",title:"Yorug'likning tarqalishi",difficulty:"Boshlang'ich",icon:"🔦",branch:"Optika",concept:"yorug'lik nurlarining yo'nalishi",formula:"c = λν"},{id:"qaytish-sinish",title:"Yorug'likning qaytishi va sinishi",difficulty:"O'rta",icon:"✨",branch:"Optika",concept:"nur yo'nalishining o'zgarishi",formula:"n₁sinα = n₂sinβ"},{id:"linzalar",title:"Linzalar va tasvir hosil bo'lishi",difficulty:"Qiyin",icon:"🔍",branch:"Optika",concept:"tasvirning optik hosil bo'lishi",formula:"1/F = 1/d + 1/f"},{id:"optik-asboblar",title:"Optik asboblar",difficulty:"O'rta",icon:"🔭",branch:"Optika",concept:"optik tizimlarning ishlashi",formula:"Γ = h'/h"},{id:"kosmos-fizikasi",title:"Koinot va astronomik hodisalar",difficulty:"Boshlang'ich",icon:"🪐",branch:"Astronomiya",concept:"osmon jismlarining harakati",formula:"v = 2πR/T"}],W4=Cp.map(l=>({...l,questions:qp(l)})),gm="physicsQuizHistory";function Tf(){try{const l=localStorage.getItem(gm),o=JSON.parse(l||"[]");return Array.isArray(o)?o:[]}catch{return[]}}function Op(l){if(!l)return"Hozirgina";const o=new Date(l);return Number.isNaN(o.getTime())?"Hozirgina":o.toLocaleDateString("uz-UZ",{day:"2-digit",month:"short",year:"numeric"})}function Mp(){const{user:l}=Uu(),[o,c]=T.useState(""),[d,m]=T.useState(null),[x,v]=T.useState([]);T.useEffect(()=>{v(Tf())},[]);const w=T.useMemo(()=>{const S=o.trim().toLowerCase();return S?W4.filter(q=>[q.title,q.difficulty,q.branch].some(K=>K.toLowerCase().includes(S))):W4},[o]),j=T.useMemo(()=>x.reduce((S,q)=>S+(q.xp||0),0),[x]),N=T.useMemo(()=>x.reduce((S,q)=>Math.max(S,q.percentage||0),0),[x]),k=async S=>{const q=[S,...Tf()].slice(0,8);if(localStorage.setItem(gm,JSON.stringify(q)),v(q),l?.role==="student")try{await Cu.trackTest({resource_id:S.topicId,resource_title:S.topicTitle,score_percentage:S.percentage,xp_points:S.xp,metadata:{correct_answers:S.correctAnswers,incorrect_answers:S.incorrectAnswers,stars:S.stars,badge:S.badge}})}catch{}};return d?n.jsx(Ap,{topic:d,questions:d.questions,onBack:()=>m(null),onComplete:k}):n.jsxs("div",{className:"test-system-page",children:[n.jsxs("section",{className:"test-system-hero",children:[n.jsxs("span",{className:"test-system-badge",children:[n.jsx(Un,{size:16})," Gamifikatsiyalangan fizika testlari"]}),n.jsx("h1",{children:"9-sinf o'quvchilari uchun Fizika fanidan interaktiv test tizimi"}),n.jsx("p",{children:"Har bir mavzu 20 ta savoldan iborat. Testlarni bosqichma-bosqich ishlab, XP to'plang, yulduzlarga ega bo'ling va eng yuqori natijada “Fizika Ustasi” darajasiga chiqing."}),n.jsxs("div",{className:"test-system-stats",children:[n.jsxs("div",{className:"test-system-stat",children:[n.jsx("span",{children:"Mavzular"}),n.jsxs("strong",{children:[W4.length," ta"]})]}),n.jsxs("div",{className:"test-system-stat",children:[n.jsx("span",{children:"Jami XP"}),n.jsxs("strong",{children:[j," XP"]})]}),n.jsxs("div",{className:"test-system-stat",children:[n.jsx("span",{children:"Eng yaxshi natija"}),n.jsxs("strong",{children:[N,"%"]})]}),n.jsxs("div",{className:"test-system-stat",children:[n.jsx("span",{children:"Rejim"}),n.jsx("strong",{children:"Quiz Game"})]})]})]}),n.jsxs("section",{className:"test-system-toolbar",children:[n.jsxs("label",{className:"test-system-search-wrap","aria-label":"Test mavzularini qidirish",children:[n.jsx(As,{size:18}),n.jsx("input",{className:"test-system-search",type:"search",value:o,onChange:S=>c(S.target.value),placeholder:"Masalan: optika, gaz qonunlari, linzalar..."})]}),n.jsxs("div",{className:"test-system-counter",children:[n.jsx(Yf,{size:18})," ",w.length," ta mavzu mos keldi"]})]}),n.jsxs("section",{className:"test-system-layout",children:[n.jsxs("div",{className:"test-system-main",children:[n.jsx("div",{className:"test-system-section-head",children:n.jsxs("div",{children:[n.jsx("h2",{children:"Test mavzulari"}),n.jsx("p",{children:"Mavzuni tanlang va darhol testni boshlang."})]})}),w.length===0?n.jsxs("div",{className:"test-system-empty",children:[n.jsx("strong",{children:"Mos mavzu topilmadi"}),n.jsx("span",{children:"Qidiruv so'zini o'zgartirib qayta urinib ko'ring."})]}):n.jsx("div",{className:"test-system-grid",children:w.map(S=>n.jsx(Tp,{topic:S,onStart:m},S.id))})]}),n.jsxs("aside",{className:"test-system-history",children:[n.jsxs("div",{className:"test-system-history-head",children:[n.jsxs("span",{className:"test-system-side-badge",children:[n.jsx(B1,{size:15})," Natijalar tarixi"]}),n.jsx("h3",{children:"Talaba natijalari"}),n.jsx("p",{children:"So'nggi urinishlaringiz, ballaringiz va XP yutuqlaringiz shu yerda ko'rinadi."})]}),x.length===0?n.jsxs("div",{className:"test-system-history-empty",children:[n.jsx(Vf,{size:22}),n.jsx("strong",{children:"Hozircha tarix mavjud emas"}),n.jsx("span",{children:"Birinchi testni ishlang va natija shu yerda paydo bo'ladi."})]}):n.jsx("div",{className:"test-system-history-list",children:x.map((S,q)=>n.jsxs("article",{className:"test-history-card",children:[n.jsxs("div",{className:"test-history-card-head",children:[n.jsx("strong",{children:S.topicTitle}),n.jsxs("span",{children:[S.percentage,"%"]})]}),n.jsxs("div",{className:"test-history-meta",children:[n.jsx("span",{children:Op(S.completedAt)}),n.jsxs("span",{children:["+",S.xp," XP"]})]}),n.jsxs("div",{className:"test-history-badges",children:[n.jsxs("span",{children:[S.correctAnswers," ta to'g'ri"]}),n.jsxs("span",{children:[S.stars," ⭐"]}),S.badge?n.jsx("span",{className:"is-master",children:S.badge}):null]})]},`${S.topicId}-${S.completedAt}-${q}`))})]})]})]})}function qf(){const{user:l}=Uu(),o=(x,v)=>(x.title||"").localeCompare(v.title||"",void 0,{numeric:!0,sensitivity:"base"}),c=new Set(["PDF","PPT","PPTX","DOC","DOCX"]),d=x=>c.has(Ft(x)),m=x=>{l?.role==="student"&&Cu.trackTheory({resource_id:String(x.id),resource_title:x.title,metadata:{source:"theory-page"}}).catch(()=>{})};return n.jsx(Fn,{eyebrow:"Nazariy bilimlar",title:"Nazariy bilimlar",description:"Nazariy bilimlar bo'limidagi PDF materiallarni ko'rish va yuklab olish mumkin.",resource:"theory-lessons",icon:Mn,tone:"violet",filterRows:d,sortRows:o,card:{authenticatedFileActions:!0,title:x=>x.title,subtitle:x=>x.content||"Nazariy bilimlar uchun tayyorlangan PDF material.",meta:x=>`${x.published?"Chop etilgan":"Qoralama"} • ${x.estimated_minutes||0} daqiqa`,badge:x=>Ft(x),previewLabel:"Ko'rish",previewTarget:"_self",actionLabel:"Yuklab olish",actionHref:x=>po(x,"download")},columns:[{key:"title",label:"Material"},{key:"estimated_minutes",label:"Daqiqa"},{key:"published",label:"Holat",render:x=>x.published?"Ha":"Yo'q"}],onPreview:m})}function Dp({video:l,onOpen:o,onDownload:c}){const[d,m]=T.useState(!1);return n.jsxs("article",{className:"physics-video-card",children:[n.jsxs("div",{className:"physics-video-card-media-wrap",children:[d?n.jsxs("div",{className:"physics-video-card-fallback",children:[n.jsx("span",{children:"⚛️"}),n.jsx("strong",{children:"Fizika video darsi"})]}):n.jsx("video",{className:"physics-video-card-media",src:l.url,preload:"metadata",muted:!0,playsInline:!0,onError:()=>m(!0)}),n.jsx("div",{className:"physics-video-card-glow"}),n.jsxs("div",{className:"physics-video-card-overlay",children:[n.jsx("span",{className:"physics-video-card-pill",children:"MP4 dars"}),n.jsxs("span",{className:"physics-video-card-duration",children:[n.jsx(Kf,{size:14})," ",l.durationLabel||"Davomiyligi aniqlanmoqda"]})]})]}),n.jsxs("div",{className:"physics-video-card-body",children:[n.jsxs("div",{children:[n.jsx("h3",{children:l.title}),n.jsx("p",{children:l.subtitle})]}),n.jsxs("div",{className:"physics-video-card-actions",children:[n.jsxs("button",{type:"button",className:"physics-video-card-primary",onClick:()=>o(l),children:[n.jsx(so,{size:18})," Online ko'rish"]}),n.jsxs("button",{type:"button",className:"physics-video-card-secondary",onClick:()=>c(l),children:[n.jsx(Gi,{size:18})," Yuklab olish"]})]})]})]})}function _p({video:l,isOpen:o,onClose:c,onDownload:d}){return T.useEffect(()=>{if(!o)return;const m=document.body.style.overflow;document.body.style.overflow="hidden";const x=v=>{v.key==="Escape"&&c()};return window.addEventListener("keydown",x),()=>{document.body.style.overflow=m,window.removeEventListener("keydown",x)}},[o,c]),!o||!l?null:n.jsx("div",{className:"video-modal-overlay",onClick:c,role:"presentation",children:n.jsxs("div",{className:"video-modal-panel",onClick:m=>m.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":l.title,children:[n.jsxs("div",{className:"video-modal-header",children:[n.jsxs("div",{children:[n.jsx("span",{className:"video-modal-badge",children:"Fizika video darsi"}),n.jsx("h3",{children:l.title}),n.jsx("p",{children:l.durationLabel||"Davomiyligi yuklanmoqda..."})]}),n.jsxs("div",{className:"video-modal-actions",children:[n.jsxs("button",{type:"button",className:"video-modal-download",onClick:()=>d(l),children:[n.jsx(Gi,{size:18})," Yuklab olish"]}),n.jsx("button",{type:"button",className:"video-modal-close",onClick:c,"aria-label":"Modalni yopish",children:n.jsx(Uf,{size:20})})]})]}),n.jsx("div",{className:"video-modal-player-wrap",children:n.jsx("video",{className:"video-modal-player",src:l.url,controls:!0,autoPlay:!0,playsInline:!0,preload:"auto"},l.url)})]})})}const Up=[{id:"grade-9-solutions",title:"9-sinf fizika darslik yechimlari to'liq",description:"9-sinf fizika darsligi bo'yicha to'liq video yechimlar playlisti.",type:"Playlist",url:"https://www.youtube.com/playlist?list=PLCKbwy6RHxeiDUtAICSEKMEbCNDnDrPWn",action:"Playlistni ko'rish"},{id:"fazliddinov-diyorbek-channel",title:"Fazliddinov Diyorbek uz",description:"Fazliddinov Diyorbek uz YouTube kanalidagi video darslar.",type:"YouTube kanal",url:"https://www.youtube.com/@Fazliddinov_Diyorbek_uz_1",action:"Kanalga o'tish"}];function Lp(l,o,c){const d=new Set(o.map(x=>x.url).filter(Boolean)),m=c.trim().toLowerCase();return l.filter(x=>d.has(x.url)?!1:!m||[x.title,x.description,x.type].some(v=>v.toLowerCase().includes(m)))}const Bp="/api".replace(/\/+$/,""),Fp=`${Bp}/videos/`;function Hp(l){if(!Number.isFinite(l)||l<=0)return"Davomiyligi aniqlanmoqda";const o=Math.round(l),c=Math.floor(o/3600),d=Math.floor(o%3600/60),m=o%60;return c>0?`${c}:${String(d).padStart(2,"0")}:${String(m).padStart(2,"0")}`:`${d}:${String(m).padStart(2,"0")}`}function vm(l){return(l||"").replace(/\.mp4$/i,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,o=>o.toUpperCase())}function $p(l){return l?`${vm(l)} mavzusiga oid video dars.`:"Fizika bo'yicha interaktiv video dars."}function Vp(l){return new Promise(o=>{const c=document.createElement("video");let d=!1;const m=v=>{d||(d=!0,c.removeAttribute("src"),c.load(),o(v))},x=window.setTimeout(()=>m(null),1e4);c.preload="metadata",c.muted=!0,c.playsInline=!0,c.onloadedmetadata=()=>{window.clearTimeout(x),m(c.duration)},c.onerror=()=>{window.clearTimeout(x),m(null)},c.src=l})}async function Kp(l){const o=await fetch(l.url);if(!o.ok)throw new Error("Video yuklab olinmadi");const c=await o.blob(),d=window.URL.createObjectURL(c),m=document.createElement("a");m.href=d,m.download=l.name,document.body.appendChild(m),m.click(),m.remove(),window.URL.revokeObjectURL(d)}function Yp(){const{user:l}=Uu(),[o,c]=T.useState([]),[d,m]=T.useState(!0),[x,v]=T.useState(""),[w,j]=T.useState(""),[N,k]=T.useState(null);T.useEffect(()=>{let C=!1;async function Z(){m(!0),v("");try{const ee=await ou.get(Fp),ue=(Array.isArray(ee.data)?ee.data:[]).map((ce,P)=>({id:`${ce.name}-${P}`,name:ce.name,url:ce.url,title:vm(ce.name),subtitle:$p(ce.name),durationLabel:"Davomiyligi aniqlanmoqda"}));C||c(ue);const me=await Promise.all(ue.map(async ce=>({name:ce.name,duration:await Vp(ce.url)})));C||c(ce=>ce.map(P=>{const D=me.find(he=>he.name===P.name);return{...P,durationSeconds:D?.duration??null,durationLabel:Hp(D?.duration)}}))}catch(ee){C||(v(ee.message||"Videolarni yuklashda xatolik yuz berdi."),c([]))}finally{C||m(!1)}}return Z(),()=>{C=!0}},[]);const S=T.useMemo(()=>{const C=w.trim().toLowerCase();return C?o.filter(Z=>[Z.title,Z.name,Z.subtitle].some(ee=>ee.toLowerCase().includes(C))):o},[w,o]),q=T.useMemo(()=>Lp(Up,o,w),[w,o]),K=T.useMemo(()=>{const C=o.reduce((Z,ee)=>Z+(ee.durationSeconds||0),0);return C>0?Math.round(C/60):null},[o]),A=async C=>{try{await Kp(C)}catch{window.open(C.url,"_blank","noopener,noreferrer")}},_=async C=>{if(k(C),l?.role==="student")try{await Cu.trackVideo({resource_id:C.name,resource_title:C.title,metadata:{source:"videos-page",url:C.url,duration_seconds:C.durationSeconds||null}})}catch{}};return n.jsxs("div",{className:"videos-page",children:[n.jsxs("section",{className:"videos-hero",children:[n.jsxs("span",{className:"videos-badge",children:[n.jsx(Un,{size:16})," Premium fizika video darslari"]}),n.jsx("h1",{children:"Fizika videodarslar kutubxonasi"}),n.jsx("p",{children:"Molekulyar fizika, optika, issiqlik hodisalari va laboratoriya mavzulari bo'yicha zamonaviy video darslarni qulay tarzda izlang, online ko'ring va yuklab oling."}),n.jsxs("div",{className:"videos-stats",children:[n.jsxs("div",{className:"videos-stat",children:[n.jsx("span",{children:"Jami videolar"}),n.jsxs("strong",{children:[o.length," ta"]})]}),n.jsxs("div",{className:"videos-stat",children:[n.jsx("span",{children:"Ko'rsatish holati"}),n.jsx("strong",{children:"Netflix uslubi"})]}),n.jsxs("div",{className:"videos-stat",children:[n.jsx("span",{children:"Umumiy davomiylik"}),n.jsx("strong",{children:K?`${K} daq`:"Hisoblanmoqda"})]})]})]}),n.jsxs("section",{className:"videos-toolbar",children:[n.jsxs("label",{className:"videos-search-wrap","aria-label":"Videolarni qidirish",children:[n.jsx(As,{size:18}),n.jsx("input",{type:"search",className:"videos-search",placeholder:"Masalan: linza, gaz, optika, issiqlik...",value:w,onChange:C=>j(C.target.value)})]}),n.jsxs("div",{className:"videos-count",children:[n.jsx(F1,{size:18})," ",S.length," ta video topildi"]})]}),q.length>0&&n.jsxs("section",{className:"videos-sources","aria-labelledby":"videos-sources-title",children:[n.jsxs("div",{className:"videos-sources-heading",children:[n.jsx("h2",{id:"videos-sources-title",children:"Tavsiya etilgan YouTube manbalari"}),n.jsx("p",{children:"Playlist va kanal sahifalarini YouTube’da oching."})]}),n.jsx("div",{className:"videos-grid",children:q.map(C=>n.jsxs("article",{className:"videos-source-card",children:[n.jsx("span",{className:"videos-source-type",children:C.type}),n.jsxs("div",{children:[n.jsx("h3",{children:C.title}),n.jsx("p",{children:C.description})]}),n.jsxs("a",{className:"videos-source-action",href:C.url,target:"_blank",rel:"noopener noreferrer",children:[C.action," ",n.jsx("span",{"aria-hidden":"true",children:"↗"})]})]},C.id))})]}),d?n.jsx("section",{className:"videos-loading",children:n.jsxs("div",{children:[n.jsx("div",{className:"videos-spinner"}),n.jsx("strong",{children:"Videolar yuklanmoqda..."}),n.jsx("div",{children:"Backenddan mp4 darslar olinmoqda."})]})}):x?n.jsx("section",{className:"videos-error",children:n.jsxs("div",{children:[n.jsx("strong",{children:"Videolarni yuklab bo'lmadi"}),n.jsx("div",{children:x})]})}):S.length===0?n.jsx("section",{className:"videos-empty",children:n.jsxs("div",{children:[n.jsx("strong",{children:"Hozircha video topilmadi"}),n.jsx("div",{children:"Qidiruv so'zini o'zgartirib ko'ring yoki backend papkasiga yangi mp4 fayllarni qo'shing."})]})}):n.jsx("section",{className:"videos-grid",children:S.map(C=>n.jsx(Dp,{video:C,onOpen:_,onDownload:A},C.id))}),n.jsx(_p,{video:N,isOpen:!!N,onClose:()=>k(null),onDownload:A})]})}function _t({allowedRoles:l,children:o}){const{user:c,loading:d}=Uu(),m=Of();return d?n.jsx(ot,{label:"Preparing your workspace..."}):c?l?.length&&!l.includes(c.role)?n.jsx(On,{to:Ht(c.role),replace:!0}):o||n.jsx(io,{}):n.jsx(On,{to:"/login",replace:!0,state:{from:m}})}function Qp(){return n.jsx(_t,{children:n.jsx(Fh,{children:n.jsx(io,{})})})}function Jp(){const{user:l}=Uu();return n.jsx(On,{to:Ht(l?.role),replace:!0})}function Gp(){const{user:l}=Uu();return n.jsx(On,{to:Ht(l?.role),replace:!0})}function Wp(){return n.jsxs(t1,{children:[n.jsx(Je,{path:"/login",element:n.jsx(Jh,{})}),n.jsx(Je,{path:"/register",element:n.jsx(up,{})}),n.jsx(Je,{path:"/",element:n.jsx(_t,{children:n.jsx(Jp,{})})}),n.jsxs(Je,{element:n.jsx(Qp,{}),children:[n.jsx(Je,{path:"/dashboard",element:n.jsx(Qh,{})}),n.jsx(Je,{path:"/subjects",element:n.jsx(yp,{})}),n.jsx(Je,{path:"/documents",element:n.jsx(yf,{})}),n.jsx(Je,{path:"/dars-hujjatlari",element:n.jsx(yf,{})}),n.jsx(Je,{path:"/theory",element:n.jsx(qf,{})}),n.jsx(Je,{path:"/nazariy-bilimlar",element:n.jsx(qf,{})}),n.jsx(Je,{path:"/practical",element:n.jsx(On,{to:"/theory",replace:!0})}),n.jsx(Je,{path:"/laboratory",element:n.jsx(kf,{})}),n.jsx(Je,{path:"/laboratoriya",element:n.jsx(kf,{})}),n.jsx(Je,{path:"/laboratory/:simulationId/view",element:n.jsx(G4,{})}),n.jsx(Je,{path:"/laboratoriya/:simulationId/view",element:n.jsx(G4,{})}),n.jsx(Je,{path:"/simulations",element:n.jsx(xp,{})}),n.jsx(Je,{path:"/simulations/:simulationId/view",element:n.jsx(G4,{})}),n.jsx(Je,{path:"/videos",element:n.jsx(Yp,{})}),n.jsx(Je,{path:"/mobileapps",element:n.jsx(Ih,{})}),n.jsx(Je,{path:"/testsystem",element:n.jsx(Mp,{})}),n.jsx(Je,{path:"/notifications",element:n.jsx(gf,{})}),n.jsx(Je,{path:"/profile",element:n.jsx(Gp,{})}),n.jsx(Je,{path:"/student-profile",element:n.jsx(_t,{allowedRoles:["student"],children:n.jsx(vp,{})})}),n.jsx(Je,{path:"/teacher-profile",element:n.jsx(_t,{allowedRoles:["teacher"],children:n.jsx(wp,{})})}),n.jsx(Je,{path:"/admin-profile",element:n.jsx(_t,{allowedRoles:["admin"],children:n.jsx(Yh,{})})}),n.jsx(Je,{path:"/accounts",element:n.jsx(_t,{allowedRoles:["admin"],children:n.jsx(Kh,{})})}),n.jsx(Je,{path:"/analytics",element:n.jsx(_t,{allowedRoles:["teacher","admin"],children:n.jsx(gf,{})})})]}),n.jsx(Je,{path:"*",element:n.jsx(On,{to:"/",replace:!0})})]})}X1.createRoot(document.getElementById("root")).render(n.jsx(n1.StrictMode,{children:n.jsx(i1,{children:n.jsx(Uh,{children:n.jsx(Wp,{})})})}));
