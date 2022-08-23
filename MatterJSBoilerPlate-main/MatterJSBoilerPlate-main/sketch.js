var ball;
var ground;
var radius = 40;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 620);
  

	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}		
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world, ball); 
	
	Engine.run(engine);

	ground = new Ground(700,600,1400,20);
	rightside = new Ground(1250,510,20,160);
	leftside = new Ground(1000,510,20,160);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  rightside.show();
  leftside.show();
  ellipse(ball.position.x,ball.position.y,radius,radius)
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}

}




