const A = new Set([1, 1, 1, 2, 2, 3])
const B = new Set([4, 4, 4, 1, 2, 3, 5, 6, 7])
const C = new Set(Array.from(A).concat(Array.from(B)))
console.log(C)