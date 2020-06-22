var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
     
	ground3Sprite=createSprite(390, 650, 200,20);
	ground3Sprite.shapeColor=color(255,0,0)

	ground4Sprite = Bodies.rectangle(200, 650, 20, 100);
	ground4Sprite.shapeColor=color(255,0,0)

	
	ground5Sprite = createSprite(480, 590, 20, 100);
	ground5Sprite.shapeColor=color(255,0,0)

	ground6Sprite = createSprite(300, 590, 20, 100);
	ground6Sprite.shapeColor=color(255,0,0)
     

	engine = Engine.create();
	 world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	 World.add(world, packageBody);
	

	ground2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground2);

    ground3 = Bodies.rectangle(390, 650, 200, 20 , {isStatic:true} );
	 World.add(world, ground3);

	 ground4 = Bodies.rectangle(390, 650, 20, 100 , {isStatic:true} );
	 World.add(world, ground4);

	 ground5 = Bodies.rectangle(390, 650, 20, 100 , {isStatic:true} );
	 World.add(world, ground5);

	 ground6 = Bodies.rectangle(390, 650, 20, 100 , {isStatic:true} );
	 World.add(world, ground6);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



