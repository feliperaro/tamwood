"use strict";

function checkGuess(guess, correctNumber) {
  return guess == correctNumber ? true : false;
}

const chances = 10;
const correctNumber = Math.floor(Math.random() * 100) + 1;

let guesses = [];
let isCorrect = false;
let output;

for (let chance = 1; chance <= chances; chance++) {
  if (isCorrect) break;

  const number = prompt("Pick a number from 1 to 100.");
  guesses.push(number);

  if (!number) {
    alert("Please enter a number. You lost one chance.");
    continue;
  }

  isCorrect = checkGuess(number, correctNumber);
  if (isCorrect) {
    output = `${number} just right. You won!`;
  } else {
    output =
      number > correctNumber ? `${number} too big` : `${number} too small`;
  }

  alert(output);
  alert(`your guesses: [${guesses}] chances: ${chance}/${chances}`);

  if (!isCorrect && chance == chances) alert("You lost!");
}
