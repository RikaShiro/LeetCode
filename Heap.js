class MinHeap {
	constructor() {
		this.A = []
	}
	swap(i, j) {
		;[this.A[i], this.A[j]] = [this.A[j], this.A[i]]
	}
	getParentIndex(i) {
		return Math.floor((i - 1) / 2)
	}
	getLeftIndex(i) {
		return 2 * i + 1
	}
	getRightIndex(i) {
		return 2 * i + 2
	}
	upShift(i) {
		if (i == 0) return
		const parentIndex = this.getParentIndex(i)
		if (this.A[parentIndex] > this.A[i]) {
			this.swap(i, parentIndex)
			this.upShift(parentIndex)
		}
	}
	downShift(i) {
		const left = this.getLeftIndex(i)
		const right = this.getRightIndex(i)
		if (this.A[left] < this.A[i]) {
			this.swap(left, i)
			this.downShift(left)
		}
		if (this.A[right] < this.A[i]) {
			this.swap(right, i)
			this.downShift(right)
		}
	}
	insert(value) {
		this.A.push(value)
		this.upShift(this.A.length - 1)
	}
	pop() {
		this.A[0] = this.A.pop()
		this.downShift(0)
	}
	top() {
		return this.A[0]
	}
	size() {
		return this.A.length
	}
}

class MaxHeap {}
module.exports = { MinHeap, MaxHeap }
