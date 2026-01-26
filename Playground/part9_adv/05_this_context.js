// this_context --------------> this Keyword

const Person={
   name:"Ali",
   greet(){
      console.log(`Hello How are you i am ${this.name}`);
      
   }
}
// // First Check This
Person.greet()

// // Then check tis
// let ali = Person.greet
// console.log(ali());      // Wrong---> Hello How are you i am undefined
// // Because when we give function to a new variable then it loss the context
// // Then what will we do

const greetFunction = Person.greet
greetFunction()

const boundGreet = Person.greet.bind({name : "Ali Haroon"})
boundGreet()


// bind call and apply
