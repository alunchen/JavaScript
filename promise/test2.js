
const PENDDING = 'pendding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// promise 构造函数
class MyPromise {
  #state = PENDDING;
  #result = undefined;
  #handlers = [];
  constructor(extractor) {
    const resolve = (data) => {
      this.#changeState(data, FULFILLED)
    }
    const reject = (data) => {
      this.#changeState(data, REJECTED)
    }
    try {
      extractor(resolve, reject)
    } catch (error) {
      reject(error)
    }
    
  }
  then(onFulFilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulFilled, onRejected, resolve, reject
      })
      this.#run()
    })
  }
  #changeState(data, state) {
    if(this.#state !== PENDDING) return
    if(this.#isPromiseLike(data)) {
      data.then(res=> {
        this.#result = res;
        this.#state = FULFILLED;
      }, error => {
        this.#result = error;
        this.#state = REJECTED
      })
    } else {
      this.#result = data;
      this.#state = state;
    } 
    // 防止 异步执行 resolve 或者reject ,  setTimeOut(() => { resolve() }, 0)
    this.#run()
  }
  #isPromiseLike(value) {
    // return value && typeof value?.then === 'function'

    // Promise A+ 规范：一个对象或者函数有一个属性为then的函数  互操作性
    if(val !== null && (typeof val === 'object' || typeof val === 'function')) {
      return typeof val.then === 'function'
    }
    return false;
  }
  #run() {
    if(this.#state === PENDDING) return
    while(this.#handlers.length) {
      const { onFulFilled, onRejected, resolve, reject } = this.#handlers.shift();
      // 当前state为完成状态 调用 onFulFilled
      if(this.#state === FULFILLED) {
        this.#runOne(onFulFilled, resolve, reject)
      }
      // 当前state为失败状态 调用 onRejected
      else if(this.#state === REJECTED) {
        this.#runOne(onRejected, resolve, reject)
      }
    }
  }
  #runOne (callback, resolve, reject) {
    this.#runMicroTask(() => {
      if(typeof callback !== 'function') {
        const fn = this.#state === FULFILLED ? resolve : reject;
        fn(this.#result)
        return
      }
      try {
        const data = callback(this.#result);
        if(this.#isPromiseLike(data)) {
          //返回结果为promise 时 then方法的状态与之保持一致
          data.then(res => {
            resolve(res)
          }, error => {
            reject(error)
          })
        } else {
          resolve(data)
        }
      } catch (error) {
        reject(error)
      }
    })
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

const p = new MyPromise((resolve, reject) => {
  resolve('333')
  // return
  throw '123'
  console.log('1312312313')
  setTimeout(() => {
    resolve('1')
  }, 3000);
  // resolve('333')
})

console.log(p)

const p2 = p.then(res => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject('sadasdasdad')
    }, 1000);
  })
}, err => {
  return err
}).then(res => {
  console.log('data ok', res)
}, err => {
  console.log('data error', err)
})

// console.log(p2)


// const p3 = p.then((res) => {
//   console.log(`res3:${res}`)
// }, (err) => {
//   console.log(`err3:${err}`)
// })

// const p4 = p.then((res) => {
//   console.log(`res4:${res}`)
// }, (err) => {
//   console.log(`err4:${err}`)
// })
