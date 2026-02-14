let balance = 1000

function checkBalance(){
    console.log("Your Current Balance is:",balance)
}


function deposite(amount){
    if (amount <= 0) {
        console.log("Error: Deposit amount must be positive.");
        return; 
    }

    balance+=amount
    console.log(`Deposited ${amount}. New Balance: ${balance}`)
}

function withdraw(amount){
    if (amount <= 0) {
        console.log("Error: Withdrawal amount must be positive.");
        return; 
    }

    if( amount>balance){
        console.log("Insufficient Funds")
    } else {
        balance-=amount
        console.log(`Withdrawn ${amount}. Remaining: ${balance}`)

    }
}

checkBalance();
deposite(500);
withdraw(200);
withdraw(5000);