class Thor
{
constructor()
{

    this.width = 10;
    this.height = 10;
    //this.visibility = true;
    this.x = displayWidth/2;
    this.y = displayHeight-displayHeight/4;
    this.body = createSprite(this.x,this.y,this.width,this.height);

}
display()
{
    if(keyDown(LEFT_ARROW))
    {
        this.body.x = this.body.x - 2;
        
    }
    if(keyDown(RIGHT_ARROW))
    {
      this.body.x = this.body.x + 2;}

}


}