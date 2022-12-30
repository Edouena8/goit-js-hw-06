const btnRef = document.querySelector('button.change-color');
const colorNameRef = document.querySelector('span.color');

btnRef.addEventListener('click', onButtonClick);

function onButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
