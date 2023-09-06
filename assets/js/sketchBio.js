let gradientColors = [];
let circlePos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  gradientColors = [color(255, 250, 252, 100), color(223, 240, 255, 100), color(255, 253, 223, 150)];
  circlePos = createVector(width / 2, height / 2);
}

function draw() {
  let xOffset = map(mouseX, 0, width, -50, 10);
  let yOffset = map(mouseY, 0, height, -10, 10);
  drawGradient(xOffset, yOffset, width, height, gradientColors);

  let mousePos = createVector(mouseX, mouseY);
  let diff = p5.Vector.sub(mousePos, circlePos);
  circlePos.add(diff.mult(0.2));

  fill(175);
  ellipse(circlePos.x, circlePos.y, 40);
}

function drawGradient(x, y, w, h, colors) {
  noFill();
  for (let i = 0; i <= w; i++) {
    let inter = map(i, 0, w, 0, 1);
    let c = lerpColor(colors[0], colors[2], inter);
    stroke(c);
    line(i + x, y, i + x, y + h);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
