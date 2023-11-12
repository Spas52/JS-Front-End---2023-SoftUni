function phoneBook (entries) {
    let book = {};

    entries.forEach(entry => {
        let [name, number] = entry.split(' ');
        book[name] = number;
    });

    for (key in book) {
        console.log(`${key} -> ${book[key]}`)
    }
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])