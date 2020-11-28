class Paper {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y, (r-20)/2, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill(255,0,255);
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  };
  