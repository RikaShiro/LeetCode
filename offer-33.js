/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
	const n = postorder.length
	console.log(postorder)
	if (n === 1) {
		return true
	}
	const x = postorder[n - 1]
	let [left, right] = [null, null]
	for (let i = n - 2; i >= 0; i--) {
		if (postorder[i] > x) {
			if (left !== null) {
				return false
			} else {
				right = i
			}
		} else if (left === null) {
			left = i
			if (right !== null) {
				if (right !== left + 1) {
					return false
				} else {
					left = postorder.slice(0, left + 1)
					right = postorder.slice(right, n - 1)
					return verifyPostorder(left) && verifyPostorder(right)
				}
			}
		}
	}
	return verifyPostorder(postorder.slice(0, n - 1))
}

const postorder = [5, 4, 3, 2, 1]
console.log(verifyPostorder(postorder))
// 注意2个base cases: n === 0 和 n === 1