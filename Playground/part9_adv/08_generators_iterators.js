// 08_generators_iterators.js
// * is used in function to create a generator
// generator function doesnt execute thing all at once
// Yield tell on which time which result give

function* numGenerator(){
    yield 1
    yield 2
    yield 3
}

// let gen = numGenerator()

// console.log(gen());

// it will give Output of this console.log(gen()); ------> as --> gen is not a function

/**
 However gen holding a function
below see what to do
 */

let gen = numGenerator()
let gen2 = numGenerator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);


