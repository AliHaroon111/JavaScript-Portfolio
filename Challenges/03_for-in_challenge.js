/*The Object Miner (for-in + Logic)
Scenario: You have an object storing salaries for a department.
Data:

let salaries = {
    "Ali": 50000,
    "Manager": 90000,
    "Intern": 15000,
    "Security": 25000
};
Task:

Use a for-in loop.
Calculate the Total Salary of everyone.
Find and print the Role (Key) that earns the highest salary. (Hint: You need a variable like let maxSalary = 0 and update it inside the loop).  */

let salaries = {
    "Ali": 50000,
    "Manager": 90000,
    "Intern": 15000,
    "Security": 25000
};

let maxSalary = 0

for (const role in salaries){
    let salary = salaries[role];
    maxSalary=salaries[role]

    console.log(`The salary of ${role} is ${maxSalary}.`)
}