// async 后面的函数返回一个 Promise 对象
async function fn() {
  const a = '1';
  throw '123'
  return a;
}

// const f1 = await fn();

// console.log(f1)
// await 只能在 async中使用
async function f2(){
  try {
    const f3 = await fn();
    console.log(f3)
  } catch (error) {
    console.log(error)
  }
}
f2()