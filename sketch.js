//Declaring variable for storing image of spacecraft
var spacecraft_img,spacecraft_left_img,spacecraft_right_img,spacecraft_down_img;
//Declaring variables for storing the images the ISS and background
var iss_img, bg_img;

//Declaring iss, spacecraft and hasDocked variables
var iss,spacecraft,hasDocked = false;

//Declaring variable for music
var bg_music;

//Loading the images
function preload()
{
  bg_img = loadImage('images/spacebg.jpg');
  iss_img = loadImage('images/iss.png');
  spacecraft_img = loadImage('images/spacecraft1.png');
  spacecraft_left_img = loadImage('images/spacecraft3.png');
  spacecraft_right_img = loadImage('images/spacecraft4.png');
  spacecraft_down_img = loadImage('images/spacecraft2.png');
  bg_music = loadSound('music.mp3');
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  //Creating sprite for ISS
  iss = createSprite(displayWidth / 2, (displayHeight / 2) - 100, 200,200);
  iss.addImage(iss_img);
  iss.scale = 1.3;

  //Creating sprite for Spacecraft
  spacecraft = createSprite(displayWidth / 2, 700, 100,100);
  spacecraft.addImage(spacecraft_img);
  spacecraft.scale = 0.27;
}

function draw() {
  background(bg_img);

  //Play the background music
  bg_music.play();

  //To display coordinates of SpaceCraft, ISS and the Docking Area
  strokeWeight(2);
  stroke('black');
  fill('white');
  textSize(20);
  text("Location Info from Control Centre",61,40);

  //SpaceCraft Coordinates
  strokeWeight(2);
  stroke('black');
  fill('white');
  textSize(20);
  text("Spacecraft.x : " + round(spacecraft.x),61,70);

  strokeWeight(2);
  stroke('black');
  fill('white');
  textSize(20);
  text("Spacecraft.y : " + round(spacecraft.y),61,100);

  //ISS coordinates
  strokeWeight(2);
  stroke('black');
  fill('white');
  textSize(20);
  text("ISS.x : " + iss.x,61,130);

  strokeWeight(2);
  stroke('black');
  fill('white');
  textSize(20);
  text("ISS.y : " + iss.y,61,160);

  //Docking Area coordinates
  strokeWeight(2);
  stroke('black');
  fill('white');
  textSize(20);
  text("Docking_position.x : 678",61,187);

  strokeWeight(2);
  stroke('black');
  fill('white');
  textSize(20);
  text("Docking_position.y : 460",61,215);

  if (!hasDocked)
  {
    //Setting random X position for spacecraft
    spacecraft.x = random(spacecraft.x + 0.5, spacecraft.x - 0.5);

    //Add images when key is Pressed and move the spacecraft
    if (keyDown('left_arrow'))
    {
      spacecraft.x += 2;
      spacecraft.addImage(spacecraft_left_img);
      spacecraft.x = spacecraft.x;
    }
    else if (keyDown('right_arrow'))
    {
      spacecraft.x -= 2;
      spacecraft.addImage(spacecraft_right_img);
      spacecraft.x = spacecraft.x;
    }
    else if (keyDown('up_arrow'))
    {
      spacecraft.y -= 2;
      spacecraft.addImage(spacecraft_down_img);
      spacecraft.x = spacecraft.x;
    }
    else if (keyDown('down_arrow'))
    {
      spacecraft.addImage(spacecraft_down_img);
    }
  }

  //To check if the spacecraft is in position
  if (iss.isTouching(spacecraft) && spacecraft.x >= 678 && spacecraft.x <= 688 && spacecraft.y >= 460 && spacecraft.y <= 470)
  {
    strokeWeight(2);
    stroke('white');
    fill('blue');
    textSize(30);
    text("Docking Successful!", 616, 700);
    // spacecraft.x = 678;
    // spacecraft.y = 460;
  }

  iss.depth = iss.depth;
  iss.depth = spacecraft.depth + 1;

  drawSprites();
}