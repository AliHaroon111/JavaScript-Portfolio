//// Understanding
// function greet(name){       //Here name Is the parameter
//     console.log(`Hello ${name}`);
    
// }
//  greet("Ali")   //Here "Ali" Is the Argument

// //  Parameter is which we -----> pass
// // And the ARGUMENT are the Real Values



// Q1

// function makeTea(typeOfTea){
//     // console.log(`Making ${typeOfTea}`); // i'ts Actually used for print it not returns anything
//     return `Making ${typeOfTea}`
    
// }
// let teaOrder = makeTea("Green Tea")
// // console.log(teaOrder);


//// Q2 ======>
// function orderTea(teaTypes){
//     function confirmOrder(){
//         return `Order confirmed for ${teaTypes}`
//     }
//     return confirmOrder()
// }
// let OrderConfirmation = orderTea("BB tea")
// console.log(OrderConfirmation);


// Q3 ======>
// Arrow Function
// function greet(){}
// Syntax --------------->     const greet=() => {}

// const calculateTotal =(price,quantity) => {         //Arrow function is not widely used in web do to His Ability
//     return price*quantity
// }
// let  totalcost = calculateTotal(499,100)
// console,console.log(totalcost);


// Q4 =======> Higer Order Function

// function makeTea(typeOfTea){      //Function as a parameter to processTeaOrder
//  return `maketea ${typeOfTea}`
// }

// function processTeaOrder(teaFunction){
//     return teaFunction('Earl grey')
// }

// let order = processTeaOrder(makeTea)      //passing function as a parameter
// console.log(order);

// ===========> Q 5

function CreateTeaMaker(){
    return function (teaType){
        return `Making ${teaType}`
    }
}
let teaMaker = CreateTeaMaker()
let result = (teaMaker("green Tea"))
console.log(result);


