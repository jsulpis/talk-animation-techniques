<!-- https://codepen.io/ma77os/pen/JjMRmLP -->
<script lang="ts">
	import { onMount } from "svelte";
	import * as THREE from "three";
	import vertexShader from "./particlesVertex.glsl";

	let canvas;

	class World {
		constructor() {
			this.build();

			window.addEventListener("resize", this.resize.bind(this));

			this.animate = this.animate.bind(this);
			this.animate();
		}

		build() {
			this.scene = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera(
				75,
				window.innerWidth / window.innerHeight,
				0.1,
				1000
			);
			this.camera.position.z = 3;

			this.renderer = new THREE.WebGLRenderer({
				canvas,
				alpha: true,
				antialias: true,
			});
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(window.innerWidth / 1.7, window.innerHeight / 1.7);

			this.molecule = new Molecule();
			this.scene.add(this.molecule);
		}

		resize() {
			const w = window.innerWidth / 1.7;
			const h = window.innerHeight / 1.7;
			this.camera.aspect = w / h;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(w, h);
		}

		animate() {
			requestAnimationFrame(this.animate);

			if (!canvas.closest("section:not(.stack).present")) {
				// skip animation
				return;
			}

			const time = performance.now() * 0.001;

			this.molecule.animate(time);

			this.renderer.render(this.scene, this.camera);
		}
	}

	class Molecule extends THREE.Object3D {
		constructor() {
			super();

			this.radius = 1.7;
			this.detail = 60;
			this.particleSizeMin = 0.04;
			this.particleSizeMax = 0.08;

			this.build();
		}

		build() {
			this.geometry = new THREE.IcosahedronBufferGeometry(1, this.detail);

			this.material = new THREE.PointsMaterial({
				blending: THREE.AdditiveBlending,
				color: 0x101a88,
				depthTest: false,
			});

			this.setupShader(this.material);

			this.mesh = new THREE.Points(this.geometry, this.material);
			this.add(this.mesh);
		}

		setupShader(material) {
			material.onBeforeCompile = (shader) => {
				shader.uniforms.time = { value: 0 };
				shader.uniforms.radius = { value: this.radius };
				shader.uniforms.particleSizeMin = { value: this.particleSizeMin };
				shader.uniforms.particleSizeMax = { value: this.particleSizeMax };
				shader.vertexShader =
					"uniform float particleSizeMax;\n" + shader.vertexShader;
				shader.vertexShader =
					"uniform float particleSizeMin;\n" + shader.vertexShader;
				shader.vertexShader = "uniform float radius;\n" + shader.vertexShader;
				shader.vertexShader = "uniform float time;\n" + shader.vertexShader;
				shader.vertexShader = vertexShader + "\n" + shader.vertexShader;
				shader.vertexShader = shader.vertexShader.replace(
					"#include <begin_vertex>",
					`
				vec3 p = position;
				float n = snoise( vec3( p.x*.6 + time*0.2, p.y*0.4 + time*0.3, p.z*.2 + time*0.2) );
				p += n *0.4;

				// constrain to sphere radius
				float l = radius / length(p);
				p *= l;
				float s = mix(particleSizeMin, particleSizeMax, n);
				vec3 transformed = vec3( p.x, p.y, p.z );
			`
				);
				shader.vertexShader = shader.vertexShader.replace(
					"gl_PointSize = size;",
					"gl_PointSize = s;"
				);

				material.userData.shader = shader;
			};
		}

		animate(time) {
			this.mesh.rotation.set(0, time * 0.2, 0);
			if (this.material.userData.shader)
				this.material.userData.shader.uniforms.time.value = time;
		}
	}

	onMount(() => {
		new World();
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		background-repeat: no-repeat;
		border-radius: 0.25em;
		filter: invert(1) hue-rotate(175deg);
	}
</style>
