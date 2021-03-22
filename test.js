/*
 * @Author: your name
 * @Date: 2020-09-23 19:34:57
 * @LastEditTime: 2021-01-07 14:28:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\test.js
 */


let findMinArray = function(array) {
  let minValue = array[0];
  for(let i = 0; i < array.length; i++) {
    if(minValue > array[i]){
      minValue = array[i]
    }
  }
  return minValue
}
console.log(findMinArray([8, 6, 4, 9, 5])) //4



const min_ = function(array) {
  return Math.min(...array)
}
console.log(min_([8, 6, 4, 9, 5])) // 4

// 使用箭头函数优化
const min = arr => Math.min(...arr)
console.log(min_([8, 6, 4, 9, 5])) // 4

// 命令式
const dasyOfWeek = [
  {name : 'Monday', value: 1},
  {name : 'Tuesday', value: 2},
  {name : 'Wednesday', value: 7}
]

let daysOfWeekValues_ = [];
for(let i = 0; i < dasyOfWeek.length; i++) {
  daysOfWeekValues_.push(dasyOfWeek[i].value)
}

// 函数式
const daysOfWeekValues = dasyOfWeek.map(day => day.value)
console.log(daysOfWeekValues)


// 命令式
const positiveNumbers_ = function(array) {
  let positive = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      positive.push(array[i])
    } 
  }
  return positive
}
console.log(positiveNumbers_([-1, 1, 2, -2]))

// 函数式
const positiveNumbers = (array) => array.filter(num => (num >=0))
console.log(positiveNumbers([-1, 1, 2, -2]))

// 命令式
const sumValues = function(array) {
  let total = array[0];
  for(let i = 1; i < array.length; i++) {
    total += array[i]
  }
  return total
}
console.log(sumValues([1, 2, 3, 4, 5]))

// 函数式
const sum_ = function(array) {
  return array.reduce(function(a, b){
    return a+b
  })
}
console.log(sum_([1, 2, 3, 4, 5]))

const sum = arr => arr.reduce((a, b) => a + b)
