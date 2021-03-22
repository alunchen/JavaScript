/*
 * @Author: your name
 * @Date: 2020-10-21 09:37:15
 * @LastEditTime: 2020-10-21 09:42:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\array\splice.js
 */

 
/**
 * splice(index, howmany, ...arg)
 * index: 规定添加/删除项目的位置，使用负数可从数组结尾处规定位子
 * howmany: 要删除的项目数量，如果为0， 则不会删除项目
 * item1,... , itemX, 可选，添加的参数
 */

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 3);
console.log(arr); 
arr.splice(2, 0, 2, 3, 4);
console.log(arr)