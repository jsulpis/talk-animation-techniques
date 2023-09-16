<!-- https://threejs.org/examples/#webgl_points_billboards -->
<script lang="ts">
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";
	import * as THREE from "three";

	let canvas;
	let camera, scene, renderer, material;
	let mouseX = 0,
		mouseY = 0;

	let windowHalfX, windowHalfY;

	onMount(() => {
		if (typeof window == undefined) return;

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;
		init();
		animate();
	});

	function init() {
		camera = new THREE.PerspectiveCamera(
			55,
			window.innerWidth / window.innerHeight,
			2,
			2000
		);
		camera.position.z = 1000;

		scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2("white", 0.001);

		const geometry = new THREE.BufferGeometry();
		const vertices = [];

		const sprite = new THREE.TextureLoader().load(
			"https://threejs.org/examples/textures/sprites/disc.png"
		);
		sprite.colorSpace = THREE.SRGBColorSpace;

		for (let i = 0; i < 10000; i++) {
			const x = 2000 * Math.random() - 1000;
			const y = 2000 * Math.random() - 1000;
			const z = 2000 * Math.random() - 1000;

			vertices.push(x, y, z);
		}

		geometry.setAttribute(
			"position",
			new THREE.Float32BufferAttribute(vertices, 3)
		);

		material = new THREE.PointsMaterial({
			size: 35,
			sizeAttenuation: true,
			map: sprite,
			alphaTest: 0.5,
			transparent: true,
		});
		material.color.setHSL(0.6, 0.7, 0.3, THREE.SRGBColorSpace);

		const particles = new THREE.Points(geometry, material);
		scene.add(particles);

		//

		renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		//

		document.body.style.touchAction = "none";
		document.body.addEventListener("pointermove", onPointerMove);

		//

		window.addEventListener("resize", onWindowResize);
	}

	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function onPointerMove(event) {
		if (event.isPrimary === false) return;

		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}

	//
	loop(() => {
			if (!canvas?.closest("section:not(.stack).present")) {
				// skip animation
				return true;
			}

			render();

			return true;
		});

	function render() {
		camera.position.x += (mouseX - camera.position.x) * 0.05;
		camera.position.y += (-mouseY - camera.position.y) * 0.05;

		camera.lookAt(scene.position);

		renderer.render(scene, camera);
	}
</script>

<canvas bind:this={canvas} />
<div class="vignette" />

<style>
	canvas {
		position: fixed;
		inset: 0;
	}

	.vignette {
		position: fixed;
		inset: 0;
		box-shadow: inset 0 5vh 20vmin 20vmin var(--background-page);
	}
</style>
