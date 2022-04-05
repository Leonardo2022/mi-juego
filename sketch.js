var Cuarto, Bano, Lavanderia
var perquieto, per1, per2, per3, megamanos, perquieto2, megamanos2, perquieto3
var Personaje_en_movimiento



function preload(){
  megamanos =   loadAnimation("sprites/per1.png", "sprites/per2.png", "sprites/per3.png");
  megamanos2 = loadAnimation("sprites/perquieto.png")

  Cuarto = loadImage("Sprites/Cuarto.png");
  Bano = loadImage("Sprites/Bano.png");
  Lavanderia = loadImage("Sprites/Lavanderia.png");
}

function setup() {
createCanvas(windowWidth, windowHeight)
BanoImg = createSprite(700, 300, 50, 100);
BanoImg.addImage(Bano)

//Personaje_en_movimiento = createSprite (700, 300, 50, 58)
//Personaje_en_movimiento.addAnimation(megamanos)

perquieto2 = createSprite (700, 418, 50, 58);
//perquieto2.addImage(megamanos2)

}


function draw() {
background("black");

if(keyDown(RIGHT_ARROW)){
//perquieto2.velocityX = 1
perquieto2.x = perquieto2.x + 5;
perquieto2.addAnimation("runing", megamanos);
//perquieto2.visible = false
//run();
}

else{
  perquieto2.addAnimation("collided", megamanos2)
}



  drawSprites();
}
