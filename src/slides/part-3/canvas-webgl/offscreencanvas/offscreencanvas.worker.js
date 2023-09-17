import fragmentShader from "../shaders/fragment/demo-box/fragment.glsl";
import vertexShader from "../shaders/fragment/demo-box/vertex.glsl";

const main = function (data) {
	const { canvas } = data;

	const gl = canvas.getContext("webgl");

	// Geometry
	const vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(
		gl.ARRAY_BUFFER,
		new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]),
		gl.STATIC_DRAW
	);

	vertexBuffer.itemSize = 3;
	vertexBuffer.numItems = 4;

	const buildShader = function (shaderSource, typeOfShader) {
		const shader = gl.createShader(typeOfShader);
		gl.shaderSource(shader, shaderSource);
		gl.compileShader(shader);
		return shader;
	};

	const compiledVertexShader = buildShader(
		"attribute vec3 position;" + vertexShader,
		gl.VERTEX_SHADER
	);
	const compiledFragmentShader = buildShader(
		"precision mediump float;" + fragmentShader,
		gl.FRAGMENT_SHADER
	);

	// Setup GLSL program
	const program = gl.createProgram();
	gl.attachShader(program, compiledVertexShader);
	gl.attachShader(program, compiledFragmentShader);
	gl.linkProgram(program);
	gl.useProgram(program);

	// Draw
	const positionLocation = gl.getAttribLocation(program, "position");
	gl.enableVertexAttribArray(positionLocation);
	gl.vertexAttribPointer(
		positionLocation,
		vertexBuffer.itemSize,
		gl.FLOAT,
		false,
		0,
		0
	);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexBuffer.numItems);

	// Update the time uniform
	const timeUniformLocation = gl.getUniformLocation(program, "uTime");

	requestAnimationFrame(function animate() {
		requestAnimationFrame(animate);

		gl.uniform1f(timeUniformLocation, performance.now() / 700);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	});
};

const handlers = {
	main,
};

self.onmessage = function (e) {
	const fn = handlers[e.data.type];
	if (typeof fn !== "function") {
		throw new Error("no handler for type: " + e.data.type);
	}
	fn(e.data);
};
