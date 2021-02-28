const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var backgroundImg;

function preload() {
  backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  var canvas = createCanvas(3000,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,500,1500,20);

  hero = new Hero(400,400,500,170);

  fly = new Fly(hero.body,{x:400,y:400});

  block1 = new Block(700,400,50,50);
  block11 = new Block(700,350,50,50);
  block12 = new Block(700,300,50,50);
  block13 = new Block(700,250,50,50);
  block14 = new Block(700,200,50,50);
  block15 = new Block(700,150,50,50);
  block2 = new Block(760,400,50,50);
  block21 = new Block(760,350,50,50);
  block22 = new Block(760,300,50,50);
  block23 = new Block(760,250,50,50);
  block3 = new Block(820,400,50,50);
  block31 = new Block(820,350,50,50);
  block32 = new Block(820,300,50,50);
  block33 = new Block(820,250,50,50);
  block34 = new Block(820,200,50,50);
  block35 = new Block(820,150,50,50);
  block36 = new Block(820,100,50,50);
  block4 = new Block(880,400,50,50);
  block41 = new Block(880,350,50,50);
  block42 = new Block(880,300,50,50);
  block43 = new Block(880,250,50,50);
  block44 = new Block(880,200,50,50);

  monster = new Monster(1100,400,200,200);

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  ground.display();

  hero.display();

  fly.display();

  block1.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block2.display();
  block21.display();
  block22.display();
  block23.display();
  block3.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block4.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();

  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

