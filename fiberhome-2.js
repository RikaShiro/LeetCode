let [a, b, c] = readline()
	.split(' ')
	.map((x) => parseInt(x))
// let [a, b, c] = [5, 6, 4]
a %= c
b %= c
if (a + b < c) {
	console.log(0)
} else {
	console.log(2 * Math.min(a, b, c - a, c - b))
}
