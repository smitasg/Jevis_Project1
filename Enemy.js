class Enemy
{
constructor()

{
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;

   
}
display()

{
var rnum = 0;
    if(frameCount%60 ===0)
    {
    this.body = createSprite(this.x,this.y,this.width,this.height);
    rnum = random(0,displayWidth);
    this.x = rnum;
    this.body.velocityY = 2;
    }
}
}