/*
========================================================================
TODO:
Functionality: Implement Decimals, backspace, negative operator and pow.
Design: Think of cleaner design.
Errors: 
    - Cannot handle decimal arithmetic, use parseFloats.
    - Double check if operator spam is still ok.
    - Fix operator input clearing screen.

Strange things:
    - JS handles 0 / 0 as NaN.

========================================================================
*/

clear_screen();

var screen = document.getElementById("display");

function divide_zero_status(status) {
    dv_zero_flag = status;
    var ops = document.getElementsByClassName("op");
    for(var i = 0; i < ops.length; i++) {
        ops[i].disabled = status;
    }
}

function calculate(opr) {
    res = operator(opr, res, parseFloat(accum));
    if(res == Infinity || isNaN(res)) {
        console.log(res);
        clear_screen();
        screen.value = "Divide by Zero Error";
        divide_zero_status(true);
        return;
    }
    screen.value = res;
    accum = res;
}

function numProcess (input) {

    if(isNaN(input)) {
        if(isNaN(parseFloat(accum)) || (op1_flag == true && op == input)) {
            console.log("1")
            return;
        }

        else if(input == "=" && op == "") {
            screen.value = parseFloat(accum);
            op = input;
        }
        
        else if (op1_flag) {
            console.log("3")
            op = input;
            res = parseFloat(accum);
            accum = "";
            op1_flag = false;
        }

        else {
            console.log("4")
            console.log("operator else:", op);
            calculate(op);
            op = input;
            op1_flag = true;
        }
    }
    
    else if(dv_zero_flag || op == "=") {
        clear_screen();
        accum += input;
        screen.value += input;
    }

    else if (op1_flag && op) {
        op1_flag = false;
        accum = screen.value = "";
        accum += input;
        screen.value += input;
    }

    else {
        if(accum == 0) {screen.value = ""};
        accum += input;
        screen.value += input;
    }
  
}

function operator (op, op1, op2) {
    switch(op) {
        case "+":
            return op1 + op2;
        case "-":
            return op1 - op2;
        case "*":
            return op1 * op2;
        case "/":
            return op1 / op2;
        case "^":
            return Math.pow(op1, op2);
    }

}

function clear_screen() {
    accum = "";
    screen.value = "";
    res = 0;
    op1_flag = true;
    op = "";
    divide_zero_status(false);
    dv_zero_flag = false;
}