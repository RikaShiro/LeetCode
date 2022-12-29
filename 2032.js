/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
	const M = new Map()
	for (const i of nums1) {
		M.set(i, 1)
	}
	for (const i of nums2) {
		const v = M.get(i) | 0 | 2
		M.set(i, v)
	}
	for (const i of nums3) {
		const v = M.get(i) | 0 | 4
		M.set(i, v)
	}
	const ans = []
	for (const [k, v] of M) {
		console.log(v & (v - 1))
		if ((v & (v - 1)) > 0) {
			ans.push(k)
		}
	}
	return ans
}

const nums1 = [3, 1]
const nums2 = [2, 3]
const nums3 = [1, 2]
const x = twoOutOfThree(nums1, nums2, nums3)
console.log(x)
