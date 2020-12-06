//Create variables here
var dog,happyDog;
var database,foodS,foodStock;

function preload()
{
  dog = loadImage('images/dogImg.png');
  happyDog = loadImage('images/dogImg1.png');
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,20,20);
  dog.addImage(dog)

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

readStock();
writeStock();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }
  drawSprites();
  //add styles here
  
}

function readStock(data){
  foodS = data.val();
}


function writeStock(x){
database.ref('/').update({
  Food:x
})

}

