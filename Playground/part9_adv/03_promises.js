// you can Manually create ASYNCHRONOUS behaviour by The Help of Promises(utlity)
// We create promisise by using keyword ------> new
// Always remember to Read the Docs

// Step 1 : Data Creation
function fetchData(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
           let success = true
           if(success){
            resolve("Data fetched ssuccesfully")
           } else{
            reject('Error fetching data')
           }
       }, 3000);
    })
}

// Step 2 : How We Consume the Data 
// let responce = fetchData()   //Check this --> this not works then follow below
// console.log(responce);

// fetchData().then().catch  // this syntax was not looking good but it works

// 1st Undertanding
// Resolve is Linked with ----------> .Then
// Reject is Linked with ----------> .catch
// fetchData()
//     .then((data) =>console.log(data))   //When data Resolve
//     .catch((error)=> console.error(error))  //When data Reject this will catch/run

//     // check this When you come next
    

    // 2nd Little bit Adv
fetchData()
    .then((data) =>{
        console.log(data)
        return `Ali Haroon`
    })   //When data Resolve
    //// And other thin if then return something so it can to new .then
    .then((value)=> {
        console.log(value);
        
    })
    .catch((error)=>console.error(error))   //When data Reject this will catch/run



