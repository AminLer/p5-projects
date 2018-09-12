function Particle(x, y, min, max, s, xof){ // (x, y, startRadius, endRadius, spreadspeed)
  this.pos = createVector(x,y);
  this.r = min;
  this.spreadspeed = s;
  this.maxspread = max;
  this.stop = false;

  this.update = function(){
    if(!this.stop){
      this.explosion();
    }
    this.r+=this.spreadspeed;
  }
  let xr, yr, xoff, yoff;

  this.explosion = function(){
    xoff = xof;
    yoff = xof;
    for(let i = 0; i < 360; i+=5){
      xr = map(noise(xoff, yoff), 0, 1, x, x+sin(i)*this.r);
      yr = map(noise(xoff, yoff), 0, 1, y, y+cos(i)*this.r);
      this.pos.x = xr;
      this.pos.y = yr;
      this.show();
      xoff += 0.9;
      yoff += 0.9
    }
    if(this.r > this.maxspread && this.spreadspeed != 0) this.stop = true;//go back to start
  }

  this.show = function(){
    stroke(random(100,200), random(100,250), random(100,150));
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}
