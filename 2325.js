/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
	const M = new Map()
	let i = 0
	const base = 'a'.charCodeAt()
	for (const k of key) {
		if (!M.has(k)) {
			const v = String.fromCharCode(base + i)
			M.set(k, v)
			i++
			if (i === 26) {
				break
			}
		}
  }
  console.log(M)
	return message
		.split('')
		.map((x) => {
			const cc = x.charCodeAt()
			const diff = cc - base
			if (diff >= 0 && diff <= 25) {
				return M.get(x)
			} else {
				return x
			}
		})
		.join('')
}
const key = 'the quick brown fox jumps over the lazy dog'
const message = 'vkbs bs t suepuv'
const x = decodeMessage(key, message)
console.log(x)
