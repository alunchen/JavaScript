/**
 * Promise 构造器的实现
 * 
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  #state = 'pending';
  #result = undefined;
  
  constructor(executor) {
    const resolve = (data) => {
      this.#changeState(FULFILLED, data)
    }
    const reject = (reason) => {
      this.#changeState(REJECTED, reason)
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
    
  }
  #changeState(state, data){
    if(this.#state !== PENDING) {
      return
    }
    this.#state = state;
    this.#result = data;
    console.log(this.#state, this.#result)
  }

}

const promise = new MyPromise((resolve, reject) => {
  // resolve(123);
  // reject('111')
  throw 123
})
console.log(promise)

