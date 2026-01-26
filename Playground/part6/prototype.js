// let computer = {cpu:12}
// let lenovo = {screen:"HD"}
// let tomHardWare = {}

// console.log(`computer`,computer.__proto__) //__dunder__ is Dunder
// //  See output so You have an Idea about the prototype
// // Output ----> [Object: null prototype] {}
// // to see ptoto common method is  ----> __proto__

// 1st Uncomment   

// let computer1 = {cpu:12}
// let lenovo1 = {
//     screen:"HD",
//     __proto__ :computer1,
// }
// let tomHardWare1 = {}

// console.log(`computer`,lenovo1.__proto__)
// 2nd Uncomment  




// 3rd Uncomment   
let genericCar = {wheel:4}

let Tesla = {driver:"AI"}

Object.setPrototypeOf(Tesla,genericCar)
// console.log("tesla",Tesla.wheel);  // first way to acces prtp but not effective
console.log("prototype of tesla is : ",Object.getPrototypeOf(Tesla));
// Actually tesla inheriting proto from genericCar