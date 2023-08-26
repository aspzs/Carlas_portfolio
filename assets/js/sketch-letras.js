var canvas;
let textos = ["film;", "-", "--", "2023", "Works works works works works works works works","•••"];
let tamanoLetras = [167, 24, 35, 28, 10,93]; // Tamaños de letra para cada texto
let distanciaEntreLetras = [60, 10, 20, 35, 20, 500]; // Distancias entre letras para cada texto
let coordenadasX = [50, 100, 100, 300, 350, 80]; // Ubicaciones horizontales de los textos
let coordenadasY = [170, 250, 300, 400, 100, 800]; // Ubicaciones verticales de los textos

let font;

function preload() {
  //font = loadFont('ruta/a/tu/fuente.ttf'); // Cambia 'ruta/a/tu/fuente.ttf' por la ubicación de tu fuente
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  //textFont(font); // Configura la fuente
}

function draw() {
  background(242);
  
  for (let j = 0; j < textos.length; j++) {
    let textoActual = textos[j];
    let tamanoLetra = tamanoLetras[j];
    let distanciaLetra = distanciaEntreLetras[j];
    let x = coordenadasX[j];
    let y = coordenadasY[j];
    
    for (let i = 0; i < textoActual.length; i++) {
      let distanciaMouse = dist(mouseX, mouseY, x, y);
      
      if (distanciaMouse < 50) {
        y -= 10;
      }
      
      textSize(tamanoLetra);
      textAlign(CENTER, CENTER);
      fill(0);
      text(textoActual.charAt(i), x, y);
      
      x += distanciaLetra; // Avanzar en la dirección horizontal con la distancia personalizada
    }
  }
}
