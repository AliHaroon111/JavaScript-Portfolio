// 1 write a for loop that loops throug the array ['green tea','black tea','chai','oloond tea'] and stops the loop when it findds '""chai' Store all teas before 'chai' in a new array named 'selectedTeas'

teaArr = ['green tea','black tea','chai','oloond tea']
selectedTeas = []

// ==========> First Way
// for (let t = 0; teaArr[t]!=="chai"; t++) {
    //     selecThisTea = teaArr[t]
    //     selectedTeas.push(selecThisTea)
// }
// console.log(selectedTeas);

 
// ==========> 2nd Way

// for (let i = 0; i < teaArr.length; i++) {
//     if (teaArr[i]=="chai"){
//         break
//     }
//     selectedTeas.push(teaArr[i])
// }
// console.log(selectedTeas);



/*===> 
    2=== write a for loop that loops thr the arr ["London","New York" , "Paris" , "Berlin" ] and skips "Paris".
Store the other cities in a new array visitedCities*/

// let cityArr = ["London","New York" , "Paris" , "Berlin" ]
// let  visitedCities = []
// for (let i = 0; i < cityArr.length; i++) {
//     if (cityArr[i]=="Paris") {
//         continue   //continue not run for specific value then follow sequentialy
//     }
//     visitedCities.push(cityArr[i])
// }
// console.log(visitedCities);


/*3 for-of loop to iterate in arr [1,2,3,4,5] and stop when num 4 is found  
and store the num before 4 in an array named smallNumbers*/

// let numbers = [1,2,3,4,5]
// let smallNumbers = []
// // For of use sequentially anf if you want to Use Index use For-in
// for (const num of numbers) {
//     if (num==4) {
//         break
//     }
//     smallNumbers.push(num)
// }
// console.log(smallNumbers)

/* 
===>4
    Use for-of loop to iterate through array ["chai",'green tea','black tea','black tea']
    and skip 'herbal tea'
    store other teas in an array named PreferredTeas
     */

// let Teas = ["chai",'green tea','herbal tea','black tea']
// let PreferredTeas = []
// for (const tea of Teas) {
//     if(tea=="herbal tea"){
//         continue
//     }
//     PreferredTeas.push(tea)

// }
// console.log(PreferredTeas);


/*======>
    Use for-in loop to loop throgh an obj containing city populations 
Stop the loop whem th popltn of Berlin is found an store all previous cities - popltn in a new Object -> cityPopulations

*/
// let citiesPopulation ={ 
//     "London": 890000,
//     "New York":840000 ,
//     "Berlin":3500000, 
//     "Paris": 2200000,
// }
// let cityNewPopulations = {}

// for (const key in citiesPopulation) {

//     if(key=='Berlin'){
//         break
//     }
//     cityNewPopulations[key]= citiesPopulation[key]
    
// }
// //    console.log(Object.keys(citiesPopulation))
// console.log(cityNewPopulations);


/*======> 6
less than 3m population store in a new object
 */

// let worldCities={
//     "Sydney": 50000000,
//     "Tokyo":90000 ,
//     "Berlin":3500000, 
//     "Paris": 22000,
// }
// let largeCities={

// }

// for (const key in worldCities) {
//     if (worldCities[key] < 3000000) {
//         continue
//     }
//     largeCities[key] = worldCities[key]
// }
// console.log(largeCities);


/*======> 7

['earl grey','green tea','chai','oloond tea']
when chai is found store all previos
 */

// let Tealist = ['earl grey','green tea','chai','oloon tea']

// let avilableTeas = []
// Tealist.forEach(tea => {      //ForEach work on Array
//     if(tea=="chai"){
//        return //similar to break
//     }
//     avilableTeas.push(tea)
// });
// console.log(avilableTeas);

// // Tealist.forEach(function(tea){
    
// // });      //similar to above forEach and works same


/*======> 8
forEach loop that itert throg the arr 
["Sydney" ,"Tokyo","Berlin", "Paris",] skip sydney and store cities in a new named traveledCities
 */ 

// let citArray = ["Sydney" ,"Tokyo","Berlin", "Paris",]

// let travelledCities = []

// citArray.forEach(function(city){
//     if(city=="Sydney"){
//         return // this will return only for Condition
//     }
//     travelledCities.push(city)
// });
// console.log(travelledCities);


/*======> 8
for loop that itrt thrgh th arr [2,5,7,9]
skip tha val 7 and X by 2 , store the results in an arr
 */ 
let numArr = [2,5,7,9]
let doubleNamed = []
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i]==7) {
        continue
    }
    let mulBy2 = numArr[i]*2
    doubleNamed.push(mulBy2)
}
console.log(doubleNamed);


/*=======> for-of iterat
['chai','green tea','black tea','jasmine tea','herbal tea]
and stop when the length of the curnt tea name is greater than 10
store the teas iterated over in an arr
named shortTeas
*/
let teas = ['chai','green tea','black tea','jasmine tea','herbal tea']

let shortTeas = []

for (const tea of teas) {

    if (tea.length>10) {
        continue
    }
    shortTeas.push(tea)
    
}
console.log(shortTeas);
