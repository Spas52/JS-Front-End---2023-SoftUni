function sum(elements) {
    let num1 = elements.shift();
    let num2 = elements.pop();
    let summary = num1 + num2;
    console.log(summary)
}

sum([20, 30, 40])