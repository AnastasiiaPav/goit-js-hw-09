import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0].getDate() <=  options.defaultDate.getDate() ){
        Notiflix.Notify.failure('Будь-ласка, обери дату в майбутньому')
        startButton.setAttribute('disabled', 'disabled');
    } else{
        startButton.removeAttribute('disabled');
    }
    console.log(selectedDates[0]);
  },
};


 const date =  flatpickr(input, options);


function timer ()  {
      setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = date.selectedDates[0] - currentTime;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        // console.log(`${days}:${hours}:${minutes}:${seconds}`);
        day.textContent = `${days}`;
        hour.textContent = `${hours}`;
        minute.textContent = `${minutes}`;
        second.textContent =  `${seconds}`;
      }, 1000);
    }
 
startButton.addEventListener('click', timer)


function addZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
