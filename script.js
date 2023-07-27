'use strict';

// Selecting elements
const player0EL = document.querySelector(`.player--0`);
const player1EL = document.querySelector(`.player--1`);
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// these two work the same
// hash is selector for id
// dot is for classes
// element by id is supposed to be faster

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  // 1. Generate a random dice roll
  // 1 -> 5 add one to get to 6
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   console.log(dice);
  // 2. Display the dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for a rolled 1 -- if true switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle(`player--active`);
    player1EL.classList.toggle(`player--active`);
  }
});
