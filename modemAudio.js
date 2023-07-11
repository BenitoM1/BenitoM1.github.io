

let canvas
let playButton

let modemSlider
let modemRateSlider
let bgSlider

let amplitude
let level

let modem

let selBackground

let r = 0
let g = 0
let b = 0

let baby

let airstrikeFont

function preload(){
	modem = loadSound('ModemSound.mp3')
	baby = createImg('dancingbaby2.gif')
	airstrikeFont = loadFont('airstrike.ttf')

}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0,0)
	background(0)

	playButton = createButton('Play Audio')
	playButton.position(50, 100)
	playButton.mousePressed(playModem)

	modemSlider = createSlider(0, 1, 1, 0.01)
	modemRateSlider = createSlider(0, 3, 1, 0.01)
	//bgSlider = createSlider(0, 255, 0, 1) made dropdown

	selBackground = createSelect()
	selBackground.position(10,50)
	selBackground.option('red')
	selBackground.option('blue')
	selBackground.changed(changeBackground)

	amplitude = new p5.Amplitude() //make sure Amp is capitalized

}

function changeBackground(){
	if(selBackground.value()){
		r = 255
		g = 0
		b = 0
	}

	if(selBackground.value() == 'blue'){
		r = 0
		g = 0
		b = 255
	}
}

//! mean if its playing than loop it
function playModem(){
	if(!modem.isPlaying()){
		modem.loop()
		playButton.html('Pause Audio')
	}else{
		modem.pause() //if you want to stop it 
					  //and restart then do modem.stop
		playButton.html('Play Audio')
	}

}

function draw(){
	background(r, g, b) // old one background(bgSlider.value())
	baby.position(200, 200)
	textSize(40)
	textFont(airstrikeFont)
	fill(255)
	text('Dancing Baby Site!', windowWidth/2, 50)
	
	level = amplitude.getLevel()
	let size = map(level, 0, .6, 0, 900) //try not to use size here 
	ellipse(width/2, height/2, size, size)

	modem.setVolume(modemSlider.value())
	modem.rate(modemRateSlider.value())
 
}



