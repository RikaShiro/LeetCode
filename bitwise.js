/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
	n = n.toString(2)
	let [zero, one] = [0, 0]
	let count = 0
	for (const c of n) {
		if (c === '0') {
			zero++
			if (count > 0) {
				if (count === 1) {
					one++
				} else {
					one += 2
				}
				count = 0
			}
		} else {
			count++
		}
	}
	if (count > 0) {
		if (count === 1) {
			one++
		} else {
			one += 2
		}
	}
	console.log(n, zero, one)
	return Math.min(zero + 2, one)
}

const n = 54
const x = minOperations(n)
console.log(x)
