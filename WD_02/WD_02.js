let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 0;
const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');
function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        running = true;
    }
}
function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    timeDisplay.innerHTML = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
function pauseTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}
function resetTimer() {
    clearInterval(tInterval);
    running = false;
    timeDisplay.innerHTML = "00:00:00";
    laps.innerHTML = "";
    lapCounter = 0;
}
function recordLap() {
    if (running) {
        lapCounter++;
        const lapTime = timeDisplay.innerHTML;
        const lapElement = document.createElement('div');
        lapElement.classList.add('lap');
        lapElement.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
        laps.appendChild(lapElement);
    }
}
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);
