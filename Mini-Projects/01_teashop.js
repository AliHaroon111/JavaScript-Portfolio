const lemonTea = 50
const coffee = 100

let numTeas = 3
let numCoffees = 2

subTotal = numTeas*lemonTea + numCoffees*coffee

console.log(`The subTotal of You re ${numTeas} Teas and ${numCoffees} coffees is:`,subTotal)

//Membership Logic
let isMember = true
totalSpend = subTotal

if(isMember && totalSpend>300){
    console.log(isMember && totalSpend > 300)
    
}
console.table({Item:"Total Bill",Cost: subTotal});
