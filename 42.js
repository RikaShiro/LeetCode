/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	const n = height.length
	let ans = 0
	const stk = []
	for (let i = 0; i < n; i++) {
		let floor = null
		while (stk.length > 0 && height[stk.at(-1)] <= height[i]) {
			const j = stk.pop()
			if (floor !== null && i - j >= 2) {
				ans += (i - j - 1) * (height[j] - floor)
			}
			floor = height[j]
    }
    stk.push(i)
    console.log(stk, ans)
	}
	return ans
}
const height = [4, 2, 0, 3, 2, 5]
console.log(trap(height))
