/**
 * Promise A+ 规范
 *     1. promise 是一个有then方法的对象或者是函数
 *     2. thenable 是一个有then方法的对象或者是函数。
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  #state = 'pending';
  #result = undefined;
  #handlers = [];
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
    // resolve、reject入参为 Promise
    if(this.#isPromise(data)) {
      data.then((res) => {
        this.#state = FULFILLED;
        this.#result = res
      }, (error) => {
        this.#state = REJECTED;
        this.#result = error
      })
    } else {
      this.#state = state;
      this.#result = data;
    }
    
    // console.log(this.#state, this.#result)
    // 防止 异步执行 resolve 或者reject ,  setTimeOut(() => { resolve() }, 0)
    this.#run();
  }
  #runOne(callback, resolve, reject) {
    this.#runMicroTask(() => {
      if(typeof callback !== 'function') {
        const fn = this.#state === FULFILLED ? resolve : reject;
        fn(this.#result)
        return
      }
      try {
        const data = callback(this.#result);
        if(this.#isPromise(data)) {
          data.then(resolve, reject)
        } else {
          resolve(data);
        }
        
      } catch (error) {
        reject(error)
      }
    })
  }
  #run() {
      if(this.#state === PENDING) return;
      while(this.#handlers.length > 0) {
        const {
          OnFulfilled,
          OnRejected,
          resolve,
          reject
        } = this.#handlers.shift();
          if(this.#state === FULFILLED) {
            this.#runOne(OnFulfilled, resolve, reject)
          } else {
            this.#runOne(OnRejected, resolve, reject)
          }
      }
  }
  then(OnFulfilled, OnRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        OnFulfilled,
        OnRejected,
        resolve,
        reject
      })
      this.#run()
    })
  }
  // 判断值是否满足Promise A+规范
  #isPromise(val) {
    // Promise A+ 规范：一个对象或者函数有一个属性为then的函数
    if(val !== null && (typeof val === 'object' || typeof val === 'function')) {
      return typeof val.then === 'function'
    }
    return false;
  }
  // 将任务放到微队列执行 then方法里面的函数需要放到微队列执行
  #runMicroTask(func) {
    // node
    if(typeof process === 'object' && typeof process.nextTick === 'function') {
      process.nextTick(func)
    } else if(typeof MutationObserver === 'function') {
      // 浏览器环境
      const ob = new MutationObserver(func);
      const textNode = document.createTextNode('1');
      ob.observe(textNode, {
        characterData:  true,
      })
      textNode.data = '2';
    } else {
      setTimeout(fun, 0)
    }
  }
}

// const promise = new MyPromise((resolve, reject) => {
//   resolve(123);
//   reject('111')
//   // setTimeout(() => {
//   //   throw 123
//   // }, 0)
// })
// console.log(promise)

// setTimeout(() => {
//   console.log('111')
// }, 0);

// new MyPromise((resolve, reject) => {
//   resolve('222')
// }).then(res => {
//   console.log(res)
// })

// console.log('333')