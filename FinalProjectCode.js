
//audio
let winSound
let loseSound
let backgroundSound


//Idk tbh
let x = []
let y = []

let canvas


//Minigame
let bugxSpeed = []
let bugySpeed = []
let bugX = []
let bugY = []
let i = []
let stickmanX
let stickmanY

//objects
let room
let carRoad
let fired
let workBuilding
let boss
let office
let nightSky
let nightHills
let regularTombstone
let zombieTombstone
let crackedBackground
let forest
let prison
let bug
let citystreet
let backalley
let darkroad
let goldstar
let redcurtain
let smiley
let myoffice
let bus
let grass
let house
let police
let car
let sala
let closet
let blackfigure
let tv
let stars
let earth
let realgrave
let realsecret
let warehouse
let desert
let desertcity

//Regular Font
let customFont

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
let workBool = false
let callBossBool = false
let workABool = false
let bossOfficeBool = false
let nineOneOneBool = false
let waitBool = false
let climbBool = false
let climbTwoBool = false
let crawlBool = false
let crawlTwoBool = false
let slapBool = false
let riggedBool = false
let riggedTwoBool = false
let quitBool = false
let quitTwoBool = false
let dangerousBool = false
let safeBool = false
let safeTwoBool = false
let safeThreeBool = false
let dangerousTwoBool = false
let dangerousThreeBool = false
let safeTwoSecBool = false
let apologizeBool = false
let apologizeABool = false
let apologizeBBool = false
let apologizeTwoBBool = false
let apologizeThreeBBool = false
let crazyBool = false
let skipBool = false
let skipTwoBool = false
let livingroomBool = false
let chargeBool = false
let noChargeBool = false
let hideBool = false
let hideTwoBool = false
let confrontBool = false
let chargeHideBool = false
let nochargeHideBool = false
let livedBool = false
let rememberBool = false
let breakoutBool = false
let worldBool = false
let realLoseBool = false
let realEastereggBool = false
let confrontChargeBool = false
let kidnappedBool = false
let escapeBool = false
let escapeRunBool = false
let escapeWaitBool = false
let lostBool = false
let desertRockBool = false
let oneDirectionBool = false

//Endings
let loseBool = false
let winBool = false
let secretBool = false

function preload(){
	stickman = loadImage('FinalImages/Character2.png')
	customFont = loadFont('Fonts/OregonTrail.ttf')
	crackedBackground = loadImage('FinalImages/crackedwall3.png')
	regularTombstone = loadImage('FinalImages/RegularTombstone.png')
	zombieTombstone = loadImage('FinalImages/ZombieTombstone.png')
	nightSky = loadImage('FinalImages/Nightsky.png')
	nightHills = loadImage('FinalImages/Nighthill2.jpg')
	room = loadImage('FinalImages/room.png')
	carRoad = loadImage('FinalImages/CarOnRoad.png')
	cliff = loadImage('FinalImages/Cliff.png')
	fired = loadImage('FinalImages/pxArt.png')
	workBuilding = loadImage('FinalImages/pxArt3.png')
	boss = loadImage('FinalImages/Boss.png')
	office = loadImage('FinalImages/officespace.png')
	forest = loadImage('FinalImages/forestcrawl.png')
	prison = loadImage('FinalImages/prison.png')
	bug = loadImage('FinalImages/mosquito.png')
	citystreet = loadImage('FinalImages/cityStreet.png')
	backalley = loadImage('FinalImages/Backalley.png')
	darkroad = loadImage('FinalImages/darkRoad.png')
	goldstar = loadImage('FinalImages/goldstar.png')
	redcurtain = loadImage('FinalImages/redcurtains.png')
	smiley = loadImage('FinalImages/smiley.png')
	myoffice = loadImage('FinalImages/personaloffice.png')
	bus = loadImage('FinalImages/bus.png')
	grass = loadImage('FinalImages/grass.png')
	house = loadImage('FinalImages/House.png')
	police = loadImage('FinalImages/police.png')
	car = loadImage('FinalImages/car.png')
	sala = loadImage('FinalImages/livingroom.jpg')
	closet = loadImage('FinalImages/closet.png')
	blackfigure = loadImage('FinalImages/blackfigure.png')
	winSound = loadSound('FinalAudios/winAudio.mp3')
	loseSound = loadSound('FinalAudios/loseAudio.mp3')
	backgroundSound = loadSound('FinalAudios/backgroundAudio.mp3')
	tv = loadImage('FinalImages/realTv.jpg')
	stars = loadImage('FinalImages/stars.jpg')
	earth = loadImage('FinalImages/earth.png')
	realgrave = loadImage('FinalImages/realGrave.png')
	realsecret = loadImage('FinalImages/realSecret.jpg')
	warehouse = loadImage('FinalImages/warehouse.png')
	desert = loadImage('FinalImages/desert.jpg')
	desertcity = loadImage('FinalImages/desertcity.png')

}

