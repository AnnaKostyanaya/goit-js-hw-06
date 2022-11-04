function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const whatPaint = document.querySelector('body');

colorBtn.addEventListener('click', (event) => {
  let findColor = getRandomHexColor();
  whatPaint.style.backgroundColor = findColor;
  colorText.textContent = findColor;
})



