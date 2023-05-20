<script>
	import CardAnimation from "./CardAnimation.svelte";

	let progress = 0;
</script>

<!-- the article is used to break the perspective context from reveal -->
<article style={`--progress: ${progress}`}>
	<CardAnimation />

	<input bind:value={progress} type="range" min="0" max="1" step="0.01" />

	<p>animation-play-state: <strong>paused</strong>;</p>
	<p>
		animation-delay: <strong>{Number(-1 * progress * 1.2).toFixed(2)}s;</strong>
	</p>
</article>

<style>
	input {
		transform: scale(2);
		margin-bottom: 1rem;
	}

	p {
		width: 23ch;
		margin: auto;
		text-align: left;
	}
</style>
