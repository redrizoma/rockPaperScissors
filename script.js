let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const input = prompt('Choose your play: ');
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return 'Rock';
  if (random === 1) return 'Paper';
  return 'Scissors';
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 'Draw!';
  }
  if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  }
  computerScore++;
  return `You lose! ${computerChoice} beats ${humanChoice}`;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log('Human score:', humanScore);
console.log('Computer score:', computerScore);
