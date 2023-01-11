/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
	const n = nums.length
	const stk = []
	for (let i = 0; i < n; i++) {
		const x = nums[i]
		if (isSmaller(x)) {
			do {
				stk.pop()
			} while (isSmaller(x))
			break
		} else {
			stk.push(i)
		}
  }
  if (stk.length === n) {
    return 0
  }
	let left = stk.length > 0 ? stk.at(-1) : -1
	stk.length = 0
	for (let i = n - 1; i >= 0; i--) {
		const x = nums[i]
		if (isBigger(x)) {
			do {
				stk.pop()
			} while (isBigger(x))
			break
		} else {
			stk.push(i)
		}
	}
	let right = stk.length > 0 ? stk.at(-1) : n
	const A = nums.slice(left, right + 1)
	const a = countBigger(nums.slice(0, left), Math.min(...A))
	const b = countSmaller(nums.slice(right, n), Math.max(...A))
	return right - left - 1 + a + b

	function isSmaller(x) {
		return stk.length > 0 && x < nums[stk.at(-1)]
	}
	function isBigger(x) {
		return stk.length > 0 && x > nums[stk.at(-1)]
	}
	function countBigger(A, target) {
		const n = A.length
		let count = 0
		for (let i = n; i >= 0; i--) {
			if (A[i] > target) {
				count++
			} else {
				break
			}
		}
		return count
  }
  function countSmaller(A, target) {
    const n = A.length
		let count = 0
		for (let i = 0; i < n; i++) {
			if (A[i] < target) {
				count++
			} else {
				break
			}
		}
		return count
  }
}

const nums = [1, 5, 3, 2, 4]
const x = findUnsortedSubarray(nums)
console.log(x)
