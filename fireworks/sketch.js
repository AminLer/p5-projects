let firework = [];
let firework2;
let length = 10;
let particle;
let particles = [];
function setup() {
  createCanvas(900, 600);
  for(let i = 0; i < length; i++){
    //particles = new Particle(0, 0, 0, 0, 0, 0);
    firework[i] = new Firework();
  }
}

function mousePressed(){
  //firework2 = new Firework();
  console.log("pressed");
}

function draw() {
  background(100, 50);
  for(let i = length-1; i >=0; i--){
    firework[i].show();
    firework[i].update();
    if(firework[i].bondery()){
      particles[i] = new Particle(firework[i].pos.x, firework[i].pos.y, 2, 40, 1, random(5))
      firework[i] = new Firework();
    }
    if(particles[i]) particles[i].update();
  }

  if(firework2){
      firework2.show();
      firework2.update();
      if(firework2.bondery()){
        particle = new Particle(firework2.pos.x, firework2.pos.y,2, 50, 1, random(0, 1));
        firework2 = new Firework();
      }
  }
  if(particle) particle.update();

}
