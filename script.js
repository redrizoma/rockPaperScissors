const options = {
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors',
};

function getHumanChoice() {
  return prompt('Choose your play: ');
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());
console.log(getHumanChoice());
