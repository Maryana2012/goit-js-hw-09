const btnEl = document.querySelectorAll('button');
const btnElStart = btnEl[0];
const btnElStop = btnEl[1];

let timerId = null;

btnElStart.addEventListener('click', handleMakeStart);
btnElStop.addEventListener('click', handleMakeStop);

function handleMakeStart() {
  makeColor();
  btnElStart.setAttribute('disabled', true); 
  btnElStop.removeAttribute('disabled');
}

function handleMakeStop() {
  clearInterval(timerId);
  btnElStart.removeAttribute('disabled'); 
  btnElStop.setAttribute('disabled', true);
}

function makeColor() {
   timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// document.body.style.display = 'flex';
// btnElStart.style.justifyContent = 'center';
// btnElStart.style.alignItems = 'center';
// btnElStop.style.justifyContent = 'center';
// btnElStop.style.alignItems = 'center';