/*
 * @Author: your name
 * @Date: 2021-03-25 11:19:06
 * @LastEditTime: 2021-03-25 11:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\alunchen\JavaScript\test\1.js
 */


let Type = {};
for(let i = 0, type; type = ['String', 'Array', 'Object'][i++];) {
  console.log(type);
  let a = type;
  Type[`is${type}`] = function(obj) {
    console.log(type);
    console.log(a)
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  }
}
Type.isArray([])