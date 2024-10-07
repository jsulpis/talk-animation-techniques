import{S as d,i as h,s as m,e as p,c as u,a as y,d as c,b as f,f as z,n as o,o as w,g as S}from"./index.da907017.js";import{S as _,P as b,W as g,O as M,c as P,d as D,A as C,e as W}from"./three.module.1dcded38.js";var j=`vec3 mod289(vec3 x) {
		return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 mod289(vec4 x) {
		return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 permute(vec4 x) {
		return mod289(((x*34.0)+10.0)*x);
	}

	vec4 taylorInvSqrt(vec4 r)
	{
		return 1.79284291400159 - 0.85373472095314 * r;
	}

	float snoise(vec3 v)
	{
		const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

		
		vec3 i  = floor(v + dot(v, C.yyy) );
		vec3 x0 =   v - i + dot(i, C.xxx) ;

		
		vec3 g = step(x0.yzx, x0.xyz);
		vec3 l = 1.0 - g;
		vec3 i1 = min( g.xyz, l.zxy );
		vec3 i2 = max( g.xyz, l.zxy );

		
		
		
		
		vec3 x1 = x0 - i1 + C.xxx;
		vec3 x2 = x0 - i2 + C.yyy; 
		vec3 x3 = x0 - D.yyy;      

		
		i = mod289(i);
		vec4 p = permute( permute( permute(
								i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
							+ i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
							+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

		
		
		float n_ = 0.142857142857; 
		vec3  ns = n_ * D.wyz - D.xzx;

		vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

		vec4 x_ = floor(j * ns.z);
		vec4 y_ = floor(j - 7.0 * x_ );    

		vec4 x = x_ *ns.x + ns.yyyy;
		vec4 y = y_ *ns.x + ns.yyyy;
		vec4 h = 1.0 - abs(x) - abs(y);

		vec4 b0 = vec4( x.xy, y.xy );
		vec4 b1 = vec4( x.zw, y.zw );

		
		
		vec4 s0 = floor(b0)*2.0 + 1.0;
		vec4 s1 = floor(b1)*2.0 + 1.0;
		vec4 sh = -step(h, vec4(0.0));

		vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

		vec3 p0 = vec3(a0.xy,h.x);
		vec3 p1 = vec3(a0.zw,h.y);
		vec3 p2 = vec3(a1.xy,h.z);
		vec3 p3 = vec3(a1.zw,h.w);

		
		vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		p0 *= norm.x;
		p1 *= norm.y;
		p2 *= norm.z;
		p3 *= norm.w;

		
		vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		m = m * m;
		return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
																	dot(p2,x2), dot(p3,x3) ) );
	}`;function A(s){let n;return{c(){n=p("canvas"),this.h()},l(i){n=u(i,"CANVAS",{class:!0}),y(n).forEach(c),this.h()},h(){f(n,"class","svelte-2vv9bd")},m(i,r){z(i,n,r),s[1](n)},p:o,i:o,o,d(i){i&&c(n),s[1](null)}}}function q(s,n,i){let r;class l{constructor(){this.build(),window.addEventListener("resize",this.resize.bind(this)),this.animate=this.animate.bind(this),this.animate()}build(){this.scene=new _,this.camera=new b(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=3,this.renderer=new g({canvas:r,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth/1.7,window.innerHeight/1.7),this.molecule=new x,this.scene.add(this.molecule)}resize(){const t=window.innerWidth/1.7,e=window.innerHeight/1.7;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}animate(){if(requestAnimationFrame(this.animate),!r.closest("section:not(.stack).present"))return;const t=performance.now()*.001;this.molecule.animate(t),this.renderer.render(this.scene,this.camera)}}class x extends M{constructor(){super(),this.radius=1.7,this.detail=25,this.particleSizeMin=.07,this.particleSizeMax=.09,this.build()}build(){this.geometry=new P(1,this.detail),this.material=new D({blending:C,color:1055368,depthTest:!1}),this.setupShader(this.material),this.mesh=new W(this.geometry,this.material),this.add(this.mesh)}setupShader(t){t.onBeforeCompile=e=>{e.uniforms.time={value:0},e.uniforms.radius={value:this.radius},e.uniforms.particleSizeMin={value:this.particleSizeMin},e.uniforms.particleSizeMax={value:this.particleSizeMax},e.vertexShader=`uniform float particleSizeMax;
`+e.vertexShader,e.vertexShader=`uniform float particleSizeMin;
`+e.vertexShader,e.vertexShader=`uniform float radius;
`+e.vertexShader,e.vertexShader=`uniform float time;
`+e.vertexShader,e.vertexShader=j+`
`+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
				vec3 p = position;
				float n = snoise( vec3( p.x*.6 + time*0.2, p.y*0.4 + time*0.3, p.z*.2 + time*0.2) );
				p += n *0.4;

				// constrain to sphere radius
				float l = radius / length(p);
				p *= l;
				float s = mix(particleSizeMin, particleSizeMax, n);
				vec3 transformed = vec3( p.x, p.y, p.z );
			`),e.vertexShader=e.vertexShader.replace("gl_PointSize = size;","gl_PointSize = s;"),t.userData.shader=e}}animate(t){this.mesh.rotation.set(0,t*.2,0),this.material.userData.shader&&(this.material.userData.shader.uniforms.time.value=t)}}w(()=>{new l});function v(a){S[a?"unshift":"push"](()=>{r=a,i(0,r)})}return[r,v]}class H extends d{constructor(n){super(),h(this,n,q,A,m,{})}}export{H as default};
