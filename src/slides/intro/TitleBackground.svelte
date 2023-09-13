<!-- Made thanks to https://whatamesh.vercel.app/ -->
<script>
	import { onMount } from "svelte";
	import { Gradient } from "../../assets/Gradient.js";

	onMount(() => {
		// Create your instance
		const gradient = new Gradient();

		// Call `initGradient` with the selector to your canvas
		gradient.initGradient("#gradient-canvas");
	});
</script>

<canvas id="gradient-canvas" data-transition-in />

<style>
	#gradient-canvas {
		position: absolute;
		z-index: -1;
		width: 100vw;
		height: 100vh;
		--gradient-color-1: #fff;
		--gradient-color-3: #c9e6f8;
		--gradient-color-2: #9bcaf8;
		--gradient-color-4: #fff;
	}
</style>
