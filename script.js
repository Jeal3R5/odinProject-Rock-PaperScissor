// //create a function that randomly returns rock, paper, scissors
// function getComputerChoice() {
//   const chooseOne = ["ROCK", "PAPER", "SCISSOR"];
//   const compChoice = Math.floor(Math.random() * chooseOne.length);
//   return chooseOne[compChoice];
// }

// getComputerChoice();

// //write function that plays a single round of Rock Paper Scissor, function takes two parameters, then returns a string that declares the winner

// function playRound(playerSelection, computerSelection) {
//     let playerSelection = "ROCK";
//     const computerSelection = getComputerChoice();

//   if (playerSelection === computerSelection) {
//     roundWinner = "Tie";
//     return "Its a tie, try again!";
//   }

//   if (
//     (playerSelection === "ROCK" || playerSelection === "rock" || playerSelection === "Rock")
//     && (computerSelection === "SCISSOR")) {
//     roundWinner = "Player";
//     return "ROCK beats SCISSOR, You win!";
//   }
//   if (
//     playerSelection === "SCISSOR" ||
//     "Scissor" ||
//     "scissor" && computerSelection === "PAPER")
//    {
//     roundWinner = "Player";
//     return "SCISSOR beats PAPER, You win!";
//   }

//   if (
//     playerSelection === "PAPER" ||
//     "paper" ||
//     ("Paper" && computerSelection === "ROCK")
//   ) {
//     //playerScore++;
//     roundWinner = "Player";
//     return "PAPER beats ROCK, You win!";
//   }

//   if (
//     (computerSelection === "ROCK" && playerSelection === "SCISSOR" ||
//     "scissor" ||
//     "Scissor"
//   ) {
//     //computerScore++;
//     roundWinner = "Computer";
//     return "ROCK beats SCISSOR, You lose!";
//   }

//   if (
//     computerSelection === "SCISSOR" && playerSelection === "PAPER" ||
//     "Paper" ||
//     "paper"
//   ) {
//     roundWinner = "Computer";
//     return "SCISSOR beats PAPER, You lose!";
//   }

//   if (
//     computerSelection === "PAPER" && playerSelection === "ROCK" ||
//     "Rock" ||
//     "rock"
//   ) {
//     //    computerScore++;
//     roundWinner = "Computer";
//     return "PAPER beats ROCK, You lose!";
//   }

// playRound();

//paper beats rock
//rock beats scissors
//scissor beats paper

//Same Game - different explaination, lets see if this one goes smoother?

function game() {
  let playerScore;
  let computerScore;
  let moves;

  function playGame() {}
}
