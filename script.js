const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getHumanChoice() {
  while (true) {
    const input = prompt('Choose Rock, Paper, or Scissors:');

    if (input === null) return null; // user cancelled

    const normalized =
      input.trim().charAt(0).toUpperCase() +
      input.trim().slice(1).toLowerCase();

    if (CHOICES.includes(normalized)) {
      return normalized;
    }

    alert(`"${input}" is not a valid choice. Try again.`);
  }
}

function getComputerChoice() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

// Pure function: same inputs → same output, no side effects.
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return { winner: 'tie', message: `Tie! Both choose ${humanChoice}.` };
  }

  const humanWins =
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock');

  if (humanWins) {
    return {
      winner: 'human',
      message: `You win! ${humanChoice} beats ${computerChoice}`,
    };
  }

  return {
    winner: 'computer',
    message: `You lose! ${computerChoice} beats ${humanChoice}`,
  };
}

function playGame(rounds = 5) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= rounds; i++) {
    console.log(`\n--- Round ${i} ---`);

    const human = getHumanChoice();
    if (human === null) {
      console.log('Game cancelled.');
      return;
    }

    const computer = getComputerChoice();
    const result = playRound(human, computer);

    console.log(result.message);

    if (result.winner === 'human') humanScore += 1;
    else if (result.winner === 'computer') computerScore += 1;

    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }

  console.log('/n=== Final Result ===');
  if (humanScore > computerScore) console.log('You won the game!');
  else if (computerScore > humanScore) console.log('The computer won!');
  else console.log('Overal tie.');
}

playGame();
