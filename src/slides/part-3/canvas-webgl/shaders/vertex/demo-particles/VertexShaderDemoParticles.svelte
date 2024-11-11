<!-- https://codesandbox.io/p/devbox/webgl-points-vanilla-45xnpc -->
<script lang="ts">
	import { mat4 } from "gl-matrix";

	import { onMount } from "svelte";
	import vertexShaderSource from "./particlesVertex.glsl";

	let canvas;

	onMount(() => {
		const dpr = () => Math.min(window.devicePixelRatio, 2);
		canvas.width = window.innerWidth / 1.1;
		canvas.height = window.innerHeight / 1.1;

		// Set up WebGL
		const gl = canvas.getContext("webgl2");
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE);
		gl.clearColor(0, 0, 0, 0.0);

		// Create shaders
		const vertexShader = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vertexShader, vertexShaderSource);
		gl.compileShader(vertexShader);

		const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(
			fragmentShader,
			`precision highp float;

varying vec4 vColor;

void main(void){
    gl_FragColor = vColor;
} `,
		);
		gl.compileShader(fragmentShader);

		const vstatus = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
		if (!vstatus) {
			const infoLog = gl.getShaderInfoLog(vertexShader);
			console.error(`vert Shader compilation failed: ${infoLog}`);
		}
		const fstatus = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);
		if (!fstatus) {
			const infoLog = gl.getShaderInfoLog(fragmentShader);
			console.error(`Shader compilation failed: ${infoLog}`);
		}

		// Create program
		const program = gl.createProgram();
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);
		gl.useProgram(program);

		const status = gl.getProgramParameter(program, gl.LINK_STATUS);
		if (!status) {
			const infoLog = gl.getProgramInfoLog(program);
			console.error(`Program linking failed: ${infoLog}`);
		}

		// Set up geometry
		const count = 2000;
		const position = [];
		const indices = [];

		// Fibonacci sphere points
		function fibonacciSpherePoint(index: number, totalPoints: number) {
			const phi = Math.acos(1 - (2 * index) / totalPoints);
			const theta = Math.sqrt(totalPoints * Math.PI) * phi;

			const x = Math.cos(theta) * Math.sin(phi);
			const y = Math.sin(theta) * Math.sin(phi);
			const z = Math.cos(phi);

			return { x, y, z };
		}

		for (let i = 0; i < count; i++) {
			const { x, y, z } = fibonacciSpherePoint(i, count);
			position.push(x, y, z);
			indices.push(i);
		}

		const positionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);

		const positionAttributeLocation = gl.getAttribLocation(program, "position");
		gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(positionAttributeLocation);

		const indexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, indexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(indices), gl.STATIC_DRAW);

		const indexAttributeLocation = gl.getAttribLocation(program, "index");
		gl.vertexAttribPointer(indexAttributeLocation, 1, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(indexAttributeLocation);

		// Set up matrices
		const modelViewMatrix = mat4.create();
		const projectionMatrix = mat4.create();
		const modelViewMatrixLocation = gl.getUniformLocation(program, "mvMatrix");
		const projectionMatrixLocation = gl.getUniformLocation(program, "pMatrix");
		const timeLocation = gl.getUniformLocation(program, "time");

		// Set up initial camera position
		mat4.lookAt(modelViewMatrix, [0, 0, 2], [0, 0, 0], [0, 1, 0]);
		mat4.perspective(
			projectionMatrix,
			Math.PI / 2,
			canvas.width / canvas.height,
			0.1,
			10,
		);

		requestAnimationFrame(function render() {
			gl.clear(gl.COLOR_BUFFER_BIT);
			mat4.rotateY(modelViewMatrix, modelViewMatrix, 0.002);
			gl.uniformMatrix4fv(modelViewMatrixLocation, false, modelViewMatrix);
			gl.uniformMatrix4fv(projectionMatrixLocation, false, projectionMatrix);
			gl.uniform1fv(timeLocation, [performance.now() / 2000]);

			gl.drawArrays(gl.POINTS, 0, count);

			requestAnimationFrame(render);
		});

		window.addEventListener("resize", () => {
			canvas.width = window.innerWidth / 1.1;
			canvas.height = window.innerHeight / 1.1;
			gl.viewport(0, 0, canvas.width, canvas.height);

			mat4.perspective(
				projectionMatrix,
				Math.PI / 2,
				canvas.width / canvas.height,
				0.1,
				10,
			);
		});
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		margin-top: -10%;
	}
</style>
