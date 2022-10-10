const themeButton = document.querySelector('#themeButton');
const buttonPlay = document.querySelector('#buttonPlay');
const buttonStop = document.querySelector('#buttonStop');
const buttonAddFiveMinutes = document.querySelector('#buttonAddFiveMinutes');
const buttonRemoveFiveMinutes = document.querySelector('#buttonRemoveFiveMinutes');

const displayMinutes = document.querySelector('#displayMinutes');
const displaySeconds = document.querySelector('#displaySeconds');

const body = document.querySelector('body');


let minutes = Number(displayMinutes.textContent);
let seconds = Number(displaySeconds.textContent);
let minuteRecord = minutes;

let timer;

function updateMinutesDisplay() {
    displayMinutes.textContent = String(minutes).padStart(2, '0')
}

function updateSecondsDisplay() {
    displaySeconds.textContent = String(seconds).padStart(2, '0')
}

function resetMinuteDisplay() {
    displayMinutes.textContent = String(minuteRecord).padStart(2, '0')
    minutes = Number(displayMinutes.textContent)
}

function updateMinuteRecord() {
    minuteRecord = Number(displayMinutes.textContent)
}

function resetSecondsDisplay() {
    displaySeconds.textContent = String(0).padStart(2, '0')
    seconds = Number(displaySeconds.textContent)
}

function addFiveMinutes() {
    const itsAlreadyMax = minutes === 180;

    if(itsAlreadyMax) {
        return
    } else {
        minutes += 5
        updateMinutesDisplay()
        updateMinuteRecord()
    }
}

function removeFiveMinutes() {
    const itsAlreadyMin = minutes === 5;

    if(itsAlreadyMin) {
        return
    } else {
        minutes -= 5
        updateMinutesDisplay()
        updateMinuteRecord()
    }
}

function playCountdown() {
    toggleSetTimer()
    countdown()
}

function stopCountdown() {
    clearTimeout(timer)
    resetSecondsDisplay()
    resetMinuteDisplay()
    toggleSetTimer()
}

function toggleTheme() {
    body.classList.toggle('lightMode')
    body.classList.toggle('darkMode')
}

function countdown() {

    timer = setTimeout(() => {

        const minuteDone = seconds === 0;
        const timerDone = minutes === 0 && seconds === 0;

        if(minuteDone) {
            seconds = 60
            minutes -= 1
        }

        seconds -= 1

        if(timerDone) {
            resetSecondsDisplay()
            resetMinuteDisplay()
            toggleSetTimer()
            return
        }

        updateSecondsDisplay()
        updateMinutesDisplay()

        countdown()

    }, 1000)

}

function toggleSetTimer() {
    buttonAddFiveMinutes.toggleAttribute('disabled')
    buttonRemoveFiveMinutes.toggleAttribute('disabled')
}

themeButton.addEventListener('click', toggleTheme);
buttonPlay.addEventListener('click',playCountdown);
buttonStop.addEventListener('click', stopCountdown);
buttonAddFiveMinutes.addEventListener('click', addFiveMinutes);
buttonRemoveFiveMinutes.addEventListener('click', removeFiveMinutes);



