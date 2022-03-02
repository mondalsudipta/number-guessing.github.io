//get ui element

let randomNumber = Math.floor(Math.random() * 10) + 1;
let guesses = document.querySelector('.guesses');
let lastresult = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHigh');
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let attemptsLeft = document.querySelector('.attemptsLeft');
let guessCount = 1;
let resetButton;

guessField.focus();

function checkGuess() {

    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous Guesses: ';
        attemptsLeft.textContent = 'Attempts Left: 2';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastresult.textContent = 'Congratulations! You WON ';
        lastresult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    }
    else if (guessCount === 2) {
        attemptsLeft.textContent = 'Attempts Left: 1';
    }
    else if (guessCount === 3) {
        lastresult.textContent = '!!!GAME OVER!!! You LOST';
        attemptsLeft.textContent = 'Attempts Left: 0';
        //lastresult.style.backgroundColor = 'red';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastresult.textContent = 'Almost There!';

        if (userGuess < randomNumber) {
            lowOrHigh.textContent = "You guessed just a bit low!";
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = "You guessed just a bit high!";
        }
        lastresult.style.backgroundColor = 'red';
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();

}

//add event listener
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.diabled = true;
    guessSubmit.diabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again!';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelector('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.diabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 10) + 1;

}