/**
 * 节流函数（throttle）： 限制一个函数在一定时间内只能执行一次
 * 
 *    通过setTimeout 定时器设置延迟时间，在第一次调用时，设置变量为true，写入执行的函数
 * 第二次执行函数时判变量是否为true，是则返回，当第一次的定时器执行函数后会设定变量为false
 * 那么下次判断变量时则为false，函数会依次运行。目的在于在一定的时间内，保证多次函数的请求
 * 只执行最后一次调用
 * 
 */

// 方法1： 时间戳

function throttle(fn, wait) {
  let pre = Date.now();
  return function() {
    const context = this;
    const args = arguments;
    const now = Date.now();
    if(now - pre >= wait) {
      fn.apply(context, args);
      pre = Date.now();
    }
  }
}


// 方法2：setTimeout

function throttle2(fn, wait) {
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;
    if(!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null
      }, wait);
    }
  }
}