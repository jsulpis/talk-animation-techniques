<!-- based on https://vuejs.org/examples/#list-transition -->
<script setup>
import { ref } from "vue";

const getInitialItems = () => [1, 2, 3, 4, 5];
const items = ref(getInitialItems());
let id = items.value.length + 1;

function insert() {
	const i = Math.round(Math.random() * items.value.length);
	items.value.splice(i, 0, id++);
}

function reset() {
	items.value = getInitialItems();
}

function shuffle() {
	items.value = [...items.value.sort((a, b) => (Math.random() > 0.5 ? 1 : -1))];
}

function remove(item) {
	const i = items.value.indexOf(item);
	if (i > -1) {
		items.value.splice(i, 1);
	}
}
</script>

<template>
	<article>
		<div class="buttons">
			<button @click="insert">Ajouter</button>
			<button @click="shuffle">Mélanger</button>
			<button @click="reset">Réinitialiser</button>
		</div>

		<div class="gallery">
			<TransitionGroup name="fade">
				<div
					v-for="(item, i) in items"
					@click="remove(item)"
					class="item"
					:key="item"
				></div>
			</TransitionGroup>
		</div>
	</article>
</template>

<style lang="scss" scoped>
article {
	width: 90%;
	margin-top: 2%;
	max-width: 70vw;
	padding: 2rem 3rem 3rem;
	border-radius: 0.5rem;
	font-size: 70%;
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

.buttons {
	display: flex;
	justify-content: center;
	gap: 0.2em;
	margin-bottom: 1em;
}

.item {
	width: 6rem;
	aspect-ratio: 3/1.5;
	border-radius: 0.25em;
	box-shadow: var(--shadow-sm);
	background: color(gray, 300);
}

button {
	display: block;
	background: color(primary, 600);
	color: white;
	border: 0;
	border-radius: 0.25em;
	font-size: 1em;
	padding: 0.75em 1.25em;
	cursor: pointer;
	transition: background-color 100ms;

	&:hover {
		background: color(primary, 700);
	}
	&:active {
		background: color(primary, 900);
	}
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
	transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
	position: absolute;
}
</style>
