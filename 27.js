/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	const n = nums.length
	let i = n - 1
	while (i >= 0 && nums[i] === val) {
		i--
	}
	for (let j = 0; j <= i; j++) {
		if (nums[j] === val) {
			;[nums[i], nums[j]] = [nums[j], nums[i]]
			while (i >= 0 && nums[i] === val) {
				i--
			}
		}
	}
	return i + 1
}

const nums = [0, 4, 4, 0, 4, 4, 4, 0, 2]
const val = 4
const x = removeElement(nums, val)
console.log(x)
