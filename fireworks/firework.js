function Firework(x, y){
  this.pos = createVector(x, y);
  this.r = 14;

  this.show = function(){
    fill(255, 0, 100);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r/3, this.r/2);
    ellipse(this.pos.x, this.pos.y, this.r/4);
    ellipse(this.pos.x, this.pos.y, this.r/6);
    ellipse(this.pos.x, this.pos.y, this.r/6);
  }
}
