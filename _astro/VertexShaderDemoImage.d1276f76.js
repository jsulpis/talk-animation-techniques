import{S as d,i as m,s as y,e as z,c as u,a as P,d as v,b as p,f as h,n as c,o as w,l as _,g as b}from"./index.da907017.js";import{S,P as C,W as I,I as D,b as M,M as V,C as T}from"./three.module.1dcded38.js";var k=`uniform float uTime;

varying vec3 vPosition;

vec3 mod289(vec3 x) {
	return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
	return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
	return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
	return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
	return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

    
float cnoise(vec3 P) {
	vec3 Pi0 = floor(P); 
	vec3 Pi1 = Pi0 + vec3(1.0); 
	Pi0 = mod289(Pi0);
	Pi1 = mod289(Pi1);
	vec3 Pf0 = fract(P); 
	vec3 Pf1 = Pf0 - vec3(1.0); 
	vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
	vec4 iy = vec4(Pi0.yy, Pi1.yy);
	vec4 iz0 = Pi0.zzzz;
	vec4 iz1 = Pi1.zzzz;

	vec4 ixy = permute(permute(ix) + iy);
	vec4 ixy0 = permute(ixy + iz0);
	vec4 ixy1 = permute(ixy + iz1);

	vec4 gx0 = ixy0 * (1.0 / 7.0);
	vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
	gx0 = fract(gx0);
	vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
	vec4 sz0 = step(gz0, vec4(0.0));
	gx0 -= sz0 * (step(0.0, gx0) - 0.5);
	gy0 -= sz0 * (step(0.0, gy0) - 0.5);

	vec4 gx1 = ixy1 * (1.0 / 7.0);
	vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
	gx1 = fract(gx1);
	vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
	vec4 sz1 = step(gz1, vec4(0.0));
	gx1 -= sz1 * (step(0.0, gx1) - 0.5);
	gy1 -= sz1 * (step(0.0, gy1) - 0.5);

	vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
	vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
	vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
	vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
	vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
	vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
	vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
	vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

	vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
	g000 *= norm0.x;
	g010 *= norm0.y;
	g100 *= norm0.z;
	g110 *= norm0.w;
	vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
	g001 *= norm1.x;
	g011 *= norm1.y;
	g101 *= norm1.z;
	g111 *= norm1.w;

	float n000 = dot(g000, Pf0);
	float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
	float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
	float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
	float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
	float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
	float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
	float n111 = dot(g111, Pf1);

	vec3 fade_xyz = fade(Pf0);
	vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
	vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
	float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
	return 2.2 * n_xyz;
}

void main() {
	float displacement = cnoise(position + vec3(2.0 * uTime));
	vec3 displacedPosition = position + normal * displacement * .4;

	vec4 modelPosition = modelMatrix * vec4(displacedPosition, 1.0);
	vec4 projectedPosition = projectionMatrix * viewMatrix * modelPosition;

	vPosition = modelPosition.xyz;

	gl_Position = projectedPosition;
}`,q=`varying vec3 vPosition;

void main() {
	vec3 normal = normalize(cross(dFdx(vPosition.xyz), dFdy(vPosition.xyz)));
	vec3 viewDir = normalize(cameraPosition - vPosition);

  
	vec3 ambient = vec3(.2);

  
	vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
	float lightIntensity = max(0.0, dot(lightDir, normal));
	vec3 lightColour = vec3(1.0, 1.0, 0.9);

	vec3 diffuse = lightIntensity * lightColour;

  
	vec3 reflected = normalize(reflect(-lightDir, normal));
	float phongValue = max(0.0, dot(viewDir, reflected));
	phongValue = pow(phongValue, 32.0);

	vec3 specular = vec3(phongValue * 32.);

  
	float fresnel = 1.0 - max(0.0, dot(viewDir, normal));
	fresnel = pow(fresnel, 2.0);

	specular *= fresnel;

  
	vec3 colour = vec3(1., 0.02, 0.02) * (diffuse + ambient) + specular;

	
	colour = pow(colour, vec3(1.0 / 2.2));

	gl_FragColor = vec4(colour, 1.0);
}`;function W(i){let n;return{c(){n=z("canvas"),this.h()},l(e){n=u(e,"CANVAS",{class:!0}),P(n).forEach(v),this.h()},h(){p(n,"class","webgl")},m(e,o){h(e,n,o),i[1](n)},p:c,i:c,o:c,d(e){e&&v(n),i[1](null)}}}function j(i,n,e){let o;w(()=>{const t=new S,r=new C(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=5;const a=new I({canvas:o,alpha:!0,antialias:!0});a.setSize(window.innerWidth/1.7,window.innerHeight/1.7);const l=new D(2,128),x=new M({fragmentShader:q,vertexShader:k,uniforms:{uTime:{value:0}}}),s=new V(l,x);t.add(s);const f=new T;_(()=>(o.closest("section:not(.stack).present")&&(s.material.uniforms.uTime.value=.4*f.getElapsedTime(),a.render(t,r)),!0))});function g(t){b[t?"unshift":"push"](()=>{o=t,e(0,o)})}return[o,g]}class E extends d{constructor(n){super(),m(this,n,j,W,y,{})}}export{E as default};
