class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.header = null;
        this.length = 0;
    }

    append(element) {

        let newNode = new Node(element);
        if (this.header === null) {
            this.header = newNode
        } else {
            let current = this.header
            while (current.next) {

                let current = current.next
            }
            current.next = newNode

        }
        this.length++
    }

    removeAt(position) {
        let current = this.header;
        let previous = null
        let i = 0;
        if (position < 0 || position > this.length) {
            return false
        } else {
            if (position === 0) {
                this.header = current.next
            } else {
                while (i < position) {
                    previous = current;
                    current = current.next;
                    i++
                }
            }
            previous.next = current.next
        }
        this.length--
        return true
    }

    insert(position, element) {
        let newNode = new Node(element);
        let current = this.header;
        let previous = null;
        let index = 0;
        if (position < 0 || position > this.length) {
            return false
        } else {
            if (position === 0) {
                this.header = newNode;
                this.header.next = current
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++
                }

                newNode.next = current;
                previous.next = newNode
            }

        }

        this.length++
        return true
    }

    toString() {
        let str = '';
        let current = this.header;
        while (current) {
            str += current.element + (current.next ? 'n' : '');
            current = current.next;

        }
        return str
    }

    indexOf(element){

        let index=-1;
        let current=this.header;
        while(current){
            if(current.element==element){
                return index;
            }
            current=current.next;
            index++
        }
        return -1
    }
    size(){
        return this.length
    }

    isEmpty(){
        this.length===0
    }
}
