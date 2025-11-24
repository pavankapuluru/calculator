JavaScript Calculator – Simple & Clean UI

A simple calculator built using HTML, CSS, and JavaScript, designed to handle basic arithmetic operations with a responsive display.
This project is perfect for beginners learning DOM manipulation, event handling, and dynamic UI updates in JavaScript.

Features

➕ Addition

➖ Subtraction

✖️ Multiplication

➗ Division

Clear last character (C)

Reset all (AC)

Real-time display update

Button-based input using event delegation
How It Works

The calculator listens for button clicks using section.addEventListener("click"), checks which button was pressed, and updates the display accordingly.

Key parts:

currentValue holds the expression being typed

show() updates the screen

Handles special buttons:

C → Clears last character

AC → Clears everything

X → Replaced with \* for multiplication

÷ → Replaced with / for division

= → Evaluates using eval()

/project-folder
├── index.html
├── style.css
├── script.js <-- contains the calculator logic

Technologies Used

HTML5

CSS3

JavaScript (ES6+)

How to Clone

git clone https://github.com/yourusername/calculator.git
