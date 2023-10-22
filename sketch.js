
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
let ball2;
function preload()
{
	
}

function setup() {
	createCanvas(1100, 565.6);
	
	

	engine = Engine.create();
	world = engine.world;


	ball2_options = {
		restitution:0.1
	}

	//Create the Bodies Here.
	ball = new Ball(150,30,30)
	ground = new Ground(400,490,2300,30)
	wall1 = new Ground(1000,405,10,135)
	wall2 = new Ground(850,405,10,135)
	ball2 = Bodies.circle(260,20,30,ball2_options)
	World.add(world,ball2);

	Engine.run(engine);
	
	
	
}


function draw() {
rectMode(CENTER);
ellipseMode(RADIUS);
  background(53);
  //ball.display();
  ground.display();
  wall1.display();
  wall2.display();
  ellipse(ball2.position.x,ball2.position.y,30,30);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball2,ball2.position,{x:0.1,y:-0.2})
	}
}


