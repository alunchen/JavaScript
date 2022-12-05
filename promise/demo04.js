/**
 * Promise.prototype.then()
 *    Promise.prototype上定义了then方法，为Promise实例添加状态改变时的回调函数。
 *  then方法的第一个参数是Resolved状态的回调函数，
 *            第二个参数是Rejected状态的回调函数
 * 
 *    这两个回调函数都接受一个参数，Resolved回调函数的参数是Promise的执行结果，
 *  Rejected回调函数的参数是错误原因。
 *  如果then的参数不是函数，那么会在内部被替换为(x) => x ，即原样返回Promise最终结果的函数
 * 
 * 
 *  then方法返回的是一个新的Promise实例，因此可以采用链式写法，即then方法后面再调用另一个then方法
 */

const p = new Promise(function(resolve, reject){
  resolve('func')
});

p.then('bar').then(resolve => {
  console.log('resolve:', resolve)
})  // resolve: func


//  由于bar不是函数，故在内部会被替换成(x)=>x的形式，这里的x就是value，上述代码相当于
p.then(x => { 
  return x; 
}).then(resolve => {
  console.log('resolve:', resolve)
});   // resolve: func


// then方法返回一个Promise，而它的行为与then中的回调函数的返回值有关：
// 1. 如果then中的回调函数返回一个值，那么then返回的Promise 将会成为Resolved状态，并且将返回的值作为Resolved状态的回调函数的参数值。

const p1 = new Promise(function(resolve, reject){
  resolve('func11')
}); 

p1.then(function(){
  return 1
}).then(function(value){
  console.log('value:', value)
})  // value: 1


// 2. 如果then方法中的回调函数抛出一个错误，那么then返回的Promise将会成为Rejected状态，并且将抛出的错误作为Rejected状态的回调函数的参数值

const p2 = new Promise(function(resolve, reject){
  resolve('func22')
}); 
p2.then(function(){
  throw new Error('fail')
}).then(resolve => {
  console.log('resolve:', resolve)
}, reject => {
  console.log('reject:', reject.message)
}) // reject: fail


/**
 *    3.如果then中的回调函数返回一个已经是Resolved状态的Promise，那么then返回的Promise也会成为Resolved状态，
 * 并且将那个Promise的Resolved状态的回调函数的参数值作为该被返回的Promise的Resolved状态回调函数的参数值。
 */
const p3 = new Promise((resolve, reject) => {
  resolve('fun333')
})
p3.then(value => {
  return new Promise((resolve, reject) => {
    resolve(`${value}bar`)
  })
}).then(resolve => {
  console.log('resolve:', resolve)
})  // resolve: fun333bar

/**
 *    4.如果then中的回调函数返回一个已经是Rejected状态的Promise，那么then返回的Promise也会成为Rejected状态，
 * 并且将那个Promise的Rejected状态的回调函数的参数值作为该被返回的Promise的Rejected状态回调函数的参数值。
 */
const p4 = new Promise((resolve, reject)=> {
  resolve('fun44')
})
p4.then(value => {
  return new Promise((resolve, reject) => {
    reject(`${value}error`)
  })
}).then(resolve => {
  console.log('resolve', resolve)
}, reject => {
  console.log('on rejected');
  console.log('rejcet:', reject)
}) 
/**
 * on rejected
 * reject: fun44error
 */


/**
 *    5.如果then中的回调函数返回一个进行中的状态（pending）的Promise，那么then返回Promise的状态也是进行中的，
 * 并且它的终态与那个Promise的终态相同；同时，它变为终态时调用的回调函数参数与那个Promise变为终态时的回调函数
 * 的参数是相同的。
 */
const p5 = new Promise((resolve, reject) => {
  resolve('fun555')
})
p5.then(value => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(`${value}p5`)
      // reject(`${value}p5`)
    }, 2000)
  })  // 返回一个Pending状态的Promise，这个Promise2秒后会变成Resolved
}).then(value => {
  console.log('value:', value)
}, error => {
  console.log('error:', error)
})  // 2秒后被执行，输出 value: fun555p5