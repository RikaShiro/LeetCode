function mergeSort(nums, low, high) {
	if (low === high) return [nums[low]]
  else if (low === high - 1) {
    if (nums[low] > nums[high]) {
      return [nums[high], nums[low]]
    } else {
      return [nums[low], nums[high]] 
    }
	}
	const mid = Math.floor((low + high) / 2)
	const x = mergeSort(nums, low, mid - 1)
	const y = mergeSort(nums, mid, high)
	return merge(x, y)

	function merge(x, y) {
		const A = []
		let [p, q] = [0, 0]
		const [nx, ny] = [x.length, y.length]
		while (p < nx && q < ny) {
			const a = x[p]
			const b = y[q]
			if (a < b) {
				A.push(a)
				p++
			} else {
				A.push(b)
				q++
			}
		}
		if (p === nx) {
			for (; q < ny; q++) {
				A.push(y[q])
			}
		} else {
			for (; p < nx; p++) {
				A.push(x[p])
			}
		}
		return A
	}
}

const A = [3, 4, 5, 1, 2, 3, 2, 5, 6, 7, 2, 1, 3, 4, 2, 8, 8, 1, 2]
const x = mergeSort(A, 0, A.length - 1)
console.log(x)