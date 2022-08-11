const playerOne = document.querySelector('#firstPlayer');
const playerTwo = document.querySelector('#secondPlayer');
const scoreOne = document.querySelector('#p1score');
const SecScore = document.querySelector('#p2score');
const selectElement = document.querySelector('#score');
const resetBtn = document.querySelector('#reset');
let playerScore = 0;
let player2Score = 0;
let result;
let gameOver = false;

selectElement.addEventListener('change', function (event) {
  result = event.target.value;
  // alert(this.value)  
  reset();
})

playerOne.addEventListener('click', function (e) {
  if (!gameOver) {
    playerScore += 1;
    scoreOne.innerText = playerScore;
  }
  if (playerScore == parseInt(result)) {
    scoreOne.style.color = 'green';
    SecScore.style.color = 'red';
    gameOver = true;
  }
})

playerTwo.addEventListener('click', function (e) {
  if (!gameOver) {
    player2Score += 1;
    SecScore.innerText = player2Score;
  }
  if (player2Score == parseInt(result)) {
    SecScore.style.color = 'green';
    scoreOne.style.color = 'red';
    gameOver = true;
  }
})

resetBtn.addEventListener('click', reset);

function reset() {
  gameOver = false;
  playerScore = 0;
  player2Score = 0;
  SecScore.innerText = player2Score;
  scoreOne.innerText = playerScore;
  scoreOne.style.color = 'black'
  SecScore.style.color = 'black'
}


