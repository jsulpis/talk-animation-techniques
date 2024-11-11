precision highp float;

attribute vec3 position;
attribute float index;
uniform mat4 pMatrix;
uniform mat4 mvMatrix;
uniform float time;
varying vec4 vColor;

void main(void) {
	vColor = vec4(.0, .15, .3, cos(5. * time + 1. + index / (5. + 3. * sin(time / 40.))));
	vec4 mvPosition = mvMatrix * vec4(position, 1.0);
	gl_Position = pMatrix * mvPosition;
	gl_PointSize = 15.0 / length(mvPosition.xyz);
}
