<script>
	import { onMount } from "svelte";
	import anime from "animejs";

	let container, animation;

	onMount(() => {
		animation = anime({
			targets: container.querySelectorAll(".box"),
			scale: [
				{ value: 0.1, easing: "easeOutSine", duration: 500 },
				{ value: 1, easing: "easeInOutQuad", duration: 1200 },
			],
			delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
		});
	});

	function onPlay() {
		animation.restart();
	}
</script>

<article>
	<button on:click={onPlay}>Rejouer</button>
	<div bind:this={container} class="staggering-grid-demo">
		{#each Array(14 * 5) as _}
			<div class="box" />
		{/each}
	</div>
</article>

<style lang="scss">
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

	article {
		position: relative;
		height: 50vh;
		width: 100%;
		display: grid;
		place-items: center;
	}

	.staggering-grid-demo {
		display: grid;
		gap: 0.25em;
		grid-template-columns: repeat(14, auto);
	}

	.box {
		width: 1.5rem;
		height: 1.5rem;
		background-color: #f60;
		border: solid 2px #fff;
		display: inline-block;
	}
</style>
