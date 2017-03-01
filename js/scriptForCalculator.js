/**
 * Created by Totomysha on 28.02.2017.
 */
var firstValue = 0;
var act = null;

function acts(value , action)
{
    if (act === null) {
        firstValue = 0;
    }
    firstValue = +value;
    act = action;
    addDelOnDisplay(0);
}

function rav(value)
{
    switch(act) {
        case '+':
            firstValue =+firstValue +  +value;
            break;
        case '-':
            firstValue =+firstValue - +value;
            break;
        case '*':
            firstValue =+firstValue * +value
            break;
        case '/':
            firstValue =+firstValue / +value;
            break;
        case '^x':
            firstValue = Math.pow(+firstValue, +value);
            break;
    }
    addDelOnDisplay(firstValue);
    act = null;
}

function add(value)
{
    if (display.value === "0"){
        display.value = value;
    }else {
        display.value += value;
    }
}

function clearAlls()
{
    firstValue = 0;
    act = null;
    addDelOnDisplay(0);
}

function deleteLast(value){
    value = value.substring(0, value.length - 1);
    addDelOnDisplay(value);
}

function addDelOnDisplay(value) {
    display.value = value;
}


