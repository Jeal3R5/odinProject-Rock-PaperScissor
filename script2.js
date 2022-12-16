//Variables
let playerScore = 0;
let computerScore = 0;

//create function to randomly return rock, paper, or scissors
function getComputerChoice() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const compRandNum = Math.floor(Math.random() * options.length);
  const computerChoice = options[compRandNum];
  console.log(computerChoice);
  return computerChoice;
}

//Write function that plays single round of RPS, takes two parameters(playerSelection and computerSelection), return a string that declares the winner of the round ex: "You Lose! Paper beats Rock"

//make your function playerSelection case-insensitive
//return the results of this function call, not console.log
function getResult(playerChoice, computerChoice) {
  playerScore = 0;
  computerScore = 0;
  if (playerChoice === computerChoice) {
    playerScore += 0;
    computerScore += 0;
    let result = "It's a tie";
    return result;
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    let result = "You Win! Rock beats Scissors";
    playerScore++;
    computerScore += 0;
    return result;
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    let result = "You Win! Paper beats Rock";
    playerScore++;
    computerScore += 0;
    return result;
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    let result = "You win! Scissors beat Paper";
    playerScore++;
    computerScore += 0;
    return result;
  } else {
    let result = `You Lose! ${computerChoice} beats ${playerChoice}`;
    return result;
  }
}
//const playerChoice = "PAPER";
//const computerChoice = getComputerChoice();
//console.log(playerChoice);
//console.log(getResult(playerChoice, computerChoice));

function showResult(playerScore, computerScore, playerChoice, computerChoice) {}

function onClickRPS(playerChoice) {}

//write a new function called game(), call the playRound function inside this one to play a five round game that keeps score and reports a winner or loser at the end.
//use a loop to play the five rounds: ex for(let i = 0; i < 5; i++) {your code here}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  console.log(rpsButtons);
}












//at this point you should be using console.log() to display the result of each round and the winner at the end.

//use prompt() to get input from the user.
//playerChoice = prompt("Choose: Rock, Paper, Scissor");

// I think i want to use event listeners and buttons rather than using a prompt. this means I will have more to code but it will look much better and be more functional I think...if I can figure it out.
