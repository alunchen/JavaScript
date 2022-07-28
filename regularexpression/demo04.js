/*
 * @Author: your name
 * @Date: 2021-01-13 14:31:59
 * @LastEditTime: 2021-01-13 14:32:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\regularexpression\demo04.js
 */
const reg = /^(\[|\()(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)(\]|\))$/;
const str = '[-121,-23.123)'
reg.test(str)
console.log('$1',RegExp.$1)
console.log('$2',RegExp.$2)
console.log('$3',RegExp.$3)
console.log('$4',RegExp.$4)
console.log('$5',RegExp.$5)
console.log('$6',RegExp.$6)