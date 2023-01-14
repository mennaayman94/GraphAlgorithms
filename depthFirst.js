const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
}
const depthFirst = (graph, startPoint) => {
    const stack = [startPoint]
    while (stack.length !== 0) {
        const current = stack.pop()
        console.log(current)
        for (let neighbour of graph[current]) {
            stack.push(neighbour)
        }
    }
}
depthFirst(graph, "a")