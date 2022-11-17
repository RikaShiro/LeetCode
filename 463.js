/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
	let perimeter = 0
	const row = grid.length
	const col = grid[0].length
	const D = [
		[-1, 0],
		[0, -1],
		[0, 1],
		[1, 0]
	]
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] === 1) {
				BFS(i, j)
				break
			}
		}
	}
	return perimeter

	function BFS(x, y) {
		const q = new Array()
		q.push([x, y])
		while (q.length > 0) {
			const [x, y] = q.pop()
			grid[x][y] = -1
			for (const [dx, dy] of D) {
				const [nx, ny] = [x + dx, y + dy]
				const status = isLand(nx, ny)
				if (status === 1) {
					q.push([nx, ny])
				} else if (status === 0) {
          perimeter++
          console.log([nx, ny])
				}
			}
		}
	}

	function isLand(x, y) {
		if (x >= 0 && x < row && y >= 0 && y < col) {
			return grid[x][y]
		} else {
			return 0
		}
	}
}

const a = [
	[1, 1],
	[1, 1]
]
console.log(islandPerimeter(a))
