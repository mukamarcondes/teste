const display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (!isNaN(lastChar) || lastChar === ')' || lastChar === '.') {
        display.value += operator;
    }
}

function appendFunction(func) {
    display.value += func;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}

function appendDot() {
    const lastNumber = display.value.split(/[\+\-\*\/\(\)]/).pop();
    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

