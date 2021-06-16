
var space;
var iss, spacecaft, hasDocked=false;
var station, capsule;
var smoke1, smoke2, smoke3;
function preload(){
space=loadImage("Space.jpg");
station=loadImage("iss.png");
capsule=loadImage("Capsule.png");
smoke2=loadImage("Smoke.png");

}
function setup() {
  createCanvas(400,400);
 iss=createSprite(200, 50, 50, 50);
 iss.addImage(station);
 iss.scale=0.4;

 spacecraft=createSprite(200, 350, 50, 50);
 spacecraft.addImage(capsule);
 spacecraft.scale=0.3;

 smoke1=createSprite(200, 200, 1, 1);
smoke1.scale=0.2;

smoke3=createSprite(200, 200, 1, 1);
smoke3.scale=0.2;
 


}

function draw() {
  background(space); 
  if(!hasDocked){
    textSize(15);
    text("Use The arrow keys to move the spacecraft", 100, 200);
    text(" into the  International Space Station", 120, 220);
        spacecraft.x=random(50, 350);
    if(keyDown("left")){
      spacecraft.x=200;
      spacecraft.x-=40;
      smoke3.y=-100;
      smoke1.x=spacecraft.x-50;
      smoke1.y=spacecraft.y;;
      smoke1.addImage(smoke2); 
    }
  
    if(keyDown("right")){
      spacecraft.x=200;
      spacecraft.x+=40;
      smoke3.y=-100;
      smoke1.x=spacecraft.x+50;
      smoke1.y=spacecraft.y;;
      smoke1.addImage(smoke2);
      
    }
  
  if(keyDown("down")){
    spacecraft.x=200;
    smoke1.x=spacecraft.x+50;
    smoke1.y=spacecraft.y;
    smoke1.addImage(smoke2);
    smoke3.x=spacecraft.x-50;
    smoke3.y=spacecraft.y;
    smoke3.addImage(smoke2);
  }
  
  if(keyDown("up")){
    spacecraft.x=200;
    spacecraft.y-=5;
    smoke3.y=-100;
  }
  
   
  }

 
if(spacecraft.isTouching(iss)){
  hasDocked=true;
  smoke1.y=-100;
  smoke3.y=-100;
  textSize(20);
  fill("white");
  text("Docking Successful!", 150, 350);
}

  


  
  drawSprites();
}