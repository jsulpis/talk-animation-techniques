<script>
	import * as THREE from "three";
	import vertexShader from "./vertex.glsl";
	import fragmentShader from "./fragment.glsl";
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";

	let canvas;

	onMount(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
		});
		renderer.setSize(window.innerWidth / 1.7, window.innerHeight / 1.7);

		const geometry = new THREE.IcosahedronGeometry(2, 128);
		const material = new THREE.ShaderMaterial({
			fragmentShader,
			vertexShader,
			uniforms: {
				uTime: { value: 0 },
			},
		});
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		const clock = new THREE.Clock();

		loop(() => {
			if (!canvas.closest("section:not(.stack).present")) {
				// skip animation
				return true;
			}

			sphere.material.uniforms.uTime.value = 0.4 * clock.getElapsedTime();
			renderer.render(scene, camera);

			return true;
		});
	});
</script>

<canvas bind:this={canvas} class="webgl" />
