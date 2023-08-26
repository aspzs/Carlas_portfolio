let canvas;
let spacing = 15; // Espaciado entre las líneas
let speed = 0.03; // Velocidad de movimiento de las líneas
let lines = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  generateLines();
}

function generateLines() {
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      lines.push({ x, y, angle: random(TWO_PI), distance: dist(x, y, width / 2, height / 2) });
    }
  }
}

function draw() {
  background(255);

  for (let i = 0; i < lines.length; i++) {
    let lineData = lines[i];
    let cosAngle = cos(lineData.angle);
    let sinAngle = sin(lineData.angle);
    let xOffset = cosAngle * spacing;
    let yOffset = sinAngle * spacing;
    strokeWeight(random(0, 0.3));
    stroke(0);
    line(lineData.x, lineData.y, lineData.x + xOffset, lineData.y + yOffset);

    // let distanceToMouse = dist(mouseX, mouseY, lineData.x, lineData.y);
    // if (distanceToMouse < lineData.distance) {
    //   let angle = atan2(lineData.y - mouseY, lineData.x - mouseX);
    //   let force = map(lineData.distance, 0, width / 2, 90, 0);
    //   let xRepel = cos(angle) * force;
    //   let yRepel = sin(angle) * force;
    //   strokeWeight(random(0, 2.1));
    //   stroke(241, 211, 159);
    //   line(lineData.x, lineData.y, lineData.x + xRepel, lineData.y + yRepel);
    // }

    // lineData.angle += speed;
  }
}
