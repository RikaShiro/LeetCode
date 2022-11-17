/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
	const x = nums.reduce((xor, i) => xor ^ i, 0).toString(2).padStart(32, '0')
	const i = x.indexOf('1')
	let [p, q] = [0, 0]
  for (const x of nums) {
    y = x.toString(2).padStart(32, '0')
		if (y[i] === '0') {
			p ^= x
		} else {
			q ^= x
		}
	}
	return [p, q]
}

const nums = [1, 2, 5, 2]
console.log(singleNumbers(nums))
