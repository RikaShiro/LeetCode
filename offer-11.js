/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
	const n = numbers.length
	let [left, right] = [0, n - 1]
  while (left <= right) {
    console.log(left, right)
		if (left >= right - 1) {
			return numbers[left] < numbers[right] ? numbers[left] : numbers[right]
		}
		const mid = Math.floor((left + right) / 2)
		if (numbers[left] >= numbers[mid] && numbers[right] >= numbers[mid]) {
			right = mid
		} else if (
			numbers[left] <= numbers[mid] &&
			numbers[right] <= numbers[mid]
		) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return null
}

const a = [1, 3, 3]
console.log(minArray(a))

// 此题非常tricky
// case 1: A[left] > A[right]
// 数组一定发生了旋转 分2类讨论
// mid在左侧: 一定存在 A[mid] >= A[left] 
// mid在右侧: 一定存在 A[mid] < A[left] < A[right]

// case 2: A[left] < A[right]
// 数组没有发生旋转 直接返回A[left]

// case 3: A[left] === A[right]
// 数组可能发生旋转 也可能没有旋转
// A[mid] < A[right]: 数组发生了旋转 位置在left与mid之间
// A[mid] === A[right]: 无法确认数组是否发生了旋转 只能left ++
// A[mid] > A[right]: 数组发生了旋转 位置在mid与right之间