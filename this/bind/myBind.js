 
 Function.prototype.myBind =  function(thisArg, ...Args) {
  const originalFunc = this;
  const fn = function(...args) {
    return originalFunc.apply(thisArg, [...Args, ...args])
  }
  return fn
 }

 const add = function(a, b) {
  return a + b;
 }

 const fn2 = add.myBind(undefined, 20, 20)
 console.log(fn2())



const func = function() { console.log(this); };
const bound1 = func.myBind({ id: 1 });
const bound2 = bound1.myBind({ id: 2 }); 
bound2(); // 输出 { id: 1 }，而非 { id: 2 }


// 使用手写 bind 和 apply 多次绑定