/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  s1 = filter(s1)
  s2 = filter(s2)
  console.log(s1, s2)
	for (const x of s1) {
		if (s2.has(x)) {
			s1.delete(x)
			s2.delete(x)
		}
	}
	return Array.from(s1).concat(Array.from(s2))

	function filter(s) {
		s = s.split(' ')
		const M = {}
		for (const x of s) {
			if (x in M) {
				M[x]++
			} else {
				M[x] = 1
			}
		}
		return new Set(
			Array.from(Object.entries(M))
				.filter((x) => x[1] === 1)
				.map((x) => x[0])
		)
	}
}

const s1 = 's z z z s'
const s2 = 's z ejt'
const x = uncommonFromSentences(s1, s2)
console.log(x)
