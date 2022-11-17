/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	const n = nums.length
	let start = -1
	let product = 1
	let ans = 0
	for (let i = 0; i < n; i++) {
		product *= nums[i]
		if (product < k) {
			if (start === -1) {
				start = i
			}
		} else if (start === -1) {
			product = 1
			continue
		} else {
			while (start <= i && product >= k) {
				product /= nums[start]
				start++
			}
			if (start > i) {
				start = -1
				product = 1
				continue
			}
		}
		const len = i - start + 1
		ans += len
    console.log(nums.slice(start, i + 1), `ans = ${ans}`)
	}
	return ans
}

const nums = [10, 5, 2, 6]
const k = 100
console.log(numSubarrayProductLessThanK(nums, k))
