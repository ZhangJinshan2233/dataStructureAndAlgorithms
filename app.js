class Queue {

  constructor() {
    this.items = [];
  }
  enqueue(element) {

    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  font() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length;
  }

  prient() {
    console.log(this.items.toString())
  }

}

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map()
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, [])
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v)
  }

  toString() {
    var s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + '->';
      var neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s
  }

  initializeColor() {
    let color = [];
    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = 'white';
    }

    return color
  }

  bfs(v, callback) {

    var color = this.initializeColor();

   let queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
     let neighbors = this.adjList.get(u);
      color[u] = 'grey';
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black'; // {14}
      if (callback) { // {15}
        callback(u);
      }
    }

  }

  printNode(value) { //{16}
    console.log('Visited vertex: ' + value); //{17}
  }
}
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7} 
for (var i = 0; i < myVertices.length; i++) { //{8}
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString())
graph.bfs(myVertices[0], graph.printNode);