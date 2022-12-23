/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let [low, high] = [1, numbers.length - 1]
  for (let i = 0; i < high; i++) {
    const j = search(target - numbers[i])
    console.log(i, j)
		if (j === -1) {
			return [-1, -1]
		} else if (numbers[i] + numbers[j] === target) {
			return [i, j]
		} else {
			low = i + 2
			high = j
		}
	}
	return [-1, -1]

  function search(k) {
		let idx = -1
    while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			if (numbers[mid] < k) {
				idx = mid
				low = mid + 1
			} else if (numbers[mid] > k) {
				high = mid - 1
			} else {
				return mid
			}
		}
		return idx
	}
}

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target))