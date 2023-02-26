function heapSort(A) {
	const n = A.length
	for (let i = Math.floor(n / 2); i >= 0; i--) {
		shift(i)
	}

	function shift(k) {
		while (k * 2 <= n) {
			let j = k * 2
      if (j < n && A[j + 1] > A[j]) {
        j ++
      }
      if (A[k] < A[j]) {
        [A[k], A[j]] = [A[j], A[k]]
        k = j
      } else {
        break
      }
		}
	}
}

const A = [15, 17, 19, 13, 22, 16, 28, 30, 41, 62]
heapSort(A)
console.log(A)
