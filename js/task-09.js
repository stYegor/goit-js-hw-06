function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEL = document.querySelector("body");
console.log(bodyEL);

const buttonEl = document.querySelector(".change-color");
buttonEl.addEventListener("click", changeColor);

const colorNameEL = document.querySelector(".color");

function changeColor(event) {
  bodyEL.style.backgroundColor = getRandomHexColor();
  colorNameEL.textContent = getRandomHexColor();
}
