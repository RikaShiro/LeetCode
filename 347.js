/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const M = new Map()
	for (const i of nums) {
		const v = M.has(i) ? M.get(i) + 1 : 1
		M.set(i, v)
	}
	const A = Array.from(M.entries())
  quickSelect(0, A.length - 1)
  console.log(A)
	return A.slice(0, k).map((x) => x[0])

	function quickSelect(low, high) {
		if (low >= high) {
			return
		}
		const i = partition()
		if (i < k - 1) {
			quickSelect(i + 1, high)
		} else if (i > k - 1) {
			quickSelect(low, i - 1)
		}

		function partition() {
			const x = A[high][1]
			let i = low
			for (let j = low; j < high; j++) {
				if (A[j][1] > x) {
					;[A[i], A[j]] = [A[j], A[i]]
					i++
				}
			}
			;[A[i], A[high]] = [A[high], A[i]]
			return i
		}
	}
}

const nums = [4,1,-1,2,-1,2,3]
const k = 2
const x = topKFrequent(nums, k)
console.log(x)