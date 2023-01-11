/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	const n = nums.length
	for (let i = n - 1; i >= 1; i--) {
		for (let j = i - 1; j >= 0; j--) {
			if (nums[j] < nums[i]) {
				;[nums[i], nums[j]] = [nums[j], nums[i]]
				return
			}
		}
	}
	nums.reverse()
}

const nums = [1, 3, 2]
nextPermutation(nums)
console.log(nums)
