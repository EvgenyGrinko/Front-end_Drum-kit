//Get an array of all <button class="drum">
const allButtons = document.getElementsByClassName("drum");

//If any of these buttons are clicked, then make an appropriate sound.
for(let i = 0; i<allButtons.length; i++){
  allButtons[i].addEventListener("click", function(){

    let buttonKey = this.innerHTML;

    makeSound(buttonKey);

    makeAnimation(buttonKey);
  });
};

//If an appropriate key on a keybord is pressed, then also make a sound. Read more about interface "KeyboardEvent" (that's where property "key" comes from).
document.addEventListener("keydown", function(event){

  makeSound(event.key);

  makeAnimation(event.key);

});

//This function is cause an Audio object and play a sound, depending on the "key".
function makeSound(key){
  switch (key) {
    case "q":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "e":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "r":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "t":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "y":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "u":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    default: console.log("Inappropriate button \""+ key + "\" was pressed.");
  }
};

//This function makes animation of clicking on the button
function makeAnimation(keyButton){
  //Add new class "pressed" to the clicked button, which changes "box-shadow" and "opacity" properties.
  document.querySelector("." + keyButton).classList.add("pressed");
  //After 100ms delay remove added class "pressed".
  setTimeout(function () {
  document.querySelector("." + keyButton).classList.remove("pressed");
  }, 100);
}
