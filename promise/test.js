// const p1 = new Promise(function(resolve, reject){
//   setTimeout(resolve, 100, 'done')
// })
// p1.then(resolve => {
//   console.log('resolve:', resolve)
//   console.log('p1:', p1)
// })
// console.log(p1)

const p1 = new Promise(function(resolve, reject){
  resolve('123')
})
const a = p1.then((res) => {
  console.log('res:', res)
  return 1
}).then((res2) => {
  console.log('res2:', res2)
}, (error) => {
  console.log('error:', error)
})
console.log('a:', a)