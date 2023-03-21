function deepCopy(obj) {
	if (typeof obj === 'object' && obj) {
		const copy = Array.isArray(obj) ? [] : {}
		for (const k in obj) {
			if (obj.hasOwnProperty(k)) {
				copy[k] = deepCopy(obj[k])
			}
		}
		return copy
	} else {
		return obj
	}
}

const o = { a: 1, b: { a: 2, c: [1, 2, 3], d: new Set([1, 2]) } }
console.log(deepCopy(o))
