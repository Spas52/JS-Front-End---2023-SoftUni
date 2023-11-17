function oddOccurrences(words) {
    let languages = words.split(' ')
    let lowercaseLanguages = languages.map(function(language) {
        return language.toLowerCase();
      });
    let odd = [];

    let uniqueLanguages = [...new Set(lowercaseLanguages)];
    for (el of uniqueLanguages) {
        let count = lowercaseLanguages.filter(function(language) {
            return language === el;
          }).length;
        if (count % 2 !== 0) {
            odd.push(el)
        }
    }
    console.log(odd.join(' '))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')