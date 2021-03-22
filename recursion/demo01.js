function factorialIterative(number) {
    if(number < 0) return
    let total = 1;
    for(let n = number; n > 1; n--) {
        total = total * n
    }
    return total
}
console.log(factorialIterative(5))

function factorial(n){
    if(n === 1 || n === 0) {
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(6))