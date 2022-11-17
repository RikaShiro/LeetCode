let A = [1, 3, 2, 4, 1, 1, 6, 3, 1, 4, 5, 3, 4, 5, 6, 6, 7]
A.sort(compare)

// return true/false 的compare函数是无效的
// 必须return 1 -1 0
function compare(a, b) {
  if (a > b) return 1
  else return -1
}
console.log(A)