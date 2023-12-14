//            [    0      1       2       3      4     etc.]
let colours = ['#262626', '#404040', '#595959', '#737373', '#8c8c8c', '#999999', '#b3b3b3', '#d9d9d9', 'white', '#f2f2f2', '#e6e6e6', '#cccccc', '#a6a6a6', '#808080'];
let colourIndex = 0;
var sounds = [];
let sfxIndex;


function preload(){
//pushes each sound into the array
      sounds.push(loadSound('158606-Fireworks-Single-Tube-Bombshell-Screech_Owl-Burst-Whistle-Quick-Sweetener.wav'));
      sounds.push(loadSound('158604-Fireworks-Single-Tube-Bombshell-Screech_Owl-Burst-Whistle-Strong.wav'));
      sounds.push(loadSound('158590-Fireworks-Single-Tube-Mortar-Rainbow_Mine_with_Whistle-Launch-Burst-Poof-Whistle-Faint-Pitched_Low.wav'));
      sounds.push(loadSound('158588-Fireworks-Single-Tube-Mortar-Rainbow_Mine_with_Whistle-Launch-Burst-Poof-Whistle-Faint.wav'));
      sounds.push(loadSound('109137-Massive_firework_bang_with_cheering-AOS01255.wav'));
      sounds.push(loadSound('107815-Massive_firework_bang_with_cheering-AOS01254.wav'));
      sounds.push(loadSound('78884-firework-signle-large.wav'));
}


function setup() {
    var canvas = createCanvas(1000, 800);
    canvas.parent("p5container");
// Putting the strokeWeight here allowed it to look like the light was hitting the edges of the canvas and then fading out
    strokeWeight(10);
    stroke(colours[colourIndex]);
}


function draw() {
// Instead of a background, I filled the canvas with a rectangle
// Using numbers allowed me to create a 'light fading in' effect around the outside when the background is redrawn, helping me to leave a trail and add another colour element
// This allowed the ellipse following the mouse to create a trail and allowed me to implement an outline around the canvas edges
fill(0, 12);
rect(0, 0, width, height);
strokeWeight(20);
stroke(colours[colourIndex]);
//line(mouseX * 0.99, mouseY* 0.99, pmouseX* 0.99, pmouseY* 0.99);
fill(colours[colourIndex]);
noStroke();
ellipse(mouseX, mouseY, 15, 15);
}
            
     
function mousePressed() {         
// When the mouse is pressed, the colours will change
            
stroke(colours[colourIndex]);
fill(colours[colourIndex]);
sfxIndex = floor(random(0, sounds.length)) // generates a random number which determines the index num in the array
sounds[sfxIndex].play(); // plays the sound
              
colourIndex++

if(mousePressed){
    var x = random(height);
    var y = random(width);
    // Smaller ellipses
    var s = random(5, 25)

    // 4th 'alpha' value in fillsets the intensity of the colour, so can be from 0 to 1 in this case
    stroke(colours[colourIndex]);
    fill(colours[colourIndex]);
    ellipse(x, y, s);
}


// Blue colour set = Left Arrow
if (keyIsDown(LEFT_ARROW)) {
    colours = ['#0000ff', '#4d4dff', '#0066ff', '#33adff', '#66c2ff', '#4ddbff', '#99ebff', '#b3ffff', 'white', '#e6ffff', '#d6f5f5', '#80dfff', '#4da6ff', '#1a75ff'];
}
// Purple colour set = Up Arrow
if (keyIsDown(UP_ARROW)) {
    colours = ['#333399', '#4040bf', '#5c00e6', '#751aff', '#8533ff', '#9933ff', '#b366ff', '#cc99ff', 'white', '#ff99ff', '#ff4dff', '#e600a8', '#990070', '#4d0039'];
}
// Green colour set = Right Arrow
if (keyIsDown(RIGHT_ARROW)) {
    colours = ['#003300', '#004d00', '#006600', '#00994d', '#00cc66', '#80ffbf', '#99ff99', '#ccffcc', 'white', '#ddffcc', '#bbff99', '#aaff80', '#80ff80', '#00b36b'];
}
// Red colour set = Down Arrow
if (keyIsDown(DOWN_ARROW)) {
    colours = ['#ff3300', '#ff5c33', '#ff6600', '#ff8533', '#ff9933', '#ffbb33', '#ffd480', '#ffefcc', 'white', '#ffe0cc', '#ffa366', '#ff751a', '#ff704d', '#ff471a'];
}


// Create a burst of colour when the user clicks the mouse
if (mouseButton == LEFT){

// Larger ellipses
    var d = random(50, 100);

    fill(colours[colourIndex]);
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, d);

}

}