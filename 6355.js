/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums = nums.sort((a, b) => a - b)
	const n = nums.length
	let high = n - 1
	let ans = 0
	for (let i = 0; i < n - 1; i++) {
    const x = getLow(lower - nums[i], i + 1, high)
    if (x === Infinity) {
      continue
    }
    const y = getHigh(upper - nums[i], i + 1, high)
    if (y === -1) {
      break
    }
    console.log(x, y)
		ans += y - x + 1
		high = y
	}
	return ans

	function getLow(k, low, high) {
		let i = Infinity
		while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			if (nums[mid] >= k) {
				i = Math.min(i, mid)
				high = mid - 1
			} else {
				low = mid + 1
			}
		}
		return i
	}

	function getHigh(k, low, high) {
		let i = -1
		while (low <= high) {
			const mid = Math.floor((low + high) / 2)
			if (nums[mid] <= k) {
				i = Math.max(i, mid)
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
		return i
	}
}

const nums = [1, 7, 9, 2, 5]
const lower = 11
const upper = 11
const x = countFairPairs(nums, lower, upper)
console.log(x)