describe("Tests", function() {

    it("Function 'actions' is ok", function() {
        var x = "12";
        var y = "+"
        actions(x ,y)
        assert.equal(x, firstValue);
        assert.equal(y, act);
    });

    it("Function 'addNumber' is ok", function() {
        var x = "123";
        if (display.value !== "0") {
            var y = display.value;
        }else{
            y = "";
        }
        addNumber(x);
        assert.equal((y+x), display.value);

    });

    it("Function 'deleteLast' is ok", function() {
        var x = "123";
        deleteLast(x);
        assert.equal(display.value, "12");

    });

    it("Function 'equally' is ok with +", function() {
        act = "+";
        var x = 1;
        var y = 1;
        firstValue = x;
        equally(y);
        assert.equal(firstValue, (+x + +y));
    });

    it("Function 'equally' is ok with -", function() {
        act = "-";
        var x = 3;
        var y = 2;
        firstValue = x;
        equally(y);
        assert.equal(firstValue, (+x - +y));
    });

    it("Function 'equally' is ok with *", function() {
        act = "*";
        var x = 2;
        var y = 2;
        firstValue = x;
        equally(y);
        assert.equal(firstValue, (+x * +y));
    });

    it("Function 'equally' is ok with /", function() {
        act = "/";
        var x = 4;
        var y = 2;
        firstValue = x;
        equally(y);
        assert.equal(firstValue, (+x / +y));
    });

    it("Function 'clearAlls' is ok", function() {
        firstValue = 1;
        act = "+";
        clearAlls();
        assert.equal(firstValue, 0);
        assert.equal(act, null);
    });


});


