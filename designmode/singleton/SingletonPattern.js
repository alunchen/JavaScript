/*
 * @Author: your name
 * @Date: 2021-03-04 09:33:02
 * @LastEditTime: 2021-03-04 10:06:42
 * @LastEditors: Please set LastEditors
 * @Description: 单例模式
 * @FilePath: \instance-deployd:\JavaScript\designmode\SingletonPattern.js
 */

/**
 *      单例模式：保证一个类仅有一个实例，并提供个访问它的全局访问点
 */

let Singleton = function(name) {
    this.name = name
}
Singleton.instance = null;
Singleton.prototype.getName = function(){
    console.log(this.name)
}
Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

let a = Singleton.getInstance('seven1');
let b = Singleton.getInstance('seven2');
console.log(a === b)
a.getName() // seven1
b.getName() // seven1

// 
let Singleton2 = function(name) {
    this.name = name
}
Singleton2.prototype.getName = function() {
    console.log(this.name)
}
Singleton2.getInstance = (function(){
    let instance = null
    return function(name){
        if(!instance) {
            instance = new Singleton2(name)
        }
        return instance
    }
})()