/**
 * call: 
 *    语法: function.call(thisArg, arg1, arg2, ...)
 *    参数：
 *        thisArg: 可选，在function函数运行时使用的this值，this可能不是该方法看到的实际值，
 *                如果这个函数处于 非严格模式 下，则指定null 或 undefined 时自动替换为指向
 *                全局对象，原始值会被包装
 *        arg1, arg2: 指定的参数列表
 *    返回值： 使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined
 */

Function.prototype.myCall = function(thisArg, ...args) {
  const cxt = Object(thisArg) || window;
  const fn = Symbol();
  cxt[fn] = this;
  const result = cxt[fn](...args);
  delete cxt[fn];
  return result;
}

const fn = function(a, b) {
  console.log('this:', this)
  console.log(a + b)
}

const obj = {
  name: 'aaa',
}

fn.myCall(obj, 1, 2)
console.log('obj:', obj)