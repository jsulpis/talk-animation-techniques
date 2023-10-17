<script>
	import * as THREE from "three";
	import vertexShader from "./vertex.glsl";
	import fragmentShader from "./fragment.glsl";
	import { onMount } from "svelte";
	import { tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";

	let canvas;

	const transitionProgress = tweened(0, {
		duration: 1200,
		easing: cubicInOut,
	});

	onMount(() => {
		/**
		 * Scene setup
		 */
		const scene = new THREE.Scene();

		const camera = new THREE.Camera();
		scene.add(camera);

		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		renderer.setSize(window.innerHeight / 1, window.innerHeight / 2);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 * Mesh (geometry + material)
		 */
		const geometry = new THREE.PlaneGeometry(2, 2);

		const picture1 = new THREE.TextureLoader().load(
			"https://res.cloudinary.com/dpv0ukspz/image/upload/v1662920941/keith-hardy-PP8Escz15d8-unsplash_pwfug2.jpg",
			() => renderer.render(scene, camera)
		);
		const picture2 = new THREE.TextureLoader().load(
			"https://res.cloudinary.com/dpv0ukspz/image/upload/v1662920742/krystian-tambur-k7rZ8wTfABA-unsplash_ykee7e.jpg",
			() => renderer.render(scene, camera)
		);

		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				tMap1: { value: picture1 },
				tMap2: { value: picture2 },
				uPlaneRes: { value: [2, 2] },
				uTransitionProgress: { value: 0 },
			},
		});

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		transitionProgress.subscribe((v) => {
			material.uniforms.uTransitionProgress.value = v;

			const elapsedTime = clock.getElapsedTime();
			material.uniforms.uTime.value = elapsedTime;
			renderer.render(scene, camera);
		});
	});
</script>

<canvas
	bind:this={canvas}
	on:mouseenter={() => transitionProgress.set(1)}
	on:mouseleave={() => transitionProgress.set(0)}
/>

<style lang="scss">
	canvas {
		border-radius: 0.5em;
		box-shadow: var(--shadow-lg);
		transition: transform cubic-bezier(0.65, 0.05, 0.36, 1) 1200ms;

		&:hover {
			cursor: pointer;
			transform: scale(1.05);
		}
	}
</style>
