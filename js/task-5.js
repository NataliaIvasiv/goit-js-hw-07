function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const background = document.querySelector('body');
const span = background.querySelector('.color')
changeColorBtn.addEventListener("click", handleChangeColorBtn);


function handleChangeColorBtn(event) {
  background.style.backgroundColor = getRandomHexColor();
  span.textContent = `${background.style.backgroundColor}`
console.log(`${span.textContent}`)
}