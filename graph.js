//define dictionary
class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop(element) {
        return this.items.pop(element)
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }
}

class Queue{
    constructor(){
        this.items=[];

    }
    enqueue(element){
        this.items.push(element)
    }

    dequene(element){
        return this.items.shift(element)
    }

    font(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length===0
    }
}
class Dictionary {
    constructor() {
        this.items = {}
    }

    set(key, value) {

        this.items[key] = value;
    }

    has(key) {
        return key in this.items
    }

    delete(key) {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }
        return false
    }

    get(key) {

        return this.has(key) ? this.items[key] : undefined
    }

    values() {
        let vlaues = [];
        for (k in this.items) {
            if (this.has(k)) {
                this.values.push(this.items[k])
            }
        }

        return values
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

    keys() {
        return Object.keys(this.items)
    }

    getItems() {
        return this.items
    }
}

class Graph {

    constructor() {
        this.vertices = [];
        this.adjList = new Dictionary()
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w) {

        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v)
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + '->';
            var neighbors = this.adjList.get(this.vertices[i]);
            for (let j of neighbors) {
                s += j + ' ';
            }
            s += '\n';
        }

        return s
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