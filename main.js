let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultDiv = document.querySelector(".round-results");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

//logic that generates the choice for the computer
function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//logic that checks if the player or the computer wins
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    p.textContent = "You Tied!";
    resultDiv.appendChild(p);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    const p = document.createElement("p");
    p.textContent = "You won!";
    resultDiv.appendChild(p);
  } else {
    computerScore++;
    const p = document.createElement("p");
    p.textContent = "You lost!";
    resultDiv.appendChild(p);
  }
}

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.textContent = `player score:     ${playerScore}           `;
  computerScoreSpan.textContent = `computer score: ${computerScore}      `;
};

const winner = (playerScore, computerScore) => {
  if (playerScore === 3) {
    const h2 = document.createElement("h2");
    h2.textContent = "Congratz you won!";
    resultDiv.appendChild(h2);
  } else if (computerScore === 3) {
    const h2 = document.createElement("h2");
    h2.textContent = "You lost, better luck next time!";
    resultDiv.appendChild(h2);
  }
};

//three buttons Rock, Paper, Scissors in order
rockButton.addEventListener("click", () => {
  const computerSelection = computerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  winner(playerScore, computerScore);
  // console.log(playerSelection, computerSelection);
  // console.log(playRound());
  // console.log(playerScore, computerScore);
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  winner(playerScore, computerScore);
  // console.log(playerSelection, computerSelection);
  // console.log(playRound());
  // console.log(playerScore, computerScore);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = computerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  winner(playerScore, computerScore);
  // console.log(playerSelection, computerSelection);
  // console.log(playRound());
  // console.log(playerScore, computerScore);
});

// function game() {
//   const computerSelection = computerChoice();
//   playRound(playerSelection, computerSelection);
//   console.log(playerSelection, computerSelection);
// }
// if (playerScore > computerScore) {
//   console.log(playerScore, computerScore);
//   return "you won from the computer";
// } else if (playerScore === computerScore) {
//   return "You tied!";
// } else {
//   return "You lost from the computer";
// // }

// game();
// console.log(game());
