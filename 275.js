/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	const n = citations.length
	let [low, high] = [0, n - 1]
	let idx = 0
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		const num = n - mid
		if (citations[mid] < num) {
			idx = Math.max(citations[mid], idx)
			low = mid + 1
		} else if (citations[mid] > num) {
			idx = Math.max(num, idx)
			high = mid - 1
		} else {
			return num
		}
	}
	return idx
}


const citations = [1, 4, 7, 9]
const x = hIndex(citations)
console.log(x)