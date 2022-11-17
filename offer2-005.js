/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
	const n = words.length
	for (let i = 0; i < n; i++) {
    words[i] = toDict(words[i])
    // console.log(words[i])
	}
	let max = 0
	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n; j++) {
			if (isValid(words[i].dict, words[j].dict)) {
				const len = words[i].len * words[j].len
				max = Math.max(max, len)
			}
		}
	}
	return max

	function toDict(s) {
		const dict = new Array(26).fill(false)
		const base = 'a'.charCodeAt()
		for (let i of s) {
			const idx = i.charCodeAt() - base
			dict[idx] = true
		}
		return {
			len: s.length,
			dict
		}
	}

	function isValid(x, y) {
		for (let i = 0; i < 26; i++) {
			if (x[i] && y[i]) {
				return false
			}
		}
		return true
	}
}

const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']
console.log(maxProduct(words))