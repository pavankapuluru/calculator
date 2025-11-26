const display = document.querySelector(".cnt");
const section = document.querySelector("section");
// if (!display || !section) {
//   throw new Error("Required DOM elements not found: .cnt or section");
// }
let currentValue = "0";
function show() {
    display.innerText = currentValue;
}
section.addEventListener("click", (event) => {
    const target = event.target;
    if (!target)
        return;
    if (target.tagName !== "BUTTON") {
        return;
    }
    const btn = target.innerText;
    if (btn === "C") {
        currentValue = currentValue.slice(0, -1);
        if (currentValue === "") {
            currentValue = "0";
        }
    }
    else if (btn === "AC") {
        currentValue = "0";
    }
    else if (btn === "X") {
        currentValue += "*";
    }
    else if (btn === "÷") {
        currentValue += "/";
    }
    else if (btn === "=") {
        try {
            const result = eval(currentValue);
            currentValue = String(result);
        }
        catch (_a) {
            currentValue = "Error";
        }
    }
    else {
        if (currentValue === "0") {
            currentValue = btn;
        }
        else {
            currentValue += btn;
        }
    }
    show();
});
export {};
//# sourceMappingURL=app.js.map