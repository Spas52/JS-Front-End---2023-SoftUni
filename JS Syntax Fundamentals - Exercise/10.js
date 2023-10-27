function sameNumbers(number) {
    const numStr = number.toString();
    let sum = 0;
    let firstDigit = numStr[0];
    let same = true;

    for (let digit of numStr) {
        sum += parseInt(digit);
        if (firstDigit !== digit) {
            same = false;
        }
    }

    console.log(same);
    console.log(sum);
}

sameNumbers(1234)