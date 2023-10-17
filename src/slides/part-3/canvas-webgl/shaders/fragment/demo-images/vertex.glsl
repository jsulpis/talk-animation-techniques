/**
* Shader by Michal Zalobny
* https://github.com/michalzalobny/creative-bay/blob/main/src/containers/projects/ImageTransitions/transitionShaders/s2/vertex.glsl
*/
varying vec2 vUv;

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	vUv = uv;
}
