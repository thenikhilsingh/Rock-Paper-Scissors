let handSign = ["rock", "paper", "scissors"];

function randomComputerHandSigns() {
  let x = Math.floor(Math.random() * 3);
  return handSign[x];
}

let userInput;

let gameResult=document.querySelector("#gameResult")

function gameResultChecker() {
  let computerInput=randomComputerHandSigns();

if (userInput == "rock" && computerInput == handSign[0]) {
gameResult.innerHTML="The match was Draw as the computer choose rock"
} 
else if (userInput == "rock" && computerInput == handSign[1]) {
  gameResult.innerHTML="You lost the match as the computer choose paper"
} 
else if (userInput == "rock" && computerInput == handSign[2]) {
  gameResult.innerHTML="You won the match as the computer choose scissors"
}
else if (userInput == "paper" && computerInput == handSign[0]) {
  gameResult.innerHTML="You won the match as the computer choose rock"
}
else if (userInput == "paper" && computerInput == handSign[1]) {
  gameResult.innerHTML="The match was Draw as the computer choose paper"
}
else if (userInput == "paper" && computerInput == handSign[2]) {
  gameResult.innerHTML="You lost the match as the computer choose scissors"
}
else if (userInput == "scissors" && computerInput == handSign[0]) {
  gameResult.innerHTML="You lost the match as the computer choose rock"
}
else if (userInput == "scissors" && computerInput == handSign[1]) {
  gameResult.innerHTML="You won the match as the computer choose paper"
}
else if (userInput == "scissors" && computerInput == handSign[2]) {
    gameResult.innerHTML="The match was Draw as the computer choose scissors"
}
else {
  gameResult.innerHTML="enter a valid input"
}
}


let rock=document.querySelector("#rock");
rock.addEventListener("click",()=>{
  userInput="rock"
  gameResultChecker()
})

let paper=document.querySelector("#paper");
paper.addEventListener("click",()=>{
  userInput="paper"
  gameResultChecker()
})

let scissors=document.querySelector("#scissors");
scissors.addEventListener("click",()=>{
  userInput="scissors"
  gameResultChecker()
})


let yourScorePoints=document.querySelector("#yourScorePoints")
let computerScorePoints=document.querySelector("#computerScorePoints")
yourScorePoints.innerHTML=0;
computerScorePoints.innerHTML=0;
function userScore() {
 for (let i = 0; i < 11; i++) {
  return yourScorePoints.innerHTML+i;
 }
}


