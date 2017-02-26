var startingColor;
var endingColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    mic = new p5.AudioIn();
    mic.start();

    startingColor = color(128,188,163);
    endingColor = color(230,172,39);
}

function draw() {
    var volume = mic.getLevel();
    
    analyzer = new p5.Amplitude();
  
    var newMax = 5;
    volume = map(volume,0,1,0,newMax);
    
    if(volume<1){
    background(0);
    var size = map(volume*2,0,1,width/14,width/10);
    strokeWeight(size/30);
    stroke(255);
    fill(0);
    ellipse(width/2, height/2, size*2, size*2);
    ellipse(width/2, height/2, size, size);
    
    fill(255);
    noStroke();
    textAlign(CENTER);
    textFont("Baloo");
    textSize(height/100*4);
    text("Sing a song!", width/2,height/1.2);
    } else {
    background(255);
    var size = map(volume*2,0,1,width/14,width/10);
    strokeWeight(size/30);
    stroke(0);
    fill(255);
    ellipse(width/2, height/2, size*2, size*2);
    ellipse(width/2, height/2, size, size);
    
    fill(0);
    noStroke();
    textAlign(CENTER);
    textFont("Baloo");
    textSize(height/100*4);
    text("Sing a song!", width/2,height/1.2);
    }
}