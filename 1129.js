/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
	const R = new Array(n)
	const B = new Array(n)
	for (let i = 0; i < n; i++) {
		R[i] = []
		B[i] = []
	}
  for (const [u, v] of redEdges) {
		R[u].push(v)
	}
	for (const [u, v] of blueEdges) {
		B[u].push(v)
	}
	const visitedRed = new Array(n).fill(false)
	const visitedBlue = new Array(n).fill(false)
	const distanceRed = new Array(n).fill(Infinity)
	const distanceBlue = new Array(n).fill(Infinity)
	distanceRed[0] = 0
	distanceBlue[0] = 0
	let q = R[0]
	let isRed = true
	let len = 0
	BFS()

	q = B[0]
	isRed = false
	len = 0
	BFS()

	function BFS() {
		while (q.length > 0) {
			len++
			const m = q.length
			for (let i = 0; i < m; i++) {
				const u = q.shift()
        if (isRed) {
          if (!visitedRed[u]) {
            visitedRed[u] = true
						distanceRed[u] = len
						for (const v of B[u]) {
							q.push(v)
						}
					}
				} else if (!visitedBlue[u]) {
          visitedBlue[u] = true
          distanceBlue[u] = len
					for (const v of R[u]) {
						q.push(v)
					}
				}
			}
			isRed = !isRed
		}
  }
	const ans = new Array(n)
	for (let i = 0; i < n; i++) {
		ans[i] = Math.min(distanceRed[i], distanceBlue[i])
		if (ans[i] === Infinity) {
			ans[i] = -1
		}
	}
	return ans
}

const n = 5
const redEdges = [
	[2, 2],
	[0, 1],
	[0, 3],
	[0, 0],
	[0, 4],
	[2, 1],
	[2, 0],
	[1, 4],
	[3, 4]
]
const blueEdges = [
	[1, 3],
	[0, 0],
	[0, 3],
	[4, 2],
	[1, 0]
]
const x = shortestAlternatingPaths(n, redEdges, blueEdges)
console.log(x)
