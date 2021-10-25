let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMyltiply = document.getElementById('buttonMyltiply');
let buttonDevide = document.getElementById('buttonDevide');

let operatInButton = document.getElementsByClassName('operationButton');

let buttonReset = document.getElementById('buttonReset');

let input1 = document.getElementById('one');
let input2 = document.getElementById('two');

function makeOperation(operation) {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);


    if (operation == '+') {
        let result = number1 + number2;
        alert(result);
    } else if (operation == '-') {
        let result = number1 - number2;
        alert(result);
    } else if (operation == '*') {
        let result = number1 * number2;
        alert(result);
    } else if (operation == '/') {
        let result = number1 / number2;
        alert(result);
    }
}

function onOperationButtonClick(event) {
    let clickElement = event.currentTarget;
    let operat = clickElement.innerHTML;
    makeOperation(operat)
}

function onButtonResetClick() {
    input1.value = '';
    input2.value = '';
    input1.setAttribute('placeholder', 'Введите число');
    input2.setAttribute('placeholder', 'Введите число');
}

for (i = 0; i < operatInButton.length; i++) {
    let button = operatInButton[i];
    button.addEventListener('click', onOperationButtonClick)
}

buttonReset.addEventListener('click', onButtonResetClick)
