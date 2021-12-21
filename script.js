// creating the operators
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  const difference = num1 - num2;
  return difference;
}

function multiply(num1, num2) {
  const product = num1 * num2;
  return product;
}

function divide(num1, num2) {
  const quotient = num1 / num2;
  return quotient;
}

// calls the operators
function operate(operator, num1, num2) {
  return operator(num1, num2);
}

class Calculator {
  constructor(lastOperand, currentOperand) {
    this.lastOperand = lastOperand;
    this.currentOperand = currentOperand;
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}

let result = 0;

// displaying the results to the screen
const resultDisplay = document.querySelector("#result");
resultDisplay.textContent = result;

/* 



*/
