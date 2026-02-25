// 1 TypeError
let greet = "Hello";
console.log(greet.push(" word"))

// Here Above TypeError ===> bcz push() is a method of array -->trying to use a method on the wrong type of data.

// 2 Reference Error
let user = { name: "Ali" };
console.log(usr.name);
// ReferenceError Why? Because usr is completely misspelled
