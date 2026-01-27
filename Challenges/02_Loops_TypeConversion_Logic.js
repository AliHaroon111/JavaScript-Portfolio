/*
Scenario: You have an array of sensor readings, but some data is corrupt (strings, nulls).
Data: let readings = [23, "45", null, 12, "Error", 60]
Task:
Create a new array cleanReadings.
Loop through readings.

If the item is a number, add it to cleanReadings.
If the item is a string that looks like a number (e.g., "45"), convert it to a number and add it.
If the item is "Error" or null, skip it.
Print the cleanReadings.
*/


let readings = [23, "45", null, 12, "Error", 60]

let cleanReadings=[]

for(i=0; i<readings.length; i++){
    if (typeof(readings[i])=="number") {
        cleanReadings.push(readings[i])
    }
    if (typeof(readings[i])=="string") {
        InNum=Number(readings[i])
        if (!isNaN(InNum)) {
            cleanReadings.push(InNum);
        }
    }
   
}

console.log(readings)
console.log(cleanReadings)
