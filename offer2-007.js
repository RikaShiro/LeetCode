/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums.sort()
	const n = nums.length
	const ans = new Set()
	for (let i = 0; i <= n - 3; i++) {
    let [j, k] = [i + 1, n - 1]
    console.log(nums[i], nums[j], nums[k])
    console.log(ans)
		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k]
			if (sum > 0) {
				k--
			} else if (sum < 0) {
				j++
			} else {
				ans.add([nums[i], nums[j], nums[k]].join(','))
				j++
				k--
			}
		}
	}
	return Array.from(ans).map((x) => x.split(',').map((y) => Number(y)))
}

const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
threeSum(nums)