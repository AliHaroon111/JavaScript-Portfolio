// async_await
function FetchUserData(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve({name:"chaocode",url: "https://chaicode.com"})
        }, 3000);
    })
}

// One Common way is That but We GONNA learn a new called Asyn so see below
// FetchUserData
//     .then()
//     .catch

// New Method Asyn 
async function getUserData() {
    // Try catch mean if error happen don;t crash the program
    try {
        console.log("Fetching user data");
        const userData =  await FetchUserData()
        console.log("User Data Fetched Succesfully"); 
        // await function ---> wait for succes then rest cde will run
        console.log("User data",userData);
        
    } catch (error) {
        console.log("Error fetching the Data.....", error)
    }
}
getUserData()

// You can only use---->await ->when you are using --->asyn <---function