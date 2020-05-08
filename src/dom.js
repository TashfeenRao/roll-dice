import Initilizer from './initializer';

const dom = (() => {
  const init = new Initilizer();
  const checkWin = () => {
    if (init.scores[init.activePlayer] > 50) {
      document.getElementById(`name-${init.activePlayer}`).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
    }
  }
  const updateActive = () => {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  };
  const switchPlayer = () => {
    init.roundScore = 0;
    document.querySelector(`#current-${init.activePlayer}`).textContent = init.roundScore;
    init.activePlayer = init.activePlayer === 0 ? 1 : 0;
    updateActive();
  };
  const updateRoundScore = (diceRound) => {
    if (diceRound !== 1) {
      init.roundScore += diceRound;
      document.querySelector(`#current-${init.activePlayer}`).textContent = init.roundScore;
    } else {
      switchPlayer();
    }
  };
  const displayDice = () => {
    init.dice = Math.floor(Math.random() * 6) + 1;
    const domDice = document.querySelector('.dice');
    domDice.style.display = 'block';
    domDice.src = `dice-${init.dice}.png`;
    updateRoundScore(init.dice);
  };
  const addScore = () => {
    init.scores[init.activePlayer] += init.roundScore;
    document.getElementById(`score-${init.activePlayer}`).textContent = init.scores[init.activePlayer];
    checkWin();
    switchPlayer();
  }
  const displayScore = () => {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').addEventListener('click', displayDice);
    document.querySelector('.btn-hold').addEventListener('click', addScore);
  };

  return { displayScore };
})();

export default dom;