function solve(string, searchedWord) {
    let words = string.split(' ');
    let occurrences = 0;
    for (let word of words) {
        if (word === searchedWord) {
            occurrences += 1;
        }
    }
    console.log(occurrences)
}

// function countOccurrences(string, searchedWord) {
//     const words = string.split(' ');
//     const occurrences = words.reduce((count, word) => (word === searchedWord ? count + 1 : count), 0);
//     console.log(occurrences);
//   }
  


solve('This is a word and it also is a sentence',

    'is')