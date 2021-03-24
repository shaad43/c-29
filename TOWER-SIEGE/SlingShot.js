class Slingsholt{
    constructor(bodyA, pointB){
        var option = {
             bodyA: bodyA,
             pointB: pointB,
             stiffness: 0.04,
             length: 1
        }
        this.sling = Constraint.create(options);
        this.sling.pointB = pointB
        world.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.body){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}