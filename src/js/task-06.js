// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }



const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onOutFocus);

function onOutFocus(event) {
    if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
        refs.input.classList.add('valid');
        if (refs.input.classList.contains('invalid')) {
            refs.input.classList.remove('invalid');
        };
    } else {
        refs.input.classList.add('invalid');
        if (refs.input.classList.contains('valid')) {
            refs.input.classList.remove('valid');
        };
    }
}

// function onOutFocus(event) {
//     if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
//         refs.input.classList.add('valid');
//         refs.input.classList.remove('invalid');
//     } else {
//         refs.input.classList.add('invalid');
//         refs.input.classList.remove('valid');

//     }
// }