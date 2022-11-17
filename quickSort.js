const quickSort = (A, low, high) => {
	if (low >= high) return
	const idx = partition(A, low, high)
	quickSort(A, low, idx - 1)
	quickSort(A, idx + 1, high)

	function partition(A, low, high) {
		const pivot = A[high]
		let i = low
		for (let j = low; j < high; j++) {
			if (A[j] < pivot) {
				[A[i], A[j]] = [A[j], A[i]]
				i++
			}
		}
		[A[i], A[high]] = [A[high], A[i]]
		return i
	}
}

const A = [3, 4, 5, 1, 2, 3, 2, 5, 6, 7, 2, 1, 3, 4, 2, 8, 8, 1, 2]
quickSort(A, 0, A.length - 1)
console.log(A)
