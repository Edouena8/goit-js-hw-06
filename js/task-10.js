
const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  mainBoxRef: document.querySelector('div#boxes'),
};


refs.input.addEventListener('input', onInputChange);


function onInputChange() {
  refs.createBtn.addEventListener('click', onCreateBtnClick);
  window.addEventListener('keydown', onKeyDown);
}

function onCreateBtnClick() {
  let boxesArr = createBoxes(refs.input.value);
  refs.mainBoxRef.append(...boxesArr);

  refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
  window.addEventListener('keydown', onKeyDown);
}

function onDestroyBtnClick() {
  destroyBoxes();
  refs.destroyBtn.removeEventListener('click', onDestroyBtnClick);
}

function createBoxes(amount) {
  
  const arr = [];
  for(let i = 0, j = 30; i < amount; i += 1, j += 10) {

    const newBoxEl = document.createElement('div');
    newBoxEl.style.width = `${j}px`;
    newBoxEl.style.height = `${j}px`;
    newBoxEl.style.backgroundColor = getRandomHexColor();
    newBoxEl.style.marginBottom = '10px';

    arr.push(newBoxEl);
  }
  return arr;
}

function destroyBoxes() {
  refs.mainBoxRef.remove();
  refs.input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onKeyDown(event) {
  if(event.code === 'Enter') {
    onCreateBtnClick();
  }

  if(event.code === 'Escape') {
    destroyBoxes();
  }
}
