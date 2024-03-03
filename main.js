let display = document.getElementById("display");

let answerDisplayed = false;

function toDisplay(value) {
  if (answerDisplayed) {
    display.value = "";
    answerDisplayed = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  answerDisplayed = false;
}

function calculate() {
  try {
    display.value = eval(display.value);
    answerDisplayed = true;
  } catch (error) {
    display.value = error;
    answerDisplayed = true;
  }
}

function deleteNum() {
  display.value = display.value.slice(0, -1);
}