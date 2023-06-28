<script>
	import { onMount } from "svelte";

	let canvas;

	onMount(() => {
		const ctx = canvas.getContext("2d");

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
			"--color-primary-500"
		);
		ctx.fillRect(100, 100, 200, 200);
	});
</script>

<canvas bind:this={canvas} width="400" height="400" />

<style lang="scss">
	canvas {
		border: 0.1em solid var(--font-color-default);
		border-radius: 2%;
	}
</style>
