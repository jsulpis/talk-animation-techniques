<script>
	import * as THREE from "three";
	import vertexShader from "./vertex.glsl";
	import fragmentShader from "./fragment.glsl";
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";

	let canvas;

	onMount(() => {
		const scene = new THREE.Scene();

		// Geometry
		const geometry = new THREE.PlaneGeometry(2, 2);

		// Material
		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0.0 },
				uResolution: { value: [window.innerHeight / 1.6, window.innerHeight / 1.6] },
			},
		});

		// Mesh
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		/**
		 * Camera
		 */
		const camera = new THREE.Camera();
		scene.add(camera);

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
		});
		renderer.setSize(window.innerHeight / 1.6, window.innerHeight / 1.6);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		loop(() => {
			if (!canvas?.closest("section:not(.stack).present")) {
				// skip animation
				return true;
			}

			const elapsedTime = clock.getElapsedTime();
			material.uniforms.uTime.value = elapsedTime;
			renderer.render(scene, camera);

			return true;
		});
	});
</script>

<canvas bind:this={canvas} class="webgl" />
