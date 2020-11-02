function setup() {
  createCanvas(400,400);
  FixedRect = createSprite(200, 100, 20, 20);
  FixedRect.shapeColor = "Green";

  MovingRect = createSprite(300, 100, 20, 20);
  MovingRect.shapeColor = "Green";

}

function draw() {
  background(255,255,255);  

  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;

  if (MovingRect.x - FixedRect.x < MovingRect.width/2 + FixedRect.width/2 && MovingRect.y - FixedRect.y < MovingRect.height/2 + FixedRect.height/2  && FixedRect.y - MovingRect.y < FixedRect.height/2 + MovingRect.height/2 && FixedRect.x - MovingRect.x < FixedRect.width/2 + MovingRect.width/2) {
    FixedRect.shapeColor = "Red";
    MovingRect.shapeColor = "Red";

  }

  else {
    FixedRect.shapeColor = "Green";
    MovingRect.shapeColor = "Green";
  }


  drawSprites();
}