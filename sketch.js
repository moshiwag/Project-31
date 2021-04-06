const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops; 

function preload(){
    //walkingImage = loadImage("")
}

function setup(){

    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    var maxDrops = 100;
    for (var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
}

function draw(){
    drops.display();
    
}   

