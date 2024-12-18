let handSign = ["rock", "paper", "scissors"];
//let userInput = prompt();

function randomComputerHandSigns() {
  let x = Math.floor(Math.random() * 3);
  return handSign[x];
}

function gameResultChecker() {
if (userInput == "rock" && randomComputerHandSigns() == "handSign[0]") {
  console.log("The match was Draw");
} 
else if (userInput == "rock" && randomComputerHandSigns() == "handSign[1]") {
  console.log("You lost the match");
} 
else if (userInput == "rock" && randomComputerHandSigns() == "handSign[2]") {
  console.log("You won the match");
}
else if (userInput == "paper" && randomComputerHandSigns() == "handSign[0]") {
  console.log("You won the match");
}
else if (userInput == "paper" && randomComputerHandSigns() == "handSign[1]") {
  console.log("The match was Draw");
}
else if (userInput == "paper" && randomComputerHandSigns() == "handSign[2]") {
  console.log("You lost the match");
}
else if (userInput == "scissors" && randomComputerHandSigns() == "handSign[0]") {
  console.log("You lost the match");
}
else if (userInput == "scissors" && randomComputerHandSigns() == "handSign[1]") {
  console.log("You won the match");
}
else if (userInput == "scissors" && randomComputerHandSigns() == "handSign[2]") {
    console.log("The match was Draw");
}
else {
  console.log("enter a valid input");
}
}
