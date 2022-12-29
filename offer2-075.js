/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
	const M = new Map()
	const n = arr2.length
	for (let i = 0; i < n; i++) {
		M.set(arr2[i], i)
  }
	quickSort(arr1, 0, arr1.length - 1)
	return arr1

	function quickSort(A, low, high) {
		if (low >= high) {
			return
		}
		const i = partition()
		quickSort(A, low, i - 1)
		quickSort(A, i + 1, high)

		function partition() {
			const x = A[high]
			let i = low
			for (let j = low; j < high; j++) {
				if (compare(A[j], x) < 0) {
					;[A[i], A[j]] = [A[j], A[i]]
					i++
				}
			}
			;[A[i], A[high]] = [A[high], A[i]]
			return i
		}
	}

	function compare(a, b) {
    const i = getIndex(a)
    const j = getIndex(b)
		if (i === j) {
			return a - b
		} else {
			return i - j
    }
    
    function getIndex(x) {
      const i = M.get(x)
      return i === undefined ? Infinity : i
    }
	}
}

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
const arr2 = [2, 1, 4, 3, 9, 6]
const x = relativeSortArray(arr1, arr2)
console.log(x)
