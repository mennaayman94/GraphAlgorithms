// build graph from edges
const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"]
]
const buildGraph = (edges) => {
    const graph = {}
    for (let edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(a)
        graph[b].push(b)
    }
    return graph
}
const haspathUndirected = (graph, src, dst, visited) => {
    if (src === dst) return true
    //avoid cyclic graph 
    if (visited.has(src)) return false
    visited.add(src)
    for (let neighbour of graph[src]) {
        if (haspathUndirected(graph, neighbour, dst, visited)) {
            return true
        }
    }
    return false
}
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    return haspathUndirected(graph, nodeA, nodeB, new Set())
}

undirectedPath(edges,"j","m")