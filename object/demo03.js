const person = {
  age: 22,
  name: 'abc'
}

console.log(person)

Object.defineProperty(person, 'age', {
  get() {
    console.log('获取age属性')
    return 'aaaa'
  },
  set(val) {
    console.log('val', val)
  }
})
console.log(person.age)