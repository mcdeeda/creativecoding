var w = 5;
var h = 5;
var r = 50;
var g = 50; 
var b = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(50);
    fill(255);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    micLevel = mic.getLevel();
    w = micLevel * 500;
    h = micLevel * 500;
    if(w < 10){
      w = 10;
    }
    if(h < 10){
      h = 10;
    }
    if(micLevel > 0.01){
      if(r > 254){
        if(g > 254){
          if(b > 254){
            b = 0;
            g = 0;
            r = 0;
          }
          else{
            b++;
          }
        }
        else{
          g++;
        }
      }
      else{
        r++;
      }
      
      ellipse(mouseX, mouseY, w,h);
    }
    else{
      background(50,10);
      r--;
      b--;
      g--;
    }
    fill(r,g,b);
    
    
}