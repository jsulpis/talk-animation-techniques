varying vec2 vUv;

void main() {
   vUv = position.xy;
   gl_Position = vec4(position, 1.0);
}
