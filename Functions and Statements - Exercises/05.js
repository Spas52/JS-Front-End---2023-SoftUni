function palindromeIntegers (array) {
    function isPalindrome(num) {
        const numStr = num.toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        return numStr === reversedNumStr;
    }
    for (const num of array) {
        const result = isPalindrome(num);
        console.log(result);
    }
}

// function palindromeIntegers (array) {
//     for (let i = 0; i < array.length; i++) {
//         const numStr = array[i].toString();
//         const reversedNumStr = numStr.split('').reverse().join('');
//         let a = (numStr === reversedNumStr);
//         if (a) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
//     }
// }

palindromeIntegers([123,323,421,121])
