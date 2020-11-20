import colors from './colors';
import {randomIntegerFromInterval} from './random-generator.js';

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

