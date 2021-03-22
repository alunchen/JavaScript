/*
 * @Author: your name
 * @Date: 2021-01-08 10:56:15
 * @LastEditTime: 2021-01-08 11:10:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\prototype\demo02.js
 */
function Person(name) {
    this.name = name
}

Person.prototype.getName = function(){
    return this.name
}

let objectFactory = function() {
    let obj = new Object();
    const Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    let ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj
}

var a = objectFactory(Person, 'seven')
console.log(a.name)
console.log(a.getName())
console.log(Object.getPrototypeOf(a) === Person.prototype)

let b = new Object();
console.log(b.__proto__ === Object.prototype)

let c = new Object;
console.log(c.__proto__ === Object.prototype)