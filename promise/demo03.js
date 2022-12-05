/**
 * promise 嵌套
 */

const p1 = new Promise(function(resolve, reject) {
  console.log('promise')
  setTimeout(() => {
    // resolve('success')
    // reject(new Error('fail'))
    reject('fail')
  }, 3000);
})

// resolve reject 无法同时触发
p1.then(resolve => {
  console.log('resolve', resolve)
}).catch(reject => {
  console.log('reject', reject)
})


/**
 *  如果调用resolve函数 和 reject函数带有参数，那么它们的参数会传递给回调函数。
 *      reject函数的参数通常是Error对象的实例，表示抛出的错误
 *      resolve函数的参数除了正常值以外，还可能是另一个Promise实例
 * 
 *    以下代码中： p1是一个promise，3秒之后变为Rejected， p2的状态在1秒之后改变
 * ，resolve方法返回的是p1，由于p2返回的是一个promise，导致p2自己的状态无效了，由
 * p1的状态决定 p2的状态
 */
  
const p2 = new Promise(function(resolve, reject){
  console.log('p2');
  setTimeout(() => {
    resolve(p1)
  }, 1000);
})
p2.then(resolve => {
  console.log('p2 resolve:', resolve)
}).catch(error => {
  console.log('error', error)
})
