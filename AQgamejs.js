let bg;
let playButton, aboutButton, creditsButton;
let popupVisible = false;
let popupText = "";
let bgMusic;
let musicStarted = false;
let AQlogo;
//let characterFrames = ["kylie1.png", "kylie2.png", "allen1.png", "allen2.png" ]; // Array to store images
let frameIndex = 0; // Keeps track of the current frame
let frameDelay = 6; // Controls animation speed
let counter = 0; // 

// Load assets
function preload() {
  bg = loadImage("AQbg2.png");  
  bgMusic = loadSound("Minecraft.mp3"); 
}

function setup() {
  createCanvas(windowWidth -20, windowHeight + 2);
  textSize(20);
  textAlign(CENTER);
  fill(255);

  AQlogo = createImg("AQlogo2.png");
  AQlogo.position(width / 2 - 250,- AQlogo.width / 2 + 40);
  AQlogo.size(490, 250);
  

  // Play Button
  playButton = createImg("Massets/playbtn.png", "Play");
  playButton.position(width / 2 - 600, height / 2 + 10);
  playButton.size(300, 150);
  playButton.mousePressed(startGame);

  // About Button
  aboutButton = createImg("Massets/aboutbtn.png", "About");
  aboutButton.position(width / 2 - 150, height / 2 + 10);
  aboutButton.size(300, 130);
  aboutButton.mousePressed(() =>
    showPopup(
      "Game by Academia.Inc\nAnswer correctly and achieve top student life!\nUse WASD, SPACE, and Mouse to interact."
    )
  );

  // Credits Button
  creditsButton = createImg("Massets/creditbtn.png", "Credits");
  creditsButton.position(width / 2 + 300, height / 2 + 10);
  creditsButton.size(300, 130);
  creditsButton.mousePressed(() =>
    showPopup("Credits:\n- Qaseh and Arissa 2K4\n- Muna (bg) and Adri (website)\n- Music: uhm totally ours (copyrighted)\n- Art: Pixelated")
  );
}

function draw() {
  background(bg);


  // Title

  // Popup Window
  if (popupVisible) {
    fill(0, 150);
    rect(width / 2 - 350, height / 2 - 120, 700, 300, 20);
    fill(255);
    textSize(30);
    text(popupText, width / 2, height / 2);
  }
}

// Start Game Function
function startGame() {
    alert("Game Starting");
    setTimeout(() => {
      window.location.href = "AQvideo.html"; 
    }, 100);
}

// Show popup
function showPopup(txt) {
  popupText = txt;
  popupVisible = true;
  playButton.hide();
  aboutButton.hide();
  creditsButton.hide();
  popupTimer = millis(); 
}

// Fix Popup Stuck Issue - Close on Click
function mousePressed() {
  if (popupVisible && millis() - popupTimer > 500) {
    popupVisible = false;
    playButton.show();
    aboutButton.show();
    creditsButton.show();
    
  }

  // Fix Music Not Playing - Start on Click
  if (!musicStarted) {
    userStartAudio(); // Required for browsers to allow sound
    bgMusic.setVolume(1);
    bgMusic.loop();
    musicStarted = true;
  }
}

//const frames = [
//    "kylie1.png", "kylie2.png", "allen1.png", "allen2.png"
 // ]; // Add your frame images
 // let currentFrame = 0;
  //let lastUpdateTime = 0;
 // const frameSpeed = 100; // Milliseconds per frame
  
  function animate(time) {
    if (time - lastUpdateTime > frameSpeed) {
      lastUpdateTime = time;
      currentFrame = (currentFrame + 1) % frames.length;
      
      let img = new Image();
      img.src = frames[currentFrame];
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 50, 50, 100, 100); // Adjust position & size
      };
    }
  
    requestAnimationFrame(animate);
  }
  
  // Start animation
  requestAnimationFrame(animate);