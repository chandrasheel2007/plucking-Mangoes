
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraints = Matter.Constraint;

var tree, ground, bg;
var stone, boy, string;
var m1, m2, m3, m4, m5; 

function preload(){

	bg = loadImage("images/bg.jpg");
	boy = loadImage("images/boy.png");

	
}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree();
	ground = new Ground(width/2, 950, width);

	stone = new Stone(width/2, height/2);

	m1 = new Mango(1600, 250, 80, 80);
	m2 = new Mango(1500, 400, 100, 100);
	m3 = new Mango(1900, 480, 60, 60);
	m4 = new Mango(1700, 380, 90, 90);
	m5 = new Mango(1350, 420, 70, 70);

	string = new Rope({x: 280, y: 650}, stone);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);


  tree.display();
  ground.display();
  image(boy, 200, 520, 400, 500);

  stone.display();

  m1.display(80, 80);
  m2.display(100, 100);
  m3.display(60, 60);
  m4.display(90, 90);
  m5.display(70, 70);

  string.display();

  isTouching(stone, m1);
  isTouching(stone, m2);
  isTouching(stone, m3);
  isTouching(stone, m4);
  isTouching(stone, m5);
  
  
  drawSprites();
	push();
	
	textSize(30);
  	text("Press Space to get another turn to shoot", width/2-300, 950);
	pop();
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});


}

function mouseReleased(){

	string.fly();

}

function keyPressed(){

	if(keyCode===32){

		Matter.Body.setPosition(stone.body, {x: 100, y: 100});
		string.attach(stone);

	}

}

function isTouching(stone, mango){

	var distance = dist(stone.body.position.x, stone.body.position.y, mango.body.position.x, mango.body.position.y);
	if (distance<=stone.image.width/10+mango.image.width/10){

		Matter.Body.setStatic(mango.body, false);

	}
	

}



