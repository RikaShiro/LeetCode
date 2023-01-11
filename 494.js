/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
	target += nums.reduce((prev, curr) => prev + curr, 0)
	if (target < 0) {
		return 0
	}
	nums = nums.map((x) => 2 * x)
	const dp = new Array(target + 1).fill(0)
	dp[0] = 1
	for (const w of nums) {
		for (let j = target; j >= w; j--) {
			dp[j] += dp[j - w]
		}
	}
	return dp[target]
}

const nums = [1, 1, 1, 1, 1]
const target = 3
const x = findTargetSumWays(nums, target)
console.log(x)
