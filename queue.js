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
        return this.items[0]
    }
    isEmpty() {
        return this.items.length == 0
    }
}