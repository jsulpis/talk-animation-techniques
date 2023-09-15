varying vec2 vUv;
uniform float uTime;

//====================================================================================
//
// React logo
// by Julien Sulpis (https://twitter.com/jsulpis)
// https://www.shadertoy.com/view/ms3yzH
//
// forked from Magic Loader by Krischan (https://www.shadertoy.com/view/fsGGWG)
//
//====================================================================================

#define SCALE 0.5
#define SPEED 0.5
#define INTENSITY 15.0
#define LENGTH 1.8
#define RADIUS 0.020
#define FADING 0.045
#define GLOW 8.
#define COLOR vec3(0.97, 0.14, .02)

#define PI 3.1415926535

// optimized 2d version of https://www.shadertoy.com/view/ldj3Wh
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
}
