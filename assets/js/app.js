const display = document.querySelector(".cnt");
const section = document.querySelector("section");

// Start value
let currentValue = "0";

// Update display function
function show() {
  display.innerText = currentValue;
}

// When any button is clicked
section.addEventListener("click", (event) => {
  // Check if clicked element is a button
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  // Get button text
  let btn = event.target.innerText;

  // CLEAR last character (C)
  if (btn === "C") {
    currentValue = currentValue.slice(0, -1);
    if (currentValue === "") {
      currentValue = "0";
    }
  }

  // ALL CLEAR (AC)
  else if (btn === "AC") {
    currentValue = "0";
  }

  // Multiplication button (X)
  else if (btn === "X") {
    currentValue += "*";
  }

  // Division button (÷)
  else if (btn === "÷") {
    currentValue += "/";
  }

  // Equal button (=)
  else if (btn === "=") {
    currentValue = eval(currentValue);
  }

  // Normal numbers or operators
  else {
    if (currentValue === "0") {
      currentValue = btn;
    } else {
      currentValue += btn;
    }
  }

  show(); // Update screen
});
