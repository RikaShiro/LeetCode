function updateMatrix(mat) {
	const row = mat.length
	const col = mat[0].length
  const A = new Array(row).fill(new Array(col).fill(Infinity))
  console.log(A)
	for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
			if (mat[i][j] === 0) {
        A[i][j] = 0
			}
		}
	}
	console.log(A)
}
const A = [
	[1, 1, 1, 1, 1],
	[1, 1, 0, 1, 1],
	[1, 1, 1, 1, 1]
]
updateMatrix(A)
