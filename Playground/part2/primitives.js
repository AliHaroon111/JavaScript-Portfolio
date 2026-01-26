// Number

let balance = 120

console.log("Type is:",typeof(balance));


//  2nd
let anotherBalance = new Number(120)

// console.log('Balance is',(balance));
// console.log('Another Balance is',(anotherBalance));
// console.log('Another Balance only value',(anotherBalance.valueOf()));

//  Goal to check the DataType of balane and anotherBalance
console.log('Type of Balance is ===>',(typeof balance));
console.log('Type of Another Balance is ===>',(typeof anotherBalance));

// Bolean
let isActive = true
let isRealyActive = new Boolean(true)    // Not recomended

// Null and undefined ==============>
    
    // let firstname        //undefined
    // when you comment it out  and check the below line code it's give error that it is not Defined 
    // console.log("firsname",firstname);

//     let firstname1 = null;        //null
// console.log('FN1',firstname1);

// let undefined = null;        //undefined
// console.log("Undefined",undefined);
// null means it's there but the value is null
// <================ Null and undefined ==============>


    // ============> String ===============>
let myString = "Hello"
let myString1 = 'Hola'
let fistname = 'ali'

let oldGreet = myString + ""+"Ali"   // '' to Add space which is not appropriat
console.log(oldGreet);

// $  we can add variables in String with $ sign
let greetmsg = `Hello ${myString1}`  //Remeber Here backtics Used
console.log("var in String",greetmsg);
// We call it String Interpulation
console.log(greetmsg);

// we can also do computation with String Interpulation
let comput = ` value is ${2*3}`
console.log("The val is",comput);


// Symbol Uniquily identify and give you the Unique Value

let sm1 = Symbol()
let sm2 = Symbol()      // they both have diffr value as thier property is to be unique

console.log(sm1);
console.log("sm1==sm2", sm1==sm2);


let sm3 = Symbol("ALI HAROON")
let sm4 = Symbol("ALI HAROON")
console.log(sm3);
console.log("sm1==sm2", sm3==sm4);     // Symbol always retain Uniquiness