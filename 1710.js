/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
	const A = boxTypes.sort((a, b) => {
		return b[1] - a[1]
	})
	let ans = 0
	for (const [num, unit] of boxTypes) {
		if (truckSize >= num) {
			ans += num * unit
			truckSize -= num
		} else {
			ans += truckSize * unit
			truckSize = 0
		}
	}
	return ans
}

const boxTypes = [
	[5, 10],
	[2, 5],
	[4, 7],
	[3, 9]
]
const truckSize = 10
console.log(maximumUnits(boxTypes, truckSize))
