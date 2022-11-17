let M = new Map()
M.set(1, 2)
M.set(2, 3)
M.set(3, 3)
M.set(-1, 9)
M.set(0, 8)
const A = Array.from(M)
M = null
console.log(A)