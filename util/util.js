/*
 * @Author: your name
 * @Date: 2021-03-30 10:49:00
 * @LastEditTime: 2021-03-31 14:53:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\alunchen\JavaScript\util\util.js
 */

// 1. 随机布尔值
/**
 *      这个函数使用 Math.random() 方法返回一个布尔值（true 或 false）,
 * Math.random 将在 0 和 1 之间创建一个随机数，之后我们检查它是否高
 * 于或低于 0.5。这意味着得到真或假的几率是 50%/50%。    
 */
const randomBoolean = () => Math.random() >= 0.5;
console.log(randomBoolean())


// 2. 检查日期是否为工作日
/**
 *       
 * 
 */
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2020, 0, 11)));
console.log(isWeekday(new Date(2021, 0, 10)))

// 3. 反转字符串
const reverseStr = (str) => str.split('').reverse().join('');
console.log(reverseStr('hello world'))

// 4. 保留小数点(非四舍五入)
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed)*n) / Math.pow(10, fixed);
console.log(toFixed(20.123, 2))

// 5. 获取所有参数平均值
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
console.log(average(1, 2, 3, 4))