// The "Fake Server" (Promise)
// Write a Promise that simulates a server check.
// Create function pingServer().
// It should return a new Promise.
// Inside, use setTimeout for 2 seconds (2000ms).
// Resolve with the string "Server is Online"


// async unlocks the await keywrd inside the function
async function checkStatus() {
    console.log("A. Sending request...");
    
    // await pause THIS function until the Promise is done
    const message = await pingServer(); 
    
    console.log("C. " + message); // Runs after 2 seconds
}

checkStatus();
console.log("B. App keeps running..."); // Runs instantly (while checkStatus is paused)


function createBankAccount(initialAmount) {
    let balance = initialAmount; // Private variable

    return function(spent) {
        balance -= spent;
        return `Remaining balance: $${balance}`;
    }
}

let myAccount = createBankAccount(100);
console.log(myAccount(20));
console.log(myAccount(30));


