function extractAndUppercaseWords(inputStr) {

    let words = inputStr.match(/\b\w+\b/g);

    let upperCaseWords = words.map(word => word.toUpperCase());

    console.log(upperCaseWords.join(", "));
}

extractAndUppercaseWords("Hi, how are you?");
