const totalScore = { computerScore: 0, playerScore: 0 };

//randomized computer choice
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

//getResult compares playerChoice and computerChoice and returns the score accordingly
function getResult(playerChoice, computerChoice) {
  let score;
  //All situations where human draws, set "score" to 0
  if (playerChoice === computerChoice) {
    score = 0;
    //All situations where human wins, set 'score' to 1
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
    //All situations where human loses, set 'score' to -1
  } else {
    score = -1;
  }
  return score;
}

//update DOM to You Win or You lose or It's a draw based on score also show player choice vs computer choice
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a draw!";
  } else {
    resultDiv.innerText = "You Won!";
  }

  handsDiv.innerText = `🧑 chooses ${playerChoice}  🤖 chooses ${computerChoice}`;

  playerScoreDiv.innerText = `Player Score: ${totalScore["playerScore"]}`;
}

//Calculate who won and show it on screen
function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  console.log({ totalScore });
  showResult(score, playerChoice, computerChoice);
}

//Make the buttons listen for a click and do something with it
function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  console.log(rpsButtons);

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

//clears all the text on the DOM
function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
}

playGame();
