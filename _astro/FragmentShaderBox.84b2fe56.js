import{S as f,i as z,s as p,e as u,c as k,a as y,d as i,b as g,f as h,n as c,o as w,l as _,g as S}from"./index.da907017.js";import{S as M,f as T,b as E,M as H,g as O,W as A,C}from"./three.module.1dcded38.js";var P=`varying vec2 vUv;

void main() {
   vUv = position.xy;
   gl_Position = vec4(position, 1.0);
}`,F=`varying vec2 vUv;
uniform float uTime;

#define METHOD 1

vec4 boxIntersect(in vec3 ro, in vec3 rd, in mat4 txx, in mat4 txi, in vec3 rad) {
    
	vec3 rdd = (txx * vec4(rd, 0.0)).xyz;
	vec3 roo = (txx * vec4(ro, 1.0)).xyz;

	
	vec3 m = 1.0 / rdd;
	vec3 n = m * roo;
	vec3 k = abs(m) * rad;

	vec3 t1 = -n - k;
	vec3 t2 = -n + k;

	float tN = max(max(t1.x, t1.y), t1.z);
	float tF = min(min(t2.x, t2.y), t2.z);

	if(tN > tF || tF < 0.0)
		return vec4(-1.0);

	vec3 nor = -sign(rdd) * step(t1.yzx, t1.xyz) * step(t1.zxy, t1.xyz);

    

	nor = (txi * vec4(nor, 0.0)).xyz;

	return vec4(tN, nor);
}

#if METHOD==0

float boxOcclusion(in vec3 pos, in vec3 nor, in mat4 txx, in mat4 txi, in vec3 rad) {
	vec3 p = (txx * vec4(pos, 1.0)).xyz;
	vec3 n = (txx * vec4(nor, 0.0)).xyz;

    
	vec3 v0 = normalize(vec3(-1.0, -1.0, -1.0) * rad - p);
	vec3 v1 = normalize(vec3(1.0, -1.0, -1.0) * rad - p);
	vec3 v2 = normalize(vec3(-1.0, 1.0, -1.0) * rad - p);
	vec3 v3 = normalize(vec3(1.0, 1.0, -1.0) * rad - p);
	vec3 v4 = normalize(vec3(-1.0, -1.0, 1.0) * rad - p);
	vec3 v5 = normalize(vec3(1.0, -1.0, 1.0) * rad - p);
	vec3 v6 = normalize(vec3(-1.0, 1.0, 1.0) * rad - p);
	vec3 v7 = normalize(vec3(1.0, 1.0, 1.0) * rad - p);

    
	float k02 = dot(n, normalize(cross(v2, v0))) * acos(dot(v0, v2));
	float k23 = dot(n, normalize(cross(v3, v2))) * acos(dot(v2, v3));
	float k31 = dot(n, normalize(cross(v1, v3))) * acos(dot(v3, v1));
	float k10 = dot(n, normalize(cross(v0, v1))) * acos(dot(v1, v0));
	float k45 = dot(n, normalize(cross(v5, v4))) * acos(dot(v4, v5));
	float k57 = dot(n, normalize(cross(v7, v5))) * acos(dot(v5, v7));
	float k76 = dot(n, normalize(cross(v6, v7))) * acos(dot(v7, v6));
	float k37 = dot(n, normalize(cross(v7, v3))) * acos(dot(v3, v7));
	float k64 = dot(n, normalize(cross(v4, v6))) * acos(dot(v6, v4));
	float k51 = dot(n, normalize(cross(v1, v5))) * acos(dot(v5, v1));
	float k04 = dot(n, normalize(cross(v4, v0))) * acos(dot(v0, v4));
	float k62 = dot(n, normalize(cross(v2, v6))) * acos(dot(v6, v2));

    
	float occ = 0.0;
	occ += (k02 + k23 + k31 + k10) * step(0.0, v0.z);
	occ += (k45 + k57 + k76 + k64) * step(0.0, -v4.z);
	occ += (k51 - k31 + k37 - k57) * step(0.0, -v5.x);
	occ += (k04 - k64 + k62 - k02) * step(0.0, v0.x);
	occ += (-k76 - k37 - k23 - k62) * step(0.0, -v6.y);
	occ += (-k10 - k51 - k45 - k04) * step(0.0, v0.y);

	return occ / 6.283185;
}
#endif
#if METHOD==1

float boxOcclusion(in vec3 pos, in vec3 nor, in mat4 txx, in mat4 txi, in vec3 rad) {
	vec3 p = (txx * vec4(pos, 1.0)).xyz;
	vec3 n = (txx * vec4(nor, 0.0)).xyz;

    
	vec3 f = rad * sign(p);

    
	vec3 s = sign(rad - abs(p));

    
	vec3 v0 = normalize(vec3(1.0, 1.0, -1.0) * f - p);
	vec3 v1 = normalize(vec3(1.0, s.x, s.x) * f - p);
	vec3 v2 = normalize(vec3(1.0, -1.0, 1.0) * f - p);
	vec3 v3 = normalize(vec3(s.z, s.z, 1.0) * f - p);
	vec3 v4 = normalize(vec3(-1.0, 1.0, 1.0) * f - p);
	vec3 v5 = normalize(vec3(s.y, 1.0, s.y) * f - p);

    
	return abs(dot(n, normalize(cross(v0, v1))) * acos(dot(v0, v1)) +
		dot(n, normalize(cross(v1, v2))) * acos(dot(v1, v2)) +
		dot(n, normalize(cross(v2, v3))) * acos(dot(v2, v3)) +
		dot(n, normalize(cross(v3, v4))) * acos(dot(v3, v4)) +
		dot(n, normalize(cross(v4, v5))) * acos(dot(v4, v5)) +
		dot(n, normalize(cross(v5, v0))) * acos(dot(v5, v0))) / 6.283185;
}
#endif

mat4 rotationAxisAngle(vec3 v, float angle) {
	float s = sin(angle);
	float c = cos(angle);
	float ic = 1.0 - c;

	return mat4(v.x * v.x * ic + c, v.y * v.x * ic - s * v.z, v.z * v.x * ic + s * v.y, 0.0, v.x * v.y * ic + s * v.z, v.y * v.y * ic + c, v.z * v.y * ic - s * v.x, 0.0, v.x * v.z * ic - s * v.y, v.y * v.z * ic + s * v.x, v.z * v.z * ic + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

mat4 translate(float x, float y, float z) {
	return mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x, y, z, 1.0);
}

vec2 hash2(float n) {
	return fract(sin(vec2(n, n + 1.0)) * vec2(43758.5453123, 22578.1459123));
}

float iPlane(in vec3 ro, in vec3 rd) {
	return (-1.0 - ro.y) / rd.y;
}

#ifdef GL_ES_VERSION_3_0
	mat4 inverseMatrix(mat4 m) {
		return inverse(m);
	}
#else
	
	
	mat4 inverseMatrix(mat4 m) {
		float
				a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
				a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
				a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
				a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],

				b00 = a00 * a11 - a01 * a10,
				b01 = a00 * a12 - a02 * a10,
				b02 = a00 * a13 - a03 * a10,
				b03 = a01 * a12 - a02 * a11,
				b04 = a01 * a13 - a03 * a11,
				b05 = a02 * a13 - a03 * a12,
				b06 = a20 * a31 - a21 * a30,
				b07 = a20 * a32 - a22 * a30,
				b08 = a20 * a33 - a23 * a30,
				b09 = a21 * a32 - a22 * a31,
				b10 = a21 * a33 - a23 * a31,
				b11 = a22 * a33 - a23 * a32,

				det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

		return mat4(
				a11 * b11 - a12 * b10 + a13 * b09,
				a02 * b10 - a01 * b11 - a03 * b09,
				a31 * b05 - a32 * b04 + a33 * b03,
				a22 * b04 - a21 * b05 - a23 * b03,
				a12 * b08 - a10 * b11 - a13 * b07,
				a00 * b11 - a02 * b08 + a03 * b07,
				a32 * b02 - a30 * b05 - a33 * b01,
				a20 * b05 - a22 * b02 + a23 * b01,
				a10 * b10 - a11 * b08 + a13 * b06,
				a01 * b08 - a00 * b10 - a03 * b06,
				a30 * b04 - a31 * b02 + a33 * b00,
				a21 * b02 - a20 * b04 - a23 * b00,
				a11 * b07 - a10 * b09 - a12 * b06,
				a00 * b09 - a01 * b07 + a02 * b06,
				a31 * b01 - a30 * b03 - a32 * b00,
				a20 * b03 - a21 * b01 + a22 * b00) / det;
	}
#endif

void main() {
	vec3 ro = vec3(0.0, 0.0, 5.0);
	vec3 rd = normalize(vec3(vUv.x, vUv.y - 0.3, -3.5));

    
	mat4 rot = rotationAxisAngle(normalize(vec3(1.0, 1.0, 0.0)), uTime);
	mat4 tra = translate(0.0, -.1, 0.0);
	mat4 txi = tra * rot;
	mat4 txx = inverseMatrix(txi);
	vec3 box = vec3(0.5, 0.5, 0.5);

	vec3 col = vec3(1.);

	float tmin = 1e10;

	float t1 = iPlane(ro, rd);
	if(t1 > 0.0 && t1 < 50.) {
		tmin = t1;
		vec3 pos = ro + tmin * rd;
		vec3 nor = vec3(0.0, 1.0, 0.0);
		float occ = 0.0;

		occ = boxOcclusion(pos, nor, txx, txi, box);

		col = vec3(1.1);
		col *= 1.0 - 1. * pow(occ, 1.2);
	}

	vec4 res = boxIntersect(ro, rd, txx, txi, box);
	float t2 = res.x;
	if(t2 > 0.0 && t2 < tmin) {
		tmin = t2;
		vec3 nor = res.yzw;
		col = vec3(1., .2, .2);

		col *= 1.7;
		col *= 0.6 + 0.4 * nor.y;
	}

	
	col.r = min(col.r, .97);
	col.g = min(col.g, .98);
	col.b = min(col.b, .99);

	gl_FragColor = vec4(col, 1.0);
}`;function N(t){let n;return{c(){n=u("canvas"),this.h()},l(a){n=k(a,"CANVAS",{class:!0}),y(n).forEach(i),this.h()},h(){g(n,"class","webgl")},m(a,e){h(a,n,e),t[1](n)},p:c,i:c,o:c,d(a){a&&i(n),t[1](null)}}}function R(t,n,a){let e;w(()=>{const o=new M,m=new T(2,2),r=new E({vertexShader:P,fragmentShader:F,uniforms:{uTime:{value:0},uResolution:{value:[window.innerHeight/1.6,window.innerHeight/1.6]}}}),d=new H(m,r);o.add(d);const s=new O;o.add(s);const v=new A({canvas:e,alpha:!0});v.setSize(window.innerHeight/1.6,window.innerHeight/1.6),v.setPixelRatio(Math.min(window.devicePixelRatio,2));const b=new C;_(()=>{if(!e?.closest("section:not(.stack).present"))return!0;const x=b.getElapsedTime();return r.uniforms.uTime.value=x,v.render(o,s),!0})});function l(o){S[o?"unshift":"push"](()=>{e=o,a(0,e)})}return[e,l]}class G extends f{constructor(n){super(),z(this,n,R,N,p,{})}}export{G as default};
