const input = document.querySelector("#name-input");
input.addEventListener("input", onInputChange);

const nameHolder = document.querySelector("#name-output");

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    return (nameHolder.textContent = "Anonymous");
  } else nameHolder.textContent = event.currentTarget.value;
}
