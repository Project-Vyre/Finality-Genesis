#version 150

in vec4 vertexColor;

uniform vec4 ColorModulator;

out vec4 fragColor;

void main() {
    vec4 color = vertexColor;
    if (color.a == 0.0) {
        discard;
    }
    // top: 5000FF (0.3137, 0, 1, color.a) bottom: 28007F (0.1569, 0, 0.498, color.a)
    if (color.r == 16/255.0 && color.g == 0/255.0 && color.b == 16/255.0) {
        color = vec4(0.1608, 0.102, 0.0627, 0.95);
    }
    if (color.r >= 0.15686 && color.r <= 0.31373 && color.g == 0 && color.b >= 0.49 && color.b <= 1) {
        color = vec4(1, 0.9216, 0.549, 0.90);
    }
    fragColor = color * ColorModulator;
}