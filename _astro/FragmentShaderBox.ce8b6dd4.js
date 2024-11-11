import{S as p,i as h,s as S,e as _,c as g,a as w,d as c,b as I,f as M,n as i,o as N,l as C,g as H}from"./index.da907017.js";import{S as T,c as O,b as R,M as P,d as b,W as E,C as A}from"./three.module.2dccf8ec.js";var L=`varying vec2 vUv;

void main() {
	vUv = position.xy;
	gl_Position = vec4(position, 1.0);
}`,U=`#define CAMERA_POSITION vec3(0., 1.5, 4.)

#define SUN_DIR normalize(vec3(0.5, 1., 0.))
#define SUN_COLOR vec3(1.)
#define AMBIENT_COLOR vec3(0.9686274509803922, 0.9803921568627451, 0.9882352941176471)
#define AMBIENT_LIGHT .03 * AMBIENT_COLOR

#define MAX_BOUNCES 3
#define EPSILON 1e-3
#define INFINITY 1e10

uniform float uTime;
varying vec2 vUv;

struct Material {
	vec3 color;
	float specular;
};

struct Hit {
	float len;
	vec3 normal;
	Material material;
};

struct Sphere {
	vec3 position;
	float radius;
	Material material;
};

struct Plane {
	float offset;
	vec3 normal;
	Material material;
};

Hit miss = Hit(INFINITY, vec3(0.), Material(vec3(0.), -1.));

mat3 rotateY(float angle) {
	float c = cos(angle);
	float s = sin(angle);
	return mat3(vec3(c, 0, s), vec3(0, 1, 0), vec3(-s, 0, c));
}

Hit intersectPlane(vec3 ro, vec3 rd, Plane p) {
	float dotnd = dot(p.normal, rd);
	if(dotnd > 0.)
		return miss;
	float t = -(dot(ro, p.normal) + p.offset) / dotnd;
	return Hit(t, p.normal, p.material);
}

Hit intersectSphere(vec3 ro, vec3 rd, Sphere s) {
	vec3 op = s.position - ro;
	float b = dot(op, rd);
	float det = b * b - dot(op, op) + s.radius * s.radius;
	if(det < 0.)
		return miss;

	det = sqrt(det);
	float t = b - det;
	if(t < 0.)
		t = b + det;
	if(t < 0.)
		return miss;

	return Hit(t, (ro + t * rd - s.position) / s.radius, s.material);
}

void takeClosest(inout Hit a, Hit b) {
	if(b.len < a.len) {
		a = b;
	}
}

Hit intersectScene(vec3 ro, vec3 rd) {
	Sphere sphere = Sphere(rotateY(uTime) * vec3(1., 1., 0.), 1., Material(vec3(0.05, 0.3, .9), .02));
	Sphere sphere2 = Sphere(rotateY(uTime) * vec3(-1., 2., 0.), 1., Material(vec3(1., .1, .1), .85));
	Plane plane = Plane(0., vec3(0., 1., 0.), Material(vec3(1), .9));

	Hit hit = miss;
	takeClosest(hit, intersectPlane(ro, rd, plane));
	takeClosest(hit, intersectSphere(ro, rd, sphere));
	takeClosest(hit, intersectSphere(ro, rd, sphere2));

	return hit;
}

vec3 fresnelFactor(vec3 normal, vec3 viewDir, Material material) {
	vec3 r0 = material.color * (1. - material.specular);
	float hv = clamp(dot(normal, -viewDir), 0.0, 1.0);
	return r0 + (1.0 - r0) * pow(1.0 - hv, 5.0);
}

vec3 radiance(vec3 ro, vec3 rd) {
	vec3 color = vec3(0.);
	vec3 attenuation = vec3(1.);
	vec3 fresnel = vec3(0.);

	for(int i = 1; i <= MAX_BOUNCES; i++) {
		Hit hit = intersectScene(ro, rd);

		if(hit != miss) {

			vec3 hitPosition = ro + hit.len * rd;
			fresnel = fresnelFactor(hit.normal, rd, hit.material);

			Hit shadowHit = intersectScene(hitPosition + EPSILON * SUN_DIR, SUN_DIR);

			if(shadowHit == miss) {
                
				vec3 directLight = clamp(dot(hit.normal, SUN_DIR), 0.0, 1.0) * SUN_COLOR;
				vec3 diffuseColor = hit.material.color * directLight;

                
				vec3 r = normalize(reflect(SUN_DIR, hit.normal));
				float phongValue = max(0.0, dot(rd, r));
				float coef = pow(1. - hit.material.specular, 10.) * 1e3; 
				phongValue = pow(phongValue, coef);

				vec3 specular = vec3(phongValue * coef);

				color += attenuation * (diffuseColor + specular);
			}
			color += attenuation * hit.material.color * AMBIENT_LIGHT;

            
			attenuation *= fresnel * (1. - hit.material.specular);
			vec3 d = reflect(rd, hit.normal);
			ro = ro + hit.len * rd + EPSILON * d;
			rd = d;
		} else {
			color += attenuation * AMBIENT_COLOR;
			break;
		}
	}
	return color;
}

vec3 simpleReinhardToneMapping(vec3 color) {
	float exposure = 1.6;
	color *= exposure / (1. + color / exposure);
	color = pow(color, vec3(1. / 2.2));
	return color;
}

void main() {
	

	vec3 ro = CAMERA_POSITION;
	vec3 rd = normalize(vec3(vUv, -1.0));

	vec3 color = radiance(ro, rd);

	gl_FragColor = vec4(simpleReinhardToneMapping(color), 1.0);
}`;function x(a){let e;return{c(){e=_("canvas"),this.h()},l(n){e=g(n,"CANVAS",{class:!0}),w(e).forEach(c),this.h()},h(){I(e,"class","webgl svelte-g1e4v2")},m(n,t){M(n,e,t),a[1](e)},p:i,i,o:i,d(n){n&&c(e),a[1](null)}}}function k(a,e,n){let t;N(()=>{const r=new T,v=new O(2,2),s=new R({vertexShader:L,fragmentShader:U,uniforms:{uTime:{value:0},uResolution:{value:[window.innerHeight/1.3,window.innerHeight/1.3]}}}),m=new P(v,s);r.add(m);const l=new b;r.add(l);const o=new E({canvas:t,alpha:!0});o.setSize(window.innerHeight/1.3,window.innerHeight/1.3),o.setPixelRatio(Math.min(window.devicePixelRatio,2));const f=new A;C(()=>{if(!t?.closest("section:not(.stack).present"))return!0;const u=f.getElapsedTime();return s.uniforms.uTime.value=u,o.render(r,l),!0})});function d(r){H[r?"unshift":"push"](()=>{t=r,n(0,t)})}return[t,d]}class D extends p{constructor(e){super(),h(this,e,k,x,S,{})}}export{D as default};
