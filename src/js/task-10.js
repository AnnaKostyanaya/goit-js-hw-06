function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerEl = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', boxesCreate);
destroyBtn.addEventListener('click', boxesDestroy);

function boxesCreate(event) {
  // if (Number(input.value) === NaN) { 
  //   alert('Введіть число');
  // }
  let elements = []; 
  for (let i = 0; i < Number(input.value); i += 1) { 
    let x = 30 + 10 * i;
    const divEl = document.createElement('div');
    divEl.style.height = `${x}px`;
    divEl.style.width = `${x}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elements.push(divEl);    
  };
  containerEl.append(...elements);
}

function boxesDestroy(event) {
  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  };
  input.value = "";
}


