/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	const ans = []
	while (columnNumber > 26) {
    const x = columnNumber % 27
    ans.push(x)
    columnNumber /= 26
    columnNumber = Math.floor(columnNumber)
	}
	ans.push(columnNumber)
  const Acc = 'A'.charCodeAt()
  console.log(ans)
	return ans.map((x) => String.fromCharCode(Acc - 1 + x)).reverse().join('')
}

const n = 2147483647
const x = convertToTitle(n)
console.log(x)