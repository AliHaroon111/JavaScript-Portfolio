// Loops
a = [1,2,3,4,5,66,7,9,8]
newArr = []
// Forin
for (const num in a) {
    if (a[num]<9) {
        newArr.push(a[num]*3)   
    }
}
console.log(newArr)


forEachArr = ["hi","ali",243,"comsats"]

forEachArr.forEach(function(element){
    if(element=="hi"){
        console.log("Hi Ali How are You!")
    } 
});


// ForEach
Numarray = [1,23,4,5,6,0,77,8,5]
OddArr = []
EvenArr = []
Numarray.forEach(num => {
    if(num%2==0){
        EvenArr.push(num)
    }else{
        OddArr.push(num)
    }
});
console.log("The Even number are",OddArr)
console.log("The Odd number are",EvenArr)


//ForEach 
let citArray = ["Sydney" ,"Tokyo","Berlin", "Paris",]
let travelledCities = []
citArray.forEach(function(city){
    if(city=="Sydney"){
        return // this will return only for Condition
    }
    travelledCities.push(city)
});
console.log(travelledCities);

let UnvisitedCities = []
for (const city of citArray) {
    if(city=="Sydney"){
        UnvisitedCities.push(city)
    }
}
console.log("Untravelled cities are:",UnvisitedCities)