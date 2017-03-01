describe("Tests", function() {

    it("Function 'acts' is ok", function() {
        var x = "12";
        var y = "+"
        acts(x ,y)
        assert.equal(x, firstValue);
        assert.equal(y, act);
    });

    it("Function 'add' is ok", function() {
        var x = "123";
        if (display.value !== "0") {
            var y = display.value;
        }else{
            y = "";
        }
        add(x);
        assert.equal((y+x), display.value);

    });

    it("Function 'deleteLast' is ok", function() {
        var x = "123";
        deleteLast(x);
        assert.equal(display.value, "12");

    });

    it("Function 'rav' is ok with +", function() {
        act = "+";
        var x = 1;
        var y = 1;
        firstValue = x;
        rav(y);
        assert.equal(firstValue, (+x + +y));
    });

    it("Function 'rav' is ok with -", function() {
        act = "-";
        var x = 3;
        var y = 2;
        firstValue = x;
        rav(y);
        assert.equal(firstValue, (+x - +y));
    });

    it("Function 'rav' is ok with *", function() {
        act = "*";
        var x = 2;
        var y = 2;
        firstValue = x;
        rav(y);
        assert.equal(firstValue, (+x * +y));
    });

    it("Function 'rav' is ok with /", function() {
        act = "/";
        var x = 4;
        var y = 2;
        firstValue = x;
        rav(y);
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


