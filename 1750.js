/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
	if (s.length <= 1 || s[0] !== s[s.length - 1]) {
		return s.length
	} else {
		const k = s[0]
		let start = 1
		while (s[start] === k) {
			start++
		}
		let end = s.length - 2
		while (s[end] === k) {
			end--
		}
    if (start > end) {
      return 0
    } else {
      s = s.substring(start, end + 1)
      return minimumLength(s)
    }
	}
}

const s = 'cabaabac'
const x = minimumLength(s)
console.log(x)
