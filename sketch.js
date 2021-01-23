const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob, roof, rope;
var bob2, rope2;
var bob3, rope3;
var bob4, rope4;
var bob5, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob = new Bob(400, 350, 40);
	bob2 = new Bob(600, 350, 40);
	bob3 = new Bob(200, 350, 40);
	bob4 = new Bob(800, 350, 40);
	bob5 = new Bob(0, 350, 40);
	roof = new Roof(400, 20, 800, 20);
	rope = new Rope(roof.body, bob.body);
	rope2 = new Rope(roof.body, bob2.body);
	rope3 = new Rope(roof.body, bob3.body);
	rope4 = new Rope(roof.body, bob4.body);
	rope5 = new Rope(roof.body, bob5.body);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(220);

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  drawSprites();
 
}



