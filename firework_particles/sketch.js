let particle;

function setup() {
  createCanvas(600, 500);
  particle = new Particle(width/2, height/2, 2, 150, 1);
  angleMode(DEGREES)
}

function draw() {
  background(100);

  particle.update();

}
