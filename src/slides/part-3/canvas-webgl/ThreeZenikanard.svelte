<script>
	import * as THREE from "three";
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";
	import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
	import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

	let canvas;

	onMount(() => {
		// Scene
		const scene = new THREE.Scene();

		const sizes = {
			width: window.innerWidth * 0.8,
			height: window.innerHeight * 0.7,
		};

		// Camera
		const camera = new THREE.PerspectiveCamera(33, sizes.width / sizes.height);
		scene.add(camera);

		// Renderer
		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
		});

		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.physicallyCorrectLights = true;
		renderer.shadowMap.enabled = true;
		renderer.outputEncoding = THREE.sRGBEncoding;

		// General adjustments
		camera.setFocalLength(40);
		camera.position.set(0, 60, 350);
		renderer.setClearAlpha(0);

		// Mouse controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.maxPolarAngle = Math.PI / 2;

		// Lights
		const ambientLight = new THREE.AmbientLight("#fff", 0.2);
		scene.add(ambientLight);

		const hemisphereLight = new THREE.HemisphereLight("white", "#0c1a2a", 4);
		hemisphereLight.position.set(0, 30, 0);
		scene.add(hemisphereLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(-100, 400, -40);
		directionalLight.castShadow = true;
		directionalLight.shadow.camera.top = 100;
		directionalLight.shadow.camera.bottom = -100;
		directionalLight.shadow.camera.left = -100;
		directionalLight.shadow.camera.right = 100;
		directionalLight.shadow.radius = 20;
		scene.add(directionalLight);

		// // Ground
		const ground = new THREE.Mesh(
			new THREE.PlaneGeometry(400, 400),
			new THREE.ShadowMaterial({ opacity: 0.4 })
		);
		ground.rotation.x = -Math.PI / 2;
		ground.position.y = -60;
		ground.receiveShadow = true;
		scene.add(ground);

		// Model
		const fbxLoader = new FBXLoader();
		let mixer, jumpAction;

		fbxLoader.load(
			"/talk-animation-techniques/models/zenikanard_LOD1.fbx",
			(model) => {
				model.scale.set(7.5, 7.5, 7.5);
				model.rotation.y = -(4 * Math.PI) / 5;
				model.position.y = -60;
				model.children[0].castShadow = true;

				mixer = new THREE.AnimationMixer(model);

				jumpAction = mixer.clipAction(model.animations[0]);
				jumpAction.play();

				scene.add(model);
			}
		);

		const clock = new THREE.Clock();

		loop(() => {
			if (!canvas.closest("section:not(.stack).present")) {
				// skip animation
				return true;
			}

			mixer && mixer.update(clock.getDelta());
			renderer.render(scene, camera);

			return true;
		});
	});
</script>

<canvas bind:this={canvas} class="webgl" />
