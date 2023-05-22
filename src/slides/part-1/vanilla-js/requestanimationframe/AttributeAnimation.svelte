<script>
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";

	const progress = tweened(25, {
		duration: 800,
		easing: cubicOut,
	});
</script>

<div class="container">
	<button on:click={() => progress.set(0)}>0</button>
	<button on:click={() => progress.set(25)}>25</button>
	<button on:click={() => progress.set(50)}>50</button>
	<button on:click={() => progress.set(75)}>75</button>
	<button on:click={() => progress.set(100)}>100</button>
</div>

<progress min="0" max="100" value={$progress} />

<style lang="scss">
	button {
		background: color(primary);
		color: white;
		cursor: pointer;
		padding: 0.5em 1em;
		border: 0;
		outline: 0;
		border-radius: 0.25em;
		font-size: 0.8em;
		transition: background-color 100ms;

		@include gradient-idle(primary);

		&:hover {
			@include gradient-hover(primary);
		}
	}

	progress {
		accent-color: color(primary);
		display: block;
		width: 70%;
		height: 1rem;
	}
</style>
