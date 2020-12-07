
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclegroup
var survivalTime, ground
var score, myobstacle;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600, 400);
 
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(400, 370, 1500, 10);
  ground.velocityX = -2
  ground.x = ground.width/2
  
  foodGroup = createGroup();
  obstaclegroup = createGroup();
  
  
}


function draw() {
  background("white")
             
  if(keyDown("space")){
      monkey.velocityY = -12;  
    } 

   monkey.collide(ground);
      monkey.velocityY = monkey.velocityY + 0.8;
  
   if(ground.x<0){
     ground.x=ground.width/2
     }


  stroke("white");
  textSize(20);
  fill("white")
  text("Score: " + score, 300, 50);
  
  stroke("black");
  textSize("40");
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime,100, 50)

    
      if(foodGroup.isTouching(monkey)) {
      foodGroup.destroyEach();
      score = score+1
        

      
  obstaclegroup.setLifetimeEach(-1);
        
       
  }

      drawSprites();
     spawnfood();
     obstacles();
}
    
  
  function spawnfood(){
    if(frameCount % 80 === 0){
       var banana = createSprite(600, 145, 10, 10)
       banana.addImage(bananaImage);
      
      banana.y = Math.round(random(100, 300));
      banana.velocityX = -5;
      banana.lifetime = 500;
      banana.scale = 0.1
      
      
      foodGroup.add(banana);
       }
       
  }

  //Obstacles
function obstacles() {
  if (frameCount % 150=== 0){
    obstacle = createSprite(600,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
    obstacle.scale = 0.2 ;
     obstaclegroup.add(obstacle);
  }

}







