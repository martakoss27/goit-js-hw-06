const inputFontSizeControl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

const inputEvent = (event) => {
  const size = inputFontSizeControl.value;
  outputText.style.fontSize = size + "px";
};

inputFontSizeControl.addEventListener("input", inputEvent);
