/*
 * @Author: your name
 * @Date: 2020-11-12 16:44:17
 * @LastEditTime: 2021-01-13 10:50:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\regularexpression\methods.js
 */

/**
 * 使用正则的常用方法
 *      exec()、test()、replace()、match()、split()、search()
 */

// RegExp的方法  exec()、test()
//  1. exec()   // 返回数组, 没匹配到返回null       index   input
let pattern = /.(bc)/g;
let str = 'abc,abd,cbc';
let arr = pattern.exec(str);
//console.log(arr[0], arr[1], arr.index, arr.input)

// 2. test()    接收一个字符串参数，若模式与该参数匹配则返回true，否则返回false
let b = pattern.test(str);
console.log(b)

// String的方法
// 1. match()  // 返回数组, 没匹配到返回null       index   input

// 2. search()  // 返回索引，  没匹配到返回-1

// 3. replace() // 原字符串不改变，返回处理后的字符串，没匹配到返回原字符串

// 4. split()   // 返回分割后的数组，不改变原来的字符串