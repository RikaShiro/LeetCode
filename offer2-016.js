/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const n = s.length
	if (n <= 1) return n
	let [start, max] = [0, 1]
	const st = new Set()
	st.add(s[0])
	for (let i = 1; i < n; i++) {
		const el = s[i]
		if (st.has(el)) {
			while (s[start] !== el) {
				st.delete(s[start])
				start++
			}
			start++
		} else {
			st.add(el)
			max = Math.max(max, st.size)
		}
		console.log(st, max)
	}
	return max
}

const s = 'nfpdmpi'
console.log(lengthOfLongestSubstring(s))