/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
	let joker = 0
	for (let i = 0; i < 5; i++) {
		if (nums[i] === 0) {
			joker++
		}
		if (i >= 1) {
			const diff = nums[i] - nums[i - 1]
      if (diff === 0) {
        console.log(joker)
				return false
			} else {
        joker -= diff - 1
        console.log(joker)
				if (joker < 0) {
					return false
				}
			}
		}
	}
	return true
}

const a = [0, 0, 1, 2, 5]
console.log(isStraight(a))
