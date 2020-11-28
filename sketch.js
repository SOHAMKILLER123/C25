
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
  ground=new Ground(800,690,1600,20)
  paper= new Paper(500,550,10);
  paper.scale=0.5 
	dustbin3 = new Dustbin(1400,620,100,100)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  paper.display();
  dustbin3.display();
  ground.display();
}
function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});
}
}