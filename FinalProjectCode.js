
//Skies
let nightSky

//Tombstones for Lose Screen/Secret Ending
let regularTombstone
let zombieTombstone


//Regular Font
let customFont

//Background for title
let crackedBackground

//Game Character
let stickman

//Different Screens/Levels
let titleBool = true
let introBool = false
let keepBool = false
let letsBool = false
let startBool = false
let loseBool = false
let winBool = false
let secretBool = false

function preload(){
	stickman = loadImage('Character2.png')
	customFont = loadFont('OregonTrail.ttf')
	crackedBackground = loadImage('crackedwall3.png')
	regularTombstone = loadImage('RegularTombstone.png')
	zombieTombstone = loadImage('ZombieTombstone.png')
	nightSky = loadImage('Nightsky.png')

}

function setup(){
	createCanvas(windowWidth, windowHeight)

	textAlign(CENTER)
	imageMode(CENTER)
}

function draw(){

	if(titleBool == true){
		title()
	}

	if(introBool == true){
		intro()
	}

	if(keepBool == true){
		keep()
	}

	if(letsBool == true){
		lets()
	}

	if(loseBool == true){
		lose()
	}

	if(secretBool == true){
		secret()
	}


	print(mouseX, mouseY)

}

function title(){
	image(crackedBackground, windowWidth/2, windowHeight/2)
	noTint()
	fill(255)
	textFont(customFont)
	textSize(35)
	text('Welcome to the Stickman Trials', windowWidth/2, windowHeight/2-15)
	text('Press C to continue', windowWidth/2, windowHeight/2+15)
}

function intro(){
	noTint()
	image(crackedBackground, windowWidth/2, windowHeight/2)
	fill(255)
	image(stickman, windowWidth/2, windowHeight-150, 100, 150)
	text('This will be you. You have one job.', windowWidth/2, windowHeight/2-100)
}

function keep(){
	tint(255, 0, 0)
	image(crackedBackground, windowWidth/2, windowHeight/2)

	fill(255, 0, 0)
	text('KEEP YOURSELF ALIVE', windowWidth/2, windowHeight/2)
}

function lets(){
	noTint()
	image(crackedBackground, windowWidth/2, windowHeight/2)
	fill(255)
	text('Lets Begin', windowWidth/2, windowHeight/2)

}

function lose(){
	noTint()
	image(nightSky, windowWidth/2, windowHeight/2)
	image(regularTombstone, windowWidth/2, windowHeight-100, 200, 200)
	fill(255)
	text('You died.', windowWidth/2, windowHeight-300)
	text('Congrats on failing at your only goal.', windowWidth/2, windowHeight-270)
		
}

function secret(){
	noTint()
	image(nightSky, windowWidth/2, windowHeight/2)
	image(zombieTombstone, windowWidth/2, windowHeight-150, 300, 300)
	fill(255)
	text('Or did you?', windowWidth/2, windowHeight-300)
}

function keyPressed(){
	if(key == 'c'){
		titleBool = false
		introBool = true
	}

	if(key == 'v'){
		introBool = false
		keepBool = true
	}

	if(key == 'b'){
		keepBool = false
		letsBool = true
	}
//put all booleans in here later
	if(key == 'l'){
		letsBool = false
		loseBool = true
	}

	if(key == '='){
		loseBool = false
		secretBool = true

	}
}

	


