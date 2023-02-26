class Heap {
	constructor(data = [], compare = (a, b) => a - b) {
		this.data = data
		this.compare = compare
		this.heapify()
	}

	heapify() {
		if (this.size() < 2) return
		for (let i = 1; i < this.size(); i++) {
			this.up(i)
		}
	}

	top() {
		if (this.size() === 0) return null
		return this.data[0]
	}

	push(value) {
		this.data.push(value)
		this.up(this.size() - 1)
	}

	pop() {
		if (this.size() === 0) {
			return null
		}
		const result = this.data[0]
		const last = this.data.pop()
		if (this.size() !== 0) {
			this.data[0] = last
			this.down(0)
		}
		return result
	}

	up(i) {
		while (i > 0) {
			const parent = Math.floor((i - 1) / 2)
			if (this.compare(this.data[i], this.data[parent]) < 0) {
				this.swap(i, parent)
				i = parent
			} else {
				break
			}
		}
	}

	down(i) {
		const n = this.size()
		while (true) {
			const left = i * 2 + 1
			const right = i * 2 + 2
			let j = i
			if (left < n && this.compare(this.data[left], this.data[j]) < 0) {
				j = left
			}
			if (right < n && this.compare(this.data[right], this.data[j]) < 0) {
				j = right
			}
			if (i !== j) {
				this.swap(i, j)
				i = j
			} else {
				break
			}
		}
	}

	swap(i, j) {
		;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
	}

	size() {
		return this.data.length
	}
}
