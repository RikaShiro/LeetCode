/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
	nums.sort((a, b) => a - b)
	const n = nums.length
	const dp = new Array(target + 1).fill(0)
	dp[0] = 1
	for (let i = 1; i <= target; i++) {
		for (let j = 0; j < n; j++) {
			const x = nums[j]
			if (x > i) {
				break
			} else {
				dp[i] += dp[i - x]
			}
		}
  }
	return dp[target]
}

const nums = [1, 2, 3, 4]
const target = 14
const x = combinationSum4(nums, target)
console.log(x)
