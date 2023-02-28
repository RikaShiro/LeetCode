/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
	const n = nums.length
	let [i, j] = [0, 1]
	while (true) {
		while (i < n && nums[i] % 2 === 0) {
			i += 2
		}
		while (j < n && nums[j] % 2) {
			j += 2
    }
		if (i < n && j < n) {
			;[nums[i], nums[j]] = [nums[j], nums[i]]
		} else {
			break
		}
	}
	return nums
}

const nums = [4, 2, 5, 7]
const x = sortArrayByParityII(nums)
console.log(x)