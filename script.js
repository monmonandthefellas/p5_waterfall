var waterfall = [];
var dropletWidth = .15;
var droplets = 1050;
var angle = 21;

function setup() {
  if (window.innerWidth < 801) droplets = 400; //reduce drops on small displays
  noStroke();
  colorMode(RGB, 255, 255, 255, 1);
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < droplets; i++) {
    var x = random(width);
    var y = random(-height); //start off screen
    var r = random(0.2, 1.2);
    var h = random(20, 255); //amount of blue
    var b = random(10, 250); //opacity
    var s = random(0.02, 0.06); //speed
    waterfall[i] = new WaterFall(x, y, r, h, b, s); //create waterfall droplets
  }
}



function draw() {
  var blue = random(0, 60);
   background(30 - (blue / 3), 30 - (blue / 3), blue, .07);
  strokeWeight(dropletWidth / 1.52);
  for (var i =0; i < droplets; i++) {
    waterfall[i].move();
    waterfall[i].display();
  }
}

function WaterFall(tempX, tempY, tempDiameter, tempHue, tempB, s) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.h = tempHue;
  this.b = tempB;
  this.s = s;
  this.move = function() {
    
    var range = 1;
    var xspeed = this.s;
    angle += xspeed;
    var tx = sin(angle) * range; //create swaying effect along x axis
    

    var ty = random(1, 5)+530*this.s;

    
    this.x += (tx);
    if ((this.x > width+(dropletWidth)) || (this.x < -dropletWidth)) { this.x = round(random(width / dropletWidth)) * dropletWidth; }
    this.y += (ty);
    if (this.y > height) { this.y = random(-height); this.x = random(width);}
}
  
  this.display = function() {
  stroke(140, 140, 255, 1);
   line(this.x, this.y, this.x, this.y + this.s * 5000);
  }
}

function mousePressed() {
  dropletWidth = random(0.05, 2);
  droplets = round(random(200, 1000));
  if (dropletWidth < .5) droplets = round(random(30, 1200));
  if (window.innerWidth < 801) droplets = round(random(20, 300));
  for (var i = 0; i < droplets; i++) {
    var x = random(width);
    var y = random(-height);
    var r = random(0.2, 1.2);
    var h = random(20, 255);
    var b = random(10, 150);
    var s = random(0.03, 0.05);
    waterfall[i] = new WaterFall(x, y, r, h, b, s);
  }
 
}