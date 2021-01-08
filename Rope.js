class Rope{
    constructor(bodyA,body2,offsetX,offesetY){
        this.offsetX=offsetX
        this.offsetY=offsetY 
        var options={
            bodyA:bodyA,
            bodyB:body2,
          pointB:{x:offsetX, y:offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;
            push();
            stroke(48,22,8);
                strokeWeight(7);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }

}

