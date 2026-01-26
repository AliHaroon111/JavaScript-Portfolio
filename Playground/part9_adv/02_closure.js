// Closers are functions
function outer() {
    let counter =  4
    return function () {
        counter++
        return counter
        
    }
}
//  a function in which new function is return it''s actuall retain the memory itself

let increament = outer()
console.log(increament());
console.log(increament());
console.log(increament());

/*
Here, outer() runs once and returns the inner function.

increament now holds that inner function, not the value.

But the special thing: increament remembers the variable counter from outer() — even though outer() has already finished running.
*/