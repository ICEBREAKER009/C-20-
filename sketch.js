var movingrect,fixedrect;

function setup() {
  createCanvas(400,400);
  movingrect = createSprite(200, 200, 50, 50);
  movingrect.shapeColor = "blue";
  fixedrect =  createSprite(200,100,50,50);
  fixedrect.shapeColor = "blue";
  
}

    function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  drawSprites();
  if(movingrect.x  -  fixedrect.x<50 && fixedrect.x  -  movingrect.x<50 && movingrect.y  -  fixedrect.y<50 && fixedrect.y  -  movingrect.y <50 ){
movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";
  }
  else{
    movingrect.shapeColor = "blue";
fixedrect.shapeColor = "blue";
  }

}