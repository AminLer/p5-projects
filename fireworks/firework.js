function Firework(){
  this.pos = createVector(random(10, width-10), random(height, height*3));
  this.r = 20;
  this.vel = createVector(0, 0);
  this.accl = createVector(0, -8);
  this.gravity = createVector(0, 0.05);
  this.update = function(){
    this.vel.add(this.accl);
    this.pos.add(this.vel);
    this.accl.mult(0);
    if(this.pos.y < height*1.5) this.vel.add(this.gravity);
    this.bondery();
  }

  this.bondery = function(){
    if(this.vel.y > -1){
      return true;
    }
  }


  this.show = function(){
    fill(255, 0, 100, 255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r/3, this.r/1.7);
    ellipse(this.pos.x, this.pos.y+this.r/2, this.r/5, this.r/4);
    ellipse(this.pos.x, this.pos.y+this.r*(0.74), this.r/7, this.r/6);
    ellipse(this.pos.x, this.pos.y+this.r*(0.94), this.r/7, this.r/6);
  }
}
