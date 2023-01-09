/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	const n = s.length
	let end = null
  for (let i = n - 1; i >= 0; i--) {
    console.log(i, end)
    if (s[i] === ' ') {
      if (end !== null) {
        return end - i
      }
    } else if (end === null) {
      end = i
		}
	}
	return end + 1
}

const s = '   fly me   to   the moon  '
const x = lengthOfLastWord(s)
console.log(x)