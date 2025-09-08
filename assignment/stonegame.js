const buttons = document.querySelectorAll('button');
const message = document.getElementById('message');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  
  message.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}. ${result}`;
  
  if (result === 'You Win!') {
    playerScore++;
  } else if (result === 'You Lose!') {
    computerScore++;
  }
  
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (playerChoice === 'rock') {
    return computerChoice === 'scissors' ? 'You Win!' : 'You Lose!';
  } else if (playerChoice === 'paper') {
    return computerChoice === 'rock' ? 'You Win!' : 'You Lose!';
  } else {
    return computerChoice === 'paper' ? 'You Win!' : 'You Lose!';
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playGame(button.id);
  });
});
