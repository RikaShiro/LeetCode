/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	const A = obstacleGrid
	const row = A.length
	const col = A[0].length
	if (A[0][0] === 1) {
		return 0
	} else {
		A[0][0] = 1
	}

	for (let i = 1; i < row; i++) {
		if (A[i][0] === 1) {
			A[i][0] = 0
		} else {
			A[i][0] = A[i - 1][0] > 0 ? 1 : 0
		}
	}
	for (let j = 1; j < col; j++) {
		if (A[0][j] === 1) {
			A[0][j] = 0
		} else {
			A[0][j] = A[0][j - 1] > 0 ? 1 : 0
		}
	}
	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (A[i][j] === 1) {
				A[i][j] = 0
			} else {
				A[i][j] = A[i - 1][j] + A[i][j - 1]
			}
		}
	}
	console.log(A)
	return A[row - 1][col - 1]
}

const A = [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0]
]
console.log(uniquePathsWithObstacles(A))
