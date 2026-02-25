// 3 Scope
let secretCode = "Ali1234"; // we have to declarer outside MUST comment it out and check
try {
    let secretCode = "Ali1234";
    throw new error("System Override!")
} catch (error) {
    console.log("Secret code:",secretCode)
}    // ReferenceError: secretCode is not defined
// secretCode only exists inside the { } of the try block. The catch block cannot see inside the try block!