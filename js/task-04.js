const value = document.querySelector("#value");

let counterValue = 0;
function updateCounterValue() {
  value.textContent = counterValue;
}

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const handleClickDecrement = () => {
  counterValue = counterValue - 1;
  updateCounterValue();
};
buttonDecrement.addEventListener("click", handleClickDecrement);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const handleClickIncrement = () => {
  counterValue = counterValue + 1;
  updateCounterValue();
};
buttonIncrement.addEventListener("click", handleClickIncrement);
