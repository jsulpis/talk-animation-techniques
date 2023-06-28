<!-- https://lottiefiles.com/39090-beautiful-city -->
<script>
	import "@dotlottie/player-component";
	import { loop } from "svelte/internal";
	import city from "./LottieDemoCity.lottie";

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
	src={city}
	style="height: 100%; width: 100%"
/>