function setup(){
	canvas = createCanvas(1000, 700)
	canvas.style('z-index', '-1')
	canvas.position(windowWidth/2-500, 0)
	textAlign(CENTER)
	imageMode(CENTER)

	for(let i =0; i <10; i++){
		x.push(random(width))
		y.push(random(height))
	}

	for(let i=0; i<5; i++){
		bugX.push(random(width))
		bugY.push(random(height))
		bugxSpeed.push(random(3,7))
		bugySpeed.push(random(3,7))
	}

	stickmanX = width/2
	stickmanY = height/2

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

	if(workBool == true){
		work()
	}

	if(workABool == true){
		workA()
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

	if(bossOfficeBool == true){
		bossOffice()
	}

	if(nineOneOneBool == true){
		nineOneOne()
	}

	if(waitBool == true){
		wait()
	}

	if(climbBool == true){
		climb()
	}

	if(climbTwoBool == true){
		climbTwo()
	}

	if(crawlBool == true){
		crawl()
	}

	if(crawlTwoBool == true){
		crawlTwo()
	}

	if(slapBool == true){
		slap()
	}

	if(riggedBool == true){
		rigged()
	}

	if(riggedTwoBool == true){
		riggedTwo()
	}

	if(quitBool == true){
		quit()
	}

	if(quitTwoBool == true){
		quitTwo()
	}

	if(dangerousBool == true){
		dangerous()
	}

	if(safeBool == true){
		safe()
	}

	if(dangerousTwoBool == true){
		dangerousTwo()
	}

	if(dangerousThreeBool == true){
		dangerousThree()
	}

	if(safeTwoBool == true){
		safeTwo()
	}

	if(safeThreeBool == true){
		safeThree()
	}

	if(safeTwoSecBool == true){
		safeTwoSec()
	}

	if(winBool == true){
		win()
	}

	if(apologizeBool == true){
		apologize()
	}

	if(apologizeABool == true){
		apologizeA()
	}

	if(apologizeBBool == true){
		apologizeB()
	}

	if(apologizeTwoBBool == true){
		apologizeTwoB()
	}

	if(apologizeThreeBBool == true){
		apologizeThreeB()
	}

	if(crazyBool == true){
		crazy()
	}

	if(skipBool == true){
		skip()
	}

	if(skipTwoBool == true){
		skipTwo()
	}

	if(livingroomBool == true){
		livingRoom()
	}

	if(chargeBool == true){
		charge()
	}

	if(noChargeBool == true){
		noCharge()
	}

	if(hideBool == true){
		hide()
	}

	if(confrontBool == true){
		confront()
	}

	if(chargeHideBool == true){
		chargeHide()
	}

	if(nochargeHideBool == true){
		noChargeHide()
	}

	if(hideTwoBool == true){
		hideTwo()
	}

	if(livedBool == true){
		lived()
	}

	if(rememberBool == true){
		remember()
	}

	if(breakoutBool == true){
		breakout()
	}

	if(worldBool == true){
		world()
	}

	if(realLoseBool == true){
		realLose()
	}

	if(realEastereggBool == true){
		realEasteregg()
	}

	if(confrontChargeBool == true){
		confrontCharge()
	}

	if(kidnappedBool == true){
		kidnapped()
	}

	if(escapeBool == true){
		escape()
	}

	if(escapeRunBool == true){
		escapeRun()
	}

	if(escapeWaitBool == true){
		escapeWait()
	}

	if(lostBool == true){
		lost()
	}

	if(oneDirectionBool == true){
		oneDirection()
	}

	if(desertRockBool == true){
		desertRock()
	}
	//print(mouseX, mouseY)
}

function title(){
	clear()
	image(crackedBackground, width/2, height/2, 1000, 700)
	fill(255)
	textFont(customFont)
	textSize(42)
	strokeWeight(6)
	stroke('black')
	text('Welcome to the Life of a Stickman', width/2, 347)
	text('Press (C) to Continue Through Story Slides', width/2, 392)
	textSize(22)
	text('BAM', 952, 677)
}

function intro(){
	image(crackedBackground, width/2, height/2, 1000, 700)
	fill(255)
	image(stickman, width/2, 500, 200, 320)
	fill(255)
	textSize(42)
	text('This will be you. You have one job.', width/2, 277)
}

function keep(){
	tint(255, 0, 0)
	image(crackedBackground, width/2, height/2, 1000, 700)

	fill(255, 0, 0)
	text('KEEP YOURSELF ALIVE', width/2, 377)
}

function lets(){
	clear()
	noTint()
	image(crackedBackground, width/2, height/2, 1000, 700)
	fill(255)
	textSize(42)
	text('Lets Begin.', width/2, 377)

}

// first choice

function start(){
	image(room, width/2, height/2, 1000, 700)
	push()
	translate(234, 422)
	rotate(radians(15))
	image(stickman, 0, 0, 100, 150)
	pop()
	textSize(32)
	text('You wake up. It is 7:55 A.M. You have to be at work by 8:10 A.M.', width/2, 80)
	text('It is a 35 minute drive to get there. What do you do?', width/2, 120)
	text('(A) Get ready quick and rush out the door.', width/2, 180)
	text('(B) Skip out on work for today and sleep longer.', width/2, 220)
	textSize(10)
	fill(150, 78, 20)
	text('press (E) only if you played a few times', 100, 690)
	fill(255)
}

//Different choices

function remember(){
	loseSound.setVolume(.25)
	loseSound.play()
	image(room, width/2, height/2, 1000, 700)
	image(stickman, width/2, 450, 200, 300)
	textSize(40)
	text('WWWWWWait. I remEmber everything......?', 400, 100)
	text('......What is goi(#ng on?!??!??????!?????', 490, 150)
	text('What is this? Why am I--_l;efoj_a_HERE_dlkfj_YOU_l[', 480, 284)
	text('pokjiun_BREAK_j', width/2, 500)
	text('(C)', width/2, 575)
	text('iuy_FREE_ugnaute', width/2 , 650)
}

function breakout(){
	image(tv, width/2, height/2, 1000, 700)
	text('Your character broke out of the game.', width/2, 300)
	text('He procceded to end the real you (somehow).', width/2, 350)
	text('He is now free from the cycle of the game.', width/2, 400)
}

function world(){
	image(stars, width/2, height/2, 1000, 700)
	image(stickman, width/2, 350, 400, 650)
	image(earth, width/2, 450, 400, 400)
	text('Your character procceded to take over the world.', width/2, 680)
}

function realLose(){
	image(realgrave, width/2, height/2, 1000, 700)
	text('You died.', width/2, 100)
	text('How do you manage to fail so badly that real you died?', width/2, 150)

}

function realEasteregg(){
	image(realsecret, width/2, height/2, 1000, 700)
}

function rush(){
	image(carRoad, width/2, height/2, 1000, 700)
	textSize(32)
	text("You're going to be late!", width/2, 100)
	text('(A) Speed and get there on time.', width/2, 200)
	text('(B) Drive normally and be late.', width/2, 250)
}

function skip(){
	image(room, width/2, height/2, 1000, 700)
	image(stickman, width/2, height/2, 100, 150)
	textSize(35)
	text("You wake up a few hours later. You didn't care about your job", width/2,100)
	text('that much. It sucked. You play some games on your computer.',width/2, 150)
	text('You hear a knock at your door.', width/2, 200)
}

function skipTwo(){
	image(grass, width/2, height/2, 1000, 700)
	image(house, width/2, 270, 600, 600)
	push()
	translate(658, 468)
	rotate(radians(-15))
	image(car, 0, 0, 200, 120)
	pop()
	image(stickman, 322, 523, 100, 180)
	image(police, 484, 518, 200, 250)
	textSize(34)
	text('It is the police. They have come to warn you.', width/2, 100)
	text('He lets you know there has been unidentifiable people in the area.', width/2, 150)
	text('He tells you to not go out at night. You thank him for the warning.', width/2, 200)

}

function livingRoom(){
	image(sala, width/2, height/2, 1000, 700)
	image(stickman, 450, 540, 150, 250)
	textSize(40)
	text('You decided to chill in your living room for awhile.', width/2, 100)
	text('Your phone is about to die.', width/2, 150)
	text('What do you do?', width/2, 200)
	text('(A) Charge it.', width/2, 250)
	text("(B) Don't charge it.", width/2, 300)

}

function charge(){
	image(sala, width/2, height/2, 1000, 700)
	image(stickman, 450, 540, 150, 250)
	textSize(40)
	text("You charge your phone.", width/2, 100)
	text('You hear some noises come from your window.', width/2, 150)
	text('Someone is trying to get in.', width/2, 200)
	text('What do you do?', width/2, 250)
	text('(A) Hide.', width/2, 300)
	text('(B) Confront the intruder.', width/2, 350)

}

function noCharge(){
	image(sala, width/2, height/2, 1000, 700)
	image(stickman, 450, 540, 150, 250)
	textSize(40)
	text('You let your phone die for some reason.', width/2, 100)
	text('You hear some noises come from your window.', width/2, 150)
	text('Someone is trying to get in.', width/2, 200)
	text('What do you do?', width/2, 250)
	text('(A) Hide.', width/2, 300)
	text('(B) Confront the intruder.', width/2, 350)
}

function hide(){
	image(closet, width/2, height/2, 1000, 700)
	text('You hide in closet.', width/2, 150)
	textSize(38)
	text('You keep still and hope you do not get noticed.', width/2, 200)

}

function hideTwo(){
	image(closet, width/2, height/2, 1000, 700)
	text('You hide in closet.', width/2, 150)
	textSize(38)
	text('You keep still and hope you do not get noticed.', width/2, 200)

}

function chargeHide(){
	image(closet, width/2, height/2, 1000, 700)
	textSize(35)
	text("As you're hiding in the closet you pull out your phone.", width/2, 150)
	text('You go to call the police, but your boss calls you. Your', width/2, 200)
	text('ringer is on. You hear footsteps run towards the closet.', width/2, 250)
	text("You fight but they take you. You're never heard from again.", width/2 , 300)

}

function noChargeHide(){
	image(closet, width/2, height/2, 1000, 700)
	textSize(38)
	text('You sit in the closet. You hear them move around the house.', width/2, 150)
	text('You try not to make a single noise as they pass the closet.', width/2, 200)
	text('They leave.', width/2, 250)

}

function lived(){
	image(closet, width/2, height/2, 1000, 700)
	text('You stay in the closet. Your too scared to come out.', width/2, 150)
	text('Techinally you survived but you never come out of the closet', width/2, 200)
	text('after that incident. I guess you can have the win.', width/2, 250)

}

function confront(){
	image(blackfigure, width/2, height/2, 1000, 700)
	textSize(35)
	text('You confront the intruder. As you go to confront him', width/2, 150)
	text('some other intruders grab you from behind. You did not notice them', width/2, 200)
	text("You get kidnapped. You're never heard from again.", width/2, 250)
}

function confrontCharge(){
	image(blackfigure, width/2, height/2, 1000, 700)
	text('You confront the intruder. As you go to confront him', width/2, 150)
	text('some other intruders grab you from behind.', width/2, 200)
	text("You get kidnapped. They do not search you and you keep", width/2, 250)
	text('your phone.', width/2, 300)
}

function kidnapped(){
	image(warehouse, width/2, height/2, 1000, 700)
	textSize(35)
	text('You wake up in a warehouse.', width/2, 150)
	text('You remember you have your charged phone.', width/2, 200)
	text('You realize your tied up.', width/2, 250)
	text('You cut your bindings with a sharp object you wiggled towards.', width/2, 300)
}

function escape(){
	image(warehouse, width/2, height/2, 1000, 700)
	text('You hide behind some boxes in case someone comes in.', width/2, 150)
	text('You pull out your phone. You first look at your location.', width/2, 200)
	text('You in the middle of nowhere. What do you do?', width/2, 250)
	text('(A) Run for it out a door.', width/2, 300)
	text('(B) Wait for someone to come in and surprise attack them.', width/2, 350)
}

function escapeRun(){
	image(desert, width/2, height/2, 1000, 700)
	text('You call the police and send them your location.', width/2, 150)
	text('You then hangup and make a run for it.', width/2, 200)
	text('You hear people yelling but you outrun them.', width/2, 250)
	text('You make it out! (Somehow)', width/2, 300)
}

function lost(){
	image(desert, width/2, height/2, 1000, 700)
	text('You get far enough and decide to pull out your phone.', width/2, 150)
	text('You have no signal. What do you do now?', width/2, 200)
	text('(A) Climb up a rock to try to get signal.', width/2, 250)
	text('(B) Keep going in one direction.', width/2, 300)
}

function desertRock(){
	image(desert, width/2, height/2, 1000, 700)
	text('You attempt to climb one of the big desert rocks.', width/2, 150)
	text('Somehow and someway you managed to get it fall onto you.', width/2, 200)
	text('(Definitely unexpected(not))', width/2, 250)

}

function oneDirection(){
	image(desertcity, width/2, height/2, 1000, 700)
	text('You have been walking for days.', width/2, 150)
	text('You see a city in the distance but you run out of energy.', width/2, 200)
	text('You were about a 40 minute walk from the city.', width/2, 250)

}

function escapeWait(){
	image(warehouse, width/2, height/2, 1000, 700)
	textSize(32)
	text('You wait for someone to come in.', width/2, 150)
	text('Someone comes in after a while.', width/2, 200)
	text('You jump them. You take their clothing and disguise your self.', width/2, 250)
	text('You manage to get into one of their vehicles and speed off.', width/2, 300)
	text('You call the police as your driving off. The mysterious figures', width/2, 350)
	text('are taken down. It was a cult who were trying to gather sacrifices.', width/2, 400)

}

function drive(){
	image(carRoad, width/2, height/2, 1000, 700)
	textSize(32)
	text('You hear your phone ringing.', width/2, 250)
	text('Do you pickup the phone?', width/2, 280)
	text('(A) No.',width/2, 350)
	text('(B) Yes.',width/2, 390)
}

function crash(){
	background(0)
	textSize(40)
	text('You lose control of the car suddenly.', width/2, 300)
	text('You crash.', width/2, 350)
}

function work(){
	textSize(34)
	image(workBuilding, width/2, height/2, 1000, 700)
	text("You make it to work. You're an hour late.", width/2, 250)
	text('What do you do?', width/2, 300)
	text("(A) Sneak to your desk and hope no one notices you're late.", width/2, 380)
	text('(B) Go apologize to your boss.', width/2, 420)
}

function workA(){
	textSize(34)
	image(workBuilding, width/2, height/2, 1000, 700)
	text('You get to your desk. No one seems to notice.', width/2, 250)
	text('As soon as you sit down you hear your name being called.', width/2, 300)
	text('It is your boss. You go to his office.', width/2, 350)
}

function crashTwo(){
	image(cliff, width/2, height/2, 1000, 700)
	textSize(30)
	text('You find yourself at the bottom of a cliff.', width/2, 150)
	text('You painfully pull out your phone. The call was a telemarketer.', width/2, 220)
	text('Who do you call?', width/2, 290)
	text('(A) Boss (To try to convince him not to fire you.)', width/2, 400)
	text('(B) 9/11', width/2, 450)
}

function lose(){
	image(nightHills, width/2, height/2, 1000, 700)
	image(regularTombstone, width/2, 510, 400, 400)
	fill(255)
	textSize(40)
	text('You died.', width/2, 200)
	text('Congrats on failing at your only job.', width/2, 250)

}

function secret(){
	noTint()
	image(nightHills, width/2, height/2, 1000, 700)
	image(zombieTombstone, width/2, 440, 600, 600)
}

function callBoss(){
	image(fired, width/2, height/2, 1000, 700)
	textSize(38)
	text('He fires you for being late. You phone breaks after the call.', width/2, 300)
	text('You give up and stay inside the crashed car.', width/2, 340)
	text('Drive safely next time.', width/2, 390)
}

function bossOffice(){
	image(office, width/2, height/2, 1000, 700)
	image(boss, 850 , 469, 375, 400)
	image(stickman, 119, 482, 200, 370)
	textSize(28)
	text('Your boss says, "WHERE HAVE YOU BEEN? (He is very strict on being late)', width/2, 80)
	textSize(37)
	text('How do you respond?', width/2, 130)
	text('(A) Slap him.', width/2, 210)
	text('(B) Walk out and quit.', width/2, 260)

}

function nineOneOne(){
	image(cliff, width/2, height/2, 1000, 700)
	textSize(34)
	text("As you're calling 911 you realize you do not have health insurance.", width/2, 150)
	text('You hang up the phone. You have a broken right leg and right arm.', width/2, 220)
	text('Your phone breaks after the call. What do you do?', width/2, 290)
	text('(A) Wait for someone to find you.', width/2, 400)
	text('(B) Attempt to climb back up the cliff.', width/2, 450)
}

function wait(){
	image(cliff, width/2, height/2, 1000, 700)
	textSize(40)
	text('You wait for days. No one shows up.', width/2, 300)
	text("You thought you had friend. You forgot you didn't.", width/2, 350)

}

function climb(){
	image(cliff, width/2, height/2, 1000, 700)
	textSize(40)
	text("You're about to climb the cliff.", width/2, 150)
	text("You remember you have a broken arm and leg", width/2, 220)
	text('What do you do next?', width/2, 290)
	text('(A) Crawl towards safety.', width/2, 400)
	text('(B) Try to climb up even with the broken arm and leg.', width/2, 450)

}

function climbTwo(){
	image(cliff, width/2, height/2, 1000, 700)
	textSize(40)
	text('You attempt to climb.', width/2, 300)
	text('You reach to top somehow.', width/2, 350)
	text('You left leg gives out and you fall.', width/2, 400)

}

function crawl(){
	image(forest, width/2, height/2, 1000, 700)
	textSize(35)
	text('You start crawling. You have a panic attack.', width/2, 300)
	text('You only crawled a mile in what you think is a few hours.', width/2, 350)
	text("You see a bunch of bugs come at you. Don't let them bite you.", width/2, 400)
	text('Survive.', width/2, 450)
}

function slap(){
	image(prison, width/2, height/2, 1000, 700)
	textSize(39)
	text('You got arrested for assualt. You lose everything.', width/2, 150)
	text('You get put into a cell with a known murderer.', width/2, 220)
	text('He tells you, "If you touch my stuff, I will kill you."', width/2, 290)
	text('You accidently touch his teddy bear one day. He notices.', width/2, 350)
	text('He stabs you in the middle of night.', width/2, 400)

}

function rigged(){
	image(forest, width/2, height/2, 1000, 700)
	textSize(40)
	text("You got malaria. You totally could've survied that.", width/2, height/2)
}

function riggedTwo(){
	image(forest, width/2, height/2, 1000, 700)
	textSize(30)
	text('(You were suppose to die. You literally have a broken arm and leg)', width/2, height/2)
}

function quit(){
	image(workBuilding, width/2, height/2, 1000, 700)
	textSize(36)
	text('You quit but for some reason you leave everything inside.', width/2, 300)
	text('Even your car keys. And they locked the door on you already.', width/2, 350)
	text("You decided you'll deal with it tomorrow.", width/2, 400)

}

function quitTwo(){
	image(citystreet, width/2, height/2, 1000, 700)
	textSize(32)
	text("You are forced to walk home. The walk is going to take a few hours.", width/2, 200)
	text('The quicker way is through a dangerous neighborhood.', width/2, 250)
	textSize(28)
	text('If you go the safe way you would have to walk in the dark about halfway', width/2, 300)
	text('through since it would take that long to get home. Which way do you go?', width/2, 350)
	text('(A) The dangerous quick way.', width/2, 400)
	text('(B) The safe long way.', width/2, 450)
}

function dangerous(){
	image(backalley, width/2, height/2, 1000, 700)
	textSize(40)
	text('You got lost. You find yourself in a back alley.', width/2, 300)
	text('A man walks up to you. What do you do?', width/2, 350)
	text('(A) Run.', width/2, 400)
	text('(B) Wait to see what he wants.', width/2, 450)

}

function dangerousTwo(){
	image(backalley, width/2, height/2, 1000, 700)
	textSize(40)
	text('You trip and hit your head.', width/2, height/2)
}

function dangerousThree(){
	image(backalley, width/2, height/2, 1000, 700)
	textSize(38)
	text('He wants your money.', width/2, 200)
	text("You tell him that you don't have anything.", width/2, 250)
	text("He doesn't believe you.", width/2, 300)
	text('You get beat up and left in the alley.', width/2, 350)
	text('Many people walk by but disregard you.', width/2, 400)
}

function safe(){
	image(darkroad, width/2, height/2, 1000, 700)
	textSize(40)
	text("Oopsies. This way wasn't safe either. This was unexpected.", width/2, 100)
	text('Two black figures start appoarching you from a distance.', width/2, 150)
	text('What do you do?', width/2, 200)
	text('(A) Run at the figures and punch one of them.', width/2, 250)
	text('(B) Run back.', width/2, 300)

}

function safeTwo(){
	image(darkroad, width/2, height/2, 1000, 700)
	textSize(32)
	text('You get a good punch in and then manage to punch the other figure.', width/2, 200)
	text('You look around and you see more figures coming at you.', width/2, 250)
	text('You run away and lose them. You procced to run home.', width/2, 300)

}

function safeTwoSec(){
	image(room, width/2, height/2, 1000, 700)
	push()
	translate(234, 422)
	rotate(radians(15))
	image(stickman, 0, 0, 100, 150)
	pop()
	textSize(30)
	text('You somehow survived. You never saw those black figures again.', width/2, 100)
	text("You don't question it and you go on with your life. You get in through an", width/2, 150)
	text('open window. You get your things back from your boss the next day.', width/2, 200)
}

function safeThree(){
	image(darkroad, width/2, height/2, 1000, 700)
	textSize(32)
	text('There are more figures behind you.', width/2, 300)
	text('You get kidnapped.', width/2, 350)
	text('Nothing is ever heard from you again. And no one cares to look for you.',width/2, 400)
}

function win(){
	image(redcurtain, width/2, height/2, 1000, 700)
	image(goldstar, width/2, 480, 400, 400)
	image(smiley, 635, 235, 50, 50)
	textSize(35)
	text('Congratulations on being able to complete a', width/2, 100)
	text('single job! Maybe next time you can complete', width/2, 150)
	text("more than one. Hopefully you didn't die in the process", width/2, 200)
	text('of getting here.', width/2, 250)

}

function apologize(){
	image(office, width/2, height/2, 1000, 700)
	image(boss, 850 , 469, 375, 400)
	image(stickman, 119, 482, 200, 370)
	textSize(28)
	text('Your boss says, "WHERE HAVE YOU BEEN?" (He is very strict on being late)', width/2, 80)
	textSize(37)
	text('How do you respond?', width/2, 130)
	text("(A) I'm sorry, I woke up late and then there was traffic.", width/2, 210)
	text("(B) Don't yell at me. I got here late, so what.", width/2, 260)
	text("Just get whatever you're gonna do over with.", width/2, 300)
}

function apologizeA(){
	image(office, width/2, height/2, 1000, 700)
	image(boss, 850 , 469, 375, 400)
	image(stickman, 119, 482, 200, 370)
	textSize(28)
	text('He fires you after saying, "I HAVE ZERO TOLERANCE, FOR LATENESS".', width/2, 100)
	textSize(40)
	text('What do you do?', width/2, 150)
	text('(A) Slap him.', width/2, 200)
	text('(B) Say, "nuh uh", and run out onto', width/2, 250)
	text('the street before he can say anything else.', width/2, 290)
}

function crazy(){
	image(bus, width/2, height/2, 1000, 700)
	image(stickman, 521, 497, 100, 150)
	textSize(40)
	text('For some reason you ran out like a lunatic.', width/2, 100)
	text('Unfortunately you decided to run right in front of a bus.', width/2, 150)
	text('You get hit.', width/2, 200)

}

function apologizeB(){
	image(myoffice, width/2, height/2, 1000, 700)
	image(stickman, 119, 500, 200, 370)
	textSize(40)
	text('Surpisingly, he liked the realness in how you talked.', width/2, 100)
	textSize(35)
	text('You recieved a raise and a recommendation for a higher position.', width/2, 150)
	textSize(40)
	text('He tells you not to be late again.', width/2, 200)
	text('You go back to work for now.', width/2, 250)
}

function apologizeTwoB(){
	image(workBuilding, width/2, height/2, 1000, 700)
	textSize(40)
	text('You finish your day at work.', width/2, height/2)

}

function apologizeThreeB(){
	image(room, width/2, height/2, 1000, 700)
	push()
	translate(234, 422)
	rotate(radians(15))
	image(stickman, 0, 0, 100, 150)
	pop()
	textSize(32)
	text('You get home with no problems. You go to sleep feeling happy.', width/2, 150)
}

function crawlTwo(){
	image(forest, width/2, height/2, 1000, 700)

	for(let i=0; i<bugX.length; i++){
		image(bug, bugX[i], bugY[i], 20, 20)

		bugX[i] = bugX[i] + bugxSpeed[i]
		bugY[i] = bugY[i] + bugySpeed[i]

		if(bugX[i] >= width -5 || bugX[i] <= 0){
			bugxSpeed[i] = bugxSpeed[i] * -1
		}

		if(bugY[i] >= width -5 || bugY[i] <= 0){
			bugySpeed[i] = bugySpeed[i] * -1
		}

		if(dist(stickmanX, stickmanY, bugX[i], bugY[i])<65){
			stickmanX = width/2
			stickmanY = height/2
			riggedBool = true
			crawlTwoBool = false
		}

		image(stickman, stickmanX, stickmanY, 100, 150)


		if (keyIsDown(LEFT_ARROW)) {
			stickmanX -= .5
		}

		if (keyIsDown(RIGHT_ARROW)) {
			stickmanX += .5
		}

		if (keyIsDown(UP_ARROW)) {
			stickmanY -= .5
		}

		if (keyIsDown(DOWN_ARROW)) {
			stickmanY += .5
		}

		if (stickmanX < 0){
			stickmanX += 10
		}

		if (stickmanX >= width){
			stickmanX -= 50
		}

		if (stickmanY < 0){
			stickmanY += 100
		}
		if (stickmanY >= height){
			stickmanY -= 100
		}
	}
}

//key functions

function keyPressed(){
	if(startBool == true && key == 'e'){
		startBool = false
		rememberBool = true

		return false
	}

	if(loseBool == true && key == 'r'){
		loseBool = false
		titleBool = true

		return false
	}

	if(winBool == true && key == 'r'){
		winBool = false
		titleBool = true 

		return false
	}

	if(titleBool == true && key == 'c'){
		titleBool = false
		introBool = true

		return false;
	}

	if(confrontBool == true && key == 'c'){
		confrontBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(dangerousTwoBool == true && key == 'c'){
		dangerousTwoBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(escapeRunBool == true && key == 'c'){
		escapeRunBool = false
		lostBool = true 

		return false
	}

	if(rememberBool == true && key == 'c'){
		rememberBool = false
		breakoutBool = true
		alert('ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ')
		loseSound.stop()

		return false
	}

	if(confrontChargeBool == true && key == 'c'){
		confrontChargeBool = false
		kidnappedBool = true

		return false
	}

	if(kidnappedBool == true && key == 'c'){
		kidnappedBool = false
		escapeBool = true 

		return false
	}

	if(introBool == true && key == 'c'){
		backgroundSound.rate(.4)
		backgroundSound.setVolume(.3)
		backgroundSound.loop()
		introBool = false
		keepBool = true

		return false;
	}

	if(keepBool == true && key == 'c'){
		keepBool = false
		letsBool = true

		return false;
	}

	if(letsBool == true && key == 'c'){
		letsBool = false
		startBool = true
		
		return false;
	}

	if(escapeWaitBool == true && key == 'c'){
		escapeWaitBool = false
		winBool = true 
		backgroundSound.stop()
		winSound.play()

		return false
	}

	if(skipTwoBool == true && key == 'c'){
		skipTwoBool = false
		livingroomBool = true

		return false
	}

	if(workABool == true && key == 'c'){
		workABool = false
		bossOfficeBool = true

		return false
	}

	if(crashBool == true && key == 'c'){
		crashBool = false
		crashTwoBool = true

		return false;
	}

	if(callBossBool == true && key == 'c'){
		callBossBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false;
	}

	if(quitBool == true && key == 'c'){
		quitBool = false
		quitTwoBool = true

		return false
	}


	if(climbTwoBool == true && key == 'c'){
		climbTwoBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(skipBool == true && key == 'c'){
		skipBool = false
		skipTwoBool = true

		return false
	}

	if(crawlBool == true && key == 'c'){
		crawlBool = false
		crawlTwoBool = true

		return false
	}

	if(slapBool == true && key == 'c'){
		slapBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(riggedBool == true && key == 'c'){
		riggedBool = false
		riggedTwoBool = true

		return false
	}

	if(riggedTwoBool == true && key == 'c'){
		riggedTwoBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(waitBool == true && key == 'c'){
		waitBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(dangerousThreeBool == true && key == 'c'){
		dangerousThreeBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(safeThreeBool == true && key == 'c'){
		safeThreeBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(safeTwoBool == true && key == 'c'){
		safeTwoBool = false
		safeTwoSecBool = true

		return false
	}

	if(safeTwoSecBool == true && key == 'c'){
		safeTwoSecBool = false
		winBool = true
		backgroundSound.stop()
		winSound.play()

		return false
	}

	if(apologizeBBool == true && key == 'c'){
		apologizeBBool = false
		apologizeTwoBBool = true

		return false
	}

	if(apologizeTwoBBool == true && key == 'c'){
		apologizeTwoBBool = false
		apologizeThreeBBool = true

		return false
	}

	if(apologizeThreeBBool == true && key == 'c'){
		apologizeThreeBBool = false
		winBool = true
		backgroundSound.stop()
		winSound.play()

		return false
	}

	if(crazyBool == true && key == 'c'){
		crazyBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(hideBool == true && key == 'c'){
		hideBool = false
		chargeHideBool = true

		return false
	}

	if(hideTwoBool == true && key == 'c'){
		hideTwoBool = false
		nochargeHideBool = true

		return false
	}

	if(chargeHideBool == true && key == 'c'){
		chargeHideBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(nochargeHideBool == true && key == 'c'){
		nochargeHideBool = false
		livedBool = true

		return false
	}

	if(livedBool == true && key == 'c'){
		livedBool = false
		winBool = true
		backgroundSound.stop()
		winSound.play()
		
		return false
	}

	if(breakoutBool == true && key == 'c'){
		breakoutBool = false
		worldBool = true
		
		return false
	}

	if(worldBool == true && key == 'c'){
		worldBool = false
		loseSound.loop()
		realLoseBool = true 

		return false
	}

	if(desertRockBool == true && key == 'c'){
		desertRockBool = false
		loseBool = true
		backgroundSound.stop()
		loseSound.play()
		return false
	}

	if(oneDirectionBool == true && key == 'c'){
		oneDirectionBool = false
		loseBool = true 
		backgroundSound.stop()
		loseSound.play()

		return false
	}

	if(quitTwoBool == true && key == 'a'){
		quitTwoBool = false
		dangerousBool = true

		return false
	}

	if(livingroomBool == true && key == 'a'){
		livingroomBool = false
		chargeBool = true

		return false
	}

	if(apologizeBool == true && key == 'a'){
		apologizeABool = true
		apologizeBool = false

		return false
	}

	if(escapeBool == true && key == 'a'){
		escapeBool = false
		escapeRunBool = true 

		return false
	}

	if(lostBool == true && key == 'a'){
		lostBool = false
		desertRockBool = true 

		return false
	}

	if(safeBool == true && key =='a'){
		safeBool = false
		safeTwoBool = true

		return false
	}

	if(startBool == true && key == 'a'){
		startBool = false
		rushBool = true

		return false;
	}

	if(rushBool == true && key == 'a'){
		rushBool = false
		crashBool = true

		return false
	}

	if(crashTwoBool == true && key == 'a'){
		crashTwoBool = false
		callBossBool = true

		return false;
	}

	if(driveBool == true && key == 'a'){
		driveBool = false
		workBool = true

		return false
	}

	if(workBool == true && key == 'a'){
		workBool = false
		workABool = true

		return false
	}

	if(bossOfficeBool == true && key == 'a'){
		bossOfficeBool = false
		slapBool = true

		return false
	}


	if(nineOneOneBool == true && key == 'a'){
		nineOneOneBool = false
		waitBool = true

		return false
	}

	if(climbBool == true && key == 'a'){
		climbBool = false
		crawlBool = true

		return false
	}

	if(dangerousBool == true && key == 'a'){
		dangerousBool = false
		dangerousTwoBool = true

		return false
	}

	if(apologizeABool == true && key == 'a'){
		apologizeABool = false
		slapBool = true

		return false
	}

	if(chargeBool == true && key == 'a'){
		chargeBool = false
		hideBool = true

		return false
	}

	if(noChargeBool == true && key == 'a'){
		noChargeBool = false 
		hideTwoBool = true

		return false
	}

	if(chargeBool == true && key == 'b'){
		chargeBool = false
		confrontChargeBool = true

		return false
	}

	if(noChargeBool == true && key =='b'){
		noChargeBool = false
		confrontBool = true

		return false
	}

	if(dangerousBool == true && key == 'b'){
		dangerousBool = false
		dangerousThreeBool = true

		return false
	}

	if(livingroomBool == true && key == 'b'){
		livingroomBool = false
		noChargeBool = true

		return false
	}

	if(lostBool == true && key == 'b'){
		lostBool = false
		oneDirectionBool = true 

		return false
	}

	if(apologizeABool == true && key == 'b'){
		apologizeABool = false
		crazyBool = true

		return false
	}

	if(escapeBool == true && key == 'b'){
		escapeWaitBool = true
		escapeBool = false

		return false
	}

	if(workBool == true && key == 'b'){
		workBool = false
		apologizeBool = true

		return false
	}

	if(rushBool == true && key == 'b'){
		rushBool = false
		driveBool = true

		return false
	}

	if(quitTwoBool == true && key == 'b'){
		quitTwoBool = false
		safeBool = true

		return false
	}

	if(bossOfficeBool == true && key == 'b'){
		bossOfficeBool = false
		quitBool = true

		return false
	}

	if(safeBool == true && key == 'b'){
		safeBool = false
		safeThreeBool = true

		return false
	}

	if(startBool == true && key == 'b'){
		startBool = false
		skipBool = true

		return false
	}

	if(driveBool == true && key == 'b'){
		crashBool = true
		driveBool = false

		return false
	}

	if(crashTwoBool == true && key == 'b'){
		crashTwoBool = false
		nineOneOneBool = true

		return false
	}

	if(nineOneOneBool == true && key == 'b'){
		nineOneOneBool = false
		climbBool = true

		return false
	}

	if(climbBool == true && key == 'b'){
		climbBool = false
		climbTwoBool = true

		return false
	}

	if(apologizeBool == true && key == 'b'){
		apologizeBool = false
		apologizeBBool = true

		return false
	}
}

function mouseClicked(){
	if (loseBool == true && mouseX > 300 && mouseX < 800 && mouseY < 810 && mouseY > 310){
		secretBool = true;
	}

	if (realLoseBool == true && mouseX > 337 && mouseX < 606 && mouseY < 629 && mouseY > 193){
		realEastereggBool = true
	}
}