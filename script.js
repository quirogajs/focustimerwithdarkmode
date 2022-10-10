const themeButton = document.querySelector('#themeButton');
const buttonPlay = document.querySelector('#buttonPlay');
const buttonAddFiveMinutes = document.querySelector('#buttonAddFiveMinutes');
const buttonRemoveFiveMinutes = document.querySelector('#buttonRemoveFiveMinutes');

const displayMinutes = document.querySelector('#displayMinutes');
const displaySeconds = document.querySelector('#displaySeconds');

const body = document.querySelector('body');


let minutes = Number(displayMinutes.textContent);
let seconds = Number(displaySeconds.textContent);

function updateMinutesDisplay() {
    displayMinutes.textContent = String(minutes).padStart(2, '0')
}

function updateSecondsDisplay() {
    displaySeconds.textContent = String(seconds).padStart(2, '0')
}

function addFiveMinutes() {
    const itsAlreadyMax = minutes === 180;

    if(itsAlreadyMax) {
        return
    } else {
        minutes += 5
        updateMinutesDisplay()
    }
}

function removeFiveMinutes() {
    const itsAlreadyMin = minutes === 5;

    if(itsAlreadyMin) {
        return
    } else {
        minutes -= 5
        updateMinutesDisplay()
    }
}


function toggleTheme() {
    body.classList.toggle('lightMode')
    body.classList.toggle('darkMode')
}

function countdown() {

    let timer = setTimeout(() => {

        const minuteDone = seconds === 0;
        const timerDone = minutes === 0 && seconds === 0;

        if(minuteDone) {
            seconds = 60
            minutes -= 1
        }

        seconds -= 1

        if(timerDone) {

        }

        updateSecondsDisplay()
        updateMinutesDisplay()

        countdown()

    }, 1000)

}

themeButton.addEventListener('click', toggleTheme)
buttonPlay.addEventListener('click',countdown)
buttonAddFiveMinutes.addEventListener('click', addFiveMinutes)
buttonRemoveFiveMinutes.addEventListener('click', removeFiveMinutes)



