/*
 * @Author: your name
 * @Date: 2021-03-04 09:43:21
 * @LastEditTime: 2021-03-04 09:59:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\prototype\demo01.js
 */
let Person = function() {
    // this.name = 'hello world';
    // this.age = 24
}
Person.name = 'hello 123'
Person.age = 20;
Person.getName = function() {
    console.log(this.name)
}

// Person.prototype.getName = function() {
//     console.log(this, this.name)
// }
// let a = new Person('alunchen')
Person.getName()