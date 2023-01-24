// const playerSelection = getUserInput.toLowerCase();

let pCounter = 0;
let cCounter = 0;
let pTotal = 0;
let cTotal = 0;

//Game call where 5 rounds of game will be played with computer

game();

//game function 

function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter Your choice").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log("Player selection:", playerSelection);
    console.log("Computer selection:", getComputerChoice());

    playRound(playerSelection, computerSelection);


    console.log("Player Score: ", pCounter);
    console.log("Computer Score: ", cCounter);
  }
 // display winner
  scoreBoard(pCounter, cCounter);
}

//Get computer Choice function //

function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3);

  switch (compChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
    default:
      return "Invalid entry";
  }
}

//playRound function //

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("Its a Draw!!");
    pCounter += 0;
    cCounter += 0;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      alert("Computer1 Win!!");
      cCounter++;
    } else {
      alert("Player1 Win!!");
      pCounter++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      alert("Computer2 Win!!");
      cCounter++;
    } else {
      alert("Player2 Win!!");
      pCounter++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      alert("Computer3 Win!!");
      cCounter++;
    } else {
      alert("Player3 Win!!");
      pCounter++;
    }
  }
}

//scoreBoard function //
function scoreBoard(pCounter, cCounter) {
  if (pCounter == cCounter) {
    return "Its a ties!! cheers";
  } else if (pCounter > cCounter) {
    alert("Player won the battle!!");
  } else {
    alert("Computer won the battle ");
  }
}
