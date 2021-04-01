'use strict';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');

const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting elements
// score0EL.textContent = 0;
// score1EL.textContent = 0;
// diceEL.classList.add('hidden');

let scores , currentScore , activePlayer , playing;

// let scores  =[0,0];
// let currentScore =0;
// let activePlayer = 0;
// let playing = true;
const init = function(){
    playing = true;

    // if(activePlayer !== 0){
    //      player0EL.classList.toggle('player--active');
    //      player1EL.classList.toggle('player--active');
    // }
    
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    
    activePlayer = 0;
    currentScore =0;
    scores = [0,0];
    
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    
    diceEL.classList.add('hidden');
}
init();

const switchPlayer = function(){
    currentScore =0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 :0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};

// rolling dice functiom
btnRoll.addEventListener('click' , function(){
    if(playing){
    const dice = Math.trunc(Math.random()*6)+1;
    // console.log(dice);
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
     if(dice !== 1){
         currentScore += dice;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0EL.textContent = currentScore;
    }else{
        switchPlayer();

        // currentScore =0;
        // document.getElementById(`current--${activePlayer}`).textContent = 0;
        // activePlayer = activePlayer === 0 ? 1 :0;
        // player0EL.classList.toggle('player--active');
        // player1EL.classList.toggle('player--active');
        //  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         //  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
     }
    }
});

// HOLD ACTION
btnHold.addEventListener('click' , function(){
    if(playing){
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =  scores[activePlayer];

    // GAME WON
    if(scores[activePlayer] >= 100){
        playing = false;
        document.getElementById(`current--${activePlayer}`).textContent = 'W0N';
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEL.classList.add('hidden');
    }else   switchPlayer();
    // currentScore =0;
    //  document.getElementById(`current--${activePlayer}`).textContent = 0;
    //  activePlayer = activePlayer === 0 ? 1 :0;
    //  player0EL.classList.toggle('player--active');
    //  player1EL.classList.toggle('player--active');
     
     //  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}
});

//NEW GAME
btnNew.addEventListener('click' , init);



