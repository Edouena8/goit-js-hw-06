const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    const inputRef = event.currentTarget;

    if(inputRef.value.length < +inputRef.dataset.length) {

        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');

    } else {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
}