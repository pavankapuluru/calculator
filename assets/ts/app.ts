const display = document.querySelector(".cnt") as HTMLElement;
const section = document.querySelector("section") as HTMLElement;

// if (!display || !section) {
//   throw new Error("Required DOM elements not found: .cnt or section");
// }

let currentValue: string = "0";

function show(): void {
  display.innerText = currentValue;
}

section.addEventListener("click", (event: Event) => {
  const target = event.target as HTMLElement | null;
  if (!target) return;

  if (target.tagName !== "BUTTON") {
    return;
  }

  const btn: string = target.innerText;

  if (btn === "C") {
    currentValue = currentValue.slice(0, -1);
    if (currentValue === "") {
      currentValue = "0";
    }
  } else if (btn === "AC") {
    currentValue = "0";
  } else if (btn === "X") {
    currentValue += "*";
  } else if (btn === "÷") {
    currentValue += "/";
  } else if (btn === "=") {
    try {
      const result = eval(currentValue);
      currentValue = String(result);
    } catch {
      currentValue = "Error";
    }
  } else {
    if (currentValue === "0") {
      currentValue = btn;
    } else {
      currentValue += btn;
    }
  }

  show();
});
