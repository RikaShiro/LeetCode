/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const n = nums.length
	if (n === 0) {
		return []
	}
	const q = []
	const ans = []
	for (let i = 0; i < n; i++) {
		const x = nums[i]
		while (isSmaller(x)) {
			q.pop()
		}
		q.push(i)
		while (q.length > 0 && q[0] < i - k + 1) {
			q.shift()
		}
		if (i >= k - 1) {
			ans.push(nums[q[0]])
		}
	}
	return ans

	function isSmaller(x) {
		if (q.length === 0) {
			return false
		} else {
			const i = q[q.length - 1]
			if (nums[i] <= x) {
				return true
			} else {
				return false
			}
		}
	}
}
const nums = [9, 10, 9, -7, -4, -8, 2, -6]
const k = 5
console.log(maxSlidingWindow(nums, k))
