export function addFunction(graph, func) {
	return [...graph, func]
}

export function updateFunction(graph, index, func) {
	graph[index] = func
	return graph
}

export function removeFunction(graph, index) {
	return graph.filter((item, i) => i != index)
}