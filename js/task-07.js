const inputRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
}