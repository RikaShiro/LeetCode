function deleteDuplicate(arr) {
  const M = {}
  for (const x of arr) {
    if (!(x in M)) {
			M[x] = true
		}
  }
  return M
}

const arr = [1, '1', '0', 0, 1, 2, 3, 0]
const x = deleteDuplicate(arr)
console.log(x)
