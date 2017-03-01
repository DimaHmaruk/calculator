/**
 * Created by Totomysha on 28.02.2017.
 */
var firstValue = null;
var secondValue = null;
var act = null;

function acts(value , action)
{
    act = action;
    if (firstValue === null) {
        firstValue = +value;
        display.value = "0";
    }else {
        secondValue = +value;
        rav();
    }


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
            firstValue = +firstValue + +secondValue;
            break;
        case '-':
            firstValue = +firstValue - +secondValue;
            break;
        case '*':
            firstValue = +firstValue * +secondValue;
            break;
        case '/':
            firstValue = +firstValue / +secondValue;
            break;
        case '^x':
            firstValue = Math.pow(+firstValue, +secondValue);
            break;
    }
    display.value = firstValue;
    firstValue = null;
    secondValue = null;
}

function add(value)
{

    if (secondValue !== null){
        value = " ";
        secondValue = null;
    }
    if (display.value === "0"){
        display.value = "";
    }else {
        value = display.value + value;
    }
    display.value = value;
}

function clearAlls()
{
    firstValue = null;
    secondValue = null;
    act = null;
    display.value = "0";
}

function deleteLast(value){
    value = value.substring(0, value.length - 1);
    display.value = value;
}


