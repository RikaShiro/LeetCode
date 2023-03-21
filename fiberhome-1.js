const [n, m, k] = readline()
	.split(' ')
	.map((x) => parseInt(x))
// const [n, m, k] = [3, 3, 2]
const ub = k ** 2
let ans = 0
for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		const x = gcd(i + 1, j + 1)
		const a = Math.min(i + 1, n - i)
		const b = Math.min(j + 1, m - j)
		const y = Math.min(a * b, ub)
		ans += x * y
	}
}
console.log(ans)

function gcd(a, b) {
	if (a > b) {
		;[a, b] = [b, a]
	}
	for (let i = a; i >= 1; i--) {
		if (a % i === 0 && b % i === 0) {
			return i
		}
	}
}
