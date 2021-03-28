var movingRect, fixedRect;
var rect1,rect2,rect3;

function setup(){
    createCanvas(1200,800);
    
  fixedRect = createSprite(200, 400, 100, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "green";

  rect1= createSprite(100, 200, 50, 100);
  rect1.shapeColor = "green";
  
  rect2= createSprite(300, 200, 50, 100);
  rect2.shapeColor = "green";

  rect3= createSprite(600, 200, 50, 100);
  rect3.shapeColor = "green";
 



}
function draw(){
  background("lightblue");

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
console.log(isTouching);

  if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    
    rect2.shapeColor = "blue";
    rect3.shapeColor = "blue";

  }

else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";
}
if(isTouching(movingRect,rect1)){
  rect1.shapeColor = "blue";
}
else{
  rect1.shapeColor = "green";
}



if(isTouching(movingRect,rect2)){
  rect2.shapeColor = "blue";
}
else{
  rect2.shapeColor = "green";
}


if(isTouching(movingRect,rect3)){
  rect3.shapeColor = "blue";
}
else{
  rect3.shapeColor = "green";
}

drawSprites();
}
