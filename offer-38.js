/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
	s = s.split('').sort()
	console.log(s)
	const ans = []
	const n = s.length
	const used = new Array(n).fill(false)
	const A = []
	DFS(0)
	return ans

	function DFS(idx) {
		if (idx === n) {
			console.log(A)
			ans.push(A.join(''))
			return
		}
		for (let i = 0; i < n; i++) {
			if (used[i] || (i > 0 && used[i - 1] && s[i] === s[i - 1])) {
				continue
			} else {
				used[i] = true
				A.push(s[i])
				DFS(idx + 1)
				A.pop()
				used[i] = false
			}
		}
	}
}

const s = 'aabc'
const x = permutation(s)
console.log(x)
