
  const start = document.querySelector('[data-start]');
  const stop = document.querySelector('[data-stop]');
  const body = document.querySelector('body');
  let buttonInterval = null;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  function randomColor() {
body.style.backgroundColor = getRandomHexColor();
 };

start.addEventListener('click', () => {
  start.setAttribute('disabled','disabled');
  stop.removeAttribute('disabled');
  buttonInterval = setInterval(  randomColor , 1000)});


stop.addEventListener('click', () => {
  start.removeAttribute('disabled')
  stop.setAttribute('disabled','disabled');
  clearInterval(buttonInterval)
})