/**
 * 属性描述符
 */

const obj = {
  a: 1,
}
/**
 * 描述a:
 *    值为 1
 *    可重写
 *    可遍历
 */

const desc = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(desc); // { value: 1, writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj, 'a', {
  // value: 'abc',
  writable: false,    // 是否可重写
  enumerable: true,   // 是否可枚举
  configurable: true, // 属性描述符是否可修改
})
Object.defineProperty(obj, 'a', {
  writable: true,
})
obj.a = '123123';
console.log('obj:', obj)