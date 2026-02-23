let cities = ["Lahore","Tokyo" ,"Paris","New York","Sahiwal","Quetta"]

cities.pop()
console.log("Last element removed",cities)

cities.push("Test")
console.log("Emelmet added at the last",cities)

cities.unshift("Karachi")
console.log('Element add at zero index',cities)

cities.shift("Check")
console.log('Element deleted from zero index',cities)

let numArray = [12,34,23,123,45,33,2,34,523,2,0,66]

numArray.sort()
console.log('Sorted like 12,123',numArray)

numArray.splice(1,5,9876,23132)   
console.log('Splice it deletes item from 1-5\n and then put 9876 and 23132 there',numArray)

// splice(1-8) Delete 8 peices
// splice(1-8)Give me a copy from 1 upto 8 index


console.log('Sliced Give me a copy',numArray.slice(1-3))

let newArr = [ 1,2,3,4,5,6]

let square = newArr.map(newArr=>newArr*newArr) //remove pointer function and see what happen
console.log(square)


let FilterArr = [ 1,23,323,42,15,76,4,324,90]

filtereditem =FilterArr.filter(FilterArr=> FilterArr<100)
console.log('Filtered Array', filtereditem)

ConcatedArr = newArr.concat(FilterArr)
console.log("Added array",ConcatedArr)

// Create an array of numbers: [3, 7, 12, 15, 20, 25]
// •	Step 1: Use map() with an arrow function to double each number.
// •	Step 2: Use filter() with an arrow function to get only numbers greater than 20.

let arrMap = [3, 7, 12, 15, 20, 25]
squaremapped =arrMap.map(arrMap=> arrMap*arrMap)
console.log("map() with arrow function",squaremapped)

filterNum = arrMap.filter(num => num>20)
console.log("The filtered numbers are:",filterNum)

// You have an array of prices: [120, 80, 50, 200, 150]
// •	Step 1: Apply a 10% discount on each price using map().
// •	Step 2: Calculate the total price after discount using reduce().

priceArr = [120, 80, 50, 200, 150]

discMap = priceArr.map(price => price*0.90)

console.log("Original values are",priceArr,"Discounted values will be:",discMap)

//array.includes()
