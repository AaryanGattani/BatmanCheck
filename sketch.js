var Man
var Drop;
var engine,world;
var drop;
var drops=[];

function preload()
{
  dropIMG = loadImage("BlueCircle.png");
  T1 = loadImage("1.png");
  T2 = loadImage("2.png");
  T3 = loadImage("3.png");
  T4 = loadImage("4.png");
  M1 = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")

}

function setup()
{
  canvas = createCanvas(800, 800);
  man = createSprite(200,600,55,55)
  man.addAnimation("M1",M1);
  engine=Matter.Engine.create()
  world=engine.world

  Man=Matter.Bodies.rectangle(200,600,55,55,{isStatic:true});
  Matter.World.add(world,Man);
  
  
  //Matter.Engine.run();
    
}

function draw()
{
    background(0);
   Matter.Engine.update(engine)
    

if(frameCount % 100 == 0)
{
  thunder = createSprite(random(20,700),50)
  thunder.lifetime=20;
  select = Math.round(random(1,4))
  console.log(select);

  switch(select)
  {
    case 1 : thunder.addImage("T1",T1);
    console.log("Good!")
    break;
    case 2 : thunder.addImage("T2",T2);
    break;
    case 3 : thunder.addImage("T3",T3);
    break;
    case 4 : thunder.addImage("T4",T4);
    break;
  }
}  

  if(frameCount % 100 == 0 )
  {    
    for (i = 0; i<100; i++)
    {
     Drop=Matter.Bodies.circle(random(20,780),0,10,{isStatic:false});
     Matter.World.add(world,Drop);
     drops.push(Drop)
    }
   
  }

man.x=Man.position.x;
man.y=Man.position.y;

drawSprites();

for (i = 0; i<100; i+=50)
{
  ellipseMode(RADIUS)
  ellipse(drops[i].position.x,drops[i].position.y,10,10);
}

}   

