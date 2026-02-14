// Create a function findFailedStudents(marksArray).
// It accepts an array of numbers [45, 90, 32, 88].
// It loops through and finds marks less than 40.
// It returns a new array of just the failed marks.
// Test: findFailedStudents([50, 20, 80, 30]) -> Should return [20, 30].

function findFailedStudents(marksArray){
    let FailedStudentArray=[]
    
    for (const mark of marksArray) {
        if(mark<40){
            FailedStudentArray.push(mark)
        }
    }
    return FailedStudentArray;
}
console.log("The number of Failed Student are",findFailedStudents([50, 20, 80, 30]))
console.log("The number of Failed Student are",findFailedStudents([50, 10, 80, 35]))