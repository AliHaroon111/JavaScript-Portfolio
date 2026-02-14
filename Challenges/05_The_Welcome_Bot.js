// Create a function greetUser(name, timeOfDay).
// If timeOfDay is "Morning", return "Good Morning, [name]!".
// If timeOfDay is "Evening", return "Good Evening, [name]!".
// Test: console.log(greetUser("Ali", "Evening")).

function greetUser(name, timeOfDay){
    if(timeOfDay.toLowerCase() =="morning"){
        return `Good Morning, ${name}`
    }
    if(timeOfDay.toLowerCase() =="evening"){
        return `Good Evening, ${name}`
    }
}
console.log(greetUser("Ali", "Evening"))