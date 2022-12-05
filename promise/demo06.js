/**
 *  Promise.prototype.finally() 
 *    Promise.prototype.finally() 方法返回一个Promise，在Promise执行结束时，无论结果是Resolved或者是Rejected，
 * 在执行then()和catch()后，都会执行finally指定的回调函数。这为指定执行完Promise后，无论结果是Resolved或者是
 * Rejected都需要执行的代码提供了一种方式，避免同样的语句需要在then()和catch()中各写一次的情况
 * 
 */

/**
 *    Promise.prototype.finally方法接受一个回调函数作为参数，由于无法知道Promise实例的最终状态，
 * 所以finally的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
 * 
 */

 server.listen(0)
 .then(function (){})
 .catch(function (){})
 .finally(server.stop);

 // 上述代码演示了服务器使用Promise处理请求，对正常的情况在then方法中处理，异常情况在catch中处理，但无论是正常还是异常，最终都在finally中关闭了服务器连接。