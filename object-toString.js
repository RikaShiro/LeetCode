const dict = {
  a: 1,
  c: 2,
  z: 3
}
const b = {
  a: 1,
  c: 2,
  z: 3
}
console.log(JSON.stringify(dict) === JSON.stringify(b))