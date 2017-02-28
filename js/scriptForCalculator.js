/**
 * Created by Totomysha on 28.02.2017.
 */
var firstValue = null;
var secondValue = null;
var act = null;
var key = null;

function acts(value)
{
    if (firstValue == null){
        firstValue = display.value;
    }
    display.value = " ";
    act = value;
}

function rav()
{
    secondValue = null;
    if (firstValue !== null){
        secondValue = display.value;
    }
    display.value = " ";
    switch(act) {
        case '+':
            display.value = +firstValue + +secondValue;
            firstValue = +firstValue + +secondValue;
            break;

        case '-':
            display.value = +firstValue - +secondValue;
            firstValue = +firstValue - +secondValue;
            break;
        case '*':
            display.value = +firstValue * +secondValue;
            firstValue = +firstValue * +secondValue;
            break;
        case '/':
            display.value = +firstValue / +secondValue;
            firstValue = +firstValue / +secondValue;
            break;
        case '^x':
            firstValue = Math.pow(+firstValue, +secondValue);
            display.value = +firstValue;
            break;
    }
}

function add(value)
{
    if (secondValue !== null){
        display.value = " ";
        secondValue = null;
    }
    if (value === "." && display.value === ""){
        display.value = "0" + value;
    }else {
        display.value = display.value + value;
    }
}

function clearAll()
{
    firstValue = null;
    secondValue = null;
    act = null;
    display.value = "";
}

function deleteLast()
{
    var buf = display.value;
    buf = buf.substring(0, buf.length - 1);
    display.value = buf;
}
