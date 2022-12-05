/**
 * Promise.prototype.catch()
 *    Promise.prototype.catch()方法是Promise.prototype.then(undefined, onRejected)方法的别名，
 * 用于指定发生错误时的回调函数
 * 
 *    catch方法接受一个参数，该参数是一个函数，拥有一个参数reason，参数的含义是Promise失败的原因
 * 
 */

//
const p = new Promise((resolve, reject) => {
  reject(new Error('fail'))
  // resolve('p11111')
})

p.then(resolve => {
  console.log('resolve:', resolve)
}).catch(error => {
  console.log('catch error')
  console.log(error.message)
})
/**
 * 依次打印
 *  catch error
 *  fail
 * 
 *  p的状态为Rejected，p的then方法中的第一个参数不会被调用，因此第一个参数中的console.log 不会被执行，由于没有指定第二个参数，
 * 所以p中的失败信息会被后续的catch捕获,
 */

// 等价于
p.then(resolve => {
  console.log('resolve:', resolve)
}).then(undefined, error => {
  console.log('catch error')
  console.log(error.message)
})
/**
 * 依次打印
 *  catch error
 *  fail
 * 
 *  如果在第一个then方法中部署了第二个参数，那么失败信息就会在第一个then的第二个参数（函数）被处理
 */

p.then(resolve => {
  console.log('resolve:', resolve)
}, error => {
  console.log('catch error111')
  console.log(error.message)
})

/**
 *    一般来说，不要在then方法中定义Rejected状态的回调函数（第二个参数），而是应该总是使用catch方法，
 * 这样更接近于同步的写法（try...catch）。
 */


/**
 * catch 方法返回一个Promise，而它的行为与catch中的回调函数的返回值有关：
 *    1. 如果catch中的回调函数返回一个值或者没有返回值，那么catch返回的Promise将会成为Resolved状态
 */
const p1 = new Promise((resolve, reject) => {
  reject(new Error('p1 fail'))
  // resolve('p1p1p1')
})
const c1 = p1.then().catch(error => {
  console.log('c1 error', error.message)
  return error.message
}).then(resolve => {
  console.log('p1 resolve', resolve)
})


/**
 *    2. 如果catch中的回调函数抛出一个错误，那么catch返回的Promise将会成为Rejected状态，
 * 并且将抛出的错误作为Rejected状态的回调函数的参数值
 */

const p2 = new Promise((resolve, reject) => {
  reject(new Error('p2 fail'))
})
p2.then().catch(error => {
  console.log('p2 error', error.message);
  throw new Error('p2 new Error') // throw 抛出错误 catch返回的promise 状态为 Rejected
  // return new Error('p2 new Error')     用return catch返回的Promise 将会成为Resolved状态
}).catch(newError => {
  console.log('p2 catch new Error', newError.message)
})


/**
 *    3. 如果catch中的回调函数返回一个已经是Resolved状态的Promise，那么catch返回的Promise也会
 * 成为Resolved状态，并且将那个Promise的Resolved状态的回调函数的参数值作为该被返回的Promise
 * 的Resolved状态回调函数的参数值
 */

const p3 = new Promise((resolve, reject) => {
  reject(new Error('p3 fail'))
})
p3.then().catch(error => {
  return new Promise(function (resolve, reject) {
      resolve('fun');
  });
}).then(resolve => {
  console.log('resolve', resolve)
})


/**
 *    4. 如果catch中的回调函数返回一个已经是Rejected状态的Promise，那么catch返回的Promise也会
 * 成为Rejected状态，并且将那个Promise的Rejected状态的回调函数的参数值作为该被返回的Promise
 * 的Rejected状态回调函数的参数值。
 */

const p4 = new Promise((resolve, reject) => {
  reject(new Error('p4 fail'))
})
p4.then().catch(error => {
  return new Promise(function (resolve, reject) {
      reject('bad');
  });
}).catch(error => {
  console.log('error', error)
})


/**
 *    5. 如果catch中的回调函数返回一个进行中的状态（pending）的Promise，那么catch返回Promise的状态
 * 也是进行中的，并且它的终态与那个Promise的终态相同；同时，它变为终态时调用的回调函数参数与那个
 * Promise变为终态时的回调函数的参数是相同的。
 */

const p5 = new Promise((resolve, reject) => {
  reject(new Error('p5 fail'))
})
p5.then().catch(error => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(2);
  }, 2000); 
  });
}).then(resolve => {
  console.log('resolve', resolve)
})

