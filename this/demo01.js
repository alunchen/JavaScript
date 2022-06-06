/**
 * 
 */
// function foo() {
//   this.count++;
// }
// var count = 0;
// foo.count = 0;

// for(var i = 0; i < 5; i++) {
//   foo()
// }
// console.log(foo.count)  // 0 浏览器中打印**
// console.log(count)  // 5  浏览器中打印**




// function foo() {
//   this.count++
// }
// var bar = {
//   count: 0
// }
// foo.count = 0;
// for(var i = 0; i < 5; i++) {
//   foo.call(bar)
// }
// console.log(bar.count);  // 5  浏览器中打印**
// console.log(this.count)




// function foo() {
//   var count = 1;
//   console.log(this.count)
// }
// var count = 3;
// foo() // 3 浏览器中打印