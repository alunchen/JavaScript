const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error')
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  resolve(Math.random())
})


const p3 = new Promise((resolve, reject) => {
  return 'pendding'
})




async function fn() {
  let result;
  try {
    const ret = await Promise.all([p1, p2, p2]);
    console.log('ret', ret)
    result = ret;
  } catch (error) {
    console.log(error)
  }
  return result
}
// fn().then(res => {
//   console.log('res:', res)
// })

const list  = Promise.all([p2, p2, p2])

console.log(list)