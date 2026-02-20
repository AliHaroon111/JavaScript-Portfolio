
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