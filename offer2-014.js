/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	const n1 = s1.length
	const n2 = s2.length
	if (n2 < n1) return false
	const dict = toDict(s1)
	const window = toDict(s2.substring(0, n1))
	let start = 0
	if (isSame()) {
		return true
	}
	for (let i = n1; i < n2; i++) {
		add(s2[i])
		remove(s2[start])
		start++
		if (isSame()) {
			return true
    }
    console.log(JSON.stringify(dict), JSON.stringify(window))
	}
	return false

	function toDict(s) {
		const A = {}
		for (let i of s) {
			if (i in A) {
				A[i]++
			} else {
				A[i] = 1
			}
		}
		return A
	}

	function isSame() {
		return JSON.stringify(dict) === JSON.stringify(window)
	}

	function add(x) {
		if (x in window) {
			window[x]++
		} else {
			window[x] = 1
		}
	}

	function remove(x) {
		window[x]--
		if (window[x] === 0) {
			delete window[x]
		}
	}
}

const s1 = 'ab'
const s2 = 'eidbaooo'
console.log(checkInclusion(s1, s2))
