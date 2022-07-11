//UI
const numberButtons = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const addButton = document.querySelector('.plus');
const subtractButton = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiplySymbol');
const divideButton = document.querySelector('.divideSymbol');
const operatorButtons = document.querySelectorAll('.operator');
const equal = document.querySelector('.equalSymbol');

//The operations

//Addition
function add(a,b) {
    return a + b;
};
//Subtraction
function subtract(a,b) {
    return a - b;
};
//Multiplication
function multiply(a,b) {
    return a * b;
};
//Division
function divide(a,b) {
    return a / b;
};

//Function to being the operation
function operate(operator, firstNum, secondNum) {
    if(operator === '+') {
        return add(firstNum,secondNum);
    } else if(operator === '-') {
        return subtract(firstNum,secondNum);
    } else if(operator === 'x') {
        return multiply(firstNum,secondNum);
    } else if(operator === '÷') {
        return divide(firstNum,secondNum);
    }
};

//Function to populate the display with the number clicked
function populateDisplay() {
    if(typingStatus === null) {
        display.textContent= '';
        display.textContent += this.textContent;
    } else {
        display.textContent += this.textContent;
    }
    typingStatus = 'active';
}

numberButtons.forEach(button => button.addEventListener('click', populateDisplay));


//Operations functions
let firstValue = null;
let secondValue = null;
let currentOperator = null;
let typingStatus = null;

        //Clear button
        clearButton.addEventListener('click', (e) => {
            display.textContent = '';
            firstValue = null;
            secondValue = null;
        });

function evaluate() {
    if(firstValue === null) {
        firstValue = Number(display.textContent);
        currentOperator = this.textContent;
    } else {
        secondValue = Number(display.textContent);
        currentOperator = this.textContent;
        display.textContent = operate(currentOperator, firstValue, secondValue);
        firstValue = Number(display.textContent);
    }
    typingStatus = null;
};

operatorButtons.forEach(button => button.addEventListener('click', evaluate));

equal.addEventListener('click', (e) => {
    secondValue = Number(display.textContent);
    display.textContent = operate(currentOperator,firstValue,secondValue);
    firstValue = null;
    secondValue = null;
});


