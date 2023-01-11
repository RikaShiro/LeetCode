/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	const n = s.length
	const dp = new Array(n)
	for (let i = 0; i < n; i++) {
		dp[i] = new Array(n).fill(false)
		dp[i][i] = true
	}
	let count = n
	for (let i = n - 2; i >= 0; i--) {
		for (let j = i + 1; j < n; j++) {
			if (j - i === 1) {
				dp[i][j] = s[i] === s[j]
			} else {
				dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
			}
			if (dp[i][j]) {
        count++
			}
		}
	}
	return count
}

const s = 'aaa'
const x = countSubstrings(s)
console.log(x)