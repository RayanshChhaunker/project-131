img = "";
statusifs = "";
function preload() {
    img = loadImage('cup.webp');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}
function modelLoaded() {
    console.log("MODALLLL LOADDDADDDDD");
    statusifs = true;
    objectDetector.detect(img, el_results);
}
function el_results(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill('yellow');
    text("Cup", 45, 75);
    noFill()
    stroke("#F0CB35");
    rect(30, 60, 550, 230); 
    stroke("#FF0000")
    text("Saucer", 45, 300);
    fill('red');
    noFill();
    stroke("#FF0000");
    rect(20, 280, 600, 100)
}