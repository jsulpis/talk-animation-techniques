<div class="page-wrapper">
	<div class="board">
		<button class="playing-card" onclick="this.classList.toggle('flipped')">
			<span class="wrapper">
				<span class="content">
					<span class="face back" />
					<span class="face front" />
				</span>
			</span>
		</button>
	</div>
</div>

<style lang="scss">
	// https://codepen.io/jsulpis/pen/VwBNoEb
	.page-wrapper {
		perspective: 1000px;
		display: grid;
		place-items: center;
	}

	.board {
		--card-width: min(200px, 20vmin);
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
		animation: flipWrapper var(--duration) paused forwards linear;
		animation-delay: calc(-1 * var(--progress) * var(--duration));
		pointer-events: initial;
		display: block;
		position: relative;
		height: 100%;
		transform-origin: 200% 50%;
	}

	.content {
		animation: flipContent var(--duration) paused forwards ease-in-out;
		animation-delay: calc(-1 * var(--progress) * var(--duration));
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

	@keyframes flipWrapper {
		to {
			transform: rotateY(0.5turn);
		}
	}
	@keyframes flipContent {
		to {
			transform: rotateX(-0.5turn) rotateY(1.5turn);
		}
	}
</style>
