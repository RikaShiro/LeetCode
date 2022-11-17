const nums = [4, 1, 4, 6]
const x = nums.reduce((xor, i) => xor ^ i, 0)
const y = x.toString(2)
console.log(x, y, y.length)
