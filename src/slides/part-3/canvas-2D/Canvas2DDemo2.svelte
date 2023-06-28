<script>
	import { onMount } from "svelte";

	let canvas;

	function getColor(name, variant = 500) {
		return getComputedStyle(document.documentElement).getPropertyValue(
			`--color-${name}-${variant}`
		);
	}

	onMount(() => {
		const ctx = canvas.getContext("2d");

		// triangle
		ctx.fillStyle = getColor("gold");
		ctx.beginPath();
		ctx.moveTo(100, 40);
		ctx.lineTo(300, 50);
		ctx.lineTo(150, 150);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = getColor("gray");
		ctx.lineWidth = 5;
		ctx.stroke();

		// square
		ctx.fillStyle = getColor("primary");
		ctx.fillRect(100, 120, 150, 150);

		// buble
		ctx.translate(400, 30);
		ctx.scale(1.5, 1.5);
		ctx.beginPath();
		ctx.moveTo(75, 25);
		ctx.quadraticCurveTo(25, 25, 25, 62.5);
		ctx.quadraticCurveTo(25, 100, 50, 100);
		ctx.quadraticCurveTo(50, 120, 30, 125);
		ctx.quadraticCurveTo(60, 120, 65, 100);
		ctx.quadraticCurveTo(125, 100, 125, 62.5);
		ctx.quadraticCurveTo(125, 25, 75, 25);
		ctx.strokeStyle = getColor("gray", 700);
		ctx.stroke();

		// bezier curve
		ctx.translate(0, 0);
		ctx.scale(0.75, 0.75);
		const lingrad = ctx.createLinearGradient(0, 0, 0, 110);
		lingrad.addColorStop(0, getColor("success", 600));
		lingrad.addColorStop(1, "rgba(255, 255, 255, 0)");

		ctx.translate(-100, 150);
		ctx.scale(2, 2);
		ctx.fillStyle = lingrad;
		ctx.beginPath();
		ctx.moveTo(10, 30);
		ctx.bezierCurveTo(50, 90, 159, -30, 200, 30);
		ctx.lineTo(200, 90);
		ctx.lineTo(10, 90);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(10, 30);
		ctx.bezierCurveTo(50, 90, 159, -30, 200, 30);
		ctx.lineWidth = 4;
		ctx.strokeStyle = getColor("gray", 900);
		ctx.stroke();

		// smiley
		ctx.translate(-120, 50);
		ctx.scale(0.75, 0.75);
		ctx.beginPath();
		ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
		ctx.moveTo(110, 75);
		ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
		ctx.moveTo(65, 65);
		ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
		ctx.moveTo(95, 65);
		ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
		ctx.stroke();

		// Text
		ctx.translate(200, 100);
		ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

		ctx.font = "40px Rubik";
		ctx.fillStyle = "Black";
		ctx.fillText("Hello World!", 5, 30);
	});
</script>

<canvas bind:this={canvas} width="800" height="600" />

<style lang="scss">
	canvas {
		border: 0.1em solid var(--font-color-default);
		background: white;
		border-radius: 2%;
	}
</style>
