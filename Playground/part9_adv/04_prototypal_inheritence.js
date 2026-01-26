// prototypal_inheritence.
// Inheritence being done in the prototype

function Person(name){
    this.name = name
}

Person.prototype.greet = function (){
    console.log(`Hello, my name is ${this.name}`)
}
let ali = new Person("Ali Haroon")
ali.greet()

// Object inherit properties from other Objects