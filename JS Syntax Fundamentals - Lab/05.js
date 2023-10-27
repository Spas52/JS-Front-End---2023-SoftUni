// function MathOperation (first_num, second_num, operator) {
//     if(operator == '+') {
//         let result = first_num + second_num
//         console.log(`${result}`)
//     }
//     if(operator == '-') {
//         let result = first_num - second_num
//         console.log(`${result}`)
//     }
//     if(operator == '*') {
//         let result = first_num * second_num
//         console.log(`${result}`)
//     }
//     if(operator == '/') {
//         let result = first_num / second_num
//         console.log(`${result}`)
//     }
//     if(operator == '%') {
//         let result = first_num % second_num
//         console.log(`${result}`)
//     }
//     if(operator == '**') {
//         let result = first_num ** second_num
//         console.log(`${result}`)
//     }
// }

function MathOperation(first_num, second_num, operator) {
    let result;

    switch (operator) {
        case '+':
            result = first_num + second_num;
            break;
        case '-':
            result = first_num - second_num;
            break;
        case '*':
            result = first_num * second_num;
            break;
        case '/':
            result = first_num / second_num;
            break;
        case '%':
            result = first_num % second_num;
            break;
        case '**':
            result = first_num ** second_num;
            break;
        default:
            console.log("Invalid operator!");
            return;
    }

    console.log(result);
}


MathOperation(3, 5.5, "*")