<script lang="ts">
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";

	let card: HTMLElement;
	let animation: Animation;

	onMount(() => {
		animation = card.animate(
			[{ transform: "translateX(-100%)" }, { transform: "translateX(100%)" }],
			{
				duration: 2000,
				iterations: Infinity,
				direction: "alternate",
				easing: "ease-in-out",
			}
		);
	});

	loop(() => {
		if (!card?.closest("section.present")) {
			animation?.pause();
		} else {
			animation?.play();
		}
		return true;
	});
</script>

<span bind:this={card} class="card primary inert" />
