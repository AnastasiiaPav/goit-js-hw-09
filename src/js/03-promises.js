import { Notify } from 'notiflix';
const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', sendForm);
function sendForm(event) {
  const firstDelay = Number(document.querySelector('[name="delay"]').value);
  const delayStep = Number(document.querySelector('[name="step"]').value);
  const amount = document.querySelector('[name="amount"]');
  let step = firstDelay;
  event.preventDefault();
  for (let index = 1; index <= amount.value; index++) {
    createPromise(index, step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      step += delayStep;
  }
}
