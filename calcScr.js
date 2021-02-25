var accum = "";
var res = 0;
var op1_flag = true;
var op2_flag = false;

function clear() {
    accum = "";
    document.getElementById("display").value = "";
}

function numProcess (input) {
    if(isNaN(input)) {
        if(isNaN(parseInt(accum))) {
            clear();
            return;
        }
        if (op1_flag) {
            res += parseInt(accum);
            clear();
            op1_flag = false;
            op2_flag = true;
        }
        else {
            res = operator(input, res, parseInt(accum))
            document.getElementById("display").value = res;
            return res;
        }
    }
    else {
        document.getElementById("display").value += input
        accum += input;
    }
  
}

function operator (op, op1, op2) {
    switch(op) {
        case "+":
            return op1 + op2;
            break;
        case "-":
            return op1 - op2;
            break;
        case "*":
            return op1 * op2;
            break;
        case "/":
            return op1 / op2;
            break;
        case "=":
            return op1 / op2;
            break;
    }

}