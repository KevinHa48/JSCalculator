/*
========================================================================
TODO:
Functionality: Implement Decimals, backspace, negative operator and pow.
Design: Think of cleaner design.
Errors: 
    - Cannot handle decimal arithmetic, use parseFloats.
    - Double check if operator spam is still ok.
========================================================================
*/

initialize();
var screen = document.getElementById("display");


function clear_screen() {
    screen.value = "";
    divide_zero_status(false);
}

function divide_zero_status(status) {
    dv_zero_flag = status;
    var ops = document.getElementsByClassName("op");
    for(var i = 0; i < ops.length; i++) {
        ops[i].disabled = status;
    }
}

function calculate(opr) {
    res = operator(opr, res, parseInt(screen.value));
    if(res == Infinity) {
        screen.value = "Divide by Zero Error";
        initialize();
        divide_zero_status(true);
        return;
    }
    screen.value = res;
}

function numProcess (input) {

    if(isNaN(input)) {
        if(isNaN(parseInt(screen.value)) || (op1_flag == true && op == input)) {
            console.log("1")
            return;
        }

        else if(input == "=") {
            console.log("2")
            calculate(op);
            op = "=";
            op1_flag = true;
        }
        //add another variable to store screen.value? 
        else if (op1_flag) {
            console.log("3")
            op = input;
            res = parseInt(screen.value);
            clear_screen();
            op1_flag = false;
        }

        else {
            console.log("4")
            calculate(op);
            op = input;
            op1_flag = true;
        }
    }
    
    else if(dv_zero_flag || op == "=") {
        clear_screen();
        op = "";
        divide_zero_status(false);
        screen.value += input;
    }

    else if (op1_flag && op) {
        op1_flag = false;
        clear_screen();
        screen.value += input;
    }

    else {
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
        case "=":
            return op1 / op2;
    }

}

function initialize() {
    res = 0;
    op1_flag = true;
    op = "";
    dv_zero_flag = false;
}