var gamebg1img,gamebg2img,gamebg3img;
var skellyanimation;
var gokuanimation, gokustanding;
var gokuintro;
var Goku;
var vegitostanding,Vegito;
var lightAttack = 1, mediumAttack=2, Ultimate=3;
var gokula,gokuma,gokuu;
var vegitola,vegitoma,vegitou;
var keyPressedFrame =0
var vegitoFrame= 0;
var GokuHealth, VegitoHealth;

function preload(){


gamebg1img=loadImage("images/gamebg1.jpg")
gamebg2img=loadImage("images/gamebg2.jpg")
gamebg3img=loadImage("images/gamebg3.jpg")
gokustanding=loadAnimation("images/gokulightattack/tile000.png")
vegitostanding=loadAnimation("images/vegitoattacking/tile002.png.png");
gokula=loadAnimation("images/gokulightattack/tile000.png",
"images/gokulightattack/tile001.png",
"images/gokulightattack/tile002.png",
"images/gokulightattack/tile003.png",
"images/gokulightattack/tile004.png",
"images/gokulightattack/tile005.png",
"images/gokulightattack/tile006.png",
"images/gokulightattack/tile007.png",
"images/gokulightattack/tile008.png",
"images/gokulightattack/tile009.png",
"images/gokulightattack/tile010.png",
"images/gokulightattack/tile011.png",
"images/gokulightattack/tile012.png",
"images/gokulightattack/tile013.png",
"images/gokulightattack/tile014.png",
"images/gokulightattack/tile015.png",
"images/gokulightattack/tile016.png",
"images/gokulightattack/tile017.png",
"images/gokulightattack/tile018.png",
"images/gokulightattack/tile019.png",
"images/gokulightattack/tile020.png",
"images/gokulightattack/tile021.png")

gokuma=loadAnimation(
  /*"images/gokumediumattack/tile000.png",
"images/gokumediumattack/tile001.png",
"images/gokumediumattack/tile002.png",
"images/gokumediumattack/tile003.png",
"images/gokumediumattack/tile004.png",
"images/gokumediumattack/tile005.png",
"images/gokumediumattack/tile006.png",
"images/gokumediumattack/tile007.png",
"images/gokumediumattack/tile008.png",
"images/gokumediumattack/tile009.png",
"images/gokumediumattack/tile010.png",
"images/gokumediumattack/tile011.png",
"images/gokumediumattack/tile012.png",
"images/gokumediumattack/tile013.png",
"images/gokumediumattack/tile014.png",
"images/gokumediumattack/tile015.png",
"images/gokumediumattack/tile016.png",
"images/gokumediumattack/tile017.png",
"images/gokumediumattack/tile018.png",
"images/gokumediumattack/tile019.png",
"images/gokumediumattack/tile020.png",
"images/gokumediumattack/tile021.png",
"images/gokumediumattack/tile022.png",*/
"images/gokumediumattack/tile023.png",
"images/gokumediumattack/tile024.png",
"images/gokumediumattack/tile025.png",
"images/gokumediumattack/tile026.png",
"images/gokumediumattack/tile027.png",
"images/gokumediumattack/tile028.png",
"images/gokumediumattack/tile029.png",
"images/gokumediumattack/tile030.png",
"images/gokumediumattack/tile031.png",
"images/gokumediumattack/tile032.png",
"images/gokumediumattack/tile033.png",
"images/gokumediumattack/tile034.png",
"images/gokumediumattack/tile035.png",
"images/gokumediumattack/tile036.png",
"images/gokumediumattack/tile037.png",
"images/gokumediumattack/tile038.png",
"images/gokumediumattack/tile039.png",)

vegitola=loadAnimation("images/vegitoattacking/tile000.png.png",
"images/vegitoattacking/tile001.png.png",
"images/vegitoattacking/tile002.png.png",
"images/vegitoattacking/tile003.png.png",
"images/vegitoattacking/tile004.png.png",
"images/vegitoattacking/tile005.png.png",
"images/vegitoattacking/tile006.png.png",
"images/vegitoattacking/tile007.png.png",
"images/vegitoattacking/tile008.png.png",
"images/vegitoattacking/tile009.png.png",
"images/vegitoattacking/tile010.png.png",)

vegitoma=loadAnimation("images/vegitoattacking2/tile000.png.png",
"images/vegitoattacking2/tile001.png.png",
"images/vegitoattacking2/tile002.png.png",
"images/vegitoattacking2/tile003.png.png",
"images/vegitoattacking2/tile004.png.png",
"images/vegitoattacking2/tile005.png.png",
"images/vegitoattacking2/tile006.png.png",
"images/vegitoattacking2/tile007.png.png",
"images/vegitoattacking2/tile008.png.png",
"images/vegitoattacking2/tile009.png.png",)

}



function setup() {
  createCanvas(windowWidth,windowHeight);
  Goku = createSprite(windowWidth/4, windowHeight-120, 20, 40);
 Goku.addAnimation("gokustanding",gokustanding);
 Goku.addAnimation("gokula",gokula);
 Goku.addAnimation("gokuma",gokuma);
  Goku.scale = 3

  Vegito=createSprite(windowWidth-400,windowHeight-100,20,40);
  Vegito.addAnimation("vegitostanding",vegitostanding);
  Vegito.addAnimation("vegitola",vegitola);
  Vegito.addAnimation("vegitoma",vegitoma);
  Vegito.scale =2

  GokuHealth = createSprite(225,50,400,20);
  GokuHealth.shapeColor="#0F7626"

  VegitoHealth = createSprite(windowWidth-225,50,400,20);
  VegitoHealth.shapeColor="#0F7626"
  
}

function draw() {
  background(gamebg1img);  
  Vegito.attractionPoint(0.1,Goku.x,Goku.y)
  Vegito.maxSpeed=2;
  GokuAttack();
  VegitoAttack();
  drawSprites();
}

function VegitoAttack(){
if(frameCount%70===0){
  var rand = Math.round(random(1,2))
  switch(rand){
    case 1: Vegito.changeAnimation("vegitola",vegitola);
    vegitoFrame= frameCount;
    break;
    case 2: Vegito.changeAnimation("vegitoma",vegitoma);
    vegitoFrame= frameCount
    break;
  }

}
if(frameCount===vegitoFrame+40){
  Vegito.changeAnimation("vegitostanding")
}

}

function GokuAttack(){
if(keyDown("C")&& frameCount >= keyPressedFrame+30 ){
  Goku.changeAnimation("gokula",gokula);
  keyPressedFrame=frameCount
}
if(keyDown("V")&& frameCount >= keyPressedFrame+30){
  Goku.changeAnimation("gokuma",gokuma);
  keyPressedFrame=frameCount
}
if(frameCount>keyPressedFrame+70){
  Goku.changeAnimation("gokustanding",gokustanding)
}
}