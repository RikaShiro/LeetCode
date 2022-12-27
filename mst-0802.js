/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function (obstacleGrid) {
	const M = obstacleGrid
	const row = M.length
	const col = M[0].length
	M[0][0] = 1
	for (let i = 1; i < row; i++) {
		if (M[i][0] === 1 || M[i - 1][0] === 0) {
			M[i][0] = 0
		} else {
			M[i][0] = 4
		}
	}
	for (let j = 1; j < col; j++) {
		if (M[0][j] === 1 || M[0][j - 1] === 0) {
			M[0][j] = 0
		} else {
			M[0][j] = 3
		}
	}
	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			if (M[i][j] === 1) {
				M[i][j] = 0
			} else if (M[i - 1][j] > 0) {
				M[i][j] = 4
			} else if (M[i][j - 1] > 0) {
				M[i][j] = 3
			}
		}
	}
	const path = []
	let [i, j] = [row - 1, col - 1]
	if (M[i][j] > 0) {
		while (i !== 0 || j !== 0) {
			path.unshift([i, j])
			if (M[i][j] === 4) {
				i--
			} else {
				j--
			}
		}
	}
	return path
}

const M = [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0]
]
const x = pathWithObstacles(M)
console.log(x)
