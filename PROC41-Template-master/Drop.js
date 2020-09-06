class Drop {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction: 0.1,
          restitution: 1.75
      }
    
    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

     display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        ellipse(pos.x, pos.y, this.width, this.height);

        if(this.body.position.y > random(600,900)){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:0})
        }
     }


}
    