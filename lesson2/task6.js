function mathOperation(arg1, arg2, operation) {
    arg1 = +prompt("Enter the first number: ")
    arg2 = +prompt("Enter the second number: ")
    operation = prompt("Choose 1 out of sum/sub/div/mult:")
    switch (operation) {
        case "sum":
            return arg1 + arg2;
            break;
        case "sub":
            return arg1 - arg2;
            break;
        case "div":
            return arg1 / arg2;
            break;
        case "mult":
            return arg1 * arg2;
            break;
    }
}

console.log(mathOperation())