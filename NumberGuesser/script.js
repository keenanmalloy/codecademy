let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9 + 1);
};

const compareGuesses = (userGuess, compGuess, targetNum) => {
  const userDiff = Math.abs(userGuess - targetNum);
  const compDiff = Math.abs(compGuess - targetNum);
  if (userDiff <= compDiff) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore + 1;
  } else {
    computerScore + 1;
  }
};

const advanceRound = () => {
  currentRoundNumber + 1;
};

const init = () => {
  const target = generateTarget();
  const didIWin = compareGuesses(5, 10, target);

  if (didIWin) {
    updateScore("human");
  } else {
    updateScore("computer");
  }

  advanceRound();
};

init();
