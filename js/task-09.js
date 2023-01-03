const btnRef = document.querySelector('button.change-color');
const colorNameRef = document.querySelector('span.color');

btnRef.addEventListener('click', onButtonClick);

function onButtonClick() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  colorNameRef.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
