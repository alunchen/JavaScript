const o1 = {
  a: '1',
  b: '2',
  c: '3'
}

const o2 = {
  d: '5',
  e: '6'
}

const o3 = {
  ...o1,
  ...o2
}

console.log(o3)

const a1 = Object.keys(o1)

console.log(JSON.parse(JSON.stringify(o3, a1)))