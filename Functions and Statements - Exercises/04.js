function oddEvenSum (num) {
    let oddSum = 0;
    let evenSum = 0;
    const numberStr = num.toString();
    for (let i = 0; i < numberStr.length; i++) {
        const digit = parseInt(numberStr[i]);

        if (isNaN(digit)) {
            continue;
        }

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(3495892137259234)