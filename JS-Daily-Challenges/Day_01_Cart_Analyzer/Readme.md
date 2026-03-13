Day 1: The E-Commerce Cart Analyzer
Difficulty: Normal
Concepts Tested: Array .filter(), Loops/Math, Objects, ES6 Functions.

Scenario:
You are writing the backend checkout logic for an online store. The frontend sends you an array of items in the user's shopping cart. However, some items might have gone out of stock while the user was browsing.

You need to write a function that calculates the total bill, but only includes items that are currently in stock.

The Starting Data:
Copy this into your day01_cart.js file:

JavaScript
const cart = [
    { name: "Laptop", price: 1000, inStock: true, quantity: 1 },
    { name: "Wireless Mouse", price: 50, inStock: false, quantity: 2 },
    { name: "Mechanical Keyboard", price: 100, inStock: true, quantity: 2 },
    { name: "Monitor", price: 300, inStock: true, quantity: 1 }
];
Your Task:
Write an arrow function named calculateInStockTotal(cartArray) that does the following:

Filters the array to keep only the items where inStock is true.

Calculates the total cost of those remaining items. (Note: You must multiply the price by the quantity for each item!)

Returns the final total number.

Expected Output:
When you run console.log(calculateInStockTotal(cart)), it should print 1500.
(Laptop: 1000 + Keyboard: 200 + Monitor: 300)