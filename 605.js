/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	const len = flowerbed.length
	for (let i = 0; i < len; i++) {
    if (isValid(i)) {
			flowerbed[i] = 1
			n--
			if (n === 0) {
				return true
			}
		}
	}
	return false

	function isValid(i) {
		if (flowerbed[i] === 1) {
			return false
		} else if (i > 0 && flowerbed[i - 1] === 1) {
			return false
		} else if (i < len - 1 && flowerbed[i + 1] === 1) {
			return false
		} else {
			return true
		}
	}
}

const flowerbed = [1, 0, 0, 0, 0, 1]
const n = 2
const x = canPlaceFlowers(flowerbed, n)
console.log(x)