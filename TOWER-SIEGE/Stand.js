class Stand{
    constructor(x, y, width, hheight){
        var option= {
            isStatic:true
        }
        this.body = Bodies.rectangle(x , y, width, height, options);
        this.width = width;
        this.height = height;
        world.add(world, this.body);
    }
    display(){
        var angle = this.body,angle;
        Push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height); 
        pop();
        }
}