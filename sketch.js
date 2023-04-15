const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;
function setup() {
  createCanvas(500, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  alignSlider.position(10,370)
  cohesionSlider = createSlider(0,5,1,0.1);
  cohesionSlider.position(155,370)
  separationSlider = createSlider(0,5,1,0.1);
  separationSlider.position(300,370)
  
  s = createInput("200")
  s.position(10,30)
  population = s.value
  s.changed(inisiasiPerubahan)
  inisiasiPerubahan()
}

function inisiasiPerubahan(){
  for (let i=0; i<s.value();i++){
    flock.push(new Boid());
  }
}

function draw() {
  background(0, 0, 139);
  
  text("Populasi",10,20)
  text("Alignment",50,370)
  text("Cohesion",195,370)
  text("Separation",340,370)
  
  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }
}