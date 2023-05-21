<script>
	import { spring } from "svelte/motion";

	let translation = spring(-300, {
		stiffness: 0.03,
		damping: 0.1,
	});
</script>

<button
	on:click={() => translation.set(-1 * $translation)}
	style={`transform: translateX(${$translation}px)`}
	class="card primary">Clique !</button
>

<style lang="scss">
	button.card.primary {
		font-size: 1em;
		transition: background-position 200ms;
	}
</style>
