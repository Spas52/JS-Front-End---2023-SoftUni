function modernTimes(inputString) {
    // Regular expression to match words starting with # and consisting of only letters
    const regex = /#([a-zA-Z]+)\b/g;

    let match;
    while ((match = regex.exec(inputString)) !== null) {
        const specialWord = match[1];
        console.log(specialWord);
    }
}

// function modernTimes(inputString) {
//     const words = inputString.split(' ');
    
//     for (const word of words) {
//         if (word.startsWith('#')) {
//             const specialWord = word.substring(1);
//             if (/^[a-zA-Z]+$/.test(specialWord)) {
//                 console.log(specialWord);
//             }
//         }
//     }
// }

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
