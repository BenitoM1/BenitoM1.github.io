function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(23, 48, 87);
  
  noStroke()
  fill(5, 125, 13)
  rect(1, 500, windowWidth, 700)
  
  fill(166, 173, 167)
  ellipse(563, 138, 100,100)
  
  fill(232, 221, 2)
  triangle(142, 217, 210, 187, 198, 150)
  triangle(306, 166, 345, 139, 354, 181)
  
  fill(125, 1, 5)
  rect(400, 400, 50, 100)
  
  fill(1, 120, 66)
  triangle(360,434, 426, 339, 482, 434)
    
}