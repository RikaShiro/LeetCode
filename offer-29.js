/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const A = new Array()
	const row = matrix.length
	if (row === 0) return A
	const col = matrix[0].length
	const n = row * col
	let [x, y] = [0, 0]
	const wall = {
		left: 0,
		right: col - 1,
		top: 0,
		bottom: row - 1
	}
	let d = 'right'
	for (let i = 0; i < n; i++) {
		A.push(matrix[x][y])
		switch (d) {
			case 'right':
				if (y === wall.right) {
					wall.top++
					d = 'down'
					x++
				} else {
					y++
				}
				break
			case 'down':
				if (x === wall.bottom) {
					wall.right--
					d = 'left'
					y--
				} else {
					x++
				}
				break
			case 'left':
				if (y === wall.left) {
					wall.bottom--
					d = 'up'
					x--
				} else {
					y--
				}
				break
			case 'up':
				if (x === wall.top) {
					wall.left++
					d = 'left'
					y++
				} else {
					x--
				}
				break
		}
	}
	return A
}

const m = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
]
console.log(spiralOrder(m))