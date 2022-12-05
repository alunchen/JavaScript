/**
 * promise
 *    Promise对象是一个构造函数，用来生成Promise实例。
 * 
 *    new Promise(function(resolved, rejected){})
 * 
 *    Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署
 * 
 *    resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，
 * 作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将
 * 异步操作报出的错误，作为参数传递出去。
 * 
 *    Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数
 */



const promise = new Promise(function(resolve, reject) {
  /** 异步操作成功 */
  if(true){
    resolve(value)
  } else {
    reject(error)
  }
})
promise.then(function(value){
  // success
}, function(error) {
  // error
})

function timeout(ms) {
  return new Promise(function(resolve){
    setTimeout(resolve, ms, 'done');
  })
}
timeout(1000).then(function(value) {
  console.log('value', value)
})

// Promise 新建后会立即执行 
// 依次打印 promise  asda   resolve
const promise2 = new Promise(function(resolve,reject) {
  console.log('promise');
  resolve()
})
promise2.then(function(){
  console.log('resolve')
})
console.log('asda')
//  promise
//  asda
//  resolve