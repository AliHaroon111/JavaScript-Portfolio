//  let Car = {
//     make:"Toyota",
//     model:"Land Cruiser",
//     year:2020,
//     start: function (){
//         return `${this.make} car got started from ${this.year}`
//     }
// }

// console.log(Car.start());
// // End


// //Start
// // Constructor function
// function Person(name,age){
//     this.name = name
//     this.age = age
// }
// let jonh = new Person("John",16)
// console.log(jonh.age);
// // End



// Start
// // Prototype
// function Animal(type){
//     this.type=type
// }

//  Animal.prototype.weight = function(){
//     return `The ${this.type} Must have Weight Element`
//  }
//  let Cow = new Animal("cow")
//  console.log(Cow.weight());
// //  End


// //  Start
// Array.prototype.ali = function(){        //Heere Array is keyword
//     return `Custom Method ${this}`
// }
// let MyArray = [1,2,3,4,5]
// console.log(MyArray.ali());
// End


// // Start
// class Vehicle{
//     constructor(make,model){
//         this.make=make
//         this.model=model
//     }
//     // Method
//     start(){      // function without functionkeyword Calles Method
//         return `${this.make} is a car from${this.model}`
//     }
// }

// // Inheritenc
// class Car extends Vehicle{
//     super
//     // constructor(color,engineNo,speed,performance){
//     //     this.color=color
//     //     this.engineNo=engineNo
//     //     this.speed=speed
//     //     this.performance=performance
//     // }
//     //we cannot make contructor like this in inherited class
//     drive (){
//         return `${this.make} : this is inheritence example`
//     }
// }

// let myCar = new Car("Toyota","LandCruiser")
// console.log(myCar.model);
// console.log(myCar.make);
// console.log(myCar.drive());
////End



// // Start
// class BankAccount {
//     #balance = 0;       //Encapsulate

//     deposite(amount){
//         this.#balance += amount
//         return this.#balance
//     }

//     getBalance(){
//         return `$ ${this.#balance}`

//     }
// }

// let accont = new BankAccount()
// // You can't access the encapsulated attribute like this
// // console.log(accont.#balance);

// // But you can do by Using the method
// console.log(accont.getBalance());
// //End


// // ==========> ABSTRACTION  <===============
// //Start
// class CoffeMachine{
//     start(){
//         // cal DB
//         // filter value
//         return 'Starting the Machine'
//     }
//     brewCoffe(){
//         // complex calculations
//         return `Brewing Cofee`
//     }

//     pressStartButton (){
//        let msgone = this.start()
//         let msgTwo = this.brewCoffe()
//     return `${msgone} + ${msgTwo}`
//     }
// }

// let myMachine = new CoffeMachine()
// // console.log(myMachine.start());
// // console.log(myMachine.brewCoffe());
// console.log(myMachine.pressStartButton());
// //End


// // =======> POLYMORPHISM <==========
// // Start
// class Bird{
//     fly(){
//         return `Flying...`
//     }
// }

// class Penguin extends Bird{
//     fly(){
//         return `Pwnguins Can't fly`
//     }
// }
// let bird = new Bird()
// let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());
// // This Exactly is the Polymorphish MEAN thar method Name Is Same But it Behaves Different
// //ENd


// // =========>STATIC METHOD<===============
// // Start
// class Calculator{
//     static add(a,b){
//         return a+b
//     }
// }
// //-============>Not Allowed
// // let minCalc = new Calculator()
// // console.log(minCalc.add(1,2));  // No it will not accesssed bcz it's static   --> And can only be Access by the Class itself Nobody else can access it
// //-============>Not Allowed<========

// //We can Directly Call 
// console.log(Calculator.add(2,3));
// // End


// ==========>GETTER AND SETTERS<===========
class Employee{
    #salary

     constructor(name,salary){
        if(salary<0){
            throw new Error("Salary cn't be Negative");
        }
        this.name=name
        // this._salary= salary    // in JS _ doesn't have an meaning   --> im comment the 1st try
        this.#salary= salary    
     }

     get salary(){
        return `You are not able to see salary`
     }
     set salary(value){
        if (value<0) {
            console.error("Invalid Salary");      
        } else{
            this.#salary = value
        }
     }
     getRealSalary() {
        return this.#salary
    }
}
let emp = new Employee("Alic",50000)
console.log(emp.salary);
console.log(emp.getRealSalary());
emp.salary=60000
console.log(emp.getRealSalary());


// console.log(Employee.#salary);

/*
get → allows you to read properties like normal fields (emp.salary) but still run code in the background.

set → allows you to assign values like normal variables (emp.salary = 60000) and still validate or process before saving.
 */
