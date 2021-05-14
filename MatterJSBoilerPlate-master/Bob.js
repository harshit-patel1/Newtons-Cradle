  
class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      fill(255);
      circle(pos.x, pos.y, this.radius*2);
      pop();
    }
  };