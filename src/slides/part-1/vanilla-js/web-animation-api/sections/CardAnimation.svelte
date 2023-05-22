<script lang="ts">
	import { onMount } from "svelte";
	import { loop } from "svelte/internal";

	let wrapper: HTMLElement;
	let content: HTMLElement;

	let wrapperAnim: Animation;
	let contentAnim: Animation;

	$: animations = [wrapperAnim, contentAnim];

	let progress = 0;

	loop(() => {
		progress = wrapperAnim?.currentTime || 0;
		return true;
	});

	function play() {
		animations.forEach((anim) => {
			anim.playbackRate = 1;
			anim.play();
		});
	}
	function pause() {
		animations.forEach((anim) => anim.pause());
	}
	function reverse() {
		animations.forEach((anim) => {
			anim.playbackRate = -1;
			anim.play();
		});
	}
	function seek(timestamp: number) {
		animations.forEach((anim) => (anim.currentTime = timestamp));
	}

	onMount(() => {
		wrapperAnim = wrapper.animate(
			[{ transform: "none" }, { transform: "rotateY(0.5turn)" }],
			{ duration: 1200, fill: "forwards" }
		);
		wrapperAnim.pause();
		wrapperAnim.onfinish = wrapperAnim.pause;

		contentAnim = content.animate(
			[
				{ transform: "none" },
				{ transform: "rotateX(-0.5turn) rotateY(1.5turn)" },
			],
			{ duration: 1200, easing: "ease-in-out", fill: "forwards" }
		);
		contentAnim.pause();
		contentAnim.onfinish = contentAnim.pause;
	});
</script>

<div class="page-wrapper">
	<div class="board">
		<button class="playing-card">
			<span bind:this={wrapper} class="wrapper">
				<span bind:this={content} class="content">
					<span class="face back" />
					<span class="face front" />
				</span>
			</span>
		</button>
	</div>

	<div class="play-controls">
		<button title="backwards" on:click={reverse}>
			<svg
				width="256"
				height="256"
				viewBox="0 0 256 256"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M240 128C240.007 130.716 239.31 133.388 237.978 135.755C236.647 138.123 234.725 140.105 232.4 141.51L88.32 229.65C85.8909 231.137 83.1087 231.949 80.2608 232.002C77.4129 232.055 74.6025 231.346 72.12 229.95C69.6611 228.575 67.6128 226.57 66.1856 224.141C64.7585 221.712 64.0041 218.947 64 216.13V39.87C64.0041 37.0528 64.7585 34.2876 66.1856 31.8587C67.6128 29.4298 69.6611 27.4248 72.12 26.05C74.6025 24.6535 77.4129 23.945 80.2608 23.9977C83.1087 24.0505 85.8909 24.8625 88.32 26.35L232.4 114.49C234.725 115.895 236.647 117.877 237.978 120.245C239.31 122.612 240.007 125.284 240 128Z"
					fill="currentColor"
				/>
			</svg>
		</button>
		<button title="pause" on:click={pause}>
			<svg
				width="256"
				height="256"
				viewBox="0 0 256 256"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M216 55.27V200.73C215.995 204.778 214.384 208.659 211.522 211.522C208.659 214.384 204.778 215.995 200.73 216H55.27C51.2218 215.995 47.3409 214.384 44.4783 211.522C41.6158 208.659 40.0053 204.778 40 200.73V55.27C40.0053 51.2218 41.6158 47.3409 44.4783 44.4783C47.3409 41.6158 51.2218 40.0053 55.27 40H200.73C204.778 40.0053 208.659 41.6158 211.522 44.4783C214.384 47.3409 215.995 51.2218 216 55.27Z"
					fill="currentColor"
				/>
			</svg>
		</button>
		<button title="play" on:click={play}>
			<svg
				width="256"
				height="256"
				viewBox="0 0 256 256"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M240 128C240.007 130.716 239.31 133.388 237.978 135.755C236.647 138.123 234.725 140.105 232.4 141.51L88.32 229.65C85.8909 231.137 83.1087 231.949 80.2608 232.002C77.4129 232.055 74.6025 231.346 72.12 229.95C69.6611 228.575 67.6128 226.57 66.1856 224.141C64.7585 221.712 64.0041 218.947 64 216.13V39.87C64.0041 37.0528 64.7585 34.2876 66.1856 31.8587C67.6128 29.4298 69.6611 27.4248 72.12 26.05C74.6025 24.6535 77.4129 23.945 80.2608 23.9977C83.1087 24.0505 85.8909 24.8625 88.32 26.35L232.4 114.49C234.725 115.895 236.647 117.877 237.978 120.245C239.31 122.612 240.007 125.284 240 128Z"
					fill="currentColor"
				/>
			</svg>
		</button>
	</div>
	<input
		type="range"
		min="0"
		max="1200"
		value={progress}
		on:input={(e) => seek(e.target.value)}
	/>
</div>

<style lang="scss">
	// https://codepen.io/jsulpis/pen/VwBNoEb
	.page-wrapper {
		perspective: 1000px;
		display: grid;
		place-items: center;
		padding-top: 10%;
	}

	.board {
		pointer-events: none;
		--card-width: min(200px, 12vw);
		display: flex;
		align-items: center;
		width: calc(4 * var(--card-width));
		box-sizing: content-box;
		aspect-ratio: 16/9;
		transform: rotateX(60deg);
		border: 4px solid black;
		border-radius: 16px;
		padding: 1rem 3rem;
		background: color(primary, 700);
	}

	div,
	.playing-card,
	.wrapper,
	.content {
		transform-style: preserve-3d;
	}

	.playing-card {
		--duration: 1200ms;
		position: absolute;
		width: var(--card-width);
		aspect-ratio: 20/29;
		outline: none;
		border: none;
		cursor: pointer;
		padding: 0;
		background-color: transparent;
		border-radius: 8px;
		pointer-events: none;
	}

	.wrapper {
		pointer-events: initial;
		display: block;
		position: relative;
		height: 100%;
		transform-origin: 200% 50%;
	}

	.content {
		display: block;
		height: 100%;
	}

	.face {
		position: absolute;
		inset: 0;
		backface-visibility: hidden;
		border-radius: 8px;
		background-size: cover;
		background-position: center;
		background-color: white;
	}

	.front {
		transform: rotateZ(0.5turn) rotateY(-0.5turn);
		border-width: 2px 0px;
		border-color: black;
		border-style: solid;
		background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/English_pattern_ace_of_spades.svg/1024px-English_pattern_ace_of_spades.svg.png");
	}

	.back {
		background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKnlurWcUYrlDbGvf8IUz6rLX7oX1hHt7FW_6e4vNOwFfPhmPURXxGK45qVAqW7dtxsY&usqp=CAU");
		border: 2px solid black;
	}

	.play-controls {
		svg {
			height: 2em;
			width: auto;
		}
		button {
			padding: 1em;
			border-radius: 0.5em;
			display: inline-grid;
			place-items: center;
			color: var(--font-color-strong);
			border: 0.2em solid var(--font-color-light);
			transition: background 100ms;
			background: white;

			&:hover {
				background: color(gray, 200);
			}
			&:active {
				background: color(gray, 300);
			}
		}
		button[title="backwards"] svg {
			transform: rotate(0.5turn);
		}
	}
	input {
		transform: scale(2);
		margin-top: 1rem;
		width: 30%;
	}
</style>
