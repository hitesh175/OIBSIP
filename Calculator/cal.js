let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
        currentOperator = '';
    }
}
