varying vec3 vPosition;

void main() {
	vec3 normal = normalize(cross(dFdx(vPosition.xyz), dFdy(vPosition.xyz)));
	vec3 viewDir = normalize(cameraPosition - vPosition);

  // ambient
	vec3 ambient = vec3(.2);

  // diffuse
	vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
	float lightIntensity = max(0.0, dot(lightDir, normal));
	vec3 lightColour = vec3(1.0, 1.0, 0.9);

	vec3 diffuse = lightIntensity * lightColour;

  // specular
	vec3 reflected = normalize(reflect(-lightDir, normal));
	float phongValue = max(0.0, dot(viewDir, reflected));
	phongValue = pow(phongValue, 32.0);

	vec3 specular = vec3(phongValue * 32.);

  // fresnel
	float fresnel = 1.0 - max(0.0, dot(viewDir, normal));
	fresnel = pow(fresnel, 2.0);

	specular *= fresnel;

  // combine lighting
	vec3 colour = vec3(1., 0., 0.) * (diffuse + ambient) + specular;

	// linear to sRGB
	colour = pow(colour, vec3(1.0 / 2.2));

	gl_FragColor = vec4(colour, 1.0);
}
