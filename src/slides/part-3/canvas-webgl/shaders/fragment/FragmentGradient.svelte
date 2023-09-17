<!-- Made thanks to https://whatamesh.vercel.app/ -->
<script>
	import { onMount } from "svelte";
	import { Gradient } from "../../../../../assets/Gradient.js";

	onMount(() => {
		// Create your instance
		const gradient = new Gradient();

		// Call `initGradient` with the selector to your canvas
		gradient.initGradient("#shaders-gradient");
	});
</script>

<div class="container">
	<canvas id="shaders-gradient" data-transition-in />
</div>

<style lang="scss">
	#shaders-gradient {
		position: absolute;
		height: 100%;
		inset: 0;
		transform-origin: bottom right;
		--gradient-color-1: #8f60ee;
		--gradient-color-2: #ff333d;
		--gradient-color-3: #68b2fb;
		--gradient-color-4: #ffab57;
		animation: fadeIn .4s ease-out both;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
	}

	.container {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		bottom: 0;

		&::after {
			content: "";
			position: absolute;
			height: 45%;
			width: 110%;
			left: 0%;
			background: var(--background-page);
			border-bottom-right-radius: 100%;
		}
	}
</style>
