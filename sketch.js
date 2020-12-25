
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(50,350,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.12;
  
  ground=createSprite(20,390,900,10);
  ground.x=ground.width/2;
  
  FoodGroup= new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  
  food();
  obstaclefunction();
  
  if(keyWentDown("space") && monkey.y >=340){
    monkey.velocityY=-18;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE:" + score,200,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,50,50);
}

function food(){
  if(frameCount%80===0){
  banana=createSprite(400,10,10,10);
  banana.addImage("banana", bananaImage);
  banana.y=Math.round(random(120,200));
  banana.scale=0.1;
  banana.velocityX=-5;
  FoodGroup.add(banana);
}
}

function obstaclefunction(){
  if(frameCount%300===0){
  obstacle=createSprite(400,370,10,10);
  obstacle.addImage("banana", obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-5;
  obstacleGroup.add(obstacle);
}
}




