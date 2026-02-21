
function outerFunction(){
    let innerVar = 12
    return function(){
        innerVar++
        return innerVar
    }

}

let check = outerFunction()
console.log(check())
console.log(check())
console.log(check())


// real world example

function createCounter(){
    let count = 0;
    let value = 10;
    return {
        increament: () => {
            count++;
            // console.log(count);
            return count;
        },
        decreament: () => {
            value--;
            // console.log(value);
            return value;
        }
    }
}
let checkCount = createCounter();
console.log(checkCount.increament())
console.log(checkCount.increament())
console.log(checkCount.decreament())
console.log(checkCount.decreament())