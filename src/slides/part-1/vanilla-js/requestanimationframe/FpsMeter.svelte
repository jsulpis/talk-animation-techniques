<!-- https://codepen.io/jsulpis/pen/gOBzWXz -->
<script>
	import { loop } from "svelte/internal";

	let fps = "";
	let deltaMs = 0;
	let gradientRotation = 0;
	let container;

	let frameIndex = 1;
	let frameMeasure;
	const frameWindowSize = 100;

	performance.mark("previous-frame");

	loop(() => {
		if (!container.closest("section:not(.stack).present")) {
			// skip animation
			return true;
		}
		// measure frame duration
		if (frameIndex++ === frameWindowSize) {
			frameIndex = 0;
			performance.mark("current-frame");
			frameMeasure = performance.measure(
				"duration",
				"previous-frame",
				"current-frame"
			);
			performance.mark("previous-frame");

			deltaMs = frameMeasure.duration / frameWindowSize;
			fps = Math.floor(1 / ((deltaMs || Infinity) / 1000));
		}
		gradientRotation = (gradientRotation + 4) % 360;

		return true;
	});
</script>

<article style={`--rotation: ${gradientRotation}`} bind:this={container}>
	<p class="fps">
		<strong class="value">{fps}</strong>
		<span>FPS</span>
	</p>
	<small class="delta"
		><span class="deltaMs">{deltaMs.toFixed(1)}</span>ms par frame</small
	>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		text-align: center;
		font-size: 2rem;
		border: 0.05em solid var(--font-color-light);
		border-radius: 50%;
		width: fit-content;
		padding: 1.8em;
		aspect-ratio: 1/1;
		position: relative;
		background: var(--background-page);

		&::before {
			content: "";
			position: absolute;
			z-index: -1;
			border-radius: inherit;
			inset: -2%;
			background: conic-gradient(
				transparent 40%,
				color(primary, 500),
				transparent 60%
			);
			transform: rotate(calc(var(--rotation) * 1deg));
		}

		&::after {
			content: "";
			position: absolute;
			inset: -2%;
			transition: opacity 300ms ease-out;
			opacity: 0;
			background: var(--background-page);
		}
	}

	article:has(.value:empty)::after {
		opacity: 1;
	}

	.fps .value {
		font-size: 2em;
		line-height: 0.8;
		display: block;
	}

	.delta {
		font-size: 0.6em;
		display: inline-block;
		width: 14ch;
	}
</style>
