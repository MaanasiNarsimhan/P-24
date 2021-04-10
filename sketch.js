const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron1 = new ironClass(900, 550)
    stone1 = new stoneClass(800,550)

    rubber1 = new Rubber(900,550,70)
    hammer = new Hammer(10,100);   

}

function draw(){

    background("lightBlue");
    Engine.update(engine);

    stone1.display();
    plane.display();

    rubber1.display();
    iron1.display();
    hammer.display();
 
}