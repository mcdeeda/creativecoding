const STARSIZE = 10;
var exploding = 0;
class Star{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.opacity = random(0,100);
  }
  twinkle(){
    this.opacity = random(0,100);
  }
  draw(){
    translate(width/2, height/2);
    rotate(random(0,360));
    fill(200, this.opacity);
    line(this.x, this.y, this.x+STARSIZE, this.y+STARSIZE);
    line(this.x+STARSIZE, this.y, this.x, this.y + STARSIZE);
    rotate(0);
    translate(0,0);
    this.twinkle();
  }
}
class Circle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = Math.floor(random(200,255));
    this.g = Math.floor(random(200,255));
    this.b = Math.floor(random(200,255));
    this.opacity = Math.floor(random(0,100));
  }
  draw(){
    fill(this.r, this.b, this.g, this.opacity);
    ellipse(this.x, this.y, Math.floor(random(1,10)));
  }
}
class shootingStar{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.r = Math.floor(random(100,255));
    this.g = Math.floor(random(100,255));
    this.b = Math.floor(random(100,255));
    this.deg = Math.floor(random(0,360));
    this.opacity = 0;
    this.size = random(10,15);
    this.speed = random(2,5);
    this.movementVector = createVector(random(0,5),random(0,5));
    this.mouseDisplace;
  }
  draw(){
    translate(this.x, this.y);
    rotate(this.deg);
    
    rectMode(CENTER);
    fill(this.r, this.g, this.b, this.opacity);
    rect(0, 0, this.size, this.size);
    rectMode(CORNER);
    rotate(-this.deg);
    translate(-this.x, -this.y);
    
  }
}
class explosionParticle{
  constructor(originX, originY){
    this.x = originX;
    this.y = originY;
    this.originX = originX;
    this.originY = originY;
    this.vector = createVector(random(-10,10), random(-10,10));
    this.opacity = 100;
    this.cycles = 0;
  }
  draw(){
    fill(200, this.opacity);
    rect(this.x, this.y, 3,3);
    this.opacity -= random(0,5);
    this.cycles +=1;
  }
}
var stars = [];
var circles = [];
var particles = [];
var shootingStars = [];
function setup(){
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  stroke(160);
  strokeWeight(5);
  strokeCap(ROUND);
  background(50);
  for(var i = 0; i < 25; i++){
    stars.push(new Star(Math.floor(random(width/10,width + 200)),Math.floor(random(height/10,height/4))));
    circles.push(new Circle(Math.floor(random(0, width)), Math.floor(random(height/10, height))));
  }
  for(var j = 0; j < stars.length; j++){
    stars[j].draw();
  }
  
  
}

function draw(){
  angleMode(RADIANS);
  angleMode(DEGREES);
  background(40,9);
  if(frameCount % 10 === 0){
    stars[Math.floor(random(0,stars.length))].draw();
    stars[Math.floor(random(0,stars.length))].draw();
    stars[Math.floor(random(0,stars.length))].draw();
  }
  noStroke();
  if(frameCount % 7 === 0){
    for(var i = 0; i < circles.length; i++){
      if(circles[i].opacity >= 100){
        circles[i].opacity = 0;
      }
      else{
        circles[i].draw();
        circles[i].opacity += 1;
      }
    }
  }
  if(frameCount % 30 === 0){
    if(shootingStars.length >= 25){
      shootingStars.shift();
    }
    else{shootingStars.push(new shootingStar(Math.floor(random(0,width/2)), Math.floor(random(0, height/2))));
    }
      
    }
  for(var i = 0; i < shootingStars.length - 1; i++){
    if(shootingStars[i].x >= mouseX - 10 && shootingStars[i].y >= mouseY - 10 && shootingStars[i].x <= mouseX + 10 && shootingStars[i].y <= mouseY + 10){
      shootingStars.splice(i,1);
      exploding += 1;
    }
    if(shootingStars[i].x >= width || shootingStars[i].y >= height || shootingStars[i].x <=0 || shootingStars[i].y <=0){
      shootingStars.splice(i,1);
    }
    shootingStars[i].mouseDisplace = [mouseX - shootingStars[i].x, mouseY - shootingStars[i].y];
    shootingStars[i].movementVector.x += 0.00005 * shootingStars[i].mouseDisplace[0];
    shootingStars[i].movementVector.y += 0.00005 * shootingStars[i].mouseDisplace[1];
    shootingStars[i].x += shootingStars[i].movementVector.x;
    shootingStars[i].y += shootingStars[i].movementVector.y;
    shootingStars[i].opacity +=0.5;
    shootingStars[i].deg += Math.floor(random(4,20));
    shootingStars[i].draw();
    
  }
  if(exploding >=1){
    particles.push(new explosionParticle(mouseX, mouseY));
    for(var i = 0; i < particles.length; i++){
      particles[i].draw();
      particles[i].x += particles[i].vector.x;
      particles[i].y += particles[i].vector.y;
      if(particles[i].cycles >= 30 * exploding){
        exploding  = 0;
        particles = [];
        break;
      }
    }
  }
  stroke(200);
  
}