const counterValue = document.querySelector('span#value');
const decrementBtnRef = document.querySelector('[data-action = "decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

decrementBtnRef.addEventListener('click', onDecrementClick);
incrementBtnRef.addEventListener('click', onIncrementClick);

let value = 0;

function onDecrementClick() {
    value -= 1;
    counterValue.textContent = value;
};

function onIncrementClick() {
    value += 1;
    counterValue.textContent = value;
};
