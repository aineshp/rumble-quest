var gamestate="level1";
var redscarf,ground,jumpred,redend;
var red1,ground1;
var jump,jump4;
var invisiblewall;
var batgroup,batimage;
var score;
var health;
var bg,bg1;
var key1,keygroup;
var over1,over2;
var box1,bboxs,wizard,wiz1;
var boxgroup,badgroup,boxgroup3,batgroup2,batgroup3,endbats,buttongroup,stonegroup;
var bg2,back,healthenemy;
var button1,stone1;


function preload(){
red1=loadAnimation("owl0.png","owl1.png","owl2.png","owl3.png","owl4.png","owl5.png");
jump=loadAnimation("jump0.png","jump1.png","jump2.png","jump3.png","jump4.png","jump5.png","jump6.png","jump7.png");
jump4=loadImage("jump6.png");
batimage=loadAnimation("bat0.png","bat1.png","bat2.png","bat3.png");
redend=loadAnimation("death0.png","death1.png","death2.png","death3.png","death4.png");
wiz1=loadAnimation("wizard01.png","wizard02.png","wizard03.png","wizard04.png")
ground1=loadImage("ground0.png");
bg1=loadImage("jungle.jpg");
key1=loadImage("key.png");
over2=loadImage("game over.png");
box1=loadImage("treasure0.png");
bbox=loadImage("treasure1.png")
bg2=loadImage("sky.png");
button1=loadImage("button.png");
stone1=loadImage("Prop_6.png");
}

function setup() {
  createCanvas(800,400);
score=0;
healthenemy=2;
health=10;
bg=createSprite(400,200,800,400);
bg.addImage("bg",bg1);
bg.scale=2.53;
back=createSprite(400,200,800,400);
back.addImage("back",bg2);
back.scale=2.8;
back.visible=false;
over1=createSprite(400,200,800,400);
over1.addImage("over1",over2);
over1.visible=false;
over1.scale=2;
  redscarf=createSprite(170,350,33,54);
  redscarf.addAnimation("redscarf",red1);
  redscarf.scale=2.2;
 
  ground=createSprite(400,380,1800,40);
  ground.addImage("ground",ground1);
ground.x=ground.width/2;
wizard=createSprite(650,320,50,50);
wizard.addAnimation("wizard",wiz1);
wizard.scale=0.3;
wizard.visible=false;
  



invisiblewall=createSprite(400,260,1000,20);
invisiblewall.visible=false;
batgroup=new Group();
keygroup= new Group();
boxgroup=new Group();
badgroup=new Group();
boxgroup3=new Group();
batgroup2=new Group();
endbats=new Group();
batgroup3=new Group();
buttongroup=new Group();
stonegroup=new Group();

}

