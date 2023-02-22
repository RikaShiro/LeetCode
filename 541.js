/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	const n = s.length
	for (let i = 0; i < n; i += 2 * k) {
		const j = Math.min(n, i + k)
		reverse(i, j)
	}
	return s

	function reverse(start, end) {
		const len = Math.floor((end - start) / 2) - 1
		for (let i = 0; i <= len; i++) {
			const p = i + start
			const q = end - 1 - i
			;[s[p], s[q]] = [s[q], s[p]]
		}
	}
}

const s = 'abcdefg'
const k = 2
const x = reverseStr(s, k)
console.log(x)
