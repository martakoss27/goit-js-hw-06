const form = document.querySelector(".login-form");

const submitData = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value, password.value);

  if (!email.value || !password.value) {
    window.alert("Please Fill In All Required Fields");
  } else {
    const loginData = {};
    loginData[email.name] = email.value;
    loginData[password.name] = password.value;
    console.log(loginData);
    event.currentTarget.reset();
  }
};
form.addEventListener("submit", submitData);
