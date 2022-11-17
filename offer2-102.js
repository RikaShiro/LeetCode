/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
	target = nums.reduce((accu, curr) => accu + curr, target)
  nums = nums.map((x) => 2 * x)
  console.log(nums)
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
	const n = nums.length
	for (let i = 1; i <= n; i++) {
		for (let j = target; j >= 0; j--) {
			if (j >= nums[i-1]) {
				dp[j] += dp[j - nums[i-1]]
			}
    }
    console.log(dp)
	}
	return dp[target]
}

const nums = [1, 1, 1, 1, 1]
const target = 3
console.log(findTargetSumWays(nums, target))