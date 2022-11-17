/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
	const row = matrix.length
	const col = matrix[0].length
	for (let i = 1; i < row; i++) {
		matrix[i][0] += matrix[i - 1][0]
	}
	for (let j = 1; j < col; j++) {
		matrix[0][j] += matrix[0][j - 1]
	}
	for (let i = 1; i < row; i++) {
		for (let j = 1; j < col; j++) {
			matrix[i][j] += matrix[i][j - 1] + matrix[i - 1][j] - matrix[i - 1][j - 1]
		}
	}
	this.M = matrix
	console.log(this.M)
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	const sum = (x, y) => {
		if (x < 0 || y < 0) {
			return 0
		} else {
			return this.M[x][y]
    }
	}
	const ans =
		this.M[row2][col2] +
		sum(row1 - 1, col1 - 1) -
		sum(row2, col1 - 1) -
    sum(row1 - 1, col2)
  console.log(ans)
	return ans
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
const numMatrix = new NumMatrix([
	[3, 0, 1, 4, 2],
	[5, 6, 3, 2, 1],
	[1, 2, 0, 1, 5],
	[4, 1, 0, 1, 7],
	[1, 0, 3, 0, 5]
])
numMatrix.sumRegion(2, 1, 4, 3) // return 8 (红色矩形框的元素总和)
numMatrix.sumRegion(1, 1, 2, 2) // return 11 (绿色矩形框的元素总和)
numMatrix.sumRegion(1, 2, 2, 4) // return 12 (蓝色矩形框的元素总和)
