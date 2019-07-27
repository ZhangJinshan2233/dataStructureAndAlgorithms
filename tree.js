
//declare node for binarysearchtree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//declare class binarysearchtree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //insert a node

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
        } else {

            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (node.value > newNode.value) {
            if (node.left == null) {
                node.left = newNode
            } else {
                node = node.left
                this.insertNode(node, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                node = node.right
                this.insertNode(node, newNode)
            }
        }
    }

    //in order traverse
    inOrderTraverse(cb) {

        this.inOrderTraverseNode(this.root, cb)
    }

    inOrderTraverseNode(node, cb) {

        if (node !== null) {
            this.inOrderTraverseNode(node.left, cb);
            cb(node.value);
            this.inOrderTraverseNode(node.right, cb)
        }

    }

    //pre order traverse
    preOrderTraverse(cb) {

        this.preOrderTraverseNode(this.root, cb)
    }

    preOrderTraverseNode(node, cb) {

        if (node !== null) {
            cb(node.value)
            this.preOrderTraverseNode(node.left, cb)
            this.preOrderTraverseNode(node.right, cb)
        }
    }

    //post order traverse
    postOrderTraverse(cb) {

        this.postOrderTraverseNode(this.root, cb)

    }

    postOrderTraverseNode(node, cb) {

        if (node != null) {
            this.postOrderTraverseNode(node.left, cb)
            this.postOrderTraverseNode(node.right, cb)
            cb(node.value)
        }
    }

    //min

    min() {

        return this.minNode(this.root)
    }

    minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }

            return node.value
        }
        return null
    }

    //max

    max() {
        return this.maxNode(this.root)
    }

    maxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.value
        }

        return null
    }

    //search node
    search(value) {
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {

        if (node.value === value) {
            return true;
        } else if (node.value > value) {
            node = node.left;
            this.searchNode(node, value)
        } else if (node.value < value) {
            node = node.right
            this.searchNode(node, value)
        } else {
            return false
        }

    }

    //remove
    remove(value) {
      this.root=  this.removeNode(this.root, value)
    }

    removeNode(node, value) {

        if (node === null) {
            return null
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value)
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value)
            return node;
        } else {

            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node
            } else {
                let aux = this.findMinNode(node.right);
                node.value = aux.value;
                node.right = this.removeNode(node.right, aux.value);
                return node;
            }

        }


    }

    findMinNode(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };
}

