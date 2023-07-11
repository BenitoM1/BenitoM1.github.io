let imgs = []

let randomButton

let canvas

let namesArray = ['jon', 'bob', 'emily', 'andrea']

let name = 0
let randomImage = 0


function preload(){
	for(let i=0; i<3; i++){
		imgs[i] = loadImage(i + '.jpg')

	}
}

function setup(){
	canvas= createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0,0)

	randomButton = createButton('Random Image and Name')
	randomButton.mousePressed(randImageName)

	imageMode(CENTER)
	textAlign(CENTER)
}

function randImageName(){	//imgs.length is the size of the array or how many it will choose form
	randomImage = int(random(imgs.length))
	name = int(random(namesArray.length))

}

function draw(){
	background(255)
	image(imgs[randomImage], windowWidth/2, windowHeight/2)
	textSize(125)
	fill(200, 30, 100)
	text(namesArray[name], 200, 300)
}