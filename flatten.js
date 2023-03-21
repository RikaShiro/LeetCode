function flatten(obj) {
	const ans = {}
	for (const k in obj) {
		DFS([k], obj[k])
	}
	return ans

	function DFS(arr, v) {
		if (typeof v === 'object') {
			for (const k in v) {
				DFS([...arr, k], v[k])
			}
		} else {
			ans[arr.join('.')] = v
		}
	}
}

const o = {
	a: {
		b: {
			c: 1,
			d: 2
		},
		e: 3
	},
	f: {
		g: 2
	}
}
const x = flatten(o)
console.log(x)