var player,ground,bg,enemy;
var playeranim,lanim;
function preload()
{
playeranim = loadImage("thor.jpg");
lanim = loadImage("lightening.png");
bg = loadImage("space.jpg");
}
function setup() {
  createCanvas(displayWidth-30,displayHeight-20);
  
player = new Thor();
player.body.addImage("thor",playeranim);
player.body.scale = 0.5;
ground = new Ground();
enemy = new Enemy();
}

function draw() {
  background (bg); 
  
 if(keyWentDown("space"))
    {  
        var lt = createSprite(player.body.x,player.body.y,20,20);
        lt.addImage("light",lanim);
        lt.scale = 0.2;
        lt.velocityX = 2;
         lt.velocityY = -2;
      
    }
    player.display();
    enemy.display();
  drawSprites();
  
}
