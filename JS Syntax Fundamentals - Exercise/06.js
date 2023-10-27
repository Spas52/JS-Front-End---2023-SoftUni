function sumDigits(numbers) {
    let num = numbers.toString()
    let sum = 0;
    num = num.split('')
    let lenOfNum = num.length - 1;
    for (i = 0; i <= lenOfNum; i++) {
        sum += parseInt(num[i])
    }

    console.log(sum)
}

// function sumDigits(numbers) {
//     let sum = numbers.toString()
//                     .split('')
//                     .reduce((acc, digit) => acc + parseInt(digit), 0);

//     console.log(sum);
// }

sumDigits(543)