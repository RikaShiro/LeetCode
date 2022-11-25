/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
	const n = nums.length
	const dp = new Array(n)
	for (let i = 0; i < n; i++) {
		dp[i] = [1, 1]
	}
	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			let [maxLen, count] = dp[i]
			if (nums[i] > nums[j]) {
				const len = dp[j][0] + 1
				if (len > maxLen) {
					maxLen = len
					count = dp[j][1]
				} else if (len === maxLen) {
					count += dp[j][1]
				}
			}
			dp[i] = [maxLen, count]
		}
  }
	
  let maxLen = 0
	let total = 0
	for (let i = 0; i < n; i++) {
		const [len, count] = dp[i]
		if (len > maxLen) {
			maxLen = len
			total = count
		} else if (len === maxLen) {
			total += count
    }
	}
	return total
}

const nums = [1, 2, 4, 3, 5, 4, 7, 2]
console.log(findNumberOfLIS(nums))
