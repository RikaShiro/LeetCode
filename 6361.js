/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
	if (nums.length <= 3) {
		return 0
	}
	let M = new Map()
	for (const x of nums) {
		if (M.has(x)) {
			const v = M.get(x) + 1
			M.set(x, v)
		} else {
			M.set(x, 1)
		}
	}
	M = Array.from(M).sort((a, b) => a[0] - b[0])
  const n = M.length
	let ans = M[n - 1][0] - M[0][0]
	if (M[0][1] > 2 && M[n - 1][1] > 2) {
		return ans
	}
	if (M[0][1] === 2) {
		ams = Math.min(ans, M[n - 1][0] - M[1][0])
	}
	if (M[n - 1][1] === 2) {
		ans = Math.min(ans, M[n - 2][0] - M[0][0])
	}
	if (M[0][1] === 1 && M[1][1] === 1) {
		ans = Math.min(ans, M[n - 1][0] - M[2][0])
	}
	if (M[n - 1][1] === 1 && M[n - 2][1] === 1) {
		ans = Math.min(ans, M[n - 3][0] - M[0][0])
	}
	if (M[0][1] === 1 && M[n - 1][1] === 1) {
		ans = Math.min(ans, M[n - 2][0] - M[1][0])
	}
	return Math.max(ans, 0)
}

const nums = [40, 60, 23, 99, 83, 5, 21, 76, 34, 99]
const x = minimizeSum(nums)
console.log(x)
