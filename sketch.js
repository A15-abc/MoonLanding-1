let ground;
let lander;
var lander_img;
var bg_img;
var ground_img;
var obgroup;
var ob1, ob2, ob3, ob4, ob5, ob6;


var vx = 0;
var g = 0.05;
var vy = 0;
var score = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  ground_img = loadImage("bg_sur.png")
  ob1 = loadImage("alien.png")
  ob2 = loadImage("astronaut.png")
  ob3 = loadImage("met.png")
  ob4 = loadImage("rocket.png")
  ob5 = loadImage("sat.png")
  ob6 = loadImage("ufo.png")
}



function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  ground = createSprite(500,700, 1000, 100)


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  
vy+=g
lander.velocityY = vy
lander.y = vy *100

  if (lander.isTouching(ground)){
    
    lander.collide(ground)
    vy = 0
  //fall down
  
  //lander.position.y+=vy;
 ;
  
  }
  
  lander.velocityY = 0
    lander.vy =0


    if(keyDown(RIGHT_ARROW)){
      lander.x = lander.x + 2
    }
     if(keyDown(LEFT_ARROW)){
      lander.x = lander.x - 2
    }
    
    if(keyDown(UP_ARROW)){
      lander.y = lander.y - 2
    }
     if(keyDown(DOWN_ARROW)){
      lander.y = lander.y + 2
    }

if (lander.y == 70){
  console.log("well-done!")
  score = score + 1
  
}

fill("white")
text("Score: "+round(score),800,60);

 
drawSprites()

}


