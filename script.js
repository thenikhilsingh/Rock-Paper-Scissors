let handSign = ["rock", "paper", "scissors"];

function randomComputerHandSigns() {
  let x = Math.floor(Math.random() * 3);
  return handSign[x];
}

let userInput;

let gameResult = document.querySelector("#gameResult");

let yourScorePoints = document.querySelector("#yourScorePoints");
let computerScorePoints = document.querySelector("#computerScorePoints");
yourScorePoints.innerHTML = 0;
computerScorePoints.innerHTML = 0;
let userScore = 0;
let computerScore = 0;

function incrementUserScore() {
  if (userScore < 10 && computerScore < 10) {
    userScore += 1;
    yourScorePoints.innerHTML = userScore;
  } else {
    yourScorePoints.innerHTML = 0;
    userScore = 0;
    computerScorePoints.innerHTML = 0;
    computerScore = 0;
    gameResult.innerHTML = "";
  }
}

function incrementComputerScore() {
  if (userScore < 10 && computerScore < 10) {
    computerScore += 1;
    computerScorePoints.innerHTML = computerScore;
  } else {
    yourScorePoints.innerHTML = 0;
    userScore = 0;
    computerScorePoints.innerHTML = 0;
    computerScore = 0;
    gameResult.innerHTML = "";
  }
}

function gameOutput() {
  if (userScore == 10 || computerScore == 10) {
    if (userScore == 10) {
      gameResult.innerHTML = "You Won the Game";
    } else if (computerScore == 10) {
      gameResult.innerHTML = "Computer Won the Game";
    }
    setTimeout(() => {
      yourScorePoints.innerHTML = 0;
      userScore = 0;
      computerScorePoints.innerHTML = 0;
      computerScore = 0;
      gameResult.innerHTML = "";
    }, 2000);
  }
}

function gameResultChecker() {
  let computerInput = randomComputerHandSigns();

  if (userInput == "rock" && computerInput == handSign[0]) {
    gameResult.innerHTML = "The match was Draw as the computer choose rock";
  } else if (userInput == "rock" && computerInput == handSign[1]) {
    gameResult.innerHTML = "You lost the match as the computer choose paper";
    incrementComputerScore();
    gameOutput();
  } else if (userInput == "rock" && computerInput == handSign[2]) {
    gameResult.innerHTML = "You won the match as the computer choose scissors";
    incrementUserScore();
    gameOutput();
  } else if (userInput == "paper" && computerInput == handSign[0]) {
    gameResult.innerHTML = "You won the match as the computer choose rock";
    incrementUserScore();
    gameOutput();
  } else if (userInput == "paper" && computerInput == handSign[1]) {
    gameResult.innerHTML = "The match was Draw as the computer choose paper";
  } else if (userInput == "paper" && computerInput == handSign[2]) {
    gameResult.innerHTML = "You lost the match as the computer choose scissors";
    incrementComputerScore();
    gameOutput();
  } else if (userInput == "scissors" && computerInput == handSign[0]) {
    gameResult.innerHTML = "You lost the match as the computer choose rock";
    incrementComputerScore();
    gameOutput();
  } else if (userInput == "scissors" && computerInput == handSign[1]) {
    gameResult.innerHTML = "You won the match as the computer choose paper";
    incrementUserScore();
    gameOutput();
  } else if (userInput == "scissors" && computerInput == handSign[2]) {
    gameResult.innerHTML = "The match was Draw as the computer choose scissors";
  } else {
    gameResult.innerHTML = "enter a valid input";
  }
  // console.log(userScore);
  // console.log(computerScore);
}

let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  userInput = "rock";
  gameResultChecker();
});

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  userInput = "paper";
  gameResultChecker();
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  userInput = "scissors";
  gameResultChecker();
});
