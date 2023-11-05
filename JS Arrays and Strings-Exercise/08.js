function splitPascalCase(inputString) {
    const words = inputString.match(/[A-Z][a-z]*/g); // Split the string into words

    if (words) {
        const result = words.join(', '); // Join the words with a comma and a space
        console.log(result);
    }
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')