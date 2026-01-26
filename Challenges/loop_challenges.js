// Q1  =======> to sum number 1 to 5

let sum=0
i=1
while (i<=5) { // i<=6 instead if this i!=6 NOT right approach  
    sum = sum + i
    // sum+=i
    i++
}
// console.log(sum);


// Q2 Countdown from 1 to 5 store num in array name 'countdown

let countdown = [];
i=5
while (i>0) {             // i>0  instead of i!=0
    countdown.push(i)
    i-- 
}
// console.log(countdown);


// Q3 Do while loop user enter favrt tea until they enter stop store in arrr
// NOTE while loop 1 bar chalti hi chalti hay

// this from ----> const prompt = require("prompt-sync")();
const prompt = require("prompt-sync")();
// We don't directly have prompt is JS so we use prompt-sync
// let TeaArr=[]
// let Teaprompt
// do {
//     Teaprompt = prompt(`Enter the fav Tea (type 'stop') to finish :`)   
//     if (Teaprompt!=="stop") {
//         TeaArr.push(Teaprompt)
        
//     }
// }
//  while ( Teaprompt !=='stop');
//  console.log(TeaArr);
 

// Q4 do-while loop tht add num from 1 - 3 and store result in var 'total'

let total=0;
do {
    total+=i
    i++
} while (i<=3);
// console.log(total);


// for loop that mul each elm in arr [2,4,6] by 2 -> results in anew arr -> cityList 

let givenArr = [2,4,6]
let multipliedNumbers = []
for(let i=0;i<givenArr.length; i++){
    console.log(`Mul i by ${givenArr[i]} = `)
    mul = 2*givenArr[i]
    multipliedNumbers.push(mul)
}
// console.log(multipliedNumbers);
// In this question i first write condition <= But Here is the case of  By Chosing <= --> Output = Mul i by undefined = [ 4, 8, 12, NaN ]
// Index in Arr start from 0 so to Choose len Carefully the index = length - 1 


// Q6 for loop that list all cities in arr ["Pairs","New York","Tokyo","London"] and store each city in a new arr


let givenCities =  ["Pairs","New York","Tokyo","London"]
let citylist = []
for(let j=0;j<givenCities.length;j++){
   let myCity = givenCities[j]
   citylist.push(myCity)
       
}
console.log(citylist);

// Use Shift and unshift and check