
const idSym = Symbol("id")

let student = {
    name:"Ali Haroon",
    "full roll no":"FA23-BCS-243",
    [idSym]: "12345",
    subjects:["DAA", "Web", "Calculus"]
}
//With Brackets:[idSym] tells JS Don't use the word 'idSym' as key Instead look up the variable idSym get its value

let feeString = "55000"
let feePenality = 500
// let feeNum = new Number(feeString) //make err for strict comparison ===
let feeNum = Number(feeString)

let totalFee = feeNum + feePenality

console.log(`Dear ${student["name"]} of Roll No: ${student["full roll no"]} and His first subject is "===>${student.subjects[0]}<===" Your Total Fee Displayed is ${totalFee}Rs.`)