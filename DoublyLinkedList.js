class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.header = null;
        this.tail = null;
        this.length = 0;
    }

    insert(position, element) {
        if (position < 0 || position > this.length) {
            return false
        } else {
            let newNode = new Node(element)
            let current = this.header;
            let previous;
            let index = 0
            if (position === 0) {

                if (!this.header) {
                    this.header = newNode;
                    this.tail = newNode
                } else {
                    newNode.next = current;
                    current.pre = newNode;
                    this.header = newNode
                }

            } else if (position === this.length) {

                current = this.tail;
                current.next = newNode
                newNode.prev = current;
                this.tail = newNode

            } else {

                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }

                newNode.next = current;
                previous.next = newNode;
                current.pre = newNode;
                newNode.pre = previous
            }
        }

        this.length++;
        return true;
    }

    removeAt(position) {

        let current = this.header;
        let previous;
        let index = 0;
        if (position < 0 || position > this.length) {
            return null
        } else {
            if (position === 0) {
                this.header = current.next
                if (this.length === 1) {
                    this.tail = null
                } else {
                    this.header.prev = null
                }
            } else if (position === this.length - 1) {

                current = this.tail;
                this.tail = current.pre;
                this.tail.next = null
            } else {

                while (index < position) {

                    previous = current
                    current = current.next;
                    index++
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
        }

        this.length--;
        return current.element
    }
}