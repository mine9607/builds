var myMessage = document.getElementById("message");

function showMessage() {
  myMessage.className = "show";
}

setTimeout(showMessage, 3000);

//note - use setInterval if you want to create a timed slider carousel in Javascript

var colorChange = document.getElementById("color-changer");
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var counter = 0;

function changeColor() {
  if (counter >= colors.length) {
    counter = 0;
  }
  colorChange.style.background = colors[counter];
  counter++;
}

var myTimer = setInterval(changeColor, 1500);

colorChange.onclick = function () {
  clearInterval(myTimer);
  colorChange.innerHTML = "Timer Stopped";
};
