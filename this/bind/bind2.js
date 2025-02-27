

// demo 1:
console.log(this);  // {}

// demo 2:
var a = this;
console.log(a); // {}
var b = 1;
console.log(global.b); // undefined

// demo 3:
b = this; // 注意：严格模式下，变量必须得声明；非严格模式，可以省略声明符
console.log(b); // {}
c = 1;
console.log(global.c); // 1