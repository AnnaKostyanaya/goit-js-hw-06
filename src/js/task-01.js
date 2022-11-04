// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const listCategoriesEl = document.querySelectorAll('.item');
const countCategoriesEl = listCategoriesEl.length;
console.log(`Number of categories: ${countCategoriesEl}`);

const text = document.querySelectorAll(".item h2");
const count = document.querySelectorAll(".item ul");

let result = '';
let result1 = 0;
for (let i = 0; i < text.length; i += 1) {
    result = text[i].textContent;
    result1 = count[i].children.length;
    console.log(`Category: ${result}`);
    console.log(`Elements: ${result1}`);
}
    
