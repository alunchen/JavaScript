const p1 = new Promise(function(resolve, reject){
  setTimeout(resolve, 100, 'done')
})
p1.then(resolve => {
  console.log('resolve:', resolve)
  console.log('p1:', p1)
})
