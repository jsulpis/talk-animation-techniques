varying vec2 vUv;
uniform float uTime;

// (slightly) modified version of the following shader:
//
// The MIT License
// Copyright © 2014 Inigo Quilez
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Analytical ambient occlusion of a box. Left side of screen, stochastically
// sampled occlusion. Right side of the screen, analytical solution (no rays casted).
//
// If the box was intersecting the ground plane, we'd need to perform clipping
// and use the resulting triangles for the analytic formula instead.
//
// More info here: https://iquilezles.org/articles/boxocclusion
//
// Other shaders with analytical occlusion or approximations:
//
// Box:                        https://www.shadertoy.com/view/4djXDy
// Box with horizon clipping:  https://www.shadertoy.com/view/4sSXDV
// Triangle:                   https://www.shadertoy.com/view/XdjSDy
// Sphere:                     https://www.shadertoy.com/view/4djSDy
// Ellipsoid (approximation):  https://www.shadertoy.com/view/MlsSzn
// Capsule (approximation):    https://www.shadertoy.com/view/llGyzG

// Other Box functions (https://iquilezles.org/articles/boxfunctions)
//
// Intersection:     https://www.shadertoy.com/view/ld23DV
// Occlusion:        https://www.shadertoy.com/view/4sSXDV
// Occlusion:        https://www.shadertoy.com/view/4djXDy
// Density:          https://www.shadertoy.com/view/Ml3GR8
// Fake soft shadow: https://www.shadertoy.com/view/WslGz4
// Gradient:         https://www.shadertoy.com/view/wlcXD2

// 0  my original method, by iterating all 6 faces/12 edges/8 verts
// 1  optimized method by clem494949 (https://www.shadertoy.com/view/ttlBWf)
//    which iterates the solid angle hexagon (1 face/6 edges/6 verts)
#define METHOD 1

//=====================================================

// returns t and normal
vec4 boxIntersect(in vec3 ro, in vec3 rd, in mat4 txx, in mat4 txi, in vec3 rad) {
    // convert from ray to box space
	vec3 rdd = (txx * vec4(rd, 0.0)).xyz;
	vec3 roo = (txx * vec4(ro, 1.0)).xyz;

	// ray-box intersection in box space
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

    // convert to ray space

	nor = (txi * vec4(nor, 0.0)).xyz;

	return vec4(tN, nor);
}

#if METHOD==0
// Box occlusion (if fully visible)
float boxOcclusion(in vec3 pos, in vec3 nor, in mat4 txx, in mat4 txi, in vec3 rad) {
	vec3 p = (txx * vec4(pos, 1.0)).xyz;
	vec3 n = (txx * vec4(nor, 0.0)).xyz;

    // 8 verts
	vec3 v0 = normalize(vec3(-1.0, -1.0, -1.0) * rad - p);
	vec3 v1 = normalize(vec3(1.0, -1.0, -1.0) * rad - p);
	vec3 v2 = normalize(vec3(-1.0, 1.0, -1.0) * rad - p);
	vec3 v3 = normalize(vec3(1.0, 1.0, -1.0) * rad - p);
	vec3 v4 = normalize(vec3(-1.0, -1.0, 1.0) * rad - p);
	vec3 v5 = normalize(vec3(1.0, -1.0, 1.0) * rad - p);
	vec3 v6 = normalize(vec3(-1.0, 1.0, 1.0) * rad - p);
	vec3 v7 = normalize(vec3(1.0, 1.0, 1.0) * rad - p);

    // 12 edges
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

    // 6 faces
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
// Box occlusion (if fully visible)
float boxOcclusion(in vec3 pos, in vec3 nor, in mat4 txx, in mat4 txi, in vec3 rad) {
	vec3 p = (txx * vec4(pos, 1.0)).xyz;
	vec3 n = (txx * vec4(nor, 0.0)).xyz;

    // Orient the hexagon based on p
	vec3 f = rad * sign(p);

    // Make sure the hexagon is always convex
	vec3 s = sign(rad - abs(p));

    // 6 verts
	vec3 v0 = normalize(vec3(1.0, 1.0, -1.0) * f - p);
	vec3 v1 = normalize(vec3(1.0, s.x, s.x) * f - p);
	vec3 v2 = normalize(vec3(1.0, -1.0, 1.0) * f - p);
	vec3 v3 = normalize(vec3(s.z, s.z, 1.0) * f - p);
	vec3 v4 = normalize(vec3(-1.0, 1.0, 1.0) * f - p);
	vec3 v5 = normalize(vec3(s.y, 1.0, s.y) * f - p);

    // 6 edges
	return abs(dot(n, normalize(cross(v0, v1))) * acos(dot(v0, v1)) +
		dot(n, normalize(cross(v1, v2))) * acos(dot(v1, v2)) +
		dot(n, normalize(cross(v2, v3))) * acos(dot(v2, v3)) +
		dot(n, normalize(cross(v3, v4))) * acos(dot(v3, v4)) +
		dot(n, normalize(cross(v4, v5))) * acos(dot(v4, v5)) +
		dot(n, normalize(cross(v5, v0))) * acos(dot(v5, v0))) / 6.283185;
}
#endif
//-----------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------

float iPlane(in vec3 ro, in vec3 rd) {
	return (-1.0 - ro.y) / rd.y;
}

void main() {
	vec3 ro = vec3(0.0, 0.0, 5.0);
	vec3 rd = normalize(vec3(vUv.x, vUv.y - 0.3, -3.5));

    // box animation
	mat4 rot = rotationAxisAngle(normalize(vec3(1.0, 1.0, 0.0)), uTime);
	mat4 tra = translate(0.0, -.1, 0.0);
	mat4 txi = tra * rot;
	mat4 txx = inverse(txi);
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
		col = vec3(0.8, .4, .4);

		col *= 1.7;
		col *= 0.6 + 0.4 * nor.y;
	}

	// blend into background
	col.r = min(col.r, .97);
	col.g = min(col.g, .98);
	col.b = min(col.b, .99);

	gl_FragColor = vec4(col, 1.0);
}
