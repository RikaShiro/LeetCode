/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var handleQuery = function (nums1, nums2, queries) {
	const n = nums1.length
	const ans = []
	for (const q of queries) {
		if (q[0] === 1) {
			const l = q[1]
			const r = q[2]
			for (let i = l; i <= r; i++) {
				nums1[i] = 1 - nums1[i]
			}
		} else if (q[0] === 2) {
			for (let i = 0; i < n; i++) {
				nums2[i] += nums1[i] * q[1]
			}
		} else {
			ans.push(nums2.reduce((prev, curr) => prev + curr, 0))
		}
	}
	return ans
}

const nums1 = [1, 0, 1],
	nums2 = [0, 0, 0],
	queries = [
		[1, 1, 1],
		[2, 1, 0],
		[3, 0, 0]
	]
const x = handleQuery(nums1, nums2, queries)
console.log(x)
