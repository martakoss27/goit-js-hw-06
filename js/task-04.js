let counterValue = 0;
console.log(counterValue);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const handleClickDecrement = () => {
  counterValue - 1;
};
buttonDecrement.addEventListener("click", handleClickDecrement);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const handleClickIncrement = () => {
  counterValue + 1;
};
buttonIncrement.addEventListener("click", handleClickIncrement);
