<script>
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";

	const progress = tweened(0, {
		duration: 1500,
		easing: cubicOut,
	});
</script>

<div class="container">
	<button on:click={() => progress.set(0)}>0</button>
	<button on:click={() => progress.set(25)}>25</button>
	<button on:click={() => progress.set(50)}>50</button>
	<button on:click={() => progress.set(75)}>75</button>
	<button on:click={() => progress.set(100)}>100</button>

	<strong class="value">{Number($progress).toFixed(0)}</strong>
</div>

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

	strong {
		font-size: 2em;
		display: block;
		margin-top: 1rem;
		line-height: 1em;
	}
</style>
