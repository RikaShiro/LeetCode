/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	const ans = new Array(n + 1)
	let highest = 0
	ans[0] = 0
	for (let i = 1; i <= n; i++) {
		if ((i & (i - 1)) === 0) {
			highest = i
		}
		ans[i] = ans[i - highest] + 1
	}
	return ans
}

const n = 2
const x = countBits(n)
console.log(x)
