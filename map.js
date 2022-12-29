const M = new Map()
M.set(1, 2)
M.set(2, 3)
M.set(3, 3)
M.set(-1, 9)
M.set(0, 8)
M.set(9, 1)
console.log(M.get(9) | 0 | 2)
for (const [k, v] of M) {
  console.log(k, v)
}