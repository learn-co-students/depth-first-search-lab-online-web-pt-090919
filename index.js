// prints out the nodes in order
function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode];
  let visited = [rootNode];

  while (stack.length != 0) {
    let currentVertex = stack.pop() //LIFO
    if (!currentVertex.discovered) {
      currentVertex.discovered = true

      findAdjacent(currentVertex.name, vertices, edges).forEach(vertex => {
        visited.push(vertex)
        stack.push(vertex)
      })
    }
  }
  return visited;
}

function findAdjacent(nodeName, vertices, edges) {
  let visitedEdges = edges.filter(edge => edge.includes(nodeName))
  let adjacentNodeNames = visitedEdges.map(edge => edge.filter(node => node != nodeName))
  let adjacentVertices = adjacentNodeNames.map(node => findNode(node, vertices))
  return adjacentVertices.filter(vertex => !vertex.discovered)
}

function findNode(nodeName, vertices) {
  return vertices.find(vertex => vertex.name == nodeName)
}