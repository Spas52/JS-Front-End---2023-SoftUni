function tracker (info) {
    let searchedWords = (info.shift()).split(' ');
    let wordsOcuurences = [];
    for (el of searchedWords) {
        let occurance = 0;
        for (word of info) {
            if (el === word) {
                occurance+= 1;
            }
        }
        let add = {};
        add[el] = occurance
        wordsOcuurences.push(add)
    }

    wordsOcuurences.sort(function(a, b) {
        return b[Object.keys(b)[0]] - a[Object.keys(a)[0]];
      });

    wordsOcuurences.forEach(function(item) {
        var key = Object.keys(item)[0];
        var value = item[key];
        console.log(`${key} - ${value}`);
      });
}

tracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'] )