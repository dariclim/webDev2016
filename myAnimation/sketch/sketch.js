var xPos=40;
var yPos=40;
var xVel=4;
var yVel=2;

function setup() {
  createCanvas(100, 100);
}

function draw(){
    background(0,0,0);
    
    rect(xPos,yPos,10,10,10);
    noStroke();
    
    if(xPos>width || xPos<0){
        
        xVel=-xVel;
    }
    
    if(yPos>height || yPos<0){
        yVel=-yVel;
    }
    xPos+=xVel;
    yPos+=yVel;
}