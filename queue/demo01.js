/*
 * @Author: your name
 * @Date: 2020-10-26 10:17:23
 * @LastEditTime: 2020-10-26 10:30:21
 * @LastEditors: Please set LastEditors
 * @Description: 队列(First In First Out)
 * @FilePath: \instance-deployd:\JavaScript\queue\demo01.js
 */
class Queue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestcount = 0;
    }
    enqueue(element) {
        this.items[this.count] = element
        this.count++;
    }
    dequeue() {
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestcount];
        delete this.items[this.lowestcount];
        this.lowestcount++;
        return result
    }
    peek() {
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestcount]
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.count - this.lowestcount
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestcount = 0;
    }
    toString() {
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[this.lowestcount]}`;
        for(let i = this.lowestcount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}

function hotPotato(elementsList, num){
    const queue = new Queue();
    const elimitatedList = [];
    for(let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i])
    }
    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return{
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }
}
let names = ['a', 'b', 'c', 'd', 'e'];
const result = hotPotato(names, 7);
result.elimitated.forEach(name => {
    console.log(`${name}被淘汰`)
})
console.log(result.winner)