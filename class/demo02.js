/**
 * class 转换为function
 */

class Example {
  constructor(name) {
    this.name = name;
  }
  func() {
    console.log('name:', this.name)
  }
}
const a = new Example('abc');
new a.func()
// a.func()
// Example('abc')
// for(let i in a) {
//   console.log(i)
// }

//
function Example2(name) {
  this.name = name
}
Example2.prototype.func = function() {
  console.log('name:', this.name)
}

/**
 *  class 
 *    1. 严格模式
 *    2. 属性方法不可枚举
 *    3. 只能用new 调用，不能直接调用
 *    4. 属性方法不能用new调用
 */
// 转换后
'use strict'; // 1. 严格模式

function Example3(name) {
  // 3. 验证this指向
  if(!(this instanceof Example3)) {
    throw new TypeError(`Class constructor Example cannot be invoked without 'new'`)
  }
  this.name = name
}
Example3.prototype.func = function(){
  console.log('name:', this.name)
}
// 2. 属性方法不可枚举
Object.defineProperty(Example3.prototype, 'func', {
  value: function() {
    // 4. 属性方法不能用new调用
    if(!(this instanceof Example3)) {
      throw new TypeError(`a.func is not a constructor`)
    }
    console.log(this.name)
  },
  enumerable: false
})
const b = new Example3("abc");
for(let i in b) {
  console.log(i)
}
new b.func()