/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
	nums.sort((a, b) => a - b)
	// console.log(nums, nums.length)
	const n = nums.length
	let ans = 0
	let ub = n - 2
	for (let i = n - 1; i >= 0; i--) {
		const j = getLow(0, ub, nums[i] / 2)
		if (j === -1) {
			break
		} else {
			ans++
			ub = j - 1
		}
	}
	const most = n % 2 === 0 ? n : n - 1
	return Math.min(ans * 2, most)

	function getLow(low, high, k) {
		let i = -1
		while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			const x = nums[mid]
			if (x <= k) {
				i = Math.max(i, mid)
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
		return i
	}
}

const nums = [
	42, 83, 48, 10, 24, 55, 9, 100, 10, 17, 17, 99, 51, 32, 16, 98, 99, 31, 28,
	68, 71, 14, 64, 29, 15, 40
]
const x = maxNumOfMarkedIndices(nums)
console.log(x)
