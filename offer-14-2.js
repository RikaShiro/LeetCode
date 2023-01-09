/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	if (n <= 3) {
		return n - 1
	}
	const dp = new Array(n + 1).fill(BigInt(0))
	for (let i = 1; i <= 4; i++) {
		dp[i] = BigInt(i)
	}
	for (let i = 5; i <= n; i++) {
		const ub = Math.floor(i / 2)
		for (let j = 2; j <= ub; j++) {
			const x = dp[j] * dp[i - j]
			if (x > dp[i]) {
				dp[i] = x
			}
    }
    dp[n] %= BigInt(1e9 + 7)
	}
	return Number(dp[n] % BigInt(1e9 + 7))
}

const n = 127
const x = cuttingRope(n)
console.log(x)
