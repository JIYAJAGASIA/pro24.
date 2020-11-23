
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground;
var dustbin1;
var Force;
function setup() {
	createCanvas(800, 700);
ground =createSprite(200,686,1300,10);
ground.shapeColor="yellow";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1= new paper(200,670,15,15);
    dustbin1= new dustbin(640,680,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground.display();
  dustbin1.display();

  drawSprites();
  keypressed();
}
function keypressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}


