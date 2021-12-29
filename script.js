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

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const currentOperandText = document.querySelector("[data-current-display]");
const lastOperandText = "";

class Calculator {
  constructor(lastOperandText, currentOperandText) {
    this.lastOperandText = lastOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.lastOperand = "";
    this.operator = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operator) {
    if (this.currentOperand === "") return;
    if (this.lastOperand !== "") {
      this.calculate();
    }
    this.operator = operator;
    this.lastOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let result = null;
    const lastNum = parseFloat(this.lastOperand);
    const currentNum = parseFloat(this.currentOperand);

    if (isNaN(lastNum) || isNaN(currentNum)) return;
    switch (this.operator) {
      case "+":
        result = lastNum + currentNum;
        break;
      case "-":
        result = lastNum - currentNum;
        break;
      case "*":
        result = lastNum * currentNum;
        break;
      case "÷":
        result = lastNum / currentNum;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.operator = undefined;
    this.lastOperand;
  }

  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(lastOperandText, currentOperandText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

/* 
Whatever numbers get pressed before the operand needs to be assigned to lastOperand. 

Append number to currentNum
Append number to currentNum 
+
if operator is clicked, last Operand = currentNum 
clear currentNum 


*/
