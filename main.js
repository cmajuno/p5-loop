function setup(){
  createCanvas(500,500);
}
let x = 20
function draw (){
  background (100,0,200);
  noStroke();
  fill (200,100,10);
  while (x < width){
    circle (x,100,30);
    x+=40
  }
  
}
