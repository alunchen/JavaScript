/*
 * @Author: your name
 * @Date: 2020-10-22 09:36:51
 * @LastEditTime: 2020-10-22 10:54:08
 * @LastEditors: Please set LastEditors
 * @Description: 对象创建 stack 类
 * @FilePath: \instance-deployd:\JavaScript\stack\demo02.js
 */
class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    push(element) {
        this.items[this.count] = element;
        this.count++
    }
    size() {
        return this.count
    }
    isEmpty() {
        return this.count === 0
    }
    pop() {
        if(this.isEmpty()) {
            return undefined
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]
        return result
    }
    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    toString() {
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

let a = new Stack();
a.push(0);
a.push(1);
//a.pop();
let b = a.toString()

console.log(b)

function decimalToBinary(decNumber){
    let remStack = new Stack();
    let rem;
    let num = decNumber;
    let binaryString = ''
    while(num > 0){
        rem = Math.floor(num % 2);
        remStack.push(rem)
        num = Math.floor(num / 2);
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.pop()
    }
    return binaryString
}

console.log(decimalToBinary(11))