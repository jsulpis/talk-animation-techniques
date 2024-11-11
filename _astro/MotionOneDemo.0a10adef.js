import{S as Z,i as ee,s as te,e as m,v as ne,w as H,c as p,a as w,x as se,d as g,y as W,b as E,f as ie,z as h,n as j,o as re,g as oe}from"./index.da907017.js";import{c as J,d as le,h as ae,a as ce,w as K,A as Q,n as M,p as de,b as U,i as Y,o as fe,j as ue,q as he,_ as ve}from"./tslib.es6.0f081f36.js";function ge(e,t){return t?e*(1e3/t):0}function me(e){return function(n,s,i={}){n=J(n);const r=n.length,o=[];for(let f=0;f<r;f++){const u=n[f];for(const l in s){const a=le(i,l);a.delay=ae(a.delay,f,r);const c=ce(u,l,s[l],a,e);o.push(c)}}return K(o,i,i.duration)}}const pe=me(Q),I=new WeakMap;let y;function we(e,t){if(t){const{inlineSize:n,blockSize:s}=t[0];return{width:n,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function Ee({target:e,contentRect:t,borderBoxSize:n}){var s;(s=I.get(e))===null||s===void 0||s.forEach(i=>{i({target:e,contentSize:t,get size(){return we(e,n)}})})}function ye(e){e.forEach(Ee)}function xe(){typeof ResizeObserver>"u"||(y=new ResizeObserver(ye))}function _e(e,t){y||xe();const n=J(e);return n.forEach(s=>{let i=I.get(s);i||(i=new Set,I.set(s,i)),i.add(t),y?.observe(s)}),()=>{n.forEach(s=>{const i=I.get(s);i?.delete(t),i?.size||y?.unobserve(s)})}}const A=new Set;let b;function ze(){b=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};A.forEach(n=>n(t))},window.addEventListener("resize",b)}function Le(e){return A.add(e),b||ze(),()=>{A.delete(e),!A.size&&b&&(b=void 0)}}function Oe(e,t){return M(e)?Le(e):_e(e,t)}const He=50,q=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),We=()=>({time:0,x:q(),y:q()}),Se={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function C(e,t,n,s){const i=n[t],{length:r,position:o}=Se[t],f=i.current,u=n.time;i.current=e["scroll"+o],i.scrollLength=e["scroll"+r]-e["client"+r],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=de(0,i.scrollLength,i.current);const l=s-u;i.velocity=l>He?0:ge(i.current-f,l)}function be(e,t,n){C(e,"x",t,n),C(e,"y",t,n),t.time=n}function Ie(e,t){let n={x:0,y:0},s=e;for(;s&&s!==t;)if(s instanceof HTMLElement)n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s instanceof SVGGraphicsElement&&"getBBox"in s){const{top:i,left:r}=s.getBBox();for(n.x+=r,n.y+=i;s&&s.tagName!=="svg";)s=s.parentNode}return n}const Ae={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},T={start:0,center:.5,end:1};function N(e,t,n=0){let s=0;if(T[e]!==void 0&&(e=T[e]),U(e)){const i=parseFloat(e);e.endsWith("px")?s=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?s=i/100*document.documentElement.clientWidth:e.endsWith("vh")?s=i/100*document.documentElement.clientHeight:e=i}return Y(e)&&(s=t*e),n+s}const De=[0,0];function je(e,t,n,s){let i=Array.isArray(e)?e:De,r=0,o=0;return Y(e)?i=[e,e]:U(e)&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,T[e]?e:"0"]),r=N(i[0],n,s),o=N(i[1],t),r-o}const Ve={x:0,y:0};function Te(e,t,n){let{offset:s=Ae.All}=n;const{target:i=e,axis:r="y"}=n,o=r==="y"?"height":"width",f=i!==e?Ie(i,e):Ve,u=i===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:i.clientWidth,height:i.clientHeight},l={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let a=!t[r].interpolate;const c=s.length;for(let d=0;d<c;d++){const x=je(s[d],l[o],u[o],f[r]);!a&&x!==t[r].interpolatorOffsets[d]&&(a=!0),t[r].offset[d]=x}a&&(t[r].interpolate=fe(ue(c),t[r].offset),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}function Me(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let s=t;for(;s&&s!=e;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function ke(e,t,n,s={}){const i=s.axis||"y";return{measure:()=>Me(e,s.target,n),update:r=>{be(e,n,r),(s.offset||s.target)&&Te(e,n,s)},notify:M(t)?()=>t(n):Be(t,n[i])}}function Be(e,t){return e.pause(),e.forEachNative((n,{easing:s})=>{var i,r;if(n.updateDuration)s||(n.easing=he),n.updateDuration(1);else{const o={duration:1e3};s||(o.easing="linear"),(r=(i=n.effect)===null||i===void 0?void 0:i.updateTiming)===null||r===void 0||r.call(i,o)}}),()=>{e.currentTime=t.progress}}const S=new WeakMap,$=new WeakMap,V=new WeakMap,G=e=>e===document.documentElement?window:e;function X(e,t={}){var{container:n=document.documentElement}=t,s=ve(t,["container"]);let i=V.get(n);i||(i=new Set,V.set(n,i));const r=We(),o=ke(n,e,r,s);if(i.add(o),!S.has(n)){const l=()=>{const c=performance.now();for(const d of i)d.measure();for(const d of i)d.update(c);for(const d of i)d.notify()};S.set(n,l);const a=G(n);window.addEventListener("resize",l,{passive:!0}),n!==document.documentElement&&$.set(n,Oe(n,l)),a.addEventListener("scroll",l,{passive:!0})}const f=S.get(n),u=requestAnimationFrame(f);return()=>{var l;typeof e!="function"&&e.stop(),cancelAnimationFrame(u);const a=V.get(n);if(!a||(a.delete(o),a.size))return;const c=S.get(n);S.delete(n),c&&(G(n).removeEventListener("scroll",c),(l=$.get(n))===null||l===void 0||l(),window.removeEventListener("resize",c))}}function Pe(e,t={}){return K([()=>{const n=new Q(e,[0,1],t);return n.finished.catch(()=>{}),n}],t,t.duration)}function Re(e,t,n){return(M(e)?Pe:pe)(e,t,n)}function Fe(e){let t,n,s,i,r,o,f,u,l,a,c,d,x,_,z,D,L;return{c(){t=m("article"),n=m("div"),s=ne("0"),i=H(),r=m("div"),o=m("div"),f=H(),u=m("div"),l=m("div"),a=H(),c=m("div"),d=m("div"),x=H(),_=m("div"),z=m("div"),D=H(),L=m("div"),this.h()},l(O){t=p(O,"ARTICLE",{class:!0});var v=w(t);n=p(v,"DIV",{class:!0});var k=w(n);s=se(k,"0"),k.forEach(g),i=W(v),r=p(v,"DIV",{class:!0});var B=w(r);o=p(B,"DIV",{class:!0}),w(o).forEach(g),B.forEach(g),f=W(v),u=p(v,"DIV",{class:!0});var P=w(u);l=p(P,"DIV",{class:!0}),w(l).forEach(g),P.forEach(g),a=W(v),c=p(v,"DIV",{class:!0});var R=w(c);d=p(R,"DIV",{class:!0}),w(d).forEach(g),R.forEach(g),x=W(v),_=p(v,"DIV",{class:!0});var F=w(_);z=p(F,"DIV",{class:!0}),w(z).forEach(g),F.forEach(g),D=W(v),L=p(v,"DIV",{class:!0}),w(L).forEach(g),v.forEach(g),this.h()},h(){E(n,"class","progress-text svelte-lifijm"),E(o,"class","svelte-lifijm"),E(r,"class","section svelte-lifijm"),E(l,"class","svelte-lifijm"),E(u,"class","section gold svelte-lifijm"),E(d,"class","svelte-lifijm"),E(c,"class","section svelte-lifijm"),E(z,"class","svelte-lifijm"),E(_,"class","section svelte-lifijm"),E(L,"class","progress-bar svelte-lifijm"),E(t,"class","svelte-lifijm")},m(O,v){ie(O,t,v),h(t,n),h(n,s),h(t,i),h(t,r),h(r,o),h(t,f),h(t,u),h(u,l),h(t,a),h(t,c),h(c,d),h(t,x),h(t,_),h(_,z),h(t,D),h(t,L),e[1](t)},p:j,i:j,o:j,d(O){O&&g(t),e[1](null)}}}function qe(e,t,n){let s;re(()=>{const o={target:s.querySelector(".section.gold div"),offset:["start end","end end","start start","end start"],container:s};X(Re(".progress-bar",{scaleX:[0,1,1,0]}),o);const f=document.querySelector(".progress-text");X(({y:u})=>f.innerHTML=u.progress.toFixed(2),o)});function i(r){oe[r?"unshift":"push"](()=>{s=r,n(0,s)})}return[s,i]}class $e extends Z{constructor(t){super(),ee(this,t,qe,Fe,te,{})}}export{$e as default};