//Create variables here
var dog, happydog, foodS, foodStock;
var database;

function preload()
{
  //load images here
  dogNormal = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200, 200, 10, 10);
  dog.addImage(dogNormal);
  database= firebase.database();
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

 

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  //add styles here
  background(46, 139, 87);
  drawSprites();
  textSize(30);
  fill("white");
  text(foodS, 100, 30);
}

function readStock(data)
{
foodS = data.val();
}

function writeStock(x)
{
if(x<=0)
{
  x=0;
}
else
{
  x = x - 1;
}

{
  database.ref('/').update({
  Food:x
  })

}
}
