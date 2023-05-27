<script setup>
import { ref } from "vue";
const activeComponent = ref("A");
</script>

<template>
	<div class="radios">
		<label>
			<input type="radio" v-model="activeComponent" value="A" /> Composant A
		</label>
		<label>
			<input type="radio" v-model="activeComponent" value="B" /> Composant B
		</label>
	</div>
	<Transition name="fade" mode="out-in">
		<div v-if="activeComponent === 'A'" class="card primary inert">A</div>
		<div v-else class="card secondary inert">B</div>
	</Transition>
</template>

<style lang="scss" scoped>
.radios {
	display: flex;
	gap: 3em;
	margin-bottom: 1rem;

	label {
		pointer-events: all;
		font-size: 1.5em;
	}

	input {
		position: relative;
		opacity: 1;
		margin-right: 1.5em;
		transform: scale(2);
	}
}

.card {
	width: 10rem;
}

.fade-leave-active,
.fade-enter-active {
	transition: opacity 0.5s var(--ease-out);
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
