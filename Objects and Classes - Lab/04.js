function convertToJSON (firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    person = JSON.stringify(person)
    console.log(person)
}

convertToJSON('George', 'Jones', 'Brown')