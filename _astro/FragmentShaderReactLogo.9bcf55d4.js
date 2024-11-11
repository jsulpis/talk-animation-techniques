import{S as u,i as h,s as g,e as k,c as S,a as x,d as l,b as I,f as w,n as i,o as T,l as b,g as y}from"./index.da907017.js";import{S as A,c as E,b as _,M as L,d as C,W as N,C as P}from"./three.module.2dccf8ec.js";var D=`varying vec2 vUv;

void main() {
   vUv = position.xy;
   gl_Position = vec4(position, 1.0);
}`,G=`varying vec2 vUv;
uniform float uTime;

#define SCALE 0.5
#define SPEED 0.5
#define INTENSITY 15.0
#define LENGTH 1.8
#define RADIUS 0.020
#define FADING 0.045
#define GLOW 8.
#define COLOR vec3(0.97, 0.14, .02)

#define PI 3.1415926535

vec2 sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C) {
	vec2 a = B - A;
	vec2 b = A - 2.0 * B + C;
	vec2 c = a * 2.0;
	vec2 d = A - pos;

	float kk = 1.0 / dot(b, b);
	float kx = kk * dot(a, b);
	float ky = kk * (2.0 * dot(a, a) + dot(d, b)) / 3.0;
	float kz = kk * dot(d, a);

	vec2 res;

	float p = ky - kx * kx;
	float p3 = p * p * p;
	float q = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
	float h = q * q + 4.0 * p3;

	h = sqrt(h);
	vec2 x = (vec2(h, -h) - q) / 2.0;
	vec2 uv = sign(x) * pow(abs(x), vec2(1.0 / 3.0));
	float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);

	return vec2(length(d + (c + b * t) * t), t);
}

vec2 circle(float t) {
	float x = SCALE * sin(t);
	float y = SCALE * cos(t);
	return vec2(x, y);
}

float mapcircle(vec2 pos, float delay) {
	float t = fract(-SPEED * uTime + delay);
	float dl = LENGTH / INTENSITY;
	vec2 p1 = circle(t * 2. * PI);
	vec2 p2 = circle((dl + t) * 2. * PI);
	vec2 c = (p1 + p2) / 2.0;
	float d = 1e9;

	for(float i = 2.0; i < INTENSITY; i++) {
		p1 = p2;
		p2 = circle((i * dl + t) * 2. * PI);
		vec2 c_prev = c;
		c = (p1 + p2) / 2.;
		vec2 f = sdBezier(pos, c_prev, p1, c);
		d = min(d, f.x + FADING * (f.y + i) / INTENSITY);
	}
	return d;
}

mat2 rotate2D(float angle) {
	float c = cos(angle);
	float s = sin(angle);
	return mat2(c, -s, s, c);
}

void main() {
	vec2 deformation = vec2(.5, 1.3);

	float dist1 = mapcircle(rotate2D(-PI / 3.) * vUv * deformation, .0);
	float dist2 = mapcircle(rotate2D(PI / 3.) * vUv * deformation, 1.);
	float dist3 = mapcircle(vUv * deformation, .5);

	float col1 = pow(RADIUS / dist1, GLOW);
	float col2 = pow(RADIUS / dist2, GLOW);
	float col3 = pow(RADIUS / dist3, GLOW);

	float center = smoothstep(.18, .05, length(vUv));

	vec4 col = vec4(.97, .98, .99, 1.);

	col.rgb -= COLOR * min((col1 + col2 + col3 + center) * (2. * GLOW), 2.);

	gl_FragColor = col;
}`;function U(o){let n;return{c(){n=k("canvas"),this.h()},l(e){n=S(e,"CANVAS",{class:!0}),x(n).forEach(l),this.h()},h(){I(n,"class","webgl")},m(e,t){w(e,n,t),o[1](n)},p:i,i,o:i,d(e){e&&l(n),o[1](null)}}}function R(o,n,e){let t;T(()=>{const a=new A,f=new E(2,2),r=new _({vertexShader:D,fragmentShader:G,uniforms:{uTime:{value:0}}}),v=new L(f,r);a.add(v);const s=new C;a.add(s);const c=new N({canvas:t,alpha:!0});c.setSize(window.innerHeight/1.7,window.innerHeight/1.7),c.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new P;b(()=>{if(!t?.closest("section:not(.stack).present"))return!0;const m=p.getElapsedTime();return r.uniforms.uTime.value=m,c.render(a,s),!0})});function d(a){y[a?"unshift":"push"](()=>{t=a,e(0,t)})}return[t,d]}class q extends u{constructor(n){super(),h(this,n,R,U,g,{})}}export{q as default};
