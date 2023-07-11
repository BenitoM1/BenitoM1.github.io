
//Count on how many times a key is pressed
let keycount = 0
let keycountA = 0
let keycountB = 0
let keycountC = 0
let keycountD = 0

//objects
let room
let carRoad
let fired

//Night
let nightSky
let nightHills

//Tombstones for Lose Screen/Secret Ending
let regularTombstone
let zombieTombstone


//Regular Font
let customFont

//Background for title
let crackedBackground

//Game Character
let stickman

//Beginning
let titleBool = true
let introBool = false
let keepBool = false
let letsBool = false

//Main part
let startBool = false
let rushBool = false
let sleepBool = false
let crashBool = false
let crashTwoBool = false
let deathOneBool = false
let driveBool = false
let callBossBool = false

//Endings
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
	nightHills = loadImage('Nighthill2.jpg')
	room = loadImage('room.png')
	carRoad = loadImage('CarOnRoad.png')
	cliff = loadImage('Cliff.png')
	fired = loadImage('pxArt.png')


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

	if(startBool == true){
		start()
	}

	if(rushBool == true){
		rush()
	}

	if(crashBool == true){
		crash()
	}

	if(driveBool == true){
		drive()
	}

	if(crashTwoBool == true){
		crashTwo()
	}

	if(deathOneBool == true){
		deathOne()
	}

	if(callBossBool == true){
		callBoss()
	}

	//print(mouseX, mouseY)

}

//middle point is 768, 377

function title(){
	background(0)
	image(crackedBackground, 769, 377, 1000, 700)
	fill(255)
	textFont(customFont)
	textSize(42)
	strokeWeight(3)
	stroke('black')
	text('Welcome to the Life of a Stickman', 769, 347)
	text('Press (C) to Continue Through the Story Slides', 769, 392)
	textSize(22)
	fill(255, 0, 0)
	text('Warning: Be careful with which keys are pressed and do not press them more times than needed.', 769, 500)
}

function intro(){
	image(crackedBackground, 769, 377, 1000, 700)
	fill(255)
	image(stickman, 769, 500, 200, 320)
	fill(255)
	textSize(42)
	text('This will be you. You have one job.', 769, 277)
}

function keep(){
	tint(255, 0, 0)
	image(crackedBackground, 769, 377, 1000, 700)

	fill(255, 0, 0)
	text('KEEP YOURSELF ALIVE', 769, 377)
}

function lets(){
	noTint()
	image(crackedBackground, 769, 377, 1000, 700)
	fill(255)
	textSize(42)
	text('Lets Begin', 769, 377)

}

// first choice

function start(){
	background(0)
	image(room, 769, 377, 1000, 700)
	push()
	translate(504, 437)
	rotate(radians(15))
	image(stickman, 0, 0, 100, 150)
	pop()
	textSize(32)
	text('You wake up. It is 7:55 A.M. You have to be at work by 8:10 A.M.', 769, 80)
	text('It is a 20 minute drive to get there. What do you do?', 769, 120)
	text('(A) Get ready quick and rush out the door.', 769, 180)
	text('(B) Skip out on work for today and sleep longer.', 769, 220)
}

//second choices and reactions if there is one

function rush(){
	image(carRoad, 769, 377, 1000, 700)
	text('Your going to be late!', 769, 100)
	text('(A) Speed and get there on time.', 769, 200)
	text('(B) Drive normally and be late.', 769, 250)
}

function drive(){
	image(carRoad, 769, 377, 1000, 700)
	text('You hear your phone ringing. You go to pickup.', 769, 250)
	text('Do you stop yourself?', 769, 280)
	text('(D) Yes.',769, 350)
	text('(E) No.',769, 390)

}

function crash(){
	background(0)
	text('You lose control of the car suddenly.', 769, 300)
	text('You crash.', 769, 350)
}

//third choice

function crashTwo(){
	background(0)
	image(cliff, 769, 377, 1000, 700)
	textSize(30)
	text('You find yourself at the bottom of a cliff.', 769, 150)
	text('You painfully pull out your phone. The call was a telemarketer.', 769, 220)
	text('Who do you call?', 769, 290)
	text('(A) Boss (To try to convince him not to fire you.)', 769, 400)
	text('(B) 9/11', 769, 450)
}

// endings

function lose(){
	background(0)
	image(nightHills, 769, 378, 1000, 700)
	image(regularTombstone, 769, 550, 400, 400)
	fill(255)
	text('You died.', 769, 200)
	text('Congrats on failing at your only job.', 769, 250)
		
}

function secret(){
	image(nightHills, 769, 378, 1000, 700)
	image(zombieTombstone, 769, 440, 600, 600)
	fill(255)
	
}

function callBoss(){
	background(0)
	image(fired, 769, 377, 1000, 700)
	text('He fires you for being late. You give up.', 769, 300)
	text('You stay inside the crashed car.', 769, 340)
	text('Drive safely next time.', 769, 390)
}

//key functions

function keyPressed(){
	if(key == 'c'){ 
		if(titleBool == true){
			titleBool = false
			introBool = true
			
			
		}

		if(introBool == true){
		introBool = false
		keepBool = true
		
		
		}
		if(keepBool == true){
		keepBool = false
		letsBool = true
		
		
		}

	}

	

	

	// if(keycount == 6){
	// 	letsBool = false
	// 	startBool = true
	// 	//keycount++
	// }

	// if(keycount == 8){
	// 	if(crashBool == true){
	// 	crashBool = false
	// 	crashTwoBool = true
	// 	}
	// 	//keycount++
	// }


	// // not working need help
	// if(keycount == 10){
	// 	if(callBossBool == true){
	// 	callBossBool = false
	// 	loseBool = true
	// 	}
	// }

	// // if(key == 'l'){
	// // 	letsBool = false
	// // 	loseBool = true
	// // }

	// // if(key == '='){
	// // 	loseBool = false
	// // 	secretBool = true

	// // }

	// if(key == 'a'){
	// 	startBool = false
	// 	rushBool = true
	// 	keycountA++

	// }

	// if(keycountA == 2){
	// 	crashBool = true
	// 	rushBool = false
	// 	keycountA++
	// }

	// if(keycountA == 4){
	// 	crashTwoBool = false
	// 	callBossBool = true
	// }

	// if(key == 'b'){
	// 	rushBool = false
	// 	driveBool = true
	// 	keycountB++
	// }

	// if(key == 'e'){
	// 	crashBool= true
	// 	driveBool = false
	// }
}

	


