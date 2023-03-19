import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const btnStartEl = document.querySelector('button[data-start]');
const spanElDay = document.querySelector('span[data-days]');
const spanElHours = document.querySelector('span[data-hours]');
const spanElMinutes = document.querySelector('span[data-minutes]');
const spanElSeconds = document.querySelector('span[data-seconds]');

const currentTime = Date.now();
btnStartEl.addEventListener('click', handleMakeTimer);
btnStartEl.setAttribute('disabled', true);

const dateFp = flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
      const futureTime = Date.parse(selectedDates[0]);
      if (futureTime < currentTime) {
        Notiflix.Notify.failure('Please choose a date in the future');
      } else { btnStartEl.removeAttribute('disabled'); }
      const futureTimeSetLocalSt = localStorage.setItem("checkDate", futureTime);
    },
});


function handleMakeTimer() {
  const futureTimeGetLocalSt = localStorage.getItem("checkDate");
  let futureTimeParsed = JSON.parse(futureTimeGetLocalSt);
  let deltaTime = futureTimeParsed - currentTime;
  
  const timerId = setInterval(() => {
    if (deltaTime > 1000) {
      deltaTime -= 1000;
      let { days, hours, minutes, seconds } = convertMs(deltaTime);
      spanElDay.textContent = `${days}`;
      spanElHours.textContent = `${hours}`;
      spanElMinutes.textContent = `${minutes}`;
      spanElSeconds.textContent = `${seconds}`;
      localStorage.clear();
    } 
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
 
  const days = addLeadingZero( Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
