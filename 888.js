/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
	const A = aliceSizes.sort((a, b) => a - b)
	const B = bobSizes.sort((a, b) => a - b)
	const suma = A.reduce((prev, curr) => prev + curr, 0)
	const sumb = B.reduce((prev, curr) => prev + curr, 0)
	const diff = suma - sumb
	const [n1, n2] = [A.length, B.length]
	let i = diff > 0 ? bs(A, diff, 0, n1 - 1) : 0
	let j = 0
	for (; i < n1; i++) {
		const k = A[i] - diff / 2
		const m = bs(B, k, j, n2 - 1)
		if (B[m] === k) {
			return [A[i], B[m]]
		} else {
			j = m
		}
	}

	function bs(arr, k, low, high) {
		let i = Infinity
		while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			const x = arr[mid]
			if (x === k) {
				return mid
			} else if (x < k) {
				low = mid + 1
			} else {
				high = mid - 1
				i = mid
			}
		}
		return i
	}
}

const A = [2, 2]
const B = [1, 1]
const x = fairCandySwap(A, B)
console.log(x)
