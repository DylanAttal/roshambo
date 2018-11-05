let playerChoice = ''
const computerChoiceArray = ['rock', 'paper', 'scissors']
let computerChoice =
  computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]
console.log(computerChoice)

const declareWinner = () => {
  let winDeclaration = document.querySelector('.results-section h2')

  if (playerChoice === 'rock' && computerChoice === 'rock') {
    document.querySelector('.player-section .rock').classList.add('green-glow')
    document.querySelector('.computer-section .rock').classList.add('red-glow')
    winDeclaration.textContent = "It's a tie!"
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    document.querySelector('.player-section .rock').classList.add('green-glow')
    document.querySelector('.computer-section .paper').classList.add('red-glow')
    winDeclaration.textContent = 'Computer wins!'
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    document.querySelector('.player-section .rock').classList.add('green-glow')
    document
      .querySelector('.computer-section .scissors')
      .classList.add('red-glow')
    winDeclaration.textContent = 'Player wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    document.querySelector('.player-section .paper').classList.add('green-glow')
    document.querySelector('.computer-section .rock').classList.add('red-glow')
    winDeclaration.textContent = 'Player wins!'
  } else if (playerChoice === 'paper' && computerChoice === 'paper') {
    document.querySelector('.player-section .paper').classList.add('green-glow')
    document.querySelector('.computer-section .paper').classList.add('red-glow')
    winDeclaration.textContent = "It's a tie!"
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    document.querySelector('.player-section .paper').classList.add('green-glow')
    document
      .querySelector('.computer-section .scissors')
      .classList.add('red-glow')
    winDeclaration.textContent = 'Computer wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    document
      .querySelector('.player-section .scissors')
      .classList.add('green-glow')
    document.querySelector('.computer-section .rock').classList.add('red-glow')
    winDeclaration.textContent = 'Computer wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    document
      .querySelector('.player-section .scissors')
      .classList.add('green-glow')
    document.querySelector('.computer-section .paper').classList.add('red-glow')
    winDeclaration.textContent = 'Player wins!'
  } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    document
      .querySelector('.player-section .scissors')
      .classList.add('green-glow')
    document
      .querySelector('.computer-section .scissors')
      .classList.add('red-glow')
    winDeclaration.textContent = "It's a tie!"
  } else {
    winDeclaration.textContent = 'Something went wrong!'
  }
}

const playerClickRock = () => {
  playerChoice = 'rock'
  document.querySelector('.player-section .paper').disabled = true
  document.querySelector('.player-section .scissors').disabled = true
  declareWinner()
}

const playerClickPaper = () => {
  playerChoice = 'paper'
  document.querySelector('.player-section .rock').disabled = true
  document.querySelector('.player-section .scissors').disabled = true
  declareWinner()
}

const playerClickScissors = () => {
  playerChoice = 'scissors'
  document.querySelector('.player-section .rock').disabled = true
  document.querySelector('.player-section .paper').disabled = true
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
