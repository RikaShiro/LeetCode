/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
	const M = mat.map((el, idx) => [count(el), idx])
	quickSelect(0, M.length - 1, k)
	console.log(M)
	return M.slice(0, k)
		.sort((a, b) => {
			if (a[0] !== b[0]) {
				return a[0] - b[0]
			} else {
				return a[1] - b[1]
			}
		})
		.map((x) => x[1])

	function quickSelect(low, high) {
		if (low >= high) return
		const idx = partition()
		if (idx > k - 1) {
			quickSelect(low, idx - 1)
		} else if (idx < k - 1) {
			quickSelect(idx + 1, high)
		}

		function partition() {
			let i = low
			for (let j = low; j < high; j++) {
				if (isSmaller(M[j], M[high])) {
					;[M[i], M[j]] = [M[j], M[i]]
					i++
				}
			}
			;[M[i], M[high]] = [M[high], M[i]]
			return i

			function isSmaller(x, y) {
				if (x[0] !== y[0]) {
					return x[0] < y[0]
				} else {
					return x[1] < y[1]
				}
			}
		}
	}

	function count(A) {
		let idx = -1
		const n = A.length
		let [low, high] = [0, n - 1]
		while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			if (A[mid] === 1) {
				idx = mid
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
		return idx + 1
	}
}

const mat = [
	[1, 1, 0, 0, 0],
	[1, 1, 1, 1, 0],
	[1, 0, 0, 0, 0],
	[1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1]
]
const k = 3
const x = kWeakestRows(mat, k)
console.log(x)

// 对于每1行 用binary search查找总共有多少战力 之后用quick select找到战力最弱的前k行
