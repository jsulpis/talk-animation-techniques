<!-- https://codepen.io/joshsalazar/pen/oNGBxgv -->
<script>
	import { onMount } from "svelte";
	import { gsap } from "gsap";
	import { loop } from "svelte/internal";

	// avoid warning for unknown prop
	let className;
	export { className as class };

	let container;

	const timeline = gsap.timeline({}); //onUpdate allows the slider to stay in sync as animation plays
	timeline.timeScale(0.5);

	onMount(() => {
		timeline.to("#AllBodyGroup", {
			keyframes: [
				{
					y: 100,
					scaleX: 1,
					scaleY: 1,
					duration: 0.1,
				},
				{
					y: 100,
					scaleX: 1.35,
					scaleY: 0.75,
					duration: 0.04,
					transformOrigin: "center bottom",
				},
				{
					y: 100,
					scaleX: 1.4,
					scaleY: 0.7,
					duration: 0.1,
					transformOrigin: "center bottom",
				},
				{
					y: 100,
					scaleX: 0.7,
					scaleY: 1.2,
					duration: 0.1,
					transformOrigin: "center bottom",
				},
				{
					y: 0,
					scaleY: 1,
					scaleX: 1,
					duration: 0.1,
				},
			],
			ease: "power2.inOut",
			repeat: -1,
		});

		timeline.to("#Hat", {
			keyframes: [
				{
					scaleY: 1.2,
					rotateZ: 20,
					transformOrigin: "center bottom",
					y: 100,
					duration: 0.2,
				},
				{
					scaleY: 0.8,
					rotateZ: 10,
					transformOrigin: "center bottom",
					y: 110,
					duration: 0.02,
				},
				{
					scaleY: 0.9,
					rotateZ: 5,
					transformOrigin: "center bottom",
					y: 110,
					duration: 0.02,
				},
				{
					scaleY: 0.9,
					rotateZ: -5,
					transformOrigin: "center bottom",
					y: 80,
					duration: 0.1,
				},
				{
					scaleY: 1,
					rotateZ: 0,
					transformOrigin: "center bottom",
					y: 0,
					duration: 0.1,
				},
			],
			ease: "power2.inOut",
			repeat: -1,
		});

		timeline.to("#LeftEye", {
			keyframes: [
				{
					y: -15,
					duration: 0.09,
				},
				{
					y: 3,
					duration: 0.05,
				},
				{
					y: 2,
					duration: 0.1,
				},
				{
					y: 5,
					duration: 0.1,
				},
				{
					y: 0,
					duration: 0.1,
				},
			],
			ease: "power2.inOut",
			repeat: -1,
		});

		timeline.to("#RightEye", {
			keyframes: [
				{
					y: -8,
					duration: 0.09,
				},
				{
					y: 3,
					duration: 0.05,
				},
				{
					y: 2,
					duration: 0.1,
				},
				{
					y: 5,
					duration: 0.1,
				},
				{
					y: 0,
					duration: 0.1,
				},
			],
			ease: "power2.inOut",
			repeat: -1,
		});

		timeline.to("#SmallEyeShineRight", {
			keyframes: [
				{
					duration: 0.1,
					x: 2,
					y: 2,
				},
				{
					duration: 0.1,
					x: 0,
					y: 0,
				},
			],
			repeat: -1,
		});

		timeline.to("#SmallEyeShineLeft", {
			keyframes: [
				{
					duration: 0.1,
					x: -2,
					y: 2,
				},
				{
					duration: 0.1,
					x: 0,
					y: 0,
				},
			],
			repeat: -1,
		});

		timeline.to("#BigEyeShineLeft", {
			keyframes: [
				{
					duration: 0.1,
					x: 1,
					y: -1,
				},
				{
					duration: 0.1,
					x: 0,
					y: 0,
				},
			],
			repeat: -1,
		});

		timeline.to("#BigEyeShineRight", {
			keyframes: [
				{
					duration: 0.15,
					x: -1,
					y: -1,
				},
				{
					duration: 0.15,
					x: 0,
					y: 0,
				},
			],
			repeat: -1,
		});
	});

	loop(() => {
		if (container.closest("section:not(.stack).present")) {
			timeline.play();
		} else {
			timeline.pause();
		}
		return true;
	});
</script>

