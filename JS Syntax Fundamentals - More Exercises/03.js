function calculator(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.error("Error: Division by zero.");
                return;
            }
            break;
        default:
            console.error("Invalid operator provided.");
            return;
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10)
calculator(5, '(', 10)
calculator(5, '/', 0)