import{S as _,i as w,s as M,e as P,c as b,a as S,d as c,b as T,f as U,B as m,n as l,C,o as k,g as z}from"./index.da907017.js";import{S as L,d as A,W as B,c as D,T as d,b as F,M as I,C as j}from"./three.module.2dccf8ec.js";import{t as E}from"./index.44562af8.js";import{a as G}from"./index.226ea5b1.js";var H=`varying vec2 vUv;

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	vUv = uv;
}`,V=`uniform vec2 uPlaneRes;
uniform sampler2D tMap1;
uniform sampler2D tMap2;
uniform float uTime;
uniform float uTransitionProgress;

varying vec2 vUv;

#define PI 3.14159265359

vec2 getUvs(vec2 planeRes, vec2 mediaRes, vec2 uv) {
	vec2 ratio = vec2(min((planeRes.x / planeRes.y) / (mediaRes.x / mediaRes.y), 1.0), min((planeRes.y / planeRes.x) / (mediaRes.y / mediaRes.x), 1.0));
	vec2 finalUv = vec2(uv.x * ratio.x + (1.0 - ratio.x) * 0.5, uv.y * ratio.y + (1.0 - ratio.y) * 0.5);
	return finalUv;
}

vec2 mirrored(vec2 v) {
	vec2 m = mod(v, 2.0);
	return mix(m, 2.0 - m, step(1.0, m));
}

float tri(float v) {
	return mix(v, 1.0 - v, step(0.5, v)) * 2.0;
}

float udRoundBox(vec2 p, vec2 b, float r) {
	return length(max(abs(p) - b + r, 0.0)) - r;
}
float roundCorners(vec2 planeRes, vec2 uv, float radius) {
	float iRadius = min(planeRes.x, planeRes.y) * radius;
	vec2 halfRes = 0.5 * planeRes.xy;
	float b = udRoundBox((uv * planeRes) - halfRes, halfRes, iRadius);
	return clamp(1.0 - b, 0.0, 1.0);
}

void main() {
	vec2 uMediaRes1 = vec2(textureSize(tMap1, 0));
	vec2 uMediaRes2 = vec2(textureSize(tMap2, 0));
	vec2 uv1 = getUvs(uPlaneRes, uMediaRes1, vUv);
	vec2 uv2 = getUvs(uPlaneRes, uMediaRes2, vUv);

	vec2 uv = vUv;
	uv.y = 1.0 - uv.y;
	float progress = uTransitionProgress;
	float edge = 0.5 * (uv.y + uv.x);
	float sm = 0.12;
	float str = smoothstep(edge - sm, edge + sm, progress);
	float crossLine = str * smoothstep(edge + sm, edge - sm, progress);

	vec2 trans = vec2(0.015) * crossLine;
	vec2 trans1 = progress * vec2(0.5, -1.0) + trans;
	vec2 trans2 = (1.0 - progress) * vec2(-0.5, 1.0) + trans;

	float w = sin(sin(uTime) * 0.3 + vUv.x * 4.0);
	vec2 xy = 0.3 * w * (tri(progress) + tri(crossLine * 5.0)) * vec2(0.0, 1.0);

	uv1 = mirrored(uv1 + trans1 + xy);
	uv2 = mirrored(uv2 + trans2 + xy);

	vec4 image1 = texture2D(tMap1, uv1);
	vec4 image2 = texture2D(tMap2, uv2);

	gl_FragColor = mix(image1, image2, str);
	float roundC = roundCorners(uPlaneRes, vUv, 0.024);
	gl_FragColor.a *= roundC;
}`;function W(r){let e,t,s;return{c(){e=P("canvas"),this.h()},l(n){e=b(n,"CANVAS",{class:!0}),S(e).forEach(c),this.h()},h(){T(e,"class","svelte-b94mfy")},m(n,u){U(n,e,u),r[2](e),t||(s=[m(e,"mouseenter",r[3]),m(e,"mouseleave",r[4])],t=!0)},p:l,i:l,o:l,d(n){n&&c(e),r[2](null),t=!1,C(s)}}}function $(r,e,t){let s;const n=E(0,{duration:1200,easing:G});k(()=>{const a=new L,i=new A;a.add(i);const o=new B({canvas:s,alpha:!0});o.setSize(window.innerHeight/1,window.innerHeight/2),o.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new D(2,2),f=new d().load("https://res.cloudinary.com/dpv0ukspz/image/upload/v1662920941/keith-hardy-PP8Escz15d8-unsplash_pwfug2.jpg",()=>o.render(a,i)),g=new d().load("https://res.cloudinary.com/dpv0ukspz/image/upload/v1662920742/krystian-tambur-k7rZ8wTfABA-unsplash_ykee7e.jpg",()=>o.render(a,i)),v=new F({vertexShader:H,fragmentShader:V,uniforms:{uTime:{value:0},tMap1:{value:f},tMap2:{value:g},uPlaneRes:{value:[2,2]},uTransitionProgress:{value:0}}}),h=new I(p,v);a.add(h);const R=new j;n.subscribe(x=>{v.uniforms.uTransitionProgress.value=x;const y=R.getElapsedTime();v.uniforms.uTime.value=y,o.render(a,i)})});function u(a){z[a?"unshift":"push"](()=>{s=a,t(0,s)})}return[s,n,u,()=>n.set(1),()=>n.set(0)]}class Q extends _{constructor(e){super(),w(this,e,$,W,M,{})}}export{Q as default};
