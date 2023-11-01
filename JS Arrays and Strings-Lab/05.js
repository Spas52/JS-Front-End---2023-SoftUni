// function replaceWordWithAsterisks(text, word) {
//     const regex = new RegExp(word, 'g');
  
//     const result = text.replace(regex, match => '*'.repeat(match.length));
//     return result;
//   }
  

function solve(text, word) {
    function repeat(word) {
      return '*'.repeat(word.length);
    }
  
    let censored = text.replace(word, repeat(word));
    
    while (censored.includes(word)) {
      censored = censored.replace(word, repeat(word));
    }
  
    return censored;
  }

let a = solve('A small sentence with some words', 'small')
console.log(a);