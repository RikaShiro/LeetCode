/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
	const n = str.length
	for (let i = 0; i < n; i++) {
		if (str[i] !== ' ') {
			str = str.substring(i)
			break
		}
	}
	const low = '0'.charCodeAt()
	const high = '9'.charCodeAt()
	let positive = true
	str = checkFirstChar()
	if (!str) {
		return 0
	}
	const ub = positive ? 2 ** 31 - 1 : 2 ** 31
	let num = 0
	for (const i of str) {
		const cc = i.charCodeAt()
		if ((cc >= low) & (cc <= high)) {
			num *= 10
			num += Number(i)
			if (num > ub) {
				num = ub
			}
		} else {
			break
		}
	}
	return positive ? num : -num

  function checkFirstChar() {
    if (!str) {
      return null
    }
		let init = str[0]
		if (init === '+') {
			return str.substring(1)
		} else if (init === '-') {
			positive = false
			return str.substring(1)
		} else {
			init = init.charCodeAt()
			if (init >= low && init <= high) {
				return str
			} else {
				return null
			}
		}
	}
}

const str = '42'
const x = strToInt(str)
console.log(x)
