/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
	let A = new Array(n)
	for (let i = 0; i < n; i++) {
		A[i] = i + 1
	}
	A = new Set(A)
	for (const x of banned) {
		if (x >= 1 && x <= n) {
			A.delete(x)
		}
	}
	A = Array.from(A)
  n = A.length
	const dp = new Array(maxSum + 1).fill(null)
	dp[0] = 0
	for (let i = 0; i < n; i++) {
		const x = A[i]
		for (let j = maxSum; j >= x; j--) {
			if (dp[j - x] !== null) {
				dp[j] = Math.max(dp[j - x] + 1, dp[j])
			}
		}
  }
	return Math.max(...dp)
}

const banned = [11]
const n = 7
const maxSum = 50
const x = maxCount(banned, n, maxSum)
console.log(x)
