const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground ;
var stand1 ;
var stand2 ;
var block1,block2,block3,block4,block5,block6,block7;
var ball;

function preload() {
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground();
   stand1 = new Stand(390,300,250,10);
   stand2 = new Stand(700,200,200,10);
   
    block1 = new Box(300,275,30,40);
    block2= new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    




    ball = Bodies.circle(50,200,20);

    World.add(world,ball);

}

function draw(){
   
        background("black");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
//Engine.update(engine);
      ground.display();
      stand1.display();
      stand2.display();
      fill("yellow");
      block1.display();
      block2.display();
      block3.display();
      block4.display();
      block5.display();
      block6.display();
      block7.display();






      imageMode(CENTER);
      imag()


}

