/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
	const tps = []
	const n = numCourses
	const G = new Array(n)
	// 0 = 未访问; -1 = 正在访问; 1 = 已经访问过
	const status = new Array(n).fill(0)
	for (let i = 0; i < n; i++) {
		G[i] = []
	}
	for (const edge of prerequisites) {
		const [x, y] = edge
		G[x].push(y)
  }
	for (let i = 0; i < n; i++) {
		if (status[i] === 0) {
			if (!DFS(i)) {
				return []
			}
    }
	}
	return tps

  function DFS(x) {
    console.log(x, status, G[x])
		status[x] = -1
		for (const y of G[x]) {
			if (status[y] === -1) {
				return false
			} else if (status[y] === 0) {
        if (!DFS(y)) {
          return false
        }
			}
		}
		tps.push(x)
		status[x] = 1
		return true
	}
}

const numCourses = 2
const prerequisites = [
	[0, 1],
	[1, 0]
]
console.log(findOrder(numCourses, prerequisites))