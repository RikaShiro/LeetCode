/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let [low, high] = [0, nums.length - 1]
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		if (nums[mid] > target) {
			if (nums[mid] <= nums[high]) {
				high = mid - 1
			} else if (nums[low] <= target) {
				high = mid - 1
			} else {
				low = mid + 1
			}
		} else if (nums[mid] < target) {
			if (nums[mid] >= nums[low]) {
				low = mid + 1
			} else if (nums[low] <= target) {
				high = mid - 1
			} else {
				low = mid + 1
			}
		} else {
			return mid
		}
	}
	return -1
}

const nums = [1, 3]
const target = 3
console.log(search(nums, target))