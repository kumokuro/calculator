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

let num1 = null;
let num2 = null;
let clickedNum = 0;
let checkForSecondNum = false;

// stores clicked number and displays to screen
function getClickedNum() {
  let numbers = document.querySelectorAll(".number");
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      clickedNum = number.textContent;
      resultDisplay.textContent = clickedNum;
      getResult();
    });
  });
}
getClickedNum();

function getResult() {
  if (num1 === null) {
    num1 = parseInt(clickedNum);
  }
  if (num1 !== null) {
    checkForSecondNum = true;
  }
  if (checkForSecondNum === true) {
    num2 = parseInt(clickedNum);
  }
  if (num2 !== null) {
    result = operate(add, num1, num2);
    console.log(`${num1} + ${num2} = ${result}`);
  }
  //console.log(`num1: ${num1} num2: ${num2}`);
}

let result = 0;

// displaying the results to the screen
const resultDisplay = document.querySelector("#result");
resultDisplay.textContent = result;

/* 



*/
