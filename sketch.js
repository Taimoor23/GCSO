  var speed,weight;
  var car,wall;
 

function setup() {
  createCanvas(1600,400);
  
  speed=random(-60);
  weight=random(400,1500);
 
  wa11=createSprite(900,200,60,20);
  wa11.shapeColor=color(80,80,80);

  car1=createSprite(1400,200,50,50);
  car1.shapeColor=color(255);
  car1.velocityX= speed;


}

function draw() {
  background(0);  

  if (wa11.x=car1.x < (car1.width+wa11.width)/2){
 
  car1.velocityX=0;
  
  var deformation=0.5 * weight * speed * speed/22509;

  if (deformation>180){

    car1.shapeColor=color(255,0,0);
  }
  if (deformation<180 && deformation>100){

    car1.shapeColor=color(230,230,0);
  }
  if (deformation<100){

     car1.shapeColor=color(0,255,0)
  }

 }
 drawSprites();
}