function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(5);
    let gridSize = windowWidth/10;
    
    for (let x = -gridSize; x <= width + gridSize; x += gridSize) {
      for (let y = -gridSize; y <= height + gridSize; y += gridSize) {
        let distance = dist(x, y, mouseX, mouseY);
        let lineLength = gridSize;
        
        if (distance < 700) {
          push();
          translate(x, y);
          let angle = atan2(mouseY - y, mouseX - x);
          let stretch = map(distance, 0, 100, 1.5, 0.5);
          rotate(angle);
          drawLine(-lineLength * stretch, lineLength * stretch);
          pop();
        } else {
          push();
          translate(x, y);
          drawLine(0, lineLength);
          pop();
        }
      }
    }
  }
  
  function drawLine(start, end) {
    stroke(255,255,255);
    line(start/10, 0, end/28, 0);
  }
  