const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);

function onInput(event) {
    spanRef.textContent = event.currentTarget.value === '' ? "Anonymous" : event.currentTarget.value;

    /* Варіант з умовою */
    // if(event.currentTarget.value.length) {
    //     spanRef.textContent = event.currentTarget.value;
    // } else {
    //     spanRef.textContent = "Anonymous";
    // }
}