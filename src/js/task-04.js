// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const addButton = document.querySelector('button[data-action="increment"]');
const minusButton = document.querySelector('button[data-action="decrement"]');
const counterText = document.querySelector(`#value`);

addButton.addEventListener(`click`, handlerAddButton);

minusButton.addEventListener(`click`, handlerMinusButton); 

function handlerAddButton(event) { 
    counterValue += 1;
    console.log(counterValue);
}

function handlerMinusButton(event) { 
    counterValue -= 1; 
    console.log(counterValue);
}

addButton.addEventListener('click', textChanger);

minusButton.addEventListener('click', textChanger);

function textChanger(event) { 
    counterText.textContent = counterValue;
}