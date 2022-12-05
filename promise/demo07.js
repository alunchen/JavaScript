/**
 * Promise
 *    resolve()
 *    reject()
 */

/**
 *  Promise.resolve()
 *    Promise.resolve()方法可以把现有对象转换为Promise对象。如果Promise.resolve()方法的
 *  (参数) 不具有then方法，则返回一个新的Promise对象，且其状态为Resolved
 */ 

/**
 *    以下生成了一个新的Promise对象，由于字符串“fun”不具有then方法，
 *  故返回的Promise实例的状态从一生成就是Resolved状态。
 */
Promise.resolve('fun') 
// 等价于
new Promise(function(resolve, reject) {
  resolve('fun')
})

const p = new Promise((resolve, reject) => {
  resolve('fun111')
})
// Promise.resolve(p) === p   true



// *** Promise.resolve的参数是一个Promise实例，则会被直接返回
const p1 = new Promise((resolve, reject) => {
  resolve('111')
});
const p2 = Promise.resolve(p1);
console.log(p1 === p2)
p1.then(resolve => {
  console.log('p1:', resolve)
})
p2.then(resolve => {
  console.log('p2:', resolve)
})


/**
 *  如果传给Promise.resolve()的参数是个thenable（即带有then方法）的对象，
 * 返回的Promise会“跟随”这个thenable的对象，采用它的最终状态。
 */
const obj = {
  then: function(onFulfill, onReject) {
    onFulfill('fulfilled')
  }
}
// obj中的then的状态是Resolved，故生成的p的状态也是Resolved。
Promise.resolve(obj).then(resolve => {
  console.log('obj resolve:', resolve)
})

const obj2 = {
  then: function(onFulfill, onReject) {
    onReject('error')
  }
} 
// obj2中的then的状态是Rejected，故生成的p的状态也是Rejected。
Promise.resolve(obj2).catch(error => {
  console.log('obj error:', error)
})











/**
 * Promise.reject()
 *    Promise.reject(reason)方法返回一个新的Promise实例，状态为Rejected。
 * Promise.reject方法的参数reason会被传递给实例的回调函数。
 */

Promise.reject('Testing static reject').then(resolve => {
  // 未被调用
  console.log('resolve')
}, reject => {
  console.log('reject', reject)
})  // reject Testing static reject

Promise.reject(new Error('rejcet error message 11')).then(resolve => {
  // 未被调用
  console.log('resolve')
}, reject => {
  console.log('reject', reject.message)
})  // reject rejcet error message 11
