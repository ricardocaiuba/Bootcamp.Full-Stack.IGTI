let inputRangeRed = null,
  inputRangeGreen = null,
  inputRangeBlue = null;

let inputTextRed = null,
  inputTextGreen = null,
  inputTextBlue = null;

let divSquare = null;

let r = "0",
  g = "0",
  b = "0";

window.addEventListener("load", () => {
  console.log("DOM loaded.");
  mapElements();
  sync();
});

function mapElements() {
  inputRangeRed = document.querySelector("#inputRangeRed");
  inputRangeGreen = document.querySelector("#inputRangeGreen");
  inputRangeBlue = document.querySelector("#inputRangeBlue");

  inputTextRed = document.querySelector("#inputTextRed");
  inputTextGreen = document.querySelector("#inputTextGreen");
  inputTextBlue = document.querySelector("#inputTextBlue");

  divSquare = document.querySelector("#divSquare");

  inputRangeRed.addEventListener("change", handleInputRangeChange);
  inputRangeGreen.addEventListener("change", handleInputRangeChange);
  inputRangeBlue.addEventListener("change", handleInputRangeChange);
}

function handleInputRangeChange(event) {
  const value = event.target.value;
  const id = event.target.id;
  switch (id) {
    case "inputRangeRed":
      r = value;
      break;

    case "inputRangeGreen":
      g = value;
      break;

    case "inputRangeBlue":
      b = value;
      break;
  }
  sync();
}

function sync() {
  divSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  inputTextRed.value = r;
  inputTextGreen.value = g;
  inputTextBlue.value = b;
}
