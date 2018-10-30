let playerChoice = ''
const computerChoiceArray = ['rock', 'paper', 'scissors']
let computerChoice =
  computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]
console.log(computerChoice)

const declareWinner = () => {
  let winDeclaration = document.querySelector('.results-section h2')

  if (playerChoice === 'rock' && computerChoice === 'rock') {
    winDeclaration.textContent = "It's a tie!"
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    winDeclaration.textContent = 'Computer wins!'
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    winDeclaration.textContent = 'Player wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    winDeclaration.textContent = 'Player wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'paper') {
    winDeclaration.textContent = "It's a tie!"
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    winDeclaration.textContent = 'Computer wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    winDeclaration.textContent = 'Computer wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    winDeclaration.textContent = 'Player wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    winDeclaration.textContent = "It's a tie!"
  } else {
    winDeclaration.textContent = 'Something went wrong!'
  }
}

const playerClickRock = () => {
  playerChoice = 'rock'
  declareWinner()
}

const playerClickPaper = () => {
  playerChoice = 'paper'
  declareWinner()
}

const playerClickScissors = () => {
  playerChoice = 'scissors'
  declareWinner()
}

const main = () => {
  document
    .querySelector('.player-section .rock')
    .addEventListener('click', playerClickRock)
  document
    .querySelector('.player-section .paper')
    .addEventListener('click', playerClickPaper)
  document
    .querySelector('.player-section .scissors')
    .addEventListener('click', playerClickScissors)
  document
    .querySelector('.results-section .reset')
    .addEventListener('click', () => {
      document.location = '/'
    })
}

document.addEventListener('DOMContentLoaded', main)
