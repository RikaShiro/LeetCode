const [n, q] = read()
const A = read().sort((a, b) => b - a)
const B = read().sort((a, b) => a - b)
for (let _i = 0; _i < q; _i++) {
	const [a, b] = read()
	diff(a, b)
}

function read() {
	return readline()
		.split(' ')
		.map((x) => parseInt(x))
}
function diff(a, b) {
	const x = A.map((x) => x * a)
	const y = B.map((x) => x * b)
	let ans = 0
	for (let i = 0; i < n; i++) {
		if (x[i] > y[i]) {
			ans += x[i] - y[i]
    } else {
      console.log(ans)
      break
    }
  }
}
