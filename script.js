'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
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

// Rolling dice functionality
btnRoll.addEvent(`click`, function () {
  // 1. Generate a random dice roll
  // 1 -> 5 add one to get to 6
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for a rolled 1 -- if true switch to next player
});
