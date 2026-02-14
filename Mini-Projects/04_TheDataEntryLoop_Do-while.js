// Phase 1
import promptSync from "prompt-sync";
const prompt = promptSync();//In Node.js (backend), we don't have the browser's prompt(). This line use for the user to type something 

console.log("--- MILL PRODUCTION SYSTEM STARTED ---");

let productionLog = []

let machineID;
let PCount;
let cont;
do {
    machineID = prompt("Enter the machine ID (i.e M-001) :")
    PCount = Number(prompt("Enter the Production Count (i.e, 500) :")) 
    if(PCount==0){
        console.log("Machine reported breakdown, skipping.")
    }else{
        productionLog.push({
            id:machineID,
            count:PCount
        })
    }
    console.log(productionLog)
    
    cont = prompt("Do you want to continue :")
} while (cont.toLowerCase()=="yes");


console.log("\n--- GENERATING DAILY REPORT ---");

let totalProduction = 0

for (const element of productionLog) {
    totalProduction+=element["count"]
    if(element["count"] < 100){
        console.log(`⚠️ Low Output Alert: Machine ${element["id"]} produced only ${element["count"]}`);
    }

}

console.log("Total Mill Production",totalProduction,`Number of Active Machines: ${productionLog.length}`)