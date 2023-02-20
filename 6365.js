/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
	const M = new Map()
	DFS(n)
	return M.get(high)

	function DFS(x) {
		if (M.has(x) && M.get(x) !== -1) {
			return
		}
		const k = Math.floor(Math.log2(x))
		if (2 ** k === x) {
			M.set(x, 1)
			return
		}
		let ans = Infinity
		for (let i = k - 1; i >= 0; i--) {
			const low = x - 2 ** i
			const high = x + 2 ** i
			if (!M.has(low)) {
				M.set(low, -1)
				DFS(low)
			}
			if (!M.has(high)) {
				M.set(high, -1)
				DFS(high)
			}
			ans = Math.min(ans, 1 + M.get(low), 1 + M.get(high))
		}
		const low = x - 2 ** k
		if (!M.has(low)) {
			M.set(low, -1)
			DFS(low)
		}
		ans = Math.min(ans, 1 + M.get(low))
		M.set(x, ans)
	}
}

const n = 54
const x = minOperations(n)
console.log(x)
