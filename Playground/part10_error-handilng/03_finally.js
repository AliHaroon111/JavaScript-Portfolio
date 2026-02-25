function processPayment() {
    try {
        throw new Error("Insufficient Funds");
        return "Payment Successful";
    } catch (err) {
        return "Payment Failed";
    } finally {
        console.log("Disconnecting from Bank API...");
    }
} //guaranteed to run before the function actually exits

console.log(processPayment());
