const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const data = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Fill in all fields!");
  } else {
    console.log(data);
    event.currentTarget.reset();
  }
}