function draw() {
  background("black");  
  ground.velocityX=-4;
  if(ground.x<300){
    ground.x=ground.width/2;
  }
 
  

if(redscarf.isTouching(batgroup)){
  batgroup.destroyEach();
  health=health-1;
}
if(health===0){
  //redscarf.addAnimation("redscarf",redend);
  //redscarf.changeAnimation("redscarf",redend);
  //redscarf.destroy();
  batgroup.destroyEach();
  keygroup.destroyEach();
}

  if(touches.length > 0 || keyWentDown("RIGHT_ARROW")){
    redscarf.velocityX=4;
    touches=[];

  }
  if(touches.length > 0  || keyWentUp("RIGHT_ARROW")){
    redscarf.velocityX=0;
    touches=[];

  }
  if(touches.length > 0  || keyWentDown("LEFT_ARROW")){
    redscarf.velocityX=-4;
    touches=[];

  }
  if(touches.length > 0  || keyWentUp("LEFT_ARROW")){
    redscarf.velocityX=0;
touches=[];
  }


  //if(redscarf.isTouching(invisiblewall)){
   // redscarf.addAnimation("redscarf",red1);
 // }
  redscarf.velocityY=redscarf.velocityY+0.9;
  //jumpred.velocityY=jumpred.velocityY+0.9;

  if(health===0){
    background("black");
    redscarf.destroy();
    ground.destroy();
    bg.visible=false;
    over1.visible=true;
  }

  redscarf.collide(ground);
 // jumpred.collide(ground);
console.log(redscarf.y);

  if(redscarf.isTouching(keygroup)){
    gamestate="level2";
  }
 
  if(gamestate==="level2"){
    background("black");
    bg.visible=false;
    back.visible=true;
    back.scale=2;
    ground.visible=false;
    keygroup.destroyEach();
    batgroup.destroyEach();
    //redscarf.destroy();
over1.visible=false;
    redscarf.x=World.mouseX;
    redscarf.y=World.mouseY;
    spawnbox();
    spawnbox2();

    if(redscarf.isTouching(badgroup)){
      badgroup.destroyEach();
    health=health-1;

    }
    if(redscarf.isTouching(boxgroup)){
      boxgroup.destroyEach();
      score+=1;
    }

    
if(health===0){
  boxgroup.destroyEach();
  badgroup.destroyEach();
  over1.visible=true;
  background("black");
}

if(score>=20){
  
  gamestate="level3";
}

    textSize(20);
  fill(random(255),random(255),random(255));
    textFont("OCR A");
    text("SCORE: "+score ,550,30);
  }
if(gamestate==="level3"){
  background("green");
  bg.visible=false;

  keygroup.destroyEach();
    batgroup.destroyEach();
    spawnbox3();
    spawnbat2();
  badgroup.destroyEach();



  redscarf.collide(ground);
  
 redscarf.x=World.mouseX;
  redscarf.velocityY=redscarf.velocityY+0.9;

  if(redscarf.isTouching(boxgroup3)){
    score+=1;
    boxgroup3.destroyEach();
  }

  if(redscarf.isTouching(batgroup2)){
    health=health-1;
    batgroup2.destroyEach();
  }

  if(score>=25){
    gamestate="level4";
    
  }

  ground.velocityX=0;
  ground.visible=true;
//redscarf.velocityX=0;
//redscarf.velocityY=0;
//redscarf.x=350;
  redscarf.y=320;

  if(health===0){
    background("blue");
    redscarf.destroy();
    ground.destroy();
    bg.visible=false;
    over1.visible=true;
    boxgroup3.destroyEach();
    batgroup2.destroyEach();
    back.visible=false;
    background("black");
  }

}

if(gamestate==="level4"){
  background("black");
  wizard.visible=true;
  bg.visible=false;
  back.visible=false;
  ground.velocityX=0;
  batgroup2.destroyEach();
  batgroup.destroyEach();
  keygroup.destroyEach();
  ground.visible=true;
  //over1.visible=true;
 spawnbat3();
 spawn3bats();
 spawnbutton();
 rollingstones();

redscarf.velocityY=redscarf.velocityY+0.8;
 if(redscarf.y>315 && keyDown("SPACE")){
   redscarf.velocityY=-8;
 }
if(redscarf.isTouching(endbats)){
  endbats.destroyEach();
  health=health-1;
}
if(redscarf.isTouching(batgroup3)){
 batgroup3.destroyEach();
  health=health-1;
}
 if(stonegroup.isTouching(wizard)){
   stonegroup.destroyEach();
   healthenemy=healthenemy-1;
 }
 if(healthenemy===0){
   stonegroup.destroyEach();
   buttongroup.destroyEach();
   batgroup3.destroyEach();
   endbats.destroyEach();
   wizard.destroy();
 }
if(health===0){
  stonegroup.destroyEach();
  buttongroup.destroyEach();
  batgroup3.destroyEach();
  endbats.destroyEach();
  wizard.destroy();
  redscarf.destroy();
  over1.visible=true;
}
redscarf.x=World.mouseX;


}
  drawSprites();

 textSize(20);
  fill(random(255),random(255),random(255));
    textFont("OCR A");
   text("SCORE:"+score,550,70);
   text("HEALTH "+ health,550,110);
  
console.log(redscarf.y);
  spawnbat();
  spawnkey();
  
}
function spawnbat(){
  if(frameCount%50===0){
   var bat=createSprite(131,10,40,10);
    bat.x=Math.round(random(0,400));
    bat.addAnimation("bat",batimage);
    bat.scale=1.5;
    bat.velocityY=7;
    bat.lifetime=300;
    batgroup.add(bat);
    
  }
    
  }
  function spawnkey(){

    if(frameCount%200===0){
      var key=createSprite(400,350,20,20);
      key.x=Math.round(random(0,400));
      key.addAnimation("key",key1);
      key.scale=0.3;
      key.lifetime=70;
      keygroup.add(key);
    }
  }
  function spawnbox(){
    if(frameCount%2===0){
    var box=createSprite(random(0,800),random(0,400),40,40);
    box.lifetime=30;
    box.addImage("box",box1);
    box.scale=0.2;
    boxgroup.add(box);

    }
  }
  function spawnbox2(){
    if(frameCount%10===0){
    var badbox=createSprite(random(0,800),random(0,400),100,100);
    badbox.addImage("badbox",bbox);
    badbox.scale=0.2;
    badbox.lifetime=30;
    
    badbox.scale=0.3;
   badgroup.add(badbox);
    }
  }
  function spawnbox3(){
    if(frameCount%60===0){
     var box3=createSprite(131,10,40,10);
      box3.x=Math.round(random(0,400));
      box3.addAnimation("box3",box1);
      box3.scale=0.2;
      box3.velocityY=7.5;
      box3.lifetime=200;
      boxgroup3.add(box3);
      
    }
  }
  function spawnbat2(){
    if(frameCount%50===0){
     var bat2=createSprite(131,10,40,10);
      bat2.x=Math.round(random(0,400));
      bat2.addAnimation("bat2",batimage);
      bat2.scale=1.5;
      bat2.velocityY=7;
      bat2.lifetime=300;
      batgroup2.add(bat2);
      
    }
  }
      
    function spawnbat3(){
      if(frameCount%90===0){
        var bat3=createSprite(131,10,40,10);
        bat3.x=Math.round(random(0,400));
        bat3.addAnimation("bat3",batimage);
        bat3.scale=1.5;
        bat3.velocityY=7;
        bat3.lifetime=300;
        batgroup3.add(bat3);

    
      }
    }
  
    
    function space(){
       background("black");
        noStroke(); 
        fill("white"); 
        ellipse(randomNumber(0,400),randomNumber(0,400),5,5);
         ellipse(randomNumber(0,400),randomNumber(0,400),5,5);
          ellipse(randomNumber(0,400),randomNumber(0,400),5,5);
           ellipse(randomNumber(0,400),randomNumber(0,400),5,5); 
           
          ellipse(randomNumber(0,400),randomNumber(0,400),5,5); 
          ellipse(randomNumber(0,400),randomNumber(0,400),5,5); 
          ellipse(randomNumber(0,400),randomNumber(0,400),5,5); 
          ellipse(randomNumber(0,400),randomNumber(0,400),5,5); 
          ellipse(randomNumber(0,400),randomNumber(0,400),5,5); 
    ellipse(randomNumber(0,400),randomNumber(0,400),5,5);
   }
   function spawn3bats(){
     if(frameCount%90===0){
       var bat01=createSprite(650,300,20,20);
       bat01.addAnimation("bat01",batimage);
       bat01.scale=1.5;
       var bat02=createSprite(700,300,20,20);
       bat02.addAnimation("bat02",batimage);
       bat01.scale=1.5;
       var bat03=createSprite(750,300,20,20);
       bat03.addAnimation("bat03",batimage);
       bat03.scale=1.5;

       bat01.velocityX=-7;
       bat02.velocityX=-7;
       bat03.velocityX=-7;
       endbats.add(bat01);
       endbats.add(bat02);
       endbats.add(bat03);

     }
   }
   function spawnbutton(){
    if(frameCount%90===0){
      var button = createSprite(150,340,70,20);
      button.x=Math.round(random(0,700));
      button.addImage("button",button1);
      button.scale=0.25;
      buttongroup.add(button);
    
    }
  }
  function rollingstones(){
    if(redscarf.isTouching(buttongroup)){
      var stone = createSprite(500,50,150,150);
      stone.addImage("stone",stone1);
      stone.scale=0.7;
      stone.velocityY=15;
      stonegroup.add(stone);
      buttongroup.destroyEach();
    }
  }