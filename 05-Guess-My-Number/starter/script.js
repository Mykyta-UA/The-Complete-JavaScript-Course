'use strict';
let rNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number((document.querySelector('.score').textContent = 20));

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', () => {
  rNumber = Math.trunc(Math.random() * 20) + 1;
  score = Number((document.querySelector('.score').textContent = 20));
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  console.log('test');
});
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //Player didnt put any number
  if (!guess) {
    displayMessage('π no number detected π¦§');
    //Player wins
  } else if (guess === rNumber) {
    displayMessage('you won πΎπ«‘');

    document.querySelector('.number').textContent = rNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = document.querySelector('.highscore').textContent = score;
    }
    //Player guess too high
  } else if (guess !== rNumber) {
    displayMessage(guess > rNumber ? 'too high π' : 'too low π');
    score--;
    document.querySelector('.score').textContent = score;
  }
  //Player lose
  if (!score) {
    displayMessage('gameover π΅');
    score = 20;
  }
});
