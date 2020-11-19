import './SASS/main.scss';


import { startBtnClickHandler, stopBtnClickHandler } from './js/start-stop';


const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', startBtnClickHandler);
stopBtn.addEventListener('click', stopBtnClickHandler);