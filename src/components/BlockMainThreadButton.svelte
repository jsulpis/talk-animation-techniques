<script>
	import { loop } from "svelte/internal";

	function blockMainThread() {
		document.body.style.boxShadow = "inset 0 0 10vmin red";

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				const start = Date.now();
				while (Date.now() - start < 3000);

				document.body.style.boxShadow = "none";
			});
		});
	}

	let spinner;
	let rotation = 0;

	function isSpinnerVisible() {
		return (
			spinner &&
			(spinner.closest("section.present") || spinner.closest(".button-corner"))
		);
	}

	loop(() => {
		if (isSpinnerVisible()) {
			spinner.style.transform = `rotate(${rotation}deg)`;
			rotation = (rotation + 4) % 360;
		}
		return true;
	});

	window.addEventListener("keypress", (e) => {
		if (isSpinnerVisible() && e.ctrlKey && e.key === "b") {
			blockMainThread();
		}
	});
</script>

<button type="button" on:click={blockMainThread}>
	<span class="outline" />
	<span class="content">
		<svg
			width="90"
			height="90"
			viewBox="0 0 90 90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M30 48.75V20.625C30 19.1332 30.5926 17.7024 31.6475 16.6475C32.7024 15.5926 34.1332 15 35.625 15C37.1168 15 38.5476 15.5926 39.6025 16.6475C40.6574 17.7024 41.25 19.1332 41.25 20.625M41.25 20.625V45M41.25 20.625V13.125C41.25 12.3863 41.3955 11.6549 41.6782 10.9724C41.9609 10.2899 42.3752 9.66985 42.8975 9.14752C43.4199 8.6252 44.0399 8.21086 44.7224 7.92818C45.4049 7.64549 46.1363 7.5 46.875 7.5C47.6137 7.5 48.3451 7.64549 49.0276 7.92818C49.71 8.21086 50.3301 8.6252 50.8525 9.14752C51.3748 9.66985 51.7891 10.2899 52.0718 10.9724C52.3545 11.6549 52.5 12.3863 52.5 13.125V29.0625V45M52.5 20.625C52.5 19.1332 53.0926 17.7024 54.1475 16.6475C55.2024 15.5926 56.6332 15 58.125 15C59.6168 15 61.0476 15.5926 62.1025 16.6475C63.1574 17.7024 63.75 19.1332 63.75 20.625V45"
				stroke="#F5F5F5"
				stroke-width="6.66667"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M63.75 28.125C63.75 26.6332 64.3426 25.2024 65.3975 24.1475C66.4524 23.0926 67.8832 22.5 69.375 22.5C70.8668 22.5 72.2976 23.0926 73.3525 24.1475C74.4074 25.2024 75 26.6332 75 28.125V60C75 65.9674 72.6295 71.6903 68.4099 75.9099C64.1903 80.1295 58.4674 82.5 52.5 82.5H45H45.78C42.0538 82.5006 38.3857 81.5758 35.1052 79.8086C31.8247 78.0413 29.0344 75.487 26.985 72.375C26.739 72.0006 26.494 71.6256 26.25 71.25C25.08 69.4537 20.9738 62.295 13.9275 49.77C13.2092 48.4932 13.0173 46.9866 13.3927 45.5706C13.7681 44.1545 14.6811 42.9408 15.9375 42.1875C17.2758 41.3845 18.844 41.0517 20.3931 41.2419C21.9422 41.4322 23.3833 42.1345 24.4875 43.2375L30 48.75"
				stroke="#F5F5F5"
				stroke-width="6.66667"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</span>
	<span bind:this={spinner} class="spinner" />
</button>

<style lang="scss">
	// https://codepen.io/jsulpis/pen/wvYomoG

	button {
		font-size: inherit;
		cursor: pointer;
		border: none;
		color: white;
		outline: none;
		position: relative;
		border-radius: 50%;
		display: inline-grid;
		place-items: center;
		width: 6em;
		aspect-ratio: 1 / 1;

		.content {
			position: relative;
			border-radius: inherit;
			display: grid;
			place-items: center;
			box-shadow: highlight();
			background: linear-gradient(
				to top,
				var(--color-danger-700),
				var(--color-danger-600),
				var(--color-danger-400) 110%
			);
			background-size: 200% 200%;
			transition: background-position 200ms, box-shadow 100ms;
			grid-area: 1 / 1;
			height: 100%;
			width: 100%;
		}

		svg {
			width: 3.5em;
			height: auto;
			opacity: 0.9;
			margin-right: 2%;
		}

		&:hover .content {
			background-position: 0% 40%;
		}
		&:focus-visible .content {
			background-position: 0% 40%;
			box-shadow: highlight(), 0 0 0 0.2em color(danger, 100);
		}
		&:active .content {
			transition-duration: 50ms;
			background-position: 0% 100%;
		}

		.spinner {
			display: inline-block;
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;

			&::after {
				content: "";
				position: absolute;
				top: calc(50% - 0.25em);
				border-radius: 0 0.1em 0.1em 0;
				left: 100%;
				width: 0.31em;
				height: 0.5em;
				background-color: color(gold, 300);
				box-shadow: 0 0 0.5em color(gold, 200),
					inset -0.1em 0 0.1em -0.1em rgba(0, 0, 0, 0.25);
			}
		}

		.outline {
			position: relative;
			border-radius: 50%;
			background: hsla(var(--shadow-color-hsl) / 0.25);
			width: 110%;
			height: 110%;
			grid-area: 1/1;

			--shadow-color: hsla(var(--shadow-color-hsl) / 0.6);
			box-shadow: 0px 0px 0.15em var(--shadow-color),
				0px 0px 0.5em 0.35em var(--background-page),
				0 0.6em 1.5em 0.2em var(--shadow-color),
				inset 0px 0px 0.2em var(--shadow-color);
		}
	}
</style>
