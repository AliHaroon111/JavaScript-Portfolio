// let uesername = {
//     firstname:"Ali",
//     isLoggedIn : true, //  Memory reserved we can't change it BUT we can Change varible val/var(primitives) here
// }

// uesername.firstname = "Mr Ali"
// uesername.lastname = "Haroon"

// console.log("fN",uesername.firstname);
// console.log("LN",uesername.lastname);

// // Above the Method is to Access the prmtiv by Dot 

// // But when we Have a space like "First Name" then it not works So we need to have a proper method so see below is the method
// let username1 = {
//     "first name":"Ali",
//     isLoggedIn : true, //  Memory reserved we can't change it BUT we can Change varible val/var(primitives) here
// }
// console.log("2nd way of Accecing pmtv",username1["first name"]);

// // let today = new Date();
// // console.log(today.getDate());

// // console.log(uesername);
// // console.log(typeof(uesername));

// ============> Uncomment from this to see Object

// Array
let anotherUser = ["Ali", true]
console.log(anotherUser[0]);  //Array Can access by Index
console.log(anotherUser[1]);  //Array Can access by Index

// Type Conversion
console.log("Check Addition - Type Conversion ",1 + "1")

let isValue = true
let isValue1 = false
console.log("Add True to 1  :",isValue + 1);
// Aslo you can implicitely declare the Types
console.log("Add True to 1(implicitily dec)  :",Number(isValue) + 1);    

let isValue2 = "2abc"
console.log("can we cnv 2ab to num :",Number(isValue2));  // NaN ==> Not an Number
console.log("See type of NAN :",typeof(Number(isValue2)));  // NaN ==> Not an Number

// Convert null in to Number
console.log('Convert null in to Number',Number(null));

// Convert null in to undefined
console.log('Convert null in to undefined',Number(undefined));
