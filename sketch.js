const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var chain;
var polygon_img;
function preload(){

  polygon_img=loadImage("polygon.png");

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(697,200,250,10);

  hexagon=Bodies.circle(50,200,20)
  World.add(world,hexagon)
  
  chain = new Chain(hexagon,{x:150,y:200})
 
  //stack one
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //stack two
 //level two
 block24 = new Block(619,100,30,40);
 block25 = new Block(649,100,30,40);
 block26 = new Block(679,100,30,40);
 block27 = new Block(709,100,30,40);
 block28 = new Block(739,100,30,40);
//level three
block29 = new Block(649,85,30,40);
block30 = new Block(679,85,30,40);
block31 = new Block(709,85,30,40);
//level three
block32 = new Block(679,55,30,40)

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("yellow");
  block16.display();

  
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise")
  block29.display();
  block30.display();
  block31.display();
  fill("yellow")
  block32.display();
hexagon.display();
  

  imageMode(CENTER)
  image(hexagon_image,hexa.position.x,position.y,40,40)
  drawSprites();
}
