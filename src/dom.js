import Initilizer from './initializer';

const dom = (() => {
  const init = new Initilizer();

  const updateActive = () => {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
  const updateRoundScore = (diceRound) => {
    if (diceRound !== 1) {
      init.roundScore += diceRound;
      document.querySelector(`#current-${init.activePlayer}`).textContent = init.roundScore;
    } else {
      init.roundScore = 0;
      document.querySelector(`#current-${init.activePlayer}`).textContent = init.roundScore;
      init.activePlayer = init.activePlayer === 0 ? 1 : 0;
      updateActive();
      document.querySelector('.dice').style.display = 'none';
    }
  };
  const displayDice = () => {
    const diceRound = Math.floor(Math.random() * 6) + 1;
    const domDice = document.querySelector('.dice');
    domDice.style.display = 'block';
    domDice.src = `dice-${diceRound}.png`;
    updateRoundScore(diceRound);
  };
  const displayScore = () => {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').addEventListener('click', displayDice);
  };

  return { displayScore };
})();

export default dom;