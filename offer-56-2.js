/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let [x, y] = [0, 0]
	for (const i of nums) {
		const p = x ^ ~(y ^ i)
		const q = ~x & (y ^ i)
		x = p
    y = q
    console.log(x.toString(2), y.toString(2))
	}
	return y
}

const nums = [3, 4, 3, 3]
console.log(singleNumber(nums))
