const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var backgroundImg,platform;
var ball, slingshot;

/*function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}
*/
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new ColourBox(700,320,50,50,"orange");
    box2 = new ColourBox(750,320,50,50,"green");
    box3 = new ColourBox(800,320,50,50,"orange");
    box4 = new ColourBox(850,320,50,50,"green");
    box5 = new ColourBox(900,320,50,50,"orange");
    box6 = new ColourBox(950,320,50,50,"green");
    box7 = new ColourBox(725,270,50,50,"orange");
    box8 = new ColourBox(775,270,50,50,"green");
    box9 = new ColourBox(825,270,50,50,"orange");
    box10 = new ColourBox(875,270,50,50,"green");
    box11 = new ColourBox(925,270,50,50,"orange");
    box12 = new ColourBox(745,220,50,50,"green");
    box13 = new ColourBox(795,220,50,50,"orange");
    box14 = new ColourBox(845,220,50,50,"green");
    box15 = new ColourBox(895,220,50,50,"orange");
    box16 = new ColourBox(775,170,50,50,"green");
    box17 = new ColourBox(825,170,50,50,"orange");
    box18 = new ColourBox(875,170,50,50,"green");
    box19 = new ColourBox(805,120,50,50,"orange");
    box20 = new ColourBox(855,120,50,50,"green");
    box21 = new ColourBox(825,70,50,50,"orange");


    ball = new Ball(100,100,20,"red");

    
    slingshot = new SlingShot(ball.body,{x:125, y:220});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    ground.display();
    

    ball.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}