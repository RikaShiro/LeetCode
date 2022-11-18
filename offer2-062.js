/**
 * Initialize your data structure here.
 */
function Node() {
	this.children = new Array(26).fill(null)
	this.isEnd = false
}

var Trie = function () {
	this.root = new Node()
	this.a = 'a'.charCodeAt()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	const insert = (node, i) => {
		if (i === n) {
			node.isEnd = true
			return
		}
		const x = word[i].charCodeAt() - this.a
		if (node.children[x] === null) {
			node.children[x] = new Node()
		}
		insert(node.children[x], i + 1)
	}
	const n = word.length
	insert(this.root, 0)
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	let curr = this.root
	for (const i of word) {
		const x = i.charCodeAt() - this.a
		const next = curr.children[x]
		if (next === null) {
			return false
		} else {
			curr = next
		}
	}
	return curr.isEnd
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	let curr = this.root
	for (const i of prefix) {
		const x = i.charCodeAt() - this.a
		const next = curr.children[x]
		if (next === null) {
			return false
		} else {
			curr = next
		}
	}
	return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const obj = new Trie()
obj.insert('abc')
console.log(obj.startsWith('abcd'))
console.log(obj.search('ab'))
console.log(obj.search('abc'))
