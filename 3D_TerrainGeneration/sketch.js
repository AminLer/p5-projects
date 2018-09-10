let cols, rows;
let scl = 20;
let w = 500;
let h = 500;
let terrain = [];
function setup() {
  createCanvas(800, 600, WEBGL);
  rows = h/scl;
  cols = w/scl;
  let yoff = 0;
  for(let y = 0; y < rows; y++){
    let xoff = 0;
    terrain[y] = [];
    for(let x = 0; x < cols; x++){
      terrain[y][x] = map(noise(xoff, yoff), 0, 1, -50, 50);
      xoff += 0.1;
    }
    yoff += 0.1;
  }
}

function draw() {
  background(100);
  noFill();
  stroke(255);
  strokeWeight(1);
  rotateX(PI/3);
  translate(-w/2, -h/2);
  beginShape(TRIANGLE_STRIP);
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      //vertex((x+1)*scl, y*scl, terrain[y][x]);
      vertex(x*scl, y*scl, terrain[y][x]);
      vertex(x*scl, (y+1)*scl, terrain[y][x]);
      //endShape();
    }
  }
  endShape();
}
