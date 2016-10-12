var words = [];
var fonts = [];
var voices = [];
function RandomWord() {
    var requestStr = "http://randomword.setgetgo.com/get.php";
    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "jsonp",
        jsonpCallback: 'RandomWordComplete'
    });
}

function RandomWordComplete(data) {
    var newWord = new Object();
    newWord.content = data.Word;
    newWord.font = Math.floor(random(0,7));
    newWord.size = Math.floor(random(10,64));
    newWord.widthCollide = 0;
    newWord.xPos = width/2;
    newWord.yPos = height/2;
    newWord.xVelo =random(-10,10);
    newWord.yVelo = random(-10,10);
    words.push(newWord);
    var voice = new p5.Speech();
    voices.push(voice);
}
    
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  fill(200);
  for(var i = 0; i < 7; i++){
    var font = loadFont("fonts/" + i + ".ttf");
    fonts.push(font);
  }
}

function draw() {
  
  background(50);
  for(var i = 0; i < words.length; i++){
    textSize(words[i].size);
    textFont(fonts[words[i].font]);
    words[i].xPos += words[i].xVelo;
    words[i].yPos += words[i].yVelo;
    var boundBox = fonts[words[i].font].textBounds(words[i].content, words[i].xPos, words[i].yPos, words[i].size);
    if(words[i].xPos >= width - boundBox.w || words[i].xPos <= 0){
      words[i].xVelo = words[i].xVelo * -1 + Math.floor(random(-3,3));
      voices[i].speak(words[i].content);
    }
    if(words[i].yPos >= height - boundBox.h || words[i].yPos <=0){
      words[i].yVelo = words[i].yVelo * -1 + Math.floor(random(-3,3));
      voices[i].speak(words[i].content);
    }
    text(words[i].content, words[i].xPos, words[i].yPos);
  }
}
function mousePressed(){
  RandomWord();
}