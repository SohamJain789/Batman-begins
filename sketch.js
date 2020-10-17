var boyImg,boy;

function preload(){
boyImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
}

function setup(){
 createCanvas(300,400)
 boy = createSprite(150,350,30,30)
    
}

function draw(){
background(0,0,0)
boy.addAnimation("boy",boyImg);
boy.scale = 0.14;
drawSprites();
}   
