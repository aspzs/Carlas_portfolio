// const S = 15, C = 0, E = 40, M = 0.3;
// let L = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', '-1');
//   for (let x = 0; x < width; x += S)
//     for (let y = 0; y < height; y += S) {
//       const a = random(TWO_PI);
//       L.push({ s: createVector(x, y), e: createVector(x + cos(a) * S, y + sin(a) * S) });
//     }
// }

// function draw() {
//   background(255);
//   L.forEach(({ s, e }) => {
//     strokeWeight(random(M));
//     stroke(C);
//     line(s.x, s.y, e.x, e.y);
//   });
//   fill(170);
//   ellipse(mouseX, mouseY, E);
// }

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', '-1');  background(255);
  stroke(0);
}

function draw() {
  let x1 = random(width);
  let y1 = random(height);
  let x2 = x1 + random(-20, 20);
  let y2 = y1 + random(-20, 20);

  let gray = random(100, 255); // Escala de grises

  stroke(gray);

  line(x1, y1, x2, y2);
  line(x1+2, y1+1, x2, y2);
  line(x1, y1, x2+2, y2+2);
}
function mouseMoved() {
  background(255); // Limpia el fondo en cada movimiento del mouse
  fill(150);
  ellipse(mouseX, mouseY, 20, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

