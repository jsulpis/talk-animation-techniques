<!-- https://codepen.io/GreenSock/pen/AWQprN -->
<script>
	import { onMount } from "svelte";
	import anime from "animejs";

	let container, animation;

	onMount(() => {
		animation = anime({
			targets: container.querySelectorAll(".box"),
			opacity: 1,
			translateX: -200,
			delay: anime.stagger(100, { start: 500 }),
		});
	});

	function onPlay() {
		animation.restart();
	}
</script>

<article>
	<button on:click={onPlay}>Rejouer</button>
	<div bind:this={container} class="staggering-list-demo">
		<div class="box" />
		<div class="box" />
		<div class="box" />
		<div class="box" />
		<div class="box" />
		<div class="box" />
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

	.staggering-list-demo {
		transform: translateX(200px);
		display: flex;
		gap: 0.25em;
		flex-direction: column;
	}

	.box {
		width: 1.5rem;
		height: 1.5rem;
		background-color: #f60;
		border: solid 2px #fff;
		display: inline-block;
		opacity: 0;
	}
</style>
