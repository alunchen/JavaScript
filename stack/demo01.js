/*
 * @Author: your name
 * @Date: 2020-10-22 09:12:42
 * @LastEditTime: 2020-10-22 09:36:42
 * @LastEditors: Please set LastEditors
 * @Description: 数组创建 stack 类
 * @FilePath: \instance-deployd:\JavaScript\stack\demo01.js
 */

class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    clear(){
        this.items = []
    }
    size(){
        return this.items.length
    }
}