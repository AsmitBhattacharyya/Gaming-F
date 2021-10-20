var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}

constructor() {
  this.input = createInput("").attribute("placeholder", "Enter your name");
  this.playButton = createButton("play");
  this.greeting = createElement("h2");
}

setElementPosition() {
  this.input.position(width / 2 - 110, height / 2 - 80);
  this.playButton.position(width / 2 - 90, height / 2 - 20);
  this.greeting.position(width / 2 - 300, height / 2 - 100);
}

setElementStyle() {
  this.input.class("customInput");
  this.playButton.class("customButton");
  this.greeting.class("greeting");
}
handleMousePressed() {
  this.playButton.mousePressed(() => {
    this.input.hide();
    this.playButton.hide();
    var message = 
   ' Hello ${this.input.value()}
    </br>wait for another player to join...'
  });
}

display() {
  this,setElementPosition();
  this.setElementStyle();
}
