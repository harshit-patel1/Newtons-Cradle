
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, link1, link2, link3, link4, link5, ground, roof;

function setup() {
	var canvas = createCanvas(1280, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(480, 300, 40);
	bob2 = new Bob(560, 300, 40);
	bob3 = new Bob(640, 300, 40);
	bob4 = new Bob(720, 300, 40);
	bob5 = new Bob(800, 300, 40);
	link1 = new Link(bob1.body, {x : 480, y : 300});
	link2 = new Link(bob2.body, {x : 560, y : 300});
	link3 = new Link(bob3.body, {x : 640, y : 300});
	link4 = new Link(bob4.body, {x : 720, y : 300});
	link5 = new Link(bob5.body, {x : 800, y : 300});
	ground = new Ground(640, 650, 1280, 10);
	roof = new Ground(640, 300, 640, 10);
	Engine.run(engine);
  
}


function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-200, y: 0});
		console.log("flinged");
	}
}


function draw() {
///  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  link1.display();
  link2.display();
  link3.display();
  link4.display();
  link5.display();
  ground.display();
  roof.display();
}