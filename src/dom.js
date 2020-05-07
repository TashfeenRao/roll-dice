import Initilizer from './initializer';

const dom = (() => {
  const displayDice = () => {
    const diceRound = Math.floor(Math.random() * 6) + 1;
    const domDice = document.querySelector('.dice');
    domDice.style.display = 'block';
    domDice.src = `dice-${diceRound}.png`;
    updateRoundScore(diceRound)
    document.querySelector('#current-0').textContent = diceRound;
  };
  const displayScore = () => {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').addEventListener('click', displayDice);
  };

  updateRoundScore(diceRound) {
      
  }
  return { displayScore };
})();

export default dom;