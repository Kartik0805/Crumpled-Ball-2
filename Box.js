class Box{
    constructor(x, y) {
        this.x = x
        this.y = y
        this.boxwidth = 200
        this.boxheight = 100
        this.thickness = 20
        this.angle = 0
        this.image = loadImage("dustbingreen.png")
        this.bottembody = Bodies.rectangle(this.x, this.y, this.boxwidth, this.thickness, {isStatic:true});
        this.leftbody = Bodies.rectangle(this.x-this.boxwidth/2, this.y-this.boxheight/2, this.thickness, this.boxheight+100, {isStatic:true});
        this.rightbody = Bodies.rectangle(this.x+this.boxwidth/2, this.y-this.boxheight/2, this.thickness, this.boxheight+100, {isStatic:true});
        Matter.Body.setAngle(this.leftbody,this.angle)
        Matter.Body.setAngle(this.rightbody,-1*this.angle)
        World.add(world, this.bottembody)
        World.add(world, this.leftbody)
        World.add(world, this.rightbody)
      }
      display(){
        push();
        translate(this.bottembody.position.x, this.bottembody.position.y);
        rectMode(CENTER);
        fill("Orange");
        imageMode(CENTER)
        image(this.image, 0, -this.boxheight/2, this.boxwidth, this.boxheight+100);
        pop();
        push();
        translate(this.leftbody.position.x, this.leftbody.position.y);
        rotate(this.angle)
        rectMode(CENTER);
        fill("Orange");
        //rect(0, 0, this.thickness, this.boxheight);
        pop();      
        push();
        translate(this.rightbody.position.x, this.rightbody.position.y);
        rectMode(CENTER);
        rotate(-1*this.angle)
        fill("Orange");
        //rect(0, 0, this.thickness, this.boxheight);
        pop();      
      }
}