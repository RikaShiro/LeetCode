/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	const T = triangle
	const n = T.length
	let dp = [T[0][0]]
	for (let i = 2; i <= n; i++) {
		const A = T[i - 1]
		const B = new Array(i).fill(0)
		for (let j = 1; j < i; j++) {
			B[j] = Math.min(dp[j], dp[j - 1]) + A[j]
		}
		B[0] = A[0] + dp[0]
		B[i - 1] = A.at(-1) + dp.at(-1)
		dp = B
	}
	return Math.min(...dp)
}

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
const x = minimumTotal(triangle)
console.log(x)
