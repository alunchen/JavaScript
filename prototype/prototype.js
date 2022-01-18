
// 构造函数
function Person(name, age, job){
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function(){
        console.log(this.name)
    }
}

let person1 = new Person('Jack', '22', 'Doctor'),
    person2 = new Person('Mick', '23', 'lawyer')

// person1、person2 为 Person 的实例，这两个 实例 都有一个 构造函数(constructor) 属性，该属性(是一个指针)指向 Person
// 实例 的 构造函数属性(constructor) 指向 构造函数
// console.log(person1.constructor === Person)
// console.log(person2.constructor === Person)

//    每个实例对象都有__proto__属性，
//    但只有函数对象才有 prototype 属性
console.log(person1.__proto__ === Person.prototype, person1.__proto__);
console.log(Person.prototype.__proto__.constructor === Object, person1.__proto__.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__)

// 函数对象__proto__ 都指向 Function.prototype, 它是一个空函数

/**
 * 
 */