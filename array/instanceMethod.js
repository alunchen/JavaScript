
/**
 * 数组实例方法的封装
 */

const arr = [{ a: 1, b: 1}, { a:2, b:2}, 3];

// forEach
Array.prototype.myForEach = function(fn){
  for(let i = 0; i < this.length; i++) {
    const val = this[i];
    const index = i;
    const arr = this;
    fn(val, index, arr)
  }
}
// arr.myForEach(val => {
//   console.log(val)
// })

// find
Array.prototype.myFind = function(fn){
  let result;
  for(let i = 0; i < this.length; i++) {
    const val = this[i];
    const index = i;
    const arr = this;
    if(fn(val, index, arr)) {
      result = this[i];
      return result;
    }
  }
}
// console.log(arr.myFind(i => i.a === 2))

console.log(arr.map((val) => {
  console.log(val)
}))