<div bind:this={container} class="svg-container">
	<svg
		version="1.1"
		id="Layer_1"
		x="0px"
		y="0px"
		viewBox="0 0 237.05 322.44"
		preserveAspectRatio="xMinYMin meet"
	>
		<g id="AllBodyGroup">
			<g id="Body">
				<circle id="BodyBase" class="st0" cx="140" cy="102.98" r="64.33" />
				<circle id="BodyLight" class="st1" cx="133.1" cy="104.16" r="46.67" />
			</g>
			<g id="LeftEye">
				<circle
					id="EyeBaseRight_00000138570641561815964600000007664720743631060924_"
					class="st2"
					cx="157.71"
					cy="92.59"
					r="17.71"
				/>
				<circle
					id="PupilRight_00000002366735156703226120000008972240633418662560_"
					class="st3"
					cx="162.38"
					cy="89.35"
					r="11.05"
				/>
				<circle
					id="BigEyeShineLeft"
					class="st2"
					cx="166.47"
					cy="83.17"
					r="4.08"
				/>
				<circle
					id="SmallEyeShineLeft"
					class="st2"
					cx="162.78"
					cy="89.87"
					r="1.61"
				/>
			</g>
			<g id="RightEye">
				<circle id="EyeBaseRight" class="st2" cx="186.59" cy="82.99" r="12.4" />
				<circle id="PupilRight" class="st3" cx="190.08" cy="80.49" r="7.42" />
				<circle
					id="BigEyeShineRight"
					class="st2"
					cx="192.93"
					cy="76.24"
					r="2.85"
				/>
				<circle
					id="SmallEyeShineRight"
					class="st2"
					cx="190.35"
					cy="80.84"
					r="1.08"
				/>
			</g>
			<path
				id="Mouth"
				class="st3"
				d="M162.85,115.61c-0.01,5.37,15.72,25.92,25.24,17.82c8.08-6.87,8.7-32.6,4.01-34.98
	c-3.1-1.58-4.66,4.07-9.88,8.78C175.6,113.19,162.85,110.52,162.85,115.61z"
			/>
		</g>

		<g id="Hat">
			<path
				id="HatRed"
				class="st4"
				d="M148.1,36.37c0,0-8.32-29.73-45.66-35.6S40.84,24.4,40.84,24.4c1.05,3.36,3.53,7.09,5.26,6.47
		c1.73-0.61,32.18-16.78,42.01,0.56c7.53,13.27,3.21,21.13-1.67,28.33c-2.46,3.63,16.88,4.72,16.88,4.72l44.7-19.5L148.1,36.37z"
			/>
			<path
				id="HatBase"
				class="st2"
				d="M128.17,47.91c-7.07,2.89-9.69,7.35-9.69,7.35s-4.76-4.3-11.8-1.81
		c-7.04,2.49-8.69,6.07-8.69,6.07s-4.32-4.55-9.59-3.02c-4.23,1.23-9.79,4.11-9.67,11.22c0.08,4.63,4.51,10.87,9.39,9.62
		c5.94-1.52,9.37-4.16,9.37-4.16s1.86,4.91,5.81,4.31c5.84-0.89,7.31-4.72,7.31-4.72s9.4,5.23,15.9,2.42c8-3.46,9.58-9.5,8.34-11.16
		c0,0,5.93,2.59,11.89-1.14c5.96-3.73,4.08-8.59,4.08-8.59s4.51-0.19,8.75-4.31c2.94-2.86,5.02-7.98,1.24-13.63
		c-1.73-2.59-8.11-6.23-14.02-2.35c-8.83,5.81-5.7,12.44-5.7,12.44S135.02,45.11,128.17,47.91z"
			/>
			<path
				id="PomPom"
				class="st2"
				d="M46.35,27.7c0,0-4.24-9.11-10.13-4.38c-4.2,3.38-3.91,5.45-2.79,6.78c1.12,1.33,2.68-0.5,2.68-0.5
		s0.05,2.94,1.78,4.17s4.9,2.43,6.83,1.2C46.66,33.74,48.1,31.38,46.35,27.7z"
			/>
		</g>
	</svg>
</div>

<style lang="scss">
	#BodyLighter {
		position: absolute;
		top: -50px;
	}

	.svg-container {
		margin-top: 20%;
		position: relative;
		width: 10em;
	}

	.st0 {
		fill: #5296a5;
	}
	.st1 {
		fill: lighten(#5296a5, 10%);
	}
	.st2 {
		fill: #ffffff;
	}
	.st3 {
		fill: #1f3454;
	}
	.st4 {
		fill: #9e3030;
	}

	#Hat .st2 {
		stroke: #1f3454;
	}

	h1 {
		font-family: "Kanit";
		font-size: 4rem;
		position: absolute;
		margin-top: 150px;
		text-align: center;
		width: 100%;
		color: #fff;
		font-weight: 700;
		text-shadow: 0 1px 0 #b53737, 0 2px 0 #ae3434, 0 3px 0 #a63232,
			0 4px 0 #9e3030, 0 5px 0 #962d2d, 0 6px 0 #8e2b2b, 0 7px 0 #862929,
			0 8px 0 #7f2626, 0 0 5px rgb(196 30 30 / 5%),
			0 -1px 3px rgb(196 30 30 / 20%), 0 9px 9px rgb(196 30 30 / 30%),
			0 12px 12px rgb(196 30 30 / 30%), 0 15px 15px rgb(196 30 30 / 30%);
	}

	#days {
		color: #b1cbbb;
	}
</style>
