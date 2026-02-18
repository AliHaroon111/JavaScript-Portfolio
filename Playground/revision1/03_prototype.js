let genericPhone = { make: "Generic", call: true };
let iPhone = { model: "15 Pro" };

Object.setPrototypeOf(iPhone, genericPhone);

console.log(iPhone.make); 
console.log(iPhone.hasOwnProperty("make"));  // Here false Bcz make inherited from genericPhone