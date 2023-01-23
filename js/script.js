
const  getUserInput = prompt("Enter Your choice");
let playerSelection =getUserInput.toUpperCase() ;
const computerSelection = getComputerChoice();

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  switch (compChoice) {
    case 0:
      return "ROCK";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "SCISSORS";
    default:
        return "Invalid entry";
  }
}

console.log("Computer selection : ",getComputerChoice());
console.log(playerSelection); 

console.log(playRound(playerSelection,computerSelection
    ));

function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection){
      return "Its a ties";
    }
   else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
       return "You Win"
   }
   else if (playerSelection ==="SCISSORS" && computerSelection === "PAPER"){
       return "You win";
   }
   else if (playerSelection === "PAPER"  && computerSelection === "ROCK"){
       return "You win";
   }
   else {
       return "Computer Win";
   }
}
