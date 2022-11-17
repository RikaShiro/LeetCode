/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	const n = t.length
	const dict = new Array(n)
	for (let i = 0; i < n; i++) {
		dict[i] = new Array(26).fill(-1)
	}
	const base = 'a'.charCodeAt()
	for (let i = n - 1; i >= 0; i--) {
		const curr = t[i].charCodeAt() - base
		for (let j = 0; j < 26; j++) {
			if (curr === j) {
				dict[i][j] = i
			} else if (i < n - 1) {
				dict[i][j] = dict[i + 1][j]
			}
		}
	}
	let idx = 0
	for (const x of s) {
		if (idx >= n) {
			return false
		}
		const y = x.charCodeAt() - base
		if (dict[idx][y] === -1) {
			return false
		} else {
			idx = dict[idx][y] + 1
		}
	}
	return true
}

const s = 'aaaaaa'
const t = 'bbaaaa'
console.log(isSubsequence(s, t))
