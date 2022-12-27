/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	const A = []
	nums1.sort((a, b) => a - b)
	nums2.sort((a, b) => a - b)
	const m = nums1.length
	const n = nums2.length
	let [low, high] = [0, n - 1]
	for (let i = 0; i < m; i++) {
		if (i > 0 && nums1[i] === nums1[i - 1]) {
			continue
		}
    const idx = search(low, high, nums1[i])
		if (nums1[i] === nums2[idx]) {
			A.push(nums1[i])
		}
    low = Math.max(low, idx)
	}
	return A

  function search(low, high, target) {
		let idx = -1
		while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			if (nums2[mid] > target) {
				high = mid - 1
			} else if (nums2[mid] < target) {
				low = mid + 1
				idx = mid
			} else {
				return mid
			}
		}
		return idx
	}
}

const nums1 = [1, 2, 2, 1]
const nums2 = [2]
const x = intersection(nums1, nums2)
console.log(x)
