<!-- https://codesandbox.io/s/6i8hve -->
<script>
	import { timeline } from "motion";
	import { onMount } from "svelte";

	let container, animation;

	/**
	 * Remember to set the pathLength="1" SVG attribute on
	 * the elements you want to draw. This makes it easy
	 * to use the same animation logic for elements of a
	 * different path length.
	 */

	const draw = (progress) => ({
		// This property makes the line "draw" in when animated
		strokeDashoffset: 1 - progress,

		// Each line will be hidden until it starts drawing
		// to fix a bug in Safari where the line can be
		// partially visible even when progress is at 0
		visibility: "visible",
	});

	onMount(() => {
		animation = timeline([
			[container.querySelector("circle"), draw(1), { duration: 0.8, delay: 1 }],
			[container.querySelector("path"), draw(1), { duration: 0.6, at: "-0.2" }],
		]);
	});

	function onPlay() {
		animation.cancel();
		animation.play();
	}
</script>

<article>
	<button on:click={onPlay}>Rejouer</button>

	<svg
		bind:this={container}
		xmlns="http://www.w3.org/2000/svg"
		width="200"
		height="200"
		viewBox="0 0 200 200"
	>
		<circle cx="100" cy="100" r="80" pathLength="1" />
		<path d="M 54 107.5 L 88 138.5 L 144.5 67.5" pathLength="1" />
	</svg>
</article>

<style lang="scss">
	article {
		position: relative;
		height: 50vh;
		width: 100%;
		display: grid;
		place-items: center;
	}

	button {
		padding: 0.5em 0.8em;
		background: white;
		border: 0.1em solid color(gray, 400);
		font-size: 0.6rem;
		border-radius: 0.25em;
		cursor: pointer;
		transition: background-color 100ms;

		&:hover {
			background: color(gray, 100);
		}

		&:active {
			background: color(gray, 200);
		}
	}

	svg {
		width: 7rem;
		height: auto;
	}

	circle,
	path {
		fill: transparent;
		stroke: #57eb64;
		stroke-width: 0.4rem;
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		stroke-linecap: round;
		stroke-linejoin: round;
		visibility: hidden;
		// position: fixed;
		// top: 0;
		// left: 0;
		// right: 0;
		// bottom: 0;
	}

	circle {
		transform-origin: 100px 100px;
		transform: rotate(-90deg);
	}
</style>
