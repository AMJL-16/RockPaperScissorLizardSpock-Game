/**
 * Declare Global constants for DOM elements
 */
const userChoice = document.getElementById("your-choice");
const computerchoice = document.getElementById("machine-choice");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score"); 
const choices = document.querySelectorAll("button"); // using the queryselectorall function to selsect all the buttons.

let playerMove
let computerMove
/** 
* use the for each method and addEventListeners to the buttons using
* the arrow method to pass trough a function
*/ 
choices.forEach(choice => choice.addEventListener('click', (e) => {
  playerMove = e.target.id 
  userChoice.innerHTML = playerMove
  generateComputerChoice()
}))

function generateComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 4)
  
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
}







// add event listener and setTimeout() to rules button.
/**function myFunction() {
  document.getElementById("rule-text").innerHTML = "A Simple Way to Remember Who Wins:Scissors cut paper|Paper covers rock|Rock crushes lizard|Lizard poisons Spock|Spock smashes scissors|Scissors decapitate the lizard|Lizard eats paper|Paper disproves Spock|Spock vaporizes rock|Rock crushes scissors|";
  setTimeout(function() {
    document.getElementById("rule-text").style.display = "none";
  }, 15000); // I set the timeOutfunction to 15 seconds to have the rules disappear.
}*/
