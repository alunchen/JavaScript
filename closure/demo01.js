/*
 * @Author: your name
 * @Date: 2021-01-25 10:06:13
 * @LastEditTime: 2021-01-25 10:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\closure\demo01.js
 */
// let mult = function() {
//     let a = 1;
//     for(let i = 0; l = arguments.length, i < l; i++) {
//         a = a * arguments[i]
//     }
//     return a
// }
// console.log(mult(1,2,3,4))

// mult 接收一些number类型的参数，并返回这些参数的乘积， 加入cache缓存机制来提高这个函数的性能
let cache = {};
let mult = function() {
    let args = Array.prototype.join.call(arguments, ',');
    if (cache[args]) {
        return cache[args]
    }
    let a = 1;
    for(let i = 0; i < arguments.length; i++) {
        a = a * arguments[i]
    }
    return cache[args] = a
}

// 
let mult2 = (function() {
    let cache = {};
    return function() {
        let args = Array.prototype.join.call(arguments, ',');
        if(cache[args]) {
            return cache[args]
        }
        let a = 1;
        for(let i = 0; i < arguments.length; i++) {
            a = a * arguments[i]
        }
        return cache[args] = a
    }
})();

let mult3 = (function() {
    let cache = {};
    let calculate = function() {
        let a = 1;
        for(let i = 0; i < arguments.length; i++) {
            a = a * arguments[i]
        }
        return a
    }
    return function() {
        let args = Array.prototype.join.call(arguments, ',');
        if(cache[args]) {
            return cache[args]
        }
        return cache[args] = calculate.apply(null, arguments)
    }
})()
console.log(mult3(1,2,3,4,5))

let mult4 = (function() {
    let cache = {}
    let calculate = function(arr) {
        let a = 1;
        for(let i = 0; i < arr.length; i++) {
            a = a * arr[i]
        }
        return a
    }
    return function() {
        let args = Array.prototype.join.call(arguments, ',');
        if(cache[args]) {
            return cache[args]
        }
        return cache[args] = calculate(arguments)
    }
})()
console.log(mult4(1,2,3,4,5,6))