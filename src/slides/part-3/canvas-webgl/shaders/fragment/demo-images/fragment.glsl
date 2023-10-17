/**
* Shader by Michal Zalobny
* https://github.com/michalzalobny/creative-bay/blob/main/src/containers/projects/ImageTransitions/transitionShaders/s2/fragment.glsl
*/
uniform vec2 uPlaneRes;
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

//https://github.com/yuichiroharai/glsl-y-repeat/blob/master/mirrored.glsl
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
}
