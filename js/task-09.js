function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorTextChange = document.querySelector("span.color");
const changeButton = document.querySelector("button.change-color");
const bodyColor = document.querySelector("body");

const changeColor = () => {
  bodyColor.style.color = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorTextChange.textContent = getRandomHexColor();
}

changeButton.addEventListener("click", changeColor);