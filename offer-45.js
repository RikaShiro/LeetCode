/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums = nums.sort(compare)
  return nums.join('')

	function compare(a, b) {
		const x = a + b
		const y = b + a
		const n = x.length
		for (let i = 0; i < n; i++) {
			const p = x[i].charCodeAt() - y[i].charCodeAt()
			if (p > 0) {
				return 1
			} else if (p < 0) {
				return -1
			}
		}
		return -1
	}
}

const A = ['3', '34', '5', '9', '30', '7', '76']
console.log(minNumber(A))
