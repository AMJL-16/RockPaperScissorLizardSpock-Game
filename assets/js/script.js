/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("game");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");







 // addEventListeners to the buttons


// add event listener and setTimeout() to rules button.
function myFunction() {
  document.getElementById("rule-text").innerHTML = "A Simple Way to Remember Who Wins:Scissors cut paper|Paper covers rock|Rock crushes lizard|Lizard poisons Spock|Spock smashes scissors|Scissors decapitate the lizard|Lizard eats paper|Paper disproves Spock|Spock vaporizes rock|Rock crushes scissors|";
  setTimeout(function() {
    document.getElementById("rule-text").style.display = "none";
  }, 15000); // I set the timeOutfunction to 15 seconds to have the rules disappear.
}
