const form = document.querySelector(".login-form");
console.log(form);
//If the form has empty fields,
//display alert saying that all fields must be filled in.
function validateForm() {
  if (form.email.value === "" || form.password.value === "") {
    alert("Please Fill In All Required Fields");
    return;
  }
}
//As soon as the user has filled in all the fields and submitted the form,
//collect the field values into an object,
//where the field name will be the property name and the field value will be the property value.
// Use the elements property to access form elements.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm;
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value, password.value);
});
