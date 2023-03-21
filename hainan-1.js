function containsRepeatingLetter(str) {
	const acc = 'a'.charCodeAt()
	str = str
		.split('')
		.map((x) => x.toLowerCase())
		.filter((x) => {
			const cc = x.charCodeAt()
			return cc >= acc && cc <= acc + 25
		})
	const n = str.length
	for (let i = 1; i < n; i++) {
		if (str[i] === str[i - 1]) {
			return true
		}
	}
	return false
}

const str = 'raTtle'
const x = containsRepeatingLetter(str)
console.log(x)
