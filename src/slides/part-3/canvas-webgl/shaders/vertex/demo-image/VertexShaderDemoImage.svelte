<script>
	import * as THREE from "three";
	import vertexShader from "./vertex.glsl";
	import fragmentShader from "./fragment.glsl";
	import { onMount } from "svelte";
	import texture from "./spongebob.webp";
	import { loop } from "svelte/internal";

	let canvas;

	onMount(() => {
		const scene = new THREE.Scene();

		const textureLoader = new THREE.TextureLoader();
		const flagTexture = textureLoader.load(texture);

		// Geometry
		const geometry = new THREE.PlaneGeometry(1.3, 1.3, 32, 32);

		// Material
		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uTexture: { value: flagTexture },
			},
		});

		// Mesh
		const mesh = new THREE.Mesh(geometry, material);
		mesh.scale.y = 2 / 3;
		mesh.position.x = 0.2;
		mesh.position.y = -0.2;
		scene.add(mesh);

		/**
		 * Sizes
		 */
		const sizes = {
			width: ((window.innerHeight / 1.5) * 5) / 4,
			height: window.innerHeight / 1.5,
		};

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(
			75,
			sizes.width / sizes.height,
			0.1,
			100
		);
		camera.position.set(0.25, -0.25, 1);
		scene.add(camera);

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		loop(() => {
			if (!canvas.closest("section:not(.stack).present")) {
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
