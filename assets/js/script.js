/*jshint esversion: 6 */
/**
 * Declare Global constants for DOM elements
 */
const userChoice = document.getElementById("your-choice");
const computerchoice = document.getElementById("machine-choice");
const choices = document.querySelectorAll("button");// using the querySelectorAll function to select all the buttons.
const result = document.getElementById("message"); 

let playerMove;
let computerMove;
let message; 
/** 
* add the array foreach() method and addEventListeners  
* with click event to the buttons using
* the arrow method to pass trough a function, then a variable with a value 
* of event will target the id attribute
*/ 
choices.forEach(choice => choice.addEventListener('click', (e) => {
  playerMove = e.target.id;
  userChoice.innerHTML = playerMove;
  machineChoice();
  checkWinner();
}));

//computer make a choice by using the Math.floor Math.random method.
function machineChoice() {
  let randomChoice = Math.floor(Math.random() * 5);
  
  if (randomChoice === 0) {
    computerMove = 'rock';
  }
  if (randomChoice === 1) {
    computerMove = 'paper';
  }
  if (randomChoice === 2) {
    computerMove = 'scissors';
  }
  if (randomChoice === 3) {
    computerMove = 'lizard';
  }
  if (randomChoice === 4) {
    computerMove = 'spock';
  }
  computerchoice.innerHTML = computerMove;
  console.log(randomChoice);
}

// adding a function to check who's the winner or if it's Even Steven

function checkWinner() {
  if (playerMove === computerMove) {
    message = "Even Steven !";
  }
   if (playerMove === "paper" && computerMove === "rock") {
    message = "you Win !";
  }
  if (playerMove === "rock" && computerMove === "paper") {
    message = "you Lose !";
  }
  if (playerMove === "scissors" && computerMove === "paper") {
    message = "You Win !";
  }
  if (playerMove === "paper" && computerMove === "scissors") {
    message = "you Lose !";
  }
  if (playerMove === "rock" && computerMove === "scissors") { 
    message = "You Win !";
  }
  if (playerMove === "scissors" && computerMove === "rock") { 
    message = "You Lose !";
  }
  if (playerMove === "rock" && computerMove === "lizard") {
    message = "You Win !";
  }
  if (playerMove === "lizard" && computerMove === "rock") {
    message = "You Lose !";
  }
  if (playerMove === "lizard" && computerMove === "spock") {
    message = "You Win !";
  }
  if (playerMove === "spock" && computerMove === "lizard") {
    message = "You Lose !";
  }
  if (playerMove === "scissors" && computerMove === "lizard") {
    message = "You Win !";
  }
  if (playerMove === "lizard" && computerMove === "scissors") {
    message = "You Lose !";
  }
  if (playerMove === "lizard" && computerMove === "paper") {
    message = "You Win !"; 
  }
  if (playerMove === "paper" && computerMove === "lizard") {
    message = "You Lose !"; 
  }
  if (playerMove === "paper" && computerMove === "spock") {
    message = "You Win !";
  }
  if (playerMove === "spock" && computerMove === "paper") {
    message = "You Lose !";
  }
  if (playerMove === "spock" && computerMove === "rock") {
    message = "You Win !";
  }
  if (playerMove === "rock" && computerMove === "spock") { 
    message = "You Lose !";
  }
  result.innerHTML = message;
}


