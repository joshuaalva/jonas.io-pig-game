'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
// these two work the same
// hash is selector for id
// dot is for classes
// element by id is supposed to be faster

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
