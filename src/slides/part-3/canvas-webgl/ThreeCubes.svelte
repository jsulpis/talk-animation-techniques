<script>
	import * as THREE from "three";
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";
	import gsap from "gsap";

	let canvas;

	onMount(() => {
		// Scene
		const scene = new THREE.Scene();

		const sizes = {
			width: window.innerWidth * 0.8,
			height: window.innerHeight * 0.7,
		};

		// Camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
		camera.position.z = 1.5;
		scene.add(camera);

		// Renderer
		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
		});

		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputEncoding = THREE.sRGBEncoding;

		const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
		const cubeRed = new THREE.Mesh(cubeGeometry, new THREE.MeshStandardMaterial({color: "#0085c7"}));
		cubeRed.position.x = -.5;
		cubeRed.position.y = -.5;
		scene.add(cubeRed);

		const cubeYellow = new THREE.Mesh(cubeGeometry,  new THREE.MeshStandardMaterial({color: "#003152"}));
		cubeYellow.position.x = .5;
		cubeYellow.position.y = .5;
		scene.add(cubeYellow);

		// Lights
		const hemisphereLight = new THREE.HemisphereLight("white", "black", 1.5);
		hemisphereLight.position.set(2, 3, 0);
		scene.add(hemisphereLight);

		const duration = .8;
		gsap
			.timeline({ repeat: -1 })
			.to(cubeRed.position, { y: .5, duration })
			.to(cubeRed.position, { x: .5, duration })
			.to(cubeRed.position, { y: -.5, duration })
			.to(cubeRed.position, { x: -.5, duration });
		gsap
			.timeline({ repeat: -1 })
			.to(cubeYellow.position, { y: -.5, duration })
			.to(cubeYellow.position, { x: -.5, duration })
			.to(cubeYellow.position, { y: .5, duration })
			.to(cubeYellow.position, { x: .5, duration });

		loop(() => {
			if (!canvas.closest("section:not(.stack).present")) {
				// skip animation
				return true;
			}

			renderer.render(scene, camera);

			return true;
		});
	});
</script>

<canvas bind:this={canvas} class="webgl" />
