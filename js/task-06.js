const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputChange);

function onInputChange() {
  if (+input.value.length === +input.dataset.length) {
    input.classList.add("valid");
  } else input.classList.add("invalid");
}
