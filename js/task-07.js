const input = document.querySelector("#font-size-control");
input.addEventListener("input", onInputChange);

const textEl = document.querySelector("#text");

function onInputChange(event) {
  textEl.style.fontSize = `${+event.currentTarget.value}px`;
}
