function processCatStrings(catStrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    catStrings.forEach(catString => {
        // Split the string into cat name and age
        const [name, age] = catString.split(' ');

        // Create a new Cat object and invoke the .meow() method
        const cat = new Cat(name, age);
        cat.meow();
    });
}

processCatStrings(['Mellow 2', 'Tom 5'])