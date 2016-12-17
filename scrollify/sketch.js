var scrollImg;
var recordVelo = 1;
var accuracy = 0;
var deg = 0;
function preload(){
    sound = loadSound("sound.wav");
}
function setup(){
    createCanvas(windowWidth, windowWidth);
    drawRecord();
    sound.loop();
}
function drawRecord(){
    noStroke();
    var grey = color(40,40,40);
    fill(grey);
    ellipse((windowWidth/2), (windowWidth/2), (windowWidth * 3/4), (windowWidth * 3/4));
    var red = color(210, 60, 60);
    fill(red);
    ellipse((windowWidth/2), (windowWidth/2), (windowWidth * 1/6), (windowWidth * 1/6));
    var black = color(0,0,0);
    fill(black);
    ellipse((windowWidth/2), (windowWidth/2), (windowWidth * 1/40), (windowWidth * 1/40));
    stroke(0);
    strokeWeight(1);
    noFill();
    for(var i = 0; i < (windowWidth/10); i++){
        ellipse((windowWidth/2), (windowWidth/2), (windowWidth * 3/4 - i*5), (windowWidth * 3/4 - i*5));
    }
    noFill();
}
function draw(){
    if(recordVelo > 0){
        recordVelo = recordVelo -0.2;
    }
    if(recordVelo < 0){
        recordVelo = recordVelo +0.2;
    }
    $('#defaultCanvas0').on('mousewheel', function(event){
        recordVelo += (event.deltaY * -1 / 400);
    });
    var speed = (recordVelo / 100);
    sound.rate(speed);
    console.log(speed);
    accuracy = (speed * 100)
    if(accuracy >= 101){
        accuracy = 200 - accuracy;
    }
    $('#accuracy').text("Accuracy: " + Math.floor(accuracy) + "%");
    if(accuracy > 95 && accuracy < 105){
        $('#accuracy').css({"color": "green"})
    }
    else if(accuracy > 105){
        $('#accuracy').css({"color": "red"})
    }
    else{
        $('#accuracy').css({"color": "black"})
    }
    deg += speed * 10;
    $('#scroll-logo').css({WebkitTransform:"translate(-50%,-50%) rotate(" + deg + "deg)"})
}