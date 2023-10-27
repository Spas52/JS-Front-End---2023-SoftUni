function cookingByNumbers(number, op1,op2,op3,op4,op5) {
    let num = parseInt(number);
    let list_of_operators = [];
    list_of_operators.push(op1, op2,op3,op4,op5)
    for(op of list_of_operators) {
        if (op === 'chop') {
            num = num / 2;
        } else if (op === 'dice') {
            num = Math.sqrt(num);
        } else if (op === 'spice') {
            num += 1;
        } else if (op === 'bake') {
            num *= 3;
        } else if (op === 'fillet') {
            num = num - (num * 0.2);
        }
        console.log(num)
    }
    
}

// function cookingByNumbers(number, ...ops) {
//     let num = parseInt(number);

//     for (let op of ops) {
//         switch (op) {
//             case 'chop':
//                 num /= 2;
//                 break;
//             case 'dice':
//                 num = Math.sqrt(num);
//                 break;
//             case 'spice':
//                 num += 1;
//                 break;
//             case 'bake':
//                 num *= 3;
//                 break;
//             case 'fillet':
//                 num *= 0.8;  // this is equivalent to num = num - (num * 0.2)
//                 break;
//         }
//         console.log(num);
//     }
// }

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')