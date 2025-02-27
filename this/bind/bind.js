/**
 * bind() 返回一个新函数，并将原函数的 this 永久绑定到指定的对象。此外，它还支持预填充参数（“偏函数”应用）。其典型用途包括：

      精准控制函数的 this 指向；
      创建预设参数的函数；
      避免因传递函数导致 this 丢失（如事件处理函数、回调函数等）。
 */
// 1. 绑定this
const obj = {
  name: 'aaa'
}

const fn = function() {
  console.log(`name: ${this.name}`)
}

const fn2 = fn.bind(obj);

fn2()

// 2. 预填充参数（柯里化）
function add(a, b) {
  return a + b;
}

const addTen = add.bind(null, 10, 2); // 固定第一个参数为10
console.log(addTen(1))

// 3. 定时器中的上下文绑定
const obj2 = {
  name: 'abccc',
  fn: function() {
    console.log(this.name)
  }
}

setTimeout(obj2.fn, 1000) // undefined

setTimeout(obj2.fn.bind(obj2), 1000) // abccc


/**
 * 注意事项
 * 
 *  箭头函数不可bind
 *    箭头函数没有自己的 this，其 this 由词法作用域决定，使用 bind() 无效。
 * 
 *  多次 bind 无效
 * 
 *    const func = function() { console.log(this); };
      const bound1 = func.bind({ id: 1 });
      const bound2 = bound1.bind({ id: 2 }); 
      bound2(); // 输出 { id: 1 }，而非 { id: 2 }
 * 
 */



 // 手动实现bind
 
 Function.prototype.myBind =  function(thisArg, ...Args) {
  const originalFunc = this;
  return function(...args) {
    return originalFunc.apply(thisArg, [...Args, ...args])
  }
 }

 const boundAdd = add.myBind(null, 20);
console.log( boundAdd(10))