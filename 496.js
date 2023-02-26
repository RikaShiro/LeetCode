/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	const n = nums2.length
  const A = new Array(n).fill(-1)
  const stk = []
	for (let i = 0; i < n; i++) {
		const x = nums2[i]
		while (stk.length > 0 && x > nums2[stk.at(-1)]) {
			const j = stk.pop()
			A[j] = x
		}
		stk.push(i)
	}
	const M = new Map(nums2.map((x, i) => [x, A[i]]))
	const k = nums1.length
	const ans = new Array(k)
	for (let i = 0; i < k; i++) {
		ans[i] = M.get(nums1[i])
	}
	return ans
}

const nums1 = [1, 3, 5, 2, 4]
const nums2 = [5, 4, 3, 2, 1]
const x = nextGreaterElement(nums1, nums2)
console.log(x)