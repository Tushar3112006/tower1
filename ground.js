class Ground{
    constructor() {
        var groundOptions = {
            isStatic : true
        }
        this.body = Bodies.rectangle(450, 390, 900, 20, groundOptions);
       
        World.add(world, this.body);
      }
      display(){
        
       
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y,900,20);
        
      }
}