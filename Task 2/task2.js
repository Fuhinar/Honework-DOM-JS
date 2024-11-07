const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultDiv = document.getElementById('result');
const calculateButton = document.getElementById('calculateButton');

function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = '<span class="error">Please type both numbers</span>';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.innerHTML = '<span class="error">Not available to divide by 0</span>';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDiv.innerHTML = '<span class="error">Operation error 404.</span>';
            return;
    }

    resultDiv.innerHTML = `Result: ${result}`;
}

calculateButton.addEventListener('click', calculate);
