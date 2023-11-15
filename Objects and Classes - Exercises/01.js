function employees (array) {
    let people = {};
    for (el of array) {
        people[el] = el.length;
    }
    for (person in people) {
        console.log(`Name: ${person} -- Personal Number: ${people[person]}`)
    }
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ] )