var PLAY = 1;
var END = 0;

var gameState = PLAY;

var score;

var player, playerImg, punch0;

var claimSound, jump;

var collidedSound, collided;

var block1Group, block2Group, block3Group, block4Group,block5Group;

var virusImage,alien1,alien2,virusGroup;

var edges;

function preload(){
  
  virusImage = loadAnimation("alien1.png","alien2.png");
 
  playerImg = loadImage("punch0.jpg");
  
  claimSound = loadSound("jump.wav");
  
  collidedSound = loadSound("collided.wav");
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  block1Group = new Group();
  block2Group = new Group();
  block3Group = new Group();
  block4Group = new Group();
  block5Group = new Group();
  
  virusGroup = new Group();

  player = createSprite(width/2,height/1.09,20,20);
  player.addImage(playerImg);
  player.scale = 0.3;
  //player.shapeColor = "red"; 
  
  score = 0;
  
}

function draw() {
  
  background("rgb(15,13,16)");
  
  fill("white");
  textSize(15);
  text("Score: "+score,width/1.14,height/20);
  
  fill("white");
  textAlign(CENTER);
  text("Move the player with your arrow keys",width/1.9,height/20);
  text("If you will punch yellow box you will get 1 score", width/7, height/26);
  text("If you will punch light blue box you will get 2 score", width/6.8, height/14.1);
  text("If you will punch orange box you will get 3 score", width/7, height/10);
  text("If you will punch dark blue box you will get 4 score", width/6.8, height/7.5);
  text("If you will punch purple box you will get 5 score", width/7.1, height/6);
  text("Your speed will increase at every 10 score",width/1.9,height/12);
  text("Be safe from virus", width/1.91, height/8.5);

  if(gameState === PLAY){
      
    
  if(keyDown("RIGHT_ARROW")){
     
    player.velocityX = (3 + 2*score/10)
    
     }
  
  if(keyDown("LEFT_ARROW")){
     
    player.velocityX = -(3 + 2*score/10);
    
     }
  
  if(player.isTouching(block1Group)){
     
     score = score+1;
    
      block1Group[0].destroy();
    
    claimSound.play();
    
     }
  
  
  if(player.isTouching(block2Group)){
     
     score = score+2;
    
     block2Group[0].destroy();
    
     claimSound.play();
    
     }
  
  if(player.isTouching(block3Group)){
     
     score = score+3;
    
      block3Group[0].destroy();
    
      claimSound.play();

     }
  
  
  if(player.isTouching(block4Group)){
     
     score = score+4;
    
     block4Group[0].destroy();
    
    claimSound.play();

     }
  
  
  if(player.isTouching(block5Group)){
     
     score = score+5;
    
     block5Group[0].destroy();
    
     claimSound.play();
    
     }
    
    if(player.isTouching(virusGroup)){
      
      gameState = END;
    
      collidedSound.play();

     }
  
    edges = createEdgeSprites();
    player.bounceOff(edges);
  
    fallBlock1();
    fallBlock2();
    fallBlock3();
    fallBlock4();
    fallBlock5();

    virus();
    
      }
  
  if(gameState === END){
     
    block1Group.destroyEach();
    block2Group.destroyEach();
    block3Group.destroyEach();
    block4Group.destroyEach();
    block5Group.destroyEach();

    virusGroup.destroyEach();
        
    player.destroy();
    
    fill("red");
    textSize(30);
    textAlign(CENTER);
    text("Game over! Better luck next time ",width/1.9,height/2);
     }
  
  drawSprites();
  
}

function fallBlock1(){
  
  if (frameCount % 100 === 0) {
    var block1 = createSprite(200,height/2500,40,40);
    block1.shapeColor = "yellow";
    
    block1.x = Math.round(random(1,width/1.14));
    
    block1.velocityY = (3 + 2*score/10);
    
    //assign lifetime to the variable
    block1.lifetime = 300;
    
    block1Group.add(block1);
    
  }
}

function fallBlock2(){
  
  if (frameCount % 200 === 0) {
    var block2 = createSprite(200,height/2500,40,40);
    block2.shapeColor = "cyan";
    block2.x = Math.round(random(2,width/1.14));
    block2.velocityY = (3 + 2*score/10);
    
     //assign lifetime to the variable
    block2.lifetime = 300;
    
    block2Group.add(block2);
    
  }
}

function fallBlock3(){
  
  if (frameCount % 300 === 0) {
    var block3 = createSprite(200,height/2500,40,40);
    block3.shapeColor = "orange";
    block3.x = Math.round(random(3,width/1.14));
    block3.velocityY = (3 + 2*score/10);
    
     //assign lifetime to the variable
    block3.lifetime = 300;
    
    block3Group.add(block3);
    
  }
}

function fallBlock4(){
  
  if (frameCount % 400 === 0) {
    var block4 = createSprite(200,height/2500,40,40);
    block4.shapeColor = "blue";
    block4.x = Math.round(random(4,width/1.14));
    block4.velocityY = (3 + 2*score/10);
    
     //assign lifetime to the variable
    block4.lifetime = 300;
    
    block4Group.add(block4);
    
  }
}

function fallBlock5(){
  
  if (frameCount % 500 === 0) {
    var block5 = createSprite(200,height/2500,40,40);
    block5.shapeColor = "purple";
    block5.x = Math.round(random(5,width/1.14));
    block5.velocityY = (3 + 2*score/10);
    
     //assign lifetime to the variable
    block5.lifetime = 300;
    
    block5Group.add(block5);
    
  }
}

function virus(){
  
  if (frameCount % 250 === 0) {
    var virus = createSprite(200,height/2500,20,20);
    virus.addAnimation("abc",virusImage);
    virus.x = Math.round(random(6,width/1.14));
    virus.velocityY = (3 + 2*score/7);
    
    virus.lifetime = 300;
    
    virusGroup.add(virus);
    
  }
}