let scoreP1 = 0;
let scoreP2 = 0;
let targetScore = null;

const scoreP1Display = document.getElementById('scoreP1');
const scoreP2Display = document.getElementById('scoreP2');
const btnP1 = document.getElementById('btnP1');
const btnP2 = document.getElementById('btnP2');
const btnReset = document.getElementById('btnReset');
const targetScoreInput = document.getElementById('targetScore');

// bouton 1
btnP1.addEventListener('click', () => {
  if (!targetScore || scoreP1 < targetScore) {
    scoreP1++;
    checkWinner();
    updateScores();
  }
});

// bouton 2
btnP2.addEventListener('click', () => {
  if (!targetScore || scoreP2 < targetScore) {
    scoreP2++;
    checkWinner();
    updateScores();
  }
});

btnReset.addEventListener('click', resetScores);

targetScoreInput.addEventListener('change', () => {
  const value = parseInt(targetScoreInput.value, 10);
  if (value > 0) {
    targetScore = value;

  } else {
    alert('Please enter a valid target score greater than 0.');
    targetScoreInput.value = '';
    targetScore = null;
  }
});

function resetScores() {
  scoreP1 = 0;
  scoreP2 = 0;
  updateScores();
}

function updateScores() {
  scoreP1Display.textContent = scoreP1;
  scoreP2Display.textContent = scoreP2;
}

function checkWinner() {
  if (targetScore && scoreP1 >= targetScore) {
    alert('Player 1 wins!');
    resetScores();
  } else if (targetScore && scoreP2 >= targetScore) {
    alert('Player 2 wins!');
    resetScores();
  }
}
