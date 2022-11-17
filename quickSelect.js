var getLeastNumbers = function (arr, k) {
	const n = arr.length
	quickSelect(0, n - 1)
	return arr.slice(0, k)

	function quickSelect(low, high) {
		if (low >= high) return
		const idx = partition(low, high)
		if (idx === k) {
			return
		} else if (idx > k) {
			quickSelect(low, idx - 1)
		} else {
			quickSelect(idx + 1, high)
		}

		function partition(low, high) {
			const pivot = arr[high]
			let i = low
			for (let j = low; j < high; j++) {
				if (arr[j] < pivot) {
					[arr[i], arr[j]] = [arr[j], arr[i]]
					i ++
				}
			}
			[arr[i], arr[high]] = [arr[high], arr[i]]
			return i
		}
	}
}

const A = [1, 3, 2, 4, 3, -1, 0, 9]
console.log(getLeastNumbers(A, 4))
