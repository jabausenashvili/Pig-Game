'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); /* Little bit faster then querySelectore */
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const playAgain = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing;

const init = function () {
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    diceEl.classList.add('hidden');

    scores = [0, 0]; // Total scores
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}
init();


// Rolling Dice buttion's functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for a rolled dice: if true, switch to next player
        if (dice !== 1) {
            // currentScore = currentScore + dice;
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // Add dice to currect score
        } else {
            // Switch user to next player
            switchPlayer();
        }
    }
});

// HOLD buttion's functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to the active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if active player's score >= 100

        if (scores[activePlayer] >= 100) {
            // finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

// NEW GAME buttion's functionality
playAgain.addEventListener('click', init);

/*
function a() {
    console.log(`Function - a`);
    function ab() {
        console.log(`Function - ab`);
    }
    ab()
}

function c() {
    console.log(`Function - c`);
}
a()
c()


const userName = 'Giorgi';
function a(myName) {
    const greeting = `Hello`
    function b() {
        const question = `How are you?`
        console.log(`- ${greeting} ${userName}! i'm ${myName}.`)
        console.log(`- ${question}`)
    }
    b()
}
a(`Guram`)

// console
`Hello Giorgi! I'm Guram. How are you?`
*/