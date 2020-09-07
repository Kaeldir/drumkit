var drumButtonList = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtonList.length; i++) {
  drumButtonList[i].addEventListener("click", function() {
    var buttonName = this.innerHTML;
    playSound(buttonName);
    buttonAnimation(buttonName);
  });
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(keyPressed) {
  switch (keyPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(keyPressed){
  var activeButton = document.querySelector("."+keyPressed);
  if (activeButton !== null){
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
      activeButton.classList.toggle("pressed");
    }, 100);
  }
}
