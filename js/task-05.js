const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const nameInputEvent = (event) => {
  const inputValue = event.currentTarget;
  outputName.textContent = inputValue.value ? inputValue.value : "Anonymous";
};

inputName.addEventListener("input", nameInputEvent);
