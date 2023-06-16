<script>
	import { onMount } from "svelte";
	import BlockMainThreadButton from "./BlockMainThreadButton.svelte";

	let visible = false;

	onMount(() => {
		if (typeof window == undefined) return;

		window.addEventListener("keypress", (e) => {
			if (e.shiftKey && e.key === "B") {
				visible = !visible;
			}
		});
	});
</script>

{#if visible}
	<div class="button-corner">
		<BlockMainThreadButton />
	</div>
{/if}

<style>
	.button-corner {
		transform: scale(0.6);
		position: fixed;
		z-index: 9999;
		pointer-events: all;
		padding: 0.5rem;
		bottom: 0;
		right: 0;
	}
</style>
