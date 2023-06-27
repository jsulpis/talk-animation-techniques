<script>
	import CardAnimation from "./CardAnimation.svelte";

	/**
	 * Yeah this is not the WAAPI, I made this animation first in CSS using
	 * the negative animation-delay trick.
	 * It could be done with the WAAPI.
	 */
</script>

<!-- the article is used to break the perspective context from reveal -->
<article
	onscroll="this.style.setProperty(
		'--progress',
		this.scrollTop / (this.scrollHeight - window.innerHeight)
	)"
>
	<div class="scroll-content">
		<div class="sticky">
			<CardAnimation />
		</div>
		<p>Tentez-vous votre chance ?</p>
		<p>C'est gagné !</p>
	</div>
</article>

<style lang="scss">
	article {
		overflow: auto;
		width: 100%;

		&::-webkit-scrollbar {
			width: 12px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 12px;
			background: color(primary, 600);
		}
	}

	.scroll-content {
		height: 200vh;

		:global(.board) {
			background: none;
			border: none;
		}
		:global(.playing-card) {
			transform: scale(1.1);
		}
	}

	p {
		font-size: 1.4em;

		&:first-of-type {
			width: 70%;
			margin-left: auto;
			margin-top: -0.5em;
		}

		&:nth-of-type(2) {
			margin-top: 90vh;
			width: 90%;
			margin-right: auto;
		}
	}

	.sticky {
		position: sticky;
		top: 25vh;

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			transform: scaleY(2.5);
			background: linear-gradient(
				var(--background-page) 25%,
				transparent,
				var(--background-page) 75%
			);
		}
	}
</style>
