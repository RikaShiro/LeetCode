/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
	nums.sort((a, b) => a - b)
	console.log(nums)
	const n = nums.length
	let count = 0
	for (let i = 0; i < n - 2; i++) {
		let k = n - 1
		for (let j = n - 2; j > i; j--) {
			while (j < k && nums[i] + nums[j] <= nums[k]) {
				k--
			}
			if (k > j) {
				count += k - j
			}
		}
	}
	return count
}

const nums = [2, 2, 3, 4]
const x = triangleNumber(nums)
console.log(x)
