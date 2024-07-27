let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remening = document.querySelector('.lastResult')
const lowerOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validGuess(guess)
    })
}

function validGuess(guess) {
    if (isNaN(guess)) {
        alert("please Enter the Number")
    }
    else if (guess < 1) {
        alert("please Enter number greater then 1")
    }
    else if (guess > 100) {
        alert("please enter the number less then 100")
    }
    else {

        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over Random Number Was ${random}`)
            endGame()
        }
        else {
            displayGuess(guess)
            ckeckGuess(guess)
        }
    }
}

function ckeckGuess(guess) {
    if (guess === random) {
        displayMessage(`You gussed it right`)
        endGame()
    }
    else if (guess < random) {
        displayMessage(`you guess too low`)
    }
    else if (guess > random) {
        displayMessage(`you guess too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    remening.innerHTML = `${10 - numGuess}`
    numGuess++;
}

function displayMessage(message) {
    lowerOrHigh.innerHTML = `<h2>${message}<h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newgameButton = document.querySelector('#newgame');
    newgameButton.addEventListener('click',function(e){
        random=parseInt(Math.random()*100+1);
        numGuess=1;
        guessSlot.innerHTML='';
        remening.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        lowerOrHigh.innerHTML="";
        playGame=true;
    })
}