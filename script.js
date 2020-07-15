const form = document.querySelector(".form");
const input = document.querySelector(".form-control");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstname", "First name is required");
  } else removeError("firstname");

  if (lastName === "") {
    addErrorTo("lastname", "Last name is required");
  } else removeError("lastname");

  if (email === "" || !isValid(email)) {
    addErrorTo("email", "Email is not Valid");
  } else removeError("email");

  if (password === "") {
    addErrorTo("password", "Password is required");
  } else removeError("password");
});

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
  small.style.opacity = "1";
}

function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  const small = form[field].parentNode.querySelector("small");
  small.style.opacity = "0";
}
