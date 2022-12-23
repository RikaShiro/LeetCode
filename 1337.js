/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
	const row = mat.length
	const col = mat[0].length
	for (let i = 0; i < row; i++) {
		mat[i] = count(i)
  }
  console.log(mat)
  quickSelect(0, row - 1)
  console.log(mat)
	return mat
		.slice(0, k)
		.sort((a, b) => {
			if (a[0] === b[0]) {
				return a[1] - b[1]
			} else {
				return a[0] - b[0]
			}
		})
		.map((x) => x[1])

	function quickSelect(low, high) {
		if (low <= high) {
			const i = partition()
			if (i > k - 1) {
				quickSelect(low, i - 1)
			} else if (i < k - 1) {
				quickSelect(i + 1, high)
			}
		}

		function partition() {
			let i = low
			for (let j = low; j < high; j++) {
				if (isSmaller(i, high)) {
					;[mat[i], mat[j]] = [mat[j], mat[i]]
					i++
				}
			}
			;[mat[i], mat[high]] = [mat[high], mat[i]]
			return i

			function isSmaller(i, j) {
				const a = mat[i]
				const b = mat[j]
				if (a[0] === b[0]) {
					return a[1] < b[1]
				} else {
					return a[0] < b[0]
				}
			}
		}
	}

	function count(i) {
		const A = mat[i]
		let idx = -1
		let [low, high] = [0, col - 1]
		while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			if (A[mid] === 1) {
				low = mid + 1
				idx = mid
			} else {
				high = mid - 1
			}
		}
		return [idx + 1, i]
	}
}

const mat = [
	[1, 0, 0, 0],
	[1, 1, 1, 1],
	[1, 0, 0, 0],
	[1, 0, 0, 0]
]
const k = 2
console.log(kWeakestRows(mat, k))