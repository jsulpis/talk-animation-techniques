<!-- https://codesandbox.io/s/m8wv3j -->
<script>
	import { scroll, animate } from "motion";
	import { onMount } from "svelte";

	let container;

	onMount(() => {
		const target = container.querySelector(".section.gold div");

		const scrollOptions = {
			target,
			offset: ["start end", "end end", "start start", "end start"],
			container,
		};

		// Pass an animation or timeline to automatically scrub
		scroll(animate(".progress-bar", { scaleX: [0, 1, 1, 0] }), scrollOptions);

		// Or pass a function to directly use the scroll info
		const progress = document.querySelector(".progress-text");
		scroll(
			({ y }) => (progress.innerHTML = y.progress.toFixed(2)),
			scrollOptions,
		);
	});
</script>

<article bind:this={container}>
	<div class="progress-text">0</div>
	<div class="section"><div /></div>
	<div class="section gold"><div /></div>
	<div class="section"><div /></div>
	<div class="section"><div /></div>
	<div class="progress-bar" />
</article>

<style lang="scss">
	article {
		height: 40vh;
		width: 60vw;
		overflow: auto;
		background: white;
		border-radius: 0.5em;
		margin-top: 1em;
		position: relative;
	}

	.section {
		margin-block: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.section div {
		width: 4rem;
		aspect-ratio: 2/3;
		border-radius: 10px;
		background-color: color(gray, 200);
	}

	.section.gold div {
		background-color: color(gold);
	}

	.progress-bar {
		position: sticky;
		bottom: 0;
		left: 0;
		right: 0;
		height: 10px;
		background: color(primary, 600);
		box-shadow: 0px -3px 5px -4px black;
		transform: scaleX(0);
		transform-origin: 0%;
	}

	.progress-text {
		position: sticky;
		top: 10px;
		left: 10px;
		padding: 0.5em;
		background: color(primary, 600);
		color: white;
		font-size: 0.8rem;
		font-weight: bold;
		width: 6ch;
		text-align: center;
		border-radius: 5px;
	}
</style>
