/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	const stk = []
	for (const c of s) {
		if (c === '[') {
			const { inner } = getStack()
			inner.push([])
		} else if (c === ']') {
			const { inner, outer } = getStack()
			const n = outer.at(-2)
			const v = inner.join('')
			outer.pop()
			outer.pop()
			for (let i = 0; i < n; i++) {
				outer.push(v)
			}
		} else {
			const { inner } = getStack()
			inner.push(c)
		}
  }
	return stk.join('')

	function getStack() {
		let inner = stk
		let outer = [inner]
		while (Array.isArray(inner.at(-1))) {
			inner = inner.at(-1)
			outer = outer.at(-1)
		}
		return {
			inner,
			outer
		}
	}
}

const s = '2[abc]3[cd]ef'
const x = decodeString(s)
console.log(x)