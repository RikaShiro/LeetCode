/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	const n = coins.length
	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0
  for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= amount; j++) {
      const p = Math.floor(j / coins[i - 1])
      for (let k = 0; k <= p; k++) {
				dp[j] = Math.min(dp[j], dp[j - k * coins[i - 1]] + k)
			}
		}
  }
	return dp[amount] === Infinity ? -1 : dp[amount]
}

const coins = [1, 2, 5]
const amount = 11
console.log(coinChange(coins, amount))