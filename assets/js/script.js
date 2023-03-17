/**
 * Declare Global constants for DOM elements
 */
const userChoice = document.getElementById("your-choice");
const computerchoice = document.getElementById("machine-choice");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score"); 
const choices = document.querySelectorAll("button"); // using the querySelectorAll function to select all the buttons.

let playerMove
let computerMove

/** 
* use the array foreach() method and addEventListeners to the buttons using
* the arrow method to pass trough a function. I learn it with the 
*/ 
choices.forEach(choice => choice.addEventListener('click', (e) => {
  playerMove = e.target.id 
  userChoice.innerHTML = playerMove
  machineChoice()
}))

//computer make a choice by using the Math.floor Math.random method.
function machineChoice() {
  let randomChoice = Math.floor(Math.random() * 5)
  
  if (randomChoice === 0) {
    computerMove = 'rock'
  }
  if (randomChoice === 1) {
    computerMove = 'paper'
  }
  if (randomChoice === 2) {
    computerMove = 'scissors'
  }
  if (randomChoice === 3) {
    computerMove = 'lizard'
  }
  if (randomChoice === 4) {
    computerMove = 'spock'
  }
  computerchoice.innerHTML = computerMove
  console.log(randomChoice)
}

// adding a function to check who's the winner or if it's a draw

function checkWinner() {

}







// add event listener and setTimeout() to rules button.
/**function myFunction() {
  document.getElementById("rule-text").innerHTML = "A Simple Way to Remember Who Wins:Scissors cut paper|Paper covers rock|Rock crushes lizard|Lizard poisons Spock|Spock smashes scissors|Scissors decapitate the lizard|Lizard eats paper|Paper disproves Spock|Spock vaporizes rock|Rock crushes scissors|";
  setTimeout(function() {
    document.getElementById("rule-text").style.display = "none";
  }, 15000); // I set the timeOutfunction to 15 seconds to have the rules disappear.
}*/
