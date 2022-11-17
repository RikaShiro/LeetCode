/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  nums.sort()
  console.log(nums)
  const total = nums.reduce((accu, curr) => accu + curr, 0)
  let sum = 0
	for (let i of nums) {
		sum += i
		if (sum * 2 === total) {
			return true
    }
	}
	return false
}

const nums = [1, 5, 11, 5]
console.log(canPartition(nums))