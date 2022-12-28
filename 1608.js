/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
	nums.sort((a, b) => b - a)
	const n = nums.length
	for (let i = 0; i < n; i++) {
		if (nums[i] >= i + 1) {
			if (i === n - 1) {
				return i + 1
			} else if (nums[i + 1] < i + 1) {
				return i + 1
			}
		} else {
			return -1
		}
	}
	return -1
}

const nums = [1, 1, 2]
const x = specialArray(nums)
console.log(x)
