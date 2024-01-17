// const p1 = new Promise(function(resolve, reject){
//   setTimeout(resolve, 100, 'done')
// })
// p1.then(resolve => {
//   console.log('resolve:', resolve)
//   console.log('p1:', p1)
// })
// console.log(p1)

// const p1 = new Promise(function(resolve, reject){
//   resolve('123')
// })
// const a = p1.then((res) => {
//   console.log('res:', res)
//   return 1
// }).then((res2) => {
//   console.log('res2:', res2)
// }, (error) => {
//   console.log('error:', error)
// })
// console.log('a:', a)

const p1 = new Promise(function(resolve, reject){
  const num = Math.random();
  console.log('num:', num)
  if(num > 0.5) {
    resolve(num)
  } else {
    reject(num)
  }
})

p1.then(res => {
  console.log('p1 res:', res)
  throw new Error('1')
}, error => {
  console.log('p1 error',error)
  return 2
}).then(res2 => {
  console.log('res2:', res2)
}, error2 => {
  console.log('error2:', error2)
})

// const p2 = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     resolve(p1)
//   }, 3000)
// })

// const result = p2.then(res => {
//   console.log('p2 res2:', res)
// }, error => {
//   console.log('p2 error2:', error)
// })

// console.log('p2 result:', result)