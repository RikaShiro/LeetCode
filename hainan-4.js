const A = [1, 2, 3, 2, 1, 1, 1, 1, 4, 2, 1]
quickSort(A, 0, A.length - 1)
console.log(A)

function quickSort(arr, low, high) {
	if (low >= high) {
		return
	}
	const i = partition()
	quickSort(arr, low, i - 1)
	quickSort(arr, i + 1, high)

	function partition() {
		const x = arr[high]
		let i = low
		for (let j = low; j < high; j++) {
			if (arr[j] < x) {
				;[arr[i], arr[j]] = [arr[j], arr[i]]
				i++
			}
		}
		;[arr[i], arr[high]] = [arr[high], arr[i]]
		return i
	}
}
