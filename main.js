let playerScore = 0;
let computerScore = 0;

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

const playerSelection = "rock";

function game() {
  for (let i = 0; i < 5; i++) {
    // let playerSelection = prompt(
    //   "Enter rock paper or scissors to play a game").toLowerCase();
    const computerSelection = computerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    console.log(playerScore, computerScore);
    return "you won from the computer";
  } else if (playerScore === computerScore) {
    return "You tied!";
  } else {
    return "You lost from the computer";
  }
}
game();
console.log(game());
