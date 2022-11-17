/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	const ns = s.length
	const nt = t.length
	if (ns < nt) {
		return ''
	}
	const A = {}
	for (const i of t) {
		if (i in A) {
			A[i]--
		} else {
			A[i] = -1
		}
	}
	for (const i of s.substring(0, nt)) {
		if (i in A) {
			A[i]++
		}
	}
	if (isValid()) {
		return s.substring(0, nt)
	}
	let start = 0
	let ans = null
	for (let i = nt; i < ns; i++) {
		const k = s[i]
		if (k in A) {
			A[k]++
		}
		if (ans !== null) {
			if (s[start] in A) {
				A[s[start]]--
			}
			start++
    }
    console.log(JSON.stringify(A))
    if (isValid()) {
			while (canDelete(s[start])) {
				if (s[start] in A) {
					A[s[start]]--
				}
				start++
			}
      const sub = s.substring(start, i + 1)
      console.log(sub)
			if (ans === null || ans.length > sub.length) {
				ans = sub
			}
		}
	}
	return ans

	function isValid() {
		for (const k in A) {
			if (A[k] < 0) {
				return false
			}
		}
		return true
  }
  
  function canDelete(i) {
    if (i in A) {
      return A[i] > 0
    } else {
      return true
    }
  }
}

const s = 'ADOBECODEBANC'
const t = 'ABC'
console.log(minWindow(s, t))