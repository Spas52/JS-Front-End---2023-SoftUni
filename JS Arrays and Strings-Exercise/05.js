function reveal(string, template) {
    const words = string.split(', ');
    const text = template.split(' ');

    for (let i = 0; i < text.length; i++) {
        if (text[i][0] === '*') {
            const lenOfEl = text[i].length;

            for (let j = 0; j < words.length; j++) {
                if (words[j].length === lenOfEl) {
                    text[i] = words[j];
                    break;
                }
            }
        }
    }

    console.log(text.join(' '));
}

// function reveal(string, template) {
//     const words = string.split(', ');
//     const text = template.split(' ');

//     const revealedText = text.map((el, index) => {
//         if (el[0] === '*') {
//             const lenOfEl = el.length;
//             const matchingWord = words.find(word => word.length === lenOfEl);
//             if (matchingWord) {
//                 return matchingWord;
//             }
//         }
//         return el;
//     });

//     console.log(revealedText.join(' '));
// }

reveal('great, learning', 'softuni is ***** place for ******** new programming languages');
