console.log("chaicode");


SayHello=() => {
    console.log("Hello");  
}

(setTimeout(SayHello, 4000));

for (let index = 0; index < 10; index++) {
    console.log(index);
 } 
//  Asynchronous  Mean that JS doesn't run code Seqentially here above you can see as we set time rest of code will give output first than timer Whatever the sequence is