const calculateInStockTotal = (cartArray) => {
    return cartArray
        .filter(item => item.inStock === true) // Keep only available items
        .reduce((acc, item) => acc + (item.price * item.quantity), 0); // Sum up (price * qty)
}

const cart = [
    { name: "Laptop", price: 1000, inStock: true, quantity: 1 },
    { name: "Wireless Mouse", price: 50, inStock: false, quantity: 2 },
    { name: "Mechanical Keyboard", price: 100, inStock: true, quantity: 2 },
    { name: "Monitor", price: 300, inStock: true, quantity: 1 }
];


const total = calculateInStockTotal(cart)
console.log(`Total for in-stock items: $${total}`);

    // arr[{},{}]
    
    // if(){

    // }
    // for (const item of cart) {

    //     bill += cart[]
    // }


let obj = { name: "Monitor", price: 300, inStock: true, quantity: 1 }
console.log(cart[0]);


if(cart[0]){
    console.log("Here the obj",)

}