/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
	if (n <= 9) {
		return n
	}
	let i = 1
	while (true) {
		const x = 9 * i * 10 ** (i - 1)
		if (n > x) {
			n -= x
			i++
		} else {
			break
		}
	}
	const base = 10 ** (i - 1)
	let k = Math.floor(n / i)
	k += base
	n %= i
	if (n === 0) {
		k--
		k = k.toString()
		const c = k[k.length - 1]
		return parseInt(c)
	} else {
		k = k.toString()
    const c = k[n - 1]
    return parseInt(c)
	}
}

const n = 11
const x = findNthDigit(n)
console.log(x)
