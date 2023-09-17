<script>
	import { onMount } from "svelte";

	let canvas;

	onMount(() => {
		canvas.width = window.innerHeight/1.7;
		canvas.height = window.innerHeight/1.7;
		const offscreen = canvas.transferControlToOffscreen();
		const worker =  new Worker(new URL('./offscreencanvas.worker.js', import.meta.url), {
			type: "module",
		});
		worker.postMessage({ type: "main", canvas: offscreen }, [offscreen]);
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		width: 60vmin;
		height: 60vmin;
		animation: fadeIn .5s .1s ease-out both;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
	}
</style>
