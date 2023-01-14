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
const breadthFirst = (graph, startPoint) => {
    const queue = [startPoint]
    while (queue.length !== 0) {
        const current = queue.shift()
        console.log(current)
        for (let neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }

}
//has path using breadth first 
const haspath = (graph, src, dst) => {
    const queue = [src]
    while (queue.length !== 0) {
        const current = queue.shift()
        if (current === dst) return true
        for (let neighbour of graph[current]) {
            queue.push * neighbour
        }
    }
    return false
}

//has path using depth first and recusion
const hasPathRecursive = (graph, src, dst) => {
    if (src === dst) return true
    for (let neighbour of graph[src]) {
        if (hasPathRecursive(graph, neighbour, dst) === true) {
            return true
        }
    }
    return false
}
depthFirst(graph, "a")
breadthFirst(graph, "a")