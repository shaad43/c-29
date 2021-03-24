class Block{
     constructor(x,y, width, height){

        var options ={

         restitution :0.4,
         friction :0.0,
         //isstatic:true       

        }
        this.body =Bodise.rectangle(x,y,width,height,options);
        this.Width = width;
        this.height = height; 
        World.add(world, this.body);
  } 
  display(){
    var angle = this.body.angle;
    var pos= this.body.position;       
    Push();
    Translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTRE);
    rect(0,0,this.width, this.height);
    pop();
  }



}
