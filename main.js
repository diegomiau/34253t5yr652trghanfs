function preload (){
img = loadImage ("drive-download-20220316T094853Z-001/dog_cat.jpg");
}
function setup(){
canvas = createCanvas (640, 420);
canvas.center ();
}
function draw(){
image(img,0,640,420);
fill(255, 0, 0); text("Perro", 45, 75); noFill(); stroke(255, 0, 0); rect(30, 60, 450, 350 );
}