/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	const n = graph.length
	const paths = []
	DFS(0, [])
	return paths

	function DFS(u, path) {
		path.push(u)
		if (u === n - 1) {
			paths.push([...path])
    } else {
      for (const v of graph[u]) {
				DFS(v, path)
			}
    }
		path.pop()
	}
}

const G = [[1, 2], [3], [3], []]
console.log(allPathsSourceTarget(G))