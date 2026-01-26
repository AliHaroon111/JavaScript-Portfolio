// // Constructor Functions
// // note : inportance of this and new keywords in function
// // this provide context and mean provide your copy
// function Person(name,age){
//     this.name = name     //this.name are my variables AND the name is comming from funcition
//     this.age = age
// }

// function car(make,model){
//     this.make = make
//     this.model = model
// }
// let mycar = new car("Toyota","LandCruiser")
// // console.log(mycar);
// let myNewcar = new car("Hyundai","Sonnata")
// // console.log(myNewcar);


// function Tea(teaType){
//     this.teaType= teaType
//     this.describe = function  (){
//         return `this is a cup of ${this.teaType}`
//     }  //this will tell which guy is using the obj
// }
// let lemonttea = new Tea("lemon Tea")
// // console.log(lemonttea.describe());
// // end 

// start
function Animal(species){
    this.species=species
}

Animal.prototype.sound = function(){
    return `The ${this.species} makes a sound`
}

// let Dog = new Animal("Dog")
// console.log(Dog.sound());

// let cat = new Animal("cat")
// console.log(cat.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name=name
}
let tea = new Drink("Green tea")
let cold =  Drink("Pepsi")      // Error: Drink must be called with new keyword --------> error shown because we handling it intructions
console.log(tea.annn);
