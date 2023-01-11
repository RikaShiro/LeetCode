/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1] - b[1]
		} else {
			return a[0] - b[0]
		}
	})
	const ans = []
	const n = intervals.length
	let [start, end] = intervals[0]
	for (let i = 1; i < n; i++) {
		const [x, y] = intervals[i]
		if (x <= end) {
			end = Math.max(end, y)
		} else {
			ans.push([start, end])
			;[start, end] = [x, y]
		}
	}
	ans.push([start, end])
	return ans
}

const intervals = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18]
]
const x = merge(intervals)
console.log(x)
