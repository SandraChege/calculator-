const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector(".calculator_btns");
const display = document.querySelector('.calculator_display')
// const previousKeyType = calculator.dataset.previousKeyType;

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))

        const previousKeyType = calculator.dataset.previousKeyType;
        if (!action) {
          if (displayedNum === "0" || previousKeyType === "operator") {
            display.textContent = keyContent;
          } else {
            display.textContent = displayedNum + keyContent;
          }
        }

        if (
          action === "add" ||
          action === "subtract" ||
          action === "multiply" ||
          action === "divide"
        ) {
            // console.log("operator key!");
            key.classList.add("is-depressed");
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if (action === "decimal") {
          display.textContent = displayedNum + ".";
        }

        if (action === "clear") {
          console.log("clear key!");
        }
        if (action === "calculate") {
          // console.log("equal key!");
          const firstValue = calculator.dataset.firstValue;
          const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            
          display.textContent = calculate(firstValue, operator, secondValue);
        }
    }
})
const calculate = (n1, operator, n2) => {
  // Perform calculation and return calculated value
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};