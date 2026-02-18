class Vault {
    #secretCode = 1234;
    
    getSecret() {
        return this.#secretCode;
    }
}

let myVault = new Vault();
// console.log(myVault.#secretCode); // <--- Line A
console.log(myVault.getSecret()); // <--- Line B

// Line A (myVault.#secretCode) causes a SyntaxError because the # symbol marks a variable as hard-private.