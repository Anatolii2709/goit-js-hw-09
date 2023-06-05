const randomBodyColor = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', onBtnStart);
stopBtn.addEventListener('click', onBtnStop);

function onBtnStart() {
  console.log(onBtnStart);
  if (intervalId) {
    return;
  }
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled', 'disabled');

  intervalId = setInterval(() => {
    randomBodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function onBtnStop() {
  if (!intervalId) {
    return;
  }
  stopBtn.setAttribute('disabled', 'disabled');
  startBtn.removeAttribute('disabled', 'disabled');

  clearInterval(intervalId);
  intervalId = !intervalId;
}
