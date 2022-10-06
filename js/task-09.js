function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEL = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const colorNameEL = document.querySelector(".color");

buttonEl.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  bodyEL.style.backgroundColor = randomColor;
  colorNameEL.textContent = randomColor;
});
