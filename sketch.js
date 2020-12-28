var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  //to move horizontally x axis poition should be same and to move vertically y axis position should be same
  rect1 = createSprite(500, 600, 50, 80);
  rect1.shapeColor = 'green';
  //and velocities should also be different while changing x and y position
  rect1.velocityX=-2;

  rect2 = createSprite(100,600,30,50);
  rect2.shapeColor = 'green';
  rect2.velocityX = 2;
}

function draw() {
  background(0);  

  //to make them bounce off vertically and horizontally
  if (rect2.x-rect1.x < rect1.width/2+rect2.width/2 && 
      rect1.x-rect2.x < rect1.width/2+rect2.width/2 )
      {
        //to make them go reverse when they are touching each other
        rect1.velocityX = rect1.velocityX*(-1)
        rect2.velocityX = rect2.velocityX*(-1)
      }
      if (rect2.y-rect1.y < rect1.height/2+rect2.height/2 &&
      rect1.y-rect2.y < rect1.height/2+rect2.height/2) 
      {
     rect1.velocityY = rect1.velocityY*(-1)
     rect2.velocityY = rect2.velocityY*(-1)
      }

  drawSprites();
}