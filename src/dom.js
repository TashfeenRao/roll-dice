/* eslint-disable no-use-before-define */
import Initilizer from './initializer';

const dom = (() => {
  const init = new Initilizer();
  const showDom = () => {
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
  }
  const clearDom = () => {
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
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
  const checkWin = () => {
    if (init.scores[init.activePlayer] > 10) {
      document.getElementById(`name-${init.activePlayer}`).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.btn-roll').style.display = 'none';
      document.querySelector('.btn-hold').style.display = 'none';
      document.querySelector(`.player-${init.activePlayer}-panel`).classList.add('winner');
      document.querySelector(`.player-${init.activePlayer}-panel`).classList.remove('active');
    } else {
      switchPlayer();
    }
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
    document.querySelector('.dice').style.display = 'none';
  };
  const listenToEvents = () => {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').addEventListener('click', displayDice);
    document.querySelector('.btn-hold').addEventListener('click', addScore);
    document.querySelector('.btn-new').addEventListener('click', newGame);
  };
  const newGame = () => {
    init.activePlayer = 0;
    init.dice = 0;
    init.roundScore = 0;
    init.scores = [0, 0];
    clearDom();
    showDom();
    listenToEvents();
  };
  return { newGame };
})();

export default dom;