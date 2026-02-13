let obj1 = {
    "First Name":"Ali",
    "Last Name":"Haroon",
    Age:21
}

console.log("First Method for Object=======>The Age of student is",obj1.Age)
console.log("Second Method for Object=======>First Name",obj1["First Name"])
console.log("Second Method for Object=======>Last Name",obj1["Last Name"])


function Salam(name){

    return `Hello ${name} How are you`
}

console.log(Salam("Ali"))

function UmairOrder(Order){
    function confirmOrder(){
        return `Order Confirmed for ${Order}`
    }

    return confirmOrder()
}
let orderConfirmation = UmairOrder("Umair")
console.log(orderConfirmation)


let a = [1,2,3,4,5,6]
a.pop()
console.log("Last element removed",a)
a.push(100)
console.log("100 added at the Last",a)

console.log("Shift",a.shift(), "After using shift now array should be",a)
