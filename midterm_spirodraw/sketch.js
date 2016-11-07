// SPIROGRAPH
// http://en.wikipedia.org/wiki/Spirograph
// also (for inspiration):
// http://ensign.editme.com/t43dances
//
// this p5 sketch uses simple transformations to create a
// Spirograph-like effect with interlocking circles (called sines).  
// press the spacebar to switch between tracing and
// showing the underlying geometry.
//
// your tasks:
// (1) tweak the code to change the simulation so that it draws something you like.
// hint: you can change the underlying system, the way it gets traced when you hit the space bar,
// or both.  try to change *both*.  :)
// (2) use p5.sound or tone.js to make the simulation MAKE SOUND.
// hint: the websites for p5.sound and tone.js have lots of examples.
// try and adapt them.
// another hint: javascript isn't super efficient with a large number of audio playing at once.
// see if there's a simple way to get an effective sound, or limit the number of shapes
// you're working with.

var NUMSINES = 6; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable
var img; //API-Sourced random image
var theImage; //p5 image
// play with these to get a sense of what's going on:
var fund = 0.005; // the speed of the central sine
var pointRad = 10 //base size of drawing ellipses
var ratio = 0.5; // what multiplier for speed is each additional sine?
var alpha = 100; // how opaque is the tracing system

var trace = false; // are we tracing?

function preload() {
  img = loadImage("http://unsplash.it/" + windowWidth + "/" + windowHeight + "/?random");
}

function setup() {

  createCanvas(windowWidth, windowHeight); // OpenGL mode
  imageHolder = createGraphics(windowWidth, windowHeight);
  imageHolder.image(img, 0, 0);
  rad = height / 4; // compute radius for central circle
  background(255); // clear the screen

  for (i = 0; i < sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function draw() {
  if (!trace) {
    background(255);
    stroke(255, 255); // black pen
    noFill(); // don't fill
    image(img, 0, 0);
  }

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width / 2, height / 2); // move to middle of screen
  var erad = 3;

  var pixelX = width / 2;
  var pixelY = height / 2;
  for (i = 0; i < sines.length; i++) // go through all the sines
  {
    // setup for tracing
    var radius = rad / (i + 1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    if (i == 0) {
      pixelX += (radius * cos(sines[i] + HALF_PI));
      pixelY += (radius * sin(sines[i] + HALF_PI));
    } 
    else {
      pixelX += (radius * cos(sines[i] - (PI / (ratio * (i+1))))) ;
      pixelY += (radius * sin(sines[i] - (PI / (ratio * (i+1))))) ;
    }
    var pixelColor = imageHolder.get(Math.round(pixelX), Math.round(pixelY));
    if(pixelColor[0] == 0 && pixelColor[1] == 0 && pixelColor[2] == 0){
      pixelColor.pop();
      pixelColor.push(30);
    }
    if (trace) {
      noStroke();
      fill(pixelColor); // also, um, blue

      erad = 10.0 * (1.0 - float(i) / sines.length); // pen width will be related to which sine
    }
    if (!trace) ellipse(0, 0, pointRad, pointRad); // draw a little circle
    if (trace) ellipse(0, 0, pointRad, pointRad); // draw with erad if tracing

    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI; // update angle based on fundamental

  }

  pop(); // pop down final transformation
}

function keyReleased() {
  if (key == ' ') {
    trace = !trace;
    background(255);
  }
}

function go() {
  trace = !trace;
  background(255);
}