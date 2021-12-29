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
      case "x":
        result = lastNum * currentNum;
        break;
      case "÷":
        result = lastNum / currentNum;
        break;
      default:
        return;
    }
    this.currentOperand = round(result, 6);
    this.operator = undefined;
    this.lastOperand = "";
  }

  updateDisplay() {
    if (this.operator === undefined) {
      this.currentOperandText.innerText = this.currentOperand;
    } else if (this.operator !== undefined && this.currentOperand !== "") {
      this.currentOperandText.innerText = this.currentOperand;
    } else {
      this.currentOperandText.innerText = this.lastOperand;
    }
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

equalsButton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
