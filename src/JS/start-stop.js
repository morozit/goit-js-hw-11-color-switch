import colors from './colors';

const body = document.querySelector('body');

let changesHasStarted = false;
let intervalId = null;

export function startBtnClickHandler() {
    if (changesHasStarted) {
        return
    }
    changesHasStarted = true;
    intervalId = setInterval(() => {
        body.style.background = colors[randomIntegerFromInterval(0, colors.length -1)]
    }, 1000);
}

export function stopBtnClickHandler() {
    clearInterval(intervalId);
    changesHasStarted = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};