/**
Question: What is the value of user1? Is it the object {name: "Ali"} or undefined? (Hint: Without new, a function just returns... what?)
 */

function User(name) {
    this.name = name;
    this.isAdmin = false;
}//In JavaScript, if a function doesn't have a return statement, it implicitly returns undefined.

// Mistake: Forgetting 'new'
// let user1 =  User("Ali"); //Uncomment and see
let user2 = new User("Ali"); 

console.log(user2); 
console.log(name); // <--- Danger Zone