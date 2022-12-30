/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	coins.sort((a, b) => a - b)
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
	for (let i = 1; i <= amount; i++) {
		for (const j of coins) {
			if (i >= j) {
				dp[i] = Math.min(dp[i], dp[i - j] + 1)
			} else {
				break
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount]
}

const coins = [1, 2, 5]
const amount = 11
const x = coinChange(coins, amount)
console.log(x)