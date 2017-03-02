describe("Tests", function() {
    var DisplayValue = "123";
    var action = "+";
    var newNumber = "1";
    var buff = 0;

    it("Test function 'deleteLast' with input parameters:figure from the display '" + DisplayValue +
        "'. Result: Display value = '12' ", function() {
        display.value = DisplayValue;
        deleteLast(DisplayValue);
        assert.equal(display.value, "12");

    });

    it("Test function 'actions' with input parameters:figure from the display '"+ DisplayValue +
        "' and selected mathematical operation '" + action + "'. Result: global variable 'firstValue' = '"+
        DisplayValue + "', global variable 'act' = '" + action +"' ", function() {
        actions(DisplayValue ,action);
        assert.equal(DisplayValue, firstValue);
        assert.equal(action, act);
    });

    it("Test function 'addNumber' with input parameters:figure from the display '"+ DisplayValue +
        "' and new number '" + newNumber + "'. Result: Display value = '"+
        DisplayValue + newNumber +"' ", function() {
        display.value = DisplayValue;
        if (DisplayValue !== "0") {
            buff = DisplayValue;
        }else{
            buff = "";
        }
        addNumber(newNumber);
        assert.equal((buff + newNumber), display.value);

    });

    var buff2 = 100;
    it("Test function 'equally' with action '+', function should be summarized: '" + DisplayValue +
        "' and '" + buff2 + "', result: '" +(buff2 + +DisplayValue)+"'.", function() {
        act = "+";
        firstValue = buff2;
        equally(DisplayValue);
        assert.equal(firstValue, (+buff2 + (+DisplayValue)));
    });

    it("Test function 'equally' with action '-', function should be subtraction: '" + DisplayValue +
        "' and '" + buff2 + "', result: '" +(buff2 - +DisplayValue)+"'.", function() {
        act = "-";
        firstValue = buff2;
        equally(DisplayValue);
        assert.equal(firstValue, (+buff2 - (+DisplayValue)));
    });

    it("Test function 'equally' with action '*', function should be multiply: '" + DisplayValue +
        "' and '" + buff2 + "', result: '" +(buff2 * +DisplayValue)+"'.", function() {
        act = "*";
        firstValue = buff2;
        equally(DisplayValue);
        assert.equal(firstValue, (+buff2 * (+DisplayValue )));
    });

    it("Test function 'equally' with action '/', function should be divide: '" + DisplayValue +
        "' and '" + buff2 + "', result: '" +(buff2 / +DisplayValue)+"'.", function() {
        act = "/";
        firstValue = buff2;
        equally(DisplayValue);
        assert.equal(firstValue, (+buff2 / (+DisplayValue)));
    });

    it("Test function 'clearAlls', function must clear the global field 'firstValue' and 'act'", function() {
        firstValue = 1;
        act = "+";
        clearAlls();
        assert.equal(firstValue, 0);
        assert.equal(act, null);
    });


});


