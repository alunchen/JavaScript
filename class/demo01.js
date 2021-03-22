/*
 * @Author: your name
 * @Date: 2020-09-14 16:18:00
 * @LastEditTime: 2020-09-14 16:31:14
 * @LastEditors: Please set LastEditors
 * @Description: JavaScript 中所有对象都是 Object 的实例，
 * @FilePath: \instance-deployd:\JavaScript\class\demo01.js
 */
class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    toString(){
        console.log(`name: ${this.name}, color: ${this.color}`)
    }
}

let animal = new Animal('dog', 'yellow')
animal.toString()

console.log(animal.hasOwnProperty('name'))  //true
console.log(animal.hasOwnProperty('toString'))
console.log(animal.__proto__, Animal.prototype)
console.log(animal.__proto__.__proto__)