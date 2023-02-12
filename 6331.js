/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function (prizePositions, k) {
	let ans = 0
	k++
	const n = prizePositions.length
	for (let i = 0; i < 2; i++) {
		const start = find(prizePositions, k)
    const end = Math.min(n, start + k)
		for (let j = start; j < end; j++) {
			ans += prizePositions[j]
			prizePositions[j] = 0
		}
	}
	return ans

  function find(A, k) {
		let sum = 0
		for (let i = 0; i < Math.min(k, n); i++) {
			sum += A[i]
		}
		let start = 0
		let max = sum
		for (let i = k; i < n; i++) {
			sum += A[i]
      sum -= A[i - k]
      if (sum > max) {
        start = i
        max = sum
      }
    }
    console.log(start, start+k-1, max, A)
    return start
	}
}

const prizePositions = [1, 1, 2, 2, 3, 3, 5]
const k = 2
const x = maximizeWin(prizePositions, k)
console.log(x)