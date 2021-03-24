class Ground{

   constructor(){
       var Ground_options={
           inStatic : true
       }
            this.ground = Bodies.rectangle(450,390,900,20,Ground_options)
            World.add(world,this.ground);

   }
   isplay(){
       noStroke(); 
       fill(188,67,67);
       rectMode(CENTER);
       rect(this.ground.position.x,this.ground.position.y,900,20);
 }
