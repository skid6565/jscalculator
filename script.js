const display = document.getElementById('display');
let newline = true;
let value1;
let currentoperator;

function press(button)
{
    if (newline) 
    {
        display.innerHTML = button;
        newline = false;
    }
    else
    {
        let currentValue = display.innerHTML;
        display.innerHTML = currentValue + button;
    }
}

function clearDisplay()
{
   display.innerHTML = 0;
   newline = true;
}

function calculate(operator)
{
    currentoperator = operator;
    value1 = parseFloat(display.innerHTML);
    newline = true;
}

function equals()
{
    let value2 = parseFloat(display.innerHTML);
    let result;

    switch (currentoperator) 
    {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
        case '%':
            result = (value1 * value2) / 100;
            break;
        default:
            return; 
    }
    display.innerHTML = result;
    newline = true;
}

function changenumb()
{
    let num = parseFloat(display.innerHTML);
    let flippedNum = -num;
    display.innerHTML = flippedNum;
}