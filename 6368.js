/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  m = BigInt(m)
  const zero = BigInt(0)
	const n = word.length
	const ans = new Array(n)
	let start = 0
	for (let i = 0; i < n; i++) {
		const x = BigInt(word.substring(start, i + 1))
		if (x % m === zero) {
			start = i + 1
			ans[i] = 1
		} else {
			ans[i] = 0
		}
	}
	return ans
}

const word =
	'12432442732251070077041093309064540616338062'
const m = 999999958
const x = divisibilityArray(word, m)
console.log(x)