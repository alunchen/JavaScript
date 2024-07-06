const obj = {
  name: 'alunchen',
  age: 24
}

Object.defineProperty(obj, 'name', {
  value: 'aaa',
  // enumerable: false,
  configurable: false,
  writable: false
})

// Object.defineProperty(obj, 'name', {
//   value: 'bbb',
//   // enumerable: true,
//   // configurable: true,
// })

obj.name = '111'

for(const key in obj) {
  console.log('key', key)
}

console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

console.log(obj)