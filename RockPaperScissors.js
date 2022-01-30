const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //   if (['rock', 'paper', 'scissors'].includes(userInput))
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error, please type: rock, paper, or scissors.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie game.";
  }
  if (userChoice === "bomb") {
    return "You won! Cheating prick";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer won!";
    }
  } else {
    return "Congratulations, you won!";
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
    }
    return "Sorry, computer won!";
  } else {
    return "Congratulations, you won!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
