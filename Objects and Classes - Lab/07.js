function manageAddressBook(entries) {
    var addressBook = {};

    // Loop through the array of strings
    entries.forEach(entry => {
        // Split the string into name and address
        var [name, address] = entry.split(':');

        // Replace the address if the name already exists in the address book
        addressBook[name] = address;
    });

    // Print the full list sorted alphabetically by the person’s name
    Object.keys(addressBook).sort().forEach(name => {
        console.log(`${name} -> ${addressBook[name]}`);
    });
}

manageAddressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])