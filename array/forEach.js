
const arr = [1, 2, 3];

arr.forEach((val, index) => {
  console.log(val, index)
})

Array.prototype.myForEach = function(fn) {
  for(let i = 0; i < this.length; i++) {
    const val = this[i];
    const index = i;
    const arr = this;
    fn(val, index, arr)
  }
}
arr.myForEach((val) => {
  console.log(val)
})