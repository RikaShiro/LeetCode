/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function (s, queries) {
	const n = queries.length
	const ans = new Array(n)
	for (let i = 0; i < n; i++) {
		const [x, y] = queries[i]
		let k = x ^ y
		k = k.toString(2)
		const start = s.indexOf(k)
		if (start === -1) {
			ans[i] = [-1, -1]
		} else {
			const len = k.length
			const end = start + len - 1
			ans[i] = [start, end]
		}
	}
	return ans
}

const s = '101101'
const queries = [
	[0, 5],
	[1, 2]
]
const x = substringXorQueries(s, queries)
console.log(x)
