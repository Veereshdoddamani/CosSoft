let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousValue = null;
let fullExpression = ""; 

function appendValue(value) {
  currentInput += value;
  fullExpression += value; 
  updateDisplay(fullExpression);
}

function appendOperator(op) {
  if (currentInput === "" && previousValue === null) return; 
  if (previousValue === null) {
    previousValue = currentInput;
    operator = op;
    currentInput = "";
    fullExpression += ` ${op} `;
  } else if (currentInput !== "") {
    calculate();
    operator = op;
    fullExpression += ` ${op} `;
  }
  updateDisplay(fullExpression);
}

function calculate() {
  if (!operator || currentInput === "") return;

  const current = parseFloat(currentInput);
  const previous = parseFloat(previousValue);
  let result = null;

  switch (operator) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "*":
      result = previous * current;
      break;
    case "/":
      result = current === 0 ? "Error" : previous / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousValue = null;
  fullExpression += ` = ${result}`;
  updateDisplay(fullExpression);
  fullExpression = result.toString();
  currentInput = result.toString();
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  previousValue = null;
  fullExpression = "";
  updateDisplay("0");
}

function updateDisplay(value) {
  display.innerText = value || "0";
}
