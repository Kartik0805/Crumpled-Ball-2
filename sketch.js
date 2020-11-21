
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(1000, 600)
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
ball = new Ball(200,450,40)
box = new Box(800,520)
ground = new Ground(width/2,570,width,20)
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(235);
  
ball.display();
box.display();
ground.display();
}
function keyPressed(){
if(keyCode == UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10})
}
}