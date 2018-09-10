let firework;
function setup() {
  createCanvas(900, 600);
  firework = new Firework(width/2, height/2);
}

function draw() {
  background(100);
  firework.show();
}
