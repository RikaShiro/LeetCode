/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let count = 0
	let decay = 0
	const row = grid.length
	const col = grid[0].length
	let q = []
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] === 2) {
				q.push([i, j])
				count++
			} else if (grid[i][j] === 1) {
				count++
			}
		}
	}
	const D = [
		[-1, 0],
		[0, -1],
		[1, 0],
		[0, 1]
	]
	let day = -1
	while (q.length > 0) {
		day++
		const n = q.length
		decay += n
		const next = []
		for (let i = 0; i < n; i++) {
			const [x, y] = q.pop()
			for (const [dx, dy] of D) {
				const [nx, ny] = [x + dx, y + dy]
				if (isFresh(nx, ny)) {
					next.push([nx, ny])
					grid[nx][ny] = 2
				}
			}
		}
		q = next
  }
  console.log(decay, count)
	if (decay < count) {
		return -1
	} else {
		return Math.max(day, 0)
	}

	function isFresh(x, y) {
		return x >= 0 && x < row && y >= 0 && y < col && grid[x][y] === 1
	}
}

const grid = [
	[2, 1, 1],
	[0, 1, 1],
	[1, 0, 1]
]
console.log(orangesRotting(grid))