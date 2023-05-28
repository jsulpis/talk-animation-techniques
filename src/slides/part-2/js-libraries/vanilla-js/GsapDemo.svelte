<!-- https://codepen.io/GreenSock/pen/AWQprN -->
<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	/*
	Made possible by GreenSock Animation Platform (GSAP).
	https://www.greensock.com/gsap-js/
	*/

	const threeDTimeline = gsap.timeline({}); //onUpdate allows the slider to stay in sync as animation plays
	// threeDTimeline.timeScale(1.5);

	onMount(() => {
		var trans3DDemo = document.querySelector("#trans3DDemo"),
			trans3DBoxes = document.querySelector("#trans3DBoxes"), // div containing all the orange boxes
			boxes = Array.from(document.querySelectorAll("#trans3DBoxes div")); // all orange boxes

		//transformPerspective gives the element its own vanishing point
		//perspective allows all the child elements (orange boxes) to share the same vanishing point with each other
		//transformStyle:"preserve3d" allows the child elements to maintain their 3D position (noticeable only when their parent div is rotated in 3D space)
		gsap.set(trans3DBoxes, {
			transformPerspective: 400,
			transformStyle: "preserve-3d",
		}); //saves a dozen lines of vendor-prefixed css ;)

		//fade in demo, rotate the div containing all the boxes, and add a label 0.2 seconds after the rotation
		threeDTimeline
			.fromTo(
				trans3DDemo,
				{ autoAlpha: 0 },
				{ autoAlpha: 1, immediateRender: true }
			)
			.to(trans3DBoxes, { rotationY: 30, rotationX: 20, duration: 0.3 })
			.add("z", "+=0.2"); //add label "z" for placement of next group of tweens

		//loop through each element in boxes object and give it a unique and random animation along the z-axis
		boxes.forEach(function (element, index) {
			threeDTimeline.to(
				element,
				{ z: "random(-100, 100)", duration: 0.2 },
				"z"
			); //place each z-tween of each box at the label "z"
		});

		//rotate the group of boxes around a few more times
		threeDTimeline
			.to(
				trans3DBoxes,
				1,
				{ rotationY: 180, z: -180, ease: "power2.easeOut" },
				"+=0.2"
			)
			.to(trans3DBoxes, 1, { rotationX: 180, z: -10 });

		//random explosion effect
		boxes.forEach(function (element, index) {
			threeDTimeline.to(
				element,
				{
					duration: 1,
					z: 200,
					backgroundColor: () =>
						"#" + Math.floor(Math.random() * 16777215).toString(16),
					rotationX: "random(-360, 600)",
					rotationY: "random(-360, -600)",
					autoAlpha: 0,
				},
				"explode"
			);
		});
	});

	function onPlay() {
		if (threeDTimeline.progress() === 1) {
			threeDTimeline.restart();
		} else {
			threeDTimeline.play();
		}
	}
</script>

<article>
	<button on:click={onPlay}>Rejouer</button>
	<div id="trans3DDemo">
		<div id="trans3DBoxes">
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
</article>

<style lang="scss">
	button {
		padding: 0.5em 0.8em;
		background: white;
		border: 0.1em solid color(gray, 400);
		font-size: 0.6rem;
		border-radius: 0.25em;
		cursor: pointer;
		transition: background-color 100ms;

		&:hover {
			background: color(gray, 100);
		}

		&:active {
			background: color(gray, 200);
		}
	}

	article {
		position: relative;
		height: 50vh;
		width: 100%;
		display: grid;
		place-items: center;
	}

	#trans3DDemo {
		opacity: 0;
		width: 10rem;
	}

	#trans3DBoxes div {
		position: relative;
		width: 2.5rem;
		height: 2.5rem;
		background-color: #f60;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
		border: solid 2px #fff;
		display: inline-block;
	}
</style>
