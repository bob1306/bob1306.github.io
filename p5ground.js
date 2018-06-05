var littleFlower = [];
var littleFlower_1 = [];
var littleFlower_2 = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasHolder');
  for (var i = 0; i < 80; i++) {
    littleFlower.push(new Flower());
  }
  for (var j = 0; j < 150; j++) {
    littleFlower_1.push(new Flower_1());
  }
  for (var k = 0; k < 350; k++) {
    littleFlower_2.push(new Flower_2());
  }

}

function draw() {
  background(221);
    
 //sky   
  noStroke();
  //fill(253, 255, 209);
  fill(218, 228, 232);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 0/100 * windowHeight, 0, 0/100 * windowHeight);
  noStroke();
    noStroke();
  fill(252, 202, 125);
  quad(0, 52/100 * windowHeight, windowWidth, 52/100 * windowHeight, windowWidth, 0/100 * windowHeight, 0, 0/100 * windowHeight);
  noStroke();
    noStroke();
  fill(115, 117, 111);
  quad(0, 47/100 * windowHeight, windowWidth, 48/100 * windowHeight, windowWidth, 0/100 * windowHeight, 0, 0/100 * windowHeight);
  noStroke();
    noStroke();
  fill(48, 65, 73);
  quad(0, 40/100 * windowHeight, windowWidth, 39/100 * windowHeight, windowWidth, 0/100 * windowHeight, 0, 0/100 * windowHeight);
  noStroke();
    noStroke();
  fill(30, 42, 48);
  quad(0, 25/100 * windowHeight, windowWidth, 27/100 * windowHeight, windowWidth, 0/100 * windowHeight, 0, 0/100 * windowHeight);
  noStroke();
    
    
    
//ground
  noStroke();
  fill(80, 204, 109);
  //quad(0, windowHeight, windowWidth, windowHeight, windowWidth, 87/100 * windowHeight, 0, 80/100 * windowHeight);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 100/100 * windowHeight, 0, 100/100 * windowHeight);
  noStroke();
  fill(31, 178, 101);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 90/100 * windowHeight, 0, 87/100 * windowHeight);
  noStroke();
  fill(60, 151, 90);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 78/100 * windowHeight, 0, 80/100 * windowHeight);
  noStroke();
  fill(31, 135, 93);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 74/100 * windowHeight, 0, 73/100 * windowHeight);
  noStroke();
  fill(21, 109, 94);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 68/100 * windowHeight, 0, 67/100 * windowHeight);
  noStroke();
  fill(17, 87, 96);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 64/100 * windowHeight, 0, 64/100 * windowHeight);
  noStroke();
  fill(14, 66, 102);
  quad(0, 60/100 * windowHeight, windowWidth, 60/100 * windowHeight, windowWidth, 62/100 * windowHeight, 0, 61/100 * windowHeight);
    
  for (let o of littleFlower) {
  o.display();
  }
  for (let oo of littleFlower_1) {
  oo.display();
  }
  for (let ooo of littleFlower_2) {
  ooo.display();
  }
}

function Flower() {
  this.x = random(windowWidth);
  this.y = random(55/100 * windowHeight, windowHeight);
  this.xp = abs(this.x - 1/2 * windowWidth);
  this.yp = this.y - 1/2 * windowHeight;
  this.rpx = this.xp / (1/2 * windowWidth) / 10;
  this.rpy = this.yp / (1/2 * windowHeight) / 15;
  
  this.display = function() {
    noStroke();
    fill(255, 255, 255);
    //ellipse(this.x + this.rpx * (this.x - mouseX), this.y + this.rpy * (this.y - mouseY), 5, 5);
    ellipse(this.x + 2/10 * (1/2 * windowWidth - mouseX) / (1/2 * windowHeight) * (this.y - 1/2 * windowHeight), this.y + this.rpy * (this.y - mouseY), 6, 6);
  };
  
}

function Flower_1() {
  this.x = random(windowWidth);
  this.y = random(57/100 * windowHeight, windowHeight);
  this.xp = abs(this.x - 1/2 * windowWidth);
  this.yp = this.y - 1/2 * windowHeight;
  this.rpx = this.xp / (1/2 * windowWidth) / 10;
  this.rpy = this.yp / (1/2 * windowHeight) / 15;
  
  this.display = function() {
    noStroke();
    fill(255, 255, 255);
    //ellipse(this.x + this.rpx * (this.x - mouseX), this.y + this.rpy * (this.y - mouseY), 5, 5);
    ellipse(this.x + 15/100 * (1/2 * windowWidth - mouseX) / (1/2 * windowHeight) * (this.y - 1/2 * windowHeight), this.y + this.rpy * (this.y - mouseY), 3, 3);
  };
  
}

function Flower_2() {
  this.x = random(windowWidth);
  this.y = random(58/100 * windowHeight, windowHeight);
  this.xp = abs(this.x - 1/2 * windowWidth);
  this.yp = this.y - 1/2 * windowHeight;
  this.rpx = this.xp / (1/2 * windowWidth) / 10;
  this.rpy = this.yp / (1/2 * windowHeight) / 15;
  
  this.display = function() {
    noStroke();
    fill(255, 255, 255);
    //ellipse(this.x + this.rpx * (this.x - mouseX), this.y + this.rpy * (this.y - mouseY), 5, 5);
    ellipse(this.x + 10/100 * (1/2 * windowWidth - mouseX) / (1/2 * windowHeight) * (this.y - 1/2 * windowHeight), this.y + this.rpy * (this.y - mouseY), 2, 2);
  };
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}