/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
	const A = new Array(n)
	for (let i = 0; i < n; i++) {
		A[i] = i
	}
	let p = 0
	while (A.length !== 1) {
		p += m - 1
		p %= A.length
		A.splice(p, 1)
	}
	return A[0]
}

const n = 82002
const m = 120659
const x = lastRemaining(n, m)
console.log(x)
