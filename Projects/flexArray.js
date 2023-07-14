s
//these empty arrays will eventually
//contain the x and y cooridinates of the image
let x = []
let y = []

let furby

function preload(){
	furby = loadImage('furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

}

function draw(){

	background(150, 40, 100)

	for(let i=0; i<x.length; i++){
		image(furby, x[i], y[i], 60, 60)
		//splice(i, 1) if wanted to slice specific item
		//put this here in 4 loop
	}

}

function mouseReleased(){
	x.push(mouseX)
	y.push(mouseY)

	print(x.length)
}

function keyPressed(){
	if(key == 'x'){
		x.splice(0, 1) //to remove from last place it is x.length-1
		y.splice(0, 1) //or it is y.length-1 instead of 0
	}
}