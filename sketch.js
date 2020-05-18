var virus,virusImage
var india,usa,uk,africa,indiaImage,usaImage,ukImage,africaImage;


function preload(){
  virusImage=loadImage("./images/virus.png");
  indiaImage=loadImage("./images/india.png");
  usaImage=loadImage("./images/usa.jpg");  
  ukImage=loadImage("./images/uk.jpg");  
  africaImage=loadImage("./images/africa.jpg");    
}
function setup() {
  createCanvas(1600,800);
  virus=createSprite(800, 400);
  virus.addImage(virusImage);
  virus.scale=0.5;
  virus.setCollider("circle",0,0,280)

  
  india=createSprite(400,200)
india.addImage(indiaImage);
india.scale=0.5

  usa=createSprite(800,100)
  usa.addImage(usaImage);
usa.scale=0.5

  
  africa=createSprite(1300,300)
 africa.addImage(africaImage);
africa.scale=0.2

  uk=createSprite(600,700)
  uk.addImage(ukImage);
  uk.scale=0.2
  
}

function draw() {
  background(0);
  if(frameCount%3===0){
    virus.scale=virus.scale+0.003
  }
  if(virus.isTouching(uk)){
    uk.destroy()
    
  }
  if(virus.isTouching(usa)){
    usa.destroy()
    
  }
  if(virus.isTouching(india)){
    india.destroy()
    
  }
  if(virus.isTouching(africa)){
  africa.destroy()
    
  }  
  drawSprites();
}