class Bob {
    constructor(x, y,diameter) {   
      var options = {
        //  isStatic : true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y,this.diameter,options);
      this.diameter = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
        ellipseMode(CENTER);           
      ellipse(0, 0, this.diameter);
      pop();
    }
  };