function sort(A) {
	const B = [...A].sort()
	const n = A.length
	let count = 0
	for (let i = 0; i < n; i++) {
		while (A[i] !== B[i]) {
			const j = B.indexOf(A[i])
			;[A[i], A[j]] = [A[j], A[i]]
			count++
		}
	}
	return count
}

const A = [7, 6, 8, 5]
const x = sort(A)
console.log(x)