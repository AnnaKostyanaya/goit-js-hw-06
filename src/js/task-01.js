

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
    
