// Collecting DOM elements by their IDs
const displayPinInput = document.getElementById("display-pin");
const generatePinButton = document.getElementById("generate-pin");
const typedNumbersInput = document.getElementById("typed-numbers");
const calculatorBody = document.getElementById("calculator");
const verifyPinButton = document.getElementById("verify-pin");
const pinFailureMessage = document.getElementById("pin-failure");
const pinSuccessMessage = document.getElementById("pin-success");

// Additional elements with class IDs
const pinGeneratorContainer = document.querySelector(".pin-generator");
const inputSectionContainer = document.querySelector(".input-section");
const numbersContainer = document.querySelector(".numbers");
const calcBodyContainer = document.querySelector(".calc-body");
const generateBtnStyled = document.querySelector(".generate-btn");
const buttonElements = document.querySelectorAll(".button");
const submitBtnStyled = document.querySelector(".submit-btn");
const actionLeftParagraph = document.querySelector(".action-left");

function getRandomInteger() {
  return Math.floor(Math.random() * (10000 - 1000)) + 1000;
}

generatePinButton.addEventListener("click", () => {
  const pin = getRandomInteger();
  displayPinInput.value = pin;
});

calculatorBody.addEventListener("click", function (event) {
  if (isNaN(event.target.innerText)) {
    if (event.target.innerText === "C") {
      typedNumbersInput.value = "";
    }
    if (event.target.innerText === "<") {
      let previPin = typedNumbersInput.value;
      typedNumbersInput.value = previPin.slice(0, -1);
    }
  } else {
    let previPin = typedNumbersInput.value;
    let newPin = previPin + event.target.innerText;
    typedNumbersInput.value = newPin;
  }
});

verifyPinButton.addEventListener("click", () => {
  let userPinNumber = parseInt(typedNumbersInput.value);
  let generatedPinNumber = parseInt(displayPinInput.value);
  if (userPinNumber === generatedPinNumber) {
    pinSuccessMessage.style.display = "block";
  } else {
    pinFailureMessage.style.display = "block";
  }
});
