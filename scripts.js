// This file creates a Rock, Paper, Scissors game that takes user input 
// and a computer choice to simulate a RPS game.

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 30) //Return a randon number 0 to 30
    if (computerChoice >= 0 && computerChoice <= 9) {
        return computerChoice = "rock";
    } else if (computerChoice >= 10 && computerChoice <= 19){
        return computerChoice = "paper";
    } else if (computerChoice >= 20 && computerChoice <= 30) {
        return computerChoice = "scissors";
    }
   
}
getComputerChoice();
console.log(computerChoice)
//function playRound(computerChoice) {
 //  getUserChoice = prompt("Make your selection, User...Rock, Paper, or Scissors...");
 //  userChoice = getUserChoice.toLowerCase();
//   if (userChoice == "rock" && computerChoice == ) {
  

 //  }


//}