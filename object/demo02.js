const newObj = {
  age: '1'
}   
let age = '2';
// console.log(newObj)
Object.defineProperty(newObj, 'age', {
  get() {
    // console.log(newObj.age) 这里读取age属性回无限触发get 导致栈溢出  
    return age
  },
  set(val) {
    console.log('val', val)
    age = val;
  }
})

console.log(newObj.age)
newObj.age = '3';
console.log(newObj.age)