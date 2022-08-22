// This file creates a Rock, Paper, Scissors game that takes user input 
// and a computer choice to simulate a RPS game.

// A function that generates the computer's RPS choice
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
string = getComputerChoice();

// A function called "game" will simulate five rounds of Rock, Paper, Scissors
function game(){
    for (i = 1; i < 6; i++) {
        alert (`Round ${i}`);
        string = getComputerChoice();
        playRound(string);
    }
} game();

// A function that defines the RPS logic
function playRound(string) {
    getUserChoice = prompt("Make your selection, User...Rock, Paper, or Scissors...");
    userChoice = getUserChoice.toLowerCase();
    // Logical operator statments for "if user chooses rock"
    if (userChoice == "rock" && computerChoice == "scissors") {
        alert("User wins! Rock beats Scissors")

    } else if (userChoice == "rock" && computerChoice == "paper"){
        alert("Computer wins! Paper beats Rock")

    } else if (userChoice == "rock" && computerChoice == "rock"){
        alert("Draw! Opponents chose the same item of destruction...Try again!")
    }
    // Logical operator statements for "if user chooses paper"
    if (userChoice == "paper" && computerChoice == "rock") {
        alert("User wins! Paper beats Rock")
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        alert("Computer wins! Scissors beat Paper")
    } else if (userChoice =="paper" && computerChoice == "paper"){
        alert("Draw! Opponents chose the same item of destruction...Try again!")
    }
    // Logical operator statements for "if user chooses scissors"
    if (userChoice == "scissors" && computerChoice == "paper") {
        alert("User wins! Scissors beat Paper")
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        alert("Computer wins! Rock beats Scissors")
    } else if (userChoice =="scissors" && computerChoice == "scissors"){
        alert("Draw! Opponents chose the same item of destruction...Try again!")
    }
}
playRound();

