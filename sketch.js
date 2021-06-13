const Engine = Matter.Engine,
   World = Matter.World,
//const Events = Matter.Events,
 Bodies = Matter.Bodies;

var bg;
var ground2;
var ground;
var snow;
var engine,world;
var snows = [];

function preload(){
  bg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,600,800,10);
}

function draw() {
  background(bg); 
  Engine.update(engine);

  ground.display();

  if(frameCount % 5 === 0){
    snows.push(new Snow(random(10,790),-50,50,50));
   }

  for (var l = 0; l < snows.length; l++) {
    snows[l].display();   
  }

  drawSprites();
}