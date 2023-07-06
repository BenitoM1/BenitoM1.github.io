let ellipseX = 300;
let furby;

function preload(){
	furby = loadImage('furby.png')
}

function setup(){

	createCanvas(windowWidth, windowHeight)
	textAlign(CENTER, CENTER)
	background(23, 48, 87)

    for(let i = 0; i < 100; i++){
	    	ellipse(random(windowWidth), random(windowHeight), 20, 20)
	}
	imageMode(CENTER)
	noCursor()
	}


function draw(){



	// if(keyIsPressed == true){
	//     background(23, 48, 87)
	//     ellipseX = 800
	// }else{

	// 	background(255, 111, 0)
	//     ellipseX = 300
	// }


	for(let i = 0; i < windowWidth; i=i+10){
		print(i)
		line(i, 0, i, windowHeight)

	}

	for(let i = 0; i < windowHeight; i=i+10){
		line(0, windowHeight/2, windowWidth, i)

	}

	
	textSize(40)
	text('L + Ratio man', 200, 200)

	image(furby, mouseX, mouseY)

	// ellipse(ellipseX, 500, 100, 100)

	print(ellipseX)

	}

	//function mouseClicked(){
		//if(ellipseX == 300){
		  //  ellipseX = 800
	    //}

	    //if(ellipseX == 800){
	       // ellipseX = 300
	    //}
	//}


