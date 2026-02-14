// Create a function calculateAge(birthYear).
// It should accept a year (e.g., 2000).
// It should return the age (assuming current year is 2026).
// Test: console.log(calculateAge(2000)) -> Should print 26

let currentyear = 2026
let age
function calculateAge(birthYear){
    age = currentyear-birthYear
    
    if(birthYear<1850){
        console.log(`Enter the Valid Age Check ^^^^^${birthYear} too low....` )
    }else if(birthYear>2026){
        console.log("Enter the Valid Age I'm not here to Prediction Future🤣")
    } else{
        console.log("Your Age is",age)
    }
}

calculateAge(2027)