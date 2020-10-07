var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect= createSprite(600, 400, 50, 80);
  fixedrect.shapeColor= "blue";
  //fixedrect.debug=true;
  movingrect= createSprite(400,200,80,30);
  movingrect.shapeColor= "blue";
  //movingrect.debug=true;
}

function draw() {
  background(0);
  console.log(fixedrect.x-movingrect.x)
  movingrect.x= mouseX;
  movingrect.y= mouseY;  
  if(fixedrect.x-movingrect.x <= fixedrect.width/2 + movingrect.width/2 &&
    movingrect.x-fixedrect.x <= fixedrect.width/2 + movingrect.width/2 &&
  movingrect.y-fixedrect.y<= fixedrect.height/2+movingrect.height/2 &&
  fixedrect.y-movingrect.y<= fixedrect.height/2+movingrect.height/2)
  {
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }
  else
  {
    fixedrect.shapeColor= "blue";
    movingrect.shapeColor= "blue";
  }
  drawSprites();
}