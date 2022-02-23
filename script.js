'use strict';

/*

document . querySelector ( ' . class ' ) . addEventListener
( ' click ' <--- literally click of mouse  , Function ()  <----- what happens when click happens


function randomIntFromInterval(min, max) {
 return Math.floor(Math.random() * (max - min + 1) + min);
}

*/

let rndInt = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').innerHTML = 'No Number!';
  } else if (guess > rndInt) {
    if (score > 0) {
      document.querySelector('.message').innerHTML = 'Try going lower!';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = 'You Lost...lol';
    }
  } else if (guess < rndInt) {
    if (score > 0) {
      document.querySelector('.message').innerHTML = 'Try going higher!';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = 'You Lost...lol';
    }
  } else if (guess === rndInt) {
    document.querySelector('.message').innerHTML = 'You guessed correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerHTML = rndInt;
    if (score > highscore) {
      document.querySelector('.highscore').innerHTML = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  rndInt = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').innerHTML = 'Start guessing!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
});
