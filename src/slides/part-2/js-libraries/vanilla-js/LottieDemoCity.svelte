<!-- https://lottiefiles.com/39090-beautiful-city -->
<script>
	import "@dotlottie/player-component";
	import { loop } from "svelte/internal";

	let player;

	loop(() => {
		if (player.closest("section:not(.stack).present")) {
			player.play();
		} else {
			player.pause();
		}
		return true;
	});
</script>

<dotlottie-player
	bind:this={player}
	loop="true"
	src="/slides-template/city.lottie"
	style="height: 100%; width: 100%"
/>
