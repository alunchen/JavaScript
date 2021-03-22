let arr = [1, 2, 3, 4, 5];

// Array.slice是纯函数，因为它没有副作用，对于固定的输入，输出总是固定的
arr.slice(0, 3);  //[1, 2, 3]

arr.slice(0, 3);  //[1, 2, 3]


// Array.splice是不纯的，它有副作用，对于固定的输入，输出是不固定的
arr.splice(0, 3)   // [1, 2, 3]

arr.splice(0, 3)   // [4, 5]

arr.splice(0, 3)   // []

// 不纯的
var a = 18;
var checkNum = num => num > a;

// 纯函数
var checkNum_ = num => num > 18


let add = function(x){
    return function(y) {
        return x + y
    }
}

// 函数式写法
let add_ = x => (y => x + y)

// 
let add2 = add_(2);
let add200 = add_(200)

add2(2);  // 4
add200(50);  // 250

// 两个函数的组合
let compose = function(f, g) {
    return function(x) {
        return f(g(x))
    }
}

//
let compose_ = (f, g) => (x => f(g(x)));

let add1 = x => x + 1;
let mul5 = x => x * 5;

compose(mul5,add1)(2);
// 15

let first = arr => arr[0];
let reverse = arr => arr.reverse();

let last = compose(first, reverse);

last([1, 2, 3, 4, 5])

let map = (f, arr) => arr.map(f);

let toUpperCase = word => word.toUpperCase();

// 这不符合Point free
let f = str => str.toUpperCase.split(' ')

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