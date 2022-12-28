const A = [3, 4, 5, 1, 2, 3, 2, 5, 6, 7, 2, 1, 3, 4, 2, 8, 8, 1, 2]
quickSort(0, A.length - 1)
console.log(A)

function quickSort(low, high) {
	if (low >= high) return
	const i = partition()
	quickSort(low, i - 1)
	quickSort(i + 1, high)

	function partition() {
		const x = A[high]
		let i = low
		for (let j = low; j < high; j++) {
			if (A[j] < x) {
				;[A[i], A[j]] = [A[j], A[i]]
				i++
			}
		}
		;[A[i], A[high]] = [A[high], A[i]]
		return i
	}
}