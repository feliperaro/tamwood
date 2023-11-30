function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{10,}$/;
  return regex.test(phoneNumber);
}

function validateInput(input, value) {
  if (!value || value.trim() === "") return false;
  else if (input === "email" && !validateEmail(value)) return false;
  else if (input === "phone" && !validatePhoneNumber(value)) return false;
  else return true;
}

const businessContact = document.querySelector("#business");
businessContact.addEventListener("click", () => {
  document.querySelector(".companyNameWrapper").style.display = "block";
});

const homeContact = document.querySelector("#home");
homeContact.addEventListener("click", () => {
  document.querySelector(".companyNameWrapper").style.display = "none";
});

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", (e) => {
  let errors = [];
  const errorsDiv = document.querySelector(".errors");
  errorsDiv.innerHTML = null;

  let isInputValid = false;
  const name = document.querySelector("#name").value;
  isInputValid = validateInput("name", name);
  if (!isInputValid) errors.push("Please enter a valid name");

  const email = document.querySelector("#email").value;
  isInputValid = validateInput("email", email);
  if (!isInputValid) errors.push("Please enter a valid email");

  const phone = document.querySelector("#phone-number").value;
  isInputValid = validateInput("phone", phone);
  if (!isInputValid) errors.push("Please enter a valid phone number");

  let category = document.querySelector(
    "input[name='contact-type']:checked"
  ).id;

  let companyName = null;
  if (category === "business") {
    companyName = document.querySelector("#company-name").value;
    isInputValid = validateInput("companyName", companyName);
    if (!isInputValid) errors.push("Please enter a valid company name");
  }

  const message = document.querySelector("#message-content").value;
  isInputValid = validateInput("message", message);
  if (!isInputValid) errors.push("Please enter a valid message");

  if (errors.length > 0) {
    const container = document.querySelector(".container");
    errors.map((error) => {
      let divError = document.createElement("p");
      divError.textContent = error;
      errorsDiv.appendChild(divError);
    });
    container.appendChild(errorsDiv);
    return;
  }

  const obj = {
    name,
    email,
    phone,
    category,
    companyName,
    message,
  };
  
  console.log(obj);
  return obj;
});
