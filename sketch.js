const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var ground;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;  
}

function draw() {
  background(255,255,255);  
  for(var i=0; i< boxes.length; i=i+1) {
    drops[i].display();
    }
    if (mouseY < 350) {
      // Every time a mouse press occures create a new box.
      drops.push(new Drop(random(800,400),random(2,5),random(15,30)));
  }
  drawSprites();
}