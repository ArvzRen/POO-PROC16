var box1, box2, box3, box4;


function setup() {
  createCanvas(1000, 400);
  box1 = new Box();
  box2 = new Box();
  box3 = new Box();
  box4 = new Box();
 
}
function draw(){
  background(0);
  box1.show();
  box1.set_speed(2);

  box2.show();
  box2.set_speed(8);

  box3.show();
  box3.set_speed(0.5);

  box4.show();
  box4.set_speed(3);
  
}

