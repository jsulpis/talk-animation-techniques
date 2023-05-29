<!-- Demo from : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#making_combinations -->
<script>
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";

	// avoid warning for unknown prop
	let className;
	export { className as class };

	export let animate = false;

	let canvas;

	onMount(() => {
		loop(() => {
			if (!canvas.closest("section:not(.stack).present")) {
				return true;
			}
			const ctx = canvas.getContext("2d");

			ctx.save();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.scale(4, 4);

			roundedRect(ctx, 12, 12, 150, 150, 15);
			roundedRect(ctx, 19, 19, 150, 150, 9);
			roundedRect(ctx, 53, 53, 49, 33, 10);
			roundedRect(ctx, 53, 119, 49, 16, 6);
			roundedRect(ctx, 135, 53, 49, 33, 10);
			roundedRect(ctx, 135, 119, 25, 49, 10);

			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = getColor("primary");
			if (animate) {
				ctx.translate(0, Math.cos(Date.now() / 100) * 2);

				const angle = (Math.cos(Date.now() / 100) + 1) / 3;
				ctx.arc(37, 37, 13, angle, -1 * angle, false);
			} else {
				ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
			}
			ctx.lineTo(31, 37);
			ctx.lineWidth = 2;
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			ctx.restore();

			for (let i = 0; i < 8; i++) {
				ctx.fillRect(51 + i * 16, 35, 4, 4);
			}

			for (let i = 0; i < 6; i++) {
				ctx.fillRect(115, 51 + i * 16, 4, 4);
			}

			for (let i = 0; i < 8; i++) {
				ctx.fillRect(51 + i * 16, 99, 4, 4);
			}

			if (animate) {
				ctx.translate(Math.cos(Date.now() / 300) * 35, 0);
			}

			ctx.fillStyle = getColor("danger", 700);
			ctx.beginPath();
			ctx.moveTo(83, 116);
			ctx.lineTo(83, 102);
			ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
			ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
			ctx.lineTo(111, 116);
			ctx.lineTo(106.333, 111.333);
			ctx.lineTo(101.666, 116);
			ctx.lineTo(97, 111.333);
			ctx.lineTo(92.333, 116);
			ctx.lineTo(87.666, 111.333);
			ctx.lineTo(83, 116);
			ctx.lineWidth = 2;
			ctx.closePath();
			ctx.stroke();
			ctx.fill();

			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.moveTo(91, 96);
			ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
			ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
			ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
			ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
			ctx.moveTo(103, 96);
			ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
			ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
			ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
			ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();

			ctx.fillStyle = "black";
			ctx.beginPath();
			ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
			ctx.fill();

			ctx.beginPath();
			ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
			ctx.fill();

			ctx.restore();

			return true;
		});
	});

	function getColor(name, variant = 500) {
		return getComputedStyle(document.documentElement).getPropertyValue(
			`--color-${name}-${variant}`
		);
	}

	// A utility function to draw a rectangle with rounded corners.
	function roundedRect(ctx, x, y, width, height, radius) {
		ctx.beginPath();
		ctx.moveTo(x, y + radius);
		ctx.arcTo(x, y + height, x + radius, y + height, radius);
		ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
		ctx.arcTo(x + width, y, x + width - radius, y, radius);
		ctx.arcTo(x, y, x, y + radius, radius);
		ctx.stroke();
	}
</script>

<canvas bind:this={canvas} width="600" height="600" />

<style lang="scss">
	canvas {
		border: 0.1em solid var(--font-color-light);
		background: white;
		border-radius: 2%;
	}
</style>
