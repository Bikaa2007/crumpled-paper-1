
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3;

function preload(){
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    


    rect1 = new Bucket(700,320,70,70);
    rect2 = new Bucket(920,320,70,70);
    rect3 = new Bucket(700,240,70,70);
    
  
    
}

function draw(){
    background(255);
    Engine.update(engine);
   
    rect1.display();
    rect2.display();
    rect3.display();
    
}
   