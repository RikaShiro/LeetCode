/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	const sum = nums.reduce((prev, curr) => prev + curr, 0)
	if (sum % 2 === 1) {
		return false
	}
	const k = sum / 2
	const dp = new Array(k + 1).fill(false)
	dp[0] = true
	const n = nums.length
	for (let i = 1; i <= n; i++) {
		const v = nums[i - 1]
		for (let j = k; j >= 1; j--) {
			if (!dp[j]) {
				dp[j] = j >= v && dp[j - v]
			}
		}
	}
	return dp[k]
}

const nums = [1, 5, 11, 5]
const x = canPartition(nums)
console.log(x)
