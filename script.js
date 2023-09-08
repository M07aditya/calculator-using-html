// script.js
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("result").value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById("result").value = currentInput;
    } catch (e) {
        alert('Invalid input');
        clearDisplay();
    }
}
