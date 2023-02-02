/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
	const M = new Map(knowledge)
	for (let i = s.indexOf('('); i !== -1; i = s.indexOf('(')) {
		const j = s.indexOf(')', i)
		const k = s.substring(i + 1, j)
    const v = M.has(k) ? M.get(k) : '?'
		s = s.replace(s.substring(i, j + 1), v)
	}
	return s
}

const s = '(name)is(age)yearsold'
const knowledge = [
	['name', 'bob'],
	['age', 'two']
]
const x = evaluate(s, knowledge)
console.log(x)
