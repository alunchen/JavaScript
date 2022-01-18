/*
 * @Author: your name
 * @Date: 2021-01-29 10:08:25
 * @LastEditTime: 2021-01-29 10:10:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript\closure\demo02.js
 */
var Type = {};
// var 是全局变量， let 在{}是局部变量
for(let i = 0, type; type = ['String','Array','Object'][i++];) {
    console.log(type)
    Type[`is${type}`] = function(obj) {
        console.log(type)
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

Type.isArray([])