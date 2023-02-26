/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
	const n = points.length
	let ans = 0
	for (let i = 0; i < n - 2; i++) {
		for (let j = i + 1; j < n - 1; j++) {
			for (let k = j + 1; k < n; k++) {
				const area = getArea(points[i], points[j], points[k])
				console.log(area)
				ans = Math.max(ans, area)
			}
		}
	}
	return ans

	function getArea(a, b, c) {
		const x = getDistance(a, b)
		const y = getDistance(b, c)
		const z = getDistance(a, c)
		if (x + y <= z || x + z <= y || y + z <= x) {
			return 0
		}
    console.log(x, y, z)
		const p = (x + y + z) / 2
		return Math.sqrt(p * (p - x) * (p - y) * (p - z))

		function getDistance(a, b) {
			const x = a[0] - b[0]
			const y = a[1] - b[1]
			return Math.sqrt(x ** 2 + y ** 2)
		}
	}
}

const points = [
	[-35, 19],
	[40, 19],
	[27, -20],
	[35, -3],
	[44, 20],
	[22, -21],
	[35, 33],
	[-19, 42],
	[11, 47],
	[11, 37]
]
const x = largestTriangleArea(points)
console.log(x)
