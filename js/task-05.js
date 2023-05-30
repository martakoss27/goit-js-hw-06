const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

//spr.1
console.log(inputName.value);
console.log(outputName.textContent);

const nameInputEvent = (event) => {
  const inputValue = event.currentTarget;
  outputName.textContent = inputValue.value ? inputValue.value : "Anonymous";
};

inputName.addEventListener("input", nameInputEvent);
