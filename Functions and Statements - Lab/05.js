function simpleCalculator(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply':
            multiply = (a, b) => a * b;
            console.log(multiply(numOne, numTwo))
            break
        case 'divide':
            divide = (a, b) => a / b;
            console.log(divide(numOne, numTwo))
            break
        case 'subtract':
            subtract = (a, b) => a - b;
            console.log(subtract(numOne, numTwo))
            break
        case 'add':
            add = (a, b) => a + b;
            console.log(add(numOne, numTwo))
    }
}

simpleCalculator(40, 8, 'multiply')