const Heap = require('./Heap.js')
/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
	const n = bucket.length
	let A = new Array(n)
	for (let i = 0; i < n; i++) {
		if (vat[i] === 0) {
			A[i] = 0
		} else if (bucket[i] === 0) {
			A[i] = Infinity
		} else {
			A[i] = Math.ceil(vat[i] / bucket[i])
		}
	}
  A = A.map((x, i) => [x, i])
	const heap = new Heap(A, (a, b) => b[0] - a[0])
	let ans = heap.top()[0]
  for (let op = 1; op < ans; op++) {
		const j = heap.pop()[1]
		bucket[j]++
		const x = Math.ceil(vat[j] / bucket[j])
		heap.push([x, j])
		ans = Math.min(ans, op + heap.top()[0])
	}
	return ans
}

const bucket = [9, 0, 1]
const vat = [0, 2, 2]
const x = storeWater(bucket, vat)
console.log(x)
