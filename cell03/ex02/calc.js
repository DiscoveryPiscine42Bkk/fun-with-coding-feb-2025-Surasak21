const form = document.getElementById('calculatorForm');
const leftOperandInput = document.getElementById('leftOperand');
const rightOperandInput = document.getElementById('rightOperand');
const operatorSelect = document.getElementById('operator');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const leftOperand = parseInt(leftOperandInput.value);
  const rightOperand = parseInt(rightOperandInput.value);
  const operator = operatorSelect.value;

  if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
    alert('Error :(');
    return;
  }

  let result;
  switch (operator) {
    case '+': result = leftOperand + rightOperand; break;
    case '-': result = leftOperand - rightOperand; break;
    case '*': result = leftOperand * rightOperand; break;
    case '/':
      if (rightOperand === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
      }
      result = leftOperand / rightOperand; break;
    case '%':
      if (rightOperand === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
      }
      result = leftOperand % rightOperand; break;
  }

  alert('result: ' + result);
  console.log('result: ' + result);
});

setInterval(function() {
  alert('Please, use me.....');
}, 30000);