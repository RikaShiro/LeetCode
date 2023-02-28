/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
	let M = {}
	for (const x of nums) {
		if (x in M) {
			M[x]++
		} else {
			M[x] = 1
		}
	}
  M = Array.from(Object.entries(M))
	M.sort((a, b) => {
		if (a[1] !== b[1]) {
			return a[1] - b[1]
		} else {
			return b[0] - a[0]
		}
	})
  M = new Map(M.map((x, i) => [x[0], i]))
	return nums.sort((a, b) => M.get(a.toString()) - M.get(b.toString()))
}

const nums = [2, 3, 1, 3, 2]
const x = frequencySort(nums)
console.log(x)
