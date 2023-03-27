function Person(name, salary) {
	this.name = name
	this.salary = salary
}
const M = [
	[0, 0],
	[1500, 0.03],
	[4500, 0.1],
	[9000, 0.2],
	[35000, 0.25],
	[55000, 0.3],
	[80000, 0.35],
	[Infinity, 0.45]
]
const n = M.length
const A = []
A.push(
	new Person('小明', 2500),
	new Person('小军', 8000),
	new Person('小红', 100000)
)
for (const x of A) {
	calTax(x)
}

function calTax(person) {
	const { name, salary } = person
	for (let i = 1; i < n; i++) {
		const [x, rate] = M[i]
		if (salary <= x) {
			const [a, b] = M[i - 1]
			const tax = (salary - a) * rate + a * b
			console.log(`${name}应该缴纳的个人所得税是：${tax.toFixed(1)}`)
			return
		}
	}
}
