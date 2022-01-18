var a = 1;
var func1 = function() {
  var b = 2;
  var func2 = function() {
    var c = 3;
    console.log(b);
    console.log(a)
  }
  func2();
  console.log(c); // c is not defined
}

// func1();

// 变量的生存周期
/**
 *  对于全局变量来说，全局变量的生存周期是永久的，除非主动销毁这个全局变量
 * 
 *  而对于在函数内用var 关键字生命的局部变量来说，当退出函数时，这些局部变量即失去了它们的价值，它们都会随着函数的调用结束而被销毁
 */
var func = function() {
  var a = 1;
  console.log(a);   // 退出函数后局部变量a将被销毁
}
// func()


var fn = function() {
  var a = 1;
  return function() {
    a++;
    // console.log(a)
  }
}

const f = fn();
f();    // 2
f();    // 3
f();    // 4
f();    // 5
// 当退出函数后，局部变量a并没有消失，
/**
 *  当执行 f = fn(), f 返回了一个匿名函数的引用，它可以访问到 fn 调用时产生的环境，
 * 而局部变量a一直存在这个环境 。在这里产生了一个闭包结构 局部变量 的生命周期被延续
 */


var Type = {};
for(let i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
  // (function(type){
  //   Type[`is${type}`] = function(obj){
  //     return Object.prototype.toString.call(obj) === `[object ${type}]`
  //   }
  // })(type)
  Type[`is${type}`] = function(obj){
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}
console.log(Type);
console.log(Type.isArray([]));
console.log(Type.isString('str'))