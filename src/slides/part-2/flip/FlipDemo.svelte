<!-- https://codepen.io/jsulpis/pen/zYzgqrL?editors=0010 -->
<script>
	import { afterUpdate, onMount } from "svelte";

	// avoid warning for unknown prop
	let className;
	export { className as class };

	export let duration = 0;

	/**
	 * Basic implementation of the FLIP technique (First, Last, Invert, Play)
	 * (https://aerotwist.com/blog/flip-your-animations/)
	 * made for this specific use case
	 */
	class Flip {
		read(elements) {
			this.positions = {};
			elements.forEach((item, i) => {
				const id = item.getAttribute("id");
				this.positions[id] = item.getBoundingClientRect(); // FIRST
			});
		}

		play(elements) {
			elements.forEach((item, i) => {
				const id = item.getAttribute("id");
				const first = this.positions[id];
				const last = item.getBoundingClientRect(); // LAST

				// INVERT
				const deltaX = first.left - last.left;
				const deltaY = first.top - last.top;

				// PLAY
				item.animate(
					[
						{ transform: `translate(${deltaX}px, ${deltaY}px)` },
						{ transform: "none" },
					],
					{ duration, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
				);
			});
		}
	}

	const flip = new Flip();
	let colors = ["green", "orange", "blue", "yellow", "purple", "red", "pink"];
	let container;
	let items;

	onMount(() => {
		items = container.querySelectorAll(".item");
	});

	function shuffle() {
		flip.read(items);
		colors = [...colors.sort((a, b) => (Math.random() > 0.5 ? 1 : -1))];
	}

	afterUpdate(() => {
		flip.play(items);
	});
</script>

<article bind:this={container}>
	<button on:click={shuffle}>shuffle</button>
	<div class="gallery">
		{#each colors as color}
			<div class="item" id={color} />
		{/each}
	</div>
</article>

<style lang="scss">
	article {
		width: 90%;
		margin-top: 5%;
		max-width: 900px;
		padding: 2rem 3rem 3rem;
		border-radius: 0.5rem;
		box-sizing: border-box;
		background: white;
		box-shadow: var(--shadow-lg);
	}

	.gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5em;
	}

	.item {
		width: 6rem;
		aspect-ratio: 3/1.5;
		border-radius: 0.25em;
		box-shadow: var(--shadow-sm);
	}

	$colors: (
		green: #6ee7b7,
		orange: #fdba74,
		blue: #7dd3fc,
		yellow: #fef08a,
		purple: #a5b4fc,
		red: #fca5a5,
		pink: #f9a8d4,
	);

	@each $name, $value in $colors {
		##{$name} {
			background: $value;
		}
	}

	button {
		display: block;
		margin: 0 auto 2rem auto;
		background: #64748b;
		color: white;
		border: 0;
		border-radius: 0.25rem;
		font-size: 1rem;
		text-transform: uppercase;
		padding: 0.75rem 1.25rem;
		cursor: pointer;
		transition: background-color 100ms;

		&:hover {
			background: #475569;
		}
		&:active {
			background: #334155;
		}
	}
</style>
