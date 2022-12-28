/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
	const n = arr.length
  quickSelect(0, n - 1)
  console.log(arr)
	return arr.slice(0, k)

  function quickSelect(low, high) {
    if (low >= high) return
    const idx = partition()
		if (idx < k - 1) {
			quickSelect(idx + 1, high)
		} else if (idx > k - 1) {
			quickSelect(low, idx - 1)
		}

		function partition() {
			const x = arr[high]
			let i = low
			for (let j = low; j < high; j++) {
				if (arr[j] <= x) {
					;[arr[i], arr[j]] = [arr[j], arr[i]]
					i++
				}
			}
			;[arr[i], arr[high]] = [arr[high], arr[i]]
			return i
		}
	}
}

const arr = [1, 3, 5, 7, 2, 4, 6, 8]
const k = 4
const x = smallestK(arr, k)
console.log(x)