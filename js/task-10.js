function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  createData: document.querySelector('[data-create]'),
  destroyData: document.querySelector('[data-destroy]'),
  inputNum: document.querySelector("#controls input"),
  boxes: document.querySelector("#boxes"),
}

let squireSize = 30;
let smallSquireSize = 20;


function createSquares(sum) {
  let marking = "";

  for (let i = 0; i < sum; i += 1) {
    marking += `<div style="
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${squireSize}px; 
    height: ${squireSize}px; 
    background-color: ${getRandomHexColor()}; 
    border: 3px solid ${getRandomHexColor()};
    margin: 10px"
    ><div style="
    width: ${smallSquireSize}px; 
    height: ${smallSquireSize}px; 
    background-color: ${getRandomHexColor()}; 
       "></div></div>`;
    squireSize += 10;
    smallSquireSize = squireSize - 30;
  }
ref.boxes.insertAdjacentHTML("beforeend", marking)
}
function destroySquares() {
  ref.boxes.innerHTML = "";
}

ref.createData.addEventListener("click", () => createSquares(ref.inputNum.value));
ref.destroyData.addEventListener("click", () => destroySquares());
