// Neeeded Variables
var snakeHeadX = 0;
var snakeHeadY = 0;
var velocityX = 0;
var velocityY = 0;
var segmentSize = 15;
var maxSegment = 40;
var tailLength = 4;
var tailArray = [];
var fruitX = 0;
var fruitY = 0;
var fruit2X = 0;
var fruit2Y = 0;
var fruit3X = 0;
var fruit3Y = 0;
var score = 0;
var highScore = 0;
function setup()
{
  createCanvas(650,600); 
  frameRate(15);
  // fill(0,255,0);
  snakeHeadX = maxSegment/2;
  snakeHeadY = maxSegment/2;
  fruitX = floor(random(0,maxSegment));
  fruitY = floor(random(0,maxSegment));
  fruit2X = floor(random(0,maxSegment));
  fruit2Y = floor(random(0,maxSegment));
  fruit3X = floor(random(0,maxSegment));
  fruit3Y = floor(random(0,maxSegment));
}

function draw()
{
  background(0);   
  
  // for fruit1
  fill(255,0,0); rect(fruitX*segmentSize,fruitY*segmentSize,segmentSize,segmentSize);
  // for fruit2
  fill(0,255,0);
  rect(fruit2X*segmentSize,fruit2Y*segmentSize,segmentSize,segmentSize)
  // for fruit3
  fill(0,255,0);
  rect(fruit3X*segmentSize,fruit3Y*segmentSize,segmentSize,segmentSize)
  // for body of the snake
  fill(255);
  // body_inc();
  while(tailArray.length>tailLength)
    {
      tailArray.shift();
    }
  tailArray.push({x:snakeHeadX,y:snakeHeadY});
  
  for(var i=0; i<tailArray.length; i++)
    {
      rect(tailArray[i].x*segmentSize,tailArray[i].y*segmentSize,segmentSize,segmentSize);
      // tailLength+=1;
    }
    rect(snakeHeadX*segmentSize,snakeHeadY*segmentSize,segmentSize,segmentSize);
  for(var ind=0; ind<tailArray.length; ind++)
    {
      if(snakeHeadX+velocityX==tailArray[ind].x &&                 snakeHeadY+velocityY==tailArray[ind].y)
        {
          snakeHeadX = maxSegment/2;
          snakeHeadY = maxSegment/2;
          velocityX = 0;
          velocityY =0;
          tailArray = [];
          tailLength = 4;
          if(score>highScore)
            {
              highScore = score;
            }
          score = 0;
         
          // fruitX = floor(random(0,maxSegment));
          // fruitY = floor(random(0,maxSegment));
        }
    }
   boundaryCheck();
  snakeHeadX = snakeHeadX + velocityX;
  snakeHeadY = snakeHeadY + velocityY;
  // fruit 1
  if(snakeHeadX==fruitX && snakeHeadY==fruitY)
    {
       fruitX = floor(random(0,maxSegment));
       fruitY = floor(random(0,maxSegment));
       tailLength++;
      score++;
    }
  
  // fruit 2
   if(snakeHeadX==fruit2X && snakeHeadY==fruit2Y)
    {
       fruit2X = floor(random(0,maxSegment));
       fruit2Y = floor(random(0,maxSegment));
       tailLength++;
      score++;
    }

     // fruit 3
   if(snakeHeadX==fruit3X && snakeHeadY==fruit3Y)
   {
      fruit3X = floor(random(0,maxSegment));
      fruit3Y = floor(random(0,maxSegment));
      tailLength++;
     score++;
   }
  
  fill(255);
  textSize(20);
  text('Score: '+score,10,20);
  text('HighScore: '+highScore,10,50);
  // print(score);
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
    {
      velocityX = 0;
      velocityY = -1;
    }
  if(keyCode == DOWN_ARROW)
    {
      velocityX = 0;
      velocityY = 1;
    }
  if(keyCode == LEFT_ARROW)
    {
      velocityX = -1;
      velocityY = 0;
    }
  if(keyCode == RIGHT_ARROW)
    {
      velocityX = 1;
      velocityY = 0;
    }
  if(keyCode == ENTER)
    {
      velocityX = 0;
      velocityY = 0;
    }
}

function boundaryCheck()
{
  if(snakeHeadX<0)
    {
      snakeHeadX = maxSegment-1;
    }
  if(snakeHeadX>maxSegment-1)
    {
      snakeHeadX = 0;
    }
  if(snakeHeadY<0)
    {
      snakeHeadY = maxSegment -1;
    }
  if(snakeHeadY>maxSegment - 1)
    {
      snakeHeadY = 0;
    }
}

