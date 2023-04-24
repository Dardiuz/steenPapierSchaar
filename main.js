let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultDiv = document.querySelector(".results");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return "You Win!";
  } else {
    computerScore++;
    return "You Lose!";
  }
}

rockButton.addEventListener("click", () => {
  const computerSelection = computerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  console.log(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore, computerScore);
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
