/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	let [low, high] = [0, nums.length - 1]
  while (low <= high) {
		const mid = Math.floor((low + high) / 2)
    console.log(low, high, nums[mid])
		if (nums[mid] > target) {
			if (nums[mid] > nums[low]) {
				if (nums[low] <= target) {
					high = mid - 1
				} else {
					low = mid + 1
				}
			} else if (nums[mid] < nums[high]) {
				high = mid - 1
			} else {
				high--
			}
		} else if (nums[mid] < target) {
			if (nums[mid] > nums[low]) {
				low = mid + 1
			} else if (nums[mid] < nums[high]) {
				if (nums[high] >= target) {
					low = mid + 1
				} else {
					high = mid - 1
				}
			} else {
				low++
			}
		} else {
			return true
		}
	}
	return false
}

const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const target = 13
console.log(search(nums, target))