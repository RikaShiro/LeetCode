/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
	nums = nums.flatMap((x) => x.toString().split(''))
  console.log(nums)
	return nums.map((x) => parseInt(x))
}

const nums = [13,25,83,77]
const x = separateDigits(nums)
console.log(x